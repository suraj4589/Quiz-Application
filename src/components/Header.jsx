import {Play} from '../assets/index'

function Header  () {
    return (
      <header className="bg-white shadow-md p-4 rounded-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="name font-bold  text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            <h1><span>Quiz Application</span></h1>
          </div>
          <div className="download-app">
            <button className="flex items-center bg-lime-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
              <img
                src={Play}
                alt="Google Play Store Icon"
                className="w-6 h-6 mr-2"
              />
              Download App
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;


  
  