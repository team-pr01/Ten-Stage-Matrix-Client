import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="py-24 relative bg-neutral-10">
      <div className="bg-primary-20 w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute -bottom-20 left-0"></div>
      <Container>
        <div className="flex items-center justify-between">
          <div className="z-10 w-[55%]">
            <h1 className="text-[40px] font-medium text-white capitalize">
              Do you have any questions?
            </h1>
            <p className="text-neutral-45 mt-[14px] mb-6 max-w-[519px]">
              Please contact us directly by mail or from our contact form. You
              can also visit our support page which might help solve your
              problem.
            </p>

            <a
              href="mailto:support.tenstagematrix"
              className="text-primary-10 text-xl"
            >
              support.tenstagematrix
            </a>
            <hr className="border border-neutral-50 my-[29px] w-full max-w-[401px]" />
            <Link
              to={"/contact-us"}
              className="p-2 w-[210px] h-[58px] rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center"
            >
              Visit Our Support Page
            </Link>
          </div>

          {/* Contact form */}
          <ContactUsForm />
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
