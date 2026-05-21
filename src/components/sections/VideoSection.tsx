import { VIDEO_URL } from "@/data/site";

export function VideoSection() {
  return (
    <section className="overflow-x-hidden bg-cream pb-4 lg:pb-8">
      <div className="container mx-auto max-w-7xl transform-gpu px-0">
        <div className="overflow-hidden md:rounded-[2rem]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="block h-full max-h-dvh w-full object-contain"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
