import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import Choose from "./Choose"
import ServiceArea from "./Service"
import WhatdoStart from "./WhatdoStart"

const Service = () => {
  return (
    <>
      <InnerHeader />
      <BreadCrumb title="Services" />
      <WhatdoStart />
      <Choose />
      <ServiceArea />
      <FooterOne />
    </>
  )
}

export default Service
