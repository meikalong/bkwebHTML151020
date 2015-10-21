(function(window) {
	var mj = (function() {
		var mj = function(selector, context) {
				return new mj.fn.init(selector, context, rootmj);
			},
			rootmj;
		mj.fn = mj.prototype = {
			constructor: mj,
			init: function(selector, context, rootjQuery) {
				if (selector != null) {
					this.selector = selector;
				}
				return this;
			},
			mj: "1.0",
			selector: "",
			size: function() {
				return this.length;
			},
			each: function() {
				return mj.each(callback, args);
			}
		};
		mj.fn.init.prototype = mj.fn;


		mj.extend = mj.fn.extend = function() {
			var options, src, copy,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length;

			//只有一个参数，就是对jQuery自身的扩展处理
			//extend,fn.extend
			if (i === length) {
				target = this; //调用的上下文对象jQuery/或者实例
				i--;
			}
			for (; i < length; i++) {
				//从i开始取参数,不为空开始遍历
				if ((options = arguments[i]) != null) {
					for (name in options) {
						copy = options[name];
						//覆盖拷贝
						target[name] = copy;
					}
				}
			}
			return target;
		}

		rootmj = mj(document);

		mj.getUserName = mj.fn.getUserName = function() {
			return this.userName;
		}

		mj.setUserName = mj.fn.setUserName = function(userName) {
			this.userName = userName;
			return this;
		}

		mj.extend({
			each: function(object, callback, args) {
				if (args) {
					alert("arg");
				} else if (object) {
					for (name in object) {
						if (callback.call(object[name], name, object[name]) === false) {
							break;
						}
					}
				}
				return object;
			},
			submit: function(callback) {
				var data = "data";
				var url = "url";
				setTimeout(function() {　　　　　　 // f1的任务代码
					alert("submit要执行很长时间，下面的代码接着运行");
					callback.call(this, data, url);
				}, 0);
				return this;
			},
			taskarray: [],
			addTask: function(fun) {
				if (typeof fun == "function") { //typeof适合非对象类型，判断是否是函数
					this.taskarray.push(fun);
				}
				return this;
			},
			fireTask: function() {
				if (this.taskarray != [] && this.taskarray.length > 0) {
					this.taskarray.forEach(function(fun) {
						setTimeout(function() {
							fun();
						}, 0);
					});
				}
				return this;
			}

		});

		return mj;
	})();

	window.mj = mj;

})(window) //这个地方加window，function里面的window才有用


console.log(mj("selectId").setUserName("123").getUserName());
console.log(mj("selectId").getUserName());
console.log(mj.setUserName("123").getUserName());
console.log(mj.getUserName());
console.log(">>>>>>>>>>>>>>>>>>");

mj.extend({ //静态方法
	setName: function(myName) {
		this.myName = myName
		return this;
	},
	getName: function() {
		return this.myName;
	}
})

mj.fn.extend({ //对象级别方法
	setName: function(myName) {
		this.myName = myName
		return this;
	},
	getName: function() {
		return this.myName;
	}
})

console.log(mj.setName("extendName").getName());
console.log(mj().setName("extendName").getName());

console.log(">>>>>>>>>>>>>>>>>>");
var array = new Array();
array.push("我是1");
array.push("我是2");
array.push("我是3");
array.push("我是4");
mj.each(array, function(i, v) {
	console.log("i:" + i + ">>>>v:" + v);
});


console.log(">>>>>>>>>>>>>>>>>>");

mj.submit(function(data, url) {
	console.log("data : " + data);
	console.log("url : " + url);
})
console.log("submit要执行很长时间，我先运行........");

console.log(">>>>>>>>>>>>>>>>>>>观察者模式")

// mj.addTask(function() {
// 	alert(1);
// });
// mj.addTask(function() {
// 	alert(2);
// });
mj.addTask().fireTask();

console.log(">>>>>>>>>>>>>>>>补充类与对象的概念");

function Person() {
	this.say = function() {
		console.log("hello");
	}
}
Person.prototype.setSex = function(sex) {
	this.sex = sex;
	return this;
}
Person.prototype.getSex = function() {
	return this.sex;
}

function Student() { //创建一个Student类
	var name = "张三"; //私有属性，对象属性
	Person.call(); //调用基类的构造器
	this.getAge = function() {
		return this.age; //对私有属性的访问
	}
	this.setAge = function(age) {
		this.age = age;
		return this;
	}
	this.getName = function() {
		return name;
	}
	this.setName = function(_name) {
		name = _name;
		return this;
	}
}
// Student.prototype = Object.create(Person.prototype);//只能以及原型上的方法，不能使用say方法
Student.prototype = new Person(); //能继承Person对象上的所有的方法，能使用say方法
Student.prototype.schoolName = "学校"; //相当于静态变量
Student.prototype.learn = function() {
	console.log("所有学生都会学习")
}
Student.prototype.constructor = Student;

var student = new Student(); //创建一个student对象
console.log(student);
console.log("???????????say：" + student.say());
console.log("???????????name：" + student.getName());
console.log("???????????name：" + student.setName("李四").getName());
console.log("???????????name：" + student.getName());
// console.log(new Student().constructor.prototype.schoolName="111");//通过对象找到构造器，改变prototype中的值
console.log("???????????school1：" + new Student().schoolName);
console.log("???????????school2：" + new Student().schoolName);
new Student().learn();
//数据类型的判断
console.log(typeof student.setAge(11).getAge()); //number
console.log(student instanceof Student); //true
//继承
console.log(new Student().setSex("男").getSex());
console.log(new Student().getSex());
console.log(new Person());

console.log(">>>>>>>>>>>>>>作用域链")
var testName = 1;
(function() {
	var testName = 2;
	if (true) {
		console.log(testName);
	}
	console.log(testName);

	function a() {
		var testName = 3;
		console.log(testName);
	}

	function b() {
		console.log(testName);
	}

	a();
	b();
	console.log(testName);
})()

console.log(">>>>>>>>>>>>>>闭包与变量（重点）")
var name123 = "the window";
var show = {
	name123: "the show",
	getName: function() {
		console.log(this.name123);
		console.log(name123);
		return function() {
			console.log(this.name123);
			console.log(name123);
			return this.name123;
		}
	}
};
console.log("如果这个能够解释得通，那么就算是更深入的理解闭包了>>>>>>>>>>>>show:name123：" + show.getName()());

var bb = function() {///要比较这上下两个为什么不一样
		this.name123 = 123;
		this.name321=3211;//这边他娘的竟然是全局变量
		return function() {
			console.log("BBBBBBBBBBB:" + name123);
			console.log("BBBBBBBBBBB:" + this.name123);
			this.name321=3212;//这边他娘的竟然是全局变量
			return function() {
				this.name321=3213;//这边他娘的竟然是全局变量
				console.log("BBBBBBBBBBB:" + name123);
				console.log("BBBBBBBBBBB:" + this.name123);
			}
		}
	}
	(bb)()();
console.log(name321);