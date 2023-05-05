import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div classNameName="container">
                    <section className="hero">
                        <div className="hero-image">
                            <img src='https://s3.us-east-1.wasabisys.com/grid50/2017/12/white-background-prudct-photography-example-002.jpg' alt="Featured Product"/>
                        </div>
                        <div className="hero-content">
                            <h1>Featured Product</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eros sed mauris dignissim vestibulum. Etiam tincidunt massa button sem venenatis, eget malesuada tellus feugiat. Suspendisse lobortis vel lacus in bibendum.</p>
                        </div>
                    </section>
                    <section className="products">
                        <h2>Popular Products</h2>
                        <div className="product-list">
                            <div className="product">
                                <img classNameName='rounded' src='https://s3.us-east-1.wasabisys.com/grid50/2017/12/white-background-prudct-photography-example-002.jpg' alt="Product 1"/>
                                    <h3>Product 1</h3>
                                    <p className="p">$19.99</p>
                                    
                                    
                                    <button classNameName='btn btn-primary' className="button">Add to Cart</button>
                            </div>
                            <div className="product">
                                <img src='https://s3.us-east-1.wasabisys.com/grid50/2017/12/white-background-prudct-photography-example-002.jpg' alt="Product 2"/>
                                    <h3>Product 2</h3>
                                    <p className="p">$29.99</p>
                                    <button classNameName='btn btn-primary' className="button">Add to Cart</button>
                            </div>
                            <div className="product">
                                <img src='https://s3.us-east-1.wasabisys.com/grid50/2017/12/white-background-prudct-photography-example-002.jpg' alt="Product 3"/>
                                    <h3>Product 3</h3>
                                    <p className="p">$39.99</p>
                                    <button classNameName='btn btn-primary' className="button">Add to Cart</button>
                            </div>
                        </div>
                    </section>
                <footer>
                    <p>&copy; 2023 My E-commerce Website</p>
                </footer>
            </div>
        </>
    )
}