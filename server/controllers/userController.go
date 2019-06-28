package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/AAGAraujo/angolar-todo/server/models"
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"github.com/gorilla/mux"
)

var CreateUser = func(w http.ResponseWriter, r *http.Request) {

	user := &models.User{}
	err := json.NewDecoder(r.Body).Decode(user) //decode the request body into struct and failed if any error occur
	if err != nil {
		u.Respond(w, u.Message(false, "Invalid request"), http.StatusBadRequest)
		return
	}

	resp := user.Create() //Create account
	if resp["status"].(bool) {
		u.Respond(w, resp, http.StatusCreated)
	} else {
		u.Respond(w, resp, http.StatusConflict)
	}
}

var UpdateUser = func(w http.ResponseWriter, r *http.Request) {

	user := &models.User{}
	err := json.NewDecoder(r.Body).Decode(user) //decode the request body into struct and failed if any error occur
	if err != nil {
		u.Respond(w, u.Message(false, "Invalid request"), http.StatusBadRequest)
		return
	}

	resp := user.Update()

	u.Respond(w, resp, http.StatusAccepted)
}

var DeleteUser = func(w http.ResponseWriter, r *http.Request) {

	user := &models.User{}
	err := json.NewDecoder(r.Body).Decode(user) //decode the request body into struct and failed if any error occur
	if err != nil {
		u.Respond(w, u.Message(false, "Invalid request"), http.StatusBadRequest)
		return
	}

	resp := user.Delete() //Create account

	u.Respond(w, resp, http.StatusOK)
}

var GetUsers = func(w http.ResponseWriter, r *http.Request) {

	filters := &models.Filter{}
	err := json.NewDecoder(r.Body).Decode(filters) //decode the request body into struct and failed if any error occur
	if err != nil {
		//log.Fatal(err)
		filters = nil
	}

	result := models.GetUsers(filters)
	response := u.Message(true, "success")
	response["data"] = result

	u.Respond(w, response, http.StatusOK)

}

var GetUser = func(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		//The passed path parameter is not an integer
		u.Respond(w, u.Message(false, "There was an error in your request"), http.StatusBadRequest)
		return
	}

	result := models.GetUser(uint(id))
	response := u.Message(true, "success")
	response["data"] = result

	u.Respond(w, response, http.StatusOK)

}
