"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.css";
import "@/public/assets/css/main.css";

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
                      "/assets/img/project1/01.png",
                      "/assets/img/project1/02.png",
                      "/assets/img/project1/03.png",
                      "/assets/img/project1/04.png",
                      "/assets/img/project1/05.png",
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
                        <strong>Category</strong>: Web back-end
                      </li>
                      <li>
                        <strong>Program Language</strong>: EJS, NodeJS, MySQL
                      </li>
                      <li>
                        <strong>Project date</strong>: January 2025
                      </li>
                      <li>
                        <strong>Project URL</strong>:{" "}
                        <a href="https://github.com/EmpthyLL/tugas-uts-nicholas">
                          GoMart Fiture Replication
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="portfolio-description "
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2>Feature : </h2>
                    <p>
                      Implements authorization and authentication <br></br>Uses
                      a database for storage <br></br>users to shop like in the
                      real GoMart feature in the GoJek app, with a more
                      interesting design
                    </p>
                  </div>
                </div>
              </div>

              <div className="container mt-5 section-title" data-aos="fade-up">
                <h2>Preview</h2>
              </div>

              <div className="flex justify-center flex-wrap gap-3">
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/01.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/02.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/03.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/04.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/05.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/06.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/07.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/08.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/09.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/10.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/11.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/12.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/13.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/14.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/15.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/16.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/17.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/18.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/19.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/20.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/21.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/22.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/23.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/24.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/25.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/26.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/27.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/29.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/30.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/31.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/32.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/33.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/34.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/35.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/36.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/37.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/38.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  src="/assets/img/project1/40.png"
                  alt=""
                />
                <div>
                  <Image
                    width={500}
                    height={100}
                    src="/assets/img/project1/39.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
