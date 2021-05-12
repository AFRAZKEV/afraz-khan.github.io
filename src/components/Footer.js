import React from 'react';
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

function Footer(){
    return(
        <footer >
            <div className='row' >
                <div className='col-lg-6' >
                        @2021 afraz-khan.github.io
                </div>
                <div className='col-lg-6' >
                    <ul >
                        <li >
                            <a href='https://www.instagram.com/mrafrazkhan/' >
                                <img className='social-icon' src={instagram} />
                            </a>
                        </li>
                        <li >
                            <a href='https://twitter.com/MrAfrazKhan' >
                                <img className='social-icon' src={twitter} />
                            </a>
                        </li>
                        <li >
                            <a href='https://www.linkedin.com/in/afraz-khan/' >
                                <img className='social-icon' src={linkedin} />
                            </a>
                        </li>
                        <li >
                            <a href='https://github.com/afraz-khan' >
                                <img className='social-icon' src={github} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;