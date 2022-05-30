import { motion } from 'framer-motion';

function Contact () {
    return (
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        transition = {{delay: 0.5, duration: 1}}
        >
            <div className="contact">
                <div className="icon-div">
                    <a href="mailto:rupamitas.dev@gmail.com">
                        <img src="images/gmail-icon-1.png"/>
                    </a>
                    <div className="contact-info">
                        rupamitas.dev@gmail.com
                    </div>
                </div>
                <div className="icon-div">
                    <a href="https://www.linkedin.com/in/rupamita-sarkar-232a431a6/" target='_blank'>
                        <img src="images/linkedin-icon-1.png"/>
                    </a>
                </div>
                <div className="icon-div">
                    <img src="images/phone-icon-1.png"/>
                    <div className="contact-info">
                        +91-9007551365
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;