import logoFooter from "../assets/logowebtugas-w.svg";

function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-12">
      <div className="mx-20 flex flex-wrap justify-around items-center">
        {/* Footer Logo & Social Icons */}
        <div className="mb-8 md:mb-0 px-4 text-center md:text-left">
          <div className="footer-logo">
            <img src={logoFooter} alt="Logo" className="h-12 mx-auto md:mx-0" />
          </div>
          <div className="social-icons mt-4 flex justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          <div className="copyright mt-4">&copy; 2024 Belanja aja</div>
        </div>

        {/* Footer Get to Know Us */}
        <div className="mb-8 md:mb-0 px-4 text-center md:text-left">
          <h4 className="text-xl font-bold mb-4">Get to Know Us</h4>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                News & Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Orders */}
        <div className="mb-8 md:mb-0 px-4 text-center md:text-left">
          <h4 className="text-xl font-bold mb-4">Orders & Return</h4>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Return & Exchange
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Contact */}
        <div className="mb-8 md:mb-0 px-4 text-center md:text-left">
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <ul>
            <li>
              <i className="fas fa-phone text-gray-400"></i> +62 123456789
            </li>
            <li>
              <i className="fas fa-envelope text-gray-400"></i> belanja@aja.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt text-gray-400"></i> Jalan
              buntu
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
