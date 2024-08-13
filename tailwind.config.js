/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.hrtl",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '6px':'6px',
        '11p':'11px',
        '3.25':'13px',
        '4.5':'15px',
        '6.25':'25px',
        '6.5':'26px',
        '15':'60px',
        '73':'73px',
        '76':'76px',
        '133':'133px',
        '148':'148px',
        '300':'300px',
        '323':'323px',
        '18':'18px',
        '26.25':'420px'
      },
      fontFamily: {
        mons:['Monseratt'],
        inter: ['Inter']
      },
      fontSize:{
        '7':'7px',
        '8':'8px',
        '10':'10px',
        '11':'11px'
      },
      letterSpacing: {
        '1.8':'-1.8%'
      },
      borderWidth: {
        '1':'1px'
      },
      borderRadius: {
        '100':'100px',
        '55':'55px'
      },
      boxShadow: {
        'button':'0px 4px 4px 0px #00000040'
      },
      lineHeight: {
        '9.6':'9.6px'
      }
    },
    colors: {
      'graphite':'rgba(94, 167, 222, 1)',
      'blue':'rgba(81, 125, 162, 1)',
      'white':'rgba(255, 255, 255, 1)',
      'dark':'rgba(23, 23, 23, 1)',
      'light_grey2':'rgba(23, 23, 23, 0.2)',
      'light_grey4':'rgba(23, 23, 23, 0.4)',
      'translucent_brick':'rgba(208, 120, 82, 0.4)',
      'brick':'#D07852',
      'img_bg': 'rgba(0, 0, 0, 0.2)'
    }
  },
  plugins: [],
}

