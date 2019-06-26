package models

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/jinzhu/gorm"
	"strings"
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"golang.org/x/crypto/bcrypt"
	"os"
	"fmt"
)

/*
JWT claims struct
*/
type Token struct {
	UserId uint
	jwt.StandardClaims
}

type User struct {
	gorm.Model
	Id			int    `json:id`
	Name 		string `json:"name"`
	Email 		string `json:"email"`
	Password 	string `json:"password"`
	Token       string `json:"token"`
}

//Validate incoming user details...
func (user *User) Validate() (map[string] interface{}, bool) {

	if !strings.Contains(user.Email, "@") {
		return u.Message(false, "Email address is required"), false
	}

	if len(user.Password) < 6 {
		return u.Message(false, "Password is required"), false
	}

	//Email must be unique
	temp := &User{}

	//check for errors and duplicate emails
	err := GetDB().Table("users").Where("email = ?", user.Email).First(temp).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		fmt.Printf("err = %s",err)
		return u.Message(false, "Connection error. Please retry"), false
	}
	if temp.Email != "" && temp.Id != user.Id{
		return u.Message(false, "Email address already in use by another user."), false
	}

	return u.Message(false, "Requirement passed"), true
}

func (user *User) generateToken(){

	//Create new JWT token for the newly registered account
	tk := &Token{UserId: user.ID}
	token := jwt.NewWithClaims(jwt.GetSigningMethod("HS256"), tk)
	tokenString, _ := token.SignedString([]byte(os.Getenv("token_password")))
	user.Token = tokenString

}

func (user *User) Create() (map[string] interface{}) {

	if resp, ok := user.Validate(); !ok {
		return resp
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	user.Password = string(hashedPassword)

	GetDB().Create(user)

	if user.ID <= 0 {
		return u.Message(false, "Failed to create account, connection error.")
	}

	user.generateToken();

	user.Password = "" //delete password

	response := u.Message(true, "Account has been created")
	response["user"] = user // email, nome, token, password =""
	return response
}

func Login(email, password string) (map[string]interface{}) {

	user := &User{}
	err := GetDB().Table("users").Where("email = ?", email).First(user).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return u.Message(false, "Email address not found")
		}
		return u.Message(false, "Connection error. Please retry")
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword { //Password does not match!
		return u.Message(false, "Invalid login credentials. Please try again")
	}
	//Worked! Logged In
	user.Password = ""

	user.generateToken();

	resp := u.Message(true, "Logged In")
	resp["user"] = user
	return resp
}

func GetUser(u uint) *User {

	user := &User{}
	GetDB().Table("users").Where("id = ?", u).First(user)
	if user.Email == "" { //User not found!
		return nil
	}

	user.Password = ""
	return user
}

func (user *User) Update() (map[string] interface{}) {

	if resp, ok := user.Validate(); !ok {
		return resp
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	user.Password = string(hashedPassword)

	GetDB().Update(user)

	if user.ID <= 0 {
		return u.Message(false, "Failed to update account, connection error.")
	}

	user.generateToken();

	user.Password = "" //delete password

	response := u.Message(true, "Account has been updated")
	response["user"] = user 
	return response
}

func (user *User) Delete() (map[string] interface{}) {
	
	GetDB().Delete(user)

	response := u.Message(true, "Account has been deleted")
	response["user"] = user 
	return response
}


func GetUsers() ([]*User) {

	user := make([]*User, 0)
	error := GetDB().Table("users").Find(&user).Error
	if error != nil {
		return nil
	}
	return user
}