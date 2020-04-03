import React, { useContext } from 'react';

import ComicDetailWrapper from './styles/ComicDetailWrapper';
import ComicDetailImage from './styles/ComicDetailImage';
import ComicDetailInfo from './styles/ComicDetailInfo';
import ComicDetailTitle from './styles/ComicDetailTitle';
import ComicDetailSubTitle from './styles/ComicDetailSubTitle';
import ComicDetailDescription from './styles/ComicDetailDescription';

import { ComicDetailContext } from '../../context';

const rolesToShow = ['writer', 'penciler'];

const ComicDetail = () => {
  let prevRole = '';
  const {
    comicDetail: { thumbnail, title, creators, dates, description },
  } = useContext(ComicDetailContext);
  const parsedDate = new Date(dates[0].date).toDateString().slice(4);

  const parseDescriptionData = () => {
    let items = [];
    let item = '';
    creators.items.forEach(creator => {
      if (rolesToShow.includes(creator.role)) {
        if (creator.role !== prevRole) {
          item += `${creator.role}s: ${creator.name}`;
        } else item += `, ${creator.name}`;
      } else {
        if (item !== '') {
          items.push(<ComicDetailSubTitle key={item}>{item}.</ComicDetailSubTitle>);
          item = '';
        }
      }
      prevRole = creator.role;
    });
    item && items.push(<ComicDetailSubTitle key={item}>{item}.</ComicDetailSubTitle>);
    return items;
  };

  return (
    <ComicDetailWrapper>
      <ComicDetailImage
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        title={title}
      />
      <ComicDetailInfo>
        <ComicDetailTitle>{title}</ComicDetailTitle>
        <ComicDetailSubTitle>Published: {parsedDate}</ComicDetailSubTitle>
        {parseDescriptionData()}
        <ComicDetailDescription>
          {description ? description : 'No description.'}
        </ComicDetailDescription>
      </ComicDetailInfo>
    </ComicDetailWrapper>
  );
};
export default ComicDetail;
