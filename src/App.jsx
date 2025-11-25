import React from 'react';
import { 
  Flame, Leaf, Heart, Gem, XCircle, CheckCircle,
  TrendingUp, Users, ShieldCheck, DollarSign,
  Star, Crown, Sparkles, Activity
} from 'lucide-react';
import Hero from './components/Hero';
import * as C from './constants';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-cream selection:bg-brand-gold selection:text-brand-dark pb-20">
      <Hero />

      {/* 1. What is YO.ENERGY */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Flame className="text-brand-gold w-8 h-8" />
              <span className="gold-gradient-text">{C.SECTION_1.title}</span>
            </h2>
            <p className="text-lg mb-6 leading-relaxed">{C.SECTION_1.intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {C.SECTION_1.list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 border border-brand-gold/30 rounded-xl bg-brand-gold/5 backdrop-blur-sm">
              <p className="italic text-brand-goldLight">{C.SECTION_1.footer}</p>
            </div>
        </div>
      </section>

      {/* 2. The Ring */}
      <section className="py-20 bg-brand-dark/50 border-t border-brand-gold/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Leaf className="text-brand-gold w-8 h-8" />
            <span className="gold-gradient-text">{C.SECTION_2.title}</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl">{C.SECTION_2.intro}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bad */}
            <div className="p-8 rounded-2xl bg-white/5 border border-red-500/20">
              <div className="flex items-center gap-3 mb-6 text-red-400">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-bold">{C.SECTION_2.bad.title}</h3>
              </div>
              <ul className="space-y-3">
                {C.SECTION_2.bad.list.map((item, idx) => (
                   <li key={idx} className="flex gap-3 text-white/60">
                     <span className="text-red-500/50">•</span> {item}
                   </li>
                ))}
              </ul>
            </div>

            {/* Good */}
            <div className="p-8 rounded-2xl bg-brand-gold/10 border border-brand-gold">
              <div className="flex items-center gap-3 mb-6 text-brand-gold">
                <CheckCircle className="w-6 h-6" />
                <h3 className="text-xl font-bold">{C.SECTION_2.good.title}</h3>
              </div>
              <ul className="space-y-3">
                {C.SECTION_2.good.list.map((item, idx) => (
                   <li key={idx} className="flex gap-3 text-brand-cream">
                     <span className="text-brand-gold">•</span> {item}
                   </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-xl font-medium text-brand-blue">
            {C.SECTION_2.footer}
          </div>
        </div>
      </section>

      {/* 3. The App */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="text-4xl">🧘‍♀️</span>
            <span className="gold-gradient-text">{C.SECTION_3.title}</span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
           <div className="lg:col-span-2">
             <h3 className="text-xl mb-6">{C.SECTION_3.intro}</h3>
             <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {C.SECTION_3.list.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded bg-white/5 border-l-2 border-brand-blue">
                    {item}
                  </div>
                ))}
             </div>
             <p className="text-lg leading-relaxed mb-8 text-brand-cream/80 border-l-4 border-brand-gold pl-6 py-2">
               {C.SECTION_3.details}
             </p>
           </div>
           
           <div className="bg-white/5 p-8 rounded-2xl h-fit">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Мы решаем настоящие причины:</h3>
              <div className="flex flex-wrap gap-2">
                 {C.SECTION_3.problems.map((prob, idx) => (
                   <span key={idx} className="px-3 py-1 bg-brand-dark rounded-full text-sm border border-white/10 text-brand-cream/60">
                     {prob}
                   </span>
                 ))}
              </div>
           </div>
        </div>
        <p className="mt-8 text-center text-xl italic font-serif max-w-3xl mx-auto">{C.SECTION_3.footer}</p>
      </section>

      {/* 4. Selling Points */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-[#002430]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <span className="text-brand-gold text-4xl">⚡️</span>
              <span className="gold-gradient-text">{C.SECTION_4.title}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {C.SECTION_4.points.map((pt, idx) => (
               <div key={idx} className="p-6 bg-brand-dark border border-brand-gold/20 rounded-xl hover:border-brand-gold transition-colors">
                  <CheckCircle className="w-6 h-6 text-brand-gold mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">{pt.title}</h3>
                  <p className="text-brand-cream/70 text-sm">{pt.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Future Trends */}
      <section className="py-20 container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🌍</span>
              <span className="gold-gradient-text">{C.SECTION_5.title}</span>
          </h2>
          <div className="bg-brand-blue/10 p-8 rounded-2xl border border-brand-blue/30 relative overflow-hidden">
             <TrendingUp className="absolute -right-10 -bottom-10 w-64 h-64 text-brand-blue/10" />
             <h3 className="text-xl font-bold mb-6 text-brand-blue">{C.SECTION_5.intro}</h3>
             <ul className="space-y-3 relative z-10">
                {C.SECTION_5.list.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-brand-blue mt-1.5 w-1.5 h-1.5 bg-brand-blue rounded-full block"></span>
                    <span>{item}</span>
                  </li>
                ))}
             </ul>
             <p className="mt-8 text-xl font-bold text-center border-t border-brand-blue/20 pt-6">
               {C.SECTION_5.footer}
             </p>
          </div>
      </section>

      {/* 6. Partner Program */}
      <section className="py-20 bg-brand-cream text-brand-dark">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <div className="inline-block p-3 rounded-full bg-brand-gold mb-4">
                  <DollarSign className="w-8 h-8 text-brand-dark" />
               </div>
               <h2 className="text-4xl font-bold mb-4">{C.SECTION_6.title}</h2>
               <p className="text-xl opacity-80">{C.SECTION_6.intro}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
               {C.SECTION_6.steps.map((step, idx) => (
                  <div key={idx} className="bg-brand-dark text-brand-cream p-8 rounded-2xl shadow-xl">
                      <div className="flex items-center gap-2 mb-4">
                        {idx === 0 ? <Gem className="text-brand-blue w-8 h-8"/> : <Activity className="text-brand-gold w-8 h-8"/>}
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="mb-6 opacity-80">{step.desc}</p>
                      {step.earnings.length > 0 && (
                        <div className="bg-brand-blue/10 p-4 rounded-lg border border-brand-blue/30">
                          <p className="text-sm text-brand-blue mb-2 font-bold uppercase tracking-wider">Ваш доход:</p>
                          {step.earnings.map((e, i) => <div key={i} className="font-mono text-lg">{e}</div>)}
                        </div>
                      )}
                  </div>
               ))}
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-8">Варианты тарифов в подписке:</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {C.SECTION_6.subscriptions.map((sub, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow border border-brand-dark/10">
                     <h4 className="text-xl font-bold mb-4 text-brand-dark">{sub.title}</h4>
                     <p className="text-sm text-gray-600 mb-4">С каждой оплаты вы получаете:</p>
                     <ul className="space-y-2 mb-4">
                        {sub.levels.map((lvl, i) => (
                          <li key={i} className="font-bold text-lg text-brand-dark/80">{lvl}</li>
                        ))}
                     </ul>
                     <p className="text-xs text-gray-500 italic">{sub.note}</p>
                  </div>
                ))}
            </div>
         </div>
      </section>

      {/* 7. Why Profitable */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="text-4xl">💸</span>
            <span className="gold-gradient-text">{C.SECTION_7.title}</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {C.SECTION_7.points.map((point, idx) => (
              <div key={idx} className="border-l-2 border-brand-gold pl-6 py-2">
                 <h3 className="text-xl font-bold mb-2 text-brand-cream">{point.title}</h3>
                 <p className="text-brand-cream/60">{point.desc}</p>
              </div>
           ))}
        </div>
      </section>

      {/* Additional Blocks (Everyone, Unique, Specialists) */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6 space-y-20">
            {/* Everyone */}
            <div className="text-center max-w-3xl mx-auto">
               <h3 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
                 <CheckCircle className="text-brand-gold" /> {C.SECTION_ADDITIONAL.everyone.title}
               </h3>
               <p className="text-lg opacity-80">{C.SECTION_ADDITIONAL.everyone.desc}</p>
            </div>

            {/* Unique */}
            <div className="bg-brand-dark p-8 rounded-2xl border border-brand-gold/30">
               <div className="flex items-center gap-3 mb-6">
                 <Star className="text-brand-gold fill-brand-gold w-8 h-8" />
                 <h3 className="text-xl md:text-2xl font-bold">{C.SECTION_ADDITIONAL.unique.title}</h3>
               </div>
               <p className="text-brand-blue font-bold mb-4">{C.SECTION_ADDITIONAL.unique.subtitle}</p>
               <p className="mb-6">{C.SECTION_ADDITIONAL.unique.desc}</p>
               <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {C.SECTION_ADDITIONAL.unique.list.map((l, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-brand-cream/80">
                       <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> {l}
                    </div>
                  ))}
               </div>
               <p className="text-center font-serif italic text-brand-goldLight">{C.SECTION_ADDITIONAL.unique.footer}</p>
            </div>

            {/* Specialists */}
            <div className="bg-gradient-to-br from-brand-dark to-brand-blue/10 p-8 rounded-2xl border border-brand-blue/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-start gap-3">
                <CheckCircle className="text-brand-gold shrink-0 mt-1" />
                <span className="text-brand-cream">{C.SECTION_ADDITIONAL.specialists.title.replace('✔ ', '')}</span>
              </h3>
              
              <p className="text-lg text-brand-blue font-medium mb-6">{C.SECTION_ADDITIONAL.specialists.intro}</p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                 {C.SECTION_ADDITIONAL.specialists.list.map((spec, i) => (
                   <span key={i} className="px-4 py-2 bg-brand-dark rounded-lg border border-brand-blue/30 text-brand-blue shadow-lg hover:border-brand-gold/50 transition-colors cursor-default">
                     {spec}
                   </span>
                 ))}
              </div>

              <div className="bg-brand-gold/5 rounded-xl p-8 border border-brand-gold/10">
                 <h4 className="text-xl font-bold text-brand-gold mb-6 border-b border-brand-gold/20 pb-4">
                   {C.SECTION_ADDITIONAL.specialists.benefitsTitle}
                 </h4>
                 <ul className="space-y-4 mb-8">
                   {C.SECTION_ADDITIONAL.specialists.benefits.map((benefit, i) => (
                     <li key={i} className="flex items-start gap-3 text-lg">
                        <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 mt-0.5 text-brand-gold">
                          <CheckCircle size={14} />
                        </div>
                        <span>{benefit}</span>
                     </li>
                   ))}
                 </ul>
                 
                 <div className="mt-8 p-6 bg-brand-gold/10 rounded-lg border border-brand-gold/30">
                    <p className="text-xl font-serif italic text-center text-brand-goldLight leading-relaxed">
                       {C.SECTION_ADDITIONAL.specialists.tagline}
                    </p>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-brand-cream text-brand-dark">
         <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2">
               <CheckCircle className="text-brand-dark" /> {C.SECTION_CONDITIONS.title}
            </h2>
            <p className="mb-6 font-medium">{C.SECTION_CONDITIONS.intro}</p>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 text-left inline-block w-full">
               <ul className="space-y-4">
                 {C.SECTION_CONDITIONS.list.map((l, i) => (
                   <li key={i} className="flex items-center gap-3 text-lg">
                      <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-cream flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      {l}
                   </li>
                 ))}
               </ul>
            </div>
            <p className="italic text-gray-600">{C.SECTION_CONDITIONS.footer}</p>
         </div>
      </section>

      {/* 8, 9, 10, 11 - Final Blocks */}
      <section className="py-20 container mx-auto px-6 space-y-24">
         
         {/* 8. Difference */}
         <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 flex gap-3 text-brand-blue">
              <Gem className="shrink-0" />
              {C.SECTION_8.title}
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {C.SECTION_8.list.map((l, i) => (
                <li key={i} className="flex gap-3 text-brand-cream/80 items-start">
                  <span className="text-brand-blue mt-1">•</span> {l}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-brand-blue/5 border-l-4 border-brand-blue rounded-r-lg">
               <p className="text-xl font-serif text-brand-blue italic">{C.SECTION_8.footer}</p>
            </div>
         </div>

         {/* 9. Audience */}
         <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">🧚‍♀️</span> {C.SECTION_9.title}
            </h2>
            <div className="flex flex-wrap gap-4">
               {C.SECTION_9.list.map((l, i) => (
                 <span key={i} className="px-6 py-3 bg-white/5 hover:bg-white/10 transition-colors rounded-full border border-white/10 text-lg cursor-default">
                    {l}
                 </span>
               ))}
            </div>
         </div>

         {/* 10. Main Idea */}
         <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold">
               <span className="text-4xl mr-3">🌸</span>
               {C.SECTION_10.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-left mb-12">
               {C.SECTION_10.list.map((l, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-brand-gold/5 rounded-lg border border-brand-gold/10">
                    <Heart className="w-5 h-5 text-brand-gold shrink-0" /> {l}
                 </div>
               ))}
            </div>
            <p className="text-2xl font-serif italic text-brand-cream">{C.SECTION_10.footer}</p>
         </div>

         {/* 11. Final */}
         <div className="bg-gradient-to-r from-brand-gold to-brand-goldLight text-brand-dark rounded-3xl p-12 text-center">
            <div className="inline-block p-4 bg-brand-dark rounded-full mb-6">
               <Crown className="w-10 h-10 text-brand-gold" />
            </div>
            <h2 className="text-3xl font-bold mb-2">{C.SECTION_11.title}</h2>
            <p className="mb-8 opacity-80">{C.SECTION_11.intro}</p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 text-left">
               {C.SECTION_11.list.map((l, i) => (
                 <div key={i} className="flex items-center gap-2 font-medium">
                    <Sparkles className="w-4 h-4 shrink-0" /> {l}
                 </div>
               ))}
            </div>

            <div className="text-3xl font-bold font-serif uppercase tracking-widest border-t border-brand-dark/20 pt-8">
               {C.SECTION_11.footer}
            </div>
         </div>

      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-white/30 text-sm">
         <p>© {new Date().getFullYear()} YO.ENERGY PARTNERS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
