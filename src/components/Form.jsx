import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from '../hooks/useForm';

const formData = {
    user_name: '',
    user_email: '',
    message: '',
}

const formValidations = {
    user_name: [ (value) => value.length >= 2 , 'The name must contain at least 2 characters.'],
    user_email: [ (value) => value.includes('@'), 'Please enter your email address.'],
    message: [ (value) => value.length >= 1 , 'Please do not forget to write your message.'],
}

export const Form = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { 
        user_name, user_email, message, onInputChange,
        isFormValid, user_nameValid, user_emailValid, messageValid, onResetForm, 
        userOnChange, emailOnChange, bodyOnChange
    } = useForm(formData, formValidations);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if( !isFormValid ) return;

        emailjs.sendForm('service_suzsxa9', 'template_jyxxtpe', form.current, 'I9ICdanr77vrYHner')
            .then((result) => {
                onResetForm();
                setFormSubmitted(false)
            }, (error) => {
                console.log(error.text);
        });
        
    }

    return (
        <div className="form-container">
            
            <form className="form-contact" ref={form} onSubmit={ sendEmail }>
                <label>Name</label>
                {
                    !!user_nameValid && (userOnChange || formSubmitted) ? <p className='validForm'>{user_nameValid}</p> : ''
                }
                <div className="input-icon">
                    <i className="fa-regular fa-user"></i>
                    <input value={ user_name } onChange={ onInputChange } type="text" placeholder="Kriss Kyle" name="user_name" />
                </div>
                <label>Email</label>
                {
                    !!user_emailValid && (emailOnChange || formSubmitted) ? <p className='validForm'>{user_emailValid}</p> : ''
                }
                <div className="input-icon">
                    <i className="fa-regular fa-envelope"></i>
                    <input value={ user_email } onChange={ onInputChange } type="text" placeholder="example@gmail.com" name="user_email" />
                </div>
                <label>Message</label>
                {
                    !!messageValid && (bodyOnChange || formSubmitted) ? <p className='validForm'>{messageValid}</p> : ''
                }
                <i className="fa-regular fa-paper-plane-top"></i>
                <textarea value={ message } onChange={ onInputChange } placeholder="body message" name="message" cols="30" rows="10"></textarea>
                <button className="sendMessage zoomHover scaleHoverCard"><i className="fa-regular fa-paper-plane"></i> Send Message</button>
            </form>
        </div>
    )
}