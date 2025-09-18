"use client";

import React, { useState, useEffect } from "react";
import { Globe, Facebook, Phone, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

const RelianceEducationNetwork = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const schoolData = [
    {
      id: 1,
      title: "Reliance Int'l Academy",
      image: "images/schools/ria.png",
      location: "Kapan - 10, Kathmandu, Nepal",
      established: "PG - GRADE 10",

      logo: "images/logos/ria.png",
      socialLinks: {
        website: "https://www.riaschool.edu.np/",
        facebook: "https://www.facebook.com/riaschoolwing",
        instagram: "https://www.instagram.com/riaschoolwing/",
        linkedin: "https://www.linkedin.com/company/ria-bhaktapur",
        youtube: "https://www.youtube.com/@relianceinternationalacade2877",
        tiktok: "https://www.tiktok.com/@riaschoolwing",
      },
    },
    {
      id: 2,
      title: "Reliance Public School",
      image: "images/schools/rps.png",
      location: "Bibekchowk, Kathmandu, Nepal",
      established: "PG - GRADE 10",

      logo: "images/logos/rps.png",
      socialLinks: {
        website: "https://rps.edu.np/",
        facebook: "https://www.facebook.com/reliancepublic/",
        instagram: "https://www.instagram.com/rps.edu.np/",
        linkedin: "https://www.linkedin.com/school/reliance-public-school-rps/",
        youtube: "https://www.youtube.com/@reliancepublic.school",
        tiktok: "https://www.tiktok.com/@rps.edu.np",
      },
    },
    {
      id: 3,
      title: "Nepal Vidya Sadhan",
      image: "images/schools/ria.png",
      location: "Gopikrishna Nagar-7, Kathmandu,Nepal",
      established: "PG - GRADE 10",

      logo: "images/logos/nvs.png",
      socialLinks: {
        website: "https://nvs.edu.np/",
        facebook: "https://www.facebook.com/nepalvidhyasadan",
        instagram: "https://www.instagram.com/nepalvidhyasadan/",
        linkedin: "https://www.linkedin.com/company/nepal-vidya-sadhan",
        youtube: "https://www.youtube.com/@nepalvidyasadhan",
        tiktok: "https://www.tiktok.com/@nepalvidyasadhan",
      },
    },
    {
      id: 4,
      title: "Reliance Co.ed School",
      image: "images/schools/co.ed.png",
      location: "Baluwakhani, Kapan, Kathmandu, Nepal",
      established: "PG - GRADE 10",

      logo: "images/logos/co.ed.png",
      socialLinks: {
        website: "https://reliancecoed.edu.np/",
        facebook: "https://www.facebook.com/reliancecoed.edu.np",
        instagram: "https://www.instagram.com/reliancecoedschool/",
        linkedin: "https://www.linkedin.com/school/reliance-co-ed-schoo",
        youtube: "https://www.youtube.com/@RelianceCo-EdSchool",
        tiktok: "https://www.tiktok.com/@reliancecoedschool",
      },
    },
  ];

  const collegeData = [
    {
      id: 1,
      title: "Reliance International Academy +2",
      image: "images/schools/ria+2.png",
      location: "Saraswatinagar, Chabahil, Kathmandu",
      programs: "+2 Science and Mangament",

      logo: "images/logos/ria+2.png",
      socialLinks: {
        website: "https://ria.edu.np/",
        facebook: "https://www.facebook.com/relianceintlacademy",
        instagram: "https://www.instagram.com/relianceintlacademy/",
        linkedin: "https://www.linkedin.com/school/relianceintlacademy/",
        youtube: "https://www.youtube.com/@relianceintlacademy",
        tiktok: "https://www.tiktok.com/@relianceintlacademy",
      },
    },
    {
      id: 2,
      title: "Reliance College",
      image: "images/schools/ria+2.png",
      location: "Saraswatinagar, Chabahil, Kathmandu",
      programs: "BCA, BBS, BA/BSW, MBA MBS",

      logo: "images/logos/rc.png",
      socialLinks: {
        website: "https://riacollege.edu.np/",
        facebook: "https://www.facebook.com/reliancecollege.062",
        instagram: "https://www.instagram.com/riacollege/",
        linkedin: "https://www.linkedin.com/school/riacollege/",
        youtube: "https://www.youtube.com/@reliancecollege.062",
        tiktok: "https://www.tiktok.com/@reliancecollege",
      },
    },
    {
      id: 3,
      title: "Reliance International College",
      image: "images/schools/ria+2.png",
      location: "Saraswatinagar, Chabahil, Kathmandu",
      programs: "BCA BSc.CSIT BBA",

      logo: "images/logos/ric.png",
      socialLinks: {
        website: "https://ricollege.edu.np/",
        facebook: "https://www.facebook.com/relianceintlcollege",
        instagram: "https://www.instagram.com/relianceintlcollege/",
        linkedin: "https://www.linkedin.com/school/relianceintlcollege/",
        youtube: "https://www.youtube.com/@relianceintlcollege",
        tiktok: "https://www.tiktok.com/@relianceintlcollege",
      },
    },
  ];

  const stats = [
    { number: "8+", label: "School & College", icon: "🏫" },
    { number: "5000+", label: "Students", icon: "👨‍🎓" },
    { number: "25+", label: "Years Experience", icon: "🏆" },
    { number: "500+", label: "TEAM", icon: "⭐" },
  ];

  // Helper function to get social icon
  const getSocialIcon = (socialName) => {
    const icons = {
      website: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      facebook: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      instagram: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      linkedin: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      youtube: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      tiktok: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    };
    return icons[socialName];
  };

  const SchoolCard = ({ data, index }) => (
    <div
      className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-3xl ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHoveredCard(`school-${data.id}`)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Floating gradient orb */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Logo badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={data.logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/80 flex items-center justify-center transition-opacity duration-300 ${
            hoveredCard === `school-${data.id}` ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-1">{data.students}</div>

            <div className="text-xs mt-2 bg-white/20 px-3 py-1 rounded-full">
              {data.established}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 relative">
        <h3 className="font-bold text-white text-[16px] mb-2 group-hover:text-yellow-300 transition-colors duration-300">
          {data.title}
        </h3>
        <div className="flex items-center text-white/80 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-2 text-white/80" />
          {data.location}
        </div>

        {/* Individual Social links for each school */}
        <div className="grid grid-cols-6 gap-2 max-w-[250px] mx-auto">
          {Object.entries(data.socialLinks).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              className="group/social w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
              title={`${data.title} on ${platform}`}
            >
              <div
                className={`text-white transition-colors duration-300 ${
                  platform === "website"
                    ? "group-hover/social:text-blue-400"
                    : platform === "facebook"
                    ? "group-hover/social:text-blue-500"
                    : platform === "instagram"
                    ? "group-hover/social:text-pink-500"
                    : platform === "linkedin"
                    ? "group-hover/social:text-blue-600"
                    : platform === "youtube"
                    ? "group-hover/social:text-red-500"
                    : platform === "tiktok"
                    ? "group-hover/social:text-gray-900"
                    : "group-hover/social:text-blue-400"
                }`}
              >
                {getSocialIcon(platform)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  const CollegeCard = ({ data, index }) => (
    <div
      className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-3xl ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
      style={{ animationDelay: `${(index + 5) * 100}ms` }}
      onMouseEnter={() => setHoveredCard(`college-${data.id}`)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Floating gradient orb */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Logo badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={data.logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 flex items-center justify-center transition-opacity duration-300 ${
            hoveredCard === `college-${data.id}` ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-1">{data.students}</div>

            <div className="text-xs mt-2 bg-white/20 px-3 py-1 rounded-full">
              {data.programs}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 relative">
        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-300">
          {data.title}
        </h3>
        <div className="flex items-center text-white/80 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-2 text-white/80" />
          {data.location}
        </div>

        <div className="text-white/70 text-sm mb-4">
          <span className="bg-white/10 px-2 py-1 rounded-full text-xs">
            {data.programs}
          </span>
        </div>

        {/* Individual Social links for each college */}
        <div className="grid grid-cols-6 gap-2 max-w-[250px] mx-auto">
          {Object.entries(data.socialLinks).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              className="group/social w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
              title={`${data.title} on ${platform}`}
            >
              <div
                className={`text-white transition-colors duration-300 ${
                  platform === "website"
                    ? "group-hover/social:text-blue-400"
                    : platform === "facebook"
                    ? "group-hover/social:text-blue-500"
                    : platform === "instagram"
                    ? "group-hover/social:text-pink-500"
                    : platform === "linkedin"
                    ? "group-hover/social:text-blue-600"
                    : platform === "youtube"
                    ? "group-hover/social:text-red-500"
                    : platform === "tiktok"
                    ? "group-hover/social:text-gray-900"
                    : "group-hover/social:text-blue-400"
                }`}
              >
                {getSocialIcon(platform)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#363794] via-[#2f2f78] to-[#2a296d] overflow-hidden">
        {/* Bubble layers */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-float"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-8 ${
            isVisible ? "animate-fadeInDown" : "opacity-0"
          }`}
        >
          <h1
            className={`
    text-2xl sm:text-4xl md:text-5xl lg:text-6xl
    font-semibold md:font-bold tracking-tight
    text-white drop-shadow-md
    mb-6
  `}
          >
            Reliance Education Network
          </h1>

          <div className="flex items-center justify-center mb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-20 sm:w-32"></div>
            <span className="text-white/80 mx-4 sm:mx-6 text-base sm:text-lg font-light tracking-wider">
              For Your Right Move
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-20 sm:w-32"></div>
          </div>
        </div>

        {/* Background Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <img
            src="images/renlogo.png"
            alt="Logo"
            className="w-[900px] h-[900px] object-contain opacity-30 select-none"
          />
        </div>

        {/* School Wings Section */}
        <div className="mb-20 relative z-10">
          <h2
            className={`text-4xl font-bold text-white text-center mb-12 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              School Wings
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {schoolData.map((school, index) => (
              <SchoolCard key={school.id} data={school} index={index} />
            ))}
          </div>
        </div>

        {/* College Wings Section */}
        <div className="mb-20 relative z-10">
          <h2
            className={`text-4xl font-bold text-white text-center mb-12 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              College Wings
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {collegeData.map((college, index) => (
              <CollegeCard key={college.id} data={college} index={index} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "800ms" }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-3 group-hover:from-yellow-400 group-hover:to-red-500 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>

              {/* Progress bar animation */}
              <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatDelayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
        .bubble {
          position: absolute;
          top: -100px; /* start above the container */
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: fall 20s infinite ease-in;
        }

        .bubble:nth-child(1) {
          left: 20%;
          width: 60px;
          height: 60px;
          animation-duration: 18s;
        }
        .bubble:nth-child(2) {
          left: 40%;
          animation-duration: 25s;
          animation-delay: 4s;
        }
        .bubble:nth-child(3) {
          left: 60%;
          width: 100px;
          height: 100px;
          animation-duration: 22s;
          animation-delay: 2s;
        }
        .bubble:nth-child(4) {
          left: 80%;
          width: 50px;
          height: 50px;
          animation-duration: 20s;
          animation-delay: 6s;
        }
        .bubble:nth-child(5) {
          left: 30%;
          width: 70px;
          height: 70px;
          animation-duration: 28s;
          animation-delay: 8s;
        }

        @keyframes fall {
          0% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(120vh) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default RelianceEducationNetwork;
