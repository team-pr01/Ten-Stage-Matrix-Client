import ADAFeatures from "../../components/HomePage/ADAFeatures/ADAFeatures";
import BecomePartOfCardano from "../../components/HomePage/BecomePartOfCardano/BecomePartOfCardano";
import ContactUs from "../../components/HomePage/ContactUs/ContactUs";
import HighPerformance from "../../components/HomePage/HighPerformance/HighPerformance";
import SecurelyBuySell from "../../components/HomePage/SecurelyBuySell/SecurelyBuySell";
import StepsToGetStarted from "../../components/HomePage/StepsToGetStarted/StepsToGetStarted";
import WhyChooseUs from "../../components/HomePage/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            {/* <Hero/> */}
            <WhyChooseUs/>
            <SecurelyBuySell/>
            <HighPerformance/>
            <StepsToGetStarted/>
            <ADAFeatures/>
            <BecomePartOfCardano/>
            <ContactUs/>
        </div>
    );
};

export default Home;