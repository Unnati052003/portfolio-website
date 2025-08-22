import { motion } from "framer-motion";

// Frontend
import { RiReactjsLine } from "react-icons/ri";

import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

// Backend
import { FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

// Database
import { SiMysql, SiMongodb} from "react-icons/si";
 // For DynamoDB, Drizzle ORM



// Animation for icons
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
});

// Helper for rendering icon grid
const IconGrid = ({ icons }) => (
  <div className="flex flex-wrap gap-4 justify-center mb-8">
    {icons.map(({ Icon, label, color, duration }, idx) => (
      <motion.div
        key={label}
        variants={iconVariants(duration || 2.5)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-3 min-w-[80px]"
      >
        <Icon className={`text-5xl sm:text-6xl ${color}`} />
        <span className="mt-2 text-xs sm:text-sm text-neutral-300 text-center">
          {label}
        </span>
      </motion.div>
    ))}
  </div>
);

// Frontend icons
const frontendIcons = [
  {
    Icon: RiReactjsLine,
    label: "ReactJS",
    color: "text-cyan-400",
    duration: 2.5,
  },
  
  {
    Icon: SiJavascript,
    label: "JavaScript",
    color: "text-yellow-400",
    duration: 2.2,
  },
  {
    Icon: SiTailwindcss,
    label: "TailwindCSS",
    color: "text-cyan-500",
    duration: 2.9,
  },
  { Icon: SiHtml5, label: "HTML5", color: "text-orange-500", duration: 2.4 },
  { Icon: SiCss3, label: "CSS3", color: "text-blue-400", duration: 2.6 },
  {
    Icon: SiBootstrap,
    label: "Bootstrap",
    color: "text-purple-400",
    duration: 2.8,
  },
];

// Backend icons
const backendIcons = [
  { Icon: FaNodeJs, label: "NodeJS", color: "text-green-500", duration: 2.5 },
  {
    Icon: SiExpress,
    label: "ExpressJS",
    color: "text-gray-400",
    duration: 2.7,
  },
  { Icon: FaJava, label: "Java", color: "text-red-500", duration: 2.9 },
];

// Database icons
const databaseIcons = [
  { Icon: SiMysql, label: "MySQL", color: "text-blue-500", duration: 2.5 },
  { Icon: SiMongodb, label: "MongoDB", color: "text-green-400", duration: 2.5 },
  
  
];

// Main component
const TechIcons = () => (
  <div className="w-full max-w-5xl mx-auto py-10">
    <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Frontend
      </h4>
      <IconGrid icons={frontendIcons} />
    </section>
    <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Backend
      </h4>
      <IconGrid icons={backendIcons} />
    </section>
    <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Database
      </h4>
      <IconGrid icons={databaseIcons} />
    </section>
  </div>
);

export default TechIcons;
