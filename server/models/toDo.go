package models

import (
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"github.com/jinzhu/gorm"
)

// ToDo base to Do definition
type ToDo struct {
	gorm.Model
	Title       string `json:"title,omitempty"`
	Description string `json:"description,omitempty"`
	UserID      int    `json:"user_id,omitempty"`
	IsPrivate   bool   `json:"is_private,omitempty"`
}

// Validate check if all required filds are ok
func (toDo *ToDo) Validate() (map[string]interface{}, bool) {
	//fmt.Printf("Title : %s\n",toDo.Title)
	if toDo.Title == "" {
		return u.Message(false, "Title is required field!"), false
	}
	//fmt.Printf("Description : %s\n",toDo.Description)
	if toDo.Description == "" {
		return u.Message(false, "Description is required field!"), false
	}
	//fmt.Printf("user : %d\n",toDo.UserId)
	if toDo.UserID == 0 {
		return u.Message(false, "User is required field!"), false
	}

	return u.Message(true, "sucess"), true
}

// Create a to Do
func (toDo *ToDo) Create() map[string]interface{} {

	if result, status := toDo.Validate(); !status {
		return result
	}

	GetDB().Create(toDo)

	response := u.Message(true, "success")
	response["todo"] = toDo
	return response
}

// Delete a to Do
func (toDo *ToDo) Delete() map[string]interface{} {

	GetDB().Delete(toDo)

	response := u.Message(true, "success")
	response["todo"] = toDo
	return response
}

// Update a to Do
func (toDo *ToDo) Update() map[string]interface{} {

	GetDB().Update(toDo)

	response := u.Message(true, "success")
	response["todo"] = toDo
	return response
}

// GetToDo based on id
func GetToDo(id uint) *ToDo {

	toDo := &ToDo{}
	error := GetDB().Table("to_dos").Where("id = ?", id).First(toDo).Error
	if error != nil {
		return nil
	}
	return toDo
}

// GetToDos return a list of to Dos
func GetToDos() []*ToDo {

	toDos := make([]*ToDo, 0)
	error := GetDB().Table("to_dos").Find(&toDos).Error
	if error != nil {
		return nil
	}
	return toDos
}
