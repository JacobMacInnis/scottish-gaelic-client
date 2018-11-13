import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import About from './about'
import LoginForm from './login-form';
import MacInnisTartan from './../images/macinnes_dress-dalgliesh.jpg';
import './landing-page.css'

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landing">
            <h2 className='landing-h2'>Beautiful Scottish Gaelic</h2>
            <About />
            <LoginForm />
            <Link className='link' to="/register">Register</Link>
            <img src={MacInnisTartan} alt="MacInnis Tartan background" className="bg"></img>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
