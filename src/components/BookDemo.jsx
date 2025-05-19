import React from "react";

export default function BookDemo() {
  return (
    <section
      className="container relative mx-auto flex flex-col items-center gap-10 px-6"
      style={{ paddingBottom: "3.5rem" }}
    >
      <article
        className="dark:border-dark-border dark:bg-dark-surface-secondary relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden    p-6"
        style={{ height: 250 }}
      >

        <img
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="/background.png"
          alt=""
          style={{ filter: "blur(2px)" }}
          aria-hidden="true"
        />


        <div
          style={{
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60"></div>


          <div className="absolute left-0 top-0 z-10 h-full w-full filter"></div>


          <div className="relative z-20 flex flex-col items-center gap-2 text-center">
            <h4 className="text-center text-3xl font-medium tracking-tighter text-white sm:max-w-full sm:px-0 md:text-4xl">
              Book a Demo
            </h4>
            <p className="mb-4 text-lg text-white/70 text-zinc-300 md:text-xl">
              See how CentralAxis can revolutionize your data center operations.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-2">
            <a
              target="_blank"
              href="https://calendly.com/margarita-centralaxis/30min"
              rel="noreferrer"
            >
              <span className="rounded bg-white px-4 py-2 text-base font-semibold text-black">
                Schedule Now
              </span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
