module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: 'class',
  corePlugins: {
    container: true
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({

        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1100px',
          },
          '@screen 2xl': {
            maxWidth: '1110px',
          },


        }

      })
    }
  ],
  theme: {

    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      colors: {
       
        primary: {
          700: '#083440',
        },

       
       
        
      },

      boxShadow: {
        'xl': ' 0px 4px 14px 0px #00000014',
        '2xl': '  0px 4px 34px 0px #00000008',
      },

      backgroundImage: {
        "curved-blue-gradient": "url(/imagenes/precios/curved-blue-gradient-bg.svg)",
        "bg-gradient": "linear-gradient(96.41deg, rgba(0, 0, 0, 0.85) 18.08%, rgba(0, 0, 0, 0) 96.87%)",
      },

      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-600": "#4B5563",
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),

      }),
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',

      },

     
      fontFamily: {
        body_fonts: [
          "Karbon App",
        ],
        heading_fonts: [
          "Karbon App"
        ],
      },

      
 
    },
  },
  // Other stuff
};