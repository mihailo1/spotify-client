import { ReactComponent as Heart } from 'assets/svg/heart_icon.svg';
import { ReactComponent as Play } from 'assets/svg/play_button.svg';
import { ReactComponent as Pause } from 'assets/svg/pause_button.svg';
import { ReactComponent as Next } from 'assets/svg/skip_button.svg';
import { Rotate } from 'styled';

const iconSize = 20;

const iconProps = {
  width: iconSize,
  height: iconSize,
  style: { display: 'block' },
};

export const HeartIcon = () => <Heart {...{ ...iconProps, fill: 'red' }} />;
export const PlayIcon = () => <Play {...{ ...iconProps, fill: '#fff' }} />;
export const PauseIcon = () => <Pause {...{ ...iconProps, fill: '#fff' }} />;
export const NextIcon = () => <Next {...{ ...iconProps, fill: '#fff' }} />;
export const PrevIcon = () => (
  <Rotate>
    <NextIcon />
  </Rotate>
);
