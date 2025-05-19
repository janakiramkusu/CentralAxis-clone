export default function CallToAction() {
  return (
    <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
      <article className="bg-purple-500/10 dark:bg-purple-600/10 flex flex-col justify-center gap-9 self-stretch rounded-xl p-6 lg:flex-row lg:justify-between lg:p-10">
        
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-medium text-white lg:text-4xl">
            We've Built the Future of Data Centers
          </h4>
          <p className="text-lg text-gray-400 lg:text-xl">
            Contact our team for a demo
          </p>
        </div>

        <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
          <a
            href="https://calendly.com/margarita-centralaxis/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full bg-purple-500 hover:bg-purple-600 border border-purple-600 px-3.5 text-sm font-normal text-white outline-none focus-visible:ring-2 md:px-5"
          >
            Set Up a Time
          </a>
          <a
            href="/learn-more"
            className="inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-sm font-normal text-white outline-none focus-visible:ring-2 md:px-5"
          >
            Learn More
          </a>
        </div>

      </article>
    </section>
  );
}
