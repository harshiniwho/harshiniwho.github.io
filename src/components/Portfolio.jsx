import React from 'react';

function Portfolio() {
    return (
        <div className="wrapper">
            <section id="portfolio" className="container">
                <header className="major">
                    <h2>Sed magna consequat lorem curabitur tempus</h2>
                    <p>Elit aliquam vulputate egestas euismod nunc semper vehicula lorem blandit</p>
                </header>
                <div className="row features">
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper first">
                            <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                        vel sem sit dolor neque semper magna lorem ipsum.</p>
                    </section>
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                        vel sem sit dolor neque semper magna lorem ipsum.</p>
                    </section>
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                        vel sem sit dolor neque semper magna lorem ipsum.</p>
                    </section>
                </div>
                <ul className="actions major">
                    <li><a href="#" className="button">Elevate my awareness</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Portfolio;