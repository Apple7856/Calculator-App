import React, { Component } from 'react';
import Main from '../components/main/Main';
import Navbar from '../components/navbar/Navbar';

class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Main />
            </>
        )
    }
}

export default Home;
