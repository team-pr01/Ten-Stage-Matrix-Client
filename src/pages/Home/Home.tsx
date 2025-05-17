import HighPerformance from "../../components/HomePage/HighPerformance/HighPerformance";
import SecurelyBuySell from "../../components/HomePage/SecurelyBuySell/SecurelyBuySell";
import WhyChooseUs from "../../components/HomePage/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            {/* <Hero/> */}
            <WhyChooseUs/>
            <SecurelyBuySell/>
            <HighPerformance/>
        </div>
    );
};

export default Home;