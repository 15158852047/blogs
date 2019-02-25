package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Get() {
	name := this.GetSession("username")
	var isLogin bool = false
	if name != nil {
		isLogin = true
	}
	this.Data["isLogin"] = isLogin
	this.Data["username"] = name
	this.TplName = "index.html"
}
