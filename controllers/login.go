package controllers

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

type RegistController struct {
	beego.Controller
}

func (this *RegistController) Get() {
	flash := beego.ReadFromRequest(&this.Controller)
	if n,ok :=flash.Data["error"];ok {
		this.Data["message"] = n
		this.Data["IsError"] = true
	} else {
		this.Data["IsError"] = false
	}
	this.TplName = "regist.html"
}

func (this *RegistController) Post() {
	flash := beego.NewFlash()

	username := this.GetString("username")
	password := this.GetString("password")
	name := this.GetString("name")
	tel := this.GetString("tel")
	email := this.GetString("email")
	role := 1

	o := orm.NewOrm()
	_,err := o.Raw("insert into users (username,password,name,tel,email,role) values (?,?,?,?,?,?)",username,password,name,tel,email,role).Exec()

	fmt.Print(err)

	if err != nil {
		flash.Error("注册失败!!")
		flash.Store(&this.Controller)
		this.Redirect("/regist",301)
		return
	}

	this.Redirect("/",301)
}


type LoginController struct {
	beego.Controller
}

func (this *LoginController) Get() {
	flash := beego.ReadFromRequest(&this.Controller)
	if n,ok :=flash.Data["error"];ok {
		this.Data["message"] = n
		this.Data["IsError"] = true
	} else {
		this.Data["IsError"] = false
	}
	this.TplName = "login.html"
}

func (this *LoginController) Post() {
	flash := beego.NewFlash()
	username := this.GetString("username")
	password := this.GetString("password")

	o := orm.NewOrm()
	var user []orm.Params
	_,err := o.Raw("select * from users where username = ? and password = ?",username,password).Values(&user)

	if err != nil {
		flash.Error(err.Error())
		flash.Store(&this.Controller)
		this.Redirect("/login",301)
		return
	}

	for _,one := range user{
		this.SetSession("username",one["username"])
	}

	this.Redirect("/",301)
}


type LogoutController struct {
	beego.Controller
}

func (this *LogoutController) Get() {
	sess := this.GetSession("username")
	if sess != nil {
		this.DelSession("username")
		this.DestroySession()
	}
	this.Redirect("/",301)
}