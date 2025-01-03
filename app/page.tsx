import Brands from "./components/brands/page";
import Customers from "./components/customers/page";
import DressStyle from "./components/dressStyle/page";
import Hero from "./components/hero/page";
import NewArrivals from "./components/newArrivals/page";
import TopSelling from "./components/topSelling/page";

export default function Home() {
  return (
    <>

      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Customers />
    </>
  );
}
