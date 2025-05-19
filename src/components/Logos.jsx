export default function Logos() {
  const logos = [
    "nvidia",
    "amd",
    "cisco",
    "dell",
    "hp",
    "intel",
    "lenovo",
    "schneider",
    "supermicro",
  ];

  return (
    <section className="relative flex flex-col items-center gap-10 py-14 md:py-[72px] overflow-hidden">
      <h2 className="text-center text-gray-400 tracking-tight opacity-80">
        Seamless integrations with any data center hardware
      </h2>

      <div className="relative w-full overflow-hidden">
        
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-gradient-to-r from-black to-transparent z-10 xl:hidden" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-gradient-to-l from-black to-transparent z-10 xl:hidden" />
        <div className="flex animate-scroll whitespace-nowrap gap-12 px-8 min-w-fit">
          {[...logos, ...logos].map((logo, index) => (
            <figure
              key={index}
              className="flex min-w-[160px] h-20 items-center justify-center px-4 py-3 shrink-0"
            >
              <img
                src={`/logos/${logo}.svg`}
                alt={logo}
                className="w-32 object-contain"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
