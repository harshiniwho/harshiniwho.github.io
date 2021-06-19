import React from 'react';
import Copyright from './Copyright';

import Navbar from './Navigation/Navbar';
import Navlinks from './Navigation/Navlinks';

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
            {props.component}
            <Copyright />
        </React.Fragment>
    );
}

export default Component;