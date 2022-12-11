import { Box, Card as CardInternal } from '@mui/material';
import styled from 'styled-components';
import { Link as LinkInternal } from 'react-router-dom';

export const SearchItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 2px 10px;
  cursor: pointer;
`;

export const ScrollBox = styled(Box)`
  overflow-x: hidden;
  height: 300px;
  overflow-y: scroll;
  width: fit-content;
`;

export const SmallHeaderSecondary = styled.h5`
  font-weight: normal;
  margin: 0;
`;

export const Controls = styled.div<{
  url?: string;
}>`
  width: 300px;
  height: 300px;
  border-radius: 4px;
  background: ${(props) => (props.url ? `url(${props.url})` : '#494949')};
  background-size: cover;
  position: relative;
  ${(props) => props.url && 'box-shadow: inset 0px -60px 20px 0px #00000052;'};
  p,
  h4,
  h5 {
    color: white;
  }
  svg {
    cursor: pointer;
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 24px;
`;

export const SectionCentered = styled(Section)`
  align-items: center;
`;

export const SmallText = styled.p`
  margin: 0;
  color: #555555;
  font-size: 0.7rem;
`;

export const SmallHeader = styled.h4`
  margin: 0;
`;

export const Header = styled.h1`
  margin: 0 20px;
  align-self: flex-start;
`;

export const FullCard = styled(CardInternal)`
  width: 100%;
`;

export const Card = styled(CardInternal)`
  width: 50%;
`;

export const Half = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const SpaceBetween = styled.div<{
  gap?: string;
  alignItemsCenter?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.gap || '5px'};
  ${(props) => (props.alignItemsCenter ? 'align-items: center;' : '')}
`;

export const Link = styled(LinkInternal)`
  text-decoration: none;
  color: #f4f4f4;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.neutral02};
  padding: 0 24px;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Rotate = styled.span`
  svg {
    transform: rotate(180deg);
  }
`;

export const FullScreen = styled.div`
  height: calc(100vh - 48px - 80px);
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;
