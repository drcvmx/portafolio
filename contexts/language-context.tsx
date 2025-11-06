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
    "home.intro": "Hello, my name is Dante. I'm a passionate Fullstack Developer with a love for web design and programming. I leverage AI tools to enhance my productivity, streamline my workflow, and amplify my design and coding abilities.",
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
    "project.overview": "Project Overview",
    "project.keyFeatures": "Key Features",
    "project.pauseSlideshow": "Pause slideshow",
    "project.playSlideshow": "Play slideshow",
    "project.viewProject": "View project",

    // About page
    "about.initProfile": "Initializing personal profile... Access granted. Loading bio data...",
    "about.bio":
      "Hello, my name is Dante Ricardo Chavez Verdeja, and I am a Computer Engineer. I have worked on both backend and frontend projects, but I prefer web development and making life easier for users. I am a soccer enthusiast, I love playing and watching it every week.",
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
    "exp.svenson.company": "Frontend Developer",
    "exp.svenson.period": "2024 - 2025",
    "exp.svenson.desc":
      "Developed and enhanced the main customer-facing web application using React.js and Next.js (App Router), building robust and interactive interfaces. Optimized frontend code modularity and efficiency with custom hooks, and connected the frontend to a WhatsApp chatbot, significantly improving customer interaction and query management.",

    "exp.webDevelopment.title": "Web Development",
    "exp.webDevelopment.company": "Project Development",
    "exp.webDevelopment.period": "2023 - Present",
    "exp.webDevelopment.desc":
      "Developing web projects and applications to demonstrate my skills using React, Node.js, JavaScript, and CSS.",

    "exp.university.title": "Universidad Autónoma del Estado de México",
    "exp.university.company": "Professional Development",
    "exp.university.period": "2021 - Present",
    "exp.university.desc":
      "My professional training in Computer Engineering, where I have worked on academic and social impact projects for my institution.",

    // Footer
    "footer.allRightsReserved": "All rights reserved",
    "footer.builtWith": "Built with",

    // Projects data - New projects
    "projects.drcvCompany.desc":
      "A modern corporate website designed to boost companies' online presence, offering a professional and visually impactful experience for their clients.",
    "projects.drcvCompany.longDesc":
      "This project develops a comprehensive corporate website, optimized for efficiency and user experience. It leverages Astro for superior performance, Vue.js for interactivity, Tailwind CSS and SCSS for agile design, and Pinia for scalable data management, all built with TypeScript for enhanced robustness. The primary goal is to provide businesses with a solid, attractive, and functional digital platform that enables them to effectively connect with their audience and stand out in the market.",

    "projects.seprytec.desc":
      "A modern website for a private security company, crafted to instill user trust and comfort through intuitive design.",
    "projects.seprytec.longDesc":
      "Built with React and Next.js, this interactive web platform is designed for visual appeal and ease of use, providing intuitive navigation and dynamic sections with interactive buttons that seamlessly guide users through the private security company's services and information.",

    "projects.drcvNote.desc":
      "Your digital space for big and small ideas. Save everything from quick reminders to detailed and structured notes, all in one intuitive and organized place.",
    "projects.drcvNote.longDesc":
      "This project offers a notes application designed to be your perfect ally in organizing information. With a simple and intuitive interface, you can quickly capture those fleeting ideas or develop extensive and well-structured notes. The goal is to provide you with a digital space where managing your notes feels natural and efficient.",

    "projects.carpinteriaVerdeja.desc":
      "Intuitive and visually impactful frontend webpage, focused on offering a pleasant navigation experience and a memorable design.",
    "projects.carpinteriaVerdeja.longDesc":
      "Intuitive and visually impactful frontend webpage, focused on offering a pleasant navigation experience and a memorable design.",

    "projects.crimeControl.desc":
      "A real-time crime control system that centralizes criminal data, incident tracking, and provides precise offender location within correctional facilities, enabling rapid and strategic police response.",
    "projects.crimeControl.longDesc":
      "This project develops a comprehensive platform for the administration and predictive analysis of criminal activity, integrating diverse data sources such as incident reports and suspect profiles. Its capability extends to clearly differentiating between civilians and offenders, and crucially, it manages and displays in real-time the location of individuals deprived of liberty within specific cells and prisons. The system aims to optimize resource allocation, enhance coordination among law enforcement agencies, and strengthen crime prevention strategies, all through a robust, accessible, and detailed database.",

    "projects.luchavsludopatia.desc":
      "A supportive and informative website dedicated to combating gambling addiction, drawing inspiration from government resources to offer information, tools, and resources for prevention and seeking help.",
    "projects.luchavsludopatia.longDesc":
      "This is a supportive and informative web platform, inspired by government resources, with the strong aim of addressing and mitigating the issue of gambling addiction. The project will focus on providing users with clear and accessible information about gambling addiction, its risks and consequences, as well as offering practical tools and resources for prevention, early detection, and seeking professional help.",

    "projects.youtubeTranscribe.desc":
      "A web application that extracts and analyzes the content of YouTube videos (via their transcripts) using a Python backend and natural language processing capabilities",
    "projects.youtubeTranscribe.longDesc":
      "This web application is designed to automate the process of analyzing YouTube video content. It operates in two main stages: first, a backend developed in Python uses the YouTube transcripts API to obtain the subtitles or transcripts of a video given a YouTube link. Subsequently, these transcripts are sent to a Next.js backend, where an Ollama language model processes and summarizes the text.",

    "projects.sozu.desc":
      "Comprehensive real estate management system with PostgreSQL database featuring 50+ tables, developed for one of Guadalajara's largest real estate companies.",
    "projects.sozu.longDesc":
      "Complete real estate management system handling projects, administrative documents, and complex data relationships. Built with PostgreSQL, collaborative development, and AI implementation to optimize operational processes.",

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
      "Hola, mi nombre es Dante. Soy un desarrollador Fullstack apasionado por el diseño web y la programación. Utilizo herramientas de IA para mejorar mi productividad, optimizar mi flujo de trabajo y amplificar mis habilidades de diseño y programación.",
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
    "project.overview": "Resumen del Proyecto",
    "project.keyFeatures": "Características Principales",
    "project.pauseSlideshow": "Pausar presentación",
    "project.playSlideshow": "Reproducir presentación",
    "project.viewProject": "Ver proyecto",

    // About page
    "about.initProfile": "Inicializando perfil personal... Acceso concedido. Cargando datos biográficos...",
    "about.bio":
      "Hola, mi nombre es Dante Ricardo Chávez Verdeja, y soy Ingeniero en Computación. He trabajado en proyectos tanto de backend como frontend, pero prefiero el desarrollo web y hacer la vida más fácil para los usuarios. Soy un entusiasta del fútbol, me encanta jugarlo y verlo cada semana.",
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
    "exp.svenson.company": "Desarrollador Frontend",
    "exp.svenson.period": "2024 - 2025",
    "exp.svenson.desc":
      "Desarrollé y mejoré la aplicación web principal orientada al cliente usando React.js y Next.js (App Router), construyendo interfaces robustas e interactivas. Optimicé la modularidad y eficiencia del código frontend con hooks personalizados, y conecté el frontend a un chatbot de WhatsApp, mejorando significativamente la interacción con el cliente y la gestión de consultas.",

    "exp.webDevelopment.title": "Desarrollo Web",
    "exp.webDevelopment.company": "Desarrollo de Proyectos",
    "exp.webDevelopment.period": "2023 - Presente",
    "exp.webDevelopment.desc":
      "Desarrollando proyectos web y aplicaciones para demostrar mis habilidades usando React, Node.js, JavaScript y CSS.",

    "exp.university.title": "Universidad Autónoma del Estado de México",
    "exp.university.company": "Desarrollo Profesional",
    "exp.university.period": "2021 - Presente",
    "exp.university.desc":
      "Mi formación profesional en Ingeniería en Computación, donde he trabajado en proyectos académicos y de impacto social para mi institución.",

    // Footer
    "footer.allRightsReserved": "Todos los derechos reservados",
    "footer.builtWith": "Construido con",

    // Projects data - New projects
    "projects.drcvCompany.desc":
      "Un sitio web corporativo moderno diseñado para impulsar la presencia en línea de las empresas, ofreciendo una experiencia profesional y visualmente impactante para sus clientes.",
    "projects.drcvCompany.longDesc":
      "Este proyecto desarrolla un sitio web corporativo integral, optimizado para la eficiencia y la experiencia del usuario. Utiliza Astro para un rendimiento superior, Vue.js para la interactividad, Tailwind CSS y SCSS para un diseño ágil, y Pinia para una gestión de datos escalable, todo construido con TypeScript para una mayor robustez. El objetivo principal es proporcionar a las empresas una plataforma digital sólida, atractiva y funcional que les permita conectarse eficazmente con su audiencia y destacarse en el mercado.",

    "projects.seprytec.desc":
      "Un sitio web moderno para una empresa de seguridad privada, diseñado para infundir confianza y comodidad en los usuarios a través de un diseño intuitivo.",
    "projects.seprytec.longDesc":
      "Construido con React y Next.js, esta plataforma web interactiva está diseñada para el atractivo visual y la facilidad de uso, proporcionando navegación intuitiva y secciones dinámicas con botones interactivos que guían a los usuarios a través de los servicios e información de la empresa de seguridad privada.",

    "projects.drcvNote.desc":
      "Tu espacio digital para ideas grandes y pequeñas. Guarda todo, desde recordatorios rápidos hasta notas detalladas y estructuradas, todo en un lugar intuitivo y organizado.",
    "projects.drcvNote.longDesc":
      "Este proyecto ofrece una aplicación de notas diseñada para ser tu aliado perfecto en la organización de información. Con una interfaz simple e intuitiva, puedes capturar rápidamente esas ideas fugaces o desarrollar notas extensas y bien estructuradas. El objetivo es proporcionarte un espacio digital donde la gestión de tus notas se sienta natural y eficiente.",

    "projects.carpinteriaVerdeja.desc":
      "Página web frontend intuitiva y visualmente impactante, enfocada en ofrecer una experiencia de navegación agradable y un diseño memorable.",
    "projects.carpinteriaVerdeja.longDesc":
      "Página web frontend intuitiva y visualmente impactante, enfocada en ofrecer una experiencia de navegación agradable y un diseño memorable.",

    "projects.crimeControl.desc":
      "Un sistema de control de delincuencia en tiempo real que centraliza datos criminales, seguimiento de incidentes y proporciona la ubicación precisa de los delincuentes dentro de instalaciones correccionales, permitiendo una respuesta policial rápida y estratégica.",
    "projects.crimeControl.longDesc":
      "Este proyecto desarrolla una plataforma integral para la administración y análisis predictivo de la actividad criminal, integrando diversas fuentes de datos como informes de incidentes y perfiles de sospechosos. Su capacidad se extiende a diferenciar claramente entre civiles y delincuentes, y crucialmente, gestiona y muestra en tiempo real la ubicación de individuos privados de libertad dentro de celdas y prisiones específicas. El sistema tiene como objetivo optimizar la asignación de recursos, mejorar la coordinación entre agencias de aplicación de la ley y fortalecer las estrategias de prevención del delito, todo a través de una base de datos robusta, accesible y detallada.",

    "projects.luchavsludopatia.desc":
      "Un sitio web de apoyo e información dedicado a combatir la ludopatía, inspirado en recursos gubernamentales para ofrecer información, herramientas y recursos para la prevención y búsqueda de ayuda.",
    "projects.luchavsludopatia.longDesc":
      "Esta es una plataforma web de apoyo e información, inspirada en recursos gubernamentales, con el firme objetivo de abordar y mitigar el problema de la ludopatía. El proyecto se centrará en proporcionar a los usuarios información clara y accesible sobre la ludopatía, sus riesgos y consecuencias, así como ofrecer herramientas prácticas y recursos para la prevención, detección temprana y búsqueda de ayuda profesional.",

    "projects.youtubeTranscribe.desc":
      "Una aplicación web que extrae y analiza el contenido de videos de YouTube (a través de sus transcripciones) utilizando un backend de Python y capacidades de procesamiento de lenguaje natural",
    "projects.youtubeTranscribe.longDesc":
      "Esta aplicación web está diseñada para automatizar el proceso de análisis de contenido de videos de YouTube. Opera en dos etapas principales: primero, un backend desarrollado en Python utiliza la API de transcripciones de YouTube para obtener los subtítulos o transcripciones de un video dado un enlace de YouTube. Posteriormente, estas transcripciones se envían a un backend de Next.js, donde un modelo de lenguaje Ollama procesa y resume el texto.",

    "projects.sozu.desc":
      "Sistema integral de gestión inmobiliaria con base de datos PostgreSQL de más de 50 tablas, desarrollado para una de las inmobiliarias más grandes de Guadalajara.",
    "projects.sozu.longDesc":
      "Sistema completo de gestión inmobiliaria que maneja proyectos, documentos administrativos y múltiples relaciones de datos. Desarrollado con PostgreSQL, trabajo colaborativo e implementación de IA para optimizar procesos operacionales.",

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
  const [language, setLanguage] = useState<Language>("en")

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
