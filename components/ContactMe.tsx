"use client";
import {useForm, SubmitHandler} from "react-hook-form";

import {PhoneIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit} = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    if (!formData) return;
    // execute things
    window.location.href = `mailto: ianmwa143@gmail.com?subject=${formData.subject}&body=Hi My name is ${formData.name}, ${formData.message} is (${formData.email})`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[15px] text-2xl  text-gray-500">
        Contact
      </h3>
      <div className="flex flex-col space-y-3">
        <h4 className="text-2xl font-semibold text-center pt-24">
          I have just got what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 justify-evenly" />
            <p className="text-2xl">+254769755697</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 justify-evenly" />
            <p className="text-2xl">ianmwa143@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 justify-evenly" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
          <form
            className="flex flex-col space-y-2 w-fit mx-auto pb-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex space-x-2 ">
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="contactInput"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="contactInput"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="contactInput"
              {...register("subject")}
            />
            <textarea
              placeholder="Message"
              className="contactInput"
              {...register("message")}
            />
            <button
              disabled={loading}
              className="bg-[#F7AB0A] disabled:bg-gray-500 py-5 px-10 rounded-md text-black disabled:cursor-not-allowed disabled:opacity-50 font-bold text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
