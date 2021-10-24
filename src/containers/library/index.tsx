import * as React from 'react';

import { Wrapper } from '@components';

import library from '../../mock/osho_library.json';
import './index.scss';

import BookImg from '../../assets/oshobook.jpg';
import logo from '../../assets/mu-title.png';

export const Library: React.FunctionComponent = (props: any) => {
	const bookList = (list: any) => {
		return list.map((item: any) => {
			return (
				<div className="book-item" key={item.id} onClick={() => props.history.push(`/book/${item.id}/index`)}>
					{/* <img className="book-img" src={BookImg}/> */}
					<div className="book-cover">
						<span>OSHO</span>
					</div>
					<div className="book-info">
						<div className="book-info-top">
							<div className="book-info-title">{item.title}</div>
							<div className="book-info-author">Osho</div>
						</div>
						<div className="book-info-bottom">
							<div className="book-info-index"></div>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<Wrapper>
			<div className="library">
				<div className="book-list">{bookList(library)}</div>
			</div>
		</Wrapper>
	);
};

export default Library;
