"use client";

import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import type { FC, PropsWithChildren } from "react";
import { useCallback, useEffect, useState } from "react";
import { LeftArrowIcon } from "./icons/LeftArrowIcon";
import { RightArrowIcon } from "./icons/RightArrowIcon";

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
    <div className={`${containerClassName} flex flex-col justify-center gap-7`}>
      <div
        ref={sliderRef}
        className={`overflow-hidden relative flex w-full gap-5 h-fit ${className}`}
      >
        <div className={`flex gap-6 w-full cursor-grab active:cursor-grabbing`}>
          {children}
        </div>
      </div>
      <button
        type="button"
        onClick={handlePrev}
        className="rounded-full absolute left-0 md:left-5 flex justify-center items-center w-16 h-16 text-[#FF6464] disabled:text-gray-400"
        aria-label="Previous Button"
        disabled={!prevBtnEnabled}
      >
        <LeftArrowIcon className="h-full mr-1" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="rounded-full absolute right-0 md:right-5 flex justify-center items-center w-16 h-16 text-[#FF6464] disabled:text-gray-400"
        aria-label="Previous Button"
        disabled={!nextBtnEnabled}
      >
        <RightArrowIcon className="h-full mr-1" />
      </button>
    </div>
  );
};

export default Carousel;
