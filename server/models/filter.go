package models

// Filter is used for create colums selections on database
type Filter struct {
	Column []string `json:"column,omitempty"`
}
