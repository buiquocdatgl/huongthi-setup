"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SetupInvestmentSchema,
  DailyOperatingCostSchema,
  defaultInvestmentData,
  defaultDailyOperatingCost,
  benchmarkInvestmentData,
  benchmarkDailyCost,
  calculateTotalInvestment,
  calculateTotalDailyCost,
} from "@/data/investment";
import { businessPerformance, formatVND } from "@/data/revenue";
import { Calculator, Sliders } from "lucide-react";

export default function InvestmentCalculator() {
  const [investment, setInvestment] = useState<SetupInvestmentSchema>(defaultInvestmentData);
  const [dailyCost, setDailyCost] = useState<DailyOperatingCostSchema>(defaultDailyOperatingCost);
  const [isUsingBenchmark, setIsUsingBenchmark] = useState(false);

  const totalInvestment = calculateTotalInvestment(investment);
  const totalDailyCost = calculateTotalDailyCost(dailyCost);

  const avgDailyRevenue = businessPerformance.averageDailyRevenue; // 33,003,125 VND
  const avgMonthlyRevenue = avgDailyRevenue * 30; // ~990,093,750 VND

  // Cost calculations
  const costRatio = totalDailyCost !== null ? (totalDailyCost / avgDailyRevenue) * 100 : null;
  const estimatedDailyContribution =
    totalDailyCost !== null ? avgDailyRevenue - totalDailyCost : null;
  const estimatedMonthlyContribution =
    estimatedDailyContribution !== null ? estimatedDailyContribution * 30 : null;

  // Payback period in months
  const paybackPeriodMonths =
    totalInvestment !== null && estimatedMonthlyContribution !== null && estimatedMonthlyContribution > 0
      ? totalInvestment / estimatedMonthlyContribution
      : null;

  const toggleBenchmark = () => {
    if (isUsingBenchmark) {
      setInvestment(defaultInvestmentData);
      setDailyCost(defaultDailyOperatingCost);
      setIsUsingBenchmark(false);
    } else {
      setInvestment(benchmarkInvestmentData);
      setDailyCost(benchmarkDailyCost);
      setIsUsingBenchmark(true);
    }
  };

  const handleInvestmentChange = (key: keyof SetupInvestmentSchema, value: string) => {
    const num = value === "" ? null : Math.max(0, Number(value));
    setInvestment((prev) => ({ ...prev, [key]: num }));
  };

  const handleDailyCostChange = (key: keyof DailyOperatingCostSchema, value: string) => {
    const num = value === "" ? null : Math.max(0, Number(value));
    setDailyCost((prev) => ({ ...prev, [key]: num }));
  };

  return (
    <section id="investment-calc" className="py-20 md:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>MÔ HÌNH DỰ TOÁN TÀI CHÍNH INTERACTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Từ Ngân Sách Đầu Tư Ban Đầu Đến <br />
            <span className="text-gradient-gold">Hiệu Quả Vận Hành Hàng Ngày</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Nhập ngân sách dự kiến của bạn hoặc bấm nút tải mẫu dữ liệu F&B thực tế bên dưới để tính toán điểm hòa vốn và thời gian hoàn vốn kỳ vọng.
          </p>

          {/* Toggle Preset Button */}
          <div className="pt-2">
            <button
              onClick={toggleBenchmark}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>{isUsingBenchmark ? "Xóa Dữ Liệu Về Mặc Định" : "Tải Mẫu Mô Hình Benchmark Chuẩn (Thực Tế Demo)"}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: SECTION 11 — INITIAL SETUP INVESTMENT */}
          <div className="lg:col-span-6 rounded-2xl p-6 sm:p-8 bg-neutral-900/60 border border-neutral-800 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">HẠNG MỤC CAPEX</span>
                <h3 className="text-xl font-serif font-bold text-white">Chi Phí Đầu Tư Setup Ban Đầu</h3>
              </div>
              <span className="text-xs font-mono text-neutral-400">Vốn Setup Quán</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              {[
                { key: "renovation", label: "Sửa chữa & Decor mặt bằng", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "kitchenEquipment", label: "Thiết bị Bếp & Quầy Bar", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "furniture", label: "Bàn ghế & Nội thất quán", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "posSystem", label: "Hệ thống POS & Công nghệ", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "branding", label: "Biển bảng & Nhận diện", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "initialInventory", label: "Nguyên liệu nhập khai trương", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "licenses", label: "Giấy phép & Pháp lý mở quán", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "other", label: "Chi phí dự phòng phát sinh", placeholder: "[NHẬP SỐ TIỀN]" },
              ].map((item) => {
                const val = investment[item.key as keyof SetupInvestmentSchema];
                return (
                  <div key={item.key} className="flex items-center justify-between gap-4 p-2.5 rounded-lg bg-neutral-950 border border-neutral-850">
                    <span className="text-neutral-300 font-sans text-xs">{item.label}</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={val === null ? "" : val}
                        onChange={(e) => handleInvestmentChange(item.key as keyof SetupInvestmentSchema, e.target.value)}
                        placeholder={item.placeholder}
                        className="w-32 bg-neutral-900 border border-neutral-700 rounded px-2.5 py-1 text-right text-amber-300 font-mono text-xs focus:outline-none focus:border-amber-400 placeholder:text-neutral-600"
                      />
                      <span className="text-[10px] text-neutral-500">VNĐ</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total Initial Investment Summary */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/60 to-neutral-900 border border-amber-500/40 flex items-center justify-between">
              <span className="text-xs font-mono uppercase font-bold text-amber-300">TỔNG VỐN ĐẦU TƯ SETUP (CAPEX)</span>
              <span className="text-xl font-serif font-extrabold text-white">
                {totalInvestment !== null ? formatVND(totalInvestment) : "[CHƯA CÓ DỮ LIỆU]"}
              </span>
            </div>
          </div>

          {/* RIGHT: SECTION 12 — DAILY OPERATING COST */}
          <div className="lg:col-span-6 rounded-2xl p-6 sm:p-8 bg-neutral-900/60 border border-neutral-800 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">HẠNG MỤC OPEX</span>
                <h3 className="text-xl font-serif font-bold text-white">Chi Phí Vận Hành Hàng Ngày</h3>
              </div>
              <span className="text-xs font-mono text-neutral-400">Chi Phí Ngày</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              {[
                { key: "ingredients", label: "Chi phí nguyên liệu (COGS ~35%)", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "labor", label: "Chi phí nhân sự & Quản lý", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "rentAllocation", label: "Chi phí thuê mặt bằng / ngày", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "utilities", label: "Chi phí điện nước & Tiện ích", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "marketing", label: "Marketing & Quảng cáo", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "deliveryPlatform", label: "Phí ứng dụng giao hàng", placeholder: "[NHẬP SỐ TIỀN]" },
                { key: "miscellaneous", label: "Chi phí vận hành khác", placeholder: "[NHẬP SỐ TIỀN]" },
              ].map((item) => {
                const val = dailyCost[item.key as keyof DailyOperatingCostSchema];
                return (
                  <div key={item.key} className="flex items-center justify-between gap-4 p-2.5 rounded-lg bg-neutral-950 border border-neutral-850">
                    <span className="text-neutral-300 font-sans text-xs">{item.label}</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={val === null ? "" : val}
                        onChange={(e) => handleDailyCostChange(item.key as keyof DailyOperatingCostSchema, e.target.value)}
                        placeholder={item.placeholder}
                        className="w-32 bg-neutral-900 border border-neutral-700 rounded px-2.5 py-1 text-right text-amber-300 font-mono text-xs focus:outline-none focus:border-amber-400 placeholder:text-neutral-600"
                      />
                      <span className="text-[10px] text-neutral-500">VNĐ/ngày</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total Daily Cost Summary */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 to-neutral-900 border border-red-800/40 flex items-center justify-between">
              <span className="text-xs font-mono uppercase font-bold text-red-300">TỔNG CHI PHÍ VẬN HÀNH NGÀY (OPEX)</span>
              <span className="text-xl font-serif font-extrabold text-white">
                {totalDailyCost !== null ? formatVND(totalDailyCost) : "[CHƯA CÓ DỮ LIỆU]"}
              </span>
            </div>
          </div>

        </div>

        {/* SECTION 13 — COST VS REVENUE VISUALIZER */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-neutral-900/60 border border-neutral-800 backdrop-blur-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">PHÂN TÍCH TỶ LỆ</span>
              <h3 className="text-xl font-serif font-bold text-white">Cơ Cấu Doanh Thu vs Chi Phí Vận Hành Ngày</h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">Doanh thu trung bình ngày: {formatVND(avgDailyRevenue)}</span>
          </div>

          <div className="space-y-4">
            {/* Revenue Bar */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-neutral-300 font-bold">Doanh Thu Trung Bình Ngày (Dữ Liệu Thực Tế POS)</span>
                <span className="text-amber-400 font-bold">{formatVND(avgDailyRevenue)} (100%)</span>
              </div>
              <div className="w-full bg-neutral-800 h-6 rounded-lg overflow-hidden p-1 flex">
                <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded w-full flex items-center justify-center text-[10px] font-mono text-neutral-950 font-bold">
                  100% DOANH THU
                </div>
              </div>
            </div>

            {/* Operating Cost Bar */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-red-400 font-bold">Ước Tính Chi Phí Vận Hành Ngày (OPEX)</span>
                <span className="text-red-300 font-bold">
                  {totalDailyCost !== null ? `${formatVND(totalDailyCost)} (${costRatio?.toFixed(1)}%)` : "[CHƯA CÓ DỮ LIỆU]"}
                </span>
              </div>
              <div className="w-full bg-neutral-800 h-6 rounded-lg overflow-hidden p-1 flex">
                {costRatio !== null ? (
                  <div
                    className="bg-red-500 h-full rounded flex items-center justify-center text-[10px] font-mono text-white font-bold transition-all duration-500"
                    style={{ width: `${Math.min(100, costRatio)}%` }}
                  >
                    {costRatio.toFixed(1)}% CHI PHÍ
                  </div>
                ) : (
                  <div className="text-[10px] font-mono text-neutral-500 flex items-center px-2">
                    Điền dữ liệu chi phí phía trên để xem tỷ lệ chi phí %
                  </div>
                )}
              </div>
            </div>

            {/* Remaining Operating Contribution Bar */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-emerald-400 font-bold">Lợi Nhuận Ròng Sau Khi Trừ Hết Chi Phí (~35%)</span>
                <span className="text-emerald-300 font-bold">
                  {estimatedDailyContribution !== null ? `${formatVND(estimatedDailyContribution)} (${(100 - (costRatio || 0)).toFixed(1)}%)` : "[CHƯA CÓ DỮ LIỆU]"}
                </span>
              </div>
              <div className="w-full bg-neutral-800 h-6 rounded-lg overflow-hidden p-1 flex">
                {costRatio !== null && estimatedDailyContribution !== null ? (
                  <div
                    className="bg-emerald-500 h-full rounded flex items-center justify-center text-[10px] font-mono text-neutral-950 font-bold transition-all duration-500"
                    style={{ width: `${Math.max(0, 100 - costRatio)}%` }}
                  >
                    {(100 - costRatio).toFixed(1)}% LỢI NHUẬN RÒNG SAU CHI PHÍ
                  </div>
                ) : (
                  <div className="text-[10px] font-mono text-neutral-500 flex items-center px-2">
                    Điền dữ liệu chi phí phía trên để xem lợi nhuận ròng
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-500 font-mono italic pt-2">
            * Phân tích vận hành minh họa mô hình chuẩn: Chi phí vận hành & Food Cost ~65%, Lợi nhuận ròng sau chi phí khoảng 35%.
          </p>
        </div>

        {/* SECTION 14 — INITIAL INVESTMENT & PAYBACK PERIOD ANALYSIS */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-amber-500/40 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">KẾT QUẢ DỰ TOÁN TÀI CHÍNH</span>
              <h3 className="text-xl font-serif font-bold text-white">Phân Tích Lợi Nhuận & Thời Gian Hoàn Vốn</h3>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
              Biên Lợi Nhuận Ròng ~35%
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
              <span className="text-[11px] font-mono text-neutral-400 block uppercase">Tổng Vốn Đầu Tư Setup</span>
              <div className="text-xl font-serif font-extrabold text-amber-300">
                {totalInvestment !== null ? formatVND(totalInvestment) : "[CHƯA CÓ DỮ LIỆU]"}
              </div>
              <span className="text-[10px] text-neutral-500 font-mono">Dự toán ngân sách CAPEX</span>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
              <span className="text-[11px] font-mono text-neutral-400 block uppercase">Doanh Thu Tháng Dự Kiến</span>
              <div className="text-xl font-serif font-extrabold text-white">
                {formatVND(avgMonthlyRevenue)}
              </div>
              <span className="text-[10px] text-neutral-500 font-mono">Dựa trên 33.0M VNĐ/ngày x 30 ngày</span>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-emerald-500/30 space-y-1">
              <span className="text-[11px] font-mono text-emerald-400 block uppercase font-bold">Biên Lợi Nhuận Ròng</span>
              <div className="text-xl font-serif font-extrabold text-emerald-400">
                {costRatio !== null ? `~${(100 - costRatio).toFixed(1)}%` : "[CHƯA CÓ DỮ LIỆU]"}
              </div>
              <span className="text-[10px] text-emerald-300/80 font-mono">Lợi nhuận ròng sau khi trừ hết chi phí</span>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
              <span className="text-[11px] font-mono text-neutral-400 block uppercase">Lợi Nhuận Ròng Tháng</span>
              <div className="text-xl font-serif font-extrabold text-emerald-300">
                {estimatedMonthlyContribution !== null ? formatVND(estimatedMonthlyContribution) : "[CHƯA CÓ DỮ LIỆU]"}
              </div>
              <span className="text-[10px] text-neutral-500 font-mono">Lợi nhuận ròng ước tính / tháng</span>
            </div>

            {/* PAYBACK PERIOD BOX */}
            <div className="sm:col-span-2 lg:col-span-4 p-5 rounded-xl bg-gradient-to-r from-amber-950/60 via-neutral-900 to-emerald-950/40 border border-amber-500/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 font-bold">THỜI GIAN HOÀN VỐN DỰ KIẾN (PAYBACK PERIOD)</span>
                <div className="my-1">
                  {paybackPeriodMonths !== null ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
                        ~{paybackPeriodMonths.toFixed(1)}
                      </span>
                      <span className="text-lg font-mono text-amber-300 font-bold">Tháng (~{(paybackPeriodMonths / 12).toFixed(1)} Năm)</span>
                    </div>
                  ) : (
                    <div className="text-sm font-mono text-neutral-400 py-1">
                      Số liệu hoàn vốn sẽ hiển thị sau khi nhập đủ dữ liệu chi phí vận hành.
                    </div>
                  )}
                </div>
                <p className="text-[11px] text-neutral-400 font-mono">
                  * Với biên lợi nhuận ròng ~35% sau khi trừ hết chi phí, mô hình đạt thời gian hoàn vốn nhanh vượt trội.
                </p>
              </div>
              <div className="px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center shrink-0">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block">LỢI NHUẬN RÒNG MỤC TIÊU</span>
                <span className="text-2xl font-serif font-extrabold text-emerald-300">~35%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
