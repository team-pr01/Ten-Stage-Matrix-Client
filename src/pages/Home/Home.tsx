// import ADAFeatures from "../../components/HomePage/ADAFeatures/ADAFeatures";
// import BecomePartOfTenStageMatrix from "../../components/HomePage/BecomePartOfCardano/BecomePartOfCardano";
// import ContactUs from "../../components/HomePage/ContactUs/ContactUs";
// import HighPerformance from "../../components/HomePage/HighPerformance/HighPerformance";
// import SecurelyBuySell from "../../components/HomePage/SecurelyBuySell/SecurelyBuySell";
// import StepsToGetStarted from "../../components/HomePage/StepsToGetStarted/StepsToGetStarted";
// import WhyChooseUs from "../../components/HomePage/WhyChooseUs/WhyChooseUs";
// import Footer from "../../components/Shared/Footer/Footer";
// import Navbar from "../../components/Shared/Navbar/Navbar";

import EarnFlexibly from "../../components/HomePage/EarnFlexibly/EarnFlexibly";
import FindNextOpportunity from "../../components/HomePage/FindNextOpportunity/FindNextOpportunity";
import GetStarted from "../../components/HomePage/GetStarted/GetStarted";
import Navbar from "../../components/Shared/Navbar/Navbar";

// The complete tree data from the image

const Home = () => {
  return (
    <div className="">
      <Navbar/>
       <FindNextOpportunity/>
       <GetStarted/>
       <EarnFlexibly/>
            {/*<SecurelyBuySell/>
            <HighPerformance/>
            <StepsToGetStarted/>
            <ADAFeatures/>
            <BecomePartOfTenStageMatrix/>
            <ContactUs/>
            <Footer/> */}
    </div>
  );
};

export default Home;
