import * as React from 'react';
import { useState, useEffect } from 'react';
import { ToolBar } from '@components';

import chapterData from '../../mock/chapter.json';
import './index.scss';

export const Chapter: React.FunctionComponent = (props: any) => {
  const { bookName, chapName, content, isFrist, isLast } = chapterData as any;
  const { match: { params } } = props;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const clientHeight = document.documentElement.clientHeight,
        scrollHeight = document.body.scrollHeight,
        scrollTop = document.documentElement.scrollTop;

      setProgress(Math.round(scrollTop/ (scrollHeight - clientHeight) * 100));
    })
  }, [])

  const contentList = (list: any) => {
    return list.map((item: string) => {
      return (
        item == '上一章' || item === '目录' || item === '下一章' ? null : <p>{item}</p>
      )
    }) 
  }

  const renderNavBottom = () => {
    return (
      <div className="nav-bottom">
        <div className={isFrist? 'disabled': ''} onClick={() => {!isFrist && goToBookPage(Number(params.index)-1)}}>上一章</div>
        <div onClick={() => {goToBookPage('index')}}>目录</div>
        <div className={isLast? 'disabled': ''} onClick={() => {!isLast && goToBookPage(Number(params.index)+1)}}>下一章</div>
      </div>
    )
  }

  const goToBookPage = (target: string | number) => {
    if (typeof target === 'number' && target === 0) return;
    props.history.push(`/book/${params.id}/${target}`);
  }

  return (
    <div className="chapter">
      <div className="chapter-header">
        <div className="chapter-name">{bookName}：{chapName}</div>
      </div>
      <div className="chapter-container">
        
        <div className="chapter-content">{contentList(content)}</div>
        {renderNavBottom()}
        <div className="space-bottom"></div>
      </div>
      <ToolBar {...props} />
      <div className="chapter-footer">{progress}%</div>
    </div>
  );
};

export default Chapter;