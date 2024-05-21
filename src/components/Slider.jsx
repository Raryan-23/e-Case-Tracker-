import { Swiper, SwiperSlide } from 'swiper/react';
import bgData from './swiperData';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
        {bgData && 	bgData?.map((item)=>
        (<SwiperSlide key={item._id}><img src={item.img} alt="slider" className='w-full h-[452px]' /></SwiperSlide>))}

    </Swiper>
  )
}
