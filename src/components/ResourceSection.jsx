import React from "react";

const featureCards = [
  {
    icon: "https://assets.basehub.com/fa068a12/4tjfOxi91wk29BRy6jH1p/mail.svg",
    title: "Resource Management",
    description:
      "See all of your resources in one place, update issues, and dynamically plan your resources.",
  },
  {
    icon: "https://assets.basehub.com/fa068a12/xGzl38RZpWQq8bij8Hzhu/zap.svg",
    title: "Deployment Automation",
    description:
      "From design, sourcing, supply, manufacturing, and deployment - our system automates the entire process.",
  },
  {
    icon: "https://assets.basehub.com/fa068a12/bp99UZ-NioE-mvd_ZLLh-/bar-chart-2.svg",
    title: "Networking",
    description:
      "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
  },
  {
    icon: "https://assets.basehub.com/fa068a12/ZJG_2vVCKgVzSUrxdDMHo/smile.svg",
    title: "Firmware Versioning",
    description:
      "Ensure that your firmware is always up to date and secure with our automated versioning system.",
  },
  {
    icon: "https://assets.basehub.com/fa068a12/IDiRkDVimmZ2V_id1-FX7/command.svg",
    title: "Digital Twins",
    description:
      "Plan capacity intelligently with our digital twin technology.",
  },
];

export default function ResourceSection() {
  return (
    <section className="relative flex flex-col items-center gap-10 py-14 lg:container md:py-[72px] lg:mx-auto lg:flex-row lg:gap-0 lg:p-28">
      
      <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
        <div className="sticky top-[calc(var(--header-height)+40px)] bottom-0 flex flex-col gap-10">
          <div className="flex flex-col items-start gap-3 self-start">
            <h3 className="bg-zinc-800 text-gray-500 flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
              Built for Scale
            </h3>
            <div className="flex max-w-[800px] flex-col items-start justify-center gap-1 self-start">
              <h4
                className="text-left text-3xl font-medium md:text-4xl text-white"
                title="Supercharge Team Productivity"
              >
                Dynamic Resource Management
              </h4>
            </div>
            <p className="max-w-screen-md text-left text-lg font-light md:text-xl text-gray-500">
              Seamlessly expand from racks to data centers. Our system grows
              with you, automatically managing resources across your entire
              infrastructure.
            </p>
          </div>
        </div>
      </div>

     
      <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
        <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {featureCards.map((card, index) => (
            <article
              key={index}
              className="bg-zinc-900 border border-zinc-800 flex w-[280px] shrink-0 flex-col gap-4 rounded-lg p-4 lg:w-full lg:flex-row lg:p-5"
            >
              <figure className="bg-zinc-800 flex  size-12 shrink-0 items-center justify-center rounded-full p-3">
                <img
                  src={card.icon }
                  alt={card.title}
                  width={24}
                  height={24}
                  className="filter invert brightness-0"
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium text-white">
                  {card.title}
                </h5>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
