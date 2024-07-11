 //requirements
const exppress = require('express')
const mongo = require('mongoose')
const bodyparser =require("body-parser")
const client=  require('./modelsdb/client.js')
const Port = 3000 
const urldb="mongodb://localhost:27017/protfolio"
//intaite my website :
const website = exppress()
// set the engine :
website.set('view engine','ejs')
website.use(bodyparser.urlencoded({extended : false}))
//acces to static files 
website.use(exppress.static('public'))
// lestenning and connecting to our database :
mongo.connect(urldb ).then(
  ( )=>{
    website.listen( Port , () =>  { console.log(`i ma lestning on the port ${Port}`)})
    console.log(" i am connecteb to database :)")

  }
).catch((err) => {
  console.log('Error connecting to MongoDB:', err)});

//home redendering 
 website.get('/' , (req , res )=>{
    res.render('home' , { title : "Home"})
 })
 //about-me page rendering 
 website.get('/about-me' , (req ,res)=>{
   res.render('about' ,{ title: "About-me"})
 })
 //techstack page rendering
 website.get('/Tech-Stack' , (req ,res)=>{
  res.render('techstack' ,{ title: "Tech-Stack"})
})
//Projects page rendering :
website.get('/Projects' , (req ,res)=>{
  res.render('Projects' , { title: "Projects"})
})

//Contact page rendering:
website.get('/Contact-us' , (req ,res)=>{
  res.render('contact' , { title: "Contact-us"})
})
website.post('/Contact-us' , ( req ,res)=>{
      
})
//page erreur sending 
website.use((req , res , next) =>{
  res.send("<h1> this page not found !</h1>")
  next()
})