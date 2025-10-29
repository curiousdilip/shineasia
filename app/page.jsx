import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Package from "./components/Package";
import Reviews from "./components/Reviews";
import Visa from "./components/Visa";
import VisaNeed from "./components/VisaNeed";
import Why from "./components/Why";

export const metadata = {
  title: "4 Nights 5 Days Dubai Dream Tour | Shine Asia Global",
  description: "The 4 Nights 5 Days Dubai Dream Tour with Shine Asia Global offers an exciting and luxurious holiday experience. Stay in premium 3 & 4 star hotels with breakfast, enjoy a Desert Safari buffet dinner, a Dhow Cruise buffet dinner, and witness the stunning Burj Khalifa and fountain view. Explore the vibrant city through a Dubai City Tour, with flight tickets and UAE visa included. This package combines adventure, comfort, and sightseeing for a complete Dubai experience — all organized with seamless transfers and top-notch service.",
  keywords: "Dubai tour, Dubai packages, Dubai Dream Tour, Desert Safari, Dubai Cruise, Burj Khalifa, UAE visa, Shine Asia Global",
  authors: [{ name: "Dilip" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.shineasiaglobal.com",
    title: "4 Nights 5 Days Dubai Dream Tour | Shine Asia Global",
    description: "The 4 Nights 5 Days Dubai Dream Tour with Shine Asia Global offers an exciting and luxurious holiday experience. Enjoy Desert Safari, Dhow Cruise, Burj Khalifa view, Dubai City Tour, flight tickets and UAE visa included.",

    images: [
      {
        url: "https://www.shineasiaglobal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "4 Nights 5 Days Dubai Dream Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Nights 5 Days Dubai Dream Tour | Shine Asia Global",
    description: "Experience the 4 Nights 5 Days Dubai Dream Tour with Shine Asia Global. Enjoy Desert Safari, Dhow Cruise, Burj Khalifa view, Dubai City Tour, flight tickets and UAE visa included.",
    images: ["https://www.shineasiaglobal.com/og-image.jpg"],
  },
};



export default function Home() {
  return (
    <>
    
      <Hero />
      <Package />
      <Why />
      <Visa />
      <Reviews />
      <VisaNeed />
      <CTA />
    </>
  );
}
