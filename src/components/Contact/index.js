import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeout);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'gmail',
            // 'template_1',   Something missing here
            refForm.current,
            // 'user_1',   Something missing here
        ) .then(
            () =>{
                alert('Email sent successfully')
                window.location.reload(false)
            },
            () => {
                alert('Email failed to send')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} // Pass the updated class to the component
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>I am passionate about the tech world and always eager to explore opportunities that foster career growth. With strong programming skills and a solid understanding of the tech landscape, I am excited to collaborate on projects that push boundaries and drive innovation
                        </p>
                        <div class='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                            {/* <form> */}
                                <ul>
                                    <li className='half'>
                                        <input type='text' name="name" placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email'
                                        name="email"
                                        placeholder='Email'
                                        required
                                        />
                                    </li>
                                    <li>
                                        <input
                                        type='text'
                                        name="subject"
                                        placeholder='Subject'
                                        required
                                        />
                                    </li>
                                    <li>
                                        <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                        ></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className='flat-button cursor-pointer' value='SEND' />
                                    </li>
                                </ul>
                            </form>
                        </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;





















