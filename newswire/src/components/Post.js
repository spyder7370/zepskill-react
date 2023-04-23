import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById, clearPostById } from '../store/actions/index';

const Post = () => {
	const { id } = useParams();

	const postById = useSelector((store) => {
		return store.posts.postById;
	});
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getPostById(id));
		},
		[ dispatch, id ]
	);

	useEffect(
		() => {
			return () => {
				dispatch(clearPostById());
			};
		},
		[ dispatch ]
	);
	return (
		<React.Fragment>
			{postById ? (
				<div className="my-5 article_container">
					<h1>{postById.title}</h1>
					<div style={{ background: `url(https://picsum.photos/1920/1080)` }} className="image" />
					<div className="author">
						<span>Created By: John Doe</span>
					</div>
					<div className="mt-3 content">{postById.body}</div>
				</div>
			) : null}
		</React.Fragment>
	);
};
export default Post;
