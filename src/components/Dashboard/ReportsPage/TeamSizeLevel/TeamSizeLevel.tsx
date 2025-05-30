// import EarningChart from "../EarningChart/EarningChart";
import RecentActivity from "../RecentActivity/RecentActivity";

const TeamSizeLevel = () => {
    return (
        <div className="font-Outfit">
            <div className="flex flex-col xl:flex-row gap-5">
                {/* <EarningChart/> */}
                <RecentActivity/>
            </div>
        </div>
    );
};

export default TeamSizeLevel;