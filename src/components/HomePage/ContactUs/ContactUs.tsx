import { Link } from "react-router-dom";
import TextInput from "../../Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";

type TFormValues = {
    name : string;
    email : string;
    subject : string;
    message : string;
}
const ContactUs = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  return (
    <div>
      <div>
        <h1 className="text-[40px] font-medium text-white capitalize">
          Do you have any questions?
        </h1>
        <p className="text-neutral-45 mt-[14px] mb-6">
          Please contact us directly by mail or from our contact form. You can
          also visit our support page which might help solve your problem.
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
      <div>
        <TextInput
          placeholder="Your Name"
          error={errors.name}
          {...register("name", {
            required: "Name is required",
          })}
        />
        <TextInput
          placeholder="Your Email"
          error={errors.email}
          {...register("email", {
            required: "Email is required",
          })}
        />
        <TextInput
          placeholder="Subject"
          error={errors.subject}
          {...register("subject")}
          isRequired={false}
        />
      </div>
    </div>
  );
};

export default ContactUs;
