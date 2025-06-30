// components/CalendlyEmbed.js
import { useEffect, useRef } from 'react';

export default function CalendlyEmbed() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    calendlyRef.current.appendChild(script);

    return () => {
      if (calendlyRef.current) calendlyRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow">
      <h1 className="text-3xl font-bold mb-6">Schedule Your Visit</h1>
      <div
        ref={calendlyRef}
        className="calendly-inline-widget"
        style={{ minWidth: "320px", height: "630px" }}
        data-url="https://calendly.com/donaldson-nickj/home-maintenance-visit"
      ></div>
    </div>
  );
}