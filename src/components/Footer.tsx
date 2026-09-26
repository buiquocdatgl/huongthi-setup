"use client";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-300 font-serif font-bold">
              FB
            </div>
            <div>
              <span className="text-white font-serif font-bold text-sm block">TƯ VẤN & SETUP MÔ HÌNH QUÁN F&B</span>
              <span className="text-[10px] text-neutral-500">Chúng tôi không bán nhượng quyền. Chúng tôi cùng bạn xây dựng thương hiệu riêng.</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <a href="#overview" className="hover:text-amber-400 transition-colors">Tổng Quan</a>
            <a href="#not-franchise" className="hover:text-amber-400 transition-colors">So Sánh Mô Hình</a>
            <a href="#performance" className="hover:text-amber-400 transition-colors">Case Study Thật</a>
            <a href="#revenue-chart" className="hover:text-amber-400 transition-colors">Hiệu Suất Vận Hành</a>
            <a href="#investment-calc" className="hover:text-amber-400 transition-colors">Mô Hình Tài Chính</a>
            <a href="#capabilities" className="hover:text-amber-400 transition-colors">Giải Pháp Setup</a>
            <a href="#journey" className="hover:text-amber-400 transition-colors">Quy Trình 10 Bước</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Liên Hệ</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500">
          <p>© 2026 F&B Setup & Operation Consulting. Bản quyền thuộc về thương hiệu.</p>
          <p>Số liệu doanh thu trích xuất trực tiếp từ phần mềm bán hàng POS: 18/08 – 18/09/2026.</p>
        </div>
      </div>
    </footer>
  );
}
