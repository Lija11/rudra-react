import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="404" />
         <ErrorArea />
         <FooterOne />
      </>
   )
}

export default NotFound
