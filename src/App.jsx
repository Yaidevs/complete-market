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
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-center text-gray-900">
            Top restaurants and more in Glovo
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "McDonald's",
                image:
                  "https://images.unsplash.com/photo-1619881590738-a111d176d906?q=80&w=400&h=400&fit=crop",
              },
              {
                name: "KFC",
                image:
                  "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=400&h=400&fit=crop",
              },
              {
                name: "BurgerKing",
                image:
                  "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&h=400&fit=crop",
              },
              {
                name: "Carrefour",
                image:
                  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=400&h=400&fit=crop",
              },
            ].map((restaurant, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="bg-[	#9D00FF] px-4 py-1 rounded-full text-sm font-medium">
                  {restaurant.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
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
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Anything delivered
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Your city's top restaurants",
                description:
                  "With a great variety of restaurants, you can order your favourite food or explore new restaurants nearby!",
                icon: restaurantopt,
              },
              {
                title: "Fast delivery",
                description:
                  "Like a flash! Order or send anything in your city and receive it in minutes.",
                icon: deliveryopt,
              },
              {
                title: "Groceries delivery & more",
                description:
                  "Find anything you need! From supermarkets to shops, pharmacies to florists.",
                icon: groceriesopt,
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#9D00FF] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#00A082] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#008f73] transition-colors">
              Explore stores around you
            </button>
          </div>
        </div>
      </section> */}

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
            <button className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
              Start Ordering
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&q=80"
              alt="Variety of delicious dishes"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Countries Section */}
      {/* <section className="bg-[	#9D00FF] py-16">
        <div className="container mx-auto px-4">
          <img
            src={countriesopt}
            alt="World"
            className="mx-auto mb-8 w-20 h-20"
          />
          <h2 className="text-2xl font-bold mb-8 text-center">
            Countries where we deliver
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {countries.map((country, index) => (
              <button
                key={index}
                className="bg-white rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-amber-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-white p-4 rounded-full mb-6">
              <Globe2 className="w-12 h-12 text-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-center">
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
                    className="px-6 py-2 bg-white rounded-full text-gray-900 font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {country}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
