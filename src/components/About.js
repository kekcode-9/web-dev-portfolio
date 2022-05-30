import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
    return (
        <motion.div
        initial = {{opacity: 0, y: -20}}
        animate = {{opacity: 1, y: 0}}
        exit = {{opacity: 0}}
        transition = {{delay: 0.2, type: "spring"}}
        >
            <div className="about">
                <div className="card">
                    <motion.div
                    initial = {{opacity: 0, y: -10}}
                    animate = {{opacity: 1, y: -3}}
                    transition = {{duration: 1, delay: 0.7}}
                    >
                        <div className="image">
                            <img src="images/bio-img-1.png" alt="avatar"/>
                        </div>
                    </motion.div>
                    <motion.div
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{duration: 1.5, delay: 0.8}}
                    >
                        <div className="brief">
                            Hi, I am Rupamita and I enjoy building web applications.
                            Since March of 2022, I have been working on my personal frontend projects using 
                            HTML, Vanilla JavaScript, pure CSS, SASS, React. I like making things visually 
                            appealing and I hope you enjoy visiting this portfolio app I made. 
                            Feel free to take a look at my works. 
                        </div>
                    </motion.div>
                    <div className="buttons">
                        <motion.div
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        transition = {{delay: 1.6, duration: 1}}
                        >
                            <Link to='/works' className="button-link">Checkout My Works</Link>
                        </motion.div>
                        <motion.div
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        transition = {{delay: 2, duration: 1}}
                        >
                            <Link to='/' className="button-link">Go Back</Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;