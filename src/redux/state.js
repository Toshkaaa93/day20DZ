const initState = {
    posts: [],
		search: '',
		person: {
			name: '',
			email: '',
			token: '',
 }
}

const getInitState = () => {
    return initState
}

export default getInitState