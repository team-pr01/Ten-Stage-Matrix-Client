import ADAFeatures from "../../components/HomePage/ADAFeatures/ADAFeatures";
import BecomePartOfCardano from "../../components/HomePage/BecomePartOfCardano/BecomePartOfCardano";
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
        </div>
    );
};

export default Home;