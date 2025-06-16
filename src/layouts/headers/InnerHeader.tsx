import NavMenu from "./Menu/NavMenu"
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";

const InnerHeader = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <>
         <header id="header-sticky" className={`header-section section-bg border-0 style1 position-relative w-100 ${sticky ? "sticky" : ""}`}>
            <div className="container">
               <div className="mega-menu-wrapper">
                  <div className="header-main">
                     <div className="header-left">
                        <div className="logo">
                           <Link to="/" className="header-logo">
                              <img src="/assets/img/logo/logo.png" alt="logo-img" />
                           </Link>
                        </div>
                     </div>
                     <div className="header-right d-flex justify-content-end align-items-center">
                        <div className="mean__menu-wrapper d-none d-lg-block">
                           <div className="main-menu">
                              <nav id="mobile-menu">
                                 <NavMenu />
                              </nav>
                           </div>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                           <Link to="#"
                              className="search-trigger d-xl-none d-flex search-icon theme-clr4 hover-svg w-48 h-48 white-bg rounded-circle align-items-center justify-content-center d-xl-none d-block">
                              <i className="fa-solid fa-magnifying-glass black"></i>
                           </Link>
                           <div className="header__hamburger d-xl-none d-block my-auto">
                              <div className="sidebar__toggle" onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }}>
                                 <img src="/assets/img/icon/bars.png" alt="icon" />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="header-hamburger-inner d-xl-flex align-items-center d-none">
                        <Link to="/contact" className="theme-btn text-nowrap style-white pe-20">
                           <i
                              className="fa-solid fa-arrow-right w-36 h-36 bg-white theme4-border rounded-circle d-center fz-14 theme-clr4"></i>
                           Contact Us
                        </Link>
                        <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }}
                           className="search-trigger search-icon theme-clr4 hover-svg w-48 h-48 white-bg rounded-circle d-center d-xl-block d-none fs-five">
                           <i className="fa-solid fa-magnifying-glass black"></i>
                        </a>
                        <div className="d-flex align-items-center gap-3">
                           <i className="fa-solid fa-phone w-48 h-48 rounded-circle theme-bg4 d-center theme-clr"></i>
                           <Link to="#" className="fw-normal d-xxl-block d-none">
                              24/7 Support <br />
                              <span className="fw-600 text-nowrap theme-clr4">(++597)678 09876</span>
                           </Link>
                        </div>
                        <div className="header__hamburger my-auto d-xl-none d-block">
                           <div className="sidebar__toggle" onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }}>
                              <img src="/assets/img/icon/bars.png" alt="icon" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default InnerHeader
