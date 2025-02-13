'use client';

import '../globals.css';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center">
      {/* Styled Title */}
      <div className="w-full border-t-2 border-b-2 border-yellow-400 py-4 mb-12">
        <h1 className="text-6xl font-extrabold text-center text-yellow-400 uppercase tracking-wide">Book Now</h1>
      </div>

      {/* Booking Section */}
      <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <p className="text-2xl text-gray-300 text-center mb-6">
          Secure your event with DJ TAHAA! Fill out the form below to book now.
        </p>

        {/* HoneyBook Embed */}
        <div className="hb-p-61524987317e9d1b1561732f-1 w-full"></div>
        <img height="1" width="1" style={{ display: 'none' }} src="https://www.honeybook.com/p.png?pid=61524987317e9d1b1561732f" alt="HoneyBook" />

        {/* HoneyBook Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,b,s,n,i,p,e,t) {
                h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
                t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
                e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
              })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","61524987317e9d1b1561732f");
            `,
          }}
        />
      </div>
    </div>
  );
}