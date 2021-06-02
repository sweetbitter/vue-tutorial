const app = Vue.createApp({
    // data, function
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'hoseok',
            age: 34
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Randiance'
            this.title = title
        },
        togglesShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
});

app.mount('#app');