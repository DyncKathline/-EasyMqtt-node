var mqtt = require('mqtt');
var client = mqtt.connect('tcp://127.0.0.1:1883'); //连接到服务端
//client.subscribe('presence');
var num = 0;
var qtt = {}; //定义消息（可以为字符串、对象等）
qtt = 'helloworld';
setInterval(function() { //3秒钟发送一次 消息到主题 SN69143809293670state 消息为helloworld
    client.publish('test', qtt, { qos: 2, retain: true });  
}, 3000);
