import DonationProgram from "../../components/HomePage/DonationProgram/DonationProgram";
import EarnFlexibly from "../../components/HomePage/EarnFlexibly/EarnFlexibly";
import FindNextOpportunity from "../../components/HomePage/FindNextOpportunity/FindNextOpportunity";
import GetStarted from "../../components/HomePage/GetStarted/GetStarted";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <FindNextOpportunity />
      <GetStarted />
      {/* <EarnFlexibly />
      <DonationProgram/>
      <Footer/> */}
    </div>
  );
};

export default Home;
