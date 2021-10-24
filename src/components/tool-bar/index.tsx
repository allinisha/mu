import * as React from 'react';

import './index.scss';

export const ToolBar: React.FunctionComponent = (props: any) => {

	const backHome = () => {
		props.history.push('/library')
	}

	const backTop = () => {
		window.scrollTo(0, 0);
	}

	return (
		<div className="tool-bar">
			<div className="back-top" onClick={backTop}></div>
			<div className="back-home" onClick={backHome}></div>
		</div>
	);
};

export default ToolBar;
