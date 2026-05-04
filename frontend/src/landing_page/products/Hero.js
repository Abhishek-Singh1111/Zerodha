import React from 'react'
import { Link } from 'react-router-dom';
function Hero() {
    return (  
        <>
        <section className="container lp-section my-3 my-md-4 p-4 p-md-5 text-center">
            <h1 className='mb-2'>Zerodha products</h1>
            <p className='mt-3 fs-5 mb-2'>Sleek, modern, and intuitive trading platform</p>
            <p className='mb-0'>
              Check <Link to="/products" className="text-decoration-none">out our investment offerings <i className="fa-solid fa-arrow-right"></i></Link>
            </p>
        </section>
        </>
    );
}

export default Hero;
