"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/appleCardsCarousel";


export function RecentEvents() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-6xl font-extrabold text-neutral-800 dark:text-neutral-200 font-sans leading-tight">
        Discover the <span className="dark:dark:text-neutral-200 text-amber"> 2024 Cultural Events</span>: Uniting <span className="dark:text-amber text-neutral-800">Communities</span>Through Celebration
      </h2>
      <Carousel items={cards}  />
    </div>
  );
}

const EventContent: React.FC<{ info: string[] }> = ({ info }) => {
  return (
    <>
      
       
          <div
            key={"dummy-content" }
            className="dark:bg-gradient-to-r dark:from-[#04071D] dark:to-[#0C0E23] bg-gradient-to-r from-[#F0F4FF] to-[#D9E4FF] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="dark:text-[#C1C2D3] text-amber text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {[...info].map((p) => (
              <span key={p}>{p}</span>
            ))}
            </p>
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
      
     
    </>
  );
};

const data = [
  {
    category: "Music",
    title: "You can do more with Music: Live Jazz Night",
    src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <EventContent info={[
      "Experience the soothing sounds of live jazz in an open park setting. Local bands and renowned artists will perform their best numbers.",
      "Food and beverages are available at the venue, making it a perfect evening outing for music enthusiasts and families alike.",
      "Don't miss the chance to unwind under the stars with soulful tunes and great company."
    ]} />,
    

  },
  {
    category: "Food",
    title: "International Food Festival Awaits!",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "Savor dishes from around the world at the International Food Festival. From street food to gourmet delicacies, there's something for everyone.",
      "Enjoy live cooking demos, meet famous chefs, and explore various cuisines in a lively and festive atmosphere.",
      "Kids' activities and entertainment will keep the whole family engaged while you explore the culinary delights."
    ],
  },
  {
    category: "Workshop",
    title: "Join a Pottery Workshop Today!",
    src: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "Discover the art of pottery in this hands-on workshop. Perfect for beginners, you'll learn techniques to shape and mold clay.",
      "All materials and tools will be provided, and expert instructors will guide you through each step of the process.",
      "Take home your handmade masterpiece as a keepsake or gift for someone special!"
    ],
  },
  {
    category: "Festival",
    title: "Spring Blossom Festival Celebration",
    src: "https://images.unsplash.com/photo-1498409785966-ab341407de6e?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "Celebrate the arrival of spring at the Blossom Festival. Marvel at the blooming flowers and enjoy themed events and parades.",
      "Live music, art exhibitions, and craft markets will add to the vibrant atmosphere.",
      "Great for families, couples, and nature lovers looking to immerse themselves in seasonal beauty."
    ],
  },
  {
    category: "Gathering",
    title: "Community Meet & Greet",
    src: "https://images.unsplash.com/photo-1486892539609-d5322f938c50?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "Meet your neighbors and build lasting connections at this community gathering.",
      "Enjoy a fun-filled day with games, music, and refreshments for all ages.",
      "Learn more about local initiatives and how you can get involved in making a difference in your community."
    ],
  },
  {
    category: "Music",
    title: "Acoustic Night at the Café",
    src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "Unwind with the soft melodies of acoustic performances at your favorite local café.",
      "This intimate setting is perfect for music lovers looking for a cozy and relaxing evening.",
      "Sip on freshly brewed coffee while enjoying live performances from talented local artists."
    ],
  },
];

