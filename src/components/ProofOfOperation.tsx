"use client";

import { motion } from "framer-motion";
import { proofPillars } from "@/data/services";
import { ShieldCheck, Database, Layers, CheckCircle } from "lucide-react";

export default function ProofOfOperation() {
  const iconList = [ShieldCheck, Database, Layers];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-neutral-950 border-t border-b border-neutral-900">
      {/* Background Image with Dark Gradient Mask */}
      <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('/images/restaurant/exterior.jpg')` }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>NĂNG LỰC VẬN HÀNH THỰC TẾ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Kinh Nghiệm Thật. Con Số Thật. <br />
            <span className="text-gradient-gold">Vận Hành Thực Tế.</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Chúng tôi tạo ra giá trị khác biệt cho dự án của bạn bằng nền tảng vận hành thực tế đã được kiểm chứng bằng doanh thu và trải nghiệm thực khách mỗi ngày.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofPillars.map((pillar, idx) => {
            const Icon = iconList[idx] || ShieldCheck;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-2xl p-8 bg-neutral-900/80 border border-neutral-800 backdrop-blur-md space-y-5 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300 shadow-2xl hover:shadow-amber-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-500/30">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-mono text-amber-400 block mt-0.5 font-semibold">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Quy Trình Chuẩn Hóa Thực Chiến</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
