"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
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
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://drive.google.com/file/d/1dz_raIdB4m2tcOqBgO1VC_Fd-REqA2aR/view?usp=drive_link" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
