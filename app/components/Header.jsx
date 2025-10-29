"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".site-header");
      if (window.scrollY >= 1) {
        header?.classList.add("fixed-header");
      } else {
        header?.classList.remove("fixed-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header id="masthead" className="site-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 col-sm-5 col-md-6">
              <Link href="" className="site-logo">
                {/* <h1>Shine Asia Travel</h1> */}
                <img src="/favicon.png" alt="logo" style={{width:"80px"}}/>
              </Link>
            </div>
            <div className=" col-7 col-sm-5 col-md-6 text-end">
              <div className="top-contact">
                <Link href="https://www.facebook.com/profile.php?id=100070884819767" target="_blank">
                  <i className="bi bi-facebook me-2"></i>
                </Link>
                <Link href="https://www.instagram.com/shineasiaglobal" target="_blank">
                  <i className="bi bi-instagram me-2"></i>
                </Link>
                <Link href="https://www.youtube.com/@shineasiaglobal" target="_blank">
                  <i className="bi bi-youtube me-2"></i>
                </Link>

                <Link href="tel:+917840054757">
                  <i className="bi bi-phone me-1"></i>+917840054757
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
