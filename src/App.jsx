import { ArrowRight, Globe2, MapPin, User } from "lucide-react";
import burgervideo from "./assets/video-burger-opt.avif";
import chicken from "./assets/chicken.png";
import countriesopt from "./assets/countries-opt.svg";
import restaurantopt from "./assets/restaurants-opt.svg";
import groceriesopt from "./assets/groceries-opt.svg";
import deliveryopt from "./assets/delivery-opt.svg";
import { RestaurantCard } from "./components/RestaurantCard";

const restaurants = [
  {
    name: "McDonald's",
    imageUrl:
      "https://images.unsplash.com/photo-1619881590738-a111d176d906?auto=format&fit=crop&q=80",
  },
  {
    name: "KFC",
    imageUrl:
      "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&q=80",
  },
  {
    name: "BurgerKing",
    imageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80",
  },
  {
    name: "Carrefour",
    imageUrl:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80",
  },
  {
    name: "PizzaHut",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
  },
  {
    name: "PapaJohn's",
    imageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80",
  },
  {
    name: "Subway",
    imageUrl:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80",
  },
  {
    name: "TacoBell",
    imageUrl:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80",
  },
];

const countries = [
  ["Spain", "Italy", "Ukraine", "Romania", "Georgia", "Portugal", "Poland"],
  [
    "Morocco",
    "Kazakhstan",
    "Croatia",
    "Kenya",
    "Côte D'Ivoire",
    "Serbia",
    "Moldova",
  ],
  [
    "Uganda",
    "Kyrgyzstan",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Ghana",
    "Montenegro",
  ],
  ["Slovenia", "Nigeria", "Armenia", "Andorra", "Tunisia"],
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#7B2CBF] relative pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <header className="flex justify-between items-center py-6">
            <div className="text-[#E1957D] text-3xl font-bold tracking-tight">
              Glovo
            </div>
            <button className="bg-[#E1957D] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#008f73] transition-colors flex items-center gap-2">
              <User className="w-4 h-4" />
              Login
            </button>
          </header>

          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src={burgervideo}
                alt="Exploded burger"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-[56px] text-white  font-semibold leading-tight">
                Food delivery and more
              </h1>
              <p className="text-xl text-white font-medium">
                Groceries, shops, pharmacies, anything!
              </p>
              <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-full p-2 shadow-lg">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What's your address?"
                    className="flex-1 outline-none text-sm placeholder-gray-500"
                  />
                </div>
                <button className="bg-[#E1957D] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#008f73] transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Use current location
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top restaurants and more in Glovo
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.name}
                name={restaurant.name}
                imageUrl={restaurant.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              A Variety of Stores to choose from
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Order food from the best restaurants, local favorites, and online
              vendors using the app or web.
            </p>
            <button className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-[#E1957D] rounded-full transition-colors">
              Start Ordering
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&q=80"
              alt="Variety of delicious dishes"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Countries Section */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-white p-4 rounded-full mb-6">
              <Globe2 className="w-12 h-12 text-[#E1957D]" />
            </div>
            <h2 className="text-4xl text-gray-900 font-bold text-center">
              Countries where we deliver
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4">
            {countries.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-3"
              >
                {row.map((country) => (
                  <div
                    key={country}
                    className="px-6 py-2 bg-[#E1957D]  rounded-full text-white font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {country}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#7B2CBF] rounded-[72px] mx-20 my-8">
        <div className="container mx-auto px-20 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text Content */}
            <div className="flex-1 text-white">
              <h2 className="text-8xl font-bold leading-tight mb-8">
                Experience
                <br />
                the app
                <br />
                today!
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#E1957D] hover:bg-gray-900 text-white px-8 py-4 rounded-[30px] flex items-center gap-3 transition-all">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </button>
                <button className="bg-[#E1957D] hover:bg-gray-900 text-white px-8 py-4 rounded-[30px] flex items-center gap-3 transition-all">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Play Store
                </button>
              </div>
            </div>

            {/* Right side - Phone Images */}
            <div className="flex-1 relative">
              <div className="relative z-10 transform rotate-6">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1470"
                  alt="Mobile app interface"
                  className="w-full max-w-sm mx-auto rounded-[40px] shadow-2xl"
                />
              </div>
              <div className="absolute top-10 -right-4 z-20">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1480"
                  alt="Mobile app map interface"
                  className="w-full max-w-sm mx-auto rounded-[40px] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-32 h-32 border-4 border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute right-0 bottom-0 w-24 h-24 border-4 border-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section>
      {/* === ==== */}
      <section className="bg-[#f0f9f6] py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-emerald-500"
              fill="currentColor"
            >
              <path d="M11.7 15.3c-.7-.7-1.7-1.1-2.7-1.1s-2 .4-2.7 1.1c-.7.7-1.1 1.7-1.1 2.7 0 1 .4 2 1.1 2.7.7.7 1.7 1.1 2.7 1.1s2-.4 2.7-1.1c.7-.7 1.1-1.7 1.1-2.7 0-1-.4-2-1.1-2.7zm7.6-5.3c-.7-.7-1.7-1.1-2.7-1.1s-2 .4-2.7 1.1c-.7.7-1.1 1.7-1.1 2.7 0 1 .4 2 1.1 2.7.7.7 1.7 1.1 2.7 1.1s2-.4 2.7-1.1c.7-.7 1.1-1.7 1.1-2.7 0-1-.4-2-1.1-2.7z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4">Let's do it together</h2>
        </div>

        {/* Cards Container */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Rider Card */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-emerald-500 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?auto=format&fit=crop&q=80&w=1760"
                  alt="Delivery rider"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Become a rider</h3>
              <p className="text-gray-600 mb-6">
                Enjoy flexibility, freedom and competitive earnings by
                delivering through Glovo.
              </p>
              <button className="bg-[#E1957D] text-white px-6 py-3 rounded-full transition-colors">
                Register here
              </button>
            </div>

            {/* Partner Card */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-emerald-500 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1954"
                  alt="Restaurant chef"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Become a partner</h3>
              <p className="text-gray-600 mb-6">
                Grow with Glovo! Our technology and user base can help you boost
                sales and unlock new opportunities!
              </p>
              <button className="bg-[#E1957D] text-white px-6 py-3 rounded-full transition-colors">
                Register here
              </button>
            </div>

            {/* Careers Card */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-emerald-500 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070"
                  alt="Team working"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Careers</h3>
              <p className="text-gray-600 mb-6">
                Ready for an exciting new challenge? If you're ambitious,
                humble, and love working with others, then we want to hear from
                you!
              </p>
              <button className="bg-[#E1957D] text-white px-6 py-3 rounded-full transition-colors">
                Register here
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <footer className="bg-[#242127] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Footer Main Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Glovo Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Glovo</h3>
              <p className="text-lg mb-4">Let’s do it together</p>
            </div>

            {/* Links Section */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Links of interest</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    Glovo Prime
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links Section */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Apps Section */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Download the App</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    App Store
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#E1957D] transition-colors"
                  >
                    Google Play
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Links */}
          <div className="mt-12 border-t border-white pt-6 text-center">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li>
                <a href="#" className="hover:text-[#E1957D] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E1957D] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E1957D] transition-colors">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E1957D] transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E1957D] transition-colors">
                  English
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
