"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.css";
import "@/public/assets/css/main.css";
import { Autoplay, Pagination } from "swiper/modules";

export default function ProjectDetail1() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="portfolio-details-page">
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
                  <Link href="/">Home</Link>
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
          <section id="portfolio-details" className="portfolio-details section">
            <div className="container section-title" data-aos="fade-up">
              <h2>Project Details</h2>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-8">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    speed={600}
                    autoplay={{
                      delay: 5000,
                    }}
                    slidesPerView="auto"
                    pagination={{ clickable: true }}
                    className="portofolio-details-slider swiper-pagination swiper-pagination-bullet"
                  >
                    {[
                      "/assets/img/project2/01.png",
                      "/assets/img/project2/02.png",
                      "/assets/img/project2/03.png",
                      "/assets/img/project2/04.png",
                      "/assets/img/project2/05.png",
                    ].map((src, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={src}
                          alt={`Slide ke - ${index + 1}`}
                          width={900}
                          height={500}
                          className="swiper-pagination-bullet-active"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="col-lg-4">
                  <div
                    className="portfolio-info"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Web front-end
                      </li>
                      <li>
                        <strong>Program Language</strong>: HTML, CSS, JavaScript
                      </li>
                      <li>
                        <strong>Project date</strong>: April, 2024
                      </li>
                      <li>
                        <strong>Project URL</strong>:{" "}
                        <Link href="https://github.com/slomow1540/Grup-Antariksa-tugas">
                          Steam Replication
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2>Feature : </h2>
                    <p>
                      Functionality carousel<br></br>
                      Replication website that is as similar as possible to the
                      original
                    </p>
                  </div>
                </div>
              </div>

              <div className="container section-title mt-5" data-aos="fade-up">
                <h2>Preview</h2>
              </div>

              <div className="flex justify-center flex-wrap gap-3">
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project2/01.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project2/02.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project2/03.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project2/04.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project2/05.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
