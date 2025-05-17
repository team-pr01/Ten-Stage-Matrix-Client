import TextInput from "../../Reusable/TextInput/TextInput";
import TextArea from "../../Reusable/TextArea";
import { useForm } from "react-hook-form";

type TFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const sendMessage = (data: TFormValues) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(sendMessage)}
      className="flex flex-col gap-[18px] w-[45%]"
    >
      <div className="flex flex-col md:flex-row gap-[18px]">
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
    </form>
  );
};

export default ContactUsForm;
