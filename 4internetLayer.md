#internetLayer

##网络提供的两种服务
   _网络层关注的是如何将分组从源端沿着网络路径送达目的端；网络层应该向运输层提供两种服务：虚电路服务，数据包服务。_  <br/>
   
   ![](https://i.imgur.com/ymwwWPG.png)  
 
   ___1.虚电路服务：___ <br/>
   
   ![](https://i.imgur.com/pE8Mq1K.png)
   
   ___2.数据报服务：___ <br/>

   ![](https://i.imgur.com/YJNrFMn.png)

   ![](https://i.imgur.com/Ikl0h6v.png)
   
   ___3.两种方式对比：___
   
   ![](https://i.imgur.com/R5L3cTZ.png)

##网际协议 IP
   
   ___1.虚拟互联网___  <br/>
   
   <ul><li>  
   网络互联的设备：中间设备又称中间系统或中继（ralay）系统。  </li><li>
   物理层中继系统：转发器（repeater）。  </li><li>
   数据链路层中继系统：网桥或桥接器（bridge）  </li><li>
   网络层中继系统：路由器（router）。  </li> <li>
   网络层以上的中继系统：网关（gateway）。  </li> </ul>
   
   ___网络互连设备-路由器___：当中继系统是转发器或网桥时，一般并不称之为网络互连，因为这仅仅是一个网络扩大了，而这仍然还是一个网络；互联网都是指用路由器进行互连的网络；日常我们所指 _网关_ 为路由器接口；一般 _网关配置_ 成第一个地址或者最后一个地址（1，254）。
   
   ___什么是虚拟互联网络___： 与互连网络相比，虚拟互连网络屏蔽了各个网络之间连接的复杂性，此时我们如果访问另一台机器，只需要知道IP地址即可。<br/>

   ![](https://i.imgur.com/b6p6wFR.png)

   ___IP协议简介___：TCP/IP协议中两个最主要协议之一。与IP协议配套的还有四个协议（下图另三个协议依赖于IP协议）： <br/>
   <ul><li>
   地址解析协议ARP（Address Resolution Protocol） </li><li>
   逆地址解析协议RARP（Reverse Address Resolution Protocol）</li><li>
   网际控制报文协议ICMP（Internet Control Message Protocol）</li><li>
   网际组管理协议IGMP（Internet Group Magagement Protocol） </li></ul>
   
   ___网络层4个协议之间层次关系___：
   
   ![](https://i.imgur.com/XTigp0s.png)
   
   ___2.IP地址___        <br/>

   ___IP层次结构___：层次化IP地址将32位IP地址分为网络ID（网段）和主机ID。

   ___网络地址（网络号）___：唯一指定每个网络。同一网络中每台计算机共享相同的网络地址，并将它作为自己IP地址的一部分。 <br/>
   _网络地址的分类_：A（前8位），B（前16位），C（前24位），D（组播地址，多播地址），E（研究）。
   
   ![](https://i.imgur.com/tQ8833x.png)

   ___IP地址及其表示方法___： 
   
   ![](https://i.imgur.com/lFC9Q2E.png)
   
   ___保留地址___： <br/>
   <ul><li>
   127.0.0.1（本地环回地址，不过网卡）</li> <li>
   169.254.0.0（获取IP地址失败自动分配一个默认的IP地址） </li> <li>
   保留的私网地址：10.0.0.0，172.16.0.0 ~ 172.31.0.0，192.168.0.0 ~ 192.168.255.0        </li>

   </ul>
   
   ___子网掩码的作用：___给出一个IP地址，子网掩码能告诉我们此IP地址的网络号和主机号 <br/>
   
   ![](https://i.imgur.com/nGLwuZ1.png) 

   ___3.划分子网和构造超网___   <br/>
    
   ___划分子网___：   <br/>
   
   ![](https://i.imgur.com/MncTBkp.jpg)

   ![](https://i.imgur.com/RzvaEsA.jpg)   
   
   ___点到点的网络子网掩码最好是252，路由器之间的通信就可以这样配置。___
   
   ___子网划分规律：___  <br/>
   
   <ul><li>
   除二的关系。  </li> <li>
   变长子网划分</li></ul>
   
   ___构造超网___： 一个路由器上接一个交换机，交换机接若干计算机。若此时计算机的数量有四百台。这时可以在路由器端口处设置两个网关，一台交换机连接端口，另一台交换机连接这台交换机。此时两台交换机上的计算机配置不同的网关。缺点：这些计算机物理上本来在同一个网段，还需通过路由器转发进行通信，效率不高。
   
   ![](https://i.imgur.com/CeigX7U.png)

   ![](https://i.imgur.com/wmZYsbA.png)

   ![](https://i.imgur.com/sN2TwfH.png)
   
   _从上面的图可以看到如果要合并两个相邻网段，除以四，然后进行快速判断_。

   ___4.IP地址和MAC硬件地址___    <br/>
   
   ![](https://i.imgur.com/jvb6VuH.png)
   
   ![](https://i.imgur.com/9emsuU2.png)
   

   ___ARP与RARP___   <br/>
   
   ___ARP协议：___ IP地址通过ARP协议解析成MAC地址，通过广播询问同一网段下所有计算机IP地址与哪个MAC地址配套；___ARP协议不安全！___<br/>

   ___RARP协议：___MAC地址通过RARP协议的“地址请求“得到IP地址。                 <br/>

   ___ARP欺骗：___当计算机需要上网时，需要解析路由器MAC地址，于是向网段下所有设备询问网关（路由器）MAC地址是多少，此时某台计算机上的"黑客"软件告诉这些计算机网关MAC地址是本机的MAC地址。于是这些计算机上网发送的数据全部经过本机，从而达到监听，窃取数据，或者控制计算机上网带宽的问题。_防治方法：安装ARP防火墙_。

   ___Windows上ARP应用___：  <br/>
   
   
   ![](https://i.imgur.com/NXZFMbp.png)

   _<center>查看IP与MAC地址对（可以查看是否遭受ARP欺骗）。</center>_

   ![](https://i.imgur.com/kqvporC.png)

  _<center>修改ARP（静态）</center>_
   

   ___5.IP数据包格式___   <br/>一个IP数据报（数据包）由首部和数据两部分组成。首部的前一部分是固定长度，20Bytes，所有IP数据报必须具有的。在首部的固定部分后面是一些可选字段，长度可变。
   
   ![](https://i.imgur.com/xGr2Vy8.png)
   
   ![](https://i.imgur.com/HPrlYJ6.png)
    
   ___数据包首部生存时间TTL：___路由器每转发一次，TTL就减一，当某个路由器检测到TTL为0时，就把数据包给扔掉；TTL的作用，防止数据一直在路由器之间转发，陷入无限循环。 <br/>
   ___从TTL的值粗略地判断对方的操作系统：___通过ping对方IP指令得到对方的回复，回复信息中TTL的值可以粗略的判断对方的操作系统：  <br/>
   <ul><li>
   1、WINDOWS NT/2000   TTL：128 </li> <li>
   2、WINDOWS 95/98     TTL：32 </li> <li>
   3、UNIX              TTL：255 </li> <li>
   4、LINUX             TTL：64 </li> <li>
   5、WIN7          TTL：64     </li></ul> 
   
   _注:从对方发出来后，每过一个路由器TTL都会减一；操作系统TTL可以被人为修改_。

   ![](https://i.imgur.com/yndNmLQ.png)
   
   ![](https://i.imgur.com/YE8Ncka.png)   

   ![](https://i.imgur.com/Qw3y6UF.png)

   ___6.IP转发分组的流程（路由）___ <br/>
   
   ___网络通：能去能回___。  <br/>

   ![](https://i.imgur.com/MOpu91N.png)

   ___\*PacketTracer实践：为路由器添加静态路由___

   ___Windows上路由实践___：
   
   _Windows上网关就是默认路由_

     route print         #查看Windows路由表
     netstat -r          #查看Windows路由表
     route add 0.0.0.0 mask 0.0.0.0 192.168.1.1   #添加路由
     route delete 209.98.32.33  #删除路由通往某个IP地址的网关
     # *注：网卡不要加两个网关。

   ![](https://i.imgur.com/y2xbSTa.png)
   ![](https://i.imgur.com/9tHm1MW.png)
   
     ipconfig /all > c:/ipconfig.txt   # 把网卡信息输出到文件中

##国际控制报文协议 ICMP
   
   ___ICMP协议简介：___
   
   ![](https://i.imgur.com/1kX9E7r.png)

   ___ICMP报文类型：___

   ![](https://i.imgur.com/2lF30xN.png)

   ___ICMP报文格式：___
   
   ![](https://i.imgur.com/HxczD6S.png)
   
   ![](https://i.imgur.com/fpC4jfl.png)
     
   ___ICMP应用举例___：  <br/>

   - ___ping + ip地址（域名）___： <br/>
     - 用来测试两台主机之间的连通性。
     - 使用ICMP回送请求与回送回答报文
     - ping是应用层直接使用网络层ICMP的例子，它没有通过运输层的TCP或UDP。
   - ___pathping + ip地址（域名）___
   - ___tracert + ip地址___
      
##因特网的路由选择协议

  网络管理员可以人工添加路由表，这叫做___静态路由___。
  这里我们介绍___动态路由协议___。动态路由，路由器自己学习怎么走。  <br/>

  - ___RIP协议___：互联网上最早的动态路由协议。_特点：_路由器周期性（30s）广播自己所知道的网段；最佳路径选择原则为 _跳数_ 。<br/>
   ___\*PacketTracer实践：配置路由器RIP协议___。

  - ___OSPF协议___：开放式最短路径优先协议，Internet上用的协议。 <br/>
    ___特点：___最佳路径选择原则： _带宽_ ； _支持多区域_ （网络分成一个个区域，区域内路由变化不会影响其它区域，同时一个区域内路由汇总成一个，与其它区域进行路由通信）； _触发试更新路由表_ 。 _三个表：_ 邻居表（通过hello包维护），链路状态表（路由器之间交换邻居表），计算路由表（试探性计算最短路径）。
    
    ![](https://i.imgur.com/s2IYpWD.png)

    ![](https://i.imgur.com/d7vLTof.png)

    ![](https://i.imgur.com/z5WNWm6.png)
    
    ___\*PacketTracer实践：单区域环境下配置路由器OSPF协议___。
  
  - ___BGP协议：___不同自治系统使用的路由协议不同，那么此时在不同自治系统间通信使用BGP协议指定一些策略（外部网关协议）。
  
     ![](https://i.imgur.com/kp1KcT2.png)
   
     ![](https://i.imgur.com/7lUsCtK.png)
   
     ![](https://i.imgur.com/2TlMUOE.png)
 
     ![](https://i.imgur.com/U9iW5Ix.png)

     ![](https://i.imgur.com/IGNLteY.png)
   
##虚拟专用网VPN和网络地址转换NAT

   ___1.VPN（Virtual Private Network）___

   ![](https://i.imgur.com/oOhuKDa.png)
   
   Windows可以通过拨号来使用VPN。路由器可以配置不同网段间的VPN，两个不同网段可以互相访问无障碍。

   ___2.NAT（Network Address Translation）___
   
   
   _私网地址访问外网通过NAT技术实现。私网地址经过路由器，路由器将此私网地址进行转换成公网地址，与外界进行通信并且进行相应私网IP地址标记，当信息返回到路由器时，再将信息返回给被比标记的IP私网地址。_

   _PAT，端口映射。将私网IP地址与路由器某个端口进行对应。网络流量通过端口流入流出。_

