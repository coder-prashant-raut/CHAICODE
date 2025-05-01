import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqs from "../../data/faqs";
  

const DevFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent text-orange-400 font-mono py-14 px-4 md:px-16 min-h-screen">
      
      
      {/*code style heading */}
      <div className="w-full flex justify-center items-center mb-4">
      <h2 className="text-2xl md:text-4xl font-bold text-orange-400 flex items-center gap-2">
        &lt;<span className="text-green-400">FAQ'S</span> /&gt;
        <span className="text-sm md:text-base text-gray-400 font-mono"> By Developers!</span>
      </h2>
      </div>
      

      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border bo rder-green-700 rounded-xl bg-[#121212] transition-all duration-300 shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-6 py-5 hover:bg-green-900/10 text-left"
            >
              <span className="text-base md:text-lg break-words text-orange-400/80">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-green-300 animate-fade-in">
                <div className="bg-[#000000] text-lime-400/80 p-5 rounded-lg text-base leading-relaxed border border-green-600/50 shadow-inner mt-2">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevFaq;
