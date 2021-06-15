import React, { Component } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

export class Products extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{
                    height: "100px",
                    width: "100%"
                }}>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Products
