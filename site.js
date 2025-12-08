/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created() {
            if (this.title) document.title = this.title

            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
            return {
                  // This holds your movies.json data.
                  movies: [],
                  /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
                  title: 'IS219 Gallery (Project 3)',
                  owner: 'ethanchang13',
                  githubLink: 'https://github.com/ethanchang13/Movie-Poster-Gallery'
                  ,
                  currentIndex: 0
            }
      },
      computed: {
            currentMovie() {
                  return (this.movies && this.movies.length) ? this.movies[this.currentIndex] : {}
            },
            movieTitle() {
                  return this.currentMovie.title || ''
            },
            poster() {
                  const m = this.currentMovie
                  if (!m) return ''
                  if (Array.isArray(m.posters)) {
                        const idx = (typeof m.posterindex === 'number') ? m.posterindex : 0
                        return m.posters[idx] || ''
                  }
                  return ''
            },
            posterindex() {
                  const m = this.currentMovie
                  if (!m) return ''
                  const idx = (typeof m.posterindex === 'number') ? (m.posterindex + 1) : 1
                  const total = (Array.isArray(m.posters)) ? m.posters.length : 1
                  return `Poster ${idx} of ${total}`
            },
            country() { return this.currentMovie.country || '' },
            iscore() { return this.currentMovie.iscore || '' },
            runtime() { return this.currentMovie.runtime || '' },
            released() {
                  const r = this.currentMovie.released
                  if (Array.isArray(r)) return r.join('-')
                  return this.currentMovie.released || ''
            },
            rating() { return this.currentMovie.rating || '' },
            imdbLink() { return this.currentMovie.imdb || '#' },
            websiteLink() { return this.currentMovie.website || '#' },
            likes() { return this.currentMovie.likes || 0 },
            dislikes() { return this.currentMovie.dislikes || 0 }
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
      }
})

vue_app.mount("#vue_app")
