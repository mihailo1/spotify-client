import * as React from 'react';
import Helmet from 'react-helmet';

import Navigation from 'components/Navigation';
import { useMutation, useQuery } from 'react-query';
import { control, fetchCurrent, fetchMyAlbums, fetchUser } from 'api';
import { queryKeys } from 'constant';
import { Current, MyAlbums, User } from 'types';
import FullScreenLoader from 'components/FullScreenLoader';
import Search from 'components/Search';
import { SpaceBetween } from 'styled';
import Player from 'components/Player';
import Favorites from 'components/Favorites';
import { SectionCentered } from 'styled';
import { Header } from 'styled';
import { pick } from 'lodash';
import { useAlbums } from 'hooks';

function Home() {
  const { data } = useQuery<User, Error>(queryKeys.FETCH_USER, fetchUser);
  const { data: favorites } = useQuery<MyAlbums, Error>(
    queryKeys.FETCH_MY_ALBUMS,
    fetchMyAlbums,
    {
      refetchInterval: 500,
    },
  );

  const { data: playerData, refetch } = useQuery<Current, Error>(
    queryKeys.FETCH_CURRENT,
    fetchCurrent,
    {
      refetchInterval: 500,
    },
  );

  const onSuccess = () => {
    setTimeout(refetch, 50);
  };

  const set = {
    pause: useMutation(control('pause'), {
      onSuccess,
    }),
    play: useMutation(control('play', data?.id), {
      onSuccess,
    }),
    next: useMutation(control('next'), {
      onSuccess,
    }),
    prev: useMutation(control('previous'), {
      onSuccess,
    }),
  };

  const { albums, setSearch } = useAlbums();

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="The home page" />
      </Helmet>
      <Navigation />
      <SectionCentered>
        {data ? (
          <>
            <Header>Search for an artist</Header>
            <Search {...{ albums, setSearch }} />
            <SpaceBetween gap="20px">
              <Player current={playerData} set={set} />
              <Favorites {...pick(favorites, ['items'])} />
            </SpaceBetween>
          </>
        ) : (
          <FullScreenLoader />
        )}
      </SectionCentered>
    </>
  );
}

export default Home;
