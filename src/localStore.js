const LOCAL_KEY = '';
export default {
	save(items) {
		window.localStorage.setItem(LOCAL_KEY,JSON.stringify(items))
	},

	fetch() {
		return JSON.parse(window.localStorage.getItem(LOCAL_KEY) || '[]')
	}
}