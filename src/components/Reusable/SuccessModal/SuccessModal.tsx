import { ICONS } from "../../../assets";

const SuccessModal = ({
  title,
  isOpenModal,
  setIsModalOpen,
}: {
  title: string;
  isOpenModal: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`${
        isOpenModal ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#00000066] backdrop-blur-sm flex items-center justify-center transition-all duration-300 font-Outfit`}
    >
      <div
        className={`${
          isOpenModal ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[30%] border-2 border-neutral-115/20 bg-neutral-140 rounded-2xl p-4 transition-all duration-300 flex flex-col gap-6`}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={ICONS.successIcon}
            alt=""
            className="size-[100px] md:size-[150px]"
          />
          <h1 className="text-xl md:text-2xl text-white font-bold">{title}</h1>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-3 rounded-xl hover:bg-primary-10 bg-primary-85 text-white font-semibold text-sm text-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-[150px]"
            style={{
              boxShadow: `
                              inset 0px 2px 2px 0px #D26407,
                              inset 0px -4px 4px 0px rgba(0, 0, 0, 0.35),
                              inset 0px 4px 4px 0px rgba(255, 255, 255, 0.40),
                              0px 4px 24px 0px rgba(168, 82, 5, 0.50)
                            `,
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
