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
      title: "Conception d'Identité de Marque",
      description: "Packages complets d'identité de marque incluant logos, palettes de couleurs, typographie et guides de marque.",
      features: ["Création de Logo", "Guides de Marque", "Systèmes de Couleurs", "Sélection Typographique"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Suite Adobe Creative",
      description: "Maîtrise experte de toutes les applications Adobe Creative pour des solutions de design complètes.",
      features: ["Photoshop", "Illustrator", "InDesign", "After Effects"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Formation MS Office",
      description: "Formation professionnelle en suite Microsoft Office incluant Word, Excel, PowerPoint et plus.",
      features: ["Traitement de Texte", "Analyse de Feuilles de Calcul", "Conception de Présentations", "Gestion de Base de Données"]
    }
  ];

  const portfolioItems = [
    {
      category: "Identité de Marque",
      title: "Marque de Restaurant de Luxe",
      description: "Identité de marque complète pour établissement gastronomique haut de gamme",
      image: "bg-gradient-to-br from-violet-300 to-white",
      tags: ["Création Logo", "Guide de Marque", "Design Menu"]
    },
    {
      category: "Création de Logo",
      title: "Logo Startup Technologique",
      description: "Logo moderne et évolutif pour entreprise technologique",
      image: "bg-gradient-to-br from-violet-400 to-white",
      tags: ["Logo", "Design d'Icône", "Marque"]
    },
    {
      category: "Design d'Impression",
      title: "Collection Les Trassis",
      description: "Éléments de design algériens traditionnels dans des mises en page modernes",
      image: "bg-gradient-to-br from-violet-500 to-white",
      tags: ["Traditionnel", "Impression", "Design Culturel"]
    },
    {
      category: "Design Numérique",
      title: "Design de Site Web d'Entreprise",
      description: "Design complet de site web avec cohérence de marque",
      image: "bg-gradient-to-br from-violet-600 to-white",
      tags: ["Web Design", "UI/UX", "Corporate"]
    },
    {
      category: "Identité de Marque",
      title: "Identité de Marque de Mode",
      description: "Système de marque élégant pour label de mode boutique",
      image: "bg-gradient-to-br from-violet-400 to-white",
      tags: ["Mode", "Luxe", "Système de Marque"]
    },
    {
      category: "Éducatif",
      title: "Matériel de Formation MS Office",
      description: "Guides de formation et présentations complets",
      image: "bg-gradient-to-br from-violet-500 to-white",
      tags: ["Formation", "Éducation", "Modèles"]
    }
  ];

  const skills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 98 },
    { name: "Adobe InDesign", level: 92 },
    { name: "Stratégie de Marque", level: 88 },
    { name: "Création de Logo", level: 96 },
    { name: "Microsoft Word", level: 94 },
    { name: "Microsoft Excel", level: 90 },
    { name: "Design PowerPoint", level: 93 },
    { name: "Design d'Impression", level: 89 },
    { name: "Design Numérique", level: 87 }
  ];

  const testimonials = [
    {
      name: "Sarah Benali",
      role: "Directrice Marketing",
      company: "Algiers Tech Hub",
      quote: "Ahlem a complètement transformé notre identité de marque. Son attention aux détails et sa compréhension des tendances de design modernes sont exceptionnelles.",
      rating: 5
    },
    {
      name: "Mohamed Krim",
      role: "Propriétaire de Restaurant",
      company: "Le Jardin Restaurant",
      quote: "L'identité de marque qu'Ahlem a créée pour notre restaurant capture parfaitement notre vision. Professionnelle, créative et livraison dans les délais.",
      rating: 5
    },
    {
      name: "Fatima Zouaoui",
      role: "Coordinatrice de Formation",
      company: "Institut Commercial",
      quote: "Les sessions de formation MS Office d'Ahlem sont complètes et engageantes. La productivité de notre équipe a considérablement augmenté.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent">
            Ahlem Hamadi
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['À Propos', 'Services', 'Portfolio', 'Compétences', 'Expérience', 'Contact'].map((item, index) => {
              const sectionIds = ['about', 'services', 'portfolio', 'skills', 'experience', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className={`transition-colors duration-300 ${
                    activeSection === sectionIds[index]
                      ? 'text-violet-600 font-semibold'
                      : isScrolled ? 'text-gray-700 hover:text-violet-600' : 'text-white hover:text-violet-200'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-violet-500 to-violet-600 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t">
            {['À Propos', 'Services', 'Portfolio', 'Compétences', 'Expérience', 'Contact'].map((item, index) => {
              const sectionIds = ['about', 'services', 'portfolio', 'skills', 'experience', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-violet-50 hover:to-white hover:text-violet-600 transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative bg-gradient-to-br from-violet-600 via-violet-500 to-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Créatrice
                  <span className="block bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent">
                    Visuelle
                  </span>
                </h1>
                <p className="text-xl text-violet-50 leading-relaxed">
                  Conceptrice d'identité de marque et experte Adobe Creative d'Algérie, spécialisée dans les logos, systèmes de marque et formation MS Office.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-white text-violet-600 px-8 py-3 rounded-full font-semibold hover:bg-violet-50 transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  Voir Portfolio <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-violet-600 transition-all duration-300"
                >
                  Me Contacter
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-white/30 to-violet-400/50 rounded-full mx-auto relative overflow-hidden backdrop-blur-sm">
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
      <section id="about" className="py-20 bg-gradient-to-br from-white to-violet-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent mb-4">À Propos de Moi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créatrice passionnée et formatrice d'Algérie, dédiée à la création d'identités visuelles impactantes et à l'autonomisation par la formation technologique.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent">Ahlem Hamadi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Basée en Algérie, je suis une professionnelle créative spécialisée dans la conception d'identités de marque et l'éducation numérique. Avec une expertise dans toute la Suite Adobe Creative, j'aide les entreprises à établir des identités visuelles convaincantes qui résonnent avec leurs audiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ma passion s'étend au-delà du design vers l'éducation, où j'enseigne les applications Microsoft Office, donnant aux individus et équipes les moyens de maximiser leur productivité et créer des présentations et documents professionnels.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-violet-100 to-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-violet-600" />
                    <span className="font-semibold text-gray-900">Localisation</span>
                  </div>
                  <p className="text-gray-600">Algérie</p>
                </div>
                <div className="bg-gradient-to-br from-violet-100 to-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-violet-600" />
                    <span className="font-semibold text-gray-900">Expérience</span>
                  </div>
                  <p className="text-gray-600">5+ Années</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-violet-200 to-white p-6 rounded-lg text-center shadow-md">
                  <Award className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Experte en Marque</h4>
                  <p className="text-sm text-gray-600">Solutions complètes d'identité de marque</p>
                </div>
                <div className="bg-gradient-to-br from-violet-200 to-white p-6 rounded-lg text-center shadow-md">
                  <Code className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Maître Adobe</h4>
                  <p className="text-sm text-gray-600">Toutes les applications Creative Suite</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-violet-200 to-white p-6 rounded-lg text-center shadow-md">
                  <BookOpen className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Formatrice</h4>
                  <p className="text-sm text-gray-600">Spécialiste formation MS Office</p>
                </div>
                <div className="bg-gradient-to-br from-violet-200 to-white p-6 rounded-lg text-center shadow-md">
                  <Users className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Collaboratrice</h4>
                  <p className="text-sm text-gray-600">Approche centrée client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-violet-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Services complets de design et formation pour élever votre marque et améliorer les capacités de votre équipe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-violet-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-violet-100 to-white w-16 h-16 rounded-full flex items-center justify-center text-violet-600 mb-6 shadow-md">
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
      <section id="portfolio" className="py-20 bg-gradient-to-br from-white to-violet-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une vitrine de mes travaux récents couvrant l'identité de marque, la création de logos et le matériel éducatif.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-violet-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-48 ${item.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent"></div>
                  <Eye className="w-12 h-12 text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" />
                </div>
                <div className="p-6">
                  <span className="text-violet-600 font-medium text-sm">{item.category}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gradient-to-r from-violet-100 to-white text-violet-700 px-3 py-1 rounded-full text-xs font-medium">
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
      <section id="skills" className="py-20 bg-gradient-to-br from-violet-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent mb-4">Compétences & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrise professionnelle des applications de design et outils éducatifs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-violet-50 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-violet-600 font-medium">{skill.level}%</span>
                </div>
                <div className="bg-gradient-to-r from-gray-200 to-violet-100 rounded-full h-2">
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
      <section id="experience" className="py-20 bg-gradient-to-br from-white to-violet-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent mb-4">Expérience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Parcours professionnel et réalisations clés en design et éducation.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-xl border-l-4 border-violet-600 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Designer de Marque Senior</h3>
                <span className="text-violet-600 font-medium">2020 - Présent</span>
              </div>
              <p className="text-gray-600 mb-4">
                Direction de projets d'identité de marque pour des clients diversifiés à travers l'Algérie, créant des systèmes visuels complets qui stimulent la croissance des entreprises et la reconnaissance de marque.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Conception de plus de 50 identités de marque complètes</li>
                <li>• Spécialisée dans les éléments de design algériens traditionnels (Les Trassis)</li>
                <li>• Gestion simultanée de multiples projets clients</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-xl border-l-4 border-violet-600 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Formatrice MS Office</h3>
                <span className="text-violet-600 font-medium">2018 - Présent</span>
              </div>
              <p className="text-gray-600 mb-4">
                Conduite de sessions de formation professionnelle en applications Microsoft Office, aidant les individus et organisations à améliorer leur productivité et la qualité de leurs documents.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Formation de plus de 200 professionnels dans diverses industries</li>
                <li>• Développement de matériel de formation complet</li>
                <li>• Spécialisée dans les techniques avancées Excel et PowerPoint</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-xl border-l-4 border-violet-600 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Designer Freelance</h3>
                <span className="text-violet-600 font-medium">2017 - 2020</span>
              </div>
              <p className="text-gray-600 mb-4">
                Construction d'une base solide en principes de design et relations clients tout en travaillant sur des projets diversifiés allant des logos aux systèmes de marque complets.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Établissement d'une base de clients et d'une réputation</li>
                <li>• Maîtrise des applications Adobe Creative Suite</li>
                <li>• Développement d'expertise en design imprimé et numérique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-violet-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que disent les clients de notre collaboration et les résultats que nous avons obtenus ensemble.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-violet-50 p-8 rounded-xl shadow-lg">
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
      <section id="contact" className="py-20 bg-gradient-to-br from-violet-600 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Travaillons Ensemble</h2>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto">
              Prête à élever votre marque ou améliorer les compétences de votre équipe ? Contactez-moi pour discuter de votre projet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4"></div>
              </div>
              </div>
              </div>
              </section>
              </div>
  )
}

export default Portfolio;
              