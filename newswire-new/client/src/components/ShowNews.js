import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getNewsItemById } from '../store/actions/index';

const ShowNews = () => {
	const newsStore = useSelector((state) => state.news);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(
		() => {
			dispatch(getNewsItemById(id));
		},
		[ dispatch, id ]
	);

	return (
		<React.Fragment>
			{newsStore.newsItem ? (
				<div className="article_container">
					<h1>{newsStore.newsItem.title}</h1>
					<div style={{ background: `url(https://picsum.photos/1920/1080)` }} className="image" />
					<div className="author">
						<span>Created By: John Doe</span>
					</div>
					<div className="my-3 content">{newsStore.newsItem.body}</div>
				</div>
			) : null}
		</React.Fragment>
	);
};

export default ShowNews;
