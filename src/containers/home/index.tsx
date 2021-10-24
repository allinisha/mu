import * as React from 'react';

import { Wrapper } from '@components';

import './index.scss';

export const Home: React.FunctionComponent = () => {
	const landList = [
		{
			title: 'OSHO藏书馆'
		},
	];

	const assignSize = (text: string) => {
		const len = text.length;
		if (len <= 1) {
			return 'land-item-xs';
		}
		if (len > 1 && len <= 6) {
			return 'land-item-s';
		}
		if (len > 6 && len <= 10) {
			return 'land-item-m';
		}
		if (len > 10 && len <= 20) {
			return 'land-item-l';
		}
		return 'land-item-s';
	}

	const renderLandList = (list: any) => {
		return list.map((item: any) => {
			let landClass = 'land-item ';
			landClass += assignSize(item.title);

			return (
				<div className={landClass}>
					<span>{item.title}</span>
				</div>
			)
		})
	}

	return <Wrapper>
		<div className="land-list">
			{renderLandList(landList)}
		</div>
	</Wrapper>;
};

export default Home;
