import { useState } from "react";
import { Phone } from "lucide-react";
import {
  FacebookFilled,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinFilled,
  LinkedinOutlined,
} from "@ant-design/icons";
import { NavLink } from "./NavLink";
import { SocialIcon } from "./SocialIcons";
import logo from "../../assets/images/LOGO.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md relative z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
          <div className="flex-shrink-0 w-48 md:w-52">
            <a href="/">
              <img className="w-full h-auto" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/promotions">Promotions</NavLink>
            <NavLink href="/stores">Our Stores</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/loyality">Ahlan</NavLink>
            <NavLink href="/careers">Careers</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
            {/* <NavLink href="/branches">Our Branches</NavLink> */}
          </div>

          {/* Social Icons for Desktop */}
          <div className="hidden lg:flex  items-center space-x-4">
            <SocialIcon
              href="https://www.instagram.com/almadina.ae?igsh=cTJ1ZDN0M3Y0YXFn"
              aria-label="Instagram"
            >
              <InstagramOutlined width={20} height={20} />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/company/amg-al-madina-group/"
              aria-label="Linkedin"
            >
              <LinkedinOutlined width={20} height={90} />
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com/profile.php?id=100076119871058&mibextid=JRoKGi"
              aria-label="Facebook"
            >
              <FacebookOutlined width={20} height={90} />
            </SocialIcon>

            <SocialIcon href="tel:+9712242543" aria-label="Phone">
              <Phone size={20} />
            </SocialIcon>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute w-full top-16 left-0 py-3 bg-white shadow-lg z-40">
            <div className="flex flex-col space-y-4 mt-4 px-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/promotions">Promotions</NavLink>
              <NavLink href="/stores">Our Stores</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/loyality">Ahlan</NavLink>
              <NavLink href="/careers">Careers</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
              {/* <NavLink href="/branches">Our Branches</NavLink> */}

              {/* Social Icons for Mobile */}
              <div className="flex space-x-4 mt-4">
                <SocialIcon
                  href="https://www.instagram.com/almadina.ae?igsh=cTJ1ZDN0M3Y0YXFn"
                  aria-label="Instagram"
                >
                  <InstagramOutlined width={20} height={20} />
                </SocialIcon>

                <SocialIcon
                  href="https://www.linkedin.com/company/amg-al-madina-group/"
                  aria-label="Linkedin"
                >
                  <LinkedinFilled width={20} height={90} />
                </SocialIcon>

                <SocialIcon
                  href="https://www.facebook.com/profile.php?id=100076119871058&mibextid=JRoKGi"
                  aria-label="Facebook"
                >
                  <FacebookFilled width={20} height={90} />
                </SocialIcon>

                <SocialIcon href="tel:+9712242543" aria-label="Phone">
                  <Phone size={20} />
                </SocialIcon>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
