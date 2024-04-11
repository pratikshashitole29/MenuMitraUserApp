


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// const Search = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchedMenu, setSearchedMenu] = useState([
//         { id: 1, name: 'Pasta' },
//         { id: 2, name: 'Pizza' },
//         { id: 3, name: 'Burger' },
//         { id: 4, name: 'Salad' },
//         { id: 5, name: 'Sandwich' }
//     ]);

//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const handleClearAll = () => {
//         setSearchedMenu([]);
//     };

//     const handleRemoveItem = (id) => {
//         const updatedMenu = searchedMenu.filter((menu) => menu.id !== id);
//         setSearchedMenu(updatedMenu);
//     };

//     const addMenuToSearched = (menuName) => {
//         if (menuName && !searchedMenu.find((menu) => menu.name.toLowerCase() === menuName.toLowerCase())) {
//             const newMenu = { id: searchedMenu.length + 1, name: menuName };
//             setSearchedMenu([...searchedMenu, newMenu]);
//         }
//     };

//     return (
//         <div className="page-wrapper">
//             {/* Header */}
//             <header className="header header-fixed style-3 py-2">
//                 <div className="header-content">
//                     <div className="search-area">
//                         <Link to="/HomeScreen" className="back-btn icon-fill dz-icon">
//                             <i className='bx bx-arrow-back'></i>
//                         </Link>
//                         <div className="input w-100">
//                             <input type="search" className="form-control rounded-md style-2" placeholder="Search Best items for You" onChange={handleSearch} />
//                         </div>
//                     </div>
//                 </div>
//             </header>
//             {/* Header End */}

//             {/* Main Content Start */}
//             <main className="page-content p-t80 p-b40">
//                 <div className="container">
//                     {/* Searched Menu List */}
//                     <div className="title-bar mb-2">
//                         <h4 className="title mb-0 font-w500">Searched Menu</h4>
//                         <div className="font-w500 font-12" onClick={handleClearAll}>Clear All</div>
//                     </div>
                    
//                     <div className="swiper-slide search-content1">
//  <div className="cart-list style-2  ">
//                             <div className="dz-media media-75">
//                                 <img src="assets/images/product/product2/4.png" alt="" />
//                             </div>
//                             <div className="dz-content">
//                                 <h6 className="title"><a href="product-detail.html">Royal Bluebell Bliss (M)</a></h6>
//                                 <ul className="dz-meta">
//                                     <li className="dz-price">$80<del>$95</del></li>
//                                     <li className="dz-review"><i className='bx bxs-star staricons'  ></i><span>(2k Review)</span></li>
//                                     <div className="remove-icon1">
//                                         <i className='bx bx-x'></i>
//                                     </div>
//                                 </ul>
//                                 <div className="dz-off">40% Off</div>
//                             </div>
//                         </div>
//                         </div>

              

//                         <div className="swiper-slide">
//  <div className="cart-list style-2">
//                             <div className="dz-media media-75">
//                                 <img src="assets/images/product/product2/4.png" alt="" />
//                             </div>
//                             <div className="dz-content">
//                                 <h6 className="title"><a href="product-detail.html">Royal Bluebell Bliss (M)</a></h6>
//                                 <ul className="dz-meta">
//                                     <li className="dz-price">$80<del>$95</del></li>
//                                     <li className="dz-review"><i className='bx bxs-star staricons'  ></i><span>(2k Review)</span></li>
//                                     <div className="remove-icon1">
//                                         <i className='bx bx-x'></i>
//                                     </div>
//                                 </ul>
//                                 <div className="dz-off">40% Off</div>
//                             </div>
//                         </div>
//                         </div>
//                 </div>


//             </main>
//             {/* Main Content End */}
//         </div>
//     );
// };

// export default Search;














// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Search = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchedMenu, setSearchedMenu] = useState([]);

//     const handleSearch = async (event) => {
//         const keyword = event.target.value.trim();
//         setSearchTerm(keyword);

//         if (keyword.length >= 3) {
//             try {
//                 const url = 'http://194.195.116.199/user_api/search_menu';
//                 const requestOptions = {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         restaurant_id: 13,
//                         keyword: keyword
//                     })
//                 };

//                 const response = await fetch(url, requestOptions);

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.st === 1 && Array.isArray(data.lists)) {
//                     // Convert menu names to title case before setting state
//                     const formattedMenu = data.lists.map((menu) => ({
//                         ...menu,
//                         name: titleCase(menu.name) // Convert name to title case
//                     }));
//                     setSearchedMenu(formattedMenu);
//                 } else {
//                     setSearchedMenu([]);
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setSearchedMenu([]);
//             }
//         } else {
//             setSearchedMenu([]);
//         }
//     };

//     const handleClearAll = () => {
//         setSearchedMenu([]);
//         setSearchTerm('');
//     };

//     // Helper function to convert a string to title case
//     const titleCase = (str) => {
//         return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
//     };

//     const filteredMenu = searchedMenu.filter((menu) =>
//         menu.name.toLowerCase().slice(0, 3).includes(searchTerm.toLowerCase().slice(0, 3))
//     );

//     return (
//         <div className="page-wrapper">
//             {/* Header */}
//             <header className="header header-fixed style-3 py-2">
//                 <div className="header-content">
//                     <div className="search-area">
//                         <Link to="/HomeScreen" className="back-btn icon-fill dz-icon">
//                             <i className='bx bx-arrow-back'></i>
//                         </Link>
//                         <div className="input w-100">
//                             <input
//                                 type="search"
//                                 className="form-control rounded-md style-2"
//                                 placeholder="Search Best items for You"
//                                 onChange={handleSearch}
//                                 value={searchTerm}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </header>
//             {/* Header End */}

//             {/* Main Content */}
//             <main className="page-content p-t80 p-b40">
//                 <div className="container">
//                     {/* Searched Menu List */}
//                     <div className="title-bar mb-2">
//                         <h4 className="title mb-0 font-w500">Searched Menu</h4>
//                         <div className="font-w500 font-12" onClick={handleClearAll}>
//                             Clear All
//                         </div>
//                     </div>
//                     {filteredMenu.length > 0 ? (
//                         filteredMenu.map((menu) => (
//                             <div className="swiper-slide search-content1" key={menu.menu_id}>
//                                 <div className="cart-list style-2">
//                                     <div className="dz-media media-75">
//                                         <img src={menu.image} alt={menu.name} />
//                                     </div>
//                                     <div className="dz-content">
//                                         <h6 className="title">{menu.name}</h6>
//                                         <ul className="dz-meta">
//                                             <li className="dz-price">₹{menu.price.toFixed(2)}</li>
//                                             <li className="dz-review">
//                                                 <i className='bx bxs-star staricons'></i><span>(2k Review)</span>
//                                             </li>
//                                         </ul>
//                                         <div className="dz-off">{menu.veg_nonveg === 'veg' ? 'Veg' : 'Non-Veg'}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div>No items found.</div>
//                     )}
//                 </div>
//             </main>
//             {/* Main Content End */}
//         </div>
//     );
// };

// export default Search;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedMenu, setSearchedMenu] = useState([]);

    const handleSearch = async () => {
        try {
            const url = 'http://194.195.116.199/user_api/search_menu';
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    restaurant_id: 13,
                    keyword: searchTerm
                })
            };

            const response = await fetch(url, requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.st === 1 && Array.isArray(data.lists)) {
                setSearchedMenu(data.lists);
            } else {
                setSearchedMenu([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setSearchedMenu([]);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearAll = () => {
        setSearchedMenu([]);
        setSearchTerm('');
    };

    return (
        <div className="page-wrapper">
            {/* Header */}
            <header className="header header-fixed style-3 py-2">
                <div className="header-content">
                    <div className="search-area">
                        <Link to="/HomeScreen" className="back-btn icon-fill dz-icon">
                            <i className='bx bx-arrow-back'></i>
                        </Link>
                        <div className="input w-100">
                            <input
                                type="search"
                                className="form-control rounded-md style-2"
                                placeholder="Search Best items for You"
                                onChange={handleInputChange}
                                value={searchTerm}
                            />
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}

            {/* Main Content Start */}
            <main className="page-content p-t80 p-b40">
                <div className="container">
                    {/* Searched Menu List */}
                    <div className="title-bar mb-2">
                        <h4 className="title mb-0 font-w500">Searched Menu</h4>
                        <div className="font-w500 font-12" onClick={handleClearAll}>
                            Clear All
                        </div>
                    </div>
                    {searchedMenu.length > 0 ? (
                        searchedMenu.map((menu) => (
                            <div className="swiper-slide search-content1" key={menu.menu_id}>
                                <div className="cart-list style-2">
                                    <div className="dz-media media-75">
                                        <img src={menu.image} alt={menu.name} />
                                    </div>
                                    <div className="dz-content">
                                        <h6 className="title">{menu.name}</h6>
                                        <ul className="dz-meta">
                                            <li className="dz-price">₹{menu.price.toFixed(2)}</li>
                                            <li className="dz-review">
                                                <i className='bx bxs-star staricons'></i><span>(2k Review)</span>
                                            </li>
                                        </ul>
                                        <div className="dz-off">{menu.veg_nonveg === 'veg' ? 'Veg' : 'Non-Veg'}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No items found.</div>
                    )}
                </div>
            </main>
            {/* Main Content End */}
        </div>
    );
};

export default Search;
