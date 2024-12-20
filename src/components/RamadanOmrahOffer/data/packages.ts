export const roomTypes = ["خماسي", "رباعي", "ثلاثي", "ثنائي"] as const;

export type RoomType = typeof roomTypes[number];

export const colorVariants = {
  bronze: {
    gradient: "from-amber-50/80",
    border: "border-amber-300",
    text: "text-amber-800",
    light: "bg-gradient-to-br from-amber-50 to-amber-100/50",
    price: "bg-gradient-to-r from-amber-50/80 to-amber-100/50",
    hover: "hover:border-amber-400 hover:shadow-amber-100/50"
  },
  silver: {
    gradient: "from-slate-100/90",
    border: "border-slate-300",
    text: "text-slate-800",
    light: "bg-gradient-to-br from-slate-50 to-slate-100/50",
    price: "bg-gradient-to-r from-slate-50/80 to-slate-100/50",
    hover: "hover:border-slate-400 hover:shadow-slate-100/50"
  }
};

export interface Hotel {
  city: string;
  name: string;
  nights: string;
}

export interface Package {
  name: string;
  color: "bronze" | "silver";
  hotels: Hotel[];
  prices: Record<RoomType, string>;
}

export const packages: Package[] = [
  {
    name: "ميزاب البيان",
    color: "bronze",
    hotels: [
      {
        city: "المدينة المنورة",
        name: "مجموعة نسك",
        nights: "05 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "ميزاب البيان",
        nights: "10 ليالي"
      }
    ],
    prices: {
      "خماسي": "23000",
      "رباعي": "25000",
      "ثلاثي": "28000",
      "ثنائي": "32000"
    }
  },
  {
    name: "فلسطين",
    color: "silver",
    hotels: [
      {
        city: "المدينة المنورة",
        name: "مجموعة نسك",
        nights: "05 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "فلسطين",
        nights: "10 ليالي"
      }
    ],
    prices: {
      "خماسي": "------",
      "رباعي": "34000",
      "ثلاثي": "38000",
      "ثنائي": "47000"
    }
  }
];