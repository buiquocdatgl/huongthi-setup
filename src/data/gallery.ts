export interface PhotoItem {
  id: string;
  title: string;
  category: string;
  src: string;
  fallbackText: string;
  aspectRatio: string;
  caption?: string;
}

export const brandLogo = {
  src: "/images/logo/logo.jpg",
  fallbackSrc: "/images/logo/logo-placeholder.png",
  alt: "Lẩu Thị Ba - Tiệm Lẩu Bò Tươi Thái Tay",
  title: "LẦU THỊ BA",
  subtitle: "Tiệm Lẩu Bò Tươi Thái Tay",
};

export const restaurantGallery: PhotoItem[] = [
  {
    id: "exterior",
    title: "Mặt Tiền & Nhận Diện Thương Hiệu Quán",
    category: "Mặt Tiền Quán",
    src: "/images/restaurant/exterior.jpg",
    fallbackText: "[HÌNH ẢNH MẶT TIỀN QUÁN]",
    aspectRatio: "aspect-[4/3]",
    caption: "Mặt tiền 74 Wừu - Pleiku với phong cách thiết kế ấm cúng, vật liệu gỗ mộc và hệ thống ánh sáng thu hút thực khách.",
  },
  {
    id: "kitchen",
    title: "Tủ Kính Treo Thịt Bò Tươi 10:00 AM",
    category: "Sơ Chế Bò Tươi",
    src: "/images/restaurant/kitchen.jpg",
    fallbackText: "[TỦ KÍNH BÒ TƯƠI]",
    aspectRatio: "aspect-[4/3]",
    caption: "Quầy tủ kính trưng bày thịt bò tươi với bảng cam kết 'Giờ Nhập Thịt Bò Tươi 10:00' — Minh chứng chất lượng bò tươi trong ngày.",
  },
  {
    id: "dining",
    title: "Trải Nghiệm Thưởng Thức & Check-in Tại Bàn",
    category: "Trải Nghiệm Khách Hàng",
    src: "/images/restaurant/dining.jpg",
    fallbackText: "[KHU VỰC BÀN ĂN]",
    aspectRatio: "aspect-[4/3]",
    caption: "Bàn tiệc lẩu 2 ngăn nghi ngút khói cùng đĩa bò tươi bài trí tinh tế, thu hút thực khách hào hứng check-in.",
  },
  {
    id: "busy-service",
    title: "Bàn Tiệc Lẩu Bò Tươi Giờ Cao Điểm",
    category: "Phục Vụ Cao Điểm",
    src: "/images/restaurant/busy.jpg",
    fallbackText: "[GIỜ CAO ĐIỂM VẬN HÀNH]",
    aspectRatio: "aspect-[4/3]",
    caption: "Mô hình vận hành hiệu suất cao phục vụ liên tục các bàn lẩu đầy ắp món với doanh thu đỉnh điểm 61.5 triệu VNĐ/ngày.",
  },
];

export const foodExecutionGallery: PhotoItem[] = [
  {
    id: "food-01",
    title: "Set Lẩu Bò Tươi 2 Ngăn Signature",
    category: "Món Ăn Signature",
    src: "/images/food/food-01.jpg",
    fallbackText: "[NỒI LẨU SIGNATURE]",
    aspectRatio: "aspect-square",
    caption: "Nước dùng lẩu 2 ngăn thanh ngọt đậm đà kèm các đĩa thịt bò tươi dựng đứng sang trọng.",
  },
  {
    id: "food-02",
    title: "Thịt Bò Tươi Thái Tay Đĩa Dựng Đứng",
    category: "Bò Tươi Thái Tay",
    src: "/images/food/food-02.jpg",
    fallbackText: "[THỊT BÒ TƯƠI THÁI TAY]",
    aspectRatio: "aspect-square",
    caption: "Từng đĩa bò tươi chất lượng cao được bài trí đĩa tròn chân đứng theo chuẩn nhận diện riêng.",
  },
  {
    id: "food-03",
    title: "Bắp Bò & Gân Bò Tuyển Chọn",
    category: "Thực Đơn Nhúng Lẩu",
    src: "/images/food/food-03.jpg",
    fallbackText: "[BẮP BÒ & GÂN BÒ]",
    aspectRatio: "aspect-square",
    caption: "Nguyên liệu thịt bò tuyển chọn kỹ lưỡng, giữ được độ dẻo mềm dính đĩa đặc trưng.",
  },
  {
    id: "food-04",
    title: "Thực Đơn Nhúng Lẩu Phong Phú",
    category: "Đồ Nhúng & Ăn Kèm",
    src: "/images/food/food-04.jpg",
    fallbackText: "[THỰC ĐƠN NHÚNG LẨU]",
    aspectRatio: "aspect-square",
    caption: "Định lượng BOM chuẩn giúp kiểm soát Food Cost ở mức tối ưu ~35%.",
  },
  {
    id: "food-05",
    title: "Quầy Sốt Chấm Công Thức Chuẩn Vị Thị Ba",
    category: "Sốt Chấm Đặc Chế",
    src: "/images/food/food-05.jpg",
    fallbackText: "[QUẦY SỐT CHẤM THỊ BA]",
    aspectRatio: "aspect-square",
    caption: "Bảng công thức sốt chấm đặc chế chuẩn vị Thị Ba giúp tạo dấu ấn hương vị riêng biệt.",
  },
  {
    id: "food-06",
    title: "Cam Kết Chất Lượng Bò Tươi Nhập Hàng Ngày",
    category: "Chuẩn Bày Đĩa & Sơ Chế",
    src: "/images/food/food-06.jpg",
    fallbackText: "[CAM KẾT BÒ TƯƠI]",
    aspectRatio: "aspect-square",
    caption: "Quy trình sơ chế & bảo quản bò tươi trực tiếp nghiêm ngặt, giữ trọn độ tươi ngon tự nhiên.",
  },
];

export const teamGallery: PhotoItem[] = [
  {
    id: "team-photo",
    title: "Đội Ngũ Vận Hành Trực Tiếp Tại Quán",
    category: "Cơ Cấu Nhân Sự",
    src: "/images/team/team-01.jpg",
    fallbackText: "[ĐỘI NGŨ NHÂN VIÊN]",
    aspectRatio: "aspect-[16/9]",
    caption: "Đội ngũ giàu kinh nghiệm thực chiến từ khâu quản lý đến phục vụ mặt sàn.",
  },
  {
    id: "staff-photo",
    title: "Đào Tạo Nghiệp Vụ Phục Vụ Chuẩn SOP",
    category: "Chất Lượng Phục Vụ",
    src: "/images/team/staff-01.jpg",
    fallbackText: "[HÌNH ẢNH PHỤC VỤ]",
    aspectRatio: "aspect-[4/3]",
    caption: "Thái độ niềm nở, đáp ứng yêu cầu thực khách nhanh chóng.",
  },
  {
    id: "kitchen-team",
    title: "Đội Ngũ Bếp & Sơ Chế Nguyên Liệu",
    category: "Vận Hành Khu Bếp",
    src: "/images/team/kitchen-team.jpg",
    fallbackText: "[ĐỘI NGŨ BẾP]",
    aspectRatio: "aspect-[4/3]",
    caption: "Thao tác ra món chuẩn xác, giữ vững chất lượng ổn định từng nồi lẩu.",
  },
];
