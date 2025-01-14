export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Events", link: "#events" },
  { name: "Discover", link: "#discover" },
  { name: "Favorites", link: "#favorites" },
  { name: "Profile", link: "#profile" },
];

export const gridItems = [
  {
    id: 1,
    title: "Explore Events Near You",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Cultural Festivals",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Workshops & Classes",
    description: "Learn new skills and traditions",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Cultural Tours",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    // img: "/tours.svg",
    spareImg: "/toursBackup.svg",
  },
  {
    id: 5,
    title: "Food & Cuisine Events",
    description: "Taste the world",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/",
    spareImg: "/foodBackup.svg",
  },
  {
    id: 6,
    title: "Join Our Community",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Cultural Dance Festival",
    des: "Experience traditional dances from around the world.",
    img: "https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    iconLists: ["/dance.svg", "/festival.svg", "/cultural.svg"],
    link: "#",
  },
  {
    id: 2,
    title: "Art & Craft Workshops",
    des: "Participate in hands-on workshops and learn traditional crafts.",
    img: "https://images.pexels.com/photos/30185428/pexels-photo-30185428/free-photo-of-artist-sculpting-detailed-clay-relief-art-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    iconLists: ["/art.svg", "/workshop.svg", "/craft.svg"],
    link: "#",
  },
  {
    id: 3,
    title: "Culinary Tours",
    des: "Join guided tours to explore local cuisines.",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    iconLists: ["/food.svg", "/tour.svg", "/cuisine.svg"],
    link: "#",
  },
  {
    id: 4,
    title: "Music & Culture Nights",
    des: "Enjoy live music and cultural performances.",
    img: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    iconLists: ["/music.svg", "/night.svg", "/culture.svg"],
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "This app helped me discover amazing cultural events in my city. Highly recommend!",
    name: "Alex Johnson",
    title: "Event Enthusiast",
  },
  {
    quote:
      "I found a fantastic cooking class through this app. It was an unforgettable experience!",
    name: "Maria Gonzalez",
    title: "Food Lover",
  },
  {
    quote:
      "The cultural tours are a must-try. I learned so much about different traditions.",
    name: "David Lee",
    title: "Traveler",
  },
];

export const companies = [
  {
    id: 1,
    name: "Eventbrite",
    img: "/eventbrite.svg",
    nameImg: "/eventbriteName.svg",
  },
  {
    id: 2,
    name: "Meetup",
    img: "/meetup.svg",
    nameImg: "/meetupName.svg",
  },
  {
    id: 3,
    name: "Airbnb Experiences",
    img: "/airbnb.svg",
    nameImg: "/airbnbName.svg",
  },
  {
    id: 4,
    name: "TripAdvisor",
    img: "/tripadvisor.svg",
    nameImg: "/tripadvisorName.svg",
  },
  {
    id: 5,
    name: "Yelp",
    img: "/yelp.svg",
    nameImg: "/yelpName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Event Coordinator",
    desc: "Organized cultural events and managed logistics.",
    className: "md:col-span-2",
    thumbnail: "/coordinator.jpg",
  },
  {
    id: 2,
    title: "Community Manager",
    desc: "Engaged with users and promoted events on social media.",
    className: "md:col-span-2",
    thumbnail: "/communityManager.jpg",
  },
  {
    id: 3,
    title: "Content Creator",
    desc: "Created engaging content to highlight cultural events.",
    className: "md:col-span-2",
    thumbnail: "/contentCreator.jpg",
  },
  {
    id: 4,
    title: "Event Planner",
    desc: "Planned and executed large-scale cultural festivals.",
    className: "md:col-span-2",
    thumbnail: "/eventPlanner.jpg",
  },
];

export const socialMedia = [
  { id: 1, img: "/facebook.svg" },
  { id: 2, img: "/instagram.svg" },
  { id: 3, img: "/twitter.svg" },
];
