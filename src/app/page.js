import Navbar from "@/Components/Navbar/Navbar"
import Image from "next/image"
import "./globals.css"
import Link from "next/link"
import Product from "@/Components/Product/Product"
import Products from "../Components/Products/Products"
import Footer from "@/Components/Footer/Footer"

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__container-hero">
        <Navbar home={true} />
        <div className="home__container-shop">
          <div className="home__container-shop_text">
            <p>Available Now</p>
            <span></span>
            <p>PHSYCOTM 2025</p>
          </div>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="home__container-section2">
        <div className="home__container-section2_top">
          <h2>NEW DROPS</h2>
          <span></span>
          <Link href="/">VIEW ALL</Link>
        </div>
        <div className="home__container-section2_bottom">
          <Products />
        </div>
      </div>

      <div className="home__container-section3">
        <img src="/brandImg.png" alt="" />
      </div>

      <div className="home__container-section2">
        <div className="home__container-section2_top">
          <h2>SS123</h2>
          <span></span>
          <Link href="/">VIEW ALL</Link>
        </div>
        <div className="home__container-section2_bottom">
          <Products />
        </div>
      </div>

      <Footer />
    </div>
  )
}
 