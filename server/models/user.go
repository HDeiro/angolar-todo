package models

import (
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"

	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"github.com/dgrijalva/jwt-go"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

// Token JWT claims struct
type Token struct {
	UserID         uint
	ExpirationTime int64
	jwt.StandardClaims
}

// User base struct for user
type User struct {
	gorm.Model
	Name             string `json:"name,omitempty"`
	Email            string `json:"email,omitempty"`
	Password         string `json:"password,omitempty"`
	Token            string `json:"token,omitempty"`
	GooglePhotoURL   string `json:"google_photo_url,omitempty"`
	GoogleUserID     string `json:"google_user_id,omitempty"`
	FacebookPhotoURL string `json:"facebook_photo_url,omitempty"`
	FacebookUserID   string `json:"facebook_user_id,omitempty"`
}

//Validate incoming user details...
func (user *User) Validate() (map[string]interface{}, bool) {

	if !strings.Contains(user.Email, "@") {
		return u.Message(false, "Email address is required"), false
	}

	if len(user.Password) < 6 && user.GoogleUserID == "" && user.FacebookUserID == "" {
		return u.Message(false, "Password is required"), false
	}

	//Email must be unique
	temp := &User{}

	//check for errors and duplicate emails
	err := GetDB().Table("users").Where("email = ?", user.Email).First(temp).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		fmt.Printf("err = %s", err)
		return u.Message(false, "Connection error. Please retry"), false
	}
	if temp.Email != "" {
		return u.Message(false, "Email address already in use by another user."), false
	}

	return u.Message(false, "Requirement passed"), true
}

// GenerateToken for login and create user and renew token
func (user *User) GenerateToken() {

	value, _ := strconv.Atoi(os.Getenv("token_exp"))

	//Create new JWT token for the newly registered account
	tk := &Token{UserID: uint(user.ID), ExpirationTime: time.Now().Add(time.Duration(value) * time.Second).Unix()}

	token := jwt.NewWithClaims(jwt.GetSigningMethod("HS256"), tk)
	tokenString, _ := token.SignedString([]byte(os.Getenv("token_password")))
	user.Token = tokenString

}

// Create a user
func (user *User) Create() map[string]interface{} {

	if resp, ok := user.Validate(); !ok {
		return resp
	}

	if user.Password != "" {
		hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
		user.Password = string(hashedPassword)
	}

	GetDB().Create(user)

	if user.ID <= 0 {
		return u.Message(false, "Failed to create account, connection error.")
	}

	user.GenerateToken()

	user.Password = "" //delete password
	user.GoogleUserID = ""
	user.FacebookUserID = ""

	response := u.Message(true, "Account has been created")
	response["user"] = user
	return response
}

// Login a user
func Login(email, password, googleUserID, facebookUserID string) map[string]interface{} {

	user := &User{}
	err := GetDB().Table("users").Where("email = ?", email).First(user).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return u.Message(false, "Email address not found")
		}
		return u.Message(false, "Connection error. Please retry")
	}

	if password != "" {
		err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
		if err != nil && err == bcrypt.ErrMismatchedHashAndPassword { //Password does not match!
			return u.Message(false, "Invalid login credentials. Please try again")
		}
	} else if googleUserID != "" {
		if user.GoogleUserID != googleUserID {
			return u.Message(false, "Invalid login credentials. Please try again")
		}
	} else {
		if user.FacebookUserID != facebookUserID {
			return u.Message(false, "Invalid login credentials. Please try again")
		}
	}

	//Worked! Logged In
	user.Password = ""
	user.FacebookUserID = ""
	user.GoogleUserID = ""

	user.GenerateToken()

	resp := u.Message(true, "Logged In")
	resp["user"] = user
	return resp
}

// GetUser base on id
func GetUser(u uint) *User {

	user := &User{}
	GetDB().Table("users").Where("id = ?", u).First(user)
	if user.Email == "" { //User not found!
		return nil
	}

	user.Password = ""
	user.FacebookUserID = ""
	user.GoogleUserID = ""
	return user
}

// Update user
func (user *User) Update() map[string]interface{} {

	if resp, ok := user.Validate(); !ok {
		return resp
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	user.Password = string(hashedPassword)

	GetDB().Update(user)

	if user.ID <= 0 {
		return u.Message(false, "Failed to update account, connection error.")
	}

	user.GenerateToken()

	user.Password = "" //delete password
	user.FacebookUserID = ""
	user.GoogleUserID = ""

	response := u.Message(true, "Account has been updated")
	response["user"] = user
	return response
}

// Delete user
func (user *User) Delete() map[string]interface{} {

	GetDB().Delete(user)

	response := u.Message(true, "Account has been deleted")
	response["user"] = user
	return response
}

// GetUsers return a list of users
func GetUsers(filters *Filter) []*User {

	user := make([]*User, 0)
	var err error

	if filters != nil {
		err = GetDB().Select(filters.Column).Find(&user).Error
	} else {
		err = GetDB().Select([]string{"id", "name", "email", "google_photo_url", "facebook_photo_url"}).Find(&user).Error
	}

	if err != nil {
		return nil
	}
	return user
}
