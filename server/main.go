package main

import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
)

// função principal
func main() {
    router := mux.NewRouter()
    router.HandleFunc("/user", GetUsers).Methods("GET")
    router.HandleFunc("/user/{id}", GetUser).Methods("GET")
    router.HandleFunc("/user/{id}", CreateUser).Methods("POST")
    router.HandleFunc("/user/{id}", DeleteUser).Methods("DELETE")

    log.Fatal(http.ListenAndServe(":8000", router))
}