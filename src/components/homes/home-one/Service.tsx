import { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   thumb: string;
   icon: string;
   title: JSX.Element;
   desc: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/service/service-icon1.png",
      thumb: "/assets/img/service/service-thumb1.png",
      title: (<>Wealth <br /> Planning</>),
      desc: "Tailored strategies to build preserve"
   },
   {
      id: 2,
      icon: "/assets/img/service/service-icon2.png",
      thumb: "/assets/img/service/service-thumb2.png",
      title: (<>Newly Tax <br /> Optimization</>),
      desc: "Minimize liabilities & maximize returns"
   },
   {
      id: 3,
      icon: "/assets/img/service/service-icon3.png",
      thumb: "/assets/img/service/service-thumb3.png",
      title: (<>Retirement <br /> Planning</>),
      desc: "Prepare for the future with confidence"
   },
   {
      id: 4,
      icon: "/assets/img/service/service-icon4.png",
      thumb: "/assets/img/service/service-thumb4.png",
      title: (<>Investment <br /> Guidance</>),
      desc: "Personalized advice to grow your portfolio"
   },
]

const Service = () => {
   return (
      <section className="service-section section-bg pt-100 pb-100">
         <div className="pt-100 d-xxl-block d-none"></div>
         <div className="container">
            <div className="row g-sm-4 g-3 align-items-end mb-40">
               <div className="col-lg-6 col-md-7">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="assets/img/icon/section-step1.png" alt="img" /> Our Services
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Tailored Services to
                        <span className="fw-300">Grow & Protect Your Wealth</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-6 col-md-5">
                  <div className="text-md-end wow fadeInUp" data-wow-delay=".4s">
                     <Link to="/services" className="theme-btn style1 pe-20">
                        <i
                           className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        Check All Services
                     </Link>
                  </div>
               </div>
            </div>
            <div className="row g-4">
               {service_data.map((item) => (
                  <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3">
                     <div
                        className="team-items service-items1 hover-translate8 px-xxl-6 px-xxl-4 px-sm-3 px-3 section-bg rounded-4">
                        <div className="content d-flex align-items-start gap-3 justify-content-between">
                           <div>
                              <h5 className="mb-sm-2 mb-1 wow fadeInUp" data-wow-delay=".3s">
                                 <Link to="/services-details" className="theme-clr4 lh-110 fw-600">
                                    {item.title}
                                 </Link>
                              </h5>
                              <span className="fz-14 d-block theme-clr4 fw-500 mb-1">{item.desc}</span>
                           </div>
                           <Link to="/services-details"
                              className="theme-clr4 border hover-theme1 min-w-48 w-48 h-48 white-bg rounded-circle d-center d-xl-block d-none fs-five">
                              <i className="fa-solid fa-arrow-right"></i>
                           </Link>
                        </div>
                        <div className="thumb w-100 overflow-hidden position-relative">
                           <img src={item.thumb} className="w-100 rounded-bottom-3" />
                           <img src={item.icon} alt="img"
                              className="service-icon position-absolute bottom-0 start-0 m-3" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Service
