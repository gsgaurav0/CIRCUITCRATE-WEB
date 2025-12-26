import { useState } from 'react';
import { AuthForm } from "@/components/ui/premium-auth";
import { X } from 'lucide-react';

const DemoOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center py-16 bg-black">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Get Started / Sign In
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in-0">
          <div className="relative w-full max-w-md animate-in zoom-in-95">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <AuthForm 
              onClose={() => setIsOpen(false)}
              onSuccess={(userData) => {
                console.log('User authenticated:', userData);
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { DemoOne };

