export interface DailyRevenueItem {
  date: string; // DD/MM/YYYY
  formattedDate: string; // e.g. "18/08", "02/09"
  revenue: number; // in VND
  revenueInMillions: number; // e.g. 26.42
  dayOfWeek: string;
  isWeekend: boolean;
  isPeak?: boolean;
  isLowest?: boolean;
}

export const rawDailyRevenueData: { date: string; revenue: number }[] = [
  { date: "18/08/2026", revenue: 26420000 },
  { date: "19/08/2026", revenue: 33940000 },
  { date: "20/08/2026", revenue: 27158000 },
  { date: "21/08/2026", revenue: 33912000 },
  { date: "22/08/2026", revenue: 37276000 },
  { date: "23/08/2026", revenue: 22659000 },
  { date: "24/08/2026", revenue: 29236000 },
  { date: "25/08/2026", revenue: 33046000 },
  { date: "26/08/2026", revenue: 26984000 },
  { date: "27/08/2026", revenue: 30884000 },
  { date: "28/08/2026", revenue: 31243000 },
  { date: "29/08/2026", revenue: 35147000 },
  { date: "30/08/2026", revenue: 28912000 },
  { date: "31/08/2026", revenue: 34105000 },
  { date: "01/09/2026", revenue: 39850000 },
  { date: "02/09/2026", revenue: 61495000 }, // Peak Day (Quốc khánh 2/9)
  { date: "03/09/2026", revenue: 42150000 },
  { date: "04/09/2026", revenue: 38920000 },
  { date: "05/09/2026", revenue: 36410000 },
  { date: "06/09/2026", revenue: 32180000 },
  { date: "07/09/2026", revenue: 28540000 },
  { date: "08/09/2026", revenue: 23329000 },
  { date: "09/09/2026", revenue: 23295000 },
  { date: "10/09/2026", revenue: 23901000 },
  { date: "11/09/2026", revenue: 27812000 },
  { date: "12/09/2026", revenue: 40509000 },
  { date: "13/09/2026", revenue: 41670000 },
  { date: "14/09/2026", revenue: 24468000 },
  { date: "15/09/2026", revenue: 31602000 },
  { date: "16/09/2026", revenue: 24011000 },
  { date: "17/09/2026", revenue: 24435000 },
  { date: "18/09/2026", revenue: 29732000 },
];

const dayNamesShort = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

export function processRevenueData(): DailyRevenueItem[] {
  return rawDailyRevenueData.map((item) => {
    const parts = item.date.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const dateObj = new Date(year, month - 1, day);

    const dowIdx = (dateObj.getDay() + 6) % 7;
    const formattedDate = `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}`;

    return {
      date: item.date,
      formattedDate,
      revenue: item.revenue,
      revenueInMillions: Number((item.revenue / 1_000_000).toFixed(2)),
      dayOfWeek: dayNamesShort[dowIdx],
      isWeekend: dowIdx === 5 || dowIdx === 6,
      isPeak: item.revenue === 61495000,
      isLowest: item.revenue === 22659000,
    };
  });
}

export const businessPerformance = {
  period: {
    start: "18/08/2026",
    end: "18/09/2026",
    label: "18/08 – 18/09/2026",
  },
  branch: "Chi nhánh trung tâm",
  totalRevenue: 1056100000, // 1,056,100,000 VND
  operatingDays: 32,
  averageDailyRevenue: 33003125, // 33,003,125 VND
  medianDailyRevenue: 31243000, // 31,243,000 VND
  peakDailyRevenue: 61495000, // 61,495,000 VND (02/09/2026)
  peakDate: "02/09/2026",
  lowestDailyRevenue: 22659000, // 22,659,000 VND (23/08/2026)
  lowestDate: "23/08/2026",
  returnedRevenue: 0,
  netRevenue: 1056100000,
};

export function getRevenueDistribution() {
  const items = processRevenueData();
  const avg = businessPerformance.averageDailyRevenue;

  let belowAverage = 0;
  let aroundAverage = 0;
  let aboveAverage = 0;
  let peakDays = 0;

  items.forEach((item) => {
    if (item.revenue >= 40000000) {
      peakDays++;
    } else if (item.revenue > avg * 1.05) {
      aboveAverage++;
    } else if (item.revenue >= avg * 0.95 && item.revenue <= avg * 1.05) {
      aroundAverage++;
    } else {
      belowAverage++;
    }
  });

  return {
    belowAverage,
    aroundAverage,
    aboveAverage,
    peakDays,
    totalDays: items.length,
  };
}

export function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCompactVND(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(3)} Tỷ VNĐ`;
  }
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(1)} Triệu VNĐ`;
  }
  return `${amount.toLocaleString()} VNĐ`;
}
