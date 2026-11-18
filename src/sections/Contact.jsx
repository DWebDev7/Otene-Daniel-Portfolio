import React, { useState } from "react";
import { animations } from "../components/Animations";

const labelClass = "block text-sm font-medium text-neutral-700";
const fieldClass =
  "mt-1.5 w-full rounded-lg border border-[#e0dbeb] bg-white px-3.5 py-2.5 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20";
const star = <span className="text-red-500">*</span>;

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/otenedaniel007@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setIsSuccess(true);
        e.target.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 bg-white px-6 py-24 text-neutral-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-stretch md:gap-14">
        <div
          className="flex w-full flex-col justify-center rounded-3xl bg-[#16121f] p-10 text-center text-white md:w-1/2 md:p-16"
          {...animations.zoomIn}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Book a free call!</h2>
          <p className="mx-auto max-w-sm leading-relaxed text-[#b8b2c8]">
            Fill this short form. I’ll respond within 24 hours. Let’s build something that brings results.
          </p>
        </div>

        <form onSubmit={sendEmail} className="w-full space-y-5 md:w-1/2 md:py-4">
          <input type="hidden" name="_captcha" value="false" />

          <label className={labelClass}>
            {star} Name
            <input type="text" name="name" placeholder="John Doe" className={fieldClass} required />
          </label>

          <label className={labelClass}>
            {star} Email
            <input type="email" name="email" placeholder="john@gmail.com" className={fieldClass} required />
          </label>

          <label className={labelClass}>
            Your existing website
            <input type="text" name="existing_website" placeholder="site.com" className={fieldClass} />
          </label>

          <label className={labelClass}>
            {star} Your estimated budget
            <select name="budget" className={fieldClass} required>
              <option value="">Select...</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$1000 - $5000">$1000 - $5000</option>
              <option value="Above $5000">Above $5000</option>
            </select>
          </label>

          <label className={labelClass}>
            {star} Your goal for the site
            <textarea
              name="message"
              placeholder="How you want the site to look..."
              className={fieldClass}
              rows="4"
              required
            />
          </label>

          <label className={labelClass}>
            Anything else you want me to know about
            <textarea name="question" placeholder="Type it here..." className={fieldClass} rows="3" />
          </label>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-purple-600 py-3 font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
      </div>

      {isSuccess && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-purple-600 px-5 py-3 text-white shadow-xl">
          Message sent successfully!
        </div>
      )}

      {isError && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-red-500 px-5 py-3 text-white shadow-xl">
          Failed to send message. Please try again.
        </div>
      )}
    </section>
  );
};

export default Contact;