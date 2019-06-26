package controllers

import(
	"net/http"
	"encoding/json"
	"github.com/AAGAraujo/angolar-todo/server/models"
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"github.com/gorilla/mux"
	"strconv"
)

var CreateToDo = func(w http.ResponseWriter, r *http.Request){

	toDo := &models.ToDo{}

	err := json.NewDecoder(r.Body).Decode(toDo)

	if err != nil {
		u.Respond(w, u.Message(false, "Erro while decoding request body"))
		return
	}

	resp := toDo.Create()
	u.Respond(w,resp)
	
}

var UpdateToDo = func(w http.ResponseWriter, r *http.Request) {

	toDo := &models.ToDo{}
	
	err := json.NewDecoder(r.Body).Decode(toDo)

	if err != nil {
		u.Respond(w, u.Message(false, "Erro while decoding request body"))
		return
	}

	resp := toDo.Update()
	u.Respond(w,resp)

}

var DeleteToDo = func(w http.ResponseWriter, r *http.Request) {

	toDo := &models.ToDo{}

	err := json.NewDecoder(r.Body).Decode(toDo)

	if err != nil {
		u.Respond(w, u.Message(false, "Erro while decoding request body"))
		return
	}

	resp := toDo.Delete()
	u.Respond(w,resp)

}


var GetToDos = func(w http.ResponseWriter, r *http.Request) {

	result := models.GetToDos()
	response := u.Message(true, "success")
	response["data"] = result
	u.Respond(w, response)
	
}

var GetToDo = func(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		//The passed path parameter is not an integer
		u.Respond(w, u.Message(false, "There was an error in your request"))
		return
	}

	result := models.GetToDo(uint(id))
	response := u.Message(true, "success")
	response["data"] = result
	u.Respond(w, response)
	
}