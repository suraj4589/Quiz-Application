

const Footer = () => {
    return (
      <>
      <WhatsAppButton/>
      <footer className="bg-gray-900 text-white py-6 mt-10">

        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </footer>
      </>
    );
  };

  export default Footer;


  export  const WhatsAppButton = () =>{
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="white"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.11.63 4.08 1.72 5.75L2 22l4.37-1.72C7.92 21.37 9.92 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.58-.63-4.98-1.7l-.36-.27-2.6 1.02 1-2.64-.27-.38C3.63 14.58 3 12.85 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm4.5-5.5c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.2-.74-.64-1.24-1.43-1.38-1.67-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.45.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.79-1.87-.2-.49-.4-.42-.57-.43-.15-.01-.32-.02-.5-.02s-.45.06-.68.31c-.23.25-.9.87-.9 2.12s.92 2.46 1.05 2.63c.12.17 1.84 2.83 4.46 3.96.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.47-.6 1.67-1.17.2-.57.2-1.07.15-1.17-.06-.1-.23-.17-.48-.29z" />
        </svg>
      </a>
    );
  }
  