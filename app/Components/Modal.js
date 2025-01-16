import React from "react";
import { useRouter } from "next/router";

export default function Modal({ children }) {
  const router = useRouter();

  const closeModal = () => {
    router.push("/feed"); // Navigate back to the feed page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 relative w-[90%] max-w-2xl">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-black hover:text-red-500"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
