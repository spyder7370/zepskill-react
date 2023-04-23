export default function postReducer(state = {}, action) {
	switch (action.type) {
		case 'get_posts':
			return { ...state, ...action.payload };
		case 'get_post_by_id':
			return { ...state, postById: action.payload };
		case 'clear_post_by_id':
			return { ...state, postById: action.payload };
		default:
			return state;
	}
}
