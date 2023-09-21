import { useState } from "react";

type Departemen = {
  nama: string;
  gambar: string;
  deskripsi: string;
};

const hookDepartemen = (data: Departemen[]) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : data.length - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  return { currentSlide, prevSlide, nextSlide };
};

export default hookDepartemen;
