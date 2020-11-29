Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		report: null,
		loading: false
	},
	actions: {
		async getReport (ctx) {
			ctx.commit('setLoading');

			setTimeout(() => { 
				const report = {
					sheet: [
						{
							id: 1,
							name: "name1",
							last_name: "last_name1"
						},
						{
							id: 2,
							name: "name2",
							last_name: "last_name2"
						},
						{
							id: 3,
							name: "name3",
							last_name: "last_name3"
						}
					],
				}

				ctx.commit('updateReport', report);
				ctx.commit('resetLoading');

			}, 2000);



		}
	},
	mutations: {
		increment (state) {
			state.count++
		},
		updateReport (state, report) {
			state.report = report;
			console.log("мутация report ", state.report);
		},
		setLoading(state) {
			state.loading = true;
		},
		resetLoading(state) {
			state.loading = false;
		}
	},
	getters: {
		getCount(state) {
			return state.count;
		},
		getReport(state) {
			console.log("Получаем report");
			return state.report;
		},
		getLoading(state) {
			return state.loading
		}

	}
})

const {mapState} = Vuex;