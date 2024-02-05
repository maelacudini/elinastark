import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

export default function Swpr({ images }) {
  return (
    <Swiper
      direction={"horizontal"}
      slidesPerView={"auto"}
      draggable={true}
      freeMode={true}
      scrollbar={false}
      mousewheel={true}
      spaceBetween={30}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      className="swiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.url}
            alt={image.title}
            height={"auto"}
            width={"400px"}
            loading="lazy"
          />
          <p>{image.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
