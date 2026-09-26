"use client";

import { motion } from "framer-motion";
import { Check, X, Lock, Unlock, Zap } from "lucide-react";

export default function NotFranchise() {
  return (
    <section id="not-franchise" className="py-20 md:py-28 bg-neutral-950 border-t border-b border-neutral-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>ĐỊNH VỊ MÔ HÌNH HỢP TÁC</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight space-y-1">
            <span className="block text-white whitespace-nowrap">
              Thương Hiệu Của Bạn. Mô Hình Của Bạn.
            </span>
            <span className="block text-gradient-gold whitespace-nowrap">
              Kinh Nghiệm Vận Hành Của Chúng Tôi.
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            Chúng tôi <strong className="text-white font-medium">không bán nhượng quyền (franchise)</strong>. Mục tiêu của chúng tôi là giúp các chủ đầu tư xây dựng và vận hành thương hiệu F&B riêng biệt của chính mình, ứng dụng toàn bộ khung quy trình và kinh nghiệm thực chiến đã thành công.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* CARD 1: Traditional Franchise */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 bg-neutral-900/40 border border-neutral-800/80 space-y-6 relative overflow-hidden group hover:border-red-900/30 transition-all"
          >
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">Mô Hình Nhượng Quyền</span>
                <h3 className="text-2xl font-serif font-bold text-neutral-300 mt-1">Mua Franchise Thương Hiệu Khác</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-800/30 text-red-400 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
            </div>

            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-red-950/60 text-red-400 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-neutral-200 block">Dùng thương hiệu của người khác</strong>
                  <span>Bạn phụ thuộc hoàn toàn vào uy tín và hình ảnh của bên bán nhượng quyền.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-red-950/60 text-red-400 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-neutral-200 block">Chịu ràng buộc về menu & thiết kế</strong>
                  <span>Bị cố định giá bán, danh mục món và phong cách mà không có quyền tự quyết định.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-red-950/60 text-red-400 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-neutral-200 block">Trả phí nhượng quyền & Royalty hàng tháng</strong>
                  <span>Phải chia sẻ % doanh thu hàng tháng bất kể tình hình lời lỗ thực tế của quán.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-red-950/60 text-red-400 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-neutral-200 block">Giới hạn giá trị tài sản thương hiệu</strong>
                  <span>Khi kết thúc hợp đồng nhượng quyền, bạn không sở hữu lại tài sản thương hiệu.</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-neutral-800/80 text-xs text-neutral-500 font-mono italic">
              * Phù hợp cho nhà đầu tư muốn mua sẵn tên tuổi có sẵn, chấp nhận giới hạn quyền tự chủ.
            </div>
          </motion.div>

          {/* CARD 2: Our Setup Model */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 bg-gradient-to-b from-neutral-900 to-neutral-900/90 border border-amber-500/40 space-y-6 relative overflow-hidden shadow-2xl shadow-amber-500/5 group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-amber-500/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">Mô Hình Tư Vấn & Setup F&B</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">Xây Dựng Thương Hiệu Riêng</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center">
                <Unlock className="w-6 h-6" />
              </div>
            </div>

            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/20 text-amber-300 mt-0.5 border border-amber-500/30">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-medium">Sở hữu 100% thương hiệu & Concept</strong>
                  <span>Bạn làm chủ hoàn toàn tên quán, logo, bộ nhận diện và bản quyền mô hình kinh doanh.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/20 text-amber-300 mt-0.5 border border-amber-500/30">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-medium">Giữ lại 100% lợi nhuận hoạt động</strong>
                  <span>Không phải chia % doanh thu hàng tháng. Không có phí Royalty hay phí quản lý thương hiệu.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/20 text-amber-300 mt-0.5 border border-amber-500/30">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-medium">Hệ thống quy trình được thiết kế riêng</strong>
                  <span>SOP bếp, quy trình phục vụ và menu được đo đạc tinh chỉnh tối ưu cho mặt bằng của bạn.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/20 text-amber-300 mt-0.5 border border-amber-500/30">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-medium">Đồng hành trọn gói từ A - Z</strong>
                  <span>Từ ý tưởng, mô hình tài chính, thiết kế layout, công thức món đến khai trương và bàn giao.</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300 font-mono font-medium">
              <span>BẠN SỞ HỮU THƯƠNG HIỆU</span>
              <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30">BÊN TÔI ĐỒNG HÀNH SETUP</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
