import MakeDonation from "../../../components/Dashboard/DonationPage/MakeDonation/MakeDonation";
import RecentDonations from "../../../components/Dashboard/DonationPage/RecentDonations/RecentDonations";

const Donate = () => {
  return (
    <div className="min-h-screen">
      <MakeDonation />
      <RecentDonations />
    </div>
  );
};

export default Donate;
