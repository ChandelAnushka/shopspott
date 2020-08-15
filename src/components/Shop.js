import React from 'react';
import './Shop.css'
import './Home.css'
import c1 from "./img/brand/1.png";
import c4 from './img/logo.png';
import c5 from './img/product/p1.jpg';
import c6 from './img/product/p2.jpg';
import c7 from './img/product/p3.jpg';
import c8 from './img/product/p4.jpg';
import c9 from './img/product/p5.jpg';
import c10 from './img/product/p6.jpg';
import c11 from './img/deals/r1.jpg';
import c12 from './img/deals/r2.jpg';
import c13 from './img/deals/r3.jpg';
import c14 from './img/deals/r5.jpg';
import c15 from './img/deals/r6.jpg';
import c16 from './img/deals/r7.jpg';
import c17 from './img/deals/r9.jpg';
import c18 from './img/deals/r10.jpg';
import c19 from './img/deals/r11.jpg';
import c20 from './img/category/c5.jpg';
import c22 from './img/i1.jpg';
import c23 from './img/i2.jpg';
import c24 from './img/i3.jpg';
import c25 from './img/i4.jpg';
import c26 from './img/i5.jpg';
import c27 from './img/i6.jpg';
import c28 from './img/i7.jpg';
import c29 from './img/i8.jpg';
import c30 from './img/logo.png';
function Shop() {
	return (
		<div>
		<header class="header_area sticky-header">
    <div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light main_box">
				<div class="container">
						<a class="navbar-brand logo_h" href="index.html"><img src={c4} alt=""></img></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav ml-auto">
							<li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
							<li class="nav-item">
								<a class="nav-link" href="contact.html">Shop</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="contact.html">Blog</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="contact.html">Pages</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="contact.html">Contact</a>
							</li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="nav-item"><a href="abc.html" class="cart"><span class="ti-bag"></span></a></li>
							<li class="nav-item">
								<button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
  <div class="search_input" id="search_input_box">
    <div class="container">
      <form class="d-flex justify-content-between">
        <input type="text" class="form-control" id="search_input" placeholder="Search Here"/>
        <button type="submit" class="btn"></button>
        <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
      </form>
    </div>
  </div>
  </header>

		<div className="banner-area organic-breadcrumb">
			<div className="container">
				<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
					<div className="col-first">
						<h1>Shop Category page</h1>
						<nav className="d-flex align-items-center">
							<a href="index.html">Home<span className="lnr lnr-arrow-right"></span></a>
							<a href="abc.html">Shop<span className="lnr lnr-arrow-right"></span></a>
							<a href="category.html">Fashon Category</a>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-xl-3 col-lg-4 col-md-5">
					<div className="sidebar-categories">
						<div className="head">Browse Categories</div>
						<ul className="main-categories">
							<li className="main-nav-list"><a data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable">
								<span className="lnr lnr-arrow-right"></span>Fruits and Vegetables<span className="number">(53)</span></a>
								<ul className="collapse" id="fruitsVegetable" data-toggle="collapse" aria-expanded="false" aria-controls="fruitsVegetable">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>

							<li className="main-nav-list"><a data-toggle="collapse" href="#meatFish" aria-expanded="false" aria-controls="meatFish"><span
								className="lnr lnr-arrow-right"></span>Meat and Fish<span className="number">(53)</span></a>
								<ul className="collapse" id="meatFish" data-toggle="collapse" aria-expanded="false" aria-controls="meatFish">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
							<li className="main-nav-list"><a data-toggle="collapse" href="#cooking" aria-expanded="false" aria-controls="cooking"><span
								className="lnr lnr-arrow-right"></span>Cooking<span className="number">(53)</span></a>
								<ul className="collapse" id="cooking" data-toggle="collapse" aria-expanded="false" aria-controls="cooking">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
							<li className="main-nav-list"><a data-toggle="collapse" href="#beverages" aria-expanded="false" aria-controls="beverages"><span
								className="lnr lnr-arrow-right"></span>Beverages<span className="number">(24)</span></a>
								<ul className="collapse" id="beverages" data-toggle="collapse" aria-expanded="false" aria-controls="beverages">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
							<li className="main-nav-list"><a data-toggle="collapse" href="#homeClean" aria-expanded="false" aria-controls="homeClean"><span
								className="lnr lnr-arrow-right"></span>Home and Cleaning<span className="number">(53)</span></a>
								<ul className="collapse" id="homeClean" data-toggle="collapse" aria-expanded="false" aria-controls="homeClean">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
							<li className="main-nav-list"><a href="abc.html">Pest Control<span className="number">(24)</span></a></li>
							<li className="main-nav-list"><a data-toggle="collapse" href="#officeProduct" aria-expanded="false" aria-controls="officeProduct"><span
								className="lnr lnr-arrow-right"></span>Office Products<span className="number">(77)</span></a>
								<ul className="collapse" id="officeProduct" data-toggle="collapse" aria-expanded="false" aria-controls="officeProduct">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
							<li className="main-nav-list"><a data-toggle="collapse" href="#beauttyProduct" aria-expanded="false" aria-controls="beauttyProduct"><span
								className="lnr lnr-arrow-right"></span>Beauty Products<span className="number">(65)</span></a>
								<ul className="collapse" id="beauttyProduct" data-toggle="collapse" aria-expanded="false" aria-controls="beauttyProduct">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
							<li className="main-nav-list"><a data-toggle="collapse" href="#healthProduct" aria-expanded="false" aria-controls="healthProduct"><span
								className="lnr lnr-arrow-right"></span>Health Products<span className="number">(29)</span></a>
								<ul className="collapse" id="healthProduct" data-toggle="collapse" aria-expanded="false" aria-controls="healthProduct">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
							<li className="main-nav-list"><a href="abc.html">Pet Care<span className="number">(29)</span></a></li>
							<li className="main-nav-list"><a data-toggle="collapse" href="#homeAppliance" aria-expanded="false" aria-controls="homeAppliance"><span
								className="lnr lnr-arrow-right"></span>Home Appliances<span className="number">(15)</span></a>
								<ul className="collapse" id="homeAppliance" data-toggle="collapse" aria-expanded="false" aria-controls="homeAppliance">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
							<li className="main-nav-list"><a className="border-bottom-0" data-toggle="collapse" href="#babyCare" aria-expanded="false"
								aria-controls="babyCare"><span className="lnr lnr-arrow-right"></span>Baby Care<span className="number">(48)</span></a>
								<ul className="collapse" id="babyCare" data-toggle="collapse" aria-expanded="false" aria-controls="babyCare">
									<li className="main-nav-list child"><a href="abc.html">Frozen Fish<span className="number">(13)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Dried Fish<span className="number">(09)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Fresh Fish<span className="number">(17)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html">Meat Alternatives<span className="number">(01)</span></a></li>
									<li className="main-nav-list child"><a href="abc.html" className="border-bottom-0">Meat<span className="number">(11)</span></a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="sidebar-filter mt-50">
						<div className="top-filter-head">Product Filters</div>
						<div className="common-filter">
							<div className="head">Brands</div>
							<form action="">
								<ul>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand"/><label for="apple">Apple<span>(29)</span></label></li>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand"/><label for="asus">Asus<span>(29)</span></label></li>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand"/><label for="gionee">Gionee<span>(19)</span></label></li>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand"/><label for="micromax">Micromax<span>(19)</span></label></li>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand"/><label for="samsung">Samsung<span>(19)</span></label></li>
								</ul>
							</form>
						</div>
						<div className="common-filter">
							<div className="head">Color</div>
							<form action="">
								<ul>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color"/><label for="black">Black<span>(29)</span></label></li>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color"/><label for="balckleather">Black
									Leather<span>(29)</span></label></li>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color"/><label for="blackred">Black
									with red<span>(19)</span></label></li>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color"/><label for="gold">Gold<span>(19)</span></label></li>
									<li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color"/><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
								</ul>
							</form>
						</div>
						<div className="common-filter">
							<div className="head">Price</div>
							<div className="price-range-area">
								<div id="price-range"></div>
								<div className="value-wrapper d-flex">
									<div className="price">Price:</div>
									<span>$</span>
									<div id="lower-value"></div>
									<div className="to">to</div>
									<span>$</span>
									<div id="upper-value"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-lg-8 col-md-7">

					<div className="filter-bar d-flex flex-wrap align-items-center">
						<div className="sorting">
							<select>
								<option value="1">Default sorting</option>
								<option value="1">Default sorting</option>
								<option value="1">Default sorting</option>
							</select>
						</div>
						<div className="sorting mr-auto">
							<select>
								<option value="1">Show 12</option>
								<option value="1">Show 12</option>
								<option value="1">Show 12</option>
							</select>
						</div>
						<div className="pagination">
							<a href="/" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> </a>
							<a href="abc.html" className="active">1</a>
							<a href="abc.html">2</a>
							<a href="abc.html">3</a>
							<a href="/" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> </a>
							<a href="abc.html">6</a>
							<a href="abc.html" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
						</div>
					</div>

					<section className="lattest-product-area pb-40 category-list">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="single-product">
									<img className="img-fluid" src={c5} alt=""></img>
									<div className="product-details">
										<h6>addidas New Hammer sole
									for Sports person</h6>
										<div className="price">
											<h6>$150.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
										<div className="prd-bottom">

											<a href="abc.html" className="social-info">
												<span className="ti-bag"></span>
												<p className="hover-text">add to bag</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-heart"></span>
												<p className="hover-text">Wishlist</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-sync"></span>
												<p className="hover-text">compare</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-move"></span>
												<p className="hover-text">view more</p>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-product">
									<img className="img-fluid" src={c6} alt=""></img>
									<div className="product-details">
										<h6>addidas New Hammer sole
									for Sports person</h6>
										<div className="price">
											<h6>$150.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
										<div className="prd-bottom">

											<a href="abc.html" className="social-info">
												<span className="ti-bag"></span>
												<p className="hover-text">add to bag</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-heart"></span>
												<p className="hover-text">Wishlist</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-sync"></span>
												<p className="hover-text">compare</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-move"></span>
												<p className="hover-text">view more</p>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-product">
									<img className="img-fluid" src={c7} alt=""></img>
									<div className="product-details">
										<h6>addidas New Hammer sole
									for Sports person</h6>
										<div className="price">
											<h6>$150.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
										<div className="prd-bottom">

											<a href="abc.html" className="social-info">
												<span className="ti-bag"></span>
												<p className="hover-text">add to bag</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-heart"></span>
												<p className="hover-text">Wishlist</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-sync"></span>
												<p className="hover-text">compare</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-move"></span>
												<p className="hover-text">view more</p>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-product">
									<img className="img-fluid" src={c8}
									 alt=""></img>
									<div className="product-details">
										<h6>addidas New Hammer sole
									for Sports person</h6>
										<div className="price">
											<h6>$150.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
										<div className="prd-bottom">

											<a href="abc.html" className="social-info">
												<span className="ti-bag"></span>
												<p className="hover-text">add to bag</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-heart"></span>
												<p className="hover-text">Wishlist</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-sync"></span>
												<p className="hover-text">compare</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-move"></span>
												<p className="hover-text">view more</p>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-product">
									<img className="img-fluid" src={c10} alt=""></img>
									<div className="product-details">
										<h6>addidas New Hammer sole
									for Sports person</h6>
										<div className="price">
											<h6>$150.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
										<div className="prd-bottom">

											<a href="abc.html" className="social-info">
												<span className="ti-bag"></span>
												<p className="hover-text">add to bag</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-heart"></span>
												<p className="hover-text">Wishlist</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-sync"></span>
												<p className="hover-text">compare</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-move"></span>
												<p className="hover-text">view more</p>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-product">
									<img className="img-fluid" src={c11} alt=""></img>
									<div className="product-details">
										<h6>addidas New Hammer sole
									for Sports person</h6>
										<div className="price">
											<h6>$150.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
										<div className="prd-bottom">

											<a href="abc.html" className="social-info">
												<span className="ti-bag"></span>
												<p className="hover-text">add to bag</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-heart"></span>
												<p className="hover-text">Wishlist</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-sync"></span>
												<p className="hover-text">compare</p>
											</a>
											<a href="abc.html" className="social-info">
												<span className="lnr lnr-move"></span>
												<p className="hover-text">view more</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<div className="filter-bar d-flex flex-wrap align-items-center">
						<div className="sorting mr-auto">
							<select>
								<option value="1">Show 12</option>
								<option value="1">Show 12</option>
								<option value="1">Show 12</option>
							</select>
						</div>
						<div className="pagination">
							<a href="abc.html" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> </a>
							<a href="abc.html" className="active">1</a>
							<a href="abc.html">2</a>
							<a href="abc.html">3</a>
							<a href="abc.html" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i> </a>
							<a href="abc.html">6</a>
							<a href="abc.html" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="related-product-area section_gap">
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
									<a href="abc.html"><img src={c12} alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
										<div className="price">
											<h6>$189.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
								<div className="single-related-product d-flex">
									<a href="abc.html"><img src={c13} alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
										<div className="price">
											<h6>$189.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
								<div className="single-related-product d-flex">
									<a href="abc.html"><img src={c14} alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
										<div className="price">
											<h6>$189.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
								<div className="single-related-product d-flex">
									<a href="abc.html"><img src={c15} alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
										<div className="price">
											<h6>$189.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
								<div className="single-related-product d-flex">
									<a href="abc.html"><img src={c16} alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
										<div className="price">
											<h6>$189.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
								<div className="single-related-product d-flex">
									<a href="abc.html"><img src={c17} alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
										<div className="price">
											<h6>$189.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="single-related-product d-flex">
									<a href="abc.html"><img src={c18} alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
										<div className="price">
											<h6>$189.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="single-related-product d-flex">
									<a href="abc.html"><img src={c19}
									 alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
										<div className="price">
											<h6>$189.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="single-related-product d-flex">
									<a href="abc.html"><img src={c20} alt=""></img></a>
									<div className="desc">
										<a href="abc.html" className="title">Black lace Heels</a>
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
							<a href="/" target="_blank">
								<img className="img-fluid d-block mx-auto" src={c22} alt=""></img>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="footer-area section_gap">
		<div class="container">
			<div class="row">
				<div class="col-lg-3  col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6>About Us</h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
							magna aliqua.
						</p>
					</div>
				</div>
				<div class="col-lg-4  col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6>Newsletter</h6>
						<p>Stay update with our latest</p>
						<div class="" id="mc_embed_signup">

							<form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
							 method="get" class="form-inline">

								<div class="d-flex flex-row">

									<input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
									 required="" type="email"></input>


									<button class="click-btn btn btn-default"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
									<div >
										<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"></input>
									</div>

				
								</div>
								<div class="info"></div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-3  col-md-6 col-sm-6">
					<div class="single-footer-widget mail-chimp">
						<h6 class="mb-20">Instragram Feed</h6>
						<ul class="instafeed d-flex flex-wrap">
							<li><img src={c23} alt=""></img></li>
							<li><img src={c24} alt=""></img></li>
							<li><img src={c25} alt=""></img></li>
							<li><img src={c26} alt=""></img></li>
							<li><img src={c27} alt=""></img></li>
							<li><img src={c28} alt=""></img></li>
							<li><img src={c29} alt=""></img></li>
							<li><img src={c30} alt=""></img></li>
						
						</ul>
					</div>
				</div>
				<div class="col-lg-2 col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6>Follow Us</h6>
						<p>Let us be social</p>
						<div class="footer-social d-flex align-items-center">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-dribbble"></i></a>
							<a href="#"><i class="fa fa-behance"></i></a>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</footer>
	
</div>
	);
}
export default Shop;
