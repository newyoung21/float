Move = function(el){
	this.init(el);
	console.log("Dfssdf")
}
Move.prototype ={

	init : function(el){
		//获取元素与浏览器宽高度
		this.$d = $(el);
		this.$dH = this.$d.innerHeight();
		this.$dW = this.$d.innerWidth();
		this.$wW = $(window).innerWidth();
		this.$wH = $(window).innerHeight();
		//初始化每次位移多少像素变量
		this.T = 0;
		this.L = 0;
		this.l = 5;
		this.t = 5;
		//绑定事件
		this.bind();
	},

	bind: function(){
		//绑定一个 mouse事件;
		this.mouse();
		//悬浮事件
		this.float();
	},
	float: function(){
		var me = this;
		//50毫秒循环一次
		this.run = setInterval(function(){
			//如果元素高度+位移高度  >= 浏览器高度，改变方向,向上走
		  if(me.T+me.$dH >= me.$wH){
		  	me.t=-5;
		  }
		  //如果元素宽度+位移宽度  >= 浏览器宽度，改变方向，向左走
		  if(me.L+me.$dW >= me.$wW){
		  	me.l=-5;
		  }
		  //当me.T <= 0时，向下走
		  if(me.T <= 0){
		  	me.t=5;
		  }
		  //当me.T <= 0时，向右走
		  if(me.L<=0){
		  	me.l=5; 	
		  }
		  //每次增加位移像素(5px或-5px)
		  me.L=me.L+me.l;
		  me.T=me.T+me.t;
		 //修改css
		  me.$d.css({
		    	left: me.L+'px',
		    	top: me.T+'px'
		    });
		},50);
	},
	mouse: function(){
		var me = this;
		//鼠标计入事件
		this.$d.on('mouseenter',function(){
			clearInterval(me.run);
		});
		//鼠标离开事件
		this.$d.on('mouseleave',function(){
			me.float();
		});
	}
}
