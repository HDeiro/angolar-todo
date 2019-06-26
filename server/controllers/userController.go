package controllers

import (
	"net/http"
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"github.com/AAGAraujo/angolar-todo/server/models"
	"encoding/json"
	"github.com/gorilla/mux"
	"strconv"
)

var CreateUser = func(w http.ResponseWriter, r *http.Request) {

	user := &models.User{}
	err := json.NewDecoder(r.Body).Decode(user) //decode the request body into struct and failed if any error occur
	if err != nil {
		u.Respond(w, u.Message(false, "Invalid request"))
		return
	}

	resp := user.Create() //Create account
	u.Respond(w, resp)
}

var UpdateUser = func(w http.ResponseWriter, r *http.Request) {

	user := &models.User{}
	err := json.NewDecoder(r.Body).Decode(user) //decode the request body into struct and failed if any error occur
	if err != nil {
		u.Respond(w, u.Message(false, "Invalid request"))
		return
	}

	resp := user.Update()
	u.Respond(w, resp)
}

var DeleteUser = func(w http.ResponseWriter, r *http.Request) {

	user := &models.User{}
	err := json.NewDecoder(r.Body).Decode(user) //decode the request body into struct and failed if any error occur
	if err != nil {
		u.Respond(w, u.Message(false, "Invalid request"))
		return
	}

	resp := user.Delete() //Create account
	u.Respond(w, resp)
}

var GetUsers = func(w http.ResponseWriter, r *http.Request) {
	
	result := models.GetUsers()
	response := u.Message(true, "success")
	response["data"] = result
	u.Respond(w, response)

}

var GetUser = func(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		//The passed path parameter is not an integer
		u.Respond(w, u.Message(false, "There was an error in your request"))
		return
	}

	result := models.GetUser(uint(id))
	response := u.Message(true, "success")
	response["data"] = result
	u.Respond(w, response)
	
}


