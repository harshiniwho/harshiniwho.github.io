import React from 'react';

function Form() {
    return (
        <section className="col-6 col-12-narrower">
        <form method="post" action="#">
            <div className="row gtr-50">
                <div className="col-6 col-12-mobile">
                    <input name="name" placeholder="Name" type="text" />
                </div>
                <div className="col-6 col-12-mobile">
                    <input name="email" placeholder="Email" type="text" />
                </div>
                <div className="col-12">
                    <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div className="col-12">
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li>
                        <li><input type="reset" value="Clear form" /></li>
                    </ul>
                </div>
            </div>
        </form>
    </section> 
    );
}

export default Form;