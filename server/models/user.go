package models

/*
JWT claims struct
*/
type Token struct {
	UserId uint
	jwt.StandardClaims
}

type User struct {
	Id 			int
	Name 		string
	Email 		string
	Password 	string
}