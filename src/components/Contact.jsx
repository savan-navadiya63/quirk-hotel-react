import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Contact() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const [successMessage, setSuccessMessage] = useState("");

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    setErrors((prev) => ({
      ...prev,
      checkIn: "",
      checkOut: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!startDate) {
      newErrors.checkIn = "Check-in date is required";
    }

    if (!endDate) {
      newErrors.checkOut = "Check-out date is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Inquiry submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      setStartDate(null);
      setEndDate(null);
    }
    setSuccessMessage(
      "Your stay inquiry has been sent successfully. Our team will contact you shortly.",
    );

    setTimeout(() => {
      setSuccessMessage("");
    }, 4000);
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="font-poppins mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
            Contact Us
          </p>

          <h2 className="font-playfair-bold text-3xl text-white sm:text-4xl">
            Reserve Your Luxury Stay
          </h2>

          <p className="font-poppins mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
            Get in touch with us for room bookings, private events, or any
            special requests. Our team is always ready to assist you with a
            premium experience.
          </p>

          <div className="font-poppins mt-8 space-y-4 text-sm text-gray-300">
            <p>
              <span className="font-semibold text-white">Address:</span> 123
              Luxury Avenue, City Center
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span> +1 234
              567 890
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              info@quirkhotel.com
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
        >
          {successMessage && (
            <div className="mb-6 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                  ✓
                </div>

                <div>
                  <h3 className="font-playfair text-sm font-semibold text-white">
                    Inquiry Submitted
                  </h3>
                  <p className="font-poppins mt-1 text-sm leading-6 text-gray-300">
                    {successMessage}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="font-poppins mb-2 block text-sm text-white">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="font-poppins w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-[#D4AF37]"
              />
              {errors.fullName && (
                <p className="font-poppins mt-2 text-sm text-red-400">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label className="font-poppins mb-2 block text-sm text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="font-poppins w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-[#D4AF37]"
              />
              {errors.email && (
                <p className="font-poppins mt-2 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="font-poppins mb-2 block text-sm text-white">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10 digit mobile number"
                maxLength={10}
                className="font-poppins w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-[#D4AF37]"
              />
              {errors.phone && (
                <p className="font-poppins mt-2 text-sm text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="font-poppins mb-2 block text-sm text-white">
                Select Stay Dates
              </label>
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                minDate={new Date()}
                monthsShown={2}
                dateFormat="dd MMM yyyy"
                placeholderText="Select check-in and check-out"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
              />
              {(errors.checkIn || errors.checkOut) && (
                <p className="font-poppins mt-2 text-sm text-red-400">
                  {errors.checkIn || errors.checkOut}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="font-poppins mb-2 block text-sm text-white">
              Message
            </label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="font-poppins w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-[#D4AF37]"
            ></textarea>
            {errors.message && (
              <p className="font-poppins mt-2 text-sm text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="premium-button font-poppins mt-6 rounded-full px-8 py-3 text-sm font-semibold"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
