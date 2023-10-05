import React from "react";
import rectangle1 from "../../public/images/Rectangle 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div className="flex">
        <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eum harum explicabo sapiente nihil. Exercitationem libero, nisi ut quod commodi dicta excepturi explicabo, ipsum cupiditate distinctio atque amet fuga ducimus est aut hic sit iste saepe odit porro vero quis! Saepe blanditiis quibusdam harum corrupti. In eligendi consectetur inventore at earum, similique impedit mollitia amet eaque ducimus eos quis optio repudiandae cumque ullam tempora. Cumque corporis aspernatur saepe reiciendis unde, velit doloribus, provident quam, iusto excepturi atque. Aspernatur, dolore excepturi consequuntur eum consectetur nam ipsam sed ad at qui aut quaerat ducimus dicta cumque? Et ad dolore sint deleniti iusto?</p></div>
        <div className="w-[400px] h-[200px]">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img src={rectangle1} alt="" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
