const express=require('express'),
    mongoose=require('mongoose'),
    bodyParser=require('body-parser'),
    Item = require('./models/item');
var app=express();
mongoose.connect('mongodb+srv://SS:rbkvasqw@cluster0-9xjs0.mongodb.net/test?retryWrites=true');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get('/api/item',(req,res,next)=>{
  Item.find({},(err,data)=>{
    if(err)
      res.status(404);
    else{
      res.status(200).json({
        message: 'Data Sent',
        items: data
      });
    }

  });

});
 app.post('/api/item',(req,res,next)=>{
   Item.create({title: req.body.title},(err,newItem)=>{
    if(err){
      console.log(err);
      res.status(404);
    }

    else{
      res.status(201).json({
        message: 'Item Added',
        item: newItem
      });
    }

   });

 });
 app.delete('/api/item/:id',(req,res,next)=>{
   Item.findByIdAndRemove(req.params.id,function(err){
     if (err) {
       res.status(404);
     } else {
       res.status(200).json({
         message: 'Item Deleted'
       });
     }
   });
 });

module.exports = app;
