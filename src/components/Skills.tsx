// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const skills = [
//   { name: "C++", logo: "/logos/nextjs.svg" },  
//   { name: "Next.js", logo: "/logos/nextjs.svg" },
//   { name: "React", logo: "" },
//   { name: "JavaScript", logo: "/logos/javascript.svg" },
//   { name: "TypeScript", logo: "/logos/typescript.svg" },
//   { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
//   { name: "MongoDB", logo: "/logos/mongodb.svg" },
//   { name: "Postgresql", logo: "/logos/mongodb.svg" },
//   { name: "GraphQL", logo: "/logos/graphql.svg" },
//   { name: "BigCommerce", logo: "/logos/graphql.svg" },
//   { name: "Redux-toolkit", logo: "/logos/graphql.svg" },
//   { name: "Zustand", logo: "/logos/aws.svg" },
//   { name: "Prisma", logo: "/logos/prisma.svg" },
//   { name: "Firebase", logo: "/logos/firebase.svg" },
//   { name: "Express.js", logo: "/logos/express.svg" },
//   { name: "Node.js", logo: "/logos/nodejs.svg" },
// ];

// const SkillsSection = () => {
//   return (
//     <section className="py-12">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Skills</h2>
//         <p className="text-gray-600 dark:text-gray-400 mt-2">Technologies I work with</p>

//         <motion.div 
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
//           }}
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               variants={{
//                 hidden: { opacity: 0, scale: 0.8 },
//                 visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
//               }}
//               whileHover={{ scale: 1.1 }}
//               className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center transition-all"
//             >
//               <Image src={skill.logo} alt={skill.name} width={50} height={50} className="h-12 w-12" />
//               <p className="mt-2 text-gray-800 dark:text-white font-medium">{skill.name}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;



"use client";

import { motion } from "framer-motion";
import { 
  SiCplusplus, SiNextdotjs, SiReact, SiJavascript, SiTypescript, SiTailwindcss, 
  SiMongodb, SiPostgresql, SiGraphql, SiBigcommerce, SiRedux, 
  SiPrisma, SiFirebase, SiExpress, SiNodedotjs,SiZulip 
} from "react-icons/si";  // ✅ Ensure all icons exist in `react-icons/si`

const skills = [
  { name: "C++", icon: SiCplusplus },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "GraphQL", icon: SiGraphql },
  { name: "BigCommerce", icon: SiBigcommerce },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Zustand", icon: SiZulip  },  // ✅ Make sure this exists in `react-icons`
  { name: "Prisma", icon: SiPrisma },
  { name: "Firebase", icon: SiFirebase },
  { name: "Express.js", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs },
];

const SkillsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Technologies I work with</p>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
                whileHover={{ scale: 1.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center transition-all"
              >
                {IconComponent ? (
                  <IconComponent className="h-12 w-12 text-blue-500 dark:text-white" />
                ) : (
                  <p className="text-gray-500">⚠️ Missing Icon</p>
                )}
                <p className="mt-2 text-gray-800 dark:text-white font-medium">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
