import React, { useContext } from 'react';

import { ComicDetailContext } from '../../context';

const ComicDetail = () => {
  const { comicDetail } = useContext(ComicDetailContext);
  console.log(comicDetail);
  return <div>Comic Detail</div>;
};
export default ComicDetail;
