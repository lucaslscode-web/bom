/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Snowflake, 
  Wind, 
  Wrench, 
  ThermometerSnowflake, 
  ShieldCheck, 
  Award, 
  ThumbsUp, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Menu, 
  X,
  Star,
  CheckCircle2,
  Target,
  Eye,
  ChevronRight
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/message/RBNAFL5SQ4MKC1";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050D1A] text-[#FFFFFF] font-sans selection:bg-[#1A6FD4] selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B1628]/95 backdrop-blur-md shadow-lg shadow-[#0D3B8C]/20 py-3' : 'bg-[#0B1628] py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <Snowflake className="h-8 w-8 text-[#4DC3F7]" />
              <span className="font-heading font-bold text-2xl tracking-tight">
                JOTA<span className="text-[#4DC3F7]">CLIMA</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('servicos')} className="text-[#A8B8CC] hover:text-[#4DC3F7] transition-colors font-medium text-sm uppercase tracking-wider">Serviços</button>
              <button onClick={() => scrollToSection('diferenciais')} className="text-[#A8B8CC] hover:text-[#4DC3F7] transition-colors font-medium text-sm uppercase tracking-wider">Diferenciais</button>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A6FD4] hover:bg-[#155bb5] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(26,111,212,0.4)] hover:shadow-[0_0_25px_rgba(26,111,212,0.6)]"
              >
                <Phone className="w-4 h-4" />
                Orçamento
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#A8B8CC] hover:text-[#4DC3F7] transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0B1628] border-t border-[#0D3B8C]/30 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
              <button onClick={() => scrollToSection('servicos')} className="block w-full text-left px-3 py-3 text-[#A8B8CC] hover:text-[#4DC3F7] hover:bg-[#050D1A] rounded-md font-medium uppercase tracking-wider text-sm">Serviços</button>
              <button onClick={() => scrollToSection('diferenciais')} className="block w-full text-left px-3 py-3 text-[#A8B8CC] hover:text-[#4DC3F7] hover:bg-[#050D1A] rounded-md font-medium uppercase tracking-wider text-sm">Diferenciais</button>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full justify-center items-center gap-2 bg-[#1A6FD4] text-white px-6 py-3 rounded-md font-bold uppercase tracking-wider text-sm"
              >
                <Phone className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D3B8C]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4DC3F7]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1628] border border-[#0D3B8C] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#4DC3F7] animate-pulse"></span>
              <span className="text-[#A8B8CC] text-sm font-medium uppercase tracking-widest">Atendimento Residencial e Comercial</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Conforto e bem-estar para seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DC3F7] to-[#1A6FD4]">lar e empresa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#A8B8CC] mb-10 max-w-2xl mx-auto leading-relaxed">
              Especialistas em climatização. Instalação, manutenção e higienização com tecnologia, segurança e o padrão de qualidade que você merece.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#1A6FD4] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(26,111,212,0.5)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <Phone className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
              </a>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="inline-flex items-center justify-center gap-2 bg-[#0B1628] border border-[#0D3B8C] text-[#FFFFFF] hover:bg-[#0D3B8C]/30 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all"
              >
                Conhecer Serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Essência */}
      <section className="py-20 bg-[#050D1A] border-t border-[#0D3B8C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Nossa Essência</h2>
            <div className="w-16 h-1 bg-[#4DC3F7] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Missão */}
            <div className="bg-[#0B1628] border border-[#0D3B8C]/30 rounded-2xl p-8 hover:border-[#4DC3F7]/50 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D3B8C]/30 mb-6">
                <Target className="w-6 h-6 text-[#4DC3F7]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Missão</h3>
              <p className="text-[#A8B8CC] text-sm leading-relaxed">
                Entregar conforto térmico com excelência técnica, pontualidade e transparência em cada atendimento.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-[#0B1628] border border-[#0D3B8C]/30 rounded-2xl p-8 hover:border-[#4DC3F7]/50 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D3B8C]/30 mb-6">
                <Eye className="w-6 h-6 text-[#4DC3F7]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Visão</h3>
              <p className="text-[#A8B8CC] text-sm leading-relaxed">
                Ser referência em climatização em Pernambuco, reconhecidos pela qualidade e pelo cuidado com cada cliente.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-[#0B1628] border border-[#0D3B8C]/30 rounded-2xl p-8 hover:border-[#4DC3F7]/50 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D3B8C]/30 mb-6">
                <ShieldCheck className="w-6 h-6 text-[#4DC3F7]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Valores</h3>
              <p className="text-[#A8B8CC] text-sm leading-relaxed">
                Ética, compromisso, respeito ao cliente e amor pelo que fazemos — Deus no controle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-[#0B1628] border-y border-[#0D3B8C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nossos <span className="text-[#4DC3F7]">Serviços</span></h2>
            <p className="text-[#A8B8CC] max-w-2xl mx-auto">Soluções completas em climatização para garantir o clima perfeito em qualquer ambiente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ThermometerSnowflake className="w-10 h-10" />, title: "Instalação", desc: "Instalação profissional de splits e sistemas centrais com garantia.", images: [] as string[] },
              { icon: <Wind className="w-10 h-10" />, title: "Higienização", desc: "Limpeza profunda eliminando fungos, bactérias e odores.", images: [] as string[] },
              { icon: <Wrench className="w-10 h-10" />, title: "Manutenção", desc: "Preventiva e corretiva para prolongar a vida útil do seu aparelho.", images: [] as string[] },
              { icon: <Snowflake className="w-10 h-10" />, title: "Reparos", desc: "Diagnóstico preciso e conserto rápido para todas as marcas.", images: [] as string[] }
            ].map((service, idx) => (
              <div key={idx} className="bg-[#050D1A] border border-[#0D3B8C]/50 rounded-2xl overflow-hidden hover:border-[#4DC3F7] transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(13,59,140,0.2)]">
                {/* Carousel Area */}
                <div className="h-52 relative overflow-hidden">
                  {service.images.length > 0 ? (
                    <img src={service.images[0]} alt={service.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-b from-[#0B1628] to-[#050D1A] flex flex-col items-center justify-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-[#0D3B8C]/20 flex items-center justify-center text-[#4DC3F7] group-hover:scale-110 group-hover:bg-[#1A6FD4] group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="uppercase text-[#4DC3F7] font-bold text-xs tracking-wider">{service.title}</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-[#A8B8CC] text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#4DC3F7] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Saiba Mais
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="diferenciais" className="py-20 bg-[#050D1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Por que escolher a <span className="text-[#4DC3F7]">Jota Clima</span>?</h2>
              <p className="text-[#A8B8CC] mb-8 text-lg leading-relaxed">
                Não entregamos apenas ar frio. Entregamos tecnologia, eficiência energética e a tranquilidade de um serviço executado por especialistas.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck />, title: "Segurança e Garantia", desc: "Serviços com garantia documentada e peças originais." },
                  { icon: <Award />, title: "Qualidade Técnica", desc: "Equipe altamente treinada e atualizada com as novas tecnologias." },
                  { icon: <ThumbsUp />, title: "Confiança e Transparência", desc: "Orçamentos claros, sem surpresas no final do serviço." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B1628] border border-[#0D3B8C] flex items-center justify-center text-[#4DC3F7]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-heading mb-1">{item.title}</h4>
                      <p className="text-[#A8B8CC] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A6FD4]/20 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative bg-[#0B1628] border border-[#0D3B8C] rounded-2xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                  alt="Técnico realizando manutenção em ar condicionado" 
                  className="rounded-xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0B1628] border-y border-[#0D3B8C]/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0D3B8C]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O que dizem nossos <span className="text-[#4DC3F7]">Clientes</span></h2>
            <p className="text-[#A8B8CC] max-w-2xl mx-auto">A satisfação de quem confia no nosso trabalho.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Carlos Silva", role: "Empresário", text: "A Jota Clima instalou 4 máquinas na minha empresa. Serviço impecável, limpo e muito rápido. Recomendo de olhos fechados." },
              { name: "Mariana Costa", role: "Arquiteta", text: "Sempre indico a Jota Clima para meus clientes. O acabamento da instalação é perfeito e o atendimento é excelente." },
              { name: "Roberto Alves", role: "Cliente Residencial", text: "Meu ar estava pingando e não gelava. A equipe da Jota Clima resolveu no mesmo dia. Preço justo e muita transparência." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#050D1A] border border-[#0D3B8C]/50 rounded-2xl p-8 relative">
                <div className="flex gap-1 text-[#4DC3F7] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[#A8B8CC] mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B1628] border border-[#0D3B8C] flex items-center justify-center font-bold text-[#4DC3F7]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-heading">{testimonial.name}</h4>
                    <span className="text-[#A8B8CC] text-sm">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Review CTA */}
          <div className="mt-16 flex flex-col items-center justify-center gap-4">
            <p className="text-[#A8B8CC] text-sm md:text-base">Já é nosso cliente?</p>
            <a 
              href="https://g.page/r/RBNAFL5SQ4MKC1/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0B1628] border border-[#0D3B8C]/50 rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-[#0D3B8C]/20 transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white text-sm font-semibold">Avalie-nos no Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#050D1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1628] border border-[#0D3B8C] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A6FD4]/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4DC3F7]/10 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">
              Pronto para ter o clima perfeito?
            </h2>
            <p className="text-[#A8B8CC] text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Fale com nossa equipe agora mesmo e agende uma visita técnica ou solicite um orçamento sem compromisso.
            </p>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center gap-3 bg-[#1A6FD4] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(26,111,212,0.6)]"
            >
              <Phone className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1628] border-t border-[#0D3B8C] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Snowflake className="h-8 w-8 text-[#4DC3F7]" />
                <span className="font-heading font-bold text-2xl tracking-tight">
                  JOTA<span className="text-[#4DC3F7]">CLIMA</span>
                </span>
              </div>
              <p className="text-[#A8B8CC] mb-6">
                Conforto e bem-estar para seu lar e sua empresa. Especialistas em soluções completas de climatização.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#050D1A] border border-[#0D3B8C] flex items-center justify-center text-[#A8B8CC] hover:text-[#4DC3F7] hover:border-[#4DC3F7] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#A8B8CC]">
                  <Phone className="w-5 h-5 text-[#4DC3F7] flex-shrink-0 mt-0.5" />
                  <span>+55 81 99686-2280</span>
                </li>
                <li className="flex items-start gap-3 text-[#A8B8CC]">
                  <MapPin className="w-5 h-5 text-[#4DC3F7] flex-shrink-0 mt-0.5" />
                  <span>R. Inglaterra, 42 - Sítio Novo<br/>Olinda - PE</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Horário de Atendimento</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#A8B8CC]">
                  <Clock className="w-5 h-5 text-[#4DC3F7] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Segunda a Sexta</p>
                    <p>08:00 - 17:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-[#A8B8CC]">
                  <Clock className="w-5 h-5 text-[#4DC3F7] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Sábado</p>
                    <p>08:00 - 13:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#0D3B8C]/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#A8B8CC] text-sm">
              &copy; {new Date().getFullYear()} Jota Clima. Todos os direitos reservados.
            </p>
            <p className="text-[#A8B8CC] text-sm flex items-center gap-1">
              Desenvolvido com <Snowflake className="w-3 h-3 text-[#4DC3F7]" /> para máximo conforto.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1A6FD4] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(26,111,212,0.5)] hover:scale-110 transition-transform duration-300"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DC3F7] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#4DC3F7]"></span>
        </span>
      </a>
    </div>
  );
}
