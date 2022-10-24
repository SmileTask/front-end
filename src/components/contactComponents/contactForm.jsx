import React from 'react'
import '../../css/contactCss/form.css'

const contactForm = () => {
    return (
        <div className="containerFormContact">
            <div className="contactForm-content">
                <div className="contentContact-form">
                    <form action="">
                        <label htmlFor="fullName">FULLNAME
                            <br/>
                            <input type="text" name="email" id="email" placeholder="Enter your fullname"/>
                        </label>
                        <br/>
                        <label htmlFor="yourEmail">YOUR EMAIL
                            <br/>
                            <input type="email" placeholder="Enter your email"/>
                        </label>
                        <br/>
                        <label htmlFor="commentary">COMMENTARY
                            <br/>
                            <textarea name="commentary" id="commentary" cols="30" rows="10" placeholder="Write anything you want to tell us"></textarea>
                        </label>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contactForm