import React from 'react';
import { motion } from 'framer-motion';

interface BookingFormProps {
  variant?: 'hero' | 'page';
}

export default function BookingForm({ variant = 'hero' }: BookingFormProps) {
  const isHero = variant === 'hero';
  
  return (
    <motion.div 
      className={`${isHero ? 'bg-white/90 backdrop-blur-sm' : 'bg-white'} rounded-lg p-6 shadow-xl`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.h3 
        className="text-2xl font-bold text-gray-900 mb-6"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        احجز عمرتك الآن
      </motion.h3>
      
      <form 
        id="__vtigerWebForm"
        name="Omra-Hero"
        action="https://crm.travel4you.ma/modules/Webforms/capture.php"
        method="post"
        acceptCharset="utf-8"
        encType="multipart/form-data"
        className="space-y-4"
      >
        <input type="hidden" name="__vtrftk" value="sid:fc14b50979fabe674aa22d2d1c04a85aa502f8dd,1734517381" />
        <input type="hidden" name="publicid" value="f3ce1bdb45dea53657c08914c14526d0" />
        <input type="hidden" name="urlencodeenable" value="1" />
        <input type="hidden" name="name" value="Omra-Hero" />
        <input type="hidden" name="leadsource" value="Formulaire Sponsorisé" />

        <motion.div 
          className="grid grid-cols-2 gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              الإسم الشخصي
            </label>
            <input
              type="text"
              name="firstname"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="محمد"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              الإسم العائلي
            </label>
            <input
              type="text"
              name="lastname"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="العمري"
            />
          </div>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            رقم الهاتف
          </label>
          <input
            type="tel"
            name="mobile"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="06xxxxxxxx"
            dir="ltr"
          />
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            عدد الأشخاص
          </label>
          <select 
            name="cf_855"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">اختر عدد الأشخاص</option>
            <option value="1 personne">1</option>
            <option value="2 personnes">2</option>
            <option value="3 personnes">3</option>
            <option value="4 personnes">4</option>
            <option value="5 personnes">5</option>
            <option value="Groupe +5">مجموعة +5</option>
          </select>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition-colors"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          طلب حجز
        </motion.button>
      </form>

      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          window.onload = function() {
            var N=navigator.appName, ua=navigator.userAgent, tem;
            var M=ua.match(/(opera|chrome|safari|firefox|msie)\\/?\s*(\.?\\d+(\\.\\d+)*)/i);
            if(M && (tem= ua.match(/version\\/([\\.\\d]+)/i))!= null) M[2]= tem[1];
            M=M? [M[1], M[2]]: [N, navigator.appVersion, "-?"];
            var browserName = M[0];
            var form = document.getElementById("__vtigerWebForm"), inputs = form.elements;
            form.onsubmit = function() {
              var required = [], att, val;
              for (var i = 0; i < inputs.length; i++) {
                att = inputs[i].getAttribute("required");
                val = inputs[i].value;
                type = inputs[i].type;
                if(att != null) {
                  if (val.replace(/^\\s+|\\s+$/g, "") == "") {
                    required.push(inputs[i].getAttribute("label"));
                  }
                }
              }
              if (required.length > 0) {
                alert("يرجى ملء جميع الحقول المطلوبة");
                return false;
              }
              return true;
            };
          };
        `
      }} />
    </motion.div>
  );
}