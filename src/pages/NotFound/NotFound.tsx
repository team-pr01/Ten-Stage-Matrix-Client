import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl bg-neutral-15 h-screen font-Outfit">
      <img
        src="https://i.ibb.co/SVMTKPy/Frame-5.png"
        alt="illustration"
        className="w-full lg:w-[400px]"
      />
      <p className="text-neutral-50 text-[0.9rem] sm:text-[1.2rem] w-full lg:w-[55%] text-center mt-10 lg:mt-4">
        The page cannot be found. The requested URL was not found on this
        server.
      </p>

      <Link
        to={"/"}
        className="py-3 px-8 rounded-full bg-primary-10 text-white mt-8"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
