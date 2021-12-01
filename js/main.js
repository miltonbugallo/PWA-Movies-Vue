const app = Vue.createApp({
    data() {
        return {
            title: "Movies Vue",
            movieData: {},
            movieTitle: "Spider Man",
        };
    },
    mounted() {
        this.getMovie();
    },
    methods: {
        async getMovie() {
            const search = this.movieTitle.toLowerCase().replace(/ /g, "+");

            const data = await fetch(
                `https://www.omdbapi.com/?apikey=de8fb1d8&t=${search}`
            );

            const jsonData = await data.json();

            this.movieData = jsonData;
        },
    },
});