package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/AAGAraujo/angolar-todo/server/models"
	u "github.com/AAGAraujo/angolar-todo/server/utils"
)

var Authenticate = func(w http.ResponseWriter, r *http.Request) {

	user := &models.User{}
	err := json.NewDecoder(r.Body).Decode(user) //decode the request body into struct and failed if any error occur
	if err != nil {
		u.Respond(w, u.Message(false, "Invalid request"), http.StatusBadRequest)
		return
	}

	resp := models.Login(user.Email, user.Password, user.GoogleUserID, user.FacebookUserID)

	u.Respond(w, resp, http.StatusOK)
}

var RenewToken = func(w http.ResponseWriter, r *http.Request) {

	if userID := r.Context().Value("user"); userID != nil {
		user := models.GetUser(userID.(uint))

		user.GenerateToken()
		user.Password = ""
		response := u.Message(true, "Successfully Renewed Token")
		response["user"] = user
		w.Header().Add("token", user.Token)
		u.Respond(w, response, http.StatusOK)
		return
	}
	response := u.Message(false, "User not found!")
	u.Respond(w, response, http.StatusForbidden)
}
