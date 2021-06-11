import React from 'react';

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
        </React.Fragment>
    );
}

export default Component;