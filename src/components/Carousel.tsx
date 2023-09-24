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
  options = { dragThreshold: 8, ...options };
  const [sliderRef, sliderMethod] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const handlePrev = useCallback(() => {
    sliderMethod != null && sliderMethod.scrollPrev();
  }, [sliderMethod]);

  const handleNext = useCallback(() => {
    sliderMethod != null && sliderMethod.scrollNext();
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
    <div className={cn("flex justify-center gap-1", containerClassName)}>
      <div className="flex items-center">
        <button
          type="button"
          onClick={handlePrev}
          className=" h-full left-0 md:left-5 flex justify-center items-center w-16 md:w-20 text-[#FF6464] disabled:text-gray-400"
          aria-label="Previous Button"
          disabled={!prevBtnEnabled}
        >
          <LeftArrowIcon className="h-full mr-1" />
        </button>
      </div>
      <div
        ref={sliderRef}
        className={`overflow-hidden relative flex w-full gap-5 h-fit ${className}`}
      >
        <div className={`flex gap-5 w-full cursor-grab active:cursor-grabbing`}>
          {children}
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleNext}
          className=" h-full right-0 md:right-5 flex justify-center items-center w-16 md:w-20 text-[#FF6464] disabled:text-gray-400"
          aria-label="Previous Button"
          disabled={!nextBtnEnabled}
        >
          <RightArrowIcon className="h-full mr-1" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
