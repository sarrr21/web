"use client"

import { useState } from "react"
import "./delete-account-modal.css"

export default function DeleteAccountModal({ onClose }) {
  const [reason, setReason] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle account deletion logic here
    console.log("Deleting account:", { reason, feedback })
  }

  return (
    <div className="fixed inset-0 top-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          ×
        </button>

        <h2 className="text-lg font-semibold text-center mb-4">Delete Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <p className="text-md font-medium mb-2">Select Reason</p>

            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="reason"
                value="dont-use"
                checked={reason === "dont-use"}
                onChange={(e) => setReason(e.target.value)}
                className="mt-0.5 custom-radio"
              />
              <span className="text-sm">I don't want to use Seattle Pulse</span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="reason"
                value="another-account"
                checked={reason === "another-account"}
                onChange={(e) => setReason(e.target.value)}
                className="mt-0.5 custom-radio"
              />
              <span className="text-sm">I have another account</span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="reason"
                value="problems"
                checked={reason === "problems"}
                onChange={(e) => setReason(e.target.value)}
                className="mt-0.5 custom-radio"
              />
              <span className="text-sm">This website has some problems</span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="reason"
                value="other"
                checked={reason === "other"}
                onChange={(e) => setReason(e.target.value)}
                className="mt-0.5 custom-radio"
              />
              <span className="text-sm">Other</span>
            </label>
          </div>

          {/* Feedback textarea */}
          <div className="space-y-2">
            <p className="text-sm">Anything else you want to add</p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write/suggest something to improve our app"
              className="w-full rounded-lg border border-gray-200 p-3 text-sm min-h-[100px] resize-none focus:outline-none focus:border-gray-300"
            />
          </div>

          {/* Warning message */}
          <p className="text-[#b81616] text-xs">
            *All your data will be deleted permanently from our server. This action is irreversible.
          </p>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-[#b81616] text-white rounded-lg text-sm hover:bg-red-600"
            >
              Delete my Account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

