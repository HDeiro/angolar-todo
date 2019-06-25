package models

import(
	"time"
)

type ToDo struct {
	Id 				int			`json:"id"`
	Title 			string		`json:"title"`
	Description 	string		`json:"description"`
	User_id 		int			`json:"user_id"`
	CreateAt 		*time.Time	`json:"create_at"`
	isPrivate 		bool		`json:"is_private"`
}

