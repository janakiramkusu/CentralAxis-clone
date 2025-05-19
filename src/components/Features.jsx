import FeatureCard from "./FeatureCard";

const featureData = [
  {
    title: "Advanced Monitoring",
    description:
      "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
    videoSrc: "/hb-monitoring.mp4",
    poster: "/posters/monitoring.png",
    features: [
      "Real-time performance metrics and predictive analytics",
      "Automated alerts and intelligent incident response",
      "Comprehensive reporting and trend analysis",
    ],
  },
  {
    title: "Network Management and Monitoring",
    description:
      "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.",
    videoSrc: "/landing/networking-b.mp4",
    poster: "/posters/networking.png",
    features: [
      "Real-time network performance monitoring and bandwidth optimization",
      "Automated network security and threat detection",
      "Advanced network diagnostics and troubleshooting tools",
    ],
  },
  {
    title: "Asset Management",
    description:
      "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.",
    videoSrc: "/landing/asset-management-b.mp4",
    poster: "/posters/asset-management.png",
    features: [
      "Automated inventory tracking and lifecycle management",
      "Intelligent ticketing based on asset health and performance",
      "Efficient resource allocation and optimization",
    ],
  },
  {
    title: "A Single Pane of Glass",
    description:
      "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
    videoSrc: "/landing/SinglePane-b.mp4",
    poster: "/posters/singlepane.png",
    features: [
      "Comprehensive visibility across all of your colocation infrastructure",
      "Customizable interface tailored to your operational needs",
      "Unified dashboard integrating all systems for seamless management",
    ],
  },
  {
    title: "Built-In Compliance",
    description:
      "CentralAxis provides compliance as a service for data centers.",
    videoSrc: "/landing/__compliance.mp4",
    poster: "/posters/compliance.png",
    features: [
      "Track data for EU, US, and global regulatory standards",
      "We guarantee compliance and handle the entire reporting pipeline",
    ],
  },
  {
    title: "Data Center Planning",
    description:
      "Want to support the latest and greatest architectures? Model modern GPUs and CPUs with detailed implications on power and cooling.",
    videoSrc: "/landing/dc-planning.mp4",
    poster: "/posters/dc-planning.png",
    features: [
      "Model power and cooling needs for new architectures",
      "Design custom specifications for your data center",
      "Advanced monitoring reduces cost and boosts reliability",
    ],
  },
];

export default function Features() {
  return (
    <div className="flex flex-col gap-10 items-center px-4 sm:px-8">
      {featureData.map((item, index) => (
        <FeatureCard key={index} {...item} reverse={index % 2 === 0} />
      ))}
    </div>
  );
}
