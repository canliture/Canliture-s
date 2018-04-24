###NodeJS Basic API

__1.path__
  
   - normalize
   - join
   - resolve
   - basename
   - extname
   - dirname 
   - parse
   - format
   - sep 
   - dilimiter
   
__2.buffer__

   __处理二进制数据流。类似数组，大小固定。C++代码在V8堆外分配内存。__
   
   - __创建__ <br/>
     Buffer.alloc(length [, initialValue]);
     Buffer.from(array);
     Buffer.from(string [, encoding]);
  
   - __Buffer常用__     <br/>
     ___Buffer.byteLength;___
       <pre>
         - string &lt;string&gt; | &lt;Buffer&gt; | &lt;TypedArray&gt; | &lt;DataView&gt; | &lt;ArrayBuffer&gt; | &lt;SharedArrayBuffer&gt; 要计算长度的值
         - encoding <string> 如果 string 是字符串，则这是它的字符编码。 默认: 'utf8'
         - 返回: <integer> string 包含的字节数
       

         > Buffer.byteLength('test');   //4
	     > Buffer.byteLength('你好');   //6
		
       </pre>
     
     ___Buffer.isBuffer(obj);___

     ___Buffer.concat(list[, totalLength]);___
       <pre>
         - list &lt;Array&gt; 要合并的 Buffer 或 Uint8Array 实例的数组
         - totalLength &lt;integer&gt; 合并时 list 中 Buffer 实例的总长度
         - 返回: &lt;Buffer&gt; (返回一个合并了 list 中所有 Buffer 实例的新建的 Buffer) 
       </pre>
         
   - __Buffer实例常用__     <br/>

	___buf.length___ 

    ___buf.toString( [encoding[, start[, end]]] )___
    <pre>
     Buffer.from('This is a test').toString('utf8', 5);   //is a test
    </pre>

    ___buf.fill( value[, offset[, end]][, encoding] )___

    ___buf.equals( otherBuffer )___

    ___buf.indexOf( value[, byteOffset][, encoding] )___

    ___buf.copy( target[, targetStart[, sourceStart[, sourceEnd]]] )___
       <pre>target &lt;Buffer&gt; | &lt;Uint8Array&gt; </pre>

__3.events__
   
   

__4.fs__