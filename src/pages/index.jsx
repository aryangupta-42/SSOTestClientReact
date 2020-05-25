import React from 'react';

import classes from '../styles/index.module.css';

const Index = () => (
    <div className={classes.rootContainer}>
        <h1>Oops! It seems like you are not logged in :(</h1>
        <a href="http://localhost:3000/user/login?serviceURL=http://localhost:5000">
            <div className={classes.loginBtn}>
                Login with <b>CASI</b>
            </div>
        </a>
    </div>
);

export default Index;
