###Tips 

   ___1.supervisor的使用。___   <br/>

   npm全局安装supervisor，不用node启动js文件，使用supervisor启动。

   ___2.fs___ 

   不建议在调用 fs.open() 、fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查一个文件是否存在。 作为替代，用户代码应该直接打开/读取/写入文件，当文件无效时再处理错误。

   ___3.promisify___

   <pre>
    const {promisify} = require('util');
    const stat = promisify(fs.stat);
    const readdir = promisify(fs.readdir);    
    async () => {
     try{
       const stats = await stat(path);   //fs.stat(path, (err, stats){ /*...*/ })
       const files = await readdir(path); //fs.readdir(path, (err, files){ /*...*/ })
     } catch(e) { 
       //handle errors from fs.stat, fs.readdir
     }
    }
   </pre>

   ___4.handlebars -- 模板引擎___


   
   