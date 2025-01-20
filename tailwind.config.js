/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
    //   screens:{
    //   md:'800px',
    //   lg:'1100px'
    // },
    //It changes for all padding,margin,height,width
    spacing:{
      '21':'6rem',
      'px-8':'8px',
      '31':'300px'
    },
    // padding:{
    //   '21':'6rem',
    //   'px-8':'8px'
    // },
    // margin:{
    //   '21':'6rem'
    // },
    // height:{
    //   '31':'300px'
    // }
    },
    container:{
      center:true
    }
  },
  plugins: [],
  corePlugins:{
    filter:true
  }
}

