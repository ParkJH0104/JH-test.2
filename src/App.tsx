import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Leaf, 
  Shield, 
  Truck, 
  Zap, 
  Factory, 
  Globe, 
  Droplets, 
  Trash2, 
  Thermometer, 
  Maximize, 
  Cpu, 
  Boxes,
  FileCheck,
  ShieldCheck
} from "lucide-react";
import { cn } from "./lib/utils";

// --- Components ---

const SectionHeading = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2 className={cn("text-3xl md:text-4xl font-bold mb-12", className)}>
    {children}
  </h2>
);

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-accent/10">
    <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-accent rounded-sm flex items-center justify-center">
          <Leaf className="text-brand-dark w-5 h-5" />
        </div>
        <div className="flex flex-col -gap-1">
          <span className="font-outfit font-bold text-xl tracking-tighter text-brand-base leading-none uppercase">NEXCYCLO</span>
          <span className="text-[10px] text-brand-base/60 font-medium">넥싸이클로</span>
        </div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-10">
        <a href="#mission" className="text-xs font-semibold text-brand-base/70 hover:text-brand-accent tracking-widest transition-colors">MISSION</a>
        <a href="#solutions" className="text-xs font-semibold text-brand-base/70 hover:text-brand-accent tracking-widest transition-colors">SOLUTIONS</a>
        <a href="#technology" className="text-xs font-semibold text-brand-base/70 hover:text-brand-accent tracking-widest transition-colors">TECHNOLOGY</a>
        <a href="#roadmap" className="text-xs font-semibold text-brand-base/70 hover:text-brand-accent tracking-widest transition-colors">ROADMAP</a>
        <a href="#contact" className="text-xs font-semibold text-brand-base/70 hover:text-brand-accent tracking-widest transition-colors">CONTACT</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="bg-brand-accent/90 text-brand-dark px-6 py-2.5 rounded-full text-xs font-bold hover:bg-brand-accent transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20">
          솔루션 도입 문의
        </button>
        <button className="p-2 text-brand-base/60 hover:text-brand-base">
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <div className="w-full h-0.5 bg-current" />
            <div className="w-2/3 h-0.5 bg-current" />
            <div className="w-full h-0.5 bg-current" />
          </div>
        </button>
      </div>
    </div>
  </header>
);

const HeroIllustration = () => (
  <div className="relative w-full aspect-video lg:aspect-square max-w-2xl mx-auto flex items-center justify-center">
    {/* This is a simplified visual representation of the complex rendering in the image */}
    <div className="absolute inset-0 bg-radial from-brand-accent/10 to-transparent blur-3xl pointer-events-none" />
    
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 01 Raw Material Input */}
      <div className="absolute left-0 top-1/4 flex flex-col gap-6 z-20">
        <div className="flex flex-col gap-1 items-end mr-4">
          <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">01 원료 투입</span>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-base/60 whitespace-nowrap">무기성 오니</span>
            <div className="w-24 h-12 bg-white/5 border border-white/10 rounded-r-xl overflow-hidden">
               <div className="w-full h-full bg-brand-dark/40 blur-sm" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end mr-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-base/60 whitespace-nowrap">굴 패각</span>
            <div className="w-24 h-12 bg-white/5 border border-white/10 rounded-r-xl overflow-hidden">
               <div className="w-full h-full bg-brand-base/10 blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* 02 Synthesis Reactor */}
      <div className="relative w-1/2 aspect-[4/5] bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-t-[100px] border-x border-t border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-radial from-brand-accent/20 via-transparent to-transparent" />
        <div className="w-2/3 h-1/3 bg-black/40 border border-brand-accent/30 rounded-lg flex items-center justify-center relative">
          <div className="absolute inset-0 bg-brand-accent/5 animate-pulse" />
          <div className="text-[8px] font-mono text-brand-accent/40 flex items-center gap-1 uppercase">
            <Leaf className="w-3 h-3" /> NEXCYCLO
          </div>
        </div>
        {/* Step label */}
        <div className="absolute top-10 flex flex-col items-center">
           <span className="text-[10px] font-mono text-white/30">C2</span>
           <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">02 수열합성</span>
        </div>
      </div>

      {/* 03 Flow Line & 03 Product */}
      <div className="absolute right-0 bottom-1/4 flex flex-col items-start ml-4 z-20">
         <div className="mb-4">
           <span className="text-[10px] font-mono text-white/30">C3</span>
           <span className="text-xs font-bold text-brand-accent block uppercase tracking-widest">03 에코블록 탄생</span>
         </div>
         <div className="w-48 h-32 bg-[#D9D9D9]/90 rounded-sm shadow-2xl border border-white/20 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 grid-background opacity-20" />
            <div className="flex flex-col items-center gap-2">
              <Leaf className="w-8 h-8 text-brand-dark/20" />
              <span className="font-outfit font-bold text-xl text-brand-dark/40 tracking-widest text-center uppercase">NEXCYCLO</span>
            </div>
            {/* Spark animation */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "200%"], y: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-1 h-32 bg-brand-accent blur-md rotate-45" 
              />
            </div>
         </div>
      </div>

      {/* Particle dust */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: Math.random() * 400 - 200, y: Math.random() * 400 - 200 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, -40]
            }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-brand-accent rounded-full"
          />
        ))}
      </div>
    </div>
  </div>
);

const BottomSummary = () => (
  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
    <div className="bg-brand-dark/60 backdrop-blur-xl border border-white/5 rounded-full p-2 flex items-center justify-between shadow-2xl">
      {[
        { icon: <Trash2 className="w-4 h-4" />, label: "문제", sub: "매립·소각되는 폐기물" },
        { icon: <Zap className="w-4 h-4" />, label: "해결", sub: "180℃ 수열합성 기술" },
        { icon: <Factory className="w-4 h-4" />, label: "가치 창출", sub: "고강도 에코블록" },
        { icon: <Globe className="w-4 h-4" />, label: "ESG 성과", sub: "지역 인프라로 환원" }
      ].map((item, i) => (
        <div key={i} className="flex flex-1 items-center px-6 group border-r border-white/5 last:border-r-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-brand-accent transition-colors">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{item.label}</span>
              <span className="text-xs text-white/80 whitespace-nowrap">{item.sub}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-48 overflow-hidden bg-brand-dark">
    {/* Pure Brand Dark base */}
    <div className="absolute inset-0 bg-brand-dark" />
    <div className="absolute inset-0 grid-dark opacity-50" />
    
    {/* Subtle Dark Ambient */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] grayscale" />
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 via-brand-dark/40 to-brand-dark pointer-events-none" />

    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          폐기물의 새로운 길, 넥싸이클로
        </div>
        <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-[76px] text-brand-base mb-8 tracking-tight leading-[1.1]">
          버려지는 지구의 짐,<br/>
          <span className="text-brand-accent italic">자원으로 되살립니다</span>
        </h1>
        <p className="text-lg text-brand-base/60 mb-12 max-w-xl leading-relaxed">
          무기성 오니, 굴 패각, 폐유리를 180℃ 수열합성 기술로<br />
          고강도 에코블록으로 전환하는 ESG 순환자원 솔루션 기업
        </p>

        <div className="flex flex-wrap gap-10 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center border border-white/5 rounded-full">
              <Droplets className="w-5 h-5 text-brand-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xl font-bold text-brand-accent">180℃</span>
              <span className="text-xs text-brand-base/40 uppercase tracking-widest">저온 수열합성</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center border border-white/5 rounded-full">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xl font-bold text-brand-base">28 MPa+</span>
              <span className="text-xs text-brand-base/40 uppercase tracking-widest">목표 강도</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-brand-accent text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-brand-accent/20">
            솔루션 카탈로그 다운로드 <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <HeroIllustration />
      </motion.div>
    </div>
    <BottomSummary />
  </section>
);

const CycleDiagram = () => (
  <div className="relative py-12">
    <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap items-center justify-between gap-y-12 gap-x-4 relative z-10">
      {[
        { label: "폐기물", icon: <Trash2 className="w-6 h-6" /> },
        { label: "수열합성", icon: <Zap className="w-6 h-6" /> },
        { label: "에코블록", icon: <Factory className="w-6 h-6" /> },
        { label: "지역 인프라 환원", icon: <Globe className="w-6 h-6" /> }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3 relative">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 shadow-xl flex items-center justify-center text-brand-accent"
          >
            {item.icon}
          </motion.div>
          <div className="flex flex-col items-center text-center">
             <span className="text-[10px] text-brand-base/40 font-bold uppercase tracking-widest mb-0.5">Step {i+1}</span>
             <span className="font-bold text-xs md:text-sm whitespace-nowrap text-brand-base">{item.label}</span>
          </div>
          {i < 3 && (
            <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-brand-accent/30" />
          )}
        </div>
      ))}
    </div>
    
    {/* Background Trace Line */}
    <div className="absolute top-20 left-10 right-10 h-px bg-white/5 hidden md:block" />
  </div>
);

const Mission = () => (
  <section id="mission" className="py-32 px-6 relative overflow-hidden bg-brand-dark text-brand-base grid-dark">
    <div className="absolute inset-0 bg-brand-dark" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="max-w-3xl mb-20">
        <span className="text-brand-accent font-bold uppercase text-xs tracking-[0.3em] mb-4 block">② MISSION (ESG Value)</span>
        <SectionHeading className="mb-6 text-brand-base">지구가 앓고 있는 세 가지 환경 위기를 해결하는 기술적 도전</SectionHeading>
        <p className="text-brand-base/60 leading-relaxed">
          넥싸이클로는 버려지는 것들에 공학적 가치를 부여하여 산업계와 자연이 공존할 수 있는 기술적 해답을 제시합니다.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
        {[
          {
            title: "위기 1: 반도체 대기업 무기성 오니",
            data: "연간 200만 톤+",
            desc: "첨단 산업의 이면에 쌓여가는 고농도 무기성 오니. 매립 한계점에 도달한 산업계의 치명적 리스크입니다.",
            icon: <Factory className="w-8 h-8" />
          },
          {
            title: "위기 2: 정수장·하수처리장 오니",
            data: "연간 300만 톤",
            desc: "생활 인프라에서 필연적으로 발생하는 막대한 양의 오니. 해양 투기 금지 이후 갈 곳을 잃은 도시의 짐입니다.",
            icon: <Droplets className="w-8 h-8" />
          },
          {
            title: "위기 3: 남해안 굴껍데기",
            data: "연간 30만 톤+",
            desc: "지역 경제의 상징이었으나 이제는 해안가 오염의 주범이 된 굴 패각. 방치를 넘어선 자산화가 시급합니다.",
            icon: <Globe className="w-8 h-8" />
          }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white/5 p-8 border border-white/10 shadow-xl rounded-[40px] flex flex-col items-start hover:bg-white/10 transition-all group"
          >
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
              {card.icon}
            </div>
            <h3 className="text-lg font-bold mb-4 h-14 items-start flex text-brand-base">
              {card.title}
            </h3>
            <div className="font-mono text-3xl font-bold text-brand-accent mb-4">{card.data}</div>
            <p className="text-brand-base/40 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <SectionHeading className="mb-0 text-brand-base underline decoration-brand-accent/20 decoration-8 underline-offset-[-2px]">순환경제 모델</SectionHeading>
          <p className="text-sm text-white/40 max-w-md">
            폐기물이 자산으로 전환되어 지역 사회에 공헌하기까지, 넥싸이클로가 설계한 완벽한 자원 순환 다이어그램입니다.
          </p>
          <CycleDiagram />
        </div>
        
        <div className="bg-brand-primary/20 border border-brand-accent/20 text-brand-base p-12 md:p-16 rounded-[40px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 0.3 }}
            className="absolute -bottom-20 -left-20 text-[200px] font-outfit font-black select-none pointer-events-none"
          >
            &ldquo;
          </motion.div>
          
          <div className="relative z-10">
            <h4 className="text-brand-accent font-mono text-xs tracking-widest uppercase mb-8">CEO MESSAGE</h4>
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-12 italic">
              &ldquo;우리는 폐기물을 '처리'의 대상으로 보지 않습니다. 공학적 신뢰를 바탕으로 가치를 재설계하여, 다음 세대를 위한 '자산'으로 되돌려 놓을 뿐입니다.&rdquo;
            </p>
            <div className="flex items-center gap-6 border-t border-brand-base/10 pt-10">
              <div className="w-16 h-16 rounded-full bg-brand-base/10 block overflow-hidden">
                 <div className="w-full h-full bg-gradient-to-tr from-brand-primary to-brand-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">이동해</span>
                <span className="text-sm opacity-50 uppercase tracking-widest mt-1">NEXCYCLO CEO / Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="bg-brand-base text-brand-dark py-32 grid-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <span className="text-brand-primary font-bold uppercase text-xs tracking-[0.3em] mb-4 block">③ SOLUTIONS (Two-Track)</span>
        <SectionHeading className="text-brand-dark mb-6">넥싸이클로의 두 가지 솔루션 트랙</SectionHeading>
        <p className="text-brand-dark/60 leading-relaxed">
          지자체와 산업체의 서로 다른 환경 니즈에 최적화된 맞춘형 자산화 프로세스를 제공합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Track 1: 지자체 솔루션 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white border border-brand-dark/5 shadow-xl shadow-brand-dark/5 rounded-[40px] p-8 md:p-12 flex flex-col relative overflow-hidden group hover:border-brand-primary/20 transition-all"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-[60px]" />
          <div className="mb-12">
            <span className="text-brand-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Track 01</span>
            <h3 className="text-3xl font-bold font-outfit mb-2 text-brand-primary">지자체 솔루션</h3>
            <p className="text-brand-dark/40 text-sm">Government & Municipality Solution</p>
          </div>

          <div className="space-y-8 flex-1">
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "타겟", val: "지자체 정수장·하수처리장, 해양 도시 어가" },
                { label: "원료", val: "정수 오니 + 굴 패각 + 폐유리" },
                { label: "방식", val: "고정식 플랜트 — 프리미엄 에코세라믹 제조" },
                { label: "결과물", val: "지자체 로고 마킹 프리미엄 보도블럭·조경재" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-[10px] text-brand-dark/30 font-bold uppercase tracking-widest">{item.label}</span>
                  <p className="text-sm font-medium">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-dark/5">
            <span className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mb-3 block">ESG EFFECT</span>
            <p className="text-xl font-bold text-brand-primary">지역 순환경제 완성 (Closed-loop)</p>
          </div>
        </motion.div>

        {/* Track 2: 산업체 솔루션 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-brand-dark/5 shadow-xl shadow-brand-dark/5 rounded-[40px] p-8 md:p-12 flex flex-col relative overflow-hidden group hover:border-brand-primary/20 transition-all"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-[60px]" />
          <div className="mb-12">
            <span className="text-brand-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Track 02</span>
            <h3 className="text-3xl font-bold font-outfit mb-2 text-brand-primary">산업체 솔루션</h3>
            <p className="text-brand-dark/40 text-sm">Enterprise & Industry Solution</p>
          </div>

          <div className="space-y-8 flex-1">
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "타겟", val: "반도체·화학 대기업 환경안전팀" },
                { label: "원료", val: "반도체 공정 무기성 오니" },
                { label: "방식", val: "이동식 Eco-Box — 현장 파견 즉시 처리" },
                { label: "결과물", val: "로고 마킹 보도블럭 또는 범용 에코블럭" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-[10px] text-brand-dark/30 font-bold uppercase tracking-widest">{item.label}</span>
                  <p className="text-sm font-medium">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-dark/5">
            <span className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mb-3 block">ESG EFFECT</span>
            <p className="text-xl font-bold text-brand-primary">매립 제로(ZWTL) 즉각 달성</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Technology = () => (
  <section id="technology" className="py-32 px-6 bg-brand-base overflow-hidden grid-background border-t border-brand-dark/5">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="mb-20">
        <span className="text-brand-primary font-bold uppercase text-xs tracking-[0.3em] mb-4 block">④ TECHNOLOGY</span>
        <SectionHeading className="mb-6 text-brand-dark">초격차 수열합성 기술</SectionHeading>
        <p className="text-brand-dark/60 leading-relaxed max-w-2xl">
          넥싸이클로만의 180℃ 저온 수열합성 공법은 에너지 효율을 극대화하면서도 KS 기준을 상회하는 압도적 품질의 에코세라믹을 생산합니다.
        </p>
      </div>

      <div className="mb-32">
         <h3 className="text-xl font-bold mb-12 flex items-center gap-3">
            <Zap className="text-brand-primary w-5 h-5" />
            5단계 공정 플로우
         </h3>
         <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-dark/5 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "원료 전처리", icon: <Trash2 />, desc: "오니, 패각, 폐유리 등 원료 내 불순물 제거 및 균질화" },
                { step: "02", title: "정밀 배합", icon: <Boxes />, desc: "최적의 강도 확보를 위한 원료별 정밀 계량 및 혼합" },
                { step: "03", title: "180℃ 수열합성", icon: <Thermometer />, desc: "저온 및 고압 환경에서 무기성 결합 반응 유도", highlight: true },
                { step: "04", title: "유압프레스 성형", icon: <Maximize />, desc: "40톤 유압 압축을 통해 고강도 블록 형태 구현" },
                { step: "05", title: "양생 및 완성", icon: <ShieldCheck />, desc: "로고 마킹 및 최종 양생을 거친 고강도 에코블록" }
              ].map((node, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "p-8 bg-white border rounded-[40px] flex flex-col items-center text-center group transition-all h-full",
                    node.highlight ? "border-brand-primary ring-4 ring-brand-primary/5 shadow-2xl shadow-brand-primary/10" : "border-brand-dark/5 hover:border-brand-primary/20 shadow-xl shadow-brand-dark/5"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors",
                    node.highlight ? "bg-brand-primary text-brand-base" : "bg-brand-base text-brand-dark/40 group-hover:bg-brand-primary group-hover:text-brand-base"
                  )}>
                    {node.icon}
                  </div>
                  <span className={cn("text-[10px] uppercase font-mono tracking-widest mb-2", node.highlight ? "text-brand-primary/40" : "text-brand-dark/30")}>Step {node.step}</span>
                  <h4 className={cn("font-bold text-sm mb-4 transition-colors", node.highlight ? "text-brand-primary" : "text-brand-dark")}>{node.title}</h4>
                  <p className="text-[11px] text-brand-dark/60 leading-relaxed">{node.desc}</p>
                </motion.div>
              ))}
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         {/* 2. 핵심 기술 스펙 */}
         <div className="bg-brand-dark text-brand-base p-10 md:p-14 rounded-[40px] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px]" />
            <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
              <Cpu className="text-brand-accent w-5 h-5" />
              핵심 기술 스펙
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { label: "반응 온도", val: "180℃", desc: "고에너지 보존형 저온 합성" },
                 { label: "목표 강도", val: "28 MPa+", desc: "KS F 4419 보도블록 기준 상회" },
                 { label: "유해물질 차단", val: "C-S-H Sealing", desc: "결정격자 내 유해물질 완전 봉인" },
                 { label: "환경 친화성", val: "시멘트 최소화", desc: "탄소 배출 저감을 위한 혁신 배합" }
               ].map((spec, i) => (
                 <div key={i} className="flex flex-col">
                    <span className="text-[10px] text-brand-base/40 uppercase tracking-widest mb-1">{spec.label}</span>
                    <div className="text-3xl font-bold text-brand-accent mb-1">{spec.val}</div>
                    <p className="text-xs text-brand-base/60">{spec.desc}</p>
                 </div>
               ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-brand-accent" />
               </div>
               <div>
                  <span className="text-[10px] text-brand-base/40 uppercase tracking-widest block">Patent Status</span>
                  <div className="text-sm font-medium">현재 핵심 기술 관련 특허 2건 출원 중</div>
               </div>
            </div>
         </div>

         {/* 3. 설비 렌더링 (설계 기반) */}
         <div className="bg-white border border-brand-dark/5 rounded-[40px] p-10 md:p-14 flex flex-col shadow-xl shadow-brand-dark/5">
            <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
              <Factory className="text-brand-primary w-5 h-5" />
              공정 설비 렌더링
            </h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
               <div className="bg-brand-base rounded-2xl flex flex-col items-center justify-center p-6 text-center group border border-brand-dark/5">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                    <Droplets className="w-8 h-8 text-brand-primary/20 group-hover:text-brand-primary mb-4 transition-colors" />
                  </motion.div>
                  <span className="text-xs font-bold block mb-1">수열반응기</span>
                  <span className="text-[10px] text-brand-dark/40 uppercase font-mono">Reactor V1</span>
               </div>
               <div className="bg-brand-base rounded-2xl flex flex-col items-center justify-center p-6 text-center group border border-brand-dark/5">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}>
                    <Zap className="w-8 h-8 text-brand-primary/20 group-hover:text-brand-primary mb-4 transition-colors" />
                  </motion.div>
                  <span className="text-xs font-bold block mb-1">유압프레스</span>
                  <span className="text-[10px] text-brand-dark/40 uppercase font-mono">40-Ton Press</span>
               </div>
               <div className="col-span-2 bg-brand-dark rounded-2xl flex items-center p-8 gap-6 group shadow-lg">
                  <div className="w-20 h-20 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                     <Truck className="text-brand-accent w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                     <h4 className="text-brand-base font-bold text-lg group-hover:text-brand-accent transition-colors">이동식 Eco-Box</h4>
                     <p className="text-[10px] text-brand-base/40 leading-relaxed uppercase tracking-widest">Mobile Solution Container / Rendering Base</p>
                  </div>
               </div>
            </div>
            <p className="mt-8 text-[11px] text-brand-dark/40 leading-relaxed italic">
              * 상기 이미지는 설계 데이터를 기반으로 제작된 렌더링 결과물이며, 실제 설비 제작 공정에 따라 변동될 수 있습니다.
            </p>
         </div>
      </div>
    </div>
  </section>
);

const Roadmap = () => (
  <section id="roadmap" className="bg-brand-dark py-32 px-6 overflow-hidden relative">
    <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] pointer-events-none translate-x-1/2" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="mb-20">
        <span className="text-brand-accent font-bold uppercase text-xs tracking-[0.3em] mb-4 block">⑤ ROADMAP (Project Status)</span>
        <SectionHeading className="mb-6 text-brand-base">투명한 실행, 증명된 과정</SectionHeading>
        <p className="text-brand-base/60 leading-relaxed max-w-2xl">
          넥싸이클로는 창업 초기 스타트업으로서의 투명성을 바탕으로, 우리가 현재 어디에 있으며 어디로 향하고 있는지 솔직하게 공유합니다.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-white/10" />
        
        <div className="space-y-12">
          {[
            { 
              date: "2026. 04", 
              title: "법인 설립 완료 ✅", 
              status: "completed", 
              desc: "(주)넥싸이클로 설립 및 공식 사업자 등록 완료" 
            },
            { 
              date: "2026. 04", 
              title: "특허 출원 ✅", 
              status: "completed", 
              desc: "무소성 에코세라믹 필터 및 블록 생산 공정 핵심 기술 특허 출원 완료" 
            },
            { 
              date: "2026. 06 ~ 08", 
              title: "1호기 제작 (진행 중)", 
              status: "in-progress", 
              desc: "수열반응기 + 유압프레스 메인 설비 제작 및 조립 공정 수행 중",
              highlight: true
            },
            { 
              date: "2026. 08 ~ 10", 
              title: "KCL 인증 시험", 
              status: "upcoming", 
              desc: "강도·용출 성능 검증을 위한 시편 제작 및 KCL 공인 인증 성적서 확보 예정" 
            },
            { 
              date: "2026. 하반기", 
              title: "규제 샌드박스 신청", 
              status: "upcoming", 
              desc: "환경부/KEITI 주관 순환경제 트랙 실증 특례 및 규제 샌드박스 신청" 
            },
            { 
              date: "2027 ~", 
              title: "현장 실증 및 스케일업", 
              status: "upcoming", 
              desc: "PoC 완료 후 Eco-Box 현장 파견 및 전국 다거점 설비 확산 전략 추진" 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-8 md:gap-12 relative"
            >
               <div className={cn(
                 "w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 flex items-center justify-center z-10 transition-all duration-500",
                 item.status === 'completed' ? "bg-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20" : 
                 item.status === 'in-progress' ? "bg-brand-accent text-brand-dark ring-4 ring-brand-accent/20 animate-pulse" : "bg-white/5 border border-white/10"
               )}>
                  {item.status === 'completed' ? <FileCheck className="w-4 h-4 md:w-5 md:h-5" /> : (item.status === 'in-progress' ? <Zap className="w-4 h-4 md:w-5 md:h-5" /> : <div className="w-2 h-2 rounded-full bg-white/10" />)}
               </div>
               
               <div className={cn(
                 "pb-8 flex-1 group transition-all",
                 item.highlight && "bg-brand-accent/10 p-8 rounded-[40px] border border-brand-accent/20 -mt-8"
               )}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={cn(
                      "font-mono text-xs font-bold tracking-widest",
                      item.status === 'completed' || item.status === 'in-progress' ? "text-brand-accent" : "text-brand-base/20"
                    )}>
                      {item.date}
                    </span>
                    {item.status === 'in-progress' && (
                      <span className="bg-brand-accent text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Current Step</span>
                    )}
                  </div>
                  <h4 className={cn(
                    "font-bold text-xl mb-3 transition-colors",
                    item.status === 'upcoming' ? "text-brand-base/20" : "text-brand-base"
                  )}>
                    {item.title}
                  </h4>
                  <p className={cn(
                    "text-sm leading-relaxed max-w-xl",
                    item.status === 'upcoming' ? "text-brand-base/10" : "text-brand-base/60"
                  )}>
                    {item.desc}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-brand-dark text-brand-base overflow-hidden relative border-t border-white/5">
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Column: Text & Info */}
        <div className="space-y-12">
          <div>
            <span className="text-brand-accent font-bold uppercase text-xs tracking-[0.3em] mb-4 block">⑥ CONTACT</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              폐기물 자원화 상담은,<br />
              <span className="text-brand-accent italic font-medium">넥싸이클로 바로 상담하세요</span>
            </h2>
            <p className="text-brand-base/40 leading-relaxed max-w-md">
              매립·소각 리스크 해결부터 자원 순환 시스템 구축까지, 넥싸이클로의 공학 전문가들이 최적의 솔루션을 제안합니다.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest block mb-1">Company Info</span>
                <p className="text-sm font-medium leading-loose text-brand-base/80">
                  주식회사 넥싸이클로<br />
                  본사: 서울특별시 강남구 가상로 123 (N빌딩 4층)<br />
                  사업자등록번호: 000-00-00000
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest block mb-1">Contact Details</span>
                <p className="text-sm font-medium leading-loose text-brand-base/80">
                  EMAIL: contact@nexcyclo.io<br />
                  TEL: 02-0000-0000 (상담 대표번호)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] backdrop-blur-sm shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-base/40 uppercase tracking-widest">성함</label>
                <input 
                  type="text" 
                  placeholder="홍길동"
                  className="w-full bg-brand-base/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none transition-all text-brand-base" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-base/40 uppercase tracking-widest">소속 (기관/기업명)</label>
                <input 
                  type="text" 
                  placeholder="넥싸이클로"
                  className="w-full bg-brand-base/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none transition-all text-brand-base" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brand-base/40 uppercase tracking-widest">연락처</label>
              <input 
                type="tel" 
                placeholder="010-0000-0000"
                className="w-full bg-brand-base/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none transition-all text-brand-base" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brand-base/40 uppercase tracking-widest">문의 유형</label>
              <div className="flex gap-4">
                {["솔루션 도입 협의", "파트너십 제안"].map((type) => (
                  <label key={type} className="flex-1 cursor-pointer">
                    <input type="radio" name="type" className="hidden peer" />
                    <div className="bg-brand-base/5 border border-white/10 rounded-xl py-3 text-center text-xs font-bold text-brand-base/40 peer-checked:bg-brand-accent peer-checked:text-brand-dark peer-checked:border-brand-accent transition-all">
                      {type}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brand-base/40 uppercase tracking-widest">문의 내용</label>
              <textarea 
                rows={4}
                placeholder="상세 내용을 입력해주세요."
                className="w-full bg-brand-base/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none transition-all resize-none text-brand-base" 
              />
            </div>

            <button className="w-full bg-brand-accent text-brand-dark py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all active:scale-[0.98] shadow-lg shadow-brand-accent/20">
              상담 신청하기 <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark text-brand-base/40 py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-20">
        <div className="flex items-center gap-2 text-brand-base">
          <Leaf className="w-6 h-6 text-brand-accent" />
          <span className="font-outfit font-bold text-xl uppercase tracking-tighter">NEXCYCLO</span>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-brand-base/60">
           <a href="#hero" className="hover:text-brand-accent transition-colors">Home</a>
           <a href="#mission" className="hover:text-brand-accent transition-colors">Mission</a>
           <a href="#solutions" className="hover:text-brand-accent transition-colors">Solutions</a>
           <a href="#technology" className="hover:text-brand-accent transition-colors">Tech</a>
           <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[11px] border-t border-white/5 pt-10">
        <div className="space-y-3">
          <p className="text-brand-base/60">주식회사 넥싸이클로 | 대표자: 이동해</p>
          <p>사업자등록번호: 000-00-00000 | 본사: 서울특별시 강남구 가상로 123 (N빌딩 4층)</p>
          <p>TEL: 02-0000-0000 | EMAIL: contact@nexcyclo.io</p>
        </div>
        <div className="md:text-right space-y-6">
          <p className="uppercase tracking-widest">© 2026 NEXCYCLO. ALL RIGHTS RESERVED.</p>
          <div className="flex md:justify-end gap-6 text-[10px] font-bold uppercase tracking-tighter">
            <a href="#" className="text-brand-accent hover:text-brand-base transition-colors underline decoration-brand-accent/30 underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-brand-base transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Solutions />
        <Technology />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
