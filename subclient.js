var mqtt = require('mqtt');  
var client2 = mqtt.connect("tcp://127.0.0.1:1883");   //指定服务端地址和端口
  
client2.subscribe('test',{qos:2});//订阅主题为test的消息  
  
client2.on('message',function(top,message) {  
    console.log(message.toString(), new Date().toLocaleString());  
});  

