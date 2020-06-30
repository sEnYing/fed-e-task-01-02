// 一、
var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // => 10
// a[0] - a[9] 都会打印出10,如果将var改成let可以避免该问题
// 因为 var定义的变量i为全局变量，循环结束时i=10所以输出10， let定义的变量i为局部变量 都有独立作用域

//二、
var tmp = 123

if (true) {
  // console.log(tmp) // =>undefined
  let tmp
}

//let声明变量为局部变量会生成局部作用域造成暂时性死区，在let声明之前调取该变量为undefined

//三、
var arr = [12, 34, 32, 89, 4]
var min = Math.min(...arr)
console.log(min) // =>4

//四、
// 见README

//五、
var a2 = 10
var obj = {
  a2: 20,
  fn() {
    setTimeout(() => {
      console.log(this.a2)
    })
  },
}
obj.fn() // =>20
//箭头函数不存在this会去向上级寻找
