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
    "home.intro": "if you imagine it, the right way, anything can be built. I'm a Fullstack developer. I'm passionate about soccer. I build systems that solve real problems, improve logistics, and optimize workflows — all paired with modern, clean interfaces.",
    "home.terminal.intro": "Hello, my name is Dante. I am a Fullstack Developer passionate about web design and programming",
    "home.learnMore": "Learn more about me",
    "home.featuredProjects": "Featured Projects",
    "home.viewAll": "View all",
    "home.technologies": "Technologies",

    // Projects page
    "projects.title": "Displaying projects directory. Select category to filter results.",
    "projects.allProjects": "All Projects",
    "projects.staticWeb": "Static Web",
    "projects.webApp": "Web App",
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
      "Hey, I'm Dante. Full-stack Developer and Computer Engineer with 3+ years building efficient, modern digital solutions. if you can imagine it, I can build it. My week is split between creating and sometimes optimizing software systems, and my other big passion: playing soccer every weekend.",
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
    "exp.digimex.desc": "Architected an internal logistics system and a B2B catalog platform using Next.js, React, and TypeScript. Integrated Supabase for real-time synchronization, built Edge Functions for workflow automation, and optimized the development cycle using AI-assisted tools.",

    "exp.fyttsa.title": "Full-Stack Developer",
    "exp.fyttsa.company": "Grupo Fyttsa",
    "exp.fyttsa.period": "Aug 2025 - Nov 2025",
    "exp.fyttsa.desc": "Developed the 'Kraken' enterprise ERP. Built a secure multitenant architecture and optimized intensive API consumption from a PHP backend, improving response times and overall system stability.",

    "exp.sozu.title": "Full-Stack Developer",
    "exp.sozu.company": "Grupo Inmobiliario Sozu",
    "exp.sozu.period": "Sep 2024 - Apr 2025",
    "exp.sozu.desc": "Participated in the technological modernization of the internal real estate management system. Migrated legacy functionalities to a modern React and TypeScript architecture, integrating Supabase for real-time data storage.",

    "exp.freelance.title": "Software Developer (Contract Projects)",
    "exp.freelance.company": "Remote",
    "exp.freelance.period": "Jan 2023 - Present",
    "exp.freelance.desc": "Developed an NLP video transcription analysis system using Python (Flask) and Next.js (General Motors). Led the frontend development for Seprytec, ensuring strict data validation using React Hook Form and Zod with TypeScript.",

    "exp.university.title": "B.S. in Computer Engineering",
    "exp.university.company": "Universidad Autónoma del Estado de México",
    "exp.university.period": "2021 - Present",
    "exp.university.desc": "Pursuing a degree in Computer Engineering with a focus on software architecture, concurrency, and systems engineering, building a strong foundation in computer science and advanced programming.",

    // Footer
    "footer.allRightsReserved": "All rights reserved",
    "footer.builtWith": "Built with",

    // Projects data
    "projects.aisuite.desc": "Zero-cost, 100% cloud-free corporate Natural Language Processing (NLP).",
    "projects.aisuite.longDesc": "The Problem: Corporations, law firms, and senior executives face a bottleneck. They need AI to audit hours of meetings and hundreds of contracts, but cannot send that confidential data to public APIs due to security risks. I present the Solution.",

    "projects.pos.desc": "POS ecosystem powered by an autonomous AI Agent that manages direct sales to the cart in real-time.",
    "projects.pos.longDesc": "The Problem: The retail e-commerce industry loses sales using generic 'FAQ' chatbots that frustrate customers by sending useless links. I present the Solution: An Intelligent Retail ecosystem starring 'Miboot', an AI Agent that doesn't just talk — it executes backend tools. It reads user intent, verifies real stock in the database, and adds products directly to the cart (Zero-Click Conversion). Built on a Multi-Tenant architecture and powered by locally-run LLMs, ensuring zero cost per token and absolute data sovereignty for the store.",

    "projects.battlekart.desc": "Complete gamification and loyalty system with admin panel for rewards and customer management.",
    "projects.battlekart.longDesc": "An impressive frontend loyalty control solution powered by gamification mechanics. It facilitates customer retention through a VIP tier system, annual memberships, and redeemable discount coupons. The project features a database simulation module with LocalStorage persistence for maximum speed demos without backend dependency. Also includes a virtual POS Terminal for custom redemptions and real-time race tracking.",

    "projects.catalogo.desc": "Multi-branch catalog system with inventory management and premium UX.",
    "projects.catalogo.longDesc": "A digital platform optimized for viewing and managing premium catalogs across multiple geographic locations. Integrates a complete admin panel with local persistence for agile management of brands, categories, and variants.",

    "projects.balazhi.desc": "Premium luxury materials showcase.",
    "projects.balazhi.longDesc": "Balazhi Stone is a sophisticated web platform designed for the exhibition and distribution of sintered stones, quartz, and high-end porcelain in Mexico. The project focuses on a minimalist 'Premium Dark' aesthetic with golden accents.",

    "projects.greenAlchemy.desc": "Logistics Management System with architecture to improve internal company workflows.",
    "projects.greenAlchemy.longDesc": "An advanced logistics management system that centralizes sales, treasury, and logistics workflows in an elegant and functional interface. Implements an autonomous architecture based on demoStorage to ensure full persistence and operability.",

    "projects.one.desc": "Premium holistic platform for personal wellness and deep spiritual connection.",
    "projects.one.longDesc": "A comprehensive digital experience that merges a healing crystals boutique, a spiritual training center, and a catalog of therapies and sacred retreats. Designed with elegant minimalist aesthetics, it offers smooth parallax navigation and local data persistence.",

    "projects.probin.desc": "Premium platform for real estate development showcase and comprehensive interactive CRM management.",
    "projects.probin.longDesc": "A high-level frontend solution combining an immersive portal for presenting multiple real estate projects with a powerful admin panel. Allows agents to manage leads, appointments, client profiles, campaigns, and operational closing checklists. Powered by a LocalStorage-based MockDB for ultra-fast sales demos, offline data persistence, and smooth visual experience.",

    "projects.winpot.desc": "High-performance multi-tenant CMS for dynamic casino management and gamified content.",
    "projects.winpot.longDesc": "A robust solution for casino networks that centralizes the administration of multiple brand identities in a single technical core. Implements an atomic design system and tenant-based architecture to deliver personalized experiences.",

    "projects.seprytec.desc": "Modern website for a private security company.",
    "projects.seprytec.longDesc": "Modern website for a private security company. Designed to instill trust through intuitive design and smooth navigation.",

    "projects.drcvCompany.desc": "Modern corporate website designed to boost businesses' online presence.",
    "projects.drcvCompany.longDesc": "A modern corporate website designed to boost businesses' online presence. Optimized for efficiency and user experience, using Astro for performance and Vue.js for interactivity.",

    "projects.youtubeTranscribe.desc": "Web application that extracts and analyzes YouTube video content.",
    "projects.youtubeTranscribe.longDesc": "Web application that extracts and analyzes YouTube video content. Uses a Python backend to get transcriptions and a language model (Ollama) to process and summarize text.",

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
      "si lo imaginas, de la manera correcta, todo se puede hacer. Soy un desarrollador Fullstack. Me apasiona el futbol. Crear sistemas que resuelven problemas reales, mejoran la logística y optimizan procesos en conjunto de interfaces modernas y estéticas.",
    "home.terminal.intro": "Hola, mi nombre es Dante. Soy un desarrollador Fullstack apasionado por el diseño web y la programación",
    "home.learnMore": "Conoce más sobre mí",
    "home.featuredProjects": "Proyectos Destacados",
    "home.viewAll": "Ver todos",
    "home.technologies": "Tecnologías",

    // Projects page
    "projects.title": "Mostrando directorio de proyectos. Selecciona categoría para filtrar resultados.",
    "projects.allProjects": "Todos los Proyectos",
    "projects.staticWeb": "Web Estática",
    "projects.webApp": "Aplicación Web",
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
      "Hola, soy Dante. Desarrollador Full-stack e Ingeniero en Computación con más de 3 años de experiencia creando soluciones digitales eficientes y modernas. si lo imaginas, lo puedo desarrollar. Mi semana se divide entre crear y a veces optimizar sistemas de software y mi otra gran pasión: jugar al fútbol todos los fines de semana.",
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
    "exp.digimex.desc": "Diseñé y desarrollé un sistema de logística interna y plataforma B2B usando Next.js, React y TypeScript. Integré Supabase, construí Edge Functions y optimicé el flujo de desarrollo utilizando herramientas de IA para acelerar prototipos.",

    "exp.fyttsa.title": "Desarrollador Full-Stack",
    "exp.fyttsa.company": "Grupo Fyttsa",
    "exp.fyttsa.period": "Ago 2025 - Nov 2025",
    "exp.fyttsa.desc": "Desarrollo del ERP Kraken. Construí una arquitectura multitenant para soportar múltiples clientes y optimicé el consumo de APIs desde un backend en PHP, mejorando los tiempos de respuesta y la estabilidad del sistema.",

    "exp.sozu.title": "Desarrollador Full-Stack",
    "exp.sozu.company": "Grupo Inmobiliario Sozu",
    "exp.sozu.period": "Sep 2024 - Abr 2025",
    "exp.sozu.desc": "Participé en la modernización tecnológica del sistema interno de gestión inmobiliaria. Migré funcionalidades de sistemas heredados hacia una arquitectura moderna basada en React y TypeScript, integrando Supabase.",

    "exp.freelance.title": "Software Developer (Proyectos por Contrato)",
    "exp.freelance.company": "Remoto",
    "exp.freelance.period": "Ene 2023 - Presente",
    "exp.freelance.desc": "Desarrollé un sistema de análisis de transcripciones de video con Python y NLP para General Motors, con interfaz en Next.js. Lideré el desarrollo web de Seprytec, asegurando validación estricta con Zod y TypeScript.",

    "exp.university.title": "Ingeniería en Computación",
    "exp.university.company": "Universidad Autónoma del Estado de México",
    "exp.university.period": "2021 - Presente",
    "exp.university.desc": "Formación profesional en Ingeniería en Computación, con enfoque en arquitectura de software y sistemas escalables, desarrollando bases sólidas en ciencias de la computación.",

    // Footer
    "footer.allRightsReserved": "Todos los derechos reservados",
    "footer.builtWith": "Construido con",

    // Projects data
    "projects.aisuite.desc": "Procesamiento de Lenguaje Natural (NLP) corporativo de costo cero y 100% libre de la nube.",
    "projects.aisuite.longDesc": "El Problema: Las corporaciones, firmas legales y altos ejecutivos enfrentan un cuello de botella. Necesitan IA para auditar horas de reuniones y cientos de contratos, pero no pueden enviar esos datos confidenciales a APIs públicas por riesgos de seguridad. Presento la Solución.",

    "projects.pos.desc": "Ecosistema POS impulsado por un Agente IA autónomo que gestiona ventas directas al carrito en tiempo real.",
    "projects.pos.longDesc": "El Problema: La industria del retail e-commerce pierde ventas usando chatbots genéricos de 'preguntas frecuentes' que frustran al cliente enviando enlaces inútiles. Presento la Solución: Un ecosistema de Retail Inteligente protagonizado por 'Miboot', un Agente IA que no solo conversa, sino que ejecuta herramientas del backend. Lee la intención del usuario, verifica el stock real en la base de datos y añade los productos directamente al carrito (Zero-Click Conversion). Diseñado sobre una arquitectura Multi-Tenant y potenciado por LLMs de ejecución local, garantizando cero costo por token y soberanía absoluta de los datos para la tienda.",

    "projects.battlekart.desc": "Sistema completo de gamificación y lealtad con panel de administración para gestión de recompensas y clientes.",
    "projects.battlekart.longDesc": "Una impresionante solución frontend de control de lealtad impulsada por mecánicas de gamificación. Facilita la retención de clientes a través de un sistema de niveles VIP, membresías anuales y cupones de descuentos canjeables. El proyecto posee un módulo de simulación de base de datos con persistencia en LocalStorage para desplegar la demostración a máxima velocidad sin dependencia de backend. Incluye también un Terminal POS virtual para personalización de redenciones y registro de carreras en tiempo real.",

    "projects.catalogo.desc": "Sistema de catálogo multi-sucursal con gestión de inventario y UX de alta gama.",
    "projects.catalogo.longDesc": "Plataforma digital optimizada para la visualización y administración de catálogos premium en múltiples ubicaciones geográficas. Integra un panel administrativo completo con persistencia local que permite la gestión ágil de marcas, categorías y variantes.",

    "projects.balazhi.desc": "Exhibición premium de materiales de lujo.",
    "projects.balazhi.longDesc": "Balazhi Stone es una plataforma web sofisticada diseñada para la exhibición y distribución de piedras sinterizadas, cuarzos y porcelanatos de alta gama en México. El proyecto se enfoca en una estética minimalista 'Premium Dark' con acentos dorados.",

    "projects.greenAlchemy.desc": "Sistema de Gestión de Logística con arquitectura para mejorar flujos de trabajo dentro la empresa.",
    "projects.greenAlchemy.longDesc": "Un sistema avanzado de gestión de logística que centraliza los flujos de venta, tesorería y logística en una interfaz elegante y funcional. Implementa una arquitectura autónoma basada en demoStorage para garantizar persistencia y operatividad total.",

    "projects.one.desc": "Plataforma holística premium para el bienestar personal y la conexión espiritual profunda.",
    "projects.one.longDesc": "Una experiencia digital integral que fusiona una boutique de cristales curativos, un centro de formación espiritual y un catálogo de terapias y retiros sagrados. Diseñada con una estética elegante y minimalista, la plataforma ofrece una navegación fluida con efectos de paralaje y persistencia de datos local.",

    "projects.probin.desc": "Plataforma premium para la exhibición de desarrollos inmobiliarios y gestión integral interactiva de CRM.",
    "projects.probin.longDesc": "Una solución frontend de alto nivel que combina un portal inmersivo para la presentación de múltiples proyectos inmobiliarios con un potente panel administrativo. Permite a los agentes gestionar leads, citas, perfiles de clientes, campañas y checklists de cierre operativo. Está impulsada por un MockDB basado en LocalStorage, garantizando demostraciones de ventas ultrarrápidas, persistencia de datos offline y una experiencia visual fluida sin dependencia de un backend tradicional.",

    "projects.winpot.desc": "CMS multi-tenant de alto rendimiento para la gestión dinámica de casinos y contenido gamificado.",
    "projects.winpot.longDesc": "Una solución robusta para redes de casinos que centraliza la administración de múltiples identidades de marca en un solo núcleo técnico. Implementa un sistema de diseño atómico y arquitectura basada en tenants para ofrecer experiencias personalizadas.",

    "projects.seprytec.desc": "Sitio web moderno para una empresa de seguridad privada.",
    "projects.seprytec.longDesc": "Sitio web moderno para una empresa de seguridad privada. Diseñado para infundir confianza a través de un diseño intuitivo y navegación fluida.",

    "projects.drcvCompany.desc": "Sitio web corporativo moderno diseñado para impulsar la presencia en línea de las empresas.",
    "projects.drcvCompany.longDesc": "Un sitio web corporativo moderno diseñado para impulsar la presencia en línea de las empresas. Optimizado para eficiencia y experiencia de usuario, utilizando Astro para rendimiento y Vue.js para interactividad.",

    "projects.youtubeTranscribe.desc": "Aplicación web que extrae y analiza el contenido de videos de YouTube.",
    "projects.youtubeTranscribe.longDesc": "Aplicación web que extrae y analiza el contenido de videos de YouTube. Utiliza un backend en Python para obtener transcripciones y un modelo de lenguaje (Ollama) para procesar y resumir el texto.",

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
