import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import basketra from "../../assets/Basketra.png"

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <Link to="/" className="flex items-center gap-2">
                            <img src={basketra} alt="Basketra Logo" className="h-10 w-10" />
                            <span className="text-2xl font-serif font-bold">Basketra</span>
                        </Link>
                        <p className="mt-4 text-sm">
                            Basketra is your go-to online marketplace for all your shopping needs. Explore a wide range of products from top brands and enjoy seamless shopping experiences.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sm hover:underline">Home</Link></li>
                            <li><Link to="/products" className="text-sm hover:underline">Products</Link></li>
                            <li><Link to="/marketplace" className="text-sm hover:underline">Marketplace</Link></li>
                            <li><Link to="/company" className="text-sm hover:underline">Company</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><Link to="/help" className="text-sm hover:underline">Help Center</Link></li>
                            <li><Link to="/contact" className="text-sm hover:underline">Contact Us</Link></li>
                            <li><Link to="/shipping" className="text-sm hover:underline">Shipping & Returns</Link></li>
                            <li><Link to="/faq" className="text-sm hover:underline">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#074161] hover:text-gray-300 transition">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#074161] hover:text-gray-300 transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#074161] hover:text-gray-300 transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#074161] hover:text-gray-300 transition">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-900 pt-4 text-center">
                    <p className="text-sm">&copy; 2024 Basketra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
