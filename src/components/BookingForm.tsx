import React from 'react';

export default function BookingForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">تفاصيل الحجز</h2>
      <form 
        id="__vtigerWebForm"
        name="Omra"
        action="https://crm.travel4you.ma/modules/Webforms/capture.php"
        method="post"
        acceptCharset="utf-8"
        encType="multipart/form-data"
        className="space-y-6"
      >
        <input type="hidden" name="__vtrftk" value="sid:3cc04d917cb10585c41fcd27385345c5b3343b07,1734491914" />
        <input type="hidden" name="publicid" value="ee6e8f982cf09fca61025b83108b905d" />
        <input type="hidden" name="urlencodeenable" value="1" />
        <input type="hidden" name="name" value="Omra" />
        <input type="hidden" name="leadsource" value="Formulaire Sponsorisé" />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              الاسم الأول*
            </label>
            <input
              type="text"
              name="firstname"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="محمد"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              اسم العائلة*
            </label>
            <input
              type="text"
              name="lastname"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="العمري"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            البريد الإلكتروني*
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="example@email.com"
            dir="ltr"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            رقم الجوال*
          </label>
          <input
            type="tel"
            name="mobile"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="06xxxxxxxx"
            dir="ltr"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ملاحظات إضافية
          </label>
          <textarea
            name="description"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            rows={4}
            placeholder="أي متطلبات خاصة أو استفسارات..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-medium transition-colors"
        >
          تأكيد الحجز
        </button>
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
    </div>
  );
}