import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import { FullScreen } from 'styled';

function FullScreenLoader() {
  return (
    <FullScreen>
      <CircularProgress />
    </FullScreen>
  );
}

export default FullScreenLoader;
