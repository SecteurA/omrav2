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
  },
  gold: {
    gradient: "from-yellow-50/90",
    border: "border-yellow-300",
    text: "text-yellow-800",
    light: "bg-gradient-to-br from-yellow-50 to-yellow-100/50",
    price: "bg-gradient-to-r from-yellow-50/80 to-yellow-100/50",
    hover: "hover:border-yellow-400 hover:shadow-yellow-100/50"
  }
};

export interface Hotel {
  city: string;
  name: string;
  nights: string;
}

export interface Package {
  name: string;
  color: "bronze" | "silver" | "gold";
  hotels: Hotel[];
  prices: Record<RoomType, string>;
}

export const packages: Package[] = [
  {
    name: "العمرة الاقتصادية",
    color: "bronze",
    hotels: [
      {
        city: "المدينة المنورة",
        name: "مجموعة ليث ساحة الحرم",
        nights: "04 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "برج الضيافة بدون افطار",
        nights: "09 ليالي"
      }
    ],
    prices: {
      "خماسي": "11500",
      "رباعي": "12500",
      "ثلاثي": "13500",
      "ثنائي": "14500"
    }
  },
  {
    name: "العمرة المميزة",
    color: "silver",
    hotels: [
      {
        city: "المدينة المنورة",
        name: "مجموعة ليث ساحة الحرم",
        nights: "04 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "انفينيتي بدون افطار",
        nights: "09 ليالي"
      }
    ],
    prices: {
      "خماسي": "------",
      "رباعي": "15500",
      "ثلاثي": "16500",
      "ثنائي": "17500"
    }
  },
  {
    name: "العمرة الفاخرة",
    color: "gold",
    hotels: [
      {
        city: "المدينة المنورة",
        name: "كراون بلازا بالإفطار",
        nights: "04 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "سويس بالإفطار",
        nights: "09 ليالي"
      }
    ],
    prices: {
      "خماسي": "------",
      "رباعي": "23500",
      "ثلاثي": "26500",
      "ثنائي": "32500"
    }
  }
];