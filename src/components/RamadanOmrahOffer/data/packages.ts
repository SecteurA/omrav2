export const roomTypes = ["سداسي", "خماسي", "رباعي", "ثلاثي", "ثنائي"] as const;

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
        name: "دائرة الحرم المدينة",
        nights: "05 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "ميزاب البيان",
        nights: "10 ليالي"
      }
    ],
    prices: {
      "سداسي": "19900",
      "خماسي": "21500",
      "رباعي": "22700",
      "ثلاثي": "24500",
      "ثنائي": "27900"
    }
  },
  {
    name: "ودام المسفلة",
    color: "silver",
    hotels: [
      {
        city: "المدينة المنورة",
        name: "دائرة الحرم المدينة",
        nights: "05 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "ودام المسفلة",
        nights: "10 ليالي"
      }
    ],
    prices: {
      "سداسي": "21900",
      "خماسي": "22900",
      "رباعي": "24300",
      "ثلاثي": "26500",
      "ثنائي": "30900"
    }
  },
  {
    name: "ابراج التيسير",
    color: "bronze",
    hotels: [
      {
        city: "المدينة المنورة",
        name: "دائرة الحرم المدينة",
        nights: "05 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "ابراج التيسير",
        nights: "10 ليالي"
      }
    ],
    prices: {
      "سداسي": "------",
      "خماسي": "23900",
      "رباعي": "25500",
      "ثلاثي": "27900",
      "ثنائي": "33000"
    }
  },
  {
    name: "ابراج الكسوة",
    color: "silver",
    hotels: [
      {
        city: "المدينة المنورة",
        name: "دائرة الحرم المدينة",
        nights: "05 ليالي"
      },
      {
        city: "مكة المكرمة",
        name: "ابراج الكسوة",
        nights: "10 ليالي"
      }
    ],
    prices: {
      "سداسي": "------",
      "خماسي": "24500",
      "رباعي": "25900",
      "ثلاثي": "28900",
      "ثنائي": "34500"
    }
  }
];