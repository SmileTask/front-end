import React from 'react'

import ContactInfo from '.././components/contactComponents/contactInfo'
import ContactForm from '.././components/contactComponents/contactForm.jsx'


const contact = () => {
    return(
        <div className="contactContainer">
            <ContactInfo/>
            <ContactForm/> 
        </div>
    )
}

export default contact