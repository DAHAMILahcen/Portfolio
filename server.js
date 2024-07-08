 //requirement
const exppress = require('express')
const mongo = require('mongoose')
const Port = 3000 
//intaite my website :
const website = exppress()
// ser the engine :
website.set('view engine','ejs')
//acces to static files 
website.use(exppress.static('public'))
website.listen( Port || 3001 , () =>  { console.log(`i ma lestning on the port ${Port}`)})

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