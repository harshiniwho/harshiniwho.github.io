import React from 'react';

import Copyright from './Copyright';
import Form from './Form';
import SocialMedia from './SocialMedia';

function Footer() {
    return (
        <div id="footer-wrapper">
            <div id="footer" className="container">
                <header className="major">
                    <h2>Euismod aliquam vehicula lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit<br />
                    dolor neque semper magna lorem ipsum feugiat veroeros lorem ipsum dolore.</p>
                </header>
                <div className="row">
                    <Form />
                    <SocialMedia />
                </div>
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;