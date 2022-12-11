import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Location } from 'history';

import config from 'config';
import { useQuery } from 'react-query';
import { fetchTokens } from 'api';
import { AccessToken } from 'types';
import { Box, CircularProgress } from '@mui/material';
import Path from 'pages/paths';
import { queryKeys } from 'constant';
import { setCached } from 'utils';

function Callback() {
  const location: Location = useLocation();
  const code = new URLSearchParams(location.search).get('code');
  const {
    isLoading,
    error,
    data: accessToken,
  } = useQuery<AccessToken, Error, string>(
    [queryKeys.FETCH_TOKEN, code],
    () => fetchTokens(code!),
    {
      enabled: Boolean(code),
      select: (data) => data.accessToken,
    },
  );
  const history = useHistory();

  useEffect(() => {
    if (code && typeof code === 'string' && accessToken) {
      // We have a code in the callback url,
      //  try to get the access token by dispatching the fetchTokenStart action
      setCached({ accessToken });
      history.push(Path.Root);
    }

    if (error) {
      // Something went wrong with the callback, redirect back to the API auth page.
      window.location.assign(config.API_BASE);
    }
  }, [code, accessToken, error, history]);

  return (
    <div
      style={{
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: 99,
        cursor: 'progress',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '50px',
          height: '50px',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="30px"
          alignItems="center"
        >
          {isLoading ? 'Authorization' : 'Success'}
          <CircularProgress
            variant="determinate"
            {...(!isLoading ? { value: 100 } : null)}
            color={isLoading ? 'primary' : 'success'}
            size={70}
            thickness={5}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Callback;
