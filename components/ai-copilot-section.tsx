"use client"

import { useEffect, useRef, useState } from "react"
import {
  Boxes,
  Bug,
  BrainCircuit,
  Cpu,
  Lock,
  Gauge,
  ArrowRight,
  Activity,
  Thermometer,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Hook: IntersectionObserver                                         */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, seen }
}

/* ------------------------------------------------------------------ */
/*  Marquee                                                            */
/* ------------------------------------------------------------------ */
const MARQUEE_TEXT = "COPILOT_ARCH // DATA SOVEREIGNTY // ZERO-CLICK AGENT // LOCAL LLM // RTX 3060 // "

function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="copilot-marquee-wrapper overflow-hidden py-2 border-y border-neon-pink/20">
      <div className={`copilot-marquee-track ${reverse ? "copilot-marquee-reverse" : ""}`}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="copilot-marquee-item text-[10px] tracking-[0.3em] text-neon-pink/60 whitespace-nowrap px-2">
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Stack badge logos (SVG-based neon badges)                         */
/* ------------------------------------------------------------------ */
const STACK_BADGES = [
  { name: "Next.js", color: "#ff00ff" },
  { name: "Supabase", color: "#00ffff" },
  { name: "Docker", color: "#00ffff" },
  { name: "Ollama", color: "#ff00ff" },
  { name: "Llama 3", color: "#00ffff" },
  { name: "Claude", color: "#ff00ff" },
  { name: "Cursor", color: "#00ffff" },
  { name: "TypeScript", color: "#ff00ff" },
]

function StackBadges() {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {STACK_BADGES.map((b) => (
        <div
          key={b.name}
          className="copilot-badge"
          style={{ "--badge-color": b.color } as React.CSSProperties}
        >
          <span className="copilot-badge-dot" />
          <span className="copilot-badge-label">{b.name}</span>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Manifesto typing                                                   */
/* ------------------------------------------------------------------ */
const MANIFESTO = "El diferenciador no es quién usa IA, sino cómo la usa."

function Manifesto() {
  const [typed, setTyped] = useState("")
  const { ref, seen } = useInView<HTMLDivElement>(0.4)

  useEffect(() => {
    if (!seen) return
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(MANIFESTO.slice(0, i))
      if (i >= MANIFESTO.length) clearInterval(id)
    }, 26)
    return () => clearInterval(id)
  }, [seen])

  return (
    <div ref={ref} className="hud-corners hud-corners-cyan border border-accent-500/30 bg-drcv-600/70 p-5 md:p-6 mb-10">
      <div className="flex items-center gap-2 mb-3 text-[10px] tracking-[0.3em] text-accent-500/70">
        <span>▶</span> copilot.init --arch
      </div>
      <p className="text-sm md:text-lg text-white/85 leading-relaxed min-h-[3.5em]">
        <span className="text-accent-600/60">{"> "}</span>
        {typed}
        <span className="terminal-cursor" />
      </p>
      <p className="mt-3 text-xs text-white/50">
        Un desarrollador promedio copia y pega código sin entenderlo. Yo uso la IA como un{" "}
        <span className="neon-text-cyan font-bold">multiplicador de fuerza</span> —{" "}
        <span className="text-accent-500 font-bold">Copiloto Arquitectónico</span>.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Pillar cards (offset + slight rotation)                           */
/* ------------------------------------------------------------------ */
type Pillar = {
  id: string
  index: string
  title: string
  subtitle: string
  icon: React.ElementType
  tools: string[]
  flow: string[]
  value: string
  metric: { label: string; value: string }
  project: string
  offset: string
  rotate: string
}

const PILLARS: Pillar[] = [
  {
    id: "ui",
    index: "01",
    title: "Aceleración UI/UX",
    subtitle: "Generación de componentes",
    icon: Boxes,
    tools: ["v0", "Claude", "Lovable", "Cursor"],
    flow: ["arquitectura.estado → mental", "ui.gen --base=dashboard", "conectar supabase + lógica dura"],
    value: "De semanas a 24-48h de prototipado. La IA hace el trabajo estético; tú, la arquitectura y el backend.",
    metric: { label: "TIME-TO-PROTOTYPE", value: "24h" },
    project: "Dashboards · JRL / Greekos",
    offset: "md:mt-0",
    rotate: "md:-rotate-1",
  },
  {
    id: "refactor",
    index: "02",
    title: "Refactor & Debug",
    subtitle: "IA como Senior de revisión",
    icon: Bug,
    tools: ["Claude 3.5", "GPT-4o", "Cursor", "Copilot"],
    flow: ["contexto.legacy → LLM", "optimizar complejidad ciclomática", "generar pruebas unitarias"],
    value: "Código más seguro y con menos bugs. Detecta vulnerabilidades y cuellos de botella en SQL antes de producción.",
    metric: { label: "BUG-LEAKAGE", value: "-68%" },
    project: "Go-Kart Zen · Winpot",
    offset: "md:mt-8",
    rotate: "md:rotate-[0.5deg]",
  },
  {
    id: "product",
    index: "03",
    title: "IA como Producto",
    subtitle: "Tu mayor ventaja competitiva",
    icon: BrainCircuit,
    tools: ["Ollama", "Llama 3", "Mistral", "Agentes IA"],
    flow: ["RTX 3060 · CachyOS local", "modelos sin APIs de terceros", "agente transaccional zero-click"],
    value: "Soberanía de datos y privacidad absoluta. Con Miboot, la IA lee inventarios y ejecuta acciones reales en la BD.",
    metric: { label: "DATA-SOVEREIGNTY", value: "100%" },
    project: "AISUITE · Miboot Zero-Click",
    offset: "md:mt-4",
    rotate: "md:rotate-1",
  },
]

function PillarCard({ pillar, delay }: { pillar: Pillar; delay: number }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.15)
  const Icon = pillar.icon

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${pillar.offset} ${pillar.rotate}`}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen
          ? `translateY(0) rotate(0deg)`
          : `translateY(32px) rotate(0deg)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <article className="hud-corners copilot-pillar-card group relative h-full border border-accent-500/30 bg-drcv-600/80 overflow-hidden transition-all duration-500 hover-glow-pink">
        {/* Scanline overlay */}
        <div className="copilot-card-scan" />
        {/* Glitch blocks on hover */}
        <div className="copilot-glitch-block copilot-glitch-block-1" />
        <div className="copilot-glitch-block copilot-glitch-block-2" />

        {/* Header */}
        <div className="relative flex items-start gap-4 p-5 border-b border-accent-500/15">
          <div className="text-5xl md:text-6xl font-black text-accent-500/20 leading-none select-none">
            {pillar.index}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-accent-500/80 mb-1">
              <Icon size={12} /> {pillar.subtitle.toUpperCase()}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-accent-500 leading-tight">{pillar.title}</h3>
          </div>
        </div>

        {/* Metric */}
        <div className="relative grid grid-cols-2 divide-x divide-accent-500/15 border-b border-accent-500/15">
          <div className="p-4">
            <div className="text-[9px] tracking-[0.25em] text-white/45 mb-1">{pillar.metric.label}</div>
            <div className="text-2xl font-bold neon-text-cyan tabular-nums">{pillar.metric.value}</div>
          </div>
          <div className="p-4">
            <div className="text-[9px] tracking-[0.25em] text-white/45 mb-1">PROJECT</div>
            <div className="text-[11px] text-white/80 leading-tight pt-1">{pillar.project}</div>
          </div>
        </div>

        {/* Tools */}
        <div className="relative p-5 border-b border-accent-500/15">
          <div className="text-[9px] tracking-[0.25em] text-accent-500/60 mb-2">// TOOLS</div>
          <div className="flex flex-wrap gap-1.5">
            {pillar.tools.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>

        {/* Flow */}
        <div className="relative p-5 border-b border-accent-500/15">
          <div className="text-[9px] tracking-[0.25em] text-accent-500/60 mb-3">// WORKFLOW</div>
          <ul className="space-y-2">
            {pillar.flow.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-[11px] text-white/75">
                <span className="text-accent-500/70 mt-[1px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Value */}
        <div className="relative p-5">
          <div className="flex items-center gap-2 text-[9px] tracking-[0.25em] text-accent-500/70 mb-2">
            <Gauge size={11} /> BUSINESS_VALUE
          </div>
          <p className="text-xs text-white/85 leading-relaxed">{pillar.value}</p>
        </div>
      </article>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Flow Diagram SVG                                                   */
/* ------------------------------------------------------------------ */
const FLOW_STEPS = [
  { label: "PROMPT", sub: "input.arch", color: "#ff00ff" },
  { label: "ARCHI-\nTECTURE", sub: "design.sys", color: "#00ffff" },
  { label: "CÓDIGO", sub: "build.prod", color: "#ff00ff" },
  { label: "DEPLOY", sub: "ship.live", color: "#00ffff" },
]

function FlowDiagram() {
  const { ref, seen } = useInView<HTMLDivElement>(0.3)

  return (
    <div ref={ref} className="hud-corners hud-corners-cyan border border-accent-500/30 bg-drcv-600/70 p-6">
      <div className="text-[9px] tracking-[0.3em] text-accent-500/70 mb-6">// ARCH_FLOW.pipe</div>

      <div className="relative">
        {/* SVG connector lines */}
        <svg
          className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-[2px] overflow-visible pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1={`${(i * 25) + 12.5}%`} y1="1"
              x2={`${((i + 1) * 25) - 0}%`} y2="1"
              stroke="url(#flowGrad)"
              strokeWidth="2"
              strokeDasharray={seen ? "0" : "200"}
              strokeDashoffset={seen ? "0" : "200"}
              style={{
                transition: `stroke-dashoffset 0.7s cubic-bezier(.4,0,.2,1)`,
                transitionDelay: `${i * 300 + 300}ms`,
              }}
            />
          ))}
          {/* Traveling pulses */}
          {seen && [0, 1, 2].map((i) => (
            <circle key={`p-${i}`} r="4" fill="#00ffff" style={{ filter: "drop-shadow(0 0 6px #00ffff)" }}>
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.65}s`}
                path={`M ${(i * 25) + 12.5}% 0 L ${((i + 1) * 25)}% 0`}
              />
            </circle>
          ))}
          <defs>
            <linearGradient id="flowGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#00ffff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Steps */}
        <div className="relative grid grid-cols-4 gap-2" style={{ zIndex: 1 }}>
          {FLOW_STEPS.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{
                opacity: seen ? 1 : 0,
                transform: seen ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.5s ease",
                transitionDelay: `${i * 200}ms`,
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center border-2 mb-3 font-bold text-[10px] text-center leading-tight"
                style={{
                  borderColor: step.color,
                  color: step.color,
                  boxShadow: `0 0 12px ${step.color}60, inset 0 0 8px ${step.color}20`,
                  background: `${step.color}10`,
                  whiteSpace: "pre-line",
                }}
              >
                {step.label}
              </div>
              <span className="text-[9px] tracking-widest text-white/40">{step.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Bare-metal Server Panel                                            */
/* ------------------------------------------------------------------ */
const SERVER_LOGS = [
  "llama3:8b loading model weights...",
  "GPU: RTX 3060 12GB — VRAM 9.2/12GB",
  "inference: 28 tok/s — latency 280ms",
  "request_id: 0x4fa2 → OK 200",
  "audit: zero external API calls",
  "cache warm: 1.2M keys loaded",
  "build artifact: 214ms",
  "deploy edge://mx-central — ok",
]

function GaugeCircle({ label, value, color }: { label: string; value: number; color: string }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.2)
  const r = 36
  const c = 2 * Math.PI * r

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative w-[90px] h-[90px]">
        <svg viewBox="0 0 90 90" className="w-full h-full -rotate-90">
          <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(0,255,255,0.1)" strokeWidth="5" />
          <circle
            cx="45" cy="45" r={r}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="butt"
            strokeDasharray={c}
            strokeDashoffset={seen ? c - (c * value) / 100 : c}
            style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.8,.2,1)", filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-base font-bold tabular-nums" style={{ color }}>{value}%</div>
            <div className="text-[8px] tracking-wider text-white/40">{label}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LogStream() {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    let i = 0
    // Immediate first line
    setLines([SERVER_LOGS[0]])
    i++
    const id = setInterval(() => {
      setLines((prev) => [...prev.slice(-5), SERVER_LOGS[i % SERVER_LOGS.length]])
      i++
    }, 1600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-28 overflow-hidden text-[11px] leading-5 font-mono">
      {lines.map((l, i) => (
        <div key={`${l}-${i}`} className="log-line flex gap-2">
          <span className="text-accent-500/70">$</span>
          <span className="text-white/70">{l}</span>
          <span className="ml-auto text-accent-500/50">ok</span>
        </div>
      ))}
    </div>
  )
}

function ServerPanel() {
  return (
    <div className="hud-corners border border-accent-500/30 bg-drcv-600/80 p-6">
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-accent-500/15">
        <Cpu size={14} className="text-accent-500" />
        <span className="text-[11px] tracking-[0.25em] text-white/70 uppercase">bare-metal.node</span>
        <span className="ml-auto text-[9px] tracking-widest text-accent-500 copilot-blink">● LIVE</span>
      </div>

      {/* Specs */}
      <div className="text-[10px] text-white/40 mb-4 space-y-1">
        <div>RTX 3060 12GB — CachyOS — NVMe 1TB</div>
        <div>Llama 3 · Mistral · zero external APIs</div>
      </div>

      {/* Gauges */}
      <div className="flex justify-around mb-5">
        <GaugeCircle label="GPU" value={84} color="#ff00ff" />
        <GaugeCircle label="VRAM" value={77} color="#00ffff" />
        <GaugeCircle label="LOAD" value={62} color="#ff00ff" />
      </div>

      {/* Temp bar */}
      <div className="mb-5">
        <div className="flex justify-between text-[10px] mb-1">
          <span className="flex items-center gap-1 text-white/50"><Thermometer size={10} /> TEMP</span>
          <span className="text-accent-500 tabular-nums">67°C</span>
        </div>
        <div className="h-[5px] bg-black/60 border border-accent-500/15 overflow-hidden">
          <div
            className="h-full"
            style={{
              width: "67%",
              background: "linear-gradient(90deg, #00ffff, #ff00ff)",
              boxShadow: "0 0 8px rgba(255,0,255,0.45)",
              transition: "width 1.4s cubic-bezier(.2,.8,.2,1)",
            }}
          />
        </div>
      </div>

      {/* Log stream */}
      <div className="border-t border-accent-500/15 pt-4">
        <div className="text-[9px] tracking-widest text-accent-500/60 mb-2">// INFERENCE_LOG</div>
        <LogStream />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sovereignty bar                                                    */
/* ------------------------------------------------------------------ */
function SovereigntyBar() {
  const { ref, seen } = useInView<HTMLDivElement>(0.4)
  const rows = [
    { label: "Soberanía de Datos", value: 100, pink: false },
    { label: "Latencia local (RTX 3060)", value: 92, pink: false },
    { label: "Dependencia de APIs externas", value: 8, pink: true },
  ]

  return (
    <div ref={ref} className="hud-corners hud-corners-cyan border border-accent-500/30 bg-drcv-600/70 p-5">
      <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.3em] text-accent-500/70">
        <Lock size={12} /> sovereignty.scan
      </div>
      <div className="space-y-4">
        {rows.map((r, i) => (
          <div key={r.label}>
            <div className="flex justify-between text-[11px] mb-1.5">
              <span className="text-white/75">{r.label}</span>
              <span className={`tabular-nums ${r.pink ? "text-accent-500/80" : "neon-text-cyan"}`}>{r.value}%</span>
            </div>
            <div className="h-[6px] bg-black/60 border border-accent-500/15 overflow-hidden">
              <div
                className="h-full meter-fill"
                style={{
                  width: seen ? `${r.value}%` : "0%",
                  transitionDelay: `${i * 120}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-accent-500/15 text-[10px] text-white/45 leading-relaxed">
        Modelos Llama 3 / Mistral corriendo en servidor bare-metal (CachyOS + RTX 3060).
        Cero dependencia de OpenAI/Anthropic para cargas sensibles.
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Cyberpunk background layers                                        */
/* ------------------------------------------------------------------ */
function CopilotBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Perspective grid */}
      <div className="copilot-persp-grid" />
      {/* Noise/static overlay */}
      <div className="copilot-noise" />
      {/* Floating glitch blocks */}
      <div className="copilot-bg-block copilot-bg-block-1" />
      <div className="copilot-bg-block copilot-bg-block-2" />
      <div className="copilot-bg-block copilot-bg-block-3" />
      {/* Magenta/cyan corner flares */}
      <div className="copilot-flare copilot-flare-pink" />
      <div className="copilot-flare copilot-flare-cyan" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */
export function AICopilotSection() {
  return (
    <section id="copilot" className="relative py-16 overflow-hidden">
      <CopilotBg />

      {/* Top marquee */}
      <Marquee />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="text-accent-500 text-sm tracking-widest mb-2 flicker">
            {">"} ./engage --copilot
          </div>
          <h2 className="glitch text-3xl md:text-5xl font-bold text-accent-500" data-text="// COPILOT_ARCH">
            // COPILOT_ARCH
          </h2>
          <p className="mt-3 text-sm text-white/55 max-w-2xl">
            Cómo integro la IA en el flujo de trabajo — no como atajo, sino como multiplicador de fuerza arquitectónica.
          </p>
        </div>

        {/* Stack badges */}
        <StackBadges />

        {/* Manifesto */}
        <div className="mt-10">
          <Manifesto />
        </div>

        {/* Pillar cards — slightly offset/rotated */}
        <div className="grid gap-6 md:grid-cols-3 mb-10 md:items-start">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.id} pillar={p} delay={i * 120} />
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mb-8">
          <FlowDiagram />
        </div>

        {/* Bottom: sovereignty + server panel + CTA */}
        <div className="grid gap-6 md:grid-cols-[1fr_1fr_1fr]">
          <SovereigntyBar />
          <ServerPanel />
          <div className="hud-corners hud-corners-cyan border border-accent-500/40 bg-drcv-600/80 p-6 flex flex-col justify-center hover-glow-cyan transition-all">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-accent-500/80 mb-3">
              <Activity size={12} /> philosophy.out
            </div>
            <p className="text-sm md:text-base text-white/85 leading-relaxed mb-5">
              No solo uso IA para programar.{" "}
              <span className="neon-text-cyan font-bold">Programo IA.</span> Lo que para otros es un chat, para mí es un
              agente transaccional que ejecuta acciones reales sobre la base de datos.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start border border-accent-500 text-accent-500 font-bold text-xs tracking-widest px-5 py-3 hover-glow-cyan transition-all"
            >
              CONSTRUYAMOS CON IA <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <Marquee reverse />
    </section>
  )
}
