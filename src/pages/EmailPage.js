import React, {useState} from 'react';

const app = require("express")();
const bodyParser =  require("body-parser");

const mailer = require('nodemailer');

const config = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'chaya.legros5@ethereal.email',
        pass: 'Mt513NfT3kmP2GsuNx'
    }   
}

const transporter = mailer.createTransport(config);

app.use(bodyParser.json());

app.post("/send-email",(req,res)=>{
    const message={
        from:"rh.indica@techprocess.com.br",
        to:"EmailPage.tosend,",
        subject:"Obrigada pela Indicação!",
        text:"Olá"+'EmailPage.name'+"Obrigada pela indicação!"
    }
    transporter.sendMail(message,(error,info)=>{
        if(error){
            return res.status(400).send('Erro ao enviar o email')
        }
        return res.status(200).send('Enviado')
    })

    
})




function EmailPage() {
    const[tosend,setTosend] = useState(null);
    const [name, setName] = useState(null);

    
}

export default EmailPage;
