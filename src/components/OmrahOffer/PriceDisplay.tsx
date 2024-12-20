import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const hotels = [
  {
    name: "فندق بالمدينة",
    options: [
      { type: "مجموعة ليث ساحة الحرم", nights: "04 ليالي" },
      { type: "مجموعة ليث ساحة الحرم", nights: "04 ليالي" },
      { type: "كراون بلازا بالإفطار", nights: "04 ليالي" }
    ]
  },
  {
    name: "فندق بمكة",
    options: [
      { type: "برج الضيافة بدون افطار", nights: "09 ليالي" },
      { type: "انفينيتي بدون افطار", nights: "09 ليالي" },
      { type: "سويس بالإفطار", nights: "09 ليالي" }
    ]
  }
];

const prices = [
  { type: "خماسي", prices: ["12900", "------", "------"] },
  { type: "رباعي", prices: ["13900", "16900", "24500"] },
  { type: "ثلاثي", prices: ["14900", "17900", "27500"] },
  { type: "ثنائي", prices: ["15900", "18900", "33500"] }
];

export default function PriceDisplay() {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-accent" />
          <h3 className="text-xl font-bold">موعد الرحلة</h3>
        </div>
        <p className="text-lg text-gray-800">من 21/01/2025 إلى 04/02/2025</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-6 h-6 text-accent" />
          <h3 className="text-xl font-bold">الفنادق</h3>
        </div>
        <div className="space-y-4">
          {hotels.map((hotel, index) => (
            <div key={index} className="border-b pb-4 last:border-0">
              <h4 className="font-semibold mb-2">{hotel.name}</h4>
              <ul className="space-y-1">
                {hotel.options.map((option, idx) => (
                  <li key={idx} className="text-gray-600">
                    {option.type} ({option.nights})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-right py-2">نوع الغرفة</th>
              <th className="text-center py-2">اقتصادي</th>
              <th className="text-center py-2">متوسط</th>
              <th className="text-center py-2">فاخر</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 font-semibold">{row.type}</td>
                {row.prices.map((price, idx) => (
                  <td key={idx} className="text-center py-2">
                    {price !== "------" ? `${price} درهم` : "------"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        * رحلة الى الطائف حسب الطلب
      </div>
    </motion.div>
  );
}