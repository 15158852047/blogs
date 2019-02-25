package main

import (
	_ "blogs/routers"
	"github.com/astaxie/beego"
	_ "blogs/initial"
)

func main() {
	beego.Run()
}
