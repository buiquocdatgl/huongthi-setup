"use client";

import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { restaurantGallery } from "@/data/gallery";
import { Camera, MapPin } from "lucide-react";

export default function ShowcaseGallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>HÌNH ẢNH KHÔNG GIAN VẬN HÀNH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Hình Ảnh Thực Tế <br />
            <span className="text-gradient-gold">Đằng Sau Các Con Số</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Hình ảnh thực tế từ mô hình quán F&B đang vận hành trực tiếp. Thiết kế không gian sang trọng, tối ưu luồng di chuyển và tạo cảm giác ấm cúng cho thực khách.
          </p>
        </div>

        {/* Editorial Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Main Featured Photo 1 (Exterior) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 group space-y-3"
          >
            <SmartImage
              src={restaurantGallery[0].src}
              alt={restaurantGallery[0].title}
              fallbackText={restaurantGallery[0].fallbackText}
              aspectRatio="aspect-[16/9]"
            />
            <div className="flex items-center justify-between text-xs font-mono pt-1">
              <span className="text-amber-300 font-bold uppercase tracking-wider">{restaurantGallery[0].category}</span>
              <span className="text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>74 Wừu, Pleiku, Gia Lai</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-light">{restaurantGallery[0].caption}</p>
          </motion.div>

          {/* Side Photo 2 (Interior) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 group space-y-3"
          >
            <SmartImage
              src={restaurantGallery[1].src}
              alt={restaurantGallery[1].title}
              fallbackText={restaurantGallery[1].fallbackText}
              aspectRatio="aspect-[4/3] md:aspect-[4/5]"
            />
            <div className="flex items-center justify-between text-xs font-mono pt-1">
              <span className="text-amber-300 font-bold uppercase tracking-wider">{restaurantGallery[1].category}</span>
            </div>
            <p className="text-xs text-neutral-400 font-light">{restaurantGallery[1].caption}</p>
          </motion.div>

          {/* Row 2: 3 Cards Grid */}
          {restaurantGallery.slice(2).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="md:col-span-3 group space-y-3"
            >
              <SmartImage
                src={item.src}
                alt={item.title}
                fallbackText={item.fallbackText}
                aspectRatio="aspect-[4/3]"
              />
              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-amber-300 font-bold uppercase tracking-wider">{item.category}</span>
              </div>
              <p className="text-xs text-neutral-400 font-light line-clamp-2">{item.caption}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
