import * as React from 'react';

import { Wrapper } from '@components';

import muData from './mu.json';
import './index.scss';

export const NotFound: React.FunctionComponent = () => {
	const renderRandomKnowledge = () => {
		const index = Math.floor(Math.random() * muData.length);
		return (muData as any)[index].content;
	}

	return (
		<Wrapper>
			<div className="not-found">
				<p>消失了</p>
				<div className="tip">
					小知识：<br/>
					{renderRandomKnowledge()}</div>
			</div>
		</Wrapper>
	);
};

export default NotFound;
