import React from 'react';
import RowNO from './RowNO';
import RowTrending from './RowTrending';
import RowTopRated from './RowTopRated';
import RowAction from './RowAction';
import RowComedy from './RowComedy';
import RowHorror from './RowHorror';
import RowRomance from './RowRomance';
import RowDocumentaries from './RowDocumentaries';

const MainRow = () => {
  return (
    <div>
      <RowNO />
      <RowTrending />
      <RowTopRated />
      <RowAction />
      <RowComedy />
      <RowHorror />
      <RowRomance />
      <RowDocumentaries />
    </div>
  );
};

export default MainRow;
