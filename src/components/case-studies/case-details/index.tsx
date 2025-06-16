import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import Faq from "../../homes/home-one/Faq"
import Testimonial from "../../homes/home-two/Testimonial"
import CaseDetailsArea from "./CaseDetailsArea"
import CaseInfo from "./CaseInfo"

const CaseDetails = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Case Details" />
         <CaseDetailsArea />
         <CaseInfo />
         <Testimonial />
         <Faq />
         <FooterOne />
      </>
   )
}

export default CaseDetails
