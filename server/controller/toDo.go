package controller

import(
	"time"
)

type ToDo struct {
	Id 				int
	Title 			string
	Description 	string
	User_id 		int
	CreateAt 		*time.Time
	isPrivate 		bool
}

