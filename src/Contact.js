import React from 'react';
import Form from './components/Form';

function Contact(){
    const kontakt={
        adresa: "Pere Perovića 5",
        telefon: "065/555-4574"
    }
    return(
        <div>
            <br></br>
            <br></br>
            <Form/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h3>Za sva dodatna pitanja, budite slobodni i kontaktirajte Simi's shop putem telefona: {kontakt.telefon} ili nas posetite na adresi: {kontakt.adresa}</h3>
            <br></br>
    
            
        </div>
    )
}

export default Contact;