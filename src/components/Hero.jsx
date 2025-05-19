export default function Hero() {
  return (
    <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10 bg-black">
      <div className="absolute inset-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-neutral-800">
        <div />
        <div className="border-x border-neutral-800" />
              <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-neutral-800" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      
        <div />
      </div>

      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 aspect-square w-[400px] -translate-x-1/2 rounded-full blur-[160px] bg-purple-500/30" />
      <figure className="pointer-events-none absolute top-[64px] left-[4vw] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] bg-gray-900 md:block" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] bg-gray-900 md:block" />
      <div className="pointer-events-none absolute left-1/2 top-[54%] z-0 h-32 w-64 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[80px]" />
      <div className="relative z-10 flex flex-col divide-y divide-neutral-800 pt-[35px]">
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] flex-col items-center justify-center gap-2 px-4 py-4 sm:px-16 lg:px-24">
            <h1 className="text-text-primary dark:text-dark-text-primary max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] md:tracking-[-2.16px] drop-shadow-[0_1px_8px_rgba(168,85,247,0.25)]">
  Data Center Management Software
</h1>

            <h2 className="text-md md:text-lg text-center text-gray-500 max-w-2xl">
              Increase uptime, reduce costs, automate operations, and stay compliant.
            </h2>
            <h2 className="text-md md:text-lg text-center text-gray-500 max-w-2xl">
              Built for colocations, data centers, and cloud providers.
            </h2>
          </div>
        </div>

        
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center md:!max-w-[392px]">
            <a
              href="https://calendly.com/margarita-centralaxis/30min" target="_blank" rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border border-accent-600 flex h-14 w-full items-center 
              justify-center px-5 text-base font-normal shadow-md hover:shadow-lg transition-all duration-300 "
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
