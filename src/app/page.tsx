import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductShowcase />
    </div>
  );
}
