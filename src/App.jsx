import { useState } from 'react';
import { Phone, Mail, Code, Database, FileCode2, Globe, User, Book, Briefcase, MessageSquare } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-600">Shivani Kondaparthy</h1>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-teal-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600">About</a>
            <a href="#skills" className="text-gray-700 hover:text-teal-600">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-teal-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600">Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-teal-600" onClick={toggleMenu}>Home</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-teal-600" onClick={toggleMenu}>About</a>
              <a href="#skills" className="block py-2 text-gray-700 hover:text-teal-600" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="block py-2 text-gray-700 hover:text-teal-600" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-teal-600" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Updated with profile image */}
      <section id="home" className="bg-gradient-to-r from-teal-600 to-emerald-500 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="mb-6 rounded-full border-4 border-white overflow-hidden h-40 w-40">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhDbs7GR7b_A_CRSSbJ8CE6RW5Vzk2ZBV2g&s" alt="Shivani Kondaparthy" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shivani Kondaparthy</h1>
          <h2 className="text-xl md:text-2xl mb-6">B.Tech 3rd Year CSE-B Section</h2>
          <p className="text-lg md:text-xl mb-8">Sreenidhi Institute of Science and Technology</p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-white text-teal-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300">Contact Me</a>
            <a href="#projects" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-teal-600 transition duration-300">View Projects</a>
          </div>
        </div>
      </section>

      {/* About Section - Updated with image */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">About Me</h2>
            <div className="w-16 h-1 bg-teal-600 mb-8"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-teal-50 p-4 rounded-lg">
                <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?semt=ais_hybrid&w=740" alt="Shivani studying" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Computer Science Engineering Student</h3>
              <p className="text-gray-600 mb-6">
                I'm a 3rd-year B.Tech CSE student at Sreenidhi Institute of Science and Technology with a passion for web development and database management. I enjoy creating intuitive, user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-600 mb-6">
                My academic journey has equipped me with strong foundations in various programming languages and technologies. I'm constantly learning and exploring new technologies to enhance my skills and create better solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#skills" className="text-teal-600 font-medium flex items-center">
                  My Skills <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">My Skills</h2>
            <div className="w-16 h-1 bg-teal-600 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">HTML5/CSS3</h3>
              </div>
              <p className="text-gray-600">Creating responsive and accessible web layouts with modern HTML5 and CSS3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">React.js</h3>
              </div>
              <p className="text-gray-600">Building interactive user interfaces with components and hooks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Tailwind CSS</h3>
              </div>
              <p className="text-gray-600">Crafting beautiful designs with utility-first CSS framework</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Bootstrap</h3>
              </div>
              <p className="text-gray-600">Creating responsive designs with popular CSS framework</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <Database className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">MySQL</h3>
              </div>
              <p className="text-gray-600">Designing and managing relational databases with SQL</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <FileCode2 className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">PHP</h3>
              </div>
              <p className="text-gray-600">Server-side scripting for dynamic web applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <Globe className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
              </div>
              <p className="text-gray-600">Full-stack development from front-end design to back-end implementation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <Database className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Database Management</h3>
              </div>
              <p className="text-gray-600">Designing, implementing, and optimizing database solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Updated with images */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">My Projects</h2>
            <div className="w-16 h-1 bg-teal-600 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-teal-100">
              <div className="h-48 overflow-hidden">
                <img src="https://img.freepik.com/free-vector/business-hand-drawn-e-commerce-landing-page_23-2149600513.jpg?semt=ais_hybrid&w=740" alt="E-Commerce Website" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">E-Commerce Website</h3>
                <p className="text-gray-600 mb-4">A fully responsive e-commerce platform built with React, PHP, and MySQL. Features include user authentication, product catalog, and shopping cart functionality.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">PHP</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">MySQL</span>
                </div>
                <a href="#" className="text-teal-600 font-medium flex items-center">
                  View Project <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-teal-100">
              <div className="h-48 overflow-hidden">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgszMbfyfij8Mem_RznXXLIMcMvb4J18VzoNC56qGrrhxlRwc6N6jaCDwqopxYkAPQJFFAinaavNkWJgzWc5aLn0VbPnCBhrY6Hzc_w5wR7WwvBi37SqP5ZAkAqbAsXcY7rAMpVPKYHqAgcOyrFXu5kiHp1QQLqMHXWdr22BFCYkI-nZKnyqqNXbnYN/w640-h328-rw/fees%20management%20system%20project.webp" alt="Student Management System" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Student Management System</h3>
                <p className="text-gray-600 mb-4">A comprehensive system for managing student data, attendance, and performance. Built with PHP, MySQL, and Bootstrap for the frontend.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">PHP</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">Bootstrap</span>
                </div>
                <a href="#" className="text-teal-600 font-medium flex items-center">
                  View Project <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-teal-100">
              <div className="h-48 overflow-hidden">
                <img src="data:image/jpeg;base64,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" alt="Personal Portfolio" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Personal Portfolio</h3>
                <p className="text-gray-600 mb-4">A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills. Features smooth scrolling and a clean design.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">JavaScript</span>
                </div>
                <a href="#" className="text-teal-600 font-medium flex items-center">
                  View Project <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced UI */}
      <section id="contact" className="py-16 bg-gradient-to-r from-teal-600 to-emerald-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <div className="w-16 h-1 bg-white mb-8"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-teal-600">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-teal-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p>949-488-4578</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-teal-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p>shivani.kondaparthy@student.snist.edu.in</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Code className="text-teal-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p>github.com/ShivaniKondaparthy</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Briefcase className="text-teal-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p>linkedin.com/in/shivanikondaparthy</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-teal-100 hover:bg-teal-200 text-teal-600 p-3 rounded-full transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-teal-100 hover:bg-teal-200 text-teal-600 p-3 rounded-full transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-teal-100 hover:bg-teal-200 text-teal-600 p-3 rounded-full transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-teal-100 hover:bg-teal-200 text-teal-600 p-3 rounded-full transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-teal-600">Send Me a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition duration-300 flex items-center">
                  Send Message
                  <MessageSquare className="ml-2" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Shivani Kondaparthy. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-teal-400 transition duration-300">
            Home
            </a>
            <a href="#" className="hover:text-teal-400 transition duration-300">
             about
            </a>
            <a href="#" className="hover:text-teal-400 transition duration-300">
              contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
