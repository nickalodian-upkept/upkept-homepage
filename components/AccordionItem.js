import { useRef, useState, useEffect } from 'react';

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium focus:outline-none transition hover:bg-gray-50"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className="px-6 text-gray-700 text-sm transition-all duration-500 ease-in-out overflow-hidden"
      >
        <div className="py-4">{answer}</div>
      </div>
    </div>
  );
}
