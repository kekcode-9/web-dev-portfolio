import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Works () {
    const projectSummary = [
        {
            id: 1,
            heading: 'Tripping : A travel safety app',
            image: '/images/works/Trippin.png',
            link: 'https://www.behance.net/gallery/159859037/Travel-Safety-App'
        }
        /*
        {
            id: 1,
            heading: 'Easybank Landing Page',
            image: 'images/works/easybank-landing-page/layered-easybank-3.png',
            link: 'https://kekcode-9.github.io/EasyBankLandingPage/',
            repolink: 'https://github.com/kekcode-9/EasyBankLandingPage.git'
        },
        {
            id: 2,
            heading: 'Sneakers Product Page',
            image: 'images/works/product-detail-page/layered-sneakers-3.png',
            link: 'https://kekcode-9.github.io/ProductDetailPage_Sneakers/',
            repolink: 'https://github.com/kekcode-9/ProductDetailPage_Sneakers.git'
        },
        {
            id: 3,
            heading: 'Multipage Online Grocery Store with React',
            image: 'images/works/grocery-store-app/grocery-store-layered.png',
            link: 'https://kekcode-9.github.io/online-grocery-store-frontend/',
            repolink: 'https://github.com/kekcode-9/online-grocery-store-frontend.git'
        } */
    ]
    return (
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        transition = {{delay: 0.5, duration: 1}}
        >
            <div className='works'>
                <div className='my-works'>
                    My Frontend Works
                </div>
                <div className='contact-page-link'>
                    <Link to='/contact' id='contact-link'>Contact Me</Link>
                </div>
                <div className="casing"
                style={{background: "url('images/bg-image-2.png') no-repeat center center fixed",
                        backgroundSize: 'cover'}}
                >
                    {projectSummary.map((project) => (
                        <div key = {project.id} className = 'project-card'>
                            <div className='project-image'>
                                <img src={project.image} alt={project.heading}/>
                            </div>
                            <div className='project-heading'>
                                {project.heading}
                            </div>
                            <div className='project-links'>
                                <div className='project-link'>
                                    <a href={project.link} target='_blank'>
                                        see the project
                                    </a>
                                </div>
                                { /* <div className='project-link'>
                                    <a href={project.link} target='_blank'>
                                        github repo
                                    </a>
                                </div> */ }
                            </div>
                        </div>
                    ))}
                </div>
                {/*<Link to='/contact' id='contact'>Contact Me</Link>*/}
            </div>
        </motion.div>
    );
}

export default Works;