"use client";
import React, { useState, useRef } from "react";
useState;
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_nbjn1it",
    //     "template_1opz7kb",
    //     form.current,
    //     "Fpi0j3HEj3mwWPJga"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    const values = {
      name,
      email,
      phone,
      subject,
      message,
    };

    // emailjs
    //   .sendForm(
    //     "service_nbjn1it",
    //     "template_js9du1l",
    //     form.current,
    //     "Fpi0j3HEj3mwWPJga"
    //   )
    //   .then(
    //     (result) => {
    //       alert("Sent");
    //     },
    //     (error) => {
    //       alert("Something Went Wrong");
    //       console.log(error);
    //     }
    //   );

    // toast.promise(
    //   emailjs
    //     .send(
    //       "service_nbjn1it",
    //       "template_js9du1l",
    //       values,
    //       "Fpi0j3HEj3mwWPJga"
    //     )
    //     .then((success) => {
    //       form.reset();
    //     }),
    //   {
    //     loading: "Sending... 📤",
    //     success: "Your message has been sent 🎉",
    //     error: "Uh oh! Something went wrong 😥",
    //   }
    // );

    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      values,
    };
    toast.promise(
      emailjs
        .send(data.service_id, data.template_id, data.values, data.user_id),
      {
        loading: "Sending... 📤",
        success: "Message Sent Successfully 😊",
        error: "Try Again 😥",

      }
    );

    // try {
    //   toast.promise(
    //     emailjs
    //       .send("service_nbjn1it", "template_js9du1l", values, "Fpi0j3HEj3mwWPJga")
    //       ,
    //     {
    //       loading: "Sending... 📤",
    //       success: "Your message has been sent 🎉",
    //       error: "Uh oh! Something went wrong 😥",
    //     }
    //   );
    // } catch (error) {
    //   console.error("Unhandled error:", error);
    // }
    setName('')
    setEmail('')
    setMessage('')
    setPhone('')
    setSubject('')
    
  };
  return (
    <section id = "contact">
      <div>
      <h1 className="text-center text-4xl font-bold rounded-lg mt-4 mb-8 m:mb-12 bg-gradient-to-br from-purple-500 to-cyan-500 p-2">
        Contact ME
      </h1>

      <div
        id="contactus"
        className="grid md:grid-cols-2 my-12 md:my-12 py-6 gap-4 relative"
      >
        <div className="flex items-center justify-center">
          <Image
            className="rounded-lg"
            src="/images/pic2.jpg"
            alt="loading"
            width={500}
            height={500}
          />
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <div className="mb-6">
              <input
                type="text"
                name="name"
                id="name"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <br />

              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <br />

              <input
                type="tel"
                name="phone"
                id="phone"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />

              <input
                type="text"
                name="subject"
                id="subject"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <br />

              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <br />

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
