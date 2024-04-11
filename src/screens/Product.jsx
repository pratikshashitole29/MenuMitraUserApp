import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import product from '../assets/images/product/product1/pic1.png'
import Swiper from 'swiper';
const Product = () => {
    const [sortByOpen, setSortByOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
  
    const toggleSortBy = () => {
      setSortByOpen(!sortByOpen);
    };
  
    const toggleFilter = () => {
      setFilterOpen(!filterOpen);
    };
    useEffect(() => {
        const swiper = new Swiper('.category-slide', {
            slidesPerView: 'auto',
            spaceBetween: 10,
        });

        return () => {
            swiper.destroy();
        };
    }, []);

  const [activeTab, setActiveTab] = useState('list');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header header-fixed style-3">
        <div className="header-content">
          <div className="left-content">
            <Link to="/HomeScreen" className="back-btn dz-icon icon-fill icon-sm">
            <i className='bx bx-arrow-back' ></i>
            </Link>
          </div>
          <div className="mid-content px-2">
            <div className="input-group style-2 input-group-icon input-sm">
              <span className="input-group-text border-0">
                <div className="input-icon">
                  {/* <i className="feather icon-search opacity-100"></i> */}
                  <i class='bx bx-search-alt-2' ></i>
                </div>
              </span>
              <input type="search" className="form-control border-0 font-16" placeholder="Search Products" />
              
            </div>
          </div>
          <div className="right-content d-flex align-items-center gap-3 lh-1 ps-2">
             <ul className="dz-tab nav nav-pills light style-1 list" role="tablist">
             <Link to="/Cart" className="notification-badge font-20">
              <i class='bx bx-cart bx-sm' ></i>
              <span className="badge badge-danger">14</span>
            </Link>
             
            </ul>
           
          </div>
        </div>
      </header>
      {/* Header */}

      {/* Main Content Start */}
      <main className="page-content space-top p-b80">
        <div className="tab-content" id="pills-tabContent">
          <div className={`tab-pane fade ${activeTab === 'list' ? 'show active' : ''}`} id="pills-list" role="tabpanel">
            {/* List View Content */}
            <div className="container pb-0">
            <div className="swiper category-slide">
						<div className="swiper-wrapper">
							<div className="swiper-slide">	
								<a href="javascript:void(0);" className="category-btn">Crazy Deals</a>
							</div>
							<div className="swiper-slide">
								<a href="javascript:void(0);" className="category-btn">Budget Buys</a>
							</div>
							<div className="swiper-slide">	
								<a href="javascript:void(0);" className="category-btn">Best Offer</a>
							</div>
							<div className="swiper-slide">	
								<a href="javascript:void(0);" className="category-btn">Crazy Deals</a>
							</div>
							
						</div>
					</div>
              <div className="row gx-3 gy-2">
                {/* Render your product cards here based on data */}
                {/* Example of a product card */}
                <div className="col-6">
                  <div className="dz-card style-1">
                    <div className="dz-media">
                      <Link to="/ProductDetails">
                        <img src={product} alt="" />
                      </Link>
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <Link to="/ProductDetails">Emerald Fern Fronds (M)</Link>
                      </h6>
                      <div className="dz-meta">
                        <div className="dz-price">$80 <del>$95</del></div>
                        <a href="javascript:void(0);" className="item-bookmark">
                          <i className="feather icon-heart-on"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="dz-card style-1">
                    <div className="dz-media">
                      <a href="product-detail.html">
                        <img src={product} alt="" />
                      </a>
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="product-detail.html">Emerald Fern Fronds (M)</a>
                      </h6>
                      <div className="dz-meta">
                        <div className="dz-price">$80 <del>$95</del></div>
                        <a href="javascript:void(0);" className="item-bookmark">
                          <i className="feather icon-heart-on"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="dz-card style-1">
                    <div className="dz-media">
                      <a href="product-detail.html">
                        <img src={product} alt="" />
                      </a>
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="product-detail.html">Emerald Fern Fronds (M)</a>
                      </h6>
                      <div className="dz-meta">
                        <div className="dz-price">$80 <del>$95</del></div>
                        <a href="javascript:void(0);" className="item-bookmark">
                          <i className="feather icon-heart-on"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="dz-card style-1">
                    <div className="dz-media">
                      <a href="product-detail.html">
                        <img src={product} alt="" />
                      </a>
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="product-detail.html">Emerald Fern Fronds (M)</a>
                      </h6>
                      <div className="dz-meta">
                        <div className="dz-price">$80 <del>$95</del></div>
                        <a href="javascript:void(0);" className="item-bookmark">
                          <i className="feather icon-heart-on"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Example product card ends */}

              </div>
            </div>
            {/* List View Content End */}
          </div>
          
            {/* Grid View Content End */}
          </div>
      
      </main>

      <div className="footer fixed">
      <ul className="dz-product-filter">
        <li>
          <a href="javascript:void(0);" onClick={toggleSortBy}>
            <i className="fi fi-rr-arrow-up"></i>Sort
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" onClick={toggleFilter}>
            <i className="fi fi-rr-filter"></i>Filter
          </a>
        </li>
      </ul>

      {/* Sort By Offcanvas */}
      {sortByOpen && (
        <div className="offcanvas offcanvas-bottom p-b60" tabIndex="-1" id="offcanvasBottom1" aria-labelledby="offcanvasBottomLabel1">
          <div className="offcanvas-header">
            <h4 className="offcanvas-title" id="offcanvasBottomLabel1">Sort By</h4>
            <button type="button" className="btn-close style-2" onClick={toggleSortBy} aria-label="Close">
              <i className="fi fi-rr-cross"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <div className="d-flex flex-wrap gap-2">
              <div className="form-check style-2">
                <input className="form-check-input" type="radio" name="filterRadioTwo" id="filterRadio3" defaultChecked />
                <label className="form-check-label" htmlFor="filterRadio3">Hand Plant</label>
              </div>
              <div className="form-check style-2">
                <input className="form-check-input" type="radio" name="filterRadioTwo" id="filterRadio4" />
                <label className="form-check-label" htmlFor="filterRadio4">Greenery pot</label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Offcanvas */}
      {filterOpen && (
        <div className="offcanvas offcanvas-bottom p-b60" tabIndex="-1" id="offcanvasBottom2" aria-labelledby="offcanvasBottomLabel2">
          <div className="offcanvas-header">
            <h4 className="offcanvas-title" id="offcanvasBottomLabel2">Filters</h4>
            <button type="button" className="btn-close style-2" onClick={toggleFilter} aria-label="Close">
              <i className="fi fi-rr-cross"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            {/* Filter Content */}
            {/* Category Filter */}
            <div className="filter-inner-content">
              <div className="title-bar">
                <h5 className="sub-title">Categories:</h5>
                <a href="products.html">See All</a>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {/* Add category filter checkboxes */}
                <div className="form-check style-2">
                  <input className="form-check-input" type="checkbox" name="filterCheck" id="filterCheck6" />
                  <label className="form-check-label" htmlFor="filterCheck6">Trees</label>
                </div>
                {/* Add more category checkboxes */}
              </div>
            </div>

            {/* Size Filter */}
            <div className="filter-inner-content">
              <div className="title-bar">
                <h5 className="sub-title">Size:</h5>
                <a href="products.html">See All</a>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {/* Add size filter checkboxes */}
                <div className="form-check style-2">
                  <input className="form-check-input" type="checkbox" name="filterCheck" id="filterCheck14" />
                  <label className="form-check-label" htmlFor="filterCheck14">S</label>
                </div>
                {/* Add more size checkboxes */}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-inner-content">
              <div className="title-bar">
                <h5 className="sub-title">Price:</h5>
              </div>
              {/* Add price range slider or other price filter UI */}
            </div>

            {/* Reset and Apply Buttons */}
            <div className="d-flex align-items-center gap-2">
              <a href="javascript:void(0);" className="btn btn-white btn-thin w-100 rounded-xl">Reset</a>
              <a href="javascript:void(0);" className="btn btn-primary btn-thin w-100 rounded-xl">Apply</a>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Product;
