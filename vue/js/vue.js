var app = new Vue({
	el: '#app',
	store,
	data: {
    	message: 'Hello Vue!'
  	},
	computed: {
		ccount() {
			return this.$store.getters.getCount
		},
		loading() {
			return this.$store.getters.getLoading
		} 
	},
  	methods: {
		increment() {
			this.$store.commit('increment')
			console.log(this.$store.state.count)
		},
		getReport() {
			console.log("Нажали кнопку получения отчета");
			this.$store.dispatch('getReport');
		}

	}
})