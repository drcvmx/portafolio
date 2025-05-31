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

const EMAIL_ADDRESS = "drcv.work.code@gmail.com";
const CV_FILENAME = "cv_drcv.pdf";
const GITHUB_URL = "https://github.com/drcvmx";
const PORTFOLIO_URL = "/";

const INTRO_TEXT = "Initializing personal profile... Access granted. Loading bio data...";
const BIO_TEXT = "Hello, my name is Dante Ricardo Chavez Verdeja, and I am a Computer Engineer. I have worked on both backend and frontend projects, but I prefer web development and making life easier for users. I am a soccer enthusiast, I love playing and watching it every week.";

const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company: "SVENSON",
    period: "2024 - 2025",
    description:
      "Developed and enhanced the main customer-facing web application using React.js and Next.js (App Router), building robust and interactive interfaces. Optimized frontend code modularity and efficiency with custom hooks, and connected the frontend to a WhatsApp chatbot, significantly improving customer interaction and query management.",
  },
  {
    title: "Project Development",
    company: "Freelance",
    period: "2024 - Present",
    description:
      "Developing web projects and applications to demonstrate my skills using React, Node.js, JavaScript, and CSS.",
  },
  {
    title: "Professional Development",
    company: "Universidad Autónoma del Estado de México",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      variant: "default",
      duration: 3000,
    });
    setMessage("");
    setName("");
    setUserEmail("");
  };

  if (isLoading) {
    return <div className="py-12 flex justify-center">Cargando...</div>;
  }

  return (
    <div className="space-y-16">
      <section>
        {skipAnimation ? (
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
              skipAnimation={false}
            />

            {introComplete && (
              <Terminal
                text={BIO_TEXT}
                typingSpeed={20}
                className="max-w-3xl mx-auto mt-4"
                showPrompt={false}
                onComplete={handleBioComplete}
                skipAnimation={false}
              />
            )}
          </>
        )}

<div className="flex justify-center gap-4 mt-8">
          <a
            href="/placeholder.svg?height=600&width=800&text=CV"
            download="cv_drcv.pdf"
            className="inline-flex items-center gap-2 bg-neon-pink/10 hover:bg-neon-pink/20 text-neon-pink px-6 py-3 rounded-md transition-colors border border-neon-pink/30 shadow-neon-pink font-mono"
          >
            <FileDown size={18} />
            Download CV
          </a>
          <a
            href="https://drive.google.com/file/d/14LjDT4z-2KxwNcra_zRZso_hBijjJN2o/view?usp=sharing"
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
          <section>
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">Experience Timeline</h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="terminal-window scanline">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red" />
                    <div className="terminal-button terminal-button-yellow" />
                    <div className="terminal-button terminal-button-green" />
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
                        <span className="text-neon-pink">company:</span> {exp.company}
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
            <div className="terminal-window mb-6 scanline">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red" />
                <div className="terminal-button terminal-button-yellow" />
                <div className="terminal-button terminal-button-green" />
                <div className="terminal-title">tech_stack.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-neon-pink">$</span> cat /proc/technologies
                </p>
              </div>
            </div>
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
                      <p className="mb-1 text-neon-pink">github0:</p>
                      <Link
                        href={GITHUB_URL}
                        className="flex items-center gap-2 hover:text-neon-pink transition-colors font-mono"
                        target="_blank"
                      >
                        <Github size={16} />
                        github.com/drcvmx
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-neon-pink">portfolio0:</p>
                      <Link
                        href={PORTFOLIO_URL}
                        className="flex items-center gap-2 hover:text-neon-pink transition-colors font-mono"
                      >
                        <ExternalLink size={16} />
                        DRCV
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