import { useForm } from "react-hook-form";

type TFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactUsForm = () => {
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TFormValues>();

  const sendMessage = (data: TFormValues) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(sendMessage)}
      className="flex flex-col gap-[18px] w-full xl:w-[45%] z-10"
    >
      {/* <div className="flex flex-col md:flex-row gap-[18px]">
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
      </div>
      <TextInput
        placeholder="Subject"
        error={errors.subject}
        {...register("subject")}
        isRequired={false}
      />
      <TextArea
        placeholder="Write  your massage"
        cols={4}
        rows={7}
        {...register("message")}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="p-2 w-[170px] h-[58px] rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center"
        >
          Send Message
        </button>
      </div> */}
    </form>
  );
};

export default ContactUsForm;
