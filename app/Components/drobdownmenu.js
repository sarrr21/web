
export default function DropdownMenu() {
  

  return (
    <div className="relative inline-block text-left">
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md z-10">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M4 4h16v16H4z"
                />
              </svg>
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
              Logout
            </li>
          </ul>
        </div>
     
    </div>
  );
}
