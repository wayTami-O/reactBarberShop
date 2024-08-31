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
        '7px':'7px',
        '10px':'10px',
        '11p':'11px',
        '12':'12px',
        '3.25':'13px',
        '4.5':'15px',
        '17':'17px',
        '6.25':'25px',
        '6.5':'26px',
        '30':'30px',
        '38':'38px',
        '39px':'39px',
        '50':'50px',
        '57':'57.69px',
        '58':'58px',
        '15':'60px',
        '66':'66px',
        '68':'68px',
        '73':'73px',
        '100':'100px',
        '102':'102.42px',
        '104':'104px',
        '133':'133px',
        '148':'148px',
        '152':'152.69px',
        '160':'160px',
        '174':'174px',
        '190':'190px',
        '224':'224px',
        '238':'238px',
        '240':'240px',
        '300':'300px',
        '302':'302px',
        '323':'323px',
        '335':'335px',
        '18':'18px',
        '26.25':'420px',
        '516':'516px'
      },
      fontFamily: {
        mons:['Monseratt'],
        inter: ['Inter']
      },
      fontSize:{
        '7':'7px',
        '8':'8px',
        '10':'10px',
        '11':'11px',
        '12':'12px',
        '13':'13px'
      },
      letterSpacing: {
        '1.8':'-1.8px',
        '0.8':'-0.8px'
      },
      borderWidth: {
        '1':'1px'
      },
      borderRadius: {
        '100':'100px',
        '55':'55px',
        '20': '20px',
        '12':'12px',
        '10':'10px'
      },
      boxShadow: {
        'button':'0px 4px 4px 0px #00000040'
      },
      lineHeight: {
        '9.6':'9.6px',
        '14':'14px',
        '18':'18px',
        '21':'21px'
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

