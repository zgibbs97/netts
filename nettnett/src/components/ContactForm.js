const ContactForm = () => {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
        <form className="max-w-3xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  