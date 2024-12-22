// ContactPage.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";  // Importing the icons

function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">We'd love to hear from you. Reach out to us on social media or via email and phone.</p>

        <div className="flex justify-center gap-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <FaFacebookF size={40} className="text-blue-600 hover:text-blue-800" />
              <span className="mt-2 text-sm text-gray-700">Facebook</span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <FaInstagram size={40} className="text-pink-600 hover:text-pink-800" />
              <span className="mt-2 text-sm text-gray-700">Instagram</span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            className="transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <FaEnvelope size={40} className="text-gray-600 hover:text-gray-800" />
              <span className="mt-2 text-sm text-gray-700">Email</span>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+1234567890"
            className="transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <FaPhoneAlt size={40} className="text-green-600 hover:text-green-800" />
              <span className="mt-2 text-sm text-gray-700">Phone</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;  // Correctly exporting ContactPage component
