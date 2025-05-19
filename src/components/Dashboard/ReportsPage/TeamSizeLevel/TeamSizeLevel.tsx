import EarningChart from "../EarningChart/EarningChart";
import RecentActivity from "../RecentActivity/RecentActivity";

const TeamSizeLevel = () => {
    return (
        <div className="font-Outfit">
            <h1 className="text-2xl text-white font-medium mt-6">Team Size by Level</h1>
            <div className="flex flex-col md:flex-row gap-5">
                <EarningChart/>
                <RecentActivity/>
            </div>
        </div>
    );
};

export default TeamSizeLevel;