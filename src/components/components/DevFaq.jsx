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
  {/* Code style heading */}
  <div className="w-full flex justify-center items-center mb-4">
    <h2 className="text-2xl md:text-4xl font-bold text-green-300 flex items-center gap-2">
      &lt;<span className="text-orange-400">FAQ'S</span> /&gt;
      <span className="text-sm md:text-base text-gray-400 font-mono"> By Developers!</span>
    </h2>
  </div>

  <section className="space-y-6 max-w-4xl mx-auto" aria-labelledby="faq-section">
    {faqs.map((faq, index) => (
      <article
        key={index}
        className="border border-orange-200 rounded-xl bg-[#121212] transition-all duration-300 shadow-md overflow-hidden"
        role="region"
        aria-labelledby={`faq-question-${index}`}
      >
        <button
          onClick={() => toggleFaq(index)}
          className="w-full flex justify-between items-center px-6 py-5 hover:bg-green-900/10 text-left"
          aria-expanded={openIndex === index}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
        >
          <span className="text-base md:text-lg break-words text-orange-400/80">{faq.question}</span>
          {openIndex === index ? (
            <ChevronUp size={20} aria-hidden="true" />
          ) : (
            <ChevronDown size={20} aria-hidden="true" />
          )}
        </button>

        {openIndex === index && (
          <div
            id={`faq-answer-${index}`}
            className="px-6 pb-6 text-green-300 animate-fade-in"
            role="region"
            aria-labelledby={`faq-question-${index}`}
          >
            <div className="bg-[#000000] text-orange-200/80 p-5 rounded-lg text-base leading-relaxed border border-orange-300/50 shadow-inner mt-2">
              {faq.answer}
            </div>
          </div>
        )}
      </article>
    ))}
  </section>
</div>

  );
};

export default DevFaq;
