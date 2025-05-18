

const DashboardHeaderTitle = ({title} : {title: string}) => {
    return (
        <h1 className="text-white font-medium text-[32px]">
          {title}
        </h1>
    );
};

export default DashboardHeaderTitle;