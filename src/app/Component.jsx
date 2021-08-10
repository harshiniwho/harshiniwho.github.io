import React from 'react';
import Copyright from './Copyright';

import Navbar from './Navigation/Navbar';
import Navlinks from './Navigation/Navlinks';
import Contact from './Contact';
import Feminism from './Feminism';
import Jumbotron from './Jumbotron';
import Resume from './Resume/Resume';
import Writing from './Writing';

function Component(props) {
    return (
        <React.Fragment>
            <Navbar
                rightLinks={<Navlinks />}
                absolute
                color="black"
                changeColorOnScroll={{
                height: 400,
                color: "white",
                }}
            />
            <section id="home">
                <Jumbotron/>
            </section>
            <section id="resume">
                <Resume/>
            </section>
            <section id="writing">
                <Writing/>
            </section>
            <section  id="feminism">
                <Feminism/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
            <Copyright />
        </React.Fragment>
    );
}

export default Component;