function page() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Welcome to <span className="text-blue-500">Web Hoisting</span>, where
          innovation meets reliability in the world of cloud hosting. Since our
          inception, we have been committed to delivering cutting-edge solutions
          that empower businesses of all sizes to scale, thrive, and achieve
          unparalleled online success.
        </p>
        <div className="text-left bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong className="text-blue-500">24/7 Customer Support:</strong>{" "}
              Our team is always ready to assist you with any issue, any time.
            </li>
            <li>
              <strong className="text-green-500">Secure Infrastructure:</strong>{" "}
              We prioritize your data's safety with state-of-the-art security
              protocols.
            </li>
            <li>
              <strong className="text-orange-500">Scalability:</strong> Flexible
              hosting plans designed to grow with your business.
            </li>
            <li>
              <strong className="text-teal-500">Eco-Friendly Practices:</strong>{" "}
              Committed to reducing our environmental footprint with green
              hosting initiatives.
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join Us Today!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience the future of web hosting. Together, let's build a
            better, faster, and more secure web!
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
