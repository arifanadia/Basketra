import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import demo1 from "../../assets/Products/demo1.png"
import demo2 from "../../assets/Products/demo2.png"


const Products = () => {
    return (
        <section className="">
            <Swiper navigation={true} spaceBetween={20} modules={[Navigation]} className="mySwiper container mx-auto">
                <SwiperSlide>
                    <div className="bg-gradient-to-r from-[#2c3e5033] to-[#bdc3c740] flex justify-between p-8 items-center h-[400px] ">
                        <h1 className="text-[#074161] font-semibold text-4xl ">Explore and Buy <br /> Your Favourite Product </h1>
                        <img className="h-[400px]" src={demo1} alt="" />
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-to-r from-[#2c3e5033] to-[#bdc3c740] flex justify-between p-8 items-center h-[400px] w-full ">
                        <h1 className="text-[#074161] font-semibold text-4xl ">Explore and Buy <br /> Your Favourite Product </h1>
                        <img className="h-[400px]" src={demo2} alt="" />
                    </div></SwiperSlide>
               
            </Swiper>

            <div className="grid grid-cols-3">

            </div>

        </section >
    );
};

export default Products;