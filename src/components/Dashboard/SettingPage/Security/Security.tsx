import { ICONS } from "../../../../assets";
import Button from "../../../Reusable/Button/Button";
import { useState } from "react";
import ChangePasswordModal from "./ChangePasswordModal";

const Security = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-Outfit mt-10">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        {/* Profile photo */}
        <div className="flex flex-col gap-6 w-full">
          <div
            style={{
              boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
              backdropFilter: "blur(5.05px)",
            }}
            className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-6 flex flex-col w-full md:w-[327px]"
          >
            <img
              src={ICONS.changePassword}
              alt=""
              className={`size-[200px] mx-auto`}
            />
            <p className="text-neutral-110 text-sm mt-[3px]">
              Set a strong password to keep your Account secure.
            </p>
            <Button
              label="Change Password"
              classNames="w-[176px] mt-5"
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
          </div>
        </div>

        {/* Profile info */}
        {/* <div className="flex flex-col gap-6 w-full">
          <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px] min-h-[270px]">
            <img
              src={ICONS.twoFA}
              alt=""
              className="size-[66px] rounded-full"
            />
            <p className="text-neutral-110 text-lg mt-[3px]">2FA</p>
            <h1 className="text-white text-[30px] font-medium mt-2">
              Enhance Security
            </h1>
            <p className="text-neutral-110 text-lg mt-[3px]">
              Add an extra layrr of protection to your account.
            </p>
          </div>
        </div> */}
      </div>

      <ChangePasswordModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Security;
