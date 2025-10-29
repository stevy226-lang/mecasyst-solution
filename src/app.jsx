import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Fan, Sun, Home, Phone, Send, Factory, ShieldCheck, Rocket, Mail, MapPin, Globe } from 'lucide-react'

const PHONE = '+22670541063'
const TEL_DISPLAY = '+226 70 54 10 63'
const EMAIL = 'contact@mecasyst-ingenierie.com'
const ADDRESS = 'Ouagadougou, Burkina Faso'

const t = (lang) => ({
  nav: { solutions: lang==='fr'?'Solutions':'Solutions', projects: lang==='fr'?'Réalisations':'Projects', why: lang==='fr'?'Pourquoi nous':'Why us', contact: lang==='fr'?'Contact':'Contact' },
  hero: {
    h1: lang==='fr' ? "Ingénierie & Systèmes Intelligents pour l'Industrie et le Bâtiment" : "Engineering & Smart Systems for Industry and Buildings",
    p: lang==='fr' ? "Conception, fourniture et installation de brumisation anti-poussière, froid évaporatif, solaire photovoltaïque, domotique et automatisation industrielle en Afrique de l’Ouest." : "Design, supply and installation of dust-suppression misting, evaporative cooling, solar PV, smart home/BMS and industrial automation across West Africa.",
    cta1: lang==='fr'?'Découvrir nos solutions':'Explore solutions',
    cta2: lang==='fr'?'Voir nos réalisations':'See projects',
    badges: [ lang==='fr'?'Qualité & conformité':'Quality & compliance', lang==='fr'?'Livraison clé en main':'Turnkey delivery' ]
  },
  solutions: {
    title: lang==='fr'?'Solutions':'Solutions',
    p: lang==='fr' ? "De l’étude à la mise en service, nous intégrons des technologies robustes adaptées au climat et aux contraintes locales." : "From study to commissioning, we integrate robust technologies tailored to local climate and constraints.",
    cards: [
      { icon:'fan', title: lang==='fr'?'Brumisation & dépoussiérage':'Misting & dust control', body: lang==='fr'?'Réduction jusqu’à 90% des poussières, baisse de température, protection des machines (mines, cimenteries, carrières, fermes, terrasses).':'Up to 90% dust reduction, temperature drop, machine protection (mines, cement, quarries, farms, terraces).' },
      { icon:'sun', title: lang==='fr'?'Solaire & stockage':'Solar & storage', body: lang==='fr'?'Études, fourniture et installation PV, onduleurs, batteries; monitoring et optimisation énergétique pour sites isolés et urbains.':'PV studies, supply & install, inverters, batteries; monitoring & optimisation for off-grid and urban sites.' },
      { icon:'home', title: lang==='fr'?'Domotique & GTB':'Smart home & BMS', body: lang==='fr'?'Legrand Netatmo, capteurs IoT, contrôle d’accès, vidéo, scénarios et suivi conso – maisons, bureaux, cinémas, commerces.':'Legrand Netatmo, IoT sensors, access control, video, scenes & consumption monitoring – homes, offices, cinemas, retail.' },
      { icon:'factory', title: lang==='fr'?'Automatisation industrielle':'Industrial automation', body: lang==='fr'?'Tableaux, capteurs, variateurs, SCADA léger; convoyeurs, lignes lait/jus, brumisateurs; maintenance et formation.':'Panels, sensors, drives, light SCADA; conveyors, dairy/juice lines, misting; maintenance & training.' },
    ]
  },
  projects: { title: lang==='fr'?'Réalisations récentes':'Recent projects', p: lang==='fr'?'Quelques références représentatives. Dossier complet disponible sur demande.':'Representative references. Full dossier on request.' },
  contact: { title: lang==='fr'?'Parlons de votre projet':'Let’s discuss your project', p: lang==='fr'?'Formulaire ou contact direct par WhatsApp ou email.':'Use the form or contact us via WhatsApp or email.',
    placeholders: { name: lang==='fr'?'Votre nom':'Your name', email: lang==='fr'?'vous@domaine.com':'you@domain.com', phone: lang==='fr'?'Téléphone':'Phone', msg: lang==='fr'?'Décrivez votre besoin (brumisation, solaire, domotique, automatisation…)':'Describe your need (misting, solar, smart home, automation…)'},
    cta: lang==='fr'?'Envoyer':'Send', policy: lang==='fr'?'En envoyant, vous acceptez notre politique de confidentialité.':'By sending you accept our privacy policy.' }
})

export default function App(){
  const [lang, setLang] = useState('fr')
  const tr = t(lang)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-[#1f3a5f]/30 grid place-items-center ring-1 ring-[#5a86c8]/40">
              <Wrench className="h-5 w-5 text-[#9ec3ff]" />
            </div>
            <span className="font-semibold tracking-wide">MECASYST INGENIERIE</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#solutions" className="hover:text-white/90 text-white/70">{tr.nav.solutions}</a>
            <a href="#projects" className="hover:text-white/90 text-white/70">{tr.nav.projects}</a>
            <a href="#why" className="hover:text-white/90 text-white/70">{tr.nav.why}</a>
            <a href="#contact" className="hover:text-white/90 text-white/70">{tr.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <a className="rounded-2xl bg-[#2b5aa7] hover:bg-[#244d90] px-4 py-2 text-sm font-medium"
               href={`https://wa.me/${PHONE}?text=${encodeURIComponent(lang==='fr'?'Bonjour MECASYST, je souhaite un devis.':'Hello MECASYST, I’d like a quote.')}`}>
              WhatsApp
            </a>
            <button onClick={()=>setLang(lang==='fr'?'en':'fr')}
                    className="rounded-2xl border border-white/15 px-3 py-2 text-sm flex items-center gap-2 hover:bg-white/10">
              <Globe className="h-4 w-4"/> {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_70%_-10%,rgba(94,129,191,0.18),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
                       className="text-4xl md:text-5xl font-bold leading-tight">{tr.hero.h1}</motion.h1>
            <p className="mt-5 text-white/80 max-w-2xl">{tr.hero.p}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#solutions" className="rounded-2xl bg-[#2b5aa7] hover:bg-[#244d90] px-4 py-2 font-medium">{tr.hero.cta1}</a>
              <a href="#projects" className="rounded-2xl border border-white/20 text-white hover:bg-white/10 px-4 py-2 font-medium">{tr.hero.cta2}</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> {tr.hero.badges[0]}</div>
              <div className="flex items-center gap-2"><Rocket className="h-4 w-4"/> {tr.hero.badges[1]}</div>
            </div>
          </div>
          <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{duration:0.6, delay:0.1}}>
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img alt="MECASYST systems collage"
                   src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop"
                   className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-xs uppercase tracking-wider text-white/70">Savoir-faire / Expertise</div>
                <div className="font-semibold">Brumisation • Solaire • Domotique • Automatisation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="solutions" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{tr.solutions.title}</h2>
        <p className="mt-2 text-white/70">{tr.solutions.p}</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.solutions.cards.map((c, idx)=> (
            <div key={idx} className="bg-slate-950/60 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-base font-semibold">
                {c.icon==='fan' && <Fan className="h-5 w-5 text-[#9ec3ff]"/>}
                {c.icon==='sun' && <Sun className="h-5 w-5 text-[#ffd76a]"/>}
                {c.icon==='home' && <Home className="h-5 w-5 text-[#9ec3ff]"/>}
                {c.icon==='factory' && <Factory className="h-5 w-5 text-emerald-300"/>}
                {c.title}
              </div>
              <p className="mt-2 text-sm text-white/70">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{tr.projects.title}</h2>
        <p className="mt-2 text-white/70">{tr.projects.p}</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {title: lang==='fr'?"Dépoussiérage par brumisation":"Dust-suppression misting", place: lang==='fr'?"Mine d’or d’Essakane":"Essakane gold mine", img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"},
            {title: lang==='fr'?"Domotique résidentielle R+2":"Smart home (R+2)", place:"Ouagadougou", img:"https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop"},
            {title: lang==='fr'?"Champ solaire & monitoring":"Solar field & monitoring", place:"Bamako", img:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"},
          ].map((p, i)=> (
            <div key={i} className="group overflow-hidden bg-slate-950/60 border border-white/10 rounded-2xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"/>
              </div>
              <div className="p-4">
                <div className="text-base font-semibold">{p.title}</div>
                <div className="text-sm text-white/70 mt-1 flex items-center gap-2"><MapPin className="h-4 w-4"/> {p.place}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{tr.contact.title}</h2>
            <p className="mt-2 text-white/70">{tr.contact.p}</p>
            <div className="mt-6 space-y-3 text-white/80">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5"/> <a className="underline underline-offset-4" href={`tel:${PHONE}`}>{TEL_DISPLAY}</a> • <a className="underline underline-offset-4" href={`https://wa.me/${PHONE}`}>WhatsApp</a></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5"/> <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5"/> {ADDRESS}</div>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <label className="text-sm text-white/80">Nom / Name</label>
              <input className="mt-1 w-full rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#2b5aa7]" placeholder={tr.contact.placeholders.name}/>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#2b5aa7]" placeholder={tr.contact.placeholders.email}/>
              </div>
              <div>
                <label className="text-sm text-white/80">{lang==='fr'?'Téléphone':'Phone'}</label>
                <input className="mt-1 w-full rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#2b5aa7]" placeholder={tr.contact.placeholders.phone}/>
              </div>
            </div>
            <div>
              <label className="text-sm text-white/80">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#2b5aa7]" placeholder={tr.contact.placeholders.msg}></textarea>
            </div>
            <button type="submit" className="rounded-2xl w-full flex items-center gap-2 justify-center bg-[#2b5aa7] hover:bg-[#244d90] px-4 py-2 font-medium"><Send className="h-4 w-4"/> {tr.contact.cta}</button>
            <p className="text-xs text-white/60">{tr.contact.policy}</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} MECASYST INGENIERIE — {lang==='fr'?'Tous droits réservés.':'All rights reserved.'}</div>
          <div className="flex items-center gap-6">
            <a href="#">Mentions légales / Legal</a>
            <a href="#">Confidentialité / Privacy</a>
            <a href={`mailto:${EMAIL}`}>Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
