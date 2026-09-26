"use client";

import { motion } from "framer-motion";
import { setupModules } from "@/data/services";
import {
  Compass,
  TrendingUp,
  Layout,
  UtensilsCrossed,
  Truck,
  Cpu,
  Users,
  Rocket,
  Sliders,
  CheckCircle2,
  Box,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Compass,
  TrendingUp,
  Layout,
  UtensilsCrossed,
  Truck,
  Cpu,
  Users,
  Rocket,
  Sliders,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Box className="w-3.5 h-3.5" />
            <span>NĂNG LỰC SETUP TRỌN GÓI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            9 Mô-đun Setup Chi Tiết <br />
            <span className="text-gradient-gold">Cùng Bạn Xây Dựng Quán</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Hệ thống 9 mô-đun tư vấn và triển khai trọn gói cho quán F&B. Bạn có thể chọn hợp tác toàn bộ dự án hoặc đăng ký riêng lẻ theo nhu cầu thực tế.
          </p>
        </div>

        {/* 9 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {setupModules.map((mod, idx) => {
            const Icon = iconMap[mod.iconName] || Box;
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl p-7 bg-neutral-900/60 border border-neutral-800 backdrop-blur-md space-y-5 relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                    <span className="font-mono text-2xl font-bold text-amber-400 group-hover:scale-110 transition-transform">
                      {mod.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      {mod.subtitle}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {mod.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-2 space-y-2 border-t border-neutral-800/80">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block font-semibold">
                      Sản Phẩm Bàn Giao (Deliverables):
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-400 font-sans">
                      {mod.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
