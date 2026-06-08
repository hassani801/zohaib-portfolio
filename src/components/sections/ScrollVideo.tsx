"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VIDEO_URL } from "@/data/site";

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.62, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [28, 0]);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[250vh] w-full">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            className="h-[100dvh] w-screen overflow-hidden"
            style={{
              scale,
              borderRadius,
              willChange: "transform",
            }}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="https://youtu.be/sm8wDuN5EZo" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
