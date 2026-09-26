"use client";

import { motion } from "framer-motion";
import { setupJourney } from "@/data/services";
import { GitCommit, Clock, CheckCircle2 } from "lucide-react";

export default function SetupJourney() {
  return (
    <section id="journey" className="py-20 md:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <GitCommit className="w-3.5 h-3.5" />
            <span>LỘ TRÌNH TRIỂN KHAI DỰ ÁN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Quy Trình 10 Bước <br />
            <span className="text-gradient-gold">Setup Quán F&B Chuẩn Hóa</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Tiến trình triển khai tiêu chuẩn từ ý tưởng sơ khởi đến ngày Soft Opening và bàn giao vận hành tự động.
          </p>
          <div className="pt-2">
            <span className="text-xs text-amber-300 font-mono inline-block px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40">
              * Linh hoạt: Bạn có thể chọn hợp tác trọn gói toàn bộ dự án hoặc tham gia riêng từng giai đoạn.
            </span>
          </div>
        </div>

        {/* VERTICAL TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/90 via-amber-400/50 to-amber-600/90 -translate-x-1/2 z-0" />

          <div className="space-y-12 relative z-10">
            {setupJourney.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-8 relative`}
                >
                  
                  {/* Timeline Center Badge / Circle Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-neutral-950 border-2 border-amber-400 text-amber-300 font-mono font-bold text-sm flex items-center justify-center shadow-xl shadow-amber-500/20 z-20 group">
                    <span className="group-hover:scale-110 transition-transform">
                      {step.step < 10 ? `0${step.step}` : step.step}
                    </span>
                  </div>

                  {/* Content Card (Half Width on Desktop) */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md space-y-4 shadow-xl hover:border-amber-500/40 transition-all duration-300 ${
                        isEven ? "md:mr-10" : "md:ml-10"
                      }`}
                    >
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800/80 pb-3">
                        <span className="px-2.5 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                          {step.phase}
                        </span>
                        <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-xs bg-neutral-950 px-2.5 py-1 rounded border border-neutral-850">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>{step.duration}</span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <div className="pt-3 border-t border-neutral-800/80">
                        <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block font-semibold mb-1.5">
                          Sản phẩm hoàn thành giai đoạn:
                        </span>
                        <ul className="space-y-1 text-xs text-neutral-300 font-sans">
                          {step.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Grid balance */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
