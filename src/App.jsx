import { ArrowRight, Globe2, MapPin, User } from "lucide-react";
import burgervideo from "./assets/video-burger-opt.avif";
import app2 from "./assets/app2.png";
import logo from "./assets/logo.png";
import turkey from "./assets/turkey.jpeg";
import { RestaurantCard } from "./components/RestaurantCard";

const restaurants = [
  {
    name: "Deborah Restaurants",
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

const proteins = [
  ["Chicken", "Eggs", "Beef", "Lentils", "Fish", "Tofu", "Turkey"],
  [
    "Pork",
    "Almonds",
    "Greek Yogurt",
    "Salmon",
    "Chickpeas",
    "Cheese",
    "Quinoa",
  ],
  [
    "Peanuts",
    "Cottage Cheese",
    "Pumpkin Seeds",
    "Tempeh",
    "Black Beans",
    "Edamame",
  ],
  ["Shrimp", "Whey Protein", "Milk", "Soybeans", "Tilapia"],
];

export default function Home() {
  return (
    <main className="">
      <section className="bg-[#7B2CBF] text-white relative pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex justify-between items-center py-6">
            <div className="text-[#E1957D] text-2xl  font-bold">
              Complete Market
            </div>
            <button className="bg-[#E1957D] text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#008f73]">
              <User className="w-4 h-4" /> Login
            </button>
          </header>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={burgervideo}
                alt="Exploded burger"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-[56px] font-semibold leading-tight">
                Protein Foods Delivery in Ibadan
              </h1>
              <p className="text-xl font-medium">
                Turkey, Meat, Fish, All Proteins!
              </p>
              <div className="flex flex-wrap sm:flex-nowrap gap-2 bg-white rounded-full p-2 shadow-lg">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Where are you from Ibadan?"
                    className="w-full text-sm outline-none placeholder-gray-500"
                  />
                </div>
                <button className="bg-[#E1957D] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Use current location
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
            <stop stopColor="rgba(123, 44, 191, 1)" offset="0%" />
            <stop stopColor="rgba(123, 44, 191, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,80L26.7,71.7C53.3,63,107,47,160,35C213.3,23,267,17,320,26.7C373.3,37,427,63,480,71.7C533.3,80,587,70,640,56.7C693.3,43,747,27,800,23.3C853.3,20,907,30,960,35C1013.3,40,1067,40,1120,36.7C1173.3,33,1227,27,1280,25C1333.3,23,1387,27,1440,26.7C1493.3,27,1547,23,1600,18.3C1653.3,13,1707,7,1760,10C1813.3,13,1867,27,1920,26.7C1973.3,27,2027,13,2080,10C2133.3,7,2187,13,2240,25C2293.3,37,2347,53,2400,60C2453.3,67,2507,63,2560,60C2613.3,57,2667,53,2720,48.3C2773.3,43,2827,37,2880,30C2933.3,23,2987,17,3040,15C3093.3,13,3147,17,3200,16.7C3253.3,17,3307,13,3360,15C3413.3,17,3467,23,3520,35C3573.3,47,3627,63,3680,65C3733.3,67,3787,53,3813,46.7L3840,40L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"
        />
      </svg>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top restaurants and more in Complete Market
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

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              We Bring Protein Foods in Your Doorstep!
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Order protein food from the best restaurants in Ibadan and online
              vendors using our App.
            </p>
            <button className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-[#E1957D] rounded-full transition-colors">
              Start Ordering
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <img
              src={turkey}
              alt="Variety of delicious dishes"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-white p-4 rounded-full mb-6">
              <Globe2 className="w-12 h-12 text-[#E1957D]" />
            </div>
            <h2 className="text-4xl text-gray-900 font-bold text-center">
              Varaties of protein foods we deliver
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4">
            {proteins.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-3"
              >
                {row.map((protein) => (
                  <div
                    key={protein}
                    className="px-6 py-2 bg-[#E1957D]  rounded-full text-white font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {protein}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#7B2CBF] rounded-[72px] mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-8">
  <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
      <div className="flex-1 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8">
          Experience
          <br />
          the app
          <br />
          today!
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#E1957D] hover:bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[30px] flex items-center gap-3 transition-all">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </button>
          <button className="bg-[#E1957D] hover:bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[30px] flex items-center gap-3 transition-all">
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

      <div className="flex-1 relative">
        <div className="relative z-10 transform rotate-6">
          <img
            src={app2}
            alt="Mobile app interface"
            className="w-full max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[24rem] mx-auto rounded-[40px] shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 w-24 h-24 sm:w-32 sm:h-32 border-4 border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute right-0 bottom-0 w-20 h-20 sm:w-24 sm:h-24 border-4 border-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
  </div>
</section>

      <section className="bg-[#f0f9f6] py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-[#E1957D]"
              fill="currentColor"
            >
              <path d="M11.7 15.3c-.7-.7-1.7-1.1-2.7-1.1s-2 .4-2.7 1.1c-.7.7-1.1 1.7-1.1 2.7 0 1 .4 2 1.1 2.7.7.7 1.7 1.1 2.7 1.1s2-.4 2.7-1.1c.7-.7 1.1-1.7 1.1-2.7 0-1-.4-2-1.1-2.7zm7.6-5.3c-.7-.7-1.7-1.1-2.7-1.1s-2 .4-2.7 1.1c-.7.7-1.1 1.7-1.1 2.7 0 1 .4 2 1.1 2.7.7.7 1.7 1.1 2.7 1.1s2-.4 2.7-1.1c.7-.7 1.1-1.7 1.1-2.7 0-1-.4-2-1.1-2.7z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Let's fill the gap with complete market!
          </h2>
        </div>

        {/* Cards Container */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Rider Card */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-[#E1957D] rounded-full"></div>
                <img
                  src={logo}
                  alt="Delivery rider"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Try The App</h3>
              <p className="text-gray-600 mb-6">
                Discover the best restaurants and vendors near you all in one
                place
              </p>
              <button className="bg-[#E1957D] text-white px-6 py-3 rounded-full transition-colors">
                Register here
              </button>
            </div>

            {/* Partner Card */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-[#E1957D] rounded-full"></div>
                <img
                  src={logo}
                  alt="Restaurant chef"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Become A Merchant</h3>
              <p className="text-gray-600 mb-6">
                Grow your business and increase profit by creating an online
                ordering page
              </p>
              <button className="bg-[#E1957D] text-white px-6 py-3 rounded-full transition-colors">
                Register here
              </button>
            </div>

            {/* Careers Card */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-[#E1957D] rounded-full"></div>
                <img
                  src={logo}
                  alt="Team working"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Become A Rider</h3>
              <p className="text-gray-600 mb-6">
                Drive, deliver and earn. Make more money when you become a rider
                on Heyfood
              </p>
              <button className="bg-[#E1957D] text-white px-6 py-3 rounded-full transition-colors">
                Register here
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#242127] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                Complete Market
              </h3>
              <p className="text-lg mb-4">
                Let's fill the gap with complete market!
              </p>
            </div>

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
                    Complete Market Prime
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
