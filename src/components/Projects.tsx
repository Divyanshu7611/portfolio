import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-20">
      <ProjectCard
        title="Edtech Platform"
        description=" A modern educational technology platform featuring an engaging UI, seamless animations, and interactive content delivery. Built with React.js for smooth navigation and performance."
        imageUrl="/edtec.png"
        projectUrl="https://github.com/Divyanshu7611/Edtech.git"
      />
      <ProjectCard
        title="Vrental"
        description="A comprehensive Apartment rental platform built with Next.js and typescript. Features real-time availability, dynamic pricing, and a seamless booking experience."
        imageUrl="/vrental.png"
        projectUrl="https://www.vrental.in"
      />
      <ProjectCard
        title="Whatsapp Clone"
        description="A full-stack real-time messaging application inspired by WhatsApp, developed with Next.js and Express.js. Includes user authentication, live chat, and WebSocket-based messaging for instant communication."
        imageUrl="/whatsapp.png"
        projectUrl="https://github.com/Divyanshu7611/chat-application.git"
      />
      <ProjectCard
        title="E-Commerce App"
        description="A high-performance e-commerce platform with Next.js, Bigcommerce and a dynamic product catalog. Optimized for fast checkout and a smooth shopping experience."
        imageUrl="/ecommerce.png"
        projectUrl="https://www.timesofmobile.com"
      />
      <ProjectCard
        title="Qr-Based Attendence System"
        description="A smart attendance management system using QR codes for quick check-ins. Built with Next.js, this system enhances efficiency by replacing traditional attendance tracking methods with secure digital verification."
        imageUrl="/attendence.png"
        projectUrl="https://student-dashboard-sable.vercel.app"
      />
      <ProjectCard
        title="THAR-24"
        description="The official website for the THAR-24 technical fest, featuring a futuristic solarpunk theme with parallax effects, stunning UI, and a seamless user experience. Built with Next.js and Tailwind CSS."
        imageUrl="/thar.png"
        projectUrl="https://thar24.vercel.app"
      />
    </div>
  );
}
