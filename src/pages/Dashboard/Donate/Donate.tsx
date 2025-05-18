import MakeDonation from "../../../components/Dashboard/DonationPage/MakeDonation/MakeDonation";
import RecentDonations from "../../../components/Dashboard/DonationPage/RecentDonations/RecentDonations";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";

const Donate = () => {
  return (
    <div>
      <DashboardHeaderTitle title="Donate Funds" />
      <MakeDonation />
      <RecentDonations />
    </div>
  );
};

export default Donate;
