"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";
import SmartImage from "./SmartImage";

export default function Hero() {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-neutral-950">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Strategic Copy in Vietnamese */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-950/80 to-amber-950/50 border border-amber-500/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-amber-300 font-semibold">
                KINH NGHIỆM VẬN HÀNH F&B THỰC TẾ
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15]">
              <span className="inline-block">Chúng Tôi Không Bán&nbsp;Thương&nbsp;Hiệu.</span> <br className="hidden sm:inline" />
              <span className="text-gradient-gold inline-block">Chúng Tôi Xây Dựng Thương Hiệu Cho&nbsp;Bạn.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
              Chúng tôi giúp các chủ đầu tư tự xây dựng và vận hành thương hiệu F&B của riêng mình bằng hệ thống quy trình thực tế được đúc kết từ mô hình quán đang kinh doanh thành công.
            </p>

            {/* Core Guarantee Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono text-amber-300 font-semibold">100% Sở Hữu Thương Hiệu</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Sở hữu hoàn toàn thương hiệu & mô hình kinh doanh của riêng bạn.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono text-amber-300 font-semibold">Số Liệu Vận Hành Thực</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Doanh thu &gt;1.056 tỷ VNĐ. Biên lợi nhuận ròng <span className="text-emerald-400 font-semibold">~35% sau chi phí</span>.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 text-center"
              >
                <span>Tư Vấn Dự Án Của Bạn</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#performance"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold px-7 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-colors text-center"
              >
                <span>Xem Case Study Thực Tế</span>
              </a>
            </div>

            {/* Notice Footer */}
            <p className="text-xs text-neutral-500 font-mono italic">
              * Bạn sở hữu thương hiệu riêng — Không trả phí bản quyền royalty hay ràng buộc hợp đồng nhượng quyền.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: Hero Visual & KPI Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Container */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 p-2 bg-neutral-900/40 backdrop-blur-md shadow-2xl group">
              <SmartImage
                src="/images/restaurant/exterior.jpg"
                alt="Tiệm Lẩu Bò Tươi Thái Tay - 74 Wừu"
                fallbackText="[HÌNH ẢNH MẶT TIỀN QUÁN]"
                aspectRatio="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
                priority
              />

              {/* OVERLAY KPI 1: Real Net Revenue */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-6 right-6 glass-panel-gold rounded-2xl p-4 sm:p-5 shadow-2xl max-w-[240px] border border-amber-500/40"
              >
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">Doanh Thu Thực Tế</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight">
                  1.056 <span className="text-amber-400 text-xs font-sans font-normal">Tỷ VNĐ</span>
                </div>
                <div className="text-[11px] text-neutral-300 mt-1 flex items-center justify-between border-t border-amber-500/20 pt-1.5 font-mono">
                  <span>Tổng Doanh Thu</span>
                  <span className="text-amber-300 font-bold">32 Ngày</span>
                </div>
              </motion.div>

              {/* OVERLAY KPI 2: Average Daily Performance & Net Profit */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-6 left-6 glass-panel rounded-2xl p-4 shadow-2xl max-w-[280px] border border-neutral-700/80 font-mono"
              >
                <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
                  <span className="uppercase text-[10px]">Trung Bình / Ngày</span>
                  <span className="text-amber-400 font-semibold">33.0M VNĐ</span>
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden my-2">
                  <div className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full w-[85%]" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-300">
                  <span>Lợi Nhuận Ròng</span>
                  <span className="text-emerald-400 font-bold">~35% (Sau Chi Phí)</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
