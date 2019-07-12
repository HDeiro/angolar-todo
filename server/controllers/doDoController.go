package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/AAGAraujo/angolar-todo/server/models"
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"github.com/gorilla/mux"
)

// CreateToDo is responsable for create a to do
var CreateToDo = func(w http.ResponseWriter, r *http.Request) {

	toDo := &models.ToDo{}

	err := json.NewDecoder(r.Body).Decode(toDo)

	if err != nil {
		u.Respond(w, u.Message(false, "Erro while decoding request body"), http.StatusBadRequest)
		return
	}

	resp := toDo.Create()

	u.Respond(w, resp, http.StatusCreated)

}

// UpdateToDo is responsable for update a to do
var UpdateToDo = func(w http.ResponseWriter, r *http.Request) {

	toDo := &models.ToDo{}

	err := json.NewDecoder(r.Body).Decode(toDo)

	if err != nil {
		u.Respond(w, u.Message(false, "Erro while decoding request body"), http.StatusBadGateway)
		return
	}

	resp := toDo.Update()

	u.Respond(w, resp, http.StatusAccepted)

}

// DeleteToDo is responsable for delete a to do
var DeleteToDo = func(w http.ResponseWriter, r *http.Request) {

	toDo := &models.ToDo{}

	err := json.NewDecoder(r.Body).Decode(toDo)

	if err != nil {
		u.Respond(w, u.Message(false, "Erro while decoding request body"), http.StatusBadRequest)
		return
	}

	resp := toDo.Delete()

	u.Respond(w, resp, http.StatusAccepted)

}

// GetToDos return a list of to Dos
var GetToDos = func(w http.ResponseWriter, r *http.Request) {

	result := models.GetToDos()
	response := u.Message(true, "success")
	response["data"] = result

	u.Respond(w, response, http.StatusOK)

}

// GetToDo return a to Dos based on id
var GetToDo = func(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		//The passed path parameter is not an integer
		u.Respond(w, u.Message(false, "There was an error in your request"), http.StatusBadRequest)
		return
	}

	result := models.GetToDo(uint(id))
	response := u.Message(true, "success")
	response["data"] = result

	u.Respond(w, response, http.StatusOK)

}
