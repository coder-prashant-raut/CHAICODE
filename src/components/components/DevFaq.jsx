import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const faqs = [
    {
      question: `console.log("Can I get placement after completing this course?");`,
      answer: `Yes, absolutely! This course is designed with real-world projects, mock interviews, resume reviews, and soft skills training. We have tie-ups with hiring partners and many of our learners have landed jobs at startups and big tech companies. Your growth is our mission.`,
    },
    {
      question: `console.log("Is this course beginner friendly?");`,
      answer: `100%. Whether you're starting from scratch or switching domains, our step-by-step structured curriculum ensures you never feel lost. From HTML to full-stack apps, you'll build confidence along the way.`,
    },
    {
      question: `console.log("Do we build real projects?");`,
      answer: `Of course! You’ll build 10+ industry-level projects like e-commerce sites, portfolio apps, chat apps, and admin dashboards. All are deployable and GitHub-friendly — so you stand out!`,
    },
    {
      question: `console.log("Is there doubt support or mentorship?");`,
      answer: `Yes. You’ll get lifetime access to our private Discord community, weekly live mentorship calls, and doubt-clearing sessions. You're never alone on this journey.`,
    },
    {
      question: `console.log("How long is the course duration?");`,
      answer: `Typically 4 to 6 months, depending on your pace. The structure is flexible — so you can binge in a month or learn part-time over a few months.`,
    },
    {
      question: `console.log("What if I miss a session?");`,
      answer: `No worries! All sessions are recorded and shared with you. You can rewatch them anytime from your dashboard.`,
    },
    {
      question: `console.log("Do I get a certificate after completion?");`,
      answer: `Yes, you’ll get a verifiable certificate and a project portfolio link that you can showcase on LinkedIn, GitHub, and during interviews.`,
    },
    {
      question: `console.log("Will there be resume and LinkedIn help?");`,
      answer: `Absolutely. Our mentors help you craft tech-focused resumes, optimize your LinkedIn profile, and even prepare for interviews.`,
    },
    {
      question: `console.log("Can I pay in installments?");`,
      answer: `Yes. We offer flexible payment plans, including EMI options, so money doesn’t stop your growth.`,
    },
    {
      question: `console.log("Do I need a powerful laptop?");`,
      answer: `A basic laptop with internet is enough. We’ll guide you through lightweight setups and tools that work on most systems.`,
    },
  ];
  

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
        <span className="text-sm md:text-base text-gray-400 font-mono">By Developers!</span>
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
              <span className="text-base md:text-lg break-words">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-green-300 animate-fade-in">
                <div className="bg-[#000000] text-lime-400 p-5 rounded-lg text-base leading-relaxed border border-green-600 shadow-inner mt-2">
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
