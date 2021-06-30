import React from 'react';
import Form from './components/Form';
import './Contact.css';


function Contact(){
    const kontakt={
        adresa: "Pere Perovića 5",
        telefon: "065/555-4574",
        email:"simishop@yahoo.com",
    }
    return(
        <div className="con">
            <br></br>
            <br></br>
            <Form/>
            <br></br>

            <br></br>
            <br></br>

            <h3>Za sva dodatna pitanja, budi slobodan/na i kontaktiraj Simi's shop:</h3>
            <br></br>

            <div className="conList">

            <p> – Putem telefona: <a href="https://www.whatsapp.com">{kontakt.telefon}</a></p>
            <br></br>
            <p> – Posetom na adresi: <a href="https://www.googlemaps.com">{kontakt.adresa}</a></p>
            <br></br>
            <p> – Putem e-mail adrese: <a href="https://mail.google.com/mail/u/0/#compose">{kontakt.email}</a></p>
            <br></br>
            </div>
            <br></br>


        </div>
    )
}

export default Contact;
