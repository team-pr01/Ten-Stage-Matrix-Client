import Loader from "../../Shared/Loader/Loader";

const Button = ({
  label,
  isLoading,
}: {
  label: string;
  isLoading: boolean;
}) => {
  return (
    <button
      type="submit"
      className="px-6 py-3 w-full rounded-xl hover:bg-primary-10 bg-primary-85 text-white font-medium text-sm text-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
      style={{
        boxShadow: `
                    inset 0px 2px 2px 0px #D26407,
                    inset 0px -4px 4px 0px rgba(0, 0, 0, 0.35),
                    inset 0px 4px 4px 0px rgba(255, 255, 255, 0.40),
                    0px 4px 24px 0px rgba(168, 82, 5, 0.50)
                  `,
      }}
    >
      {isLoading ? <Loader size="size-6" /> : label}
    </button>
  );
};

export default Button;
