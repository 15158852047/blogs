package models

type Users struct {
	Id       int
	Username string
	Password string
	Name    string //用户名称昵称
	Role     int //权限
	Tel      string
	Email    string
}

func (this *Users) TableName() string {
	return "users"
}

