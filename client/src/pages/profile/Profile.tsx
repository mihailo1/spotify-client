import * as React from 'react';
import Helmet from 'react-helmet';

import Navigation from 'components/Navigation';
import { Avatar, CardContent, Link } from '@mui/material';
import { useQuery } from 'react-query';
import { fetchUser } from 'api';
import { queryKeys } from 'constant';
import { User } from 'types';
import { capitalize } from 'lodash';
import { SpaceBetween } from 'styled';
import FullScreenLoader from 'components/FullScreenLoader';
import {
  Card,
  FullCard,
  Half,
  Header,
  Section,
  SmallHeader,
  SmallText,
} from 'styled';

function Profile() {
  const { isSuccess, data } = useQuery<User, Error>(
    queryKeys.FETCH_TOKEN,
    fetchUser,
  );

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="The profile page" />
      </Helmet>
      <Navigation />
      <Section>
        {isSuccess ? (
          <>
            <Header>{capitalize(data?.displayName)}'s Profile</Header>
            <SpaceBetween gap="20px">
              <Card>
                <CardContent>
                  <SpaceBetween>
                    <SpaceBetween>
                      <span role="img" aria-label="planet">
                        🌎
                      </span>
                      <SmallHeader>Country:</SmallHeader>
                    </SpaceBetween>
                    {data?.country}
                  </SpaceBetween>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <SpaceBetween>
                    <SpaceBetween>
                      <span role="img" aria-label="social">
                        👥
                      </span>
                      <SmallHeader>Followers:</SmallHeader>
                    </SpaceBetween>
                    {data?.followers.total}
                  </SpaceBetween>
                </CardContent>
              </Card>
            </SpaceBetween>
            <FullCard>
              <CardContent>
                <SpaceBetween>
                  <SpaceBetween alignItemsCenter>
                    <Avatar alt="Avatar" src={data?.images[0].url} />
                    <div>
                      <SmallHeader>{data?.displayName}</SmallHeader>
                      <SmallText>{data?.id}</SmallText>
                    </div>
                  </SpaceBetween>
                  <Half>
                    <span>Email: {data?.email}</span>
                    <span>
                      Profile:{' '}
                      <Link
                        target="_blank"
                        href={data?.externalUrls.spotify || '#'}
                      >
                        link
                      </Link>{' '}
                      🔗
                    </span>
                  </Half>
                </SpaceBetween>
              </CardContent>
            </FullCard>
          </>
        ) : (
          <FullScreenLoader />
        )}
      </Section>
    </>
  );
}

export default Profile;
