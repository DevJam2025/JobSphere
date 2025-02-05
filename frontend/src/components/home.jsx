import React from "react";

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

const Home = () => {
  return (
    <><div className="relative h-screen w-full">
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <p className="text-black-300 text-lg font-semibold">Connect. Grow. Succeed.</p>
        <h1 className="text- text-5xl font-bold leading-tight">
          For Every Hardwork<br /> Help To Get  <br /> Better Opportunity </h1>
        <p className="text-gray-900 mt-4 max-w-2xl">
          Your gateway to success! Find jobs, hire top talent, and grow your career with JobSphere’s smart hiring platform
        </p>

        <div className="mt-6 flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold">
            Browse
          </button>
          {/* <Link to="/browse">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold">
           Browse
         </button>
          </Link> */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">
            Contact Us
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
        
    </div>
    
      <Facts /></>
  );
};

export default Home;
