// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link component from React Router if navigation is required
// import '../assets/css/style.css';
// import pic2 from '../assets/images/authentication/pic2.png'
// import Logoname from '../constants/Logoname';
// import CompanyVersion from '../constants/CompanyVersion';
// const Signupscreen = () => {
//     return (
//         <div className="page-wrapper full-height">
//             {/* Preloader */}
           
//             {/* Preloader end */}

//             {/* Main Content Start */}
//             <main className="page-content">
//                 <div className="container pt-0 overflow-hidden">
//                     <div className="dz-authentication-area dz-flex-box">
//                         <div className="dz-media">
//                             <img src={pic2} alt="" />
//                         </div>
//                         <div className="account-section">
//                             <div className="section-head">
//                                 <Logoname/>
//                                 <h2 className="title">Create your account</h2>
//                             </div>
//                             <form>
//                                 <div className="mb-3">
//                                     <label className="form-label" htmlFor="name"><span className="required-star">*</span>Name</label>
//                                     <input type="text" id="name" className="form-control" placeholder='Enter Name' />
//                                 </div>
//                                 <div className="m-b15">
//         <label className="form-label" htmlFor="mobile">
//         <span className="required-star">*</span> Mobile
//         </label>
//         <input type="text" id="mobile" className="form-control" placeholder='Enter Mobile' />
//       </div>

//       <div className="m-b15">
//         <label className="form-label" htmlFor="dob">
//         <span className="required-star">*</span>  Date of Birth
//         </label>
//         <input type="date" id="dob" className="form-control" />
//       </div>
                                
//                                 <div className="form-check m-b25">
//                                     <input className="form-check-input" type="checkbox" value="" id="Checked-1" />
//                                     <label className="form-check-label" htmlFor="Checked-1">I agree to all Term, Privacy and Fees</label>
//                                 </div>
//                                 {/* Replace anchor tag with Link component */}
//                                 <Link to="/Verifyotp" class="dz-btn btn btn-thin btn-lg btn-primary rounded-xl">Sign Up</Link>
//                             </form>
                            
                           
//                         </div>
            
//                         <div className="text-center mt-auto">Already have and account? <Link to="/Signinscreen" className="text-underline font-w500">Sign In</Link></div>
//                     </div>
//                 </div>
//             </main>
//             {/* Main Content End */}
//             <CompanyVersion/>
//         </div>
//     );
// };

// export default Signupscreen;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/style.css';
import pic2 from '../assets/images/authentication/pic2.png';
import Logoname from '../constants/Logoname';

const Signupscreen = () => {
    const navigate = useNavigate(); // Use useNavigate hook for navigation
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const url = 'http://194.195.116.199/user_api/account_signup';
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    dob: dob,
                    mobile: mobile,
                }),
            };

            const response = await fetch(url, requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.st === 1) {
                // If signup is successful (st = 1), navigate to OTP verification screen
                navigate('/Verifyotp');
            } else {
                // Handle other conditions where signup might not be successful
                setError('Sign up failed. Please try again.');
            }

            // Clear form fields upon successful signup attempt
            setName('');
            setMobile('');
            setDob('');
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Sign up failed. Please try again.');
        }
    };

    return (
        <div className="page-wrapper full-height">
            <main className="page-content">
                <div className="container pt-0 overflow-hidden">
                    <div className="dz-authentication-area dz-flex-box">
                        <div className="dz-media">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="account-section">
                            <div className="section-head">
                                <Logoname />
                                <h2 className="title">Create your account</h2>
                            </div>
                            <form onSubmit={handleSignUp}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">
                                        <span className="required-star">*</span>Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="m-b15">
                                    <label className="form-label" htmlFor="mobile">
                                        <span className="required-star">*</span> Mobile
                                    </label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        className="form-control"
                                        placeholder="Enter Mobile"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>
                                <div className="m-b15">
                                    <label className="form-label" htmlFor="dob">
                                        <span className="required-star">*</span> Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        className="form-control"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                    />
                                </div>
                                <div className="form-check m-b25">
                                    <input className="form-check-input" type="checkbox" value="" id="Checked-1" />
                                    <label className="form-check-label" htmlFor="Checked-1">
                                        I agree to all Terms, Privacy, and Fees
                                    </label>
                                </div>
                                {error && <p className="text-danger">{error}</p>}
                                <button type="submit" className="dz-btn btn btn-thin btn-lg btn-primary rounded-xl">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                        <div className="text-center mt-auto">
                            Already have an account?{' '}
                            <Link to="/Signinscreen" className="text-underline font-w500">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Signupscreen;
