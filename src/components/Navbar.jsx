import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

const dropdowns = [
  {
    title: "Data Center Infrastructure Management",
    links: [
      { text: "Monitoring Devices", href: "/dc-management/monitoring" },
      { text: "Asset Tracking", href: "/dc-management/asset-management" },
      { text: "Network Management", href: "/dc-management/networking" },
      { text: "Change Management", href: "/dc-management/change-management" },
      { text: "Colocation Management", href: "/dc-management/colocation" },
      { text: "Data Center Planner", href: "/dc-management/dc-planner" },
      { text: "Firmware Management", href: "/dc-management/firmware" },
      { text: "IP Address Management", href: "/dc-management/ipam" },
      { text: "Customer Portal", href: "/dc-management/customer-portal" },
      { text: "Custom Insights", href: "/dc-management/insights" },
      { text: "Custom Data Center Solutions", href: "/dc-management/custom-solutions" },
    ],
  },
  {
    title: "Intelligence Solutions",
    links: [
      { text: "Digital Twins", href: "/intelligence/digital-twins" },
      { text: "Smart Power Mapping", href: "/intelligence/power-mapping" },
      { text: "Predictive Failure and Alerting", href: "/intelligence/predictive-failure" },
      { text: "Smart Control Systems", href: "/intelligence/control-systems" },
      { text: "Automated Discovery", href: "/intelligence/discovery" },
    ],
  },
  {
    title: "Data Center Compliance",
    links: [
      { text: "DCOI Compliance", href: "/compliance/dcoi" },
      { text: "(EU) 2023/1791", href: "/compliance/eu-2023-1791" },
      { text: "EN 50600", href: "/compliance/en-50600" },
      { text: "LEED Certification", href: "/compliance/leed" },
      { text: "ISO/IEC 30134-2", href: "/compliance/iso-iec-30134-2" },
      { text: "(EPA) ENERGY STAR", href: "/compliance/energy-star" },
      { text: "European Commission JRC", href: "/compliance/ec-jrc" },
    ],
  },
  {
    title: "Sustainability Blog",
    links: [
      { text: "Energy Efficiency", href: "/energy-solutions/pue-tracking" },
      { text: "Stranded Energy Map", href: "/energy-solutions/energy-map" },
      { text: "Environmental Product Declaration", href: "/energy-solutions/environmental-product-declaration" },
      { text: "Renewables Integration", href: "/energy-solutions/renewables-integration" },
      { text: "Power Resource Management", href: "/energy-solutions/power-resource-managment" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (title) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-background/60 backdrop-blur-xl transition-all font-sans text-gray-100 backdrop-blur-md ">
     <div className="w-full flex h-16 items-center justify-between px-4">
        
        <div className="flex gap-6 md:gap-10 items-center py-2">
          <a href="/" className="hidden md:flex items-center space-x-2">
            <img src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75" alt="Logo" width={36} height={36} className="h-9 w-9" />
            <div className="text-2xl font-semibold text-gray-100">CentralAxis</div>
          </a>
          <a href="/" className="flex md:hidden items-center space-x-2">
            <img src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75" alt="Logo" width={36} height={36} className="h-9 w-9" />
            <span className="font-bold text-gray-100">CentralAxis</span>
          </a>
        </div>

        
        <nav className="hidden lg:flex items-center space-x-6">
          {dropdowns.map((menu) => (
            <div key={menu.title} className="group relative">
              <button className="flex items-center text-sm font-medium text-white hover:text-gray-300 transition">
                {menu.title}
                <span className="ml-1 text-xs">▼</span>
              </button>
             <div className="absolute right-0 top-full z-10 hidden w-64 rounded-md bg-neutral-900 text-white shadow-lg border border-white group-hover:block my-2">
                <ul className="py-2">
                  {menu.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="block px-4 py-2 text-sm  hover:text-gray-300 transition"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>
        

<button
  aria-label="Toggle Menu"
  onClick={() => setMobileOpen(!mobileOpen)}
  className="lg:hidden flex items-center justify-center rounded border border-gray-800 p-2 ml-auto"
>
  <Menu className="h-6 w-6 text-white" />
</button>
</div>

{mobileOpen && (
  <div className="fixed left-0 top-[calc(var(--da-header-height))] z-10 h-auto w-full bg-surface-primary dark:bg-dark-surface-primary">
    <div className="flex flex-col gap-8 px-6 ">
  <div className="lg:hidden px-4 pb-4 pt-2 space-y-4 bg-black text-gray-100">
    {dropdowns.map((menu) => (
      <div key={menu.title} className=" border-neutral-700 pb-2">
        <button
          onClick={() => toggleMenu(menu.title)}
          className="w-full flex items-center justify-between font-semibold py-2"
        >
          <span>{menu.title}</span>
          <ChevronDown
            className={`ml-2 h-4 w-4 text-gray-300 transform transition-transform ${
              expandedMenus[menu.title] ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedMenus[menu.title] && (
          <ul className="ml-2 mt-1 max-h-48 overflow-y-auto pr-2 space-y-1 text-sm text-gray-400 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {menu.links.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="block px-2 py-1 rounded hover:text-white hover:bg-neutral-800 transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      
    ))}
  </div>
</div>
  </div>
)}

    </header>
  );
}
