import React from 'react';
import { FaHeart } from 'react-icons/fa';

function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Our journey began with a love story. A story that turned chocolate into more than just a treat but a symbol of sweetness and hope.
        </p>

        <div className="flex justify-center mb-8">
          <img
            src="/images/h.jpg" // Placeholder for image
            alt="Owner's Story"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-600 mb-6">
          Once, there was a girl who wasn't fond of chocolates. But then, she met a boy who was like the character in a book she once read. 
          The boy, just like the character, rarely smiled. But when he did, his smile was as sweet as chocolate. The girl saw a beauty in that, 
          and so, the idea of creating her own chocolate business was born, inspired by the sweetness of the boy’s rare smile.
        </p>

        <p className="text-lg text-gray-600 mb-6">
          However, things took a turn when the girl learned that the boy she liked would be moving to Switzerland. Instead of wallowing in heartbreak, 
          she decided to turn her emotions into action and create a business that would forever carry the memory of that sweet smile. 
          And so, our chocolate company was born, with love and passion at its core.
        </p>

        <p className="text-lg text-gray-600 mb-12">
          Our mission is to craft delicious, healthy chocolates made with cacao and other ingredients that benefit your health. 
          We ensure our chocolates are not only indulgent but also guilt-free, as they are designed to help manage blood sugar levels and are 
          safe for individuals with diabetes.
        </p>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Chocolate-Making Process</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our chocolates are made with the finest cacao, ethically sourced to provide not only a rich taste but also numerous health benefits. 
            Here's how we make our chocolates:
          </p>
          <ul className="list-inside list-disc text-lg text-gray-600 space-y-2">
            <li>Sourcing the Cacao: We begin with high-quality cacao beans sourced from ethical farms, ensuring both taste and sustainability.</li>
            <li>Roasting the Beans: The beans are roasted at the perfect temperature to bring out the rich, natural flavor of cacao.</li>
            <li>Grinding and Mixing: The roasted cacao is finely ground, and blended with other natural ingredients, including a mix of healthy sweeteners that won’t spike blood sugar levels.</li>
            <li>Molding and Setting: After blending, we pour the mixture into molds and set it to achieve the perfect chocolate bar texture.</li>
            <li>Packaging**: Each piece is carefully wrapped and packaged to preserve freshness and ensure it reaches you in the best condition.</li>
          </ul>

          {/* Video for the chocolate-making process */}
          <div className="flex justify-center mt-8">
            <video
              controls
              src="/images/process.mp4" 
              alt="Chocolate Making Process"
              className="w-full h-auto max-w-lg rounded-lg shadow-lg"
            >
            
            </video>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Why Our Chocolates Are Special</h3>
          <p className="text-lg text-gray-600 mb-4">
            Our chocolates are made with a blend of healthy ingredients that provide nutritional benefits, including antioxidants, magnesium, and healthy fats. 
            They are perfect for anyone looking to satisfy their sweet tooth while maintaining a balanced and healthy lifestyle.
          </p>

          <div className="flex justify-center mt-8">
            <img
              src="/images/t.jpg" // Placeholder for image
              alt="Healthy Chocolates"
              className="w-full h-auto max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-8">
          <FaHeart size={50} className="text-pink-600 mr-4" />
          <p className="text-lg text-gray-600">Made with love, from our hearts to yours.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
