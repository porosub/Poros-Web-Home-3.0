/* eslint-disable react/jsx-max-props-per-line */
"use client";

import { Badge } from "@/components/ui/badge";
import { useBannerParallax } from "@/hooks/useBannerParallax";
import { ChevronDown } from "lucide-react";
import { type FC } from "react";
import { Link } from "react-scroll";

const Hero: FC = () => {
  const { videoRef, scrollY } = useBannerParallax();

  return (
    <section className="flex flex-col px-5 overflow-hidden gap-10 justify-center items-center text-white text-center h-screen relative">
      <video
        ref={videoRef}
        autoPlay={true}
        loop={true}
        muted={true}
        src="/videos/banner-video.mp4"
        className="absolute w-full h-full object-cover -z-20 brightness-[.3]"
        style={{
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      />

      <h1>
        <span className="text-5xl md:text-8xl font-bold">POROS</span> <br />{" "}
        <span className="text-3xl md:text-6xl font-semibold">
          Organization of Open Source
        </span>
      </h1>
      <Badge className="text-xl md:text-2xl font-medium">
        #OpenSourceLeadToFuture
      </Badge>
      <Link
        to="home-about"
        smooth={true}
        duration={900}
        offset={-100}
        className="absolute bottom-5 text-white active:translate-y-2 transition-all duration-150"
      >
        <ChevronDown className="w-10 h-10" />
      </Link>
    </section>
  );
};

export default Hero;
