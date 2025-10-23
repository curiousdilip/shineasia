import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Package from "./components/Package";
import Reviews from "./components/Reviews";
import Visa from "./components/Visa";
import VisaNeed from "./components/VisaNeed";
import Why from "./components/Why";

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
