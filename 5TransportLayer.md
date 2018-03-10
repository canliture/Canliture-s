#Transport Layer

- ___传输层协议TCP，UDP及其适用场景___。 <br/>

   - ___TCP___。分段，编号，流量控制，建立会话（natstat -nab查看当前会话），丢包重传的可靠传输。
   - ___UDP___。一个数据包就能完成数据通信。不需要建立回话，适用于多播。经典应用场景就是DNS。   
                   <br/>

- ___传输层与应用层之间关系：___     <br/>
     
    _端口复用。应用层协议 = 传输层协议 + 端口_  
    
    ___应用默认端口，熟知端口数值一般为0 ~ 1023___。  
    - http = TCP + 80 
    - https = TCP + 443 
    - telnet = TCP + 23
    - ftp = TCP + 21
    - SMTP = TCP + 25    （用来发送或中转发出的电子邮件；发邮件）
    - PoP3 = TCP + 110    （远程管理服务器上电子邮件；收邮件）
    - RDP = TCP + 3389     （远程桌面）
    - Shared Files = TCP + 445 
    - SQL Server = TCP + 1433
    - DNS = UDP + 53 Or TCP + 53
    
    ___登记端口号 1024 ~ 49151。客户端口号 49152 ~ 65535___  
                   <br/>
                                                 
- ___应用层协议与服务之间的关系：___         <br/>
     
     IP定位服务器（主机，计算机），端口定位具体怎么样的服务。 

     服务运行后在TCP或UDP的某个端口监听外部客户端请求。

     `netstat -an                          #查看被监听的端口`
     `telnet 192.168.1.101 80            #查看远程计算机打开的端口`
     
- ___计算机安全___

     - _修改默认端口_
      ` #邮件服务器应用，IIS服务器应用里面可以手动修改默认端口`

     - Windows防火墙  <br/>
        _Windows防火墙作用：可以把所有端口给关闭，外面的流量进不来；单向通信。_
     - TCP/IP筛选。可以设置只开特定端口进行流量出入。
     
     - IPSec。设置流量出入端口。
    
- ___UDP与TCP___。
    
   ![](https://i.imgur.com/B6fjwLk.png)  

   ![](https://i.imgur.com/zHv3cC8.png)

   ![](https://i.imgur.com/4PVEXGN.png)
   
   - ___UDP数据报格式___ 
     
     ![](https://i.imgur.com/daXtyM9.png)
  
   - ___TCP___
     
     - ___特点___。
         - ___面向连接___。三次握手建立会话。
             ![](https://i.imgur.com/w0hSrav.png) 

             ![](https://i.imgur.com/IJdd7Qk.png)

         - ___一对一连接___。每条TCP连接只支持两台主机之间点到点通信。而UDP可以实现多播。
         - ___可靠交付服务___。
         - ___全双工通信___。
         - ___面向字节流___。
          <br/> <br/>        
     
     - ___TCP如何实现可靠传输___  <br/> <br/>
         ___网络层负责路由，并不会实现可靠传输。可靠传输是由传输层来实现的。___ <br/>
        
         - ___可靠传输的工作原理 -- 停止等待协议___
         ![](https://i.imgur.com/mFkGO96.png)
         ![](https://i.imgur.com/Xx8j7Ms.png)
         
             停止等待协议 ___优点___ 是较为简单， ___缺点___ 是信道利用率太低（大多时间都在等待确认）。
            
             ![](https://i.imgur.com/BeKCEJO.png)
           <center> ![](https://i.imgur.com/WH1M0a8.png) </center>
            
           
         - ___可靠通信的实现___。 通过上述确认重传的机制，我们可以在不可靠的传输网络商实现可靠的通信；这种可靠的传输协议通常称为自动重传请求ARQ（Automatic Repeat reQuest）。
           
             ___流水线传输。___前面我们讲到停止等待协议信道利用率太低。现在我们将这一传输技术改进，衍生出___流水线传输___。
             
             ![](https://i.imgur.com/JPn3Yak.png)
             ![](https://i.imgur.com/WIV38gD.png)
             _<center>连续ARQ协议：同一个窗口的数据包一次性发送，等到窗口第一个数据包返回成功信息方可向后移动一个窗口单元</center>_
             
             
       
     - TCP如何实现流量控制
       - _TCP报文首部格式_
         ![](https://i.imgur.com/5yP6Nly.png)
       - _以字节为单位的滑动窗口实现的可靠传输_。  
       <br/>

     - TCP如何避免网络拥塞
       - 拥塞以及解决方案。
       - TCP连接管理。
     
     