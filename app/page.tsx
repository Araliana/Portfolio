"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.css";
import "@/public/assets/css/main.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="index-page">
      <header
        id="header"
        className="header d-flex align-items-center light-background sticky-top"
      >
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Link
            href="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <h1 className="sitename">Sharren</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link href="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="header-social-links">
            <Link href="https://github.com/Araliana" className="github">
              <i className="bi bi-github"></i>
            </Link>
            <Link
              href="https://www.instagram.com/sharrenbrianna"
              className="instagram"
            >
              <i className="bi bi-instagram"></i>
            </Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section
          id="hero"
          className="hero section d-flex align-items-center justify-content-center text-center"
          style={{
            backgroundImage: "url('/assets/img/bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
          data-aos="fade-in"
        >
          <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2>Sharren Brianna Jono</h2>
                <p>An informatics engineering student from Indonesia</p>
                <Link href="/projects" className="btn-get-started">
                  My Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Link
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </div>
  );
}
