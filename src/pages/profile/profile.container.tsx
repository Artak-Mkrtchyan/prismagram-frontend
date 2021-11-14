import { withRouter } from 'react-router';

import { useMutation, useQuery } from '@apollo/client';

import { ProfilePresenter } from './profile.presenter';
import { GET_USER, LOG_OUT } from './queries';
import { GetUserData, GetUserVars } from './types';

export const ProfileContainer = withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const { data, loading } = useQuery<GetUserData, GetUserVars>(GET_USER, {
      variables: { username },
    });
    const [logOut] = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} logOut={logOut} data={data} />;
  }
);
