export default function Intro() {
  return (
    <div className="flex flex-col items-center gap-3 self-center text-white">
      
      <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base 
                     bg-gray-900 text-gray-500  ">
        Built for AI
      </h3>
      
      <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
        <h4 className="text-pretty text-center text-3xl font-medium md:text-4xl">
          Modernizing the Digital Backbone
        </h4>
      </div>

      <p className="text-center text-lg font-light text-gray-500 max-w-screen-md md:text-xl">
        Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.
      </p>
    </div>
  );
}
