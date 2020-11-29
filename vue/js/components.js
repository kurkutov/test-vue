
Vue.component('app-report', {
	//props: ['count'],
	computed: {
		report() {
			return this.$store.getters.getReport
		}
	},
	template: `<div>
		<div v-for="sheet in report"> 
			<div v-for="item in sheet">

					<p v-for="(val, key ) in item">{{key}}:{{val}}</p>
				
			</div>
		</div>
	</div>`
})




Vue.component('app-loader', {
	//props: ['count'],
	computed: {
		loading() {
			return this.$store.getters.getLoading
		}
	},
	template: '<div v-if="loading">Загрузка...</div>'
})


