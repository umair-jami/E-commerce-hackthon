import Offer from "./components/offer/page";
import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import Brands from "./components/brands/page";
import NewArrivals from "./components/newArrivals/page";
import TopSelling from "./components/topSelling/page";
import DressStyle from "./components/dressStyle/page";
import Customers from "./components/customers/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
    <Offer/>
    <Navbar/>
    <Hero/>
    <Brands/>
    <NewArrivals/>
    <TopSelling/>
    <DressStyle/>
    <Customers/>
    <Footer/>
    </>
  );
}
