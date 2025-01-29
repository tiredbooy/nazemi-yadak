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
        steelGray : "#374151", // Perfect for background sections or text.
        crimsonRed : "#DC2626", // Ideal for call-to-action buttons (e.g., "Buy Now").                           
        lightGray : "#F3F4F6", //Clean, minimalistic background for sections.
        white : "#FFFFFF", //For primary backgrounds and text clarity.
        limeGreen : "#16A34A", //Use to emphasize discounts or urgent offers.
        bgRed : "#C8102E",
        darkerBgRed : "#c70021"
      },
      transitionProperty: {
        width: "width",
      },
    },  
  },  
  plugins: [],  
}  
