import * as React from 'react';

import { ToolBar } from '@components';

import indexData from '../../mock/index.json';
import './index.scss';

export const Book: React.FunctionComponent = (props: any) => {
  const { title, catalog, content } = indexData as any;
  const { match: { params } } = props;

	const catalogList = (list: any) => {
    return list.map((item: any, index: number) => {
      return (
        <div className="catalog-item" onClick={() => {props.history.push(`/book/${params.id}/${index+1}`)}}>
          <span className="catalog-item-index">第 {index+1} 章</span>
          <span className="catalog-item-name">{item.chapName}</span>
        </div>
      )
    })
  }

  const contentList = (list: any) => {
    return list.map((item: any) => {
      return (
        <p>{item}</p>        
      )
    }) 
  }

  return (
    <div className="book-index">
      <div className="book-index-title">{title}</div>
      <div className="book-index-author">作者：奥修</div>
      <div className="book-index-catalog">{catalogList(catalog)}</div>
      <div className="book-index-content">{contentList(content)}</div>
      {/* <div className="space-bottom"></div> */}
      <ToolBar {...props} />
    </div>
  );
};

export default Book;