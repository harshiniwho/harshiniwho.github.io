import React from 'react';

import content from './content';

function Copyright() {
    return (
        <div id="copyright" className="container">
            <ul className="menu">
                <li>&copy; {content.copyright}</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
            <p>{content.copyrightLine2}</p>
        </div>
    );
}

export default Copyright;