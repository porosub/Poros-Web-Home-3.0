"use client";

import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import type { FC, PropsWithChildren } from "react";
import { useCallback, useEffect, useState } from "react";
import { LeftArrowIcon } from "./icons/LeftArrowIcon";
import { RightArrowIcon } from "./icons/RightArrowIcon";
import { cn } from "@/lib/utils";

type SliderProps = {
  containerClassName?: string;
  className?: string;
  options?: EmblaOptionsType;
} & PropsWithChildren;

const Carousel: FC<SliderProps> = ({
  containerClassName,
  className,
  options,
  children,
}) => {
  options = { dragThreshold: 8, containScroll: "trimSnaps", ...options };
  const [sliderRef, sliderMethod] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const handlePrev = useCallback(() => {
    sliderMethod?.scrollPrev();
  }, [sliderMethod]);

  const handleNext = useCallback(() => {
    sliderMethod?.scrollNext();
  }, [sliderMethod]);

  const onSelect = useCallback((sliderMethod: EmblaCarouselType) => {
    setPrevBtnEnabled(sliderMethod.canScrollPrev());
    setNextBtnEnabled(sliderMethod.canScrollNext());
  }, []);

  useEffect(() => {
    if (!(sliderMethod != null)) return;

    onSelect(sliderMethod);
    sliderMethod.on("select", onSelect);
  }, [sliderMethod, onSelect]);

  return (
    <div className={cn("flex justify-center", containerClassName)}>
      <div className="flex items-center pl-5">
        <button
          type="button"
          onClick={handlePrev}
          className=" h-fit left-0 md:left-5 flex justify-center items-center w-16 md:w-20 text-[#FF6464] disabled:text-gray-400"
          about="previous carousel button"
          aria-label="Previous Button"
          disabled={!prevBtnEnabled}
        >
          <LeftArrowIcon className="h-full mr-1" />
        </button>
      </div>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={sliderRef}
      >
        <div className={cn(`flex w-full h-fit -ml-[10px]`, className)}>
          {children}
        </div>
      </div>

      <div className="flex items-center pr-5">
        <button
          type="button"
          onClick={handleNext}
          className=" h-fit right-0 md:right-5 flex justify-center items-center w-16 md:w-20 text-[#FF6464] disabled:text-gray-400"
          about="next carousel button"
          aria-label="Next Button"
          disabled={!nextBtnEnabled}
        >
          <RightArrowIcon className="h-full mr-1" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
