四、
1.var 声明的变量会挂载到 window 对象上，let、const 不会
2.var 声明变量存在变量提升，let、const 不存在
3.let 和 const 声明变量会形成块级作用域，造成暂时性死区 4.同一作用域下 let 和 const 不能声明同名变量，var 可以
5.const 一旦声明必须赋值，并且不能修改指针，可以修改指针指向的复合类型数据的属性

六、
1.Symbol 标识对象属性唯一标识 2.标识对象可迭代 3.调用 Symbol（），常亮枚举 4.隐藏私有属性

七、
浅拷贝拷贝的是对象的指针，当被拷贝对象被修改时拷贝对象也修改了
深拷贝是开辟新的内存放置拷贝出来的对象，堆内存中即存在两个该对象，修改一个时不影响另一个

八、
TypeScript 可以使用 JavaScript 中的所有代码和编码概念，TypeScript 是为了使 JavaScript 的开发变得更加容易而创建的
ts 是 js 的超集，可以编译成 js

九、
优点： 1.便于开发人员做注释 2.能帮助开发人员检测出错误并修改
3.TypeScript 工具使重构更变的容易、快捷。
4.TypeScript 引入了 JavaScript 中没有的“类”概念。
5.TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中。 6.类型安全功能能在编码期间检测错误，这为开发人员创建了一个更高效的编码和调试过程。
缺点： 1.学习成本较高，有很多 js 没有的新加概念 2.不需长期维护的短期项目使用 ts 会使项目略显冗余

十、
浏览器维护一张表，保存了所有对象的引用次数，引用一次，次数+1；垃圾回收时，将表里引用次数为 0 的对象空间释放
缺点： 循环引用或者相互引用的对象计数总是不为 0，无法被回收，导致内存泄漏；
优点：1.实时性较高，不需要等到内存不够时才回收 2.在垃圾回收过程中, 应用不需要挂起 3.区域性, 更新对象的计数器时, 只更新该对象, 不会扫描全面对象

十一、 1.标记阶段：找到所有可访问的对象，做个标记 2.整理阶段：要清除的和不需要清除的对象分开 3.清除阶段：清除需清除的对象一侧

十二、
新生代存储区分为两部分，from-to，使用状态的为 from，to 空间闲置
新加入的对象会被加入到 from，对 from 区域的活动对象进行标记，然后将 from 的存活对象复制到 to 区域，清理剩余的对象，然后 from 和 to 角色互换。

十三、
在对象很多的时候使用
引擎将垃圾回收分解为多个部分，然后各个部分分别执行

看视频来不及做笔记。。。不然直播前视频都看不完，所以。。。每次都没笔记 等二刷
