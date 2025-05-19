import React from "react";

export default function FeatureCard({
  title,
  description,
  videoSrc,
  poster,
  features = [],
  reverse = false,
}) {
  return (
    <article
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-zinc-900 border border-zinc-900 rounded-lg p-px w-full max-w-[380px] md:w-full sm:max-w-full xl:gap-16 min-h-96`}
    >
      {/* Video Section */}
      <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
        <div
          className="relative aspect-video w-full h-full overflow-hidden rounded-lg"
          style={{ borderRadius: "var(--radius)" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ borderRadius: "var(--radius)" }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </figure>

      {/* Content Section */}
      <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
        <div className="flex flex-col items-start gap-2">
          <h5 className="text-2xl md:text-3xl font-medium text-white">
            {title}
          </h5>
          <p className="text-gray-400 md:text-lg">{description}</p>
        </div>

        <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 text-gray-400 font-normal"
            >
              <span
                className="flex size-6 items-center justify-center rounded-full bg-zinc-800"
                style={{ minWidth: "1.5rem" }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className = "text-gray-400"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
