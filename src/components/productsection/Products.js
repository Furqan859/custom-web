import React from 'react';
import {productsdata} from './ProductsData'
import '../../styles/bootstrap.css';
import '../../styles/responsive.css';
import '../../styles/style.css';
import '../../styles/style.css.map';
import { NavLink } from 'react-router-dom';
// import '../../styles/style.scss';



const Products = () => {
  return (
    <NavLink to='/products'> <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Products
        </h2>
      </div>
      
        
      <div className="row">
        <div className="col-sm-6 col-lg-4">
        {productsdata.map((product) =>
          <div className="box">
            <div className="img-box">
              <img src={product.image} alt=""/>
            </div>
            <div className="detail-box">
              <div className="text">
                <a href="" className="p_name">
                  {product.name}
                  
                </a>
                <h5>
                  <span>$</span> {product.price}
                </h5>
              </div>
              <div>
              <div className="btn-box-1">
              <a href="" className="btn">
                Shop Now
              </a>
             
            </div>
              </div>
              <div className="like">
                <h6>
                  Rating
                </h6>
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>)}
        </div>
       
      </div>
      <div className="btn-box">
        <a href="">View All</a>
      </div>
    </div>
  </section></NavLink>
  )
}

export default Products