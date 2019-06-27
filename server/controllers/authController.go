package controllers

import (
	"net/http"
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"github.com/AAGAraujo/angolar-todo/server/models"
	"encoding/json"
)

var Authenticate = func(w http.ResponseWriter, r *http.Request) {

	account := &models.User{}
	err := json.NewDecoder(r.Body).Decode(account) //decode the request body into struct and failed if any error occur
	if err != nil {
		u.Respond(w, u.Message(false, "Invalid request"))
		return
	}

	resp := models.Login(account.Email, account.Password)

	if resp["status"] == true {
		w.WriteHeader(http.StatusOK)
	}else{
		w.WriteHeader(http.StatusUnauthorized)
	}

	u.Respond(w, resp)
}
