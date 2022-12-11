import { Box } from '@mui/material';
import AlbumItem from 'components/Album';
import { SmallHeader } from 'styled';
import { useMemo } from 'react';
import { ScrollBox } from 'styled';
import { Album } from 'types';

type Props = {
  items?: { album: Album }[];
};

function Favorites({ items }: Props) {
  const filteredItems = useMemo(
    () => items?.filter(({ album }) => album) || [],
    [items],
  );

  return (
    <Box gap="10px" display="flex" flexDirection="column">
      <SmallHeader>My favorite albums</SmallHeader>
      <ScrollBox>
        <Box display="flex" flexDirection="column" gap="10px">
          {filteredItems?.map(({ album }) => (
            <AlbumItem isDelete key={album.id} {...album} />
          ))}
        </Box>
      </ScrollBox>
    </Box>
  );
}

export default Favorites;
