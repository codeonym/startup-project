var StaticServer = require('static-server');
var server=new StaticServer({
    rootPath:'./dist',
    port:8080
});
server.start(function(){
    console.log('Starting at port :',server.port);
});