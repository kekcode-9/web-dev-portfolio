import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Works () {
    const projectSummary = [
        {
            screenshot: 'images/works/easybank-landing-page/easybank-landing-page-ss.png',
            imagepack: [
                'images/works/easybank-landing-page/easybank-landing-page-mobile.png'
            ],
            link: 'https://kekcode-9.github.io/EasyBankLandingPage/',
            repolink: 'https://github.com/kekcode-9/EasyBankLandingPage.git'
        },
        {
            screenshot: 'images/works/product-detail-page/product-detail-page-ss.png',
            imagepack: [
                'images/works/product-detail-page/product-detail-page-ss-mobile.png',
                'images/works/product-detail-page/product-detail-page-ss-ipad-1.png'
            ],
            link: 'https://kekcode-9.github.io/ProductDetailPage_Sneakers/',
            repolink: 'https://github.com/kekcode-9/ProductDetailPage_Sneakers.git'
        }
    ]
    return (
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        transition = {{delay: 0.5, duration: 1}}
        >
            <div className='works'>
                <a className='folio-src-link' href='https://github.com/kekcode-9/web-dev-portfolio.git' target='_blank'>
                    portfolio source
                </a>
                <div className='top-div'>
                    <div className='other-projects'>
                        SCROLL DOWN FOR MY OTHER FRONTEND PROJECTS
                    </div>
                </div>
                <div className="casing"
                style={{background: "url('images/bg-image-2.png') no-repeat center center fixed",
                        backgroundSize: 'cover'}}
                >
                    <div className="project-card" id='project-card-easybank'>
                        <div className='left-div'>
                            <div className="project-brief">
                                The responsive landing page was created as part of a&nbsp;
                                <a href='https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN'
                                target='_blank'
                                style={{textDecoration: 'none'}}
                                id='frontend-mentor-link'>
                                    challenge from Frontend Mentor
                                </a>. This page uses CSS and vanilla JavaScript. To test the responsive-ness you can either use 
                                dev-tools to simulate mobile devices or you can simply resize your 
                                browser to mobile size and test. For better results refresh the 
                                page once you have resized the viewport.
                            </div>
                            <div className='project-links'>
                                <a href={projectSummary[0].link} target='_blank'
                                style={{textDecoration: 'none'}} className='project-link'>
                                    Checkout the project
                                </a>
                                <a href={projectSummary[0].repolink} target='_blank'
                                style={{textDecoration: 'none'}} className='project-link'>
                                    Checkout the code in github
                                </a>
                            </div>
                        </div>
                        <div className="demo-image">
                            <img 
                            src='images/works/easybank-landing-page/layered-easybank-3.png'
                            id='easybank-demo'
                            />
                        </div>
                    </div>
                    
                    <div className="project-card" id='project-card-sneakers'>
                        <div className='left-div'>
                            <div className="project-brief">
                                The responsive product page was built with React JS as part of a&nbsp;
                                <a href='https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6'
                                target='_blank'
                                style={{textDecoration: 'none'}}
                                id='frontend-mentor-link'>
                                    challenge from Frontend Mentor
                                </a>. I have added to it a separate desgin for devices within 
                                the range (w x h): (810 x 1080) down to (720 x 1080). To test 
                                the responsive-ness you can either use dev-tools to simulate 
                                mobile devices or you can simply resize your browser to mobile 
                                size and test. For better results refresh the page once you have resized the viewport.
                            </div>
                            <div className='project-links'>
                                <a href={projectSummary[0].link} target='_blank'
                                style={{textDecoration: 'none'}} className='project-link'>
                                    Checkout the project
                                </a>
                                <a href={projectSummary[0].repolink} target='_blank'
                                style={{textDecoration: 'none'}} className='project-link'>
                                    Checkout the code in github
                                </a>
                            </div>
                        </div>
                        <div className="demo-image">
                            <img 
                            src='images/works/product-detail-page/layered-sneakers-3.png'
                            id='sneakers-demo'
                            />
                        </div>
                    </div>

                    <div className='contact-page-link'>
                        <Link to='/contact' id='contact-link'>Contact Me</Link>
                    </div>
                </div>
                {/*<Link to='/contact' id='contact'>Contact Me</Link>*/}
            </div>
        </motion.div>
    );
}

export default Works;