"use client";

import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { foodExecutionGallery } from "@/data/gallery";
import { Utensils, Flame, Check } from "lucide-react";

export default function MenuExecution() {
  return (
    <section className="py-20 md:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Utensils className="w-3.5 h-3.5" />
            <span>CHUẨN HÓA SẢN PHẨM & ẨM THỰC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Chất Lượng Sản Phẩm & <br />
            <span className="text-gradient-gold">Quy Trình Ra Món Chuẩn SOP</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Chuẩn hóa công thức chế biến, định lượng BOM chính xác và quy trình ra món đồng nhất. Đảm bảo trải nghiệm hương vị đỉnh cao gắn liền với hiệu quả kiểm soát Food Cost.
          </p>
        </div>

        {/* Asymmetric Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodExecutionGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-4 bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm space-y-4 group hover:border-amber-500/30 transition-all duration-300"
            >
              <SmartImage
                src={item.src}
                alt={item.title}
                fallbackText={item.fallbackText}
                aspectRatio="aspect-square"
              />

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 uppercase font-semibold">{item.category}</span>
                  <span className="text-neutral-500 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-red-500" />
                    <span>Tiêu Chuẩn SOP</span>
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-normal">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Product Standards Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold block">Sổ Tay Công Thức & BOM</span>
              <span className="text-neutral-400">Công thức chuẩn định lượng gram</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold block">Kiểm Soát Food Cost</span>
              <span className="text-neutral-400">Tối ưu giá vốn nguyên liệu ~35%</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold block">Bày Đĩa & Tốc Độ Ra Món</span>
              <span className="text-neutral-400">Thời gian ra món &lt; 5-7 phút</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
