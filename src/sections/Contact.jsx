// import React from "react";
// import { animations  } from '../components/Animations';

// const Contact = () => {
//   return (
//     <section id="contact" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white text-black max-w-7xl mx-auto">
//       <div className="w-full md:h-screen h-fit md:w-1/2 mb-8 md:mb-0 text-center border-2 border-neutral-900 p-20" {...animations.zoomIn}>
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a free call!</h2>
//         <p className="text-gray-600 max-w-sm mx-auto">
//           Fill this short form. I’ll respond within 24 hours. Let’s build something that brings results.
//         </p>
//       </div>

//       <form className="w-fit md:w-1/2 space-y-4 p-2 md:p-10">
//         <div>
//           <label className="text-red-500 font-medium text-sm">*</label> Name
//           <input type="text" placeholder="John Doe" className="w-full mt-1 p-2 rounded-md bg-gray-100 border-gray-200 border" />
//         </div>
//         <div>
//           <label className="text-red-500 font-medium text-sm">*</label> Email
//           <input type="email" placeholder="john@gmail.com" className="w-full mt-1 p-2 rounded-md  bg-gray-100 border-gray-200 border" />
//         </div>
//         <div>
//           <label className="text-red-500 font-medium text-sm">*</label> How did you find us?
//           <select className="w-full mt-1 p-2 rounded-md bg-gray-100">
//             <option>Select...</option>
//           </select>
//         </div>
//         <div>
//           <label>Your existing website</label>
//           <input type="text" placeholder="site.com" className="w-full mt-1 p-2 rounded-md  bg-gray-100 border-gray-200 border" />
//         </div>
//         <div>
//           <label className="text-red-500 font-medium text-sm">*</label> Your estimated budget
//           <select className="w-full mt-1 p-2 rounded-md  bg-gray-100 border-gray-200 border">
//             <option>Select...</option>
//           </select>
//         </div>
//         <div>
//           <label className="text-red-500 font-medium text-sm">*</label> Your goal for the site
//           <textarea
//             placeholder="How you want the site to look like/ what you want to get back from it (leads, customers, sales, etc.)/ what features will your site do..."
//             className="w-full mt-1 p-2 rounded-md  bg-gray-100 border-gray-200 border"
//             rows="4"
//           />
//         </div>
//         <div>
//           <label>Anything else you want me to know about</label>
//           <textarea placeholder="Type it here..." className="w-full mt-1 p-2 rounded-md  bg-gray-100 border-gray-200 border" rows="3" />
//         </div>
//         <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { animations } from "../components/Animations";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mlkgs7k', 'template_skfct4w', form.current, {
        publicKey: 'Eqn6lQIMfmv9UGByO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white text-black max-w-7xl mx-auto"
    >
      <div
        className="w-full md:h-screen h-fit md:w-1/2 mb-8 md:mb-0 text-center border-2 border-neutral-900 p-20"
        {...animations.zoomIn}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a free call!</h2>
        <p className="text-gray-600 max-w-sm mx-auto">
          Fill this short form. I’ll respond within 24 hours. Let’s build something that brings results.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="w-fit md:w-1/2 space-y-4 p-2 md:p-10">
        <div>
          <label className="text-red-500 font-medium text-sm">*</label> Name
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full mt-1 p-2 rounded-md bg-gray-100 border-gray-200 border"
            required
          />
        </div>

        <div>
          <label className="text-red-500 font-medium text-sm">*</label> Email
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="w-full mt-1 p-2 rounded-md bg-gray-100 border-gray-200 border"
            required
          />
        </div>

        <div>
          <label>Your existing website</label>
          <input
            type="text"
            name="existing_website"
            placeholder="site.com"
            className="w-full mt-1 p-2 rounded-md bg-gray-100 border-gray-200 border"
          />
        </div>

        <div>
          <label className="text-red-500 font-medium text-sm">*</label> Your estimated budget
          <select
            name="budget"
            className="w-full mt-1 p-2 rounded-md bg-gray-100 border-gray-200 border"
            required
          >
            <option value="">Select...</option>
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="$1000 - $5000">$1000 - $5000</option>
            <option value="Above $5000">Above $5000</option>
          </select>
        </div>

        <div>
          <label className="text-red-500 font-medium text-sm">*</label> Your goal for the site
          <textarea
            name="message"
            placeholder="How you want the site to look like/ what you want to get back from it (leads, customers, sales, etc.)/ what features will your site do..."
            className="w-full mt-1 p-2 rounded-md bg-gray-100 border-gray-200 border"
            rows="4"
            required
          />
        </div>

        <div>
          <label>Anything else you want me to know about</label>
          <textarea
            name="question"
            placeholder="Type it here..."
            className="w-full mt-1 p-2 rounded-md bg-gray-100 border-gray-200 border"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
          value="send"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
