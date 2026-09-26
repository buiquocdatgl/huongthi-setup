"use client";

import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { teamGallery } from "@/data/gallery";
import { Users, UserCheck, GraduationCap, ShieldCheck, HeartHandshake, Layers } from "lucide-react";

export default function TeamOperations() {
  const capabilities = [
    {
      title: "Sơ Đồ Định Biên Nhân Sự",
      desc: "Lập sơ đồ tổ chức tối ưu số lượng nhân sự theo từng khung giờ ca làm việc, giảm thiểu chi phí lãng phí.",
      icon: Users,
    },
    {
      title: "Hỗ Trợ Tuyển Dụng Nhân Sự Chốt",
      desc: "Bộ tiêu chuẩn phỏng vấn và hỗ trợ tuyển dụng nhân sự chốt (Bếp trưởng, Quản lý floor, Thu ngân).",
      icon: UserCheck,
    },
    {
      title: "Quy Trình Phục Vụ Thực Khách",
      desc: "Xây dựng quy trình đón khách, order tại bàn, phục vụ món và chăm sóc khách hàng chuẩn hospitality.",
      icon: HeartHandshake,
    },
    {
      title: "Luồng Vận Hành Bếp & Quầy Bar",
      desc: "Thiết lập luồng sơ chế, lưu trữ nguyên liệu và phân công vị trí đứng bếp ra món mượt mà.",
      icon: Layers,
    },
    {
      title: "Đào Tạo Chuẩn SOP Cho Nhân Viên",
      desc: "Tài liệu đào tạo chuẩn hóa SOP, thực hành chạy thử trước opening và kiểm tra đánh giá định kỳ.",
      icon: GraduationCap,
    },
    {
      title: "Bộ Bảng Kiểm Audit Tiêu Chuẩn",
      desc: "Bộ bảng kiểm (Checklist) vệ sinh an toàn thực phẩm, quản lý tài sản và báo cáo ca làm việc.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>HỆ THỐNG QUẢN TRỊ CON NGƯỜI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Con Người Tạo Nên Sự Xoay Chuyển <br />
            <span className="text-gradient-gold">Trong Vận Hành Thực Tế</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Nhân sự là linh hồn của mọi mô hình F&B. Chúng tôi không chỉ xây dựng quy trình trên giấy mà trực tiếp đào tạo đội ngũ vận hành nhịp nhàng thực tế.
          </p>
        </div>

        {/* Team Photos Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 group space-y-3"
          >
            <SmartImage
              src={teamGallery[0].src}
              alt={teamGallery[0].title}
              fallbackText={teamGallery[0].fallbackText}
              aspectRatio="aspect-[16/9]"
            />
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-amber-300 font-bold uppercase">{teamGallery[0].category}</span>
            </div>
            <p className="text-xs text-neutral-400 font-light">{teamGallery[0].caption}</p>
          </motion.div>

          <div className="md:col-span-5 space-y-6">
            {teamGallery.slice(1).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group space-y-2"
              >
                <SmartImage
                  src={item.src}
                  alt={item.title}
                  fallbackText={item.fallbackText}
                  aspectRatio="aspect-[16/9]"
                />
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-300 font-bold uppercase">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm space-y-3 group hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
