
const Router=require('express').Router()
const nodeMailer=require('nodemailer')



const emailGenerator=(to,subject,body)=>{
    
    const senderUser=nodeMailer.createTransport({  
    service:'gmail',
    auth:{
        user:'brightseeeds@gmail.com',
        pass:'wings007'
    }
    
});

const mailOptions={
    from:'brightseeeds@gmail.com',
    to:to,
    subject:subject,
    text:body,
    // html:`<div><img src=${details.productLink} alt="product"/> <h3> Price:${details.price} </h3> <h3>paymentmode:${details.paymentmode}</h3> <h3> quantity:${details.quantity}</h3></div> <div><h2>Happy Shopping With Eshopping</h2></div>`
}

senderUser.sendMail(mailOptions,(err,res)=>{

    if(err){
        return console.log(err)
    }
    return console.log(res)
})

}




Router.route("/sendMail").post((req,res)=>{
    // console.log(req.body)
    emailGenerator("dc7600000@gmail.com","hi","hey")

    return res.status(200).send("mail send success")
})


// Router.route("/getuser").get((req,res)=>{
   
//     return res.status(200).send({name:'dinesh',email:'arjundinesh67@gmail.com'})
// })


module.exports=Router