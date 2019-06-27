package models

import (
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/jinzhu/gorm"
	"os"
	"github.com/joho/godotenv"
	"fmt"
)

var db *gorm.DB //database

func init() {

	e := godotenv.Load() //Load .env file
	if e != nil {
		fmt.Print(e)
	}

	username := os.Getenv("db_user")
	password := os.Getenv("db_pass")
	dbName := os.Getenv("db_name")
	dbHost := os.Getenv("db_host")

	//Build connection string
	dbUri := fmt.Sprintf("host=%s user=%s dbname=%s sslmode=disable password=%s", dbHost, username, dbName, password) 
	
	
	conn, err := gorm.Open("postgres", dbUri)
	if err != nil {
		fmt.Print(err)
	}

	db = conn
	db.Debug().AutoMigrate(&ToDo{}, &User{}) //Database migration
}

//returns a handle to the DB object
func GetDB() *gorm.DB {
	return db
}