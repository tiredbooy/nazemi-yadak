/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [  
    './pages/**/*.html',
    './assets/scripts/**/*.js'
  ],  
  theme: {  
    screens : {
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px',
    },
    extend: {
      colors : {
        royalBlue : "#1E3A8A", // Great for headers, buttons, and accents.
        lightBlue : "#3956a7",
        steelGray : "#374151", // Perfect for background sections or text.
        crimsonRed : "#DC2626", // Ideal for call-to-action buttons (e.g., "Buy Now").
        brightYellow : "#FACC15", //Use sparingly for highlights or sale banners.                              
        lightGray : "#F3F4F6", //Clean, minimalistic background for sections.
        white : "#FFFFFF", //For primary backgrounds and text clarity.
        limeGreen : "#16A34A", //Use to emphasize discounts or urgent offers.
        darkOrange : "#EA580C", //Use to emphasize discounts or urgent offers.
      },
      transitionProperty: {
        width: "width",
      },
    },  
  },  
  plugins: [],  
}  
