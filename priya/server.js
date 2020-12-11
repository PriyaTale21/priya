var express=require("express");
var app=express();

var logger=function(req,resp,next){
	console.log(req.url);
	console.log(req.method);
	next();
}
// var sayhello=(req,resp)=>{
// 	resp.end("hello word");
	
// }
var sayhello=(req,resp)=>{
	resp.sendFile("index.html",{root:__dirname});
	
}

var sayaboutus=function(req,resp){
	resp.end("about us");
	
}


app.use(logger);
app.use("/about",sayaboutus);
app.use("/",sayhello);

app.listen(8181,()=>{
	
	console.log("server started")
})