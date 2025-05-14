"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.css";
import "@/public/assets/css/main.css";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    { id: 1, image: "/assets/img/project1/01.png", info: "GoMart Replication" },
    { id: 2, image: "/assets/img/project2/01.png", info: "Steam Replication" },
    {
      id: 3,
      image: "/assets/img/project3/01.png",
      info: "Food and Restaurant",
    },
  ];
  return (
    <>
      <div className="portfolio-page">
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/projects" className="active">
                    Project
                  </a>
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
      </div>
      <main className="main">
        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Projects</h2>

            <div className="container">
              <div
                className="isotope-layout"
                data-default-filter="*"
                data-layout="masonry"
                data-sort="original-order"
              >
                <div
                  className="row gy-4 isotope-container"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
                    >
                      <Image
                        src={project.image}
                        className="img-fluid"
                        width={1000}
                        height={600}
                        alt={project.info}
                      />
                      <div className="portfolio-info">
                        <h4>{project.info}</h4>
                        <Link
                          href={project.image}
                          title={project.info}
                          data-gallery="portfolio-gallery-app"
                          className="glightbox preview-link"
                        >
                          <i className="bi bi-zoom-in"></i>
                        </Link>
                        <Link
                          href={`/projects/${project.id}`}
                          title="More Details"
                          className="details-link"
                        >
                          <i className="bi bi-link-45deg"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                  ;
                </div>
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
    </>
  );
}
