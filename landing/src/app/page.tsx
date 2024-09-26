// File: src/app/page.tsx
'use client'
import Image from 'next/image'
import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiSmartphone, FiShield, FiDollarSign, FiSmile } from 'react-icons/fi';
import { FaLeaf, FaHeartbeat, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import tanishq from './images/tanishq.jpg';
import ernest from './images/ernest.png';

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])

  function Header() {
    return (
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            <li><a href="#home" className="hover:text-pink-400 transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-pink-400 transition-colors">Features</a></li>
            <li><a href="#use-cases" className="hover:text-pink-400 transition-colors">Use Cases</a></li>
            <li><a href="#team" className="hover:text-pink-400 transition-colors">Team</a></li>
            <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </motion.header>
    )
  }

  function Hero() {
    const heroRef = useRef(null)
    const isInView = useInView(heroRef, { once: true })

    const titleVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
    }

    const subtitleVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
    }

    const buttonVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
    }

    return (
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <motion.h1
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Kaduda AI
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Revolutionizing AI Access via SMS
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg"
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>
    )
  }

  function Features() {
    const features = [
      { icon: <FiSmartphone className="text-4xl mb-4 text-pink-400" />, title: "SMS Access", description: "Use AI without internet" },
      { icon: <FiShield className="text-4xl mb-4 text-pink-400" />, title: "Secure & Decentralized", description: "Powered by ICP blockchain" },
      { icon: <FiDollarSign className="text-4xl mb-4 text-pink-400" />, title: "Cost-Effective", description: "Only SMS charges apply" },
      { icon: <FiSmile className="text-4xl mb-4 text-pink-400" />, title: "Wide Compatibility", description: "Works on any mobile device" },
    ]

    return (
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {feature.icon}
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function UseCases() {
    const useCases = [
      { icon: <FaLeaf className="text-4xl mb-4 text-green-400" />, title: "Agriculture", description: "Get crop insights and weather predictions" },
      { icon: <FaHeartbeat className="text-4xl mb-4 text-red-400" />, title: "Healthcare", description: "Access medical information and first-aid tips" },
      { icon: <FaGraduationCap className="text-4xl mb-4 text-yellow-400" />, title: "Education", description: "Receive study materials and explanations" },
      { icon: <FaChartLine className="text-4xl mb-4 text-blue-400" />, title: "Finance", description: "Get budgeting and investment advice" },
    ]

    return (
      <section id="use-cases" className="py-20 bg-black bg-opacity-30 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Use Cases
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-800 to-pink-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {useCase.icon}
                <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
                <p>{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function Team() {
    const team = [
      {
        name: "Tanishq Gupta",
        image: tanishq,
        socials: [
          { icon: FaLinkedin, url: "https://www.linkedin.com/in/tanishqgupta-tech/" },
          { icon: FaGithub, url: "https://github.com/Spydiecy" },
          { icon: FaTwitter, url: "https://x.com/tanishqistaken" }
        ]
      },
      {
        name: "Ernest Adams Hawi",
        image: ernest,
        socials: [
          { icon: FaLinkedin, url: "https://www.linkedin.com/in/ernest-adams-hawi/" },
          { icon: FaGithub, url: "https://github.com/HawiAdams" },
          { icon: FaTwitter, url: "https://x.com/ErnestA81722748?t=0vgEgYszHDbW-PW06wJLXg&s=09" }
        ]
      }
    ]
  
    return (
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover"
                  />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <div className="flex justify-center space-x-4">
                  {member.socials.map((social, socialIndex) => (
                    <motion.a
                      key={socialIndex}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-pink-400 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="text-2xl" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function Contact() {
    return (
      <section id="contact" className="py-20 bg-black bg-opacity-30 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto">
            <motion.div
              className="w-full md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MdEmail className="text-pink-400 mr-2" />
                  <a href="mailto:info@kadudaai.com" className="hover:text-pink-400 transition-colors">info@kadudaai.com</a>
                </li>
                <li className="flex items-center">
                  <MdPhone className="text-pink-400 mr-2" />
                  <a href="tel:+254792016573" className="hover:text-pink-400 transition-colors">+254 792 016 573</a>
                </li>
                <li className="flex items-center">
                  <MdLocationOn className="text-pink-400 mr-2" />
                  <span>1610-00100, Nairobi, Kenya</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 bg-white bg-opacity-20 rounded" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 bg-white bg-opacity-20 rounded" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 bg-white bg-opacity-20 rounded"></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  function Footer() {
    return (
      <footer className="bg-black bg-opacity-50 py-6 px-4">
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            &copy; 2024 Kaduda AI. All rights reserved.
          </motion.p>
        </div>
      </footer>
    )
  }

  function FloatingChatButton() {
    return (
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          className="bg-pink-600 text-white rounded-full p-4 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </motion.button>
      </motion.div>
    )
  }

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/images/ai-background.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY,
          opacity,
          scale,
        }}
      />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <UseCases />
        <Team />
        <Contact />
        <Footer />
      </div>
      <FloatingChatButton />
    </div>
  )
}