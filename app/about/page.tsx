"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Terminal } from "@/components/terminal";
import { Github, Linkedin, Send, Copy, FileDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TechStack } from "@/components/tech-stack";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

const EMAIL_ADDRESS = "drcv.work.code@gmail.com";
const CV_FILENAME = "cv_drcv.pdf";
const GITHUB_URL = "https://github.com/drcvmx";
const LinkedIn = "https://www.linkedin.com/in/dante-ricardo-chavez-verdeja-501388361/"
const PORTFOLIO_URL = "/";

const INTRO_TEXT = "Initializing personal profile... Access granted. Loading bio data...";
const BIO_TEXT = "Hello, my name is Dante Ricardo Chavez Verdeja, and I am a Computer Engineer. I have worked on both backend and frontend projects, but I prefer web development and making life easier for users. I am a soccer enthusiast, I love playing and watching it every week.";

const EXPERIENCES = [
  {
    title: "Svenson",
    company: "Frontend Developer",
    period: "2024 - 2025",
    description:
      "Developed and enhanced the main customer-facing web application using React.js and Next.js (App Router), building robust and interactive interfaces. Optimized frontend code modularity and efficiency with custom hooks, and connected the frontend to a WhatsApp chatbot, significantly improving customer interaction and query management.",
  },
  {
    title: "Web Development",
    company: "Project Development",
    period: "2023 - Present",
    description:
      "Developing web projects and applications to demonstrate my skills using React, Node.js, JavaScript, and CSS.",
  },
  {
    title: "Universidad Autónoma del Estado de México",
    company: "Professional Development",
    period: "2021 - Present",
    description:
      "My professional training in Computer Engineering, where I have worked on academic and social impact projects for my institution.",
  },
];

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [bioComplete, setBioComplete] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const animationCompleted = localStorage.getItem("aboutAnimationCompleted") === "true";
    if (animationCompleted) {
      setSkipAnimation(true);
      setIntroComplete(true);
      setBioComplete(true);
    }
    setIsLoading(false);
  }, []);

  const handleBioComplete = () => {
    setBioComplete(true);
    localStorage.setItem("aboutAnimationCompleted", "true");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied to your clipboard.`,
      variant: "default",
      duration: 3000,
    });
  };

  const sendEmail = () => {
    window.open(`mailto:${EMAIL_ADDRESS}?subject=Contact from Portfolio&body=${encodeURIComponent(message)}`);
    toast({
      title: "Email client opened",
      description: "Your default email client has been opened.",
      variant: "default",
      duration: 3000,
    });
  };


  if (isLoading) {
    return <div className="py-12 flex justify-center">Loading...</div>;
  }

  return (
    <div className="space-y-16">
      <section>
        {(skipAnimation || bioComplete) ? (
          <>
            <div className="terminal-window scanline max-w-3xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red" />
                <div className="terminal-button terminal-button-yellow" />
                <div className="terminal-button terminal-button-green" />
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-content">
                <span className="text-neon-pink">$ </span>
                <span>{INTRO_TEXT}</span>
                <span className="terminal-cursor" />
              </div>
            </div>

            <div className="terminal-window scanline max-w-3xl mx-auto mt-4">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red" />
                <div className="terminal-button terminal-button-yellow" />
                <div className="terminal-button terminal-button-green" />
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-content">
                <span>{BIO_TEXT}</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </>
        ) : (
          <>
            <Terminal
              text={INTRO_TEXT}
              typingSpeed={30}
              className="max-w-3xl mx-auto"
              onComplete={() => setIntroComplete(true)}
              skipAnimation={skipAnimation || introComplete}
            />

            {introComplete && (
              <Terminal
                text={BIO_TEXT}
                typingSpeed={20}
                className="max-w-3xl mx-auto mt-4"
                showPrompt={false}
                onComplete={handleBioComplete}
                skipAnimation={skipAnimation || bioComplete}
              />
            )}
          </>
        )}
        {/*
        <div className="flex justify-center mt-12 animate-fade-in delay-200">
          <div className="relative">
            <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-neon-pink/30 shadow-neon-pink bg-cyber-dark/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-purple/10"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/perfil2.webp"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 text-xs text-muted-foreground font-mono bg-cyber-dark/70 px-2 py-1 rounded z-10"></div>
              </div>
              Efecto de scanline para la foto 
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent animate-pulse"></div>
            </div>

           
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-neon-pink/50"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-neon-pink/50"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-neon-pink/50"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-neon-pink/50"></div>

           
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-cyber-dark border border-neon-pink/30 px-3 py-1 rounded text-xs font-mono text-neon-pink">
                <span className="text-neon-pink">$</span> whoami
              </div>
            </div>
          </div>
        </div>
        */}


        <div className="flex justify-center gap-4 mt-12">
          <a
            href="/cv_drcv.pdf"
            download="cv_drcv.pdf"
            className="inline-flex items-center gap-2 bg-neon-pink/10 hover:bg-neon-pink/20 text-neon-pink px-6 py-3 rounded-md transition-colors border border-neon-pink/30 shadow-neon-pink font-mono"
          >
            <FileDown size={18} />
            Download CV
          </a>
          <a
            href="https://drive.google.com/file/d/1Xlg7lumtqVL73Y57Ry7--NsjY-Aesls3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple px-6 py-3 rounded-md transition-colors border border-neon-purple/30 shadow-neon-purple font-mono"
          >
            <ExternalLink size={18} />
            View Online
          </a>
        </div>
      </section>

      {bioComplete && (
        <>
          <section className="section-reveal delay-200">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">Experience Timeline</h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className={`terminal-window scanline animate-fade-in-up delay-${300 + index * 200}`}>
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.company || exp.title}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-neon-pink">$</span> cat job_details.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-neon-pink">title:</span> {exp.title}
                      </p>
                      <p>
                        <span className="text-neon-pink">period:</span> {exp.period}
                      </p>
                      <p>
                        <span className="text-neon-pink">description:</span> {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-stack-section">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">Tech Stack</h2>
            <TechStack />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">Contact</h2>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="relative">
                <div className="bg-cyber-dark border border-neon-pink/20 rounded-md p-1 flex items-center">
                  <input
                    type="text"
                    value={EMAIL_ADDRESS}
                    readOnly
                    className="bg-transparent border-none outline-none text-white px-4 py-3 flex-grow font-mono"
                  />
                  <div className="flex space-x-2 mr-2">
                    <button
                      onClick={sendEmail}
                      className="bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink p-2 rounded-md transition-colors"
                    >
                      <Send size={20} />
                    </button>
                    <button
                      onClick={() => copyToClipboard(EMAIL_ADDRESS)}
                      className="bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink p-2 rounded-md transition-colors"
                    >
                      <Copy size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="terminal-window scanline mt-8">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red" />
                  <div className="terminal-button terminal-button-yellow" />
                  <div className="terminal-button terminal-button-green" />
                  <div className="terminal-title">network_connections.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-neon-pink">$</span> ifconfig
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-1 text-neon-pink">github:</p>
                      <Link
                        href={GITHUB_URL}
                        className="flex items-center gap-2 hover:text-neon-pink transition-colors font-mono"
                        target="_blank"
                      >
                        <Github size={16} />
                        github.com/drcvmx
                      </Link>
                      <p className="mb-1 text-neon-pink">Linkedin:</p>
                      <Link
                        href={LinkedIn}
                        className="flex items-center gap-2 hover:text-neon-pink transition-colors font-mono"
                        target="_blank"
                      >
                        <Linkedin size={16}  />
                        Linkedin.com/drcvmx
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-neon-pink">Portfolio:</p>
                      <Link
                        href= "https://portafolio-drcv07.vercel.app/"
                        className="flex items-center gap-2 hover:text-neon-pink transition-colors font-mono"
                      >
                        <ExternalLink size={16} />
                        https://portafolio-drcv07
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}