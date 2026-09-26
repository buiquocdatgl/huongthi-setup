"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldAlert, CheckCircle2, PhoneCall, Mail, MapPin } from "lucide-react";
import { financialDisclaimer } from "@/data/services";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    conceptType: "Tiệm Lẩu Bò Tươi / Hotpot",
    budget: "500 triệu - 1 tỷ VNĐ",
    openingDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION 21: FINANCIAL DISCLAIMER */}
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-md max-w-4xl mx-auto flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mt-0.5 flex-shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs">
            <h4 className="font-mono text-amber-300 font-bold uppercase tracking-wider">Miễn Trừ Trách Nhiệm Chuyên Nghiệp</h4>
            <p className="text-neutral-400 font-light leading-relaxed">
              {financialDisclaimer}
            </p>
          </div>
        </div>

        {/* SECTION 22: MAIN CTA & PROPOSAL FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Strategic Invitation */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>BẮT ĐẦU DỰ ÁN F&B CỦA BẠN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              <span className="inline-block">Bạn Có Ý Tưởng&nbsp;F&B?</span> <br className="hidden sm:inline" />
              <span className="text-gradient-gold inline-block">Hãy Để Chúng Tôi Cùng Bạn Xây Dựng Thương&nbsp;Hiệu.</span>
            </h2>

            <p className="text-neutral-300 text-base font-light leading-relaxed">
              &ldquo;Hãy chia sẻ với chúng tôi về concept, vị trí mặt bằng, ngân sách và thời gian mở quán dự kiến. Chúng tôi sẽ tư vấn giải pháp setup tối ưu nhất cho bạn.&rdquo;
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-4 pt-4 border-t border-neutral-800 text-sm font-mono text-neutral-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Hotline Tư Vấn Trực Tiếp:</span>
                  <strong className="text-white font-mono text-base">092 620 1939 — 0866 201 779</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Địa Chỉ Quán Đang Vận Hành:</span>
                  <span className="text-neutral-200">74 Wừu, Phường Diên Hồng, TP. Pleiku, Gia Lai</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Email Tiếp Nhận Hồ Sơ Setup:</span>
                  <span className="text-neutral-200">setup@lauthiba.vn</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-mono">
              ✓ Chúng tôi cam kết bảo mật 100% ý tưởng kinh doanh & thông tin mặt bằng của đối tác.
            </div>
          </div>

          {/* RIGHT: Proposal Request Form */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-neutral-900/80 border border-neutral-800 backdrop-blur-md shadow-2xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Yêu Cầu Proposal Đã Được Gửi!</h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto font-light">
                  Cảm ơn bạn đã liên hệ. Đội ngũ chuyên gia setup của chúng tôi sẽ phân tích thông tin và gọi lại tư vấn trong vòng <strong className="text-amber-300">24 giờ làm việc</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-neutral-800 text-neutral-200 font-mono text-xs uppercase hover:bg-neutral-700 transition-colors"
                >
                  Gửi Yêu Cầu Khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-neutral-800 pb-3 mb-4">
                  <h3 className="text-xl font-serif font-bold text-white">Đăng Ký Nhận Đề Xuất Setup (Proposal)</h3>
                  <p className="text-xs text-neutral-400 font-mono">Điền thông tin dự án để nhận tư vấn và phương án setup chi tiết</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-1">Họ & Tên Chủ Đầu Tư *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-1">Số Điện Thoại / Zalo *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0901 234 567"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-1">Email Liên Hệ</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-1">Khu Vực Mở Quán Dự Kiến</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="TP.HCM, Đà Nẵng, Pleiku, ..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-1">Loại Hình Mô Hình F&B</label>
                    <select
                      value={formData.conceptType}
                      onChange={(e) => setFormData({ ...formData, conceptType: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option>Tiệm Lẩu Bò Tươi / Hotpot</option>
                      <option>Mô Hình Nướng / BBQ Grill</option>
                      <option>Cà Phê Bistro & Lounge</option>
                      <option>Quán Nhậu Modern Dining</option>
                      <option>Mô Hình Khác (Cần tư vấn thêm)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-1">Ngân Sách Đầu Tư Dự Kiến</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option>Dưới 500 triệu VNĐ</option>
                      <option>500 triệu - 1 tỷ VNĐ</option>
                      <option>1 tỷ - 2 tỷ VNĐ</option>
                      <option>Trên 2 tỷ VNĐ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1">Dự Kiến Thời Gian Mở Quán</label>
                  <input
                    type="text"
                    value={formData.openingDate}
                    onChange={(e) => setFormData({ ...formData, openingDate: e.target.value })}
                    placeholder="VD: Trong vòng 3 tháng tới hoặc Càng sớm càng tốt"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1">Mô Tả Thêm Về Ý Tưởng Hoặc Thắc Mắc</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mặt bằng hiện tại ra sao, diện tích bao nhiêu m2, đã có kinh nghiệm F&B chưa..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40"
                >
                  <span>Gửi Yêu Cầu Nhận Proposal</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
