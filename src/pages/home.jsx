import React from 'react';

import classes from '../styles/home.module.css';

const Home = () => (
    <div>
        <div className={classes.rootContainer}>
            <div className={classes.center}>
                <div className={classes.pageTitle}>Profile</div>
                <div className={classes.miniLine} />
                <div className={classes.greeting}>
                    Hello, Aryan =&gt; aryanno
                </div>
                <div className={classes.email}>
                    Your email is : aryanguptaleo@gmail.com
                </div>
                <div className={classes.welcome}>
                    Welcome to the Test server!
                </div>
                <p>
                    <a href="/notes">Click here</a> to manage and view your
                    notes
                </p>
                <div className={classes.logoutBtn}>
                    <a href="/logout">Log Out</a>
                </div>
            </div>
        </div>
        <div className={classes.navBar}>
            <div className={classes.navTitle}>
                <h3>Devclub Client</h3>
            </div>
        </div>
    </div>
);

export default Home;
