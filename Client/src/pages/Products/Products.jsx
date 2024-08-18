import { useState, useEffect } from 'react';
import useAxios from '@/Hooks/useAxios';
import { useSearch } from '@/Providers/SearchProvider';
import ApplyFilter from './ApplyFilter';
import MainProductsList from './MainProductsList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import demo1 from "../../assets/Products/demo1.png";
import demo2 from "../../assets/Products/demo2.png";
import { GET_PRODUCTS_ROUTE } from '@/utils/constant';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('price');
    const [order, setOrder] = useState('asc');
    const [filter, setFilter] = useState({});
    const axiosPublic = useAxios();
    const { searchQuery } = useSearch();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axiosPublic.get(GET_PRODUCTS_ROUTE, {
                    params: {
                        page: currentPage,
                        limit: 9,
                        search: searchQuery,
                        sort,
                        order,
                        ...filter,
                    },
                });
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
                setFilter(response.data.filter);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchQuery, currentPage, sort, order, filter]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className="container mx-auto">
            {/* Swiper component */}
            <Swiper navigation={true} spaceBetween={20} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="bg-gradient-to-r from-[#2c3e5033] to-[#bdc3c740] flex flex-col-reverse lg:flex-row justify-between p-8 items-center h-80 lg:h-[400px]">
                        <h1 className="text-[#074161] text-center lg:text-left font-semibold text-2xl lg:text-4xl">Explore and Buy <br /> Your Favourite Product</h1>
                        <img className="lg:h-[400px] h-48" src={demo1} alt="Demo 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-to-r from-[#2c3e5033] to-[#bdc3c740] flex flex-col-reverse lg:flex-row justify-between p-8 items-center h-80 lg:h-[400px]">
                        <h1 className="text-[#074161] text-center lg:text-left font-semibold text-2xl lg:text-4xl">Explore and Buy <br /> Your Favourite Product</h1>
                        <img className="lg:h-[400px] h-48" src={demo2} alt="Demo 2" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="lg:grid grid-cols-4 gap-8">
                <div className='col-span-1 mt-12'>
                    <ApplyFilter setFilter={setFilter} />
                </div>
                <div className='col-span-3 mt-12'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <MainProductsList products={products} />
                            <div className="pagination mt-6">
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            />
                                        </PaginationItem>
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <PaginationItem key={index + 1}>
                                                <PaginationLink
                                                    href="#"
                                                    onClick={() => handlePageChange(index + 1)}
                                                    className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-[#074161] text-white' : 'bg-white text-[#074161]'} transition-colors duration-300`}
                                                    aria-current={currentPage === index + 1 ? 'page' : undefined}
                                                >
                                                    {index + 1}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}
                                        <PaginationItem>
                                            <PaginationNext
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Products;
