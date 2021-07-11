import React from 'react';
import { Link } from 'react-router-dom';
//import logo from 'Desktop/React World Project/profileproject/src/gif/aea668a381c99256ff48cdd479791617.gif';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row"> 
                    <div className="col-sm-4 text-center">
                        <h2>Contact</h2>
                        <a role="button" className="btn btn-link" href="tel:+7045303156"><i className="fa fa-phone" /> (704)530-3156</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> zuffy3@gmail.com</a><br />
                        <a role="button" className="btn btn-link" href="/contactus"><i className="fa fa-inbox" /> Feedback Page</a><br />
                        <a role="button" className="btn btn-link" href="/aboutus"><i className="fa fa-address-book" /> About Us Page</a>
                    </div>            
                    <div className="col-sm-3 offset-1 col-sm-2">
                        <h2>Continents</h2>
                        <ul className="list-unstyled">
                            <li><Link to='/Africa'>Africa</Link></li>
                            <li><Link to='/Asia'>Asia</Link></li>
                            <li><Link to='/Australia'>Australia</Link></li>
                            <li><Link to='/Europe'>Europe</Link></li>
                            <li><Link to='/NorthAmerica'>North America</Link></li>
                            <li><Link to='/SouthAmerica'>South America</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-sm-3 text-center">
                        <h2>Social</h2>
                        <div>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        </div>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;