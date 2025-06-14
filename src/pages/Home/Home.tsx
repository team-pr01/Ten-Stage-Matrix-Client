// import ADAFeatures from "../../components/HomePage/ADAFeatures/ADAFeatures";
// import BecomePartOfTenStageMatrix from "../../components/HomePage/BecomePartOfCardano/BecomePartOfCardano";
// import ContactUs from "../../components/HomePage/ContactUs/ContactUs";
// import HighPerformance from "../../components/HomePage/HighPerformance/HighPerformance";
// import SecurelyBuySell from "../../components/HomePage/SecurelyBuySell/SecurelyBuySell";
// import StepsToGetStarted from "../../components/HomePage/StepsToGetStarted/StepsToGetStarted";
// import WhyChooseUs from "../../components/HomePage/WhyChooseUs/WhyChooseUs";
// import Footer from "../../components/Shared/Footer/Footer";
// import Navbar from "../../components/Shared/Navbar/Navbar";

import { ReferralTree } from "./ReferralTree";

interface TreeNodeData {
  name: string;
  color: 'light' | 'dark';
  children?: TreeNodeData[];
}

// The complete tree data from the image
const referralData: TreeNodeData = {
  name: 'Y',
  color: 'dark',
  children: [
    {
      name: 'A',
      color: 'light',
      children: [
        { 
          name: 'C', 
          color: 'dark', 
          children: [
            { name: 'G', color: 'light' }, 
            { name: 'L', color: 'light' }
          ] 
        },
        { 
          name: 'E', 
          color: 'dark', 
          children: [
            { name: 'H', color: 'light' },
            { name: 'M', color: 'light' }
          ]
        },
      ],
    },
    {
      name: 'B',
      color: 'light',
      children: [
        { 
          name: 'D', 
          color: 'dark', 
          children: [
            { name: 'I', color: 'light' }, 
            { name: 'J', color: 'light' }
          ] 
        },
        { 
          name: 'F', 
          color: 'dark', 
          children: [
            { name: 'N', color: 'light' }, 
            { name: 'K', color: 'light' }
          ]
        },
      ],
    },
  ],
};


const Home = () => {
    return (
        <div className="h-screen">
            {/* <Navbar/> */}
            {/* <Hero/> */}
            {/* <WhyChooseUs/>
            <SecurelyBuySell/>
            <HighPerformance/>
            <StepsToGetStarted/>
            <ADAFeatures/>
            <BecomePartOfTenStageMatrix/>
            <ContactUs/>
            <Footer/> */}
            <div className="overflow-x-auto">
        <ReferralTree node={referralData} />
      </div>
        </div>
    );
};

export default Home;