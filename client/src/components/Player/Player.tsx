import { Box } from '@mui/material';
import { SpaceBetween } from 'styled';
import { SmallHeader, SmallText } from 'styled';
import { Current } from 'types';
import { PlayIcon, NextIcon, PrevIcon, PauseIcon } from 'assets/icons';
import { Controls, SmallHeaderSecondary } from 'styled';
import { UseMutationResult } from 'react-query';

type Props = {
  set: {
    pause: UseMutationResult<unknown, unknown, void, unknown>;
    play: UseMutationResult<unknown, unknown, void, unknown>;
    next: UseMutationResult<unknown, unknown, void, unknown>;
    prev: UseMutationResult<unknown, unknown, void, unknown>;
  };
  current?: Current;
};

function Player(props: Props) {
  const CenterIcon = props.current?.isPlaying ? PauseIcon : PlayIcon;

  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <>
        <SmallHeader>
          Currently {props.current?.isPlaying ? '' : ' not '} playing
        </SmallHeader>
        <Controls
          {...(props.current?.isPlaying && {
            url: props.current?.item.album.images[0].url,
          })}
        >
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            padding="15px"
            boxSizing="border-box"
          >
            <SpaceBetween>
              <Box>
                {props.current?.isPlaying && (
                  <>
                    <SmallText>
                      {props.current?.item.artists
                        .map(({ name }) => name)
                        .join(', ')}
                    </SmallText>
                    <SmallHeader>{props.current?.item.name}</SmallHeader>
                    <SmallHeaderSecondary>
                      {props.current?.item?.album.name}
                    </SmallHeaderSecondary>
                  </>
                )}
              </Box>
              <Box display="flex" alignItems="end" gap="10px">
                <span onClick={() => props?.set.prev.mutate()}>
                  <PrevIcon />
                </span>
                <span
                  onClick={() =>
                    props?.set[
                      props.current?.isPlaying ? 'pause' : 'play'
                    ].mutate()
                  }
                >
                  <CenterIcon />
                </span>
                <span onClick={() => props?.set.next.mutate()}>
                  <NextIcon />
                </span>
              </Box>
            </SpaceBetween>
          </Box>
        </Controls>
      </>
    </Box>
  );
}

export default Player;
