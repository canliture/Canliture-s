#env

__1.CommonJS__
  
  <pre>
  
  (function(exports, require, module, __filename, __dirname){  
      console.log('hello world!');
  });
  
  //每个文件都是一个模块，有自己的作用域
  //模块内部module变量代表模块本身
  //module.exports属性代表模块对外接口
  </pre>

   - __require特性:__
   
     - _module被加载时执行，加载后缓存。_
     - _一旦出现某个模块被循环加载，就只输出已经执行的部分，未执行的部分不会输出。(CODE:modA,modB,modeMain)_

   - __exports 与 module.exports：(CODE: exp)__
     
    <pre>
     console.log('exports: ', exports);                //exports:  {}
	 console.log('module.exports: ', module.exports);  //module.exports:  {}
	 console.log(module.exports === exports);          //true    
	
    //exports 为module.exports的快捷方式，但是不能改变exports的指向
    //下面是错误的：
      exports = {
        a: 1,
        b: 2,
        test: 200 
      }
    //下面是正确的
      module.exports = {
        a: 1,
        b: 2,
        test: 200 
      }
    </pre>
     

__2.global__
  
  - __NodeJS全局对象。直接挂在global上的：__
    - CommonJS
    - Buffer, process, console
    - timer

    >  global.testVar = 3      //声明全局变量 

__3.process   (CODE:procs)__

   - __直接挂在global上的__
   - __Node程序执行的一些参数，环境__
   <pre>
     const {argv, argv0, execArgv, execPath} = process;
     argv.forEach(item => {
       console.log(item);
     })
   </pre>

__4.Debug__

   <pre></pre>
  