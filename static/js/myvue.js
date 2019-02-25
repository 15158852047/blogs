var vue = new Vue({
   delimiters:['[[',']]'],
   el:"#app",
   data:{
       showMainInfo:false,
       infoArr:[
           {img:'static/images/g1.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g2.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g3.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g4.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g5.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g6.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g7.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g8.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g1.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g2.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g3.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g4.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g5.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
           {img:'static/images/g6.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
       ],
       infoimg:"",
       infotitle:"",
       infomain:"",
       infoStyle:"",
       date:new Date(),
       hour:0,
       minute:0,
       second:0,
       conStyle:"",
       ns:[
           {h6:"Welcome to Trendy Travel",h3:"Book your Dream Place",p:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi sed sollicitudin ante. Nullam condimentum mollis odio,sed aliquet dolor consectetur.", img:"static/images/slider1.jpg"},
           {h6:"Welcome to Trendy Travel",h3:"Book your Dream Place",p:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi sed sollicitudin ante. Nullam condimentum mollis odio,sed aliquet dolor consectetur.", img:"static/images/slider2.jpg"},
           {h6:"Welcome to Trendy Travel",h3:"Book your Dream Place",p:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi sed sollicitudin ante. Nullam condimentum mollis odio,sed aliquet dolor consectetur.", img:"static/images/slider3.jpg"},
           {h6:"Welcome to Trendy Travel",h3:"Book your Dream Place",p:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi sed sollicitudin ante. Nullam condimentum mollis odio,sed aliquet dolor consectetur.", img:"static/images/slider1.jpg"},
           {h6:"Welcome to Trendy Travel",h3:"Book your Dream Place",p:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi sed sollicitudin ante. Nullam condimentum mollis odio,sed aliquet dolor consectetur.", img:"static/images/slider2.jpg"},
       ],
       mys:[
           {img:"static/images/te1.jpg",p:"生命对于每个人只有一次。人的一生应当这样度过：回首往事，他不会因为虚度年华而悔恨，也不会因为碌碌无为而羞愧。",h4:"奥斯特洛夫斯基"},
           {img:"static/images/te2.jpg",p:"必须记住我们学习的时间是有限的。时间有限，不只是由于人生短促，更由于人事纷繁。我们应该力求把我们所有的时间用去做最有益的事情。",h4:"斯宾塞"},
           {img:"static/images/te1.jpg",p:"不要以感伤的眼光去看过去，因为过去再也不会回来了，最聪明的办法，就是好好对付你的现在——现在正握在你的手里，你要以堂堂正正的大丈夫气概去迎接如梦如幻的未来。",h4:"郎费罗"},
          /* {img:"static/images/te2.jpg",p:"凡事都要脚踏实地地去工作，不驰于空想，不骛于虚声，惟以求真的态度作踏实的功夫。以此态度求学，则真理可明，以此态度做事，则功业可就。",h4:"李大钊"},
           {img:"static/images/te1.jpg",p:"我们若要生活，就该为自己建造一种充满感受、思索和行动的时钟，用它来代替这个枯燥、单调、以愁闷来扼杀心灵，带有责备意味和冷冷地滴答着的时间。",h4:"高尔基"},*/
       ],
       page:1,  //当前的页数
   },
    methods:{
       showInfo:function (index) {
            var _this = this;
           _this.infoimg = _this.infoArr[index].img;
           _this.infotitle = _this.infoArr[index].title;
           _this.infomain = _this.infoArr[index].intro;
           /*var heigh = document.getElementById("gallery").offsetTop;
           heigh = heigh - 10;
           console.log(heigh);
           _this.infoStyle = "position:absolute;left:30%;top:"+heigh+"px;";*/
           var myheight = document.body.scrollHeight+"px";
           _this.conStyle = "height:"+myheight;
           _this.showMainInfo = true;
       },
       closeInfo:function () {
           var _this = this;
           _this.showMainInfo = false;
       },
       readMore:function () {
           var _this = this;
           _this.page++ ;
           if (_this.page < 5) {
           _this.infoArr.push({img:'static/images/g1.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
               {img:'static/images/g2.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"},
               {img:'static/images/g3.jpg',title:"Trendy Travel",intro:"Enjoy Your Travel"})
        }}
    },
    mounted () {
        var _this = this; //声明一个变量指向vue实例this,保证作用域一致
        this.timer = setInterval(function() {
            _this.date = new Date();//修改数据date
            _this.hour = _this.date.getHours();
            _this.minute = _this.date.getMinutes();
            _this.second = _this.date.getSeconds();
        }, 1000);
    },
    beforeDestroy () {
        if(this.timer) {
            clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
        }
    }
});