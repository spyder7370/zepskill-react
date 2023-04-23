import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../store/actions/index';
import { Button, Spinner } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
	const [ isLoading, setLoading ] = useState(false);

	const homePosts = useSelector((store) => {
		return store.posts;
	});
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getPosts({}, 1, 10));
		},
		[ dispatch ]
	);

	const loadMorePosts = () => {
		setLoading(true);
		const newPage = homePosts.page + 1;
		dispatch(getPosts(homePosts, newPage, 10)).then(() => {
			setLoading(false);
		});
	};

	const breakpointColumnsObj = {
		default: 3,
		900: 2,
		600: 1
	};

	return (
		<React.Fragment>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{homePosts.posts ? (
					homePosts.posts.map((item) => {
						return (
							<div className="mt-4" key={item.id}>
								<img
									style={{ width: '100%', height: '250px' }}
									src="https://picsum.photos/1920/1080"
									alt="article img"
								/>
								<div className="author">Created By: John Doe</div>
								<div className="content">
									<div className="title">{item.title}</div>
									<div className="excerpt">{item.body}</div>
									<LinkContainer to={`/posts/${item.id}`}>
										<Button className="mt-3" variant="light">
											Read More
										</Button>
									</LinkContainer>
								</div>
							</div>
						);
					})
				) : null}
			</Masonry>

			{isLoading ? (
				<div className="mb-3" style={{ textAlign: 'center' }}>
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			) : null}
			{!isLoading && !homePosts.isEnd ? (
				<Button className="mb-3" variant="outline-dark" onClick={loadMorePosts}>
					Load More Posts
				</Button>
			) : null}
		</React.Fragment>
	);
};
export default Home;
