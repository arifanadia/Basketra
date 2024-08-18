import basketra from "../../assets/logo/Basketra.png"
import { useState } from 'react'
import {
    Button,
    Dialog,
    DialogPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from "react-router-dom"
import { useSearch } from "@/Providers/SearchProvider"

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [search, setSearch] = useState("");
    const { setSearchQuery } = useSearch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            setSearchQuery(search.trim());
            console.log('Search query:', search); // Log the search query
            navigate('/');
        }
    };

    return (
        <header className="bg-white bg-opacity-20 ">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1 gap-8 items-center">
                    <Link to="/products" className="-m-1.5 p-1.5">
                        <span className="sr-only">Basketra</span>
                        <div className="flex justify-center items-center gap-1">
                            <img
                                src={basketra}
                                alt="Basketra logo"
                                className="size-6 md:size-10 mx-auto mb-2 md:mb-4"
                            />
                            <h1 className="text-lg md:text-2xl text-[#074161] font-serif font-bold">Basketra</h1>
                        </div>
                    </Link>
                    {/* Search Bar for Larger Screens */}
                    <form onSubmit={handleSearch} className="hidden lg:flex lg:flex-1 gap-x-4 h-10">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full max-w-screen-sm px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#074161] focus:border-transparent"
                        />
                        <Button type="submit" className="bg-[#074161] px-4 py-1 rounded-md text-white shadow-lg transition-all hover:scale-105">
                            <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
                        </Button>
                    </form>
                </div>
                  {/* Search Bar for Larger Screens */}
                  <form onSubmit={handleSearch} className="flex flex-1 mx-6 justify-center gap-x-4 h-10 lg:hidden">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full max-w-screen-sm px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#074161] focus:border-transparent"
                        />
                        <Button type="submit" className="bg-[#074161] px-4 py-1 rounded-md text-white shadow-lg transition-all hover:scale-105">
                            <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
                        </Button>
                    </form>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-6">
                    <div className="lg:flex lg:gap-x-6">
                        <Link to="/products" className="text-base font-semibold leading-6 text-gray-900">
                            Products
                        </Link>
                        <Link to="/" className="text-base font-semibold leading-6 text-gray-900">
                            Marketplace
                        </Link>
                        <Link to="/" className="text-base font-semibold leading-6 text-gray-900">
                            Company
                        </Link>
                    </div>
                    <div className="lg:flex lg:gap-4">
                        <Link to="#" className="text-base font-semibold leading-6 text-gray-900">
                            <ShoppingBagIcon width={35} className="hover:cursor-pointer bg-gray-50 hover:bg-gray-100 hover:shadow-gray-400 p-2 rounded-full shadow-lg md:shadow-xl transition-all hover:scale-105" />
                        </Link>
                        <Link to="/login">
                            <Button className="bg-[#074161] px-4 py-2 rounded-md text-white shadow-lg transition-all hover:scale-105">Log In</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Basketra</span>
                            <div className="flex justify-center items-center gap-1">
                                <img
                                    src={basketra}
                                    alt="Basketra logo"
                                    className="h-8 w-8 mx-auto"
                                />
                                <h1 className="text-xl mt-2 text-[#074161] font-serif font-bold">Basketra</h1>
                            </div>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Products
                                </Link>
                                <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Marketplace
                                </Link>
                                <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Company
                                </Link>
                            </div>
                            <div className="flex gap-4 items-center py-6">
                                <Link to="#">
                                    <ShoppingBagIcon width={35} className="hover:cursor-pointer bg-gray-50 hover:bg-gray-100 hover:shadow-gray-400 p-2 rounded-full shadow-lg md:shadow-xl transition-all hover:scale-105" />
                                </Link>
                                <Link to="/login">
                                    <Button className="bg-[#074161] px-4 py-2 rounded-md text-white shadow-lg transition-all hover:scale-105">Log In</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Navbar;
