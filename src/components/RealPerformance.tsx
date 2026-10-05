"use client";

import { motion } from "framer-motion";
import { DollarSign, Calendar, TrendingUp, Award, CheckCircle2, BarChart2, PieChart } from "lucide-react";

export default function RealPerformance() {
  const kpis = [
    {
      label: "Tổng Doanh Thu Thuần",
      value: "1.056 Tỷ",
      unit: "VNĐ",
      subtext: "1.056.100.000 VNĐ Doanh thu",
      icon: DollarSign,
      color: "from-amber-500 to-amber-600",
      accentBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      label: "Biên Lợi Nhuận Ròng",
      value: "~35%",
      unit: "Sau Chi Phí",
      subtext: "Sau khi trừ hết chi phí & COGS",
      icon: PieChart,
      color: "from-emerald-500 to-emerald-600",
      accentBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      label: "Thời Gian Vận Hành",
      value: "32",
      unit: "Ngày",
      subtext: "Từ 18/08/2026 – 18/09/2026",
      icon: Calendar,
      color: "from-amber-400 to-amber-500",
      accentBg: "bg-neutral-800 text-neutral-300 border-neutral-700",
    },
    {
      label: "Trung Bình Ngày",
      value: "33.0M",
      unit: "VNĐ / Ngày",
      subtext: "33.003.125 VNĐ Trung bình/ngày",
      icon: TrendingUp,
      color: "from-amber-500 to-amber-600",
      accentBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      label: "Doanh Thu Đỉnh Điểm",
      value: "61.5M",
      unit: "VNĐ Peak",
      subtext: "Ghi nhận ngày 02/09/2026",
      icon: Award,
      color: "from-red-500 to-amber-500",
      accentBg: "bg-red-950/50 text-red-400 border-red-800/40",
    },
  ];

  return (
    <section id="performance" className="py-20 md:py-28 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>CASE STUDY VẬN HÀNH THỰC TẾ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Năng Lực Chứng Minh Qua <br />
            <span className="text-gradient-gold">Số Liệu Thực Tế, Không Lý Thuyết</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            &ldquo;Trích xuất báo cáo doanh thu POS thực tế từ mô hình quán F&B đang vận hành kinh doanh với biên lợi nhuận ròng sau chi phí đạt khoảng <strong className="text-emerald-400 font-semibold">35%</strong>.&rdquo;
          </p>
        </div>

        {/* 5 KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl p-5 bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium">
                    {kpi.label}
                  </span>
                  <div className={`p-2 rounded-xl border ${kpi.accentBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {kpi.value}{" "}
                    <span className="text-xs font-sans font-normal text-amber-400 uppercase tracking-widest block sm:inline">
                      {kpi.unit}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono pt-2 border-t border-neutral-800">
                    {kpi.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner on Net Profit Margin */}
        <div className="mt-8 rounded-xl p-4 bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-amber-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <PieChart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-white">Biên Lợi Nhuận Ròng Thực Tế: Sau Chi Phí ~35%</h4>
              <p className="text-xs text-neutral-300">Đã trừ 100% chi phí nguyên liệu (COGS), mặt bằng, nhân sự, điện nước & chi phí vận hành ngày.</p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/40 shrink-0">
            LỢI NHUẬN RÒNG SAU CHI PHÍ ~35%
          </span>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-neutral-400 font-mono flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Xác thực từ dữ liệu POS bán hàng 18/08 – 18/09/2026. Lợi nhuận ròng sau chi phí khoảng 35%. Doanh thu trả lại: 0 VNĐ.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
