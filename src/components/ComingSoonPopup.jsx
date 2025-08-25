import React, { useState, useEffect } from "react";
import { X, Sparkles, Bell } from "lucide-react";

const ComingSoonPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup was already shown today
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem("comingSoonPopupDate");

    if (lastShown !== today) {
      // Show popup after 1 second
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    // Store today's date so popup doesn't show again today
    const today = new Date().toDateString();
    localStorage.setItem("comingSoonPopupDate", today);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Popup Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn"
        onClick={handleBackdropClick}
      >
        {/* Popup Content */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden animate-scaleIn">
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header with Background Gradient */}
          <div className="bg-gradient-to-br from-[var(--primary)] to-pink-500 px-8 pt-8 pb-6 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Coming Soon!</h2>
            <p className="text-white/90 text-sm">
              Something amazing is on the way
            </p>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🍬 New Sweet Delights
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're working on exciting new confectionery products and features. 
              Stay tuned for delicious updates coming your way!
            </p>

            {/* Features List */}
            <div className="text-left mb-6 space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                <span>New product catalog</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                <span>Enhanced online ordering</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                <span>Exclusive member benefits</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={closePopup}
                className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[var(--primary)]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Got it, Thanks!
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Bell className="w-3 h-3" />
                <span>We'll notify you when it's ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default ComingSoonPopup;
