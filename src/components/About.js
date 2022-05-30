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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Lacus sed viverra tellus in hac habitasse 
                        platea dictumst vestibulum. Netus et malesuada fames ac.
                        Eleifend mi in nulla posuere sollicitudin. Interdum 
                        consectetur libero id faucibus nisl tincidunt. Aliquet 
                        nec ullamcorper sit amet risus nullam eget. Velit laoreet
                        id donec ultrices tincidunt arcu. 
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