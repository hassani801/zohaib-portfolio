import { VIDEO_URL } from "@/data/site";

export function VideoSection() {
  return (
    <section className="bg-cream py-10 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-black">
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
