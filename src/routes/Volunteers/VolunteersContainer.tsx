import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { VOLUNTEERS } from './VolunteersQueries';
import VolunteersPresenter from './VolunteersPresenter';
import Error from 'components/Error';

export default function VolunteersContainer() {
  const history = useHistory();

  const { data, loading, error } = useQuery(VOLUNTEERS);

  function handleRowClick(
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: string
  ) {
    history.push(`/volunteers/${id}`);
  }

  return error ? (
    <Error title='에러!' desc='오류가 발생했습니다. 다시 시도해주십시오.' />
  ) : (
    <VolunteersPresenter
      volunteers={data ? data.volunteers : undefined}
      loading={loading}
      handleRowClick={handleRowClick}
    />
  );
}
