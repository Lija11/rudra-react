import { Link } from "react-router-dom"
import blog_data from "../../../data/BlogData"

const Blog = () => {
   return (
      <section className="blog-section pt-100 pb-100">
         <div className="container">
            <div className="row g-sm-4 g-3 align-items-end mb-40">
               <div className="col-lg-6 col-md-7">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> Insights
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Stay Informed with the
                        <span className="fw-300">Latest Happenings!</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-6 col-md-5">
                  <div className="text-md-end wow fadeInUp" data-wow-delay=".4s">
                     <Link to="/blog" className="theme-btn style1 pe-20">
                        <i
                           className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        Check All Team members
                     </Link>
                  </div>
               </div>
            </div>
            <div className="row g-4">
               {blog_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-md-6 col-lg-4">
                     <div className="team-items hover-translate8 px-xxl-6 px-xl-4 px-3 section-bg rounded-4">
                        <div className="thumb w-100 overflow-hidden">
                           <img src={item.thumb} alt="img" className="w-100 rounded-bottom-3" />
                        </div>
                        <div className="content d-flex align-items-end gap-3 justify-content-between">
                           <div>
                              <span className="fz-14 theme-clr4 fw-500 mb-1">{item.tag}</span>
                              <h5 className="max-270 wow fadeInUp" data-wow-delay=".3s">
                                 <Link to="/blog-details" className="theme-clr4 lh-110 fw-600">
                                    {item.title}
                                 </Link>
                              </h5>
                           </div>
                           <Link to="/blog-details"
                              className="theme-clr4 border hover-theme1 min-w-48 w-48 h-48 white-bg rounded-circle d-center d-xl-block d-none fs-five">
                              <i className="fa-solid fa-arrow-right"></i>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Blog
