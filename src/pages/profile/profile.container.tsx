import { withRouter } from 'react-router';
import { logUserOut } from 'src/apollo/Client';
import { useGetUser } from 'src/hooks/useGetUser';

import { ProfilePresenter } from './profile.presenter';

export const ProfileContainer = withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const { data, loading } = useGetUser(username);
    const logOut = logUserOut;

    return <ProfilePresenter loading={loading} logOut={logOut} data={data} />;
  }
);
