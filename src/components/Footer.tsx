import React from 'react';
import { GrTechnology } from 'react-icons/gr';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
              <h3 className="text-xl font-bold mb-4 flex flex-row items-center">CLOUD
              <GrTechnology />
              <span className="text-blue-500">HOSTING</span>
              </h3>
            <p className="text-sm text-gray-400">
              Cloud Hosting provides reliable and secure hosting solutions tailored for your success.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Fast Performance</li>
              <li>99.9% Uptime Guarantee</li>
              <li>Scalable Solutions</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className='hover:text-blue-500 cursor-pointer'>FAQs</li>
              <li className='hover:text-blue-500 cursor-pointer'>Contact Us</li>
              <li className='hover:text-blue-500 cursor-pointer'>Knowledge Base</li>
              <li className='hover:text-blue-500 cursor-pointer'>System Status</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with the latest news and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-5 text-center">
          <p className="text-sm text-gray-500">&copy; 2024 Cloud Hosting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
