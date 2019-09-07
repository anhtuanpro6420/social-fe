import React from 'react';
import { Link } from "react-router-dom";

import classes from './Header.module.css';

const header = () => (
    <header className={classes.Header}>
        <nav className={classes.Nav}>
          <Link to='/products' className={classes.active}>Home</Link>
          <div className={classes.rightNav}>
            <Link to='/auth'>Login</Link>
            <Link to='/sign-up'>Sign up</Link>
          </div>
        </nav>
    </header>
);

export default header;