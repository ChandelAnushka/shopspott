import React from 'react';
import './Home.css';
import './Bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner_img from "./img/banner/banner-img.png";
import f_icon1 from "./img/features/f-icon1.png";
import f_icon2 from "./img/features/f-icon2.png";
import f_icon3 from "./img/features/f-icon3.png";
import f_icon4 from "./img/features/f-icon4.png";
import c1 from "./img/category/c1.jpg";
import c2 from "./img/category/c2.jpg";
import c3 from "./img/category/c3.jpg";
import c4 from "./img/category/c4.jpg";
import c5 from "./img/category/c5.jpg";
import p1 from "./img/product/p1.jpg";
import p2 from "./img/product/p2.jpg";
import p3 from "./img/product/p3.jpg";
import p4 from "./img/product/p4.jpg";
import p5 from "./img/product/p5.jpg";
import p6 from "./img/product/p6.jpg";
import p7 from "./img/product/p7.jpg";
import p8 from "./img/product/p8.jpg";
import e_p1 from "./img/product/e-p1.png";
import b1 from "./img/brand/1.png";
import b2 from "./img/brand/2.png";
import b3 from "./img/brand/3.png";
import b4 from "./img/brand/4.png";
import b5 from "./img/brand/5.png";
import r1 from "./img/deals/r1.jpg";
import r2 from "./img/deals/r2.jpg";
import r3 from "./img/deals/r3.jpg";
import r4 from "./img/deals/r4.jpg";
import r6 from "./img/deals/r6.jpg";
import r7 from "./img/deals/r7.jpg";
import r9 from "./img/deals/r9.jpg";
import r10 from "./img/deals/r10.jpg";
import r11 from "./img/deals/r11.jpg";




function Home() {

	const openMenu = () => {
		document.getElementById("search_input_box").style.display = "block";
	}

	const closeMenu = () => {
		document.getElementById("search_input_box").style.display = "none";
	}

	
  return (
<div>
    <header className="header_area sticky-header">
    <div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light main_box">
				<div className="container">
					
					<a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav ml-auto">
							<li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
							<li className="nav-item">
								<a className="nav-link" href="contact.html">Shop</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="contact.html">Blog</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="contact.html">Pages</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="contact.html">Contact</a>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li className="nav-item"><a href="#" className="cart"><span className="ti-bag">Cart</span></a></li>
							<li className="nav-item">
								<button className="search" onClick={openMenu}>Search<span className="lnr lnr-magnifier" id="search"></span></button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
  <div className="search_input" id="search_input_box">
    <div className="container">
      <form className="d-flex justify-content-between">
        <input type="text" className="form-control" id="search_input" placeholder="Search Here"/>
        <button type="submit" className="btn" id="btn" onClick={closeMenu}>Close</button>
        <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
      </form>
    </div>
  </div>
  </header>

  <div className="banner-area">
    <div className="container">
      <div className="row fullscreen align-items-center justify-content-start">
        <div className="col-lg-12">
          <div className="active-banner-slider owl-carousel">
            
            <div className="row single-slide align-items-center d-flex">
              <div className="col-lg-5 col-md-6">
                
				  <br/><br/><br/><br/><br/><br/>
                  <div className="add-bag d-flex align-items-center">
                    {/* <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a> */}
                  </div>
                
              </div>
              <div className="col-lg-7">
                <div className="banner-img">
                  <img className="img-fluid" src="img/banner/banner-img.png" alt=""></img>
                </div>
              </div>
            </div>
            
            <div className="row single-slide">
              <div className="col-lg-5">
                <div className="banner-content">
                  <h1>Nike New <br/>Collection!</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <div className="add-bag d-flex align-items-center">
                    <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
                    <span className="add-text text-uppercase">Add to Bag</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="banner-img">
                  <img className="img-fluid" src={banner_img} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  </div>
  <div className="features-area section_gap">
		<div className="container">
			<div className="row features-inner">
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src={f_icon1} alt="f_icon1"></img>
						</div>
						<h6>Free Delivery</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src={f_icon2} alt="f_icon2"></img>
						</div>
						<h6>Return Policy</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src={f_icon3} alt="f_icon3"></img>
						</div>
						<h6>24/7 Support</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src={f_icon4} alt="f_icon4"></img>
						</div>
						<h6>Secure Payment</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
			</div>
		</div>
	</div>
 
	<div className="category-area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-12">
					<div className="row">
						<div className="col-lg-8 col-md-8">
							<div className="single-deal">
								<div className="overlay"></div>
								<img className="img-fluid w-100" src={c1} alt=""></img>
								<a href="img/category/c1.jpg" className="img-pop-up" target="_blank">
									<div className="deal-details">
										<h6 className="deal-title">Sneaker for Sports</h6>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="single-deal">
								<div className="overlay"></div>
								<img className="img-fluid w-100" src={c2} alt=""></img>
								<a href="img/category/c2.jpg" className="img-pop-up" target="_blank">
									<div className="deal-details">
										<h6 className="deal-title">Sneaker for Sports</h6>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="single-deal">
								<div className="overlay"></div>
								<img className="img-fluid w-100" src={c3} alt=""></img>
								<a href="img/category/c3.jpg" className="img-pop-up" target="_blank">
									<div className="deal-details">
										<h6 className="deal-title">Product for Couple</h6>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-8 col-md-8">
							<div className="single-deal">
								<div className="overlay"></div>
								<img className="img-fluid w-100" src={c4} alt=""></img>
								<a href="img/category/c4.jpg" className="img-pop-up" target="_blank">
									<div className="deal-details">
										<h6 className="deal-title">Sneaker for Sports</h6>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-deal">
						<div className="overlay"></div>
						<img className="img-fluid w-100" src={c5} alt=""></img>
						<a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
							<div className="deal-details">
								<h6 className="deal-title">Sneaker for Sports</h6>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

  {/* start product Area */}


<Carousel infiniteLoop useKeyboardArrows >
	<div className="owl-carousel active-product-area section_gap">
		{/* <!-- single product slide --> */}
		<div className="single-product-slider">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 text-center">
						<div className="section-title">
							<h1>Latest Products</h1><p>swipe to see coming products</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore
								magna aliqua.</p>
						</div>
					</div>
				</div>
				<div className="row">
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p1} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p2} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p3} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">
									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p4} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p5} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p6} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p7} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p8} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		<div className="owl-carousel active-product-area section_gap">
		{/* <!-- single product slide --> */}
		<div className="single-product-slider">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 text-center">
						<div className="section-title">
							<h1>Coming Products</h1><p>swipe to see latest products</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore
								magna aliqua.</p>
						</div>
					</div>
				</div>
				<div className="row">
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p6} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p8} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p3} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p5} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p1} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p4} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p1} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src={p8} alt=""></img>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</Carousel>
	
	{/* <!-- end product Area --> */}





	{/* <!-- Start exclusive deal Area --> */}
	<div className="exclusive-deal-area">
		<div className="container-fluid">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-6 no-padding exclusive-left">
					<div className="row clock_sec clockdiv" id="clockdiv">
						<div className="col-lg-12">
							<h1>Exclusive Hot Deal Ends Soon!</h1>
							<p>Who are in extremely love with eco friendly system.</p>
						</div>
						<div className="col-lg-12">
							<div className="row clock-wrap">
								<div className="col clockinner1 clockinner">
									<h1 className="days">150</h1>
									<span className="smalltext">Days</span>
								</div>
								<div className="col clockinner clockinner1">
									<h1 className="hours">23</h1>
									<span className="smalltext">Hours</span>
								</div>
								<div className="col clockinner clockinner1">
									<h1 className="minutes">47</h1>
									<span className="smalltext">Mins</span>
								</div>
								<div className="col clockinner clockinner1">
									<h1 className="seconds">59</h1>
									<span className="smalltext">Secs</span>
								</div>
							</div>
						</div>
					</div>
					<a href="" className="primary-btn">Shop Now</a>
				</div>
				<div className="col-lg-6 no-padding exclusive-right">
					<div className="active-exclusive-product-slider">
					<Carousel infiniteLoop useKeyboardArrows autoPlay >
						{/* <!-- single exclusive carousel --> */}
						<div className="single-exclusive-slider">
							<img className="img-fluid" src={e_p1} alt=""></img>
							<div className="product-details">
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<h4>addidas New Hammer sole
									for Sports person</h4>
								<div className="add-bag d-flex align-items-center justify-content-center">
									<a className="add-btn" href=""><span className="ti-bag"></span></a>
									<span className="add-text text-uppercase">Add to Bag</span>
								</div>
							</div>
						</div>
						{/* <!-- single exclusive carousel --> */}
						<div className="single-exclusive-slider">
							<img className="img-fluid" src={e_p1} alt=""></img>
							<div className="product-details">
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<h4>addidas New Hammer sole
									for Sports person</h4>
								<div className="add-bag d-flex align-items-center justify-content-center">
									<a className="add-btn" href=""><span className="ti-bag"></span></a>
									<span className="add-text text-uppercase">Add to Bag</span>
								</div>
							</div>
						</div>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- End exclusive deal Area --> */}


	{/* <!-- Start brand Area --> */}
	<div className="brand-area section_gap">
		<div className="container">
			<div className="row">
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={b1} alt=""></img>
				</a>
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={b2} alt=""></img>
				</a>
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={b3} alt=""></img>
				</a>
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={b4} alt=""></img>
				</a>
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={b5} alt=""></img>
				</a>
			</div>
		</div>
	</div>
	{/* <!-- End brand Area --></a> */}


	{/* <!-- Start Deals of the Week Area --> */}
	<div className="related-product-area section_gap_bottom">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6 text-center">
					<div className="section-title">
						<h1>Deals of the Week</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-9">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r1} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r2} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r3} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r4} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r6} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r7} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r9} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r10} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<a href="#"><img src={r11} alt=""></img></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="ctg-right">
						<a href="#" target="_blank">
							<img className="img-fluid d-block mx-auto" src={c5} alt=""></img>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- End related-product Area --> */}




	{/* <!-- start footer Area --> */}
	<footer className="footer-area section_gap">
		<div className="container">
			<div className="row">
				<div className="col-lg-3  col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>About Us</h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
							magna aliqua.
						</p>
					</div>
				</div>
				<div className="col-lg-4  col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>Newsletter</h6>
						<p>Stay update with our latest</p>
						<div className="" id="mc_embed_signup">

							<form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
							 method="get" className="form-inline">

								<div className="d-flex flex-row">

									<input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
									 required="" type="email"></input>


									<button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
									<div >
										<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"></input>
									</div>

				
								</div>
								<div className="info"></div>
							</form>
						</div>
					</div>
				</div>
				<div className="col-lg-3  col-md-6 col-sm-6">
					<div className="single-footer-widget mail-chimp">
						<h6 className="mb-20">Instragram Feed</h6>
						<ul className="instafeed d-flex flex-wrap">
							<li><img src="img/i1.jpg" alt=""></img></li>
							<li><img src="img/i2.jpg" alt=""></img></li>
							<li><img src="img/i3.jpg" alt=""></img></li>
							<li><img src="img/i4.jpg" alt=""></img></li>
							<li><img src="img/i5.jpg" alt=""></img></li>
							<li><img src="img/i6.jpg" alt=""></img></li>
							<li><img src="img/i7.jpg" alt=""></img></li>
							<li><img src="img/i8.jpg" alt=""></img></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-2 col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>Follow Us</h6>
						<p>Let us be social</p>
						<div className="footer-social d-flex align-items-center">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-dribbble"></i></a>
							<a href="#"><i className="fa fa-behance"></i></a>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</footer>
	{/* <!-- End footer Area --> */}

</div>
  );
}

export default Home;
