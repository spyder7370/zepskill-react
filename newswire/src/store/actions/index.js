import axios from 'axios';

const getPostsHelper = async (oldState, page, limit) => {
	const reqUrl = 'https://jsonplaceholder.typicode.com/posts';
	const response = await axios.get(`${reqUrl}?_limit=${limit}&_page=${page}`);
	return {
		posts: oldState.posts ? [ ...oldState.posts, ...response.data ] : response.data,
		page: page,
		isEnd: response.data.length === 0 ? true : false
	};
};

const getPostByIdHelper = async (id) => {
	const reqUrl = 'https://jsonplaceholder.typicode.com/posts';
	const response = await axios.get(`${reqUrl}/${id}`);
	return response.data;
};

const clearPostByIdHelper = () => {
	return {};
};

export const getPosts = (oldState = {}, page = 1, limit = 10) => {
	return {
		type: 'get_posts',
		payload: getPostsHelper(oldState, page, limit)
	};
};

export const getPostById = (id = 1) => {
	return {
		type: 'get_post_by_id',
		payload: getPostByIdHelper(id)
	};
};

export const clearPostById = () => {
	return {
		type: 'clear_post_by_id',
		payload: clearPostByIdHelper()
	};
};
