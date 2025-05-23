import {
  FaLaptopCode,
  FaUsers,
  FaBriefcase,
  FaChalkboardTeacher,
  FaAward,
  FaFileAlt
} from "react-icons/fa";

const benefits = [
  {
    title: "Learn by Building Projects",
    description: "Create real-world projects that help you develop a solid portfolio for job opportunities.",
    icon: <FaLaptopCode className="text-green-500" />,
  },
  {
    title: "Lifetime Community Access",
    description: "Join a vibrant community of learners and professionals to grow together.",
    icon: <FaUsers className="text-blue-500" />,
  },
  {
    title: "Job Referrals & Networking",
    description: "Get access to exclusive job referrals and networking opportunities.",
    icon: <FaBriefcase className="text-purple-500" />,
  },
  {
    title: "Weekly Doubt Sessions",
    description: "Attend weekly sessions to clear your doubts with experts.",
    icon: <FaChalkboardTeacher className="text-orange-500" />,
  },
  {
    title: "Certificate + LinkedIn Push",
    description: "Earn certificates for your work and have them featured on LinkedIn.",
    icon: <FaAward className="text-teal-500" />,
  },
  {
    title: "Resume + Portfolio Review",
    description: "Get your resume and portfolio reviewed to stand out to employers.",
    icon: <FaFileAlt className="text-yellow-500" />,
  },
];

export default benefits;
