import React, { Component } from 'react';
import Calculater from '../components/calculater/Calculater';
import Navbar from '../components/navbar/Navbar';

class Calcu extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Calculater />
            </>
        )
    }
}

export default Calcu;
