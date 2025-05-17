import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const ADAFeatures = () => {
  const adaFeatured = [
    {
      icon: ICONS.geoDispersed,
      title: "Geo Dispersed",
      description:
        "We have redundant servers spread out all over the world. Not only does this ensure our blocks transmit fast and efficiently.",
    },
    {
      icon: ICONS.lowLatency,
      title: "Low Latency",
      description:
        "Standbys are used during upgrades and in the unlikely event of server failure, another automatically and immediately takes it place.",
    },
    {
      icon: ICONS.scalable,
      title: "Scalable",
      description:
        "Standbys are used during upgrades and in the unlikely event of server failure, another automatically and immediately takes it place.",
    },
    {
      icon: ICONS.pledge,
      title: "18.4mil+ Pledge",
      description:
        "Higher pledged pools pay higher rewards. OASIS is among the top 1% highest pledged public pools and is self-funded.",
    },
  ];
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Gradients */}
      <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-0 absolute -bottom-20 -right-20"></div>
      <div className="bg-primary-20 w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute -top-20 -right-20"></div>
      <Container>
        <div className="flex items-center justify-between w-full">
          {/* Left side image */}
          <div className="relative">
            <img src={IMAGES.adaFeature} alt="" className="z-10 relative" />
            {/* Gradients */}
            <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-0 absolute top-5 -left-32"></div>
            <div className="bg-primary-20 w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute bottom-0 -right-20"></div>
          </div>

          <div className="z-10">
            <h1 className="text-[48px] font-medium text-white max-w-[507px]">
              What Can I Do With ADA?
            </h1>
            <p className="text-neutral-40 mt-[17px] max-w-[520px]">
              ADA is a digital currency. Any user, located anywhere in the
              world, can use ada as a secure exchange of value – without
              requiring a third party to mediate the exchange. Every transaction
              is permanently, securely, and transparently recorded on the
              Cardano blockchain.
            </p>

            {/* ADA Features card */}
            <div className="flex flex-col gap-[30px] mt-[45px] ">
              {adaFeatured.map((item, index) => (
                <div key={index} className="flex items-center gap-[31px] z-10">
                  <div className="bg-primary-20 rounded-full size-[67px] p-3 flex items-center justify-center">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div>
                    <h2 className="text-white text-[30px]">{item.title}</h2>
                    <p className="text-neutral-35 text-xl capitalize mt-[3px] max-w-[423px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ADAFeatures;
