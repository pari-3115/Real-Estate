import { useState } from "react";

function ContactModal({ setOpen }) {

  const [step,setStep] = useState(1);

  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-4">

      <div className="bg-zinc-900 text-white max-w-sm w-full p-8 rounded-2xl text-center">


        {step === 1 && (

          <div>

            <p className="text-xs uppercase tracking-widest mb-1">
              Contact Us
            </p>

            <h2 className="text-2xl mb-2">
              Get In Touch With Us
            </h2>

            <p className="text-sm text-gray-300 mb-6">
              Get free consultation with a professional real estate consultant.
            </p>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border border-white rounded-lg p-3 mb-5 text-white placeholder-gray-400"
            />

            <button
              onClick={()=>setStep(2)}
              className="w-full bg-black text-white rounded-lg py-3"
            >
              Next
            </button>

          </div>

        )}


        {step === 2 && (

          <div>

            <p className="text-xs uppercase tracking-widest mb-1">
              Contact Us
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Get In Touch With Us
            </h2>

            <p className="text-sm text-gray-300 mb-6">
              Get free consultation with a professional real estate consultant.
            </p>

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white rounded-lg p-3 mb-4 text-white placeholder-gray-400"
            />

            <div className="flex gap-2 mb-5">

              <select
                className="bg-transparent border border-white rounded-lg p-3 text-white w-28"
              >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
              </select>

            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 bg-transparent border border-white rounded-lg p-3 text-white placeholder-gray-400"
             />

          </div>

          <button
            onClick={()=>setStep(3)}
            className="w-full bg-black text-white rounded-lg py-3"
          >
            Submit
          </button>

          </div>

        )}


        {step === 3 && (

          <div className="text-center">

            <p className="text-xs uppercase tracking-widest mb-2">
              Thank You For Connecting!
            </p>

            <h2 className="text-2xl font-semibold mb-3">
              We appreciate your interest and will be in touch soon
            </h2>

            <p className="text-sm text-gray-300 mb-6">
              In the meantime, feel free to browse our website to learn more about our offerings.
            </p>

            <button
              onClick={()=>{
                setOpen(false)
                window.scrollTo(0,0)
              }}
              className="bg-black text-white rounded-lg px-6 py-3"
            >
              Explore More →
            </button>

          </div>

        )}

      </div>

    </div>

  );

}

export default ContactModal;