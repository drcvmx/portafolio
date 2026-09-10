"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traducciones
const translations = {
  en: {
    // Navigation
    "nav.home": "home",
    "nav.projects": "projects",
    "nav.about": "about",

    // Home page
    "home.intro": "if you imagine it, the right way, anything can be built. I'm a Fullstack developer. I'm passionate about soccer.l problems, improve logistics, and optimize workflows — all paired with modern, clean interfaces",
    "home.terminal.intro": "Hello, my name is Dante. I am a Fullstack Developer passionate about web design and programming",
    "home.learnMore": "Learn more about me",
    "home.featuredProjects": "Featured Projects",
    "home.viewAll": "View all",
    "home.technologies": "Technologies",

    // Projects page
    "projects.title": "Displaying projects directory. Select category to filter results.",
    "projects.allProjects": "All Projects",
    "projects.categoryAI": "AI & Data",
    "projects.categoryERP": "ERPs & Internal Systems",
    "projects.categoryEcommerce": "Industrial E-Commerce",
    "projects.categoryCorporate": "Corporate Presence",
    "projects.categoryBackend": "Backend",
    "projects.selfTaughtBadge": "Self-taught // Learning project in progress",
    "projects.webDevelopment": "Web Development",
    "projects.aiMachineLearning": "AI & Machine Learning",
    "projects.blockchain": "Blockchain",
    "projects.dataVisualization": "Data Visualization",
    "projects.arVr": "AR/VR",

    // Project details
    "project.backToProjects": "Back to projects",
    "project.viewOnGithub": "View on GitHub",
    "project.liveDemo": "Live Demo",
    "project.production": "Production",
    "project.overview": "Project Overview",
    "project.keyFeatures": "Key Features",
    "project.pauseSlideshow": "Pause slideshow",
    "project.playSlideshow": "Play slideshow",
    "project.viewProject": "View project",

    // About page
    "about.initProfile": "Initializing personal profile... Access granted. Loading bio data...",
    "about.bio":
      "Hey, I'm Dante. Full-stack Developer and Computer Engineer with 2+ years building efficient, modern digital solutions. if you can imagine it, I can build it. My week is split between creating and sometimes optimizing software systems, and my other big passion: playing soccer every weekend.",
    "about.downloadCV": "Download CV",
    "about.viewOnline": "View Online",
    "about.experienceTimeline": "Experience Timeline",
    "about.techStack": "Tech Stack",
    "about.contact": "Contact",
    "about.sendMessage": "Send Message",
    "about.sendEmail": "Send Email",
    "about.copyEmail": "Copy Email",
    "about.copiedToClipboard": "Copied to clipboard",
    "about.clipboardDesc": "has been copied to your clipboard.",
    "about.emailOpened": "Email client opened",
    "about.emailDesc": "Your default email client has been opened.",
    "about.messageSent": "Message sent!",
    "about.messageDesc": "Thank you for your message. I'll get back to you soon.",
    "about.name": "name",
    "about.email": "email",
    "about.message": "message",
    "about.enterName": "Enter your name",
    "about.enterEmail": "Enter your email",
    "about.enterMessage": "Enter your message",

    // Experience - Updated with real experience
    "exp.digimex.title": "Full-Stack Developer",
    "exp.digimex.company": "DIGIMEX",
    "exp.digimex.period": "Dec 2025 - Present",
    "exp.digimex.desc": "Developed multiple logistics, operations, and commercial web solutions using Next.js, React, and TypeScript. Built B2B storefronts with Shopify integrations, product catalogs with CRUD workflows, Supabase-backed systems, and checkout flows connected to Shopify and PayPal. Also used AI-assisted tools to accelerate prototyping and delivery.",

    "exp.fyttsa.title": "Full-Stack Developer",
    "exp.fyttsa.company": "Grupo Fyttsa",
    "exp.fyttsa.period": "Aug 2025 - Nov 2025",
    "exp.fyttsa.desc": "Developed the 'Kraken' enterprise ERP. Built a secure multitenant architecture and optimized intensive API consumption from a PHP backend, improving response times and overall system stability.",

    "exp.sozu.title": "Full-Stack Developer (Professional Internship)",
    "exp.sozu.company": "Grupo Inmobiliario Sozu",
    "exp.sozu.period": "Feb 2025 - Aug 2025",
    "exp.sozu.desc": "Participated in the technological modernization of the internal real estate management system. Migrated legacy functionalities to a modern React and TypeScript architecture, integrating Supabase for real-time data storage.",

    "exp.freelance.title": "Software Developer (Social Service)",
    "exp.freelance.company": "Social Service",
    "exp.freelance.period": "Aug 2024 - Nov 2024",
    "exp.freelance.desc": "Developed a video transcription analysis engine using Python and NLP, with a Next.js interface. Worked on the processing pipeline, data analysis, and the technical integration required to turn video content into usable information.",

    "exp.university.title": "B.S. in Computer Engineering",
    "exp.university.company": "Universidad Autónoma del Estado de México",
    "exp.university.period": "2021 - Present",
    "exp.university.desc": "Pursuing a degree in Computer Engineering with a focus on software architecture, concurrency, and systems engineering, building a strong foundation in computer science and advanced programming.",

    // Footer
    "footer.allRightsReserved": "All rights reserved",
    "footer.builtWith": "Built with",

    // Projects data
    "projects.aisuite.desc": "100% on-premise B2B AI Suite with GPU-accelerated processing. Extracts, transcribes, and reasons over legal contracts and audio using local LLMs to ensure Zero Data Leakage (Offline Privacy).",

    "projects.pos.desc": "POS ecosystem powered by an autonomous AI Agent that manages direct sales to the cart in real-time.",

    "projects.noteDrcv.desc": "Layered FastAPI backend for a productivity platform, with JWT authentication, PostgreSQL persistence, SQLAlchemy repositories, Pydantic validation, and password recovery by email.",

    "projects.battlekart.desc": "Complete gamification and loyalty system with admin panel for rewards and customer management.",

    "projects.catalogo.desc": "Multi-branch catalog system with inventory management and premium UX.",

    "projects.balazhi.desc": "Premium luxury materials showcase.",

    "projects.greenAlchemy.desc": "Logistics Management System with architecture to improve internal company workflows.",

    "projects.one.desc": "Premium holistic platform for personal wellness and deep spiritual connection.",

    "projects.probin.desc": "Premium platform for real estate development showcase and comprehensive interactive CRM management.",

    "projects.winpot.desc": "High-performance multi-tenant CMS for dynamic casino management and gamified content.",

    "projects.seprytec.desc": "Modern website for a private security company.",
    "projects.delincuencia.desc": "Full-stack penitentiary management system with Next.js, Express, Oracle Database, JWT authentication, role-based permissions, and an Oracle Cloud deployment architecture.",
    "projects.puntodeventa.desc": "Modular multi-tenant POS backend built with NestJS and PostgreSQL, supporting catalogs, inventory, orders, payments, restaurant operations, chatbot integrations, and WhatsApp tickets.",

    "projects.greekos.desc": "Cinematic editorial landing page for a premium Mediterranean Greek frozen yogurt brand with 6 locations across Mexico.",

    "projects.jrlMexico.desc": "Hybrid e-commerce platform for Mexico's leading professional barbering tools brand, with Supabase catalog and Shopify Checkout integration.",

    "projects.drcvCompany.desc": "Modern corporate website designed to boost businesses' online presence.",

    "projects.youtubeTranscribe.desc": "Web application that extracts and analyzes YouTube video content.",

    // Common
    "common.loading": "Loading...",
    "common.title": "title",
    "common.category": "category",
    "common.period": "period",
    "common.description": "description",
    "common.stack": "stack",
  },
  es: {
    // Navigation
    "nav.home": "inicio",
    "nav.projects": "proyectos",
    "nav.about": "acerca de",

    // Home page
    "home.intro":
      "si lo imaginas, de la manera correcta, todo se puede hacer. Soy un desarrollador Fullstack. Me apasiona el futbol y los deportes.",
    "home.terminal.intro": "Hola, mi nombre es Dante. Soy un desarrollador Fullstack apasionado por el diseño web y la programación",
    "home.learnMore": "Conoce más sobre mí",
    "home.featuredProjects": "Proyectos Destacados",
    "home.viewAll": "Ver todos",
    "home.technologies": "Tecnologías",

    // Projects page
    "projects.title": "Mostrando directorio de proyectos. Selecciona categoría para filtrar resultados.",
    "projects.allProjects": "Todos los Proyectos",
    "projects.categoryAI": "IA & Datos",
    "projects.categoryERP": "ERPs & Sistemas Internos",
    "projects.categoryEcommerce": "E-Commerce Industrial",
    "projects.categoryCorporate": "Presencia Corporativa",
    "projects.categoryBackend": "Backend",
    "projects.selfTaughtBadge": "Autodidacta // Proyecto de aprendizaje en evolución",
    "projects.webDevelopment": "Desarrollo Web",
    "projects.aiMachineLearning": "IA y Aprendizaje Automático",
    "projects.blockchain": "Blockchain",
    "projects.dataVisualization": "Visualización de Datos",
    "projects.arVr": "RA/RV",

    // Project details
    "project.backToProjects": "Volver a proyectos",
    "project.viewOnGithub": "Ver en GitHub",
    "project.liveDemo": "Demo en Vivo",
    "project.production": "Producción",
    "project.overview": "Resumen del Proyecto",
    "project.keyFeatures": "Características Principales",
    "project.pauseSlideshow": "Pausar presentación",
    "project.playSlideshow": "Reproducir presentación",
    "project.viewProject": "Ver proyecto",

    // About page
    "about.initProfile": "Inicializando perfil personal... Acceso concedido. Cargando datos biográficos...",
    "about.bio":
      "Hola, soy Dante. Desarrollador Full-stack e Ingeniero en Computación con más de 2 años de experiencia creando soluciones digitales eficientes y modernas. si lo imaginas, lo puedo desarrollar. Mi semana se divide entre crear y a veces optimizar sistemas de software y mi otra gran pasión: jugar al fútbol todos los fines de semana.",
    "about.downloadCV": "Descargar CV",
    "about.viewOnline": "Ver en Línea",
    "about.experienceTimeline": "Línea de Tiempo de Experiencia",
    "about.techStack": "Stack Tecnológico",
    "about.contact": "Contacto",
    "about.sendMessage": "Enviar Mensaje",
    "about.sendEmail": "Enviar Email",
    "about.copyEmail": "Copiar Email",
    "about.copiedToClipboard": "Copiado al portapapeles",
    "about.clipboardDesc": "ha sido copiado a tu portapapeles.",
    "about.emailOpened": "Cliente de correo abierto",
    "about.emailDesc": "Tu cliente de correo predeterminado ha sido abierto.",
    "about.messageSent": "¡Mensaje enviado!",
    "about.messageDesc": "Gracias por tu mensaje. Te responderé pronto.",
    "about.name": "nombre",
    "about.email": "correo",
    "about.message": "mensaje",
    "about.enterName": "Ingresa tu nombre",
    "about.enterEmail": "Ingresa tu correo",
    "about.enterMessage": "Ingresa tu mensaje",

    // Experience - Updated with real experience
    "exp.digimex.title": "Desarrollador Full-Stack",
    "exp.digimex.company": "DIGIMEX",
    "exp.digimex.period": "Dic 2025 - Presente",
    "exp.digimex.desc": "Desarrollé múltiples soluciones web de logística, operaciones y comercio usando Next.js, React y TypeScript. Construí sitios B2B con integraciones de Shopify, catálogos de productos con flujos CRUD, sistemas respaldados por Supabase y checkouts conectados con Shopify y PayPal. También utilicé herramientas asistidas por IA para acelerar el prototipado y la entrega.",

    "exp.fyttsa.title": "Desarrollador Full-Stack",
    "exp.fyttsa.company": "Grupo Fyttsa",
    "exp.fyttsa.period": "Ago 2025 - Nov 2025",
    "exp.fyttsa.desc": "Desarrollo del ERP Kraken. Construí una arquitectura multitenant para soportar múltiples clientes y optimicé el consumo de APIs desde un backend en PHP, mejorando los tiempos de respuesta y la estabilidad del sistema.",

    "exp.sozu.title": "Desarrollador Full-Stack (Prácticas Profesionales)",
    "exp.sozu.company": "Grupo Inmobiliario Sozu",
    "exp.sozu.period": "Feb 2025 - Ago 2025",
    "exp.sozu.desc": "Participé en la modernización tecnológica del sistema interno de gestión inmobiliaria. Migré funcionalidades de sistemas heredados hacia una arquitectura moderna basada en React y TypeScript, integrando Supabase.",

    "exp.freelance.title": "Desarrollador de Software (Servicio Social)",
    "exp.freelance.company": "Servicio Social",
    "exp.freelance.period": "Ago 2024 - Nov 2024",
    "exp.freelance.desc": "Desarrollé un motor de análisis de transcripciones de video con Python y NLP, acompañado de una interfaz en Next.js. Trabajé en el procesamiento, análisis de datos y la integración técnica necesaria para convertir contenido audiovisual en información utilizable.",

    "exp.university.title": "Ingeniería en Computación",
    "exp.university.company": "Universidad Autónoma del Estado de México",
    "exp.university.period": "2021 - Presente",
    "exp.university.desc": "Formación profesional en Ingeniería en Computación, con enfoque en arquitectura de software y sistemas escalables, desarrollando bases sólidas en ciencias de la computación.",

    // Footer
    "footer.allRightsReserved": "Todos los derechos reservados",
    "footer.builtWith": "Construido con",

    // Projects data
    "projects.aisuite.desc": "AI Suite B2B 100% on-premise con procesamiento acelerado por GPU. Extrae, transcribe y razona sobre contratos legales y audios utilizando LLMs locales para garantizar Cero Fugas de Datos (Offline Privacy).",

    "projects.pos.desc": "Ecosistema POS impulsado por un Agente IA autónomo que gestiona ventas directas al carrito en tiempo real.",

    "projects.noteDrcv.desc": "Backend por capas para una plataforma de productividad, construido con FastAPI, JWT, PostgreSQL, repositorios SQLAlchemy, validación Pydantic y recuperación de contraseña por email.",

    "projects.battlekart.desc": "Sistema completo de gamificación y lealtad con panel de administración para gestión de recompensas y clientes.",

    "projects.catalogo.desc": "Sistema de catálogo multi-sucursal con gestión de inventario y UX de alta gama.",

    "projects.balazhi.desc": "Exhibición premium de materiales de lujo.",

    "projects.greenAlchemy.desc": "Sistema de Gestión de Logística con arquitectura para mejorar flujos de trabajo dentro la empresa.",

    "projects.one.desc": "Plataforma holística premium para el bienestar personal y la conexión espiritual profunda.",

    "projects.probin.desc": "Plataforma premium para la exhibición de desarrollos inmobiliarios y gestión integral interactiva de CRM.",

    "projects.winpot.desc": "CMS multi-tenant de alto rendimiento para la gestión dinámica de casinos y contenido gamificado.",

    "projects.seprytec.desc": "Sitio web moderno para una empresa de seguridad privada.",
    "projects.delincuencia.desc": "Sistema full-stack de gestión penitenciaria con Next.js, Express, Oracle Database, autenticación JWT, permisos por roles y arquitectura de despliegue en Oracle Cloud.",
    "projects.puntodeventa.desc": "Backend modular multi-tenant para un punto de venta con NestJS y PostgreSQL, con catálogo, inventario, pedidos, pagos, operaciones de restaurante, chatbot y tickets por WhatsApp.",

    "projects.greekos.desc": "Landing page editorial cinematográfica para una marca premium de yogurt helado griego mediterráneo con 6 ubicaciones en México.",

    "projects.jrlMexico.desc": "Plataforma e-commerce híbrida para la marca líder de herramientas de barbería profesional en México, con catálogo en Supabase e integración a Shopify Checkout.",

    "projects.drcvCompany.desc": "Sitio web corporativo moderno diseñado para impulsar la presencia en línea de las empresas.",

    "projects.youtubeTranscribe.desc": "Aplicación web que extrae y analiza el contenido de videos de YouTube.",

    // Common
    "common.loading": "Cargando...",
    "common.title": "título",
    "common.category": "categoría",
    "common.period": "período",
    "common.description": "descripción",
    "common.stack": "tecnologías",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    // Cargar idioma guardado del localStorage
    const savedLanguage = localStorage.getItem("portfolio-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
