import { ICONS } from "../../../../assets";
import { useState } from "react";
import Button from "../../../Reusable/Button/Button";

const ReferralCode = ({
  cardHeight = "h-full",
  referralCode,
}: {
  cardHeight?: string;
  referralCode: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy referral code", error);
    }
  };

  return (
    <div
      className="p-[2px] rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient"
  //     style={{
  //       background: `linear-gradient(
  //   60deg,
  //   rgba(255, 255, 255, 0.005) 0%,
  //   rgba(42, 245, 149, 0.60) 30%,
  //   rgba(255, 255, 255, 0.005) 40%
  // )`,
  //     }}
    >
      <div className="bg-neutral-10 rounded-[28px]">
        <div
          style={{
            boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
            backdropFilter: "blur(5.05px)",
          }}
          className={`rounded-[28px] border border-primary-50 bg-neutral-90/10 p-6 flex flex-col ${cardHeight}`}
        >
          <div className="space-y-8">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2AF595] size-[18px] rounded-full blur-[5px]"></div>
              <h1 className="text-white text-xl font-medium capitalize">
                Your Code: {referralCode}
              </h1>
            </div>

            <img
              src={ICONS.referralCode2}
              alt=""
              className="size-[120px] md:size-[200px] mx-auto"
            />
            <h2 className="text-neutral-100 text-xs font-medium capitalize">
              Share this code to invite new members.
            </h2>
          </div>

          <Button
            type="button"
            label={copied ? "Copied!" : "Copy Code"}
            onClick={handleCopy}
            classNames="w-fit mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default ReferralCode;
