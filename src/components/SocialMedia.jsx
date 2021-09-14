import React from 'react';

function SocialMedia() {
    return (
        <section className="col-6 col-12-narrower">
            <div className="row gtr-0">
                <ul className="divided icons col-6 col-12-mobile">
                    <li className="icon brands fa-twitter"><a href="#"><span className="extra">twitter.com/</span>untitled</a></li>
                    <li className="icon brands fa-facebook-f"><a href="#"><span className="extra">facebook.com/</span>untitled</a></li>
                    <li className="icon brands fa-dribbble"><a href="#"><span className="extra">dribbble.com/</span>untitled</a></li>
                </ul>
                <ul className="divided icons col-6 col-12-mobile">
                    <li className="icon brands fa-instagram"><a href="#"><span className="extra">instagram.com/</span>untitled</a></li>
                    <li className="icon brands fa-youtube"><a href="#"><span className="extra">youtube.com/</span>untitled</a></li>
                    <li className="icon brands fa-pinterest"><a href="#"><span className="extra">pinterest.com/</span>untitled</a></li>
                </ul>
            </div>
        </section>
    );
}

export default SocialMedia;