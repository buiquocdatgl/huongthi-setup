"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import {
  processRevenueData,
  businessPerformance,
  getRevenueDistribution,
  formatVND,
} from "@/data/revenue";
import { LineChart as ChartIcon, Sparkles, Zap } from "lucide-react";

export default function RevenueChart() {
  const data = processRevenueData();
  const distribution = getRevenueDistribution();
  const [hoveredData, setHoveredData] = useState<any>(null);

  const avgInMillions = Number((businessPerformance.averageDailyRevenue / 1_000_000).toFixed(2));

  return (
    <section id="revenue-chart" className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <ChartIcon className="w-3.5 h-3.5" />
            <span>KIỂM TOÁN DOANH THU 32 NGÀY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Biểu Đồ Doanh Thu <br />
            <span className="text-gradient-gold">Vận Hành Thực Tế 32 Ngày</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Khảo sát biến động doanh thu từng ngày từ 18/08/2026 đến 18/09/2026. Đường nét đứt màu đỏ thể hiện mức doanh thu trung bình <strong className="text-amber-300">33.0 triệu VNĐ/ngày</strong>.
          </p>
        </div>

        {/* Main Chart Card */}
        <div className="rounded-2xl p-6 md:p-8 bg-neutral-900/60 border border-neutral-800 backdrop-blur-md shadow-2xl space-y-6">
          
          {/* Chart Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <h3 className="text-lg font-serif font-bold text-white">Xu Hướng Doanh Thu Ngày (Đơn vị: Triệu VNĐ)</h3>
              <p className="text-xs text-neutral-400 font-mono">Rê chuột trên biểu đồ để xem doanh thu chính xác theo từng ngày</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="text-neutral-300">Doanh thu theo ngày</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-red-400 border-b border-dashed border-red-400 inline-block" />
                <span className="text-neutral-300">Trung bình (33.0M/ngày)</span>
              </div>
            </div>
          </div>

          {/* Recharts Container */}
          <div className="h-[360px] sm:h-[420px] w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                onMouseMove={(e: any) => {
                  if (e && e.activePayload && e.activePayload[0]) {
                    setHoveredData(e.activePayload[0].payload);
                  }
                }}
                onMouseLeave={() => setHoveredData(null)}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#800020" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
                <XAxis
                  dataKey="formattedDate"
                  stroke="#71717A"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: "#3F3F46" }}
                  interval={2}
                />
                <YAxis
                  stroke="#71717A"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: "#3F3F46" }}
                  unit="M"
                  domain={[15, 65]}
                />
                <Tooltip content={<CustomTooltip />} />
                
                {/* Benchmark Average Line */}
                <ReferenceLine
                  y={avgInMillions}
                  stroke="#F87171"
                  strokeDasharray="5 5"
                  strokeWidth={1.5}
                  label={{
                    value: "TB: 33.0M",
                    fill: "#F87171",
                    fontSize: 10,
                    position: "right",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="revenueInMillions"
                  stroke="#E5C158"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  activeDot={{ r: 6, fill: "#FFF5D6", stroke: "#800020", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
            <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block">Ngày Cao Điểm Nhất</span>
                <span className="text-sm font-bold text-amber-300 font-serif">02/09/2026 (Quốc Khánh 2/9)</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/40">
                61.495M VNĐ
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block">Ngày Thấp Điểm Nhất</span>
                <span className="text-sm font-bold text-neutral-300 font-serif">23/08/2026</span>
              </div>
              <span className="text-xs font-mono font-bold text-neutral-400 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                22.659M VNĐ
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block">Trung Vị Doanh Thu</span>
                <span className="text-sm font-bold text-amber-300 font-serif">Mức Trung Bình Vị Ngày</span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/40 px-2 py-1 rounded border border-amber-800/40">
                31.243M VNĐ
              </span>
            </div>
          </div>

        </div>

        {/* REVENUE DISTRIBUTION / BUSINESS INSIGHTS */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Distribution Breakdown */}
          <div className="lg:col-span-6 rounded-2xl p-6 bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm space-y-6">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Phân Phối Doanh Thu Theo Ngưỡng</span>
            </h3>
            <p className="text-xs text-neutral-400 font-light">
              Phân loại 32 ngày vận hành theo các ngưỡng hiệu suất doanh thu để đánh giá độ ổn định của quán:
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-emerald-400">Ngày Đỉnh Điểm Peak (&gt; 40 Triệu VNĐ)</span>
                  <span className="text-white font-bold">{distribution.peakDays} Ngày ({Math.round((distribution.peakDays / 32) * 100)}%)</span>
                </div>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-400 h-full rounded-full"
                    style={{ width: `${(distribution.peakDays / 32) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-amber-300">Trên Mức Trung Bình (&gt; 34.6M VNĐ)</span>
                  <span className="text-white font-bold">{distribution.aboveAverage} Ngày ({Math.round((distribution.aboveAverage / 32) * 100)}%)</span>
                </div>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full rounded-full"
                    style={{ width: `${(distribution.aboveAverage / 32) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-neutral-300">Quanh Mức Trung Bình (31.3M – 34.6M VNĐ)</span>
                  <span className="text-white font-bold">{distribution.aroundAverage} Ngày ({Math.round((distribution.aroundAverage / 32) * 100)}%)</span>
                </div>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-neutral-400 h-full rounded-full"
                    style={{ width: `${(distribution.aroundAverage / 32) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-red-400">Dưới Mức Trung Bình (&lt; 31.3M VNĐ)</span>
                  <span className="text-white font-bold">{distribution.belowAverage} Ngày ({Math.round((distribution.belowAverage / 32) * 100)}%)</span>
                </div>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-red-400/80 h-full rounded-full"
                    style={{ width: `${(distribution.belowAverage / 32) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Operational Insights Narrative */}
          <div className="lg:col-span-6 rounded-2xl p-6 bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Góc Nhìn Phân Tích Vận Hành Quán</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                <strong className="text-amber-300 block font-semibold">1. Sức chịu tải ngày lễ & Cuối tuần</strong>
                <p className="text-neutral-400">
                  Ngày 02/09 đạt mốc kỷ lục <span className="text-amber-300 font-mono">61.495M VNĐ</span>. Mô hình vận hành cho thấy khả năng phục vụ liên tục trong thời gian ngắn mà không làm đứt gãy luồng bếp.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                <strong className="text-amber-300 block font-semibold">2. Tỷ lệ ổn định doanh thu ngày thường</strong>
                <p className="text-neutral-400">
                  Ngay cả các ngày thấp điểm giữa tuần (tối thiểu <span className="text-amber-300 font-mono">22.65M VNĐ</span>), quán vẫn đảm bảo dư bù đắp toàn bộ chi phí vận hành ngày (OPEX).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                <strong className="text-amber-300 block font-semibold">3. Bài toán nhân rộng chi nhánh mới</strong>
                <p className="text-neutral-400">
                  Với mức doanh thu ổn định trên 33 triệu/ngày, việc áp dụng hệ thống quy trình tiêu chuẩn giúp chủ đầu tư tự tin nhân rộng mô hình mà không sợ sụt giảm chất lượng.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 to-neutral-950 border border-emerald-500/30 space-y-1">
                <strong className="text-emerald-400 block font-semibold">4. Biên lợi nhuận ròng sau chi phí khoảng 35%</strong>
                <p className="text-neutral-300">
                  Tối ưu hóa Food Cost ở mức ~35% và kiểm soát chi phí vận hành (OPEX) ở mức ~30%, đem lại biên lợi nhuận ròng hấp dẫn khoảng <span className="text-emerald-300 font-mono font-bold">35%</span> sau khi trừ hết 100% chi phí.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass-panel-gold p-4 rounded-xl shadow-2xl border border-amber-500/40 text-xs font-mono space-y-1.5 max-w-[220px]">
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-1 text-neutral-300 font-bold">
          <span>{data.date}</span>
          <span className="text-amber-400">{data.dayOfWeek}</span>
        </div>
        <div className="text-sm font-serif font-extrabold text-white">
          {formatVND(data.revenue)}
        </div>
        {data.isPeak && (
          <span className="inline-block bg-red-950 text-red-400 px-2 py-0.5 rounded text-[10px] font-bold border border-red-800/50">
            ★ ĐỈNH DIỂM (LỄ 2/9)
          </span>
        )}
        {data.isLowest && (
          <span className="inline-block bg-neutral-900 text-neutral-400 px-2 py-0.5 rounded text-[10px]">
            MIN DAY RECORD
          </span>
        )}
      </div>
    );
  }
  return null;
}
