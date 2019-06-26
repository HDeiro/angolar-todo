package main

import (
	"github.com/gorilla/mux"
	"github.com/AAGAraujo/angolar-todo/server/app"
	"github.com/AAGAraujo/angolar-todo/server/controllers"
	"os"
	"fmt"
	"net/http"
)

func main() {

	router := mux.NewRouter()
	router.Use(app.JwtAuthentication) //attach JWT auth middleware

	router.HandleFunc("/user", controllers.CreateUser).Methods("POST")
	router.HandleFunc("/user", controllers.UpdateUser).Methods("PUT")
	router.HandleFunc("/user", controllers.DeleteUser).Methods("DELETE")
	router.HandleFunc("/user", controllers.GetUsers).Methods("GET")
	router.HandleFunc("/user/{id}", controllers.GetUser).Methods("GET")

	router.HandleFunc("/login", controllers.Authenticate).Methods("POST")

	router.HandleFunc("/todo", controllers.CreateToDo).Methods("POST")
	router.HandleFunc("/todo", controllers.GetToDos).Methods("GET")
	router.HandleFunc("/todo/{id}", controllers.GetToDo).Methods("GET")
	router.HandleFunc("/todo", controllers.UpdateToDo).Methods("PUT")
	router.HandleFunc("/todo", controllers.DeleteToDo).Methods("DELETE")


	port := os.Getenv("PORT") //Get port from .env file, we did not specify any port so this should return an empty string when tested locally
	if port == "" {
		port = "8000" //localhost
	}

	fmt.Println(port)

	err := http.ListenAndServe(":" + port, router) //Launch the app, visit localhost:8000/api
	if err != nil {
		fmt.Print(err)
	}
}