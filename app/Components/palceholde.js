export default function MessagePlaceholder() {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center space-y-2 ">
         
          <div className="w-16 h-16 mx-auto ">
            <img src="./inbox.png" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Your messages</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Select a person to display their chat or start a new<br/> conversation
          </p>
  
        
          <button
            className="mt-12 px-6 py-2.5 bg-black text-white rounded-lg 
                       hover:bg-gray-800 transition-colors duration-200 
                       flex items-center justify-center gap-2 mx-auto"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            <span className="text-sm">Write a Message</span>
          </button>
        </div>
      </div>
    )
  }
  
  