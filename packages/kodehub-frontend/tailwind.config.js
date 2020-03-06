module.exports = {
  // theme: {
  //   fontFamily: {
  //     body: ['Segoe UI',' Arial']
  //   },
  //   extend: {

  //   },

  // },
  theme: {
    extend: {

      backgroundColor: theme => ({
        // ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
      colors: {
        'blue': '#324abf'
      },
      fontFamily: {
        body: ['avenir']
      }
    }
  },
  variants: {},
  plugins: [],
}
