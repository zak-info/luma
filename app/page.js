"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Palette, Code, BookOpen, Award, Eye, Download, ExternalLink, Star, ArrowRight, Menu, X, Briefcase, Users, Clock, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'services', 'portfolio', 'skills', 'experience', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity Design",
      description: "Complete brand identity packages including logos, color palettes, typography, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography Selection"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Adobe Creative Suite",
      description: "Expert-level proficiency in all Adobe Creative applications for comprehensive design solutions.",
      features: ["Photoshop", "Illustrator", "InDesign", "After Effects"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "MS Office Training",
      description: "Professional training in Microsoft Office suite including Word, Excel, PowerPoint and more.",
      features: ["Word Processing", "Spreadsheet Analysis", "Presentation Design", "Database Management"]
    }
  ];

  const portfolioItems = [
    {
      category: "Brand Identity",
      title: "Luxury Restaurant Brand",
      description: "Complete brand identity for upscale dining establishment",
      image: "bg-gradient-to-br from-violet-400 to-violet-600",
      tags: ["Logo Design", "Brand Guidelines", "Menu Design"]
    },
    {
      category: "Logo Design",
      title: "Tech Startup Logo",
      description: "Modern, scalable logo for technology company",
      image: "bg-gradient-to-br from-violet-500 to-purple-600",
      tags: ["Logo", "Icon Design", "Brand Mark"]
    },
    {
      category: "Print Design",
      title: "Les Trassis Collection",
      description: "Traditional Algerian design elements in modern layouts",
      image: "bg-gradient-to-br from-violet-600 to-indigo-600",
      tags: ["Traditional", "Print", "Cultural Design"]
    },
    {
      category: "Digital Design",
      title: "Corporate Website Design",
      description: "Full website design with brand consistency",
      image: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
      tags: ["Web Design", "UI/UX", "Corporate"]
    },
    {
      category: "Brand Identity",
      title: "Fashion Brand Identity",
      description: "Elegant brand system for boutique fashion label",
      image: "bg-gradient-to-br from-indigo-500 to-violet-600",
      tags: ["Fashion", "Luxury", "Brand System"]
    },
    {
      category: "Educational",
      title: "MS Office Training Materials",
      description: "Comprehensive training guides and presentations",
      image: "bg-gradient-to-br from-violet-400 to-violet-700",
      tags: ["Training", "Education", "Templates"]
    }
  ];

  const skills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 98 },
    { name: "Adobe InDesign", level: 92 },
    { name: "Brand Strategy", level: 88 },
    { name: "Logo Design", level: 96 },
    { name: "Microsoft Word", level: 94 },
    { name: "Microsoft Excel", level: 90 },
    { name: "PowerPoint Design", level: 93 },
    { name: "Print Design", level: 89 },
    { name: "Digital Design", level: 87 }
  ];

  const testimonials = [
    {
      name: "Sarah Benali",
      role: "Marketing Director",
      company: "Algiers Tech Hub",
      quote: "Ahlem transformed our brand identity completely. Her attention to detail and understanding of modern design trends is exceptional.",
      rating: 5
    },
    {
      name: "Mohamed Krim",
      role: "Restaurant Owner",
      company: "Le Jardin Restaurant",
      quote: "The brand identity Ahlem created for our restaurant perfectly captures our vision. Professional, creative, and timely delivery.",
      rating: 5
    },
    {
      name: "Fatima Zouaoui",
      role: "Training Coordinator",
      company: "Business Institute",
      quote: "Ahlem's MS Office training sessions are comprehensive and engaging. Our team's productivity increased significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            Luma
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Services', 'Portfolio', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-violet-600 font-semibold'
                    : isScrolled ? 'text-gray-700 hover:text-violet-600' : 'text-white hover:text-violet-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-violet-600 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            {['About', 'Services', 'Portfolio', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Creative
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Designer
                  </span>
                </h1>
                <p className="text-xl text-violet-100 leading-relaxed">
                  Brand Identity Designer & Adobe Creative Expert from Algeria, specializing in logos, brand systems, and MS Office training.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-white text-violet-600 px-8 py-3 rounded-full font-semibold hover:bg-violet-50 transition-all duration-300 flex items-center gap-2"
                >
                  View Portfolio <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-violet-600 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full mx-auto relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                  <Palette className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate designer and educator from Algeria, dedicated to creating impactful visual identities and empowering others through technology training.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Ahlem Hamadi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Based in Algeria, I'm a creative professional specializing in brand identity design and digital education. With expertise across the entire Adobe Creative Suite, I help businesses establish compelling visual identities that resonate with their audiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My passion extends beyond design to education, where I teach Microsoft Office applications, empowering individuals and teams to maximize their productivity and create professional presentations and documents.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-violet-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-violet-600" />
                    <span className="font-semibold text-gray-900">Location</span>
                  </div>
                  <p className="text-gray-600">Algeria</p>
                </div>
                <div className="bg-violet-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-violet-600" />
                    <span className="font-semibold text-gray-900">Experience</span>
                  </div>
                  <p className="text-gray-600">5+ Years</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-violet-100 p-6 rounded-lg text-center">
                  <Award className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Brand Expert</h4>
                  <p className="text-sm text-gray-600">Complete brand identity solutions</p>
                </div>
                <div className="bg-violet-100 p-6 rounded-lg text-center">
                  <Code className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Adobe Master</h4>
                  <p className="text-sm text-gray-600">All Creative Suite applications</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-violet-100 p-6 rounded-lg text-center">
                  <BookOpen className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Educator</h4>
                  <p className="text-sm text-gray-600">MS Office training specialist</p>
                </div>
                <div className="bg-violet-100 p-6 rounded-lg text-center">
                  <Users className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Collaborator</h4>
                  <p className="text-sm text-gray-600">Client-focused approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design and training services to elevate your brand and enhance your team's capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center text-violet-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work spanning brand identity, logo design, and educational materials.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-48 ${item.image} flex items-center justify-center`}>
                  <Eye className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="text-violet-600 font-medium text-sm">{item.category}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional proficiency across design applications and educational tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-violet-600 font-medium">{skill.level}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-violet-500 to-violet-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional journey and key achievements in design and education.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-violet-50 p-8 rounded-xl border-l-4 border-violet-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Senior Brand Designer</h3>
                <span className="text-violet-600 font-medium">2020 - Present</span>
              </div>
              <p className="text-gray-600 mb-4">
                Leading brand identity projects for diverse clients across Algeria, creating comprehensive visual systems that drive business growth and brand recognition.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Designed 50+ complete brand identities</li>
                <li>• Specialized in traditional Algerian design elements (Les Trassis)</li>
                <li>• Managed multiple client projects simultaneously</li>
              </ul>
            </div>
            
            <div className="bg-violet-50 p-8 rounded-xl border-l-4 border-violet-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">MS Office Trainer</h3>
                <span className="text-violet-600 font-medium">2018 - Present</span>
              </div>
              <p className="text-gray-600 mb-4">
                Conducting professional training sessions in Microsoft Office applications, helping individuals and organizations improve productivity and document quality.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Trained 200+ professionals across various industries</li>
                <li>• Developed comprehensive training materials</li>
                <li>• Specialized in advanced Excel and PowerPoint techniques</li>
              </ul>
            </div>
            
            <div className="bg-violet-50 p-8 rounded-xl border-l-4 border-violet-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Freelance Designer</h3>
                <span className="text-violet-600 font-medium">2017 - 2020</span>
              </div>
              <p className="text-gray-600 mb-4">
                Built a strong foundation in design principles and client relations while working on diverse projects ranging from logos to complete brand systems.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Established client base and reputation</li>
                <li>• Mastered Adobe Creative Suite applications</li>
                <li>• Developed expertise in print and digital design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What clients say about working with me and the results we've achieved together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-violet-600 font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-violet-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto">
              Ready to elevate your brand or enhance your team's skills? Get in touch to discuss your project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-violet-100">ahlem.hamadi@email.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-violet-100">+213 XXX XXX XXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-violet-100">Algeria</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-violet-200 focus:outline-none focus:border-white"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-violet-200 focus:outline-none focus:border-white"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-violet-200 focus:outline-none focus:border-white"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-violet-200 focus:outline-none focus:border-white resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-white text-violet-600 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent mb-4">
                Ahlem Hamadi
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Creative designer and educator from Algeria, specializing in brand identity design and Microsoft Office training.
              </p>
              <div className="flex space-x-4">
                <div className="bg-violet-600 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="bg-violet-600 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="bg-violet-600 p-2 rounded-lg">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Brand Identity Design</li>
                <li>Logo Design</li>
                <li>Adobe Creative Suite</li>
                <li>MS Office Training</li>
                <li>Print Design</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-violet-400 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-violet-400 transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-violet-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-violet-400 transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Ahlem Hamadi. All rights reserved. | Crafted with passion in Algeria
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;