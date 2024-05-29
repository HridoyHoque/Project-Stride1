import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-800 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <aside className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-bold">ACME Industries Ltd.</h3>
            <p className="text-sm">Pioneering technology since 1992</p>
          </div>
        </aside>
        <nav className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <h6 className="footer-title text-lg font-semibold mb-2">Explore</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">Mens Shoes</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Womens Shoes</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Kids Shoes</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="footer-title text-lg font-semibold mb-2">Connect</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Our Story</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="footer-title text-lg font-semibold mb-2">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
