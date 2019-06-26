package models

import(
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	"time"
)

type ToDo struct {
	Id 				int			`json:"id"`
	Title 			string		`json:"title"`
	Description 	string		`json:"description"`
	UserId 		    int			`json:"user_id"`
	CreateAt		*time.Time	`json:"create_at"`
	IsPrivate 		bool		`json:"is_private"`
}

func (toDo *ToDo) Validate()(map[string] interface{}, bool){
	//fmt.Printf("Title : %s\n",toDo.Title)
	if toDo.Title == "" {
		return u.Message(false, "Title is required field!"), false;
	}
	//fmt.Printf("Description : %s\n",toDo.Description)
	if toDo.Description == "" {
		return u.Message(false, "Description is required field!"), false;
	}
	//fmt.Printf("user : %d\n",toDo.UserId)
	if toDo.UserId == 0 {
		return u.Message(false, "User is required field!"), false;
	}

	return u.Message(true, "sucess"), true;
}

func (toDo *ToDo) Create() (map[string] interface{}) {

	if result, status := toDo.Validate(); !status {
		return result
	}

	GetDB().Create(toDo)

	response := u.Message(true,"success")
	response["todo"] = toDo
	return response
}

func (toDo *ToDo) Delete() (map[string] interface{}) {


	GetDB().Delete(toDo)

	response := u.Message(true,"success")
	response["todo"] = toDo
	return response
}

func (toDo *ToDo) Update() (map[string] interface{}) {


	GetDB().Update(toDo)

	response := u.Message(true,"success")
	response["todo"] = toDo
	return response
}

func GetToDo(id uint) (*ToDo) {

	toDo := &ToDo{}
	error := GetDB().Table("to_dos").Where("id = ?", id).First(toDo).Error
	if error != nil {
		return nil
	}
	return toDo
}

func GetToDos() ([]*ToDo) {

	toDos := make([]*ToDo, 0)
	error := GetDB().Table("to_dos").Find(&toDos).Error
	if error != nil {
		return nil
	}
	return toDos
}

