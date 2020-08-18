import React from 'react';
import './Navbar.css';


function Navbar() {


    
	const openMenu = () => {
		document.getElementById("search_input_box").style.display = "block";
	}

	const closeMenu = () => {
		document.getElementById("search_input_box").style.display = "none";
	}


    
    return (
      
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
    );
  }
  
  export default Navbar;


