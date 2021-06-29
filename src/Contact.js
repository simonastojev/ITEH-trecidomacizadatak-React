import React from 'react';
import Form from './components/Form';

function Contact(){
    const kontakt={
        adresa: "Pere Perovića 5",
        telefon: "065/555-4574",
        email:"simishop@yahoo.com",
    }
    return(
        <div>
            <br></br>
            <br></br>
            <Form/>
            <br></br>

            <br></br>
            <br></br>

            <h3>Za sva dodatna pitanja, budi slobodan/na i kontaktiraj Simi's shop:</h3>
            <br></br>

            <ul> 
                <li>Putem telefona: {kontakt.telefon}</li> 
                <li>Posetom na adresi: {kontakt.adresa}</li>
                <li>Putem e-mail adrese: {kontakt.email}</li>
            </ul>
            <br></br>
    
            
        </div>
    )
}

export default Contact;