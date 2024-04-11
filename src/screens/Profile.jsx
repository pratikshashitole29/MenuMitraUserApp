import React from 'react';
import Bottom from '../component/bottom';
import applogo from '../assets/menumitra_logo.png';
import  applogowhite from '../assets/images/app-logo/logo-white.png';
import avtar from '../assets/images/avatar/1.png';
import { Link } from "react-router-dom";
import { ExitToApp,Person,CreditCard,Home,Translate,Notifications ,Star,Chat,AccountCircle,Favorite,ShoppingCart,Assignment, LocalShipping } from '@material-ui/icons';
import CompanyVersion from '../constants/CompanyVersion';
import Restoname from '../constants/Restoname';
import Logoname from '../constants/Logoname';
const Profile = () => {
    return (
        <div className="page-wrapper">
            {/* Preloader */}
            {/* <div id="preloader">
                <div className="loader">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> */}
            {/* Preloader end */}

            {/* Header */}
            <header className="header header-fixed style-3">
                <div className="header-content">
                    <div className="left-content">
                        {/* <a className="header-logo" href="index.html">
                            <img className="logo logo-dark" src={applogo} alt="logo" style={{ width: '40px', height: '40px' }} />
                            <img className="logo logo-white d-none" src={ applogo} alt="logo" />
                            
                        </a> */}

<div style={{ display: 'flex', alignItems: 'center' }}>
    <a className="header-logo" href="index.html" style={{ marginRight: '10px' }}>
        <img className="logo logo-dark" src={applogo} alt="logo" style={{ width: '40px', height: '40px' }} />
        <img className="logo logo-white d-none" src={applogo} alt="logo" />
    </a>
    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Menu Mitra</span>
</div>
                        
                    </div>
                    <div className="mid-content"></div>
                    <div className="right-content">
                        <Link to="/Signinscreen" className="d-flex align-items-center gap-2 font-10 text-danger"><i class='bx bx-log-out bx-rotate-180 bx-md' ></i></Link>
                    </div>
                </div>
            </header>
            {/* Header */}

            {/* Main Content Start */}
            <main className="page-content space-top p-b40">
                <div className="container">
                    <div className="profile-area">
                        <div className="main-profile">
                            <div className="media">
                                <div className="media-40 me-2 user-image">
                                    {/* <img src={avtar} alt="profile-image" /> */}
                                    <i class='bx bx-user-circle bx-lg' ></i>

                                </div>
                                <h4 className="name mb-0"><span className="greetings">Hello,</span> User</h4>
                            </div>
                        </div>
                        <div className="content-box">
                            <ul className="row g-2">
                                <li className="col-6">
                             
                                    <Link to="/MyOrder"><i class='bx bx-notepad iconboxi' ></i> My Orders</Link>
                                  
                                </li>
                                <li className="col-6">

                                    <Link to="/Wishlist">  <i class='bx bx-heart iconboxi'></i> Favourite</Link>
                                </li>
                                <li className="col-6">
                                    <Link to="/Cart">  <i class='bx bx-cart iconboxi' ></i> Cart</Link>
                                </li>
                                <li className="col-6">
                                    <Link to="/TrackOrder"><i class='bx bxs-truck iconboxi'></i> Track order</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="title-bar">
                            <h4 className="title mb-0 font-w500">Account Settings</h4>
                        </div>
                        <div className="dz-list style-1 m-b20">
                            <ul>

                            <li>
							<Link to="/EditProfile" class="item-content item-link">
								<div class="list-icon">
									{/* <i class="fi fi-rr-user"></i> */}
                                    {/* <Person/> */}
                                    <i class='bx bx-user bx-sm' ></i>
								</div>
								<div class="dz-inner">
									<span class="title">Edit Profile</span>
                                 
								</div>
							</Link>
						</li>


                        {/* <li>
							<a href="payment.html" class="item-content item-link">
								<div class="list-icon"> */}
									{/* <i class="fi fi-rr-credit-card"></i> */}
                                    {/* <CreditCard/> */}
                                    {/* <i class='bx bx-credit-card bx-sm' ></i>
								</div>
								<div class="dz-inner">
									<span class="title">Saved Cards & Wallet</span>
								</div>
							</a>
						</li> */}
						{/* <li>
							<a href="add-delivery-address.html" class="item-content item-link">
								<div class="list-icon"> */}
									{/* <i class="fi fi-rr-map-marker-home"></i> */}
                                    {/* <Home/> */}
                                    {/* <i class='bx bx-map bx-sm' ></i>
								</div>
								<div class="dz-inner">
									<span class="title">Saved Addresses</span>
								</div>
							</a>
						</li> */}
						{/* <li>
							<a href="#" class="item-content item-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLang" aria-controls="offcanvasLang">
								<div class="list-icon"> */}
									{/* <svg width="20" height="20" fill="none"><path d="M9.065 10.935v-.75a.75.75 0 0 0-.75.75h.75zm1.87-1.87v-.75a.75.75 0 0 0-.75.75h.75zm2.989 0v.75a.75.75 0 0 0 .697-.474l-.697-.276zm2.903-2.342h.75a.75.75 0 0 0-.826-.746l.076.746zm0 2.342h-.75a.75.75 0 0 0 .75.75v-.75zm-10.751 1.87v-.75a.75.75 0 0 0-.697.474l.697.276zm-2.903 2.342h-.75a.75.75 0 0 0 .826.746l-.076-.746zm0-2.342h.75a.75.75 0 0 0-.75-.75v.75zm.235-7.336a.75.75 0 0 0 0 1.5v-1.5zm4.704 1.5a.75.75 0 1 0 0-1.5v1.5zm-3.102-.75a.75.75 0 1 0 1.5 0h-1.5zm1.5-.941a.75.75 0 1 0-1.5 0h1.5zm-1.176.941a.75.75 0 0 0-1.5 0h1.5zm2.778 4.513a.75.75 0 1 0 0-1.5v1.5zm-.426-4.513a.75.75 0 1 0-1.5 0h1.5zM3.408 7.363a.75.75 0 1 0 0 1.5v-1.5zm7.808 8.894a.75.75 0 1 0 1.342.671l-1.342-.671zm3.023-4.369l.671-.335a.75.75 0 0 0-1.342 0l.671.335zm1.681 5.04a.75.75 0 1 0 1.342-.671l-1.342.671zM14.11 1.012a.75.75 0 1 0 0 1.5v-1.5zm4.542 5.454a.75.75 0 1 0 1.5 0h-1.5zm-4.484-2.998a.75.75 0 1 0 1.061-1.061l-1.061 1.061zm-.646-1.706l-.53-.53a.75.75 0 0 0 0 1.061l.53-.53zm1.706-.646A.75.75 0 1 0 14.168.056l1.061 1.061zm-9.351 17.86a.75.75 0 1 0 0-1.5v1.5zm-4.542-5.454a.75.75 0 1 0-1.5 0h1.5zM5.82 16.52a.75.75 0 1 0-1.061 1.061L5.82 16.52zm.646 1.706l.53.53a.75.75 0 0 0 0-1.061l-.53.53zm-1.706.646a.75.75 0 0 0 1.061 1.061L4.76 18.872zm13.904-8.636v8.007h1.5v-8.007h-1.5zm0 8.007a.42.42 0 0 1-.421.421v1.5a1.92 1.92 0 0 0 1.921-1.921h-1.5zm-.421.421h-8.007v1.5h8.007v-1.5zm-8.007 0a.42.42 0 0 1-.421-.421h-1.5a1.92 1.92 0 0 0 1.921 1.921v-1.5zm-.421-.421v-7.308h-1.5v7.308h1.5zm-.75-6.558h.699v-1.5h-.699v1.5zm.699 0a1.92 1.92 0 0 0 1.922-1.922h-1.5a.42.42 0 0 1-.422.422v1.5zm1.922-1.922v-.699h-1.5v.699h1.5zm-.75.051h2.989v-1.5h-2.989v1.5zm3.686-.474c.341-.863.918-1.325 1.413-1.58a3.12 3.12 0 0 1 .643-.246l.184-.04.041-.006c0 0-.001 0-.076-.746l-.077-.746-.047.006-.093.014-.305.066c-.249.064-.587.175-.956.365-.745.383-1.62 1.092-2.122 2.362l1.395.552zm1.455-2.618v2.342h1.5V6.723h-1.5zm.75 3.092h1.416v-1.5h-1.416v1.5zm1.416 0a.42.42 0 0 1 .421.422h1.5a1.92 1.92 0 0 0-1.921-1.922v1.5zm-8.058-8.058v8.007h1.5V1.757h-1.5zm-.422 8.428H6.076v1.5h3.688v-1.5zm-4.385.474c-.342.863-.918 1.326-1.414 1.58-.251.129-.48.204-.643.246l-.184.04-.04.006c0 0 .001 0 .076.746l.076.746.047-.006.093-.014.305-.066a4.62 4.62 0 0 0 .956-.365c.745-.383 1.62-1.092 2.122-2.362l-1.395-.552zm-1.455 2.618v-2.342h-1.5v2.342h1.5zm-.75-3.092H1.757v1.5h1.416v-1.5zm-1.416 0a.42.42 0 0 1-.421-.422h-1.5a1.92 1.92 0 0 0 1.921 1.922v-1.5zm-.421-.422V1.757h-1.5v8.007h1.5zm0-8.007a.42.42 0 0 1 .421-.421v-1.5A1.92 1.92 0 0 0-.164 1.757h1.5zm.421-.421h8.007v-1.5H1.757v1.5zm8.007 0a.42.42 0 0 1 .422.421h1.5A1.92 1.92 0 0 0 9.764-.164v1.5zM3.408 5.099h4.704v-1.5H3.408v1.5zm3.102-.75v-.941h-1.5v.941h1.5zm-2.676 0c0 1.063.251 1.91.665 2.573a3.91 3.91 0 0 0 1.496 1.381c.53.282 1.051.42 1.434.488l.474.061.142.008.043.001h.021c.001 0 .002 0 .002-.75v-.75l-.095-.005c-.075-.006-.188-.018-.325-.042-.278-.049-.639-.147-.991-.335s-.681-.456-.93-.853-.437-.959-.437-1.778h-1.5zm2.352 0c0 .819-.19 1.383-.437 1.778s-.581.667-.93.853-.713.285-.991.335l-.325.042-.082.005c-.013 0-.013 0-.013.75l.001.75h.022l.043-.001.142-.008a4.82 4.82 0 0 0 .474-.061c.383-.068.905-.206 1.434-.488a3.91 3.91 0 0 0 1.496-1.381c.415-.663.665-1.511.665-2.573h-1.5zm6.372 12.578l2.352-4.704-1.342-.671-2.352 4.704 1.342.671zm1.01-4.704l2.352 4.704 1.342-.671-2.352-4.704-1.342.671zm-1.093 3.943h3.528v-1.5h-3.528v1.5zM14.11 2.512h.588v-1.5h-.588v1.5zm.588 0c2.184 0 3.954 1.77 3.954 3.954h1.5c0-3.012-2.442-5.454-5.454-5.454v1.5zm.53-.104l-1.176-1.176-1.061 1.061 1.176 1.176 1.061-1.061zm-1.176-.115l1.176-1.176L14.168.056l-1.176 1.176 1.061 1.061zM5.878 17.476H5.29v1.5h.588v-1.5zm-.588 0c-2.184 0-3.954-1.77-3.954-3.954h-1.5c0 3.012 2.442 5.454 5.454 5.454v-1.5zm-.53.104l1.176 1.176 1.061-1.061L5.82 16.52 4.76 17.581zm1.176.115L4.76 18.872l1.061 1.061 1.176-1.176-1.061-1.061z" fill="#000"/></svg> */}
								{/* <Translate></Translate>
                                </div>
								<div class="dz-inner">
									<span class="title select-lang">Select Language</span>
								</div>
							</a>
						</li> */}
						<li>
							<a href="notification.html" class="item-content item-link">
								<div class="list-icon"> 
									{/* <i class="fi fi-rr-bell"></i> */}
                                    <i class='bx bx-bell'></i>
								</div>
								<div class="dz-inner me-2">
									<span class="title">Notifications Settings</span>
								</div>
							</a>
						</li>
                            </ul>
                        </div>
                        <div className="title-bar">
                            <h4 className="title mb-0 font-w500">My Activity</h4>
                        </div>
                        <div className="dz-list style-1">
                            <ul>
                          
						<li>
							<a href="faq.html" class="item-content item-link">
								<div class="list-icon">

									{/* <i class="fi fi-rr-comment"></i> */}

                                    {/* <Chat></Chat> */}
                                    <i class='bx bx-chat bx-sm' ></i>
								</div>
								<div class="dz-inner">
									<span class="title">Questions & Answers</span>
								</div>
							</a>
						</li>
                            </ul>
                        </div>
                           
                        <div className='company-version '>
      <p className='company' >ShekruLabs India Pvt.Ltd  <p className='company' >v1</p></p>
   
    </div> 
                    </div>
                   
                </div>
               
            </main>
            {/* Main Content End */}
            
           {/* <CompanyVersion/> */}
            <Bottom></Bottom>
        </div>
    );
};

export default Profile;



