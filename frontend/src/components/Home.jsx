import React from "react";

import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import backgroundImage from "../images/mnn.jpg";
import carouselImage2 from "../images/carousel-2.jpg";

const slides = [
  {
    id: 1,
    image:backgroundImage,
    title: "Welcome To JobSphere",
    subtitle: "Your Gateway To Career Success",
    description:
      "JobSphere is a dynamic job-matching platform designed to bridge the gap between aspiring professionals and leading recruiters. ",
  },
  {
    id: 2,
    image: carouselImage2,
    title: "Welcome To JobSphere",
    subtitle: "Quality Digital Services You Really Need!",
    description:
      " Our mission is to simplify the hiring process by providing a seamless experience for both job seekers and employers.",
  },
];

const CarouselComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img src={slide.image} alt={slide.subtitle} className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue bg-opacity-50 text-center p-4">
              <h6 className="text-gray-300 text-lg mb-2 animate-fadeInUp">{slide.title}</h6>
              <h1 className="text-black text-4xl font-bold mb-4 animate-fadeInRight">{slide.subtitle}</h1>
              <p className="text-black text-lg mb-4 animate-fadeInDown">{slide.description}</p>
              <div className="flex gap-4">
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition animate-fadeInLeft"
                  onClick={() => document.getElementById("read")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Read More
                </button>
                <button
                  className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition animate-fadeInRight"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};



const stats = [
  { value: "99%", text: "Success in getting happy customers", delay: ".1s" },
  { value: "25K+", text: "Successful business connections", delay: ".3s" },
  { value: "120+", text: "Clients who love JobSphere", delay: ".5s" },
  { value: "5★", text: "Stars reviews from satisfied clients", delay: ".7s" },
];

const Facts = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-yellow-50 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className={`wow fadeIn`} data-wow-delay={stat.delay}>
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold text-blue-500">{stat.value}</h1>
                <h5 className="text-white ml-4">{stat.text}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="read">
    <div className="container mx-lg py-10 my-5 px-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full ml-10 flex justify-left">
          <img
            src="src\images\project-1.jpg"
            alt="About Us"
            className="w-3/4 rounded-lg mb-16"
          />
          <div className="absolute top-1/5 left-1/7 w-3/4">
            <img
              src="src\images\project-3.jpg"
              alt="About Us"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
        <div>
          <h5 className="text-pink-600 text-xl font-bold">About Us</h5>
          <h1 className="text-3xl font-bold mb-4">
          Empowering Careers, Connecting Talent with Opportunity
          </h1>
          <p className="text-gray-700 mb-4">
         
    <p>JobSphere is a dynamic job-matching platform designed to bridge the gap between aspiring professionals and leading recruiters. Our mission is to simplify the hiring process by providing a seamless experience for both job seekers and employers. Whether you're a student looking for internships or a recruiter searching for top talent, JobSphere offers a smart and efficient solution.</p>
    <p class="mb-4">With a user-friendly interface, powerful search filters, and AI-driven recommendations, we ensure that candidates find the right opportunities and recruiters connect with the best talent. Our platform supports personalized profiles, skill-based job matching, and real-time updates, making career growth more accessible than ever.</p>
          </p>
          <p className="text-gray-700 mb-6">
          At JobSphere, we believe in fostering career growth and professional development. That’s why we provide resources such as resume-building tools, interview tips, and industry insights to help job seekers stay ahead in the competitive job market. We also collaborate with top companies and organizations to ensure that our users have access to the latest job opportunities across various industries.
          </p>
         
        </div>
      </div>
    </div>
    </section>
  );
};



const Services = () => {
  const services = [
    {
      icon: "fa-code",
      title: "Web Design",
      description: "Create visually stunning and user-friendly job portals with modern web design techniques tailored for recruiters and job seekers.",
    },
    {
      icon: "fa-file-code",
      title: "Web Development",
      description: "Develop scalable, high-performance job-matching platforms with advanced features like AI-driven recommendations and real-time updates.",
    },
    {
      icon: "fa-external-link-alt",
      title: "UI/UX Design",
      description: "Enhance user experience with intuitive and engaging UI/UX designs, making job searching and hiring seamless for all users.",
    },
    {
      icon: "fas fa-user-secret",
      title: "Web Security",
      description: "Ensure a safe and secure platform with advanced encryption, user authentication, and fraud detection for trusted hiring and job applications.",
    },
    {
      icon: "fa-envelope-open",
      title: "Digital Marketing",
      description: "Boost your job postings and employer branding through strategic digital marketing, SEO, and targeted advertising.",
    },
    {
      icon: "fas fa-laptop",
      title: "Programming",
      description: "Empower job seekers with coding assessments, skill verification, and upskilling resources to enhance career opportunities.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-5 text-center">
        <h5 className="text-primary text-lg font-semibold">Our Services</h5>
        <h1 className="text-3xl font-bold mb-10">
          Popular Searches On JobSphere
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <i className={`fa ${service.icon} text-primary text-green-500 text-6xl mb-4`}></i>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const Home = () => {
  return (
    <>
       <Carousel/>
       <CarouselComponent/>
      <Facts />
      <About />
       <Services /></>
  );
};

export default Home;
