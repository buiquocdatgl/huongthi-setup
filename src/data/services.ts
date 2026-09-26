export interface SetupModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  phase: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export const setupModules: SetupModule[] = [
  {
    id: "concept-development",
    number: "01",
    title: "Phát Triển Concept & Định Vị",
    subtitle: "Định Vị Thương Hiệu & Thị Trường",
    description: "Xây dựng định vị thương hiệu sắc nét, mô hình kinh doanh phù hợp với khu vực địa lý và đối tượng khách hàng mục tiêu.",
    deliverables: [
      "Hồ sơ định vị thương hiệu & Khách hàng mục tiêu",
      "Concept món ăn & Phong cách thưởng thức",
      "Mô hình kinh doanh & Cấu trúc bảng giá",
      "Chủ đề thiết kế quán & Luồng trải nghiệm thực khách",
    ],
    iconName: "Compass",
  },
  {
    id: "financial-planning",
    number: "02",
    title: "Lập Mô Hình Tài Chính",
    subtitle: "Dự Toán Đầu Tư & Lợi Nhuận",
    description: "Lập mô hình tài chính thực tế dựa trên số liệu vận hành thực tế, dự toán chi phí đầu tư và kiểm soát điểm hòa vốn.",
    deliverables: [
      "Bảng ngân sách CAPEX (Chi phí setup ban đầu)",
      "Bảng phân bổ OPEX (Chi phí vận hành hàng ngày)",
      "Cấu trúc COGS & Mục tiêu biên lợi nhuận",
      "Phân tích điểm hòa vốn & Dòng tiền dự kiến",
    ],
    iconName: "TrendingUp",
  },
  {
    id: "store-planning",
    number: "03",
    title: "Bố Trí Không Gian & Luồng Vận Hành",
    subtitle: "Tối Ưu Layout & Sức Chứa",
    description: "Tối ưu công năng sử dụng mặt bằng, đảm bảo luồng vận hành bếp/quầy bar - phục vụ tách biệt và mượt mà.",
    deliverables: [
      "Quy hoạch phân khu & Tối ưu sức chứa bàn",
      "Sơ đồ mặt bằng Bếp & Quầy bar vận hành",
      "Thiết kế luồng di chuyển khách & Trạm phục vụ",
      "Bảng thông số thiết bị & Công suất điện nước",
    ],
    iconName: "Layout",
  },
  {
    id: "menu-development",
    number: "04",
    title: "Phát Triển Thực Đơn & Công Thức",
    subtitle: "Chuẩn Hóa BOM & Tối Ưu Chi Phí",
    description: "Phát triển thực đơn chuẩn hóa, xây dựng công thức (BOM) chính xác, tối ưu thời gian ra món và tỷ lệ hao hụt.",
    deliverables: [
      "Ma trận thực đơn Món chính Signature & Món kèm",
      "Sổ tay công thức chuẩn & Định lượng phân phần (BOM)",
      "Tính toán chi phí món ăn (Food Costing Architecture)",
      "Quy trình sơ chế & Bày đĩa tiêu chuẩn",
    ],
    iconName: "UtensilsCrossed",
  },
  {
    id: "supplier-setup",
    number: "05",
    title: "Thiết Lập Hệ Thống Nhà Cung Cấp",
    subtitle: "Nguồn Hàng & Tiêu Chuẩn Chất Lượng",
    description: "Kết nối hệ thống nhà cung cấp nguyên liệu tươi sống, thiết bị bếp và dụng cụ vận hành với giá gốc ưu đãi.",
    deliverables: [
      "Danh sách nhà cung cấp thực phẩm tươi & khô uy tín",
      "Mạng lưới nhập khẩu thiết bị bếp thương mại",
      "Bao bì & Vật dụng vận hành in thương hiệu riêng",
      "Tiêu chuẩn quy trình mua hàng & Kiểm nhận đầu vào",
    ],
    iconName: "Truck",
  },
  {
    id: "operation-system",
    number: "06",
    title: "Hệ Thống Vận Hành & Quản Lý POS",
    subtitle: "Công Nghệ, Kiểm Kho & Dòng Tiền",
    description: "Thiết lập phần mềm POS, quy trình quản lý kho, kiểm soát doanh thu ngày và thất thoát nguyên liệu.",
    deliverables: [
      "Cấu trúc phần mềm POS & Danh mục thực đơn",
      "Quy trình quản lý kho & Kiểm kê định kỳ (SOP)",
      "Luồng đối soát doanh thu & Tiền mặt hàng ngày",
      "Dashboard báo cáo ngày dành cho Quản lý",
    ],
    iconName: "Cpu",
  },
  {
    id: "team-setup",
    number: "07",
    title: "Tuyển Dụng & Xây Dựng Đội Ngũ",
    subtitle: "Sơ Đồ Tổ Chức & Định Biên Nhân Sự",
    description: "Xây dựng sơ đồ tổ chức, tuyển dụng nhân sự chốt (bếp trưởng, quản lý, thu ngân) và phân quyền công việc rõ ràng.",
    deliverables: [
      "Sơ đồ tổ chức quán & Kế hoạch định biên nhân sự",
      "Mô tả công việc (JD) & Tiêu chuẩn năng lực",
      "Cấu trúc lương & Thưởng hiệu quả vận hành",
      "Tiêu chí tuyển dụng & Quy trình phỏng vấn",
    ],
    iconName: "Users",
  },
  {
    id: "opening",
    number: "08",
    title: "Đồng Hành Khai Trương & Soft Opening",
    subtitle: "Chạy Thử Tải & Điều Chỉnh Trực Tiếp",
    description: "Triển khai chạy thử (dry run), tổng duyệt toàn bộ luồng phục vụ và đồng hành trực tiếp trong tuần Soft Opening.",
    deliverables: [
      "Checklist tiền khai trương (100+ Điểm kiểm soát)",
      "Chạy thử tải (Dry Run) & Giả lập tình huống đông khách",
      "Giám sát trực tiếp tại quán tuần Soft Opening",
      "Điều chỉnh ngay lập tức các nút thắt vận hành",
    ],
    iconName: "Rocket",
  },
  {
    id: "optimization",
    number: "09",
    title: "Tối Ưu Vận Hành Sau Khai Trương",
    subtitle: "Tinh Chỉnh Số Liệu & Tăng Lợi Nhuận",
    description: "Đánh giá số liệu 30 ngày đầu, tối ưu Food Cost, tinh chỉnh nhân sự và nâng cao trải nghiệm khách hàng.",
    deliverables: [
      "Báo cáo kiểm toán doanh thu & Chi phí 30 ngày đầu",
      "Tối ưu danh mục thực đơn (Menu Engineering)",
      "Tinh chỉnh hiệu suất bếp & Luồng phục vụ",
      "Cố vấn & Hỗ trợ vận hành đường dài",
    ],
    iconName: "Sliders",
  },
];

export const setupJourney: JourneyStep[] = [
  {
    step: 1,
    phase: "KHẢO SÁT DỰ ÁN",
    title: "Khảo Sát Mặt Bằng & Khai Phá Nhu Cầu",
    duration: "Tuần 1",
    description: "Đánh giá vị trí mặt bằng, phân tích tiềm năng khu vực xung quanh và làm rõ mục tiêu tài chính của chủ đầu tư.",
    deliverables: ["Báo cáo đánh giá mặt bằng & Chỉ số khả thi ban đầu"],
  },
  {
    step: 2,
    phase: "ĐỊNH HÌNH CONCEPT",
    title: "Xây Dựng Concept & Phong Cách Mô Hình",
    duration: "Tuần 1 - 2",
    description: "Xây dựng Concept thương hiệu riêng: phong cách ẩm thực, chân dung thực khách mục tiêu và định vị phân khúc giá bán.",
    deliverables: ["Hồ sơ định hướng Thương hiệu & Ẩm thực (Concept Brief)"],
  },
  {
    step: 3,
    phase: "MÔ HÌNH TÀI CHÍNH",
    title: "Lập Ngân Sách Đầu Tư & Vận Hành",
    duration: "Tuần 2",
    description: "Lập dự toán chi tiết vốn đầu tư ban đầu (CAPEX) và ngân sách chi phí vận hành ngày (OPEX) sát thực tế.",
    deliverables: ["Bảng kế hoạch ngân sách tài chính F&B chi tiết"],
  },
  {
    step: 4,
    phase: "THIẾT KẾ MẶT BẰNG",
    title: "Quy Hoạch Công Năng & Luồng Vận Hành",
    duration: "Tuần 2 - 4",
    description: "Bố trí công năng khu vực bếp, quầy thu ngân, phân khu bàn ăn và lập thông số máy móc thiết bị.",
    deliverables: ["Bản vẽ phân khu mặt bằng & Bảng thông số thiết bị"],
  },
  {
    step: 5,
    phase: "THI CÔNG & MUA SẮM",
    title: "Giám Sát Thi Công & Sắm Sửa Thiết Bị",
    duration: "Tuần 3 - 6",
    description: "Giám sát thi công đúng tiêu chuẩn kỹ thuật F&B, thu mua máy móc chuyên dụng và công cụ dụng cụ.",
    deliverables: ["Danh mục mua sắm & Biên bản nghiệm thu chất lượng"],
  },
  {
    step: 6,
    phase: "THỰC ĐƠN & POS",
    title: "Chuẩn Hóa Thực Đơn & Cài Đặt Hệ Thống POS",
    duration: "Tuần 5 - 6",
    description: "Chuẩn hóa định lượng món (BOM), nạp dữ liệu POS, cài đặt máy in bếp và thiết lập quy trình kho.",
    deliverables: ["Sổ tay công thức món & Cơ sở dữ liệu phần mềm POS"],
  },
  {
    step: 7,
    phase: "TUYỂN DỤNG",
    title: "Tuyển Dụng Đội Ngũ Nhân Sự Chốt",
    duration: "Tuần 5 - 7",
    description: "Tuyển dụng các vị trí chủ chốt cho bộ phận Bếp, Phục vụ mặt sàn, Thu ngân và Quản lý quán.",
    deliverables: ["Hợp đồng nhân sự & Quy trình onboarding"],
  },
  {
    step: 8,
    phase: "ĐÀO TẠO SOP",
    title: "Đào Tạo Quy Trình Phục Vụ Tiêu Chuẩn",
    duration: "Tuần 7 - 8",
    description: "Đào tạo nghiệp vụ bếp, quy chuẩn đón tiếp khách, thao tác phần mềm POS và kỹ năng xử lý tình huống.",
    deliverables: ["Chứng nhận hoàn thành đào tạo SOP cho nhân viên"],
  },
  {
    step: 9,
    phase: "SOFT OPENING",
    title: "Chạy Thử Tải & Khai Trương Soft Opening",
    duration: "Tuần 8 - 9",
    description: "Tổ chức chạy thử tải (Dry Run), tinh chỉnh thời gian ra món và chính thức đón những lượt khách đầu tiên.",
    deliverables: ["Đồng hành trực tiếp & Tinh chỉnh vận hành tại quán"],
  },
  {
    step: 10,
    phase: "TỐI ƯU & BÀN GIAO",
    title: "Phân Tích Số Liệu & Bàn Giao Hoàn Chỉnh",
    duration: "Liên tục",
    description: "Phân tích số liệu doanh thu thực tế 30 ngày đầu, cân đối chi phí vận hành và bàn giao hệ thống tự chạy.",
    deliverables: ["Bộ tài liệu bàn giao vận hành hoàn chỉnh cho chủ quán"],
  },
];

export const proofPillars = [
  {
    title: "DOANH NGHIỆP THỰC TẾ",
    subtitle: "Không Phải Mô Hình Tư Vấn Lý Thuyết",
    description: "Chúng tôi trực tiếp vận hành mô hình kinh doanh F&B thực tế hàng ngày, đối mặt với các bài toán nhân sự, chi phí và trải nghiệm khách hàng mỗi giờ.",
    badge: "Kinh Nghiệm Thực Chiến",
  },
  {
    title: "SỐ LIỆU THỰC TẾ",
    subtitle: "Dựa Trên Kết Quả Doanh Thu Đã Kiểm Chứng",
    description: "Mọi tư vấn và thiết kế mô hình đều dựa trên dữ liệu POS thực tế từ 1.056 tỷ VNĐ/tháng, không giả định doanh thu ảo hay profit margin phi lý.",
    badge: "Số Liệu Minh Bạch",
  },
  {
    title: "TRIỂN KHAI THỰC TẾ",
    subtitle: "Đồng Hành Nhúng Tay Xây Dựng Từng Chi Tiết",
    description: "Từ layout bếp, công thức món, mua sắm máy móc đến đào tạo nhân viên — chúng tôi nhúng tay cùng bạn xây dựng từng ngóc ngách của quán.",
    badge: "Setup Trọn Gói",
  },
];

export const financialDisclaimer =
  "Số liệu doanh thu vận hành quá khứ được cung cấp dưới dạng một Case Study thực tế và không cấu thành lời cam kết hay đảm bảo về doanh thu/lợi nhuận trong tương lai cho quán mới. Kết quả của dự án F&B mới phụ thuộc vào vị trí mặt bằng, concept, chiến lược giá, điều kiện thị trường, năng lực quản lý, chi phí vận hành và nhiều yếu tố thực tế khác.";
