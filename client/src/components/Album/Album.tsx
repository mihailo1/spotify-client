import { Avatar, Box } from '@mui/material';
import { HeartIcon } from 'assets/icons';
import { useFavorite } from 'hooks';
import { SearchItem } from 'styled';
import { Album } from 'types';

function AlbumItem({
  images,
  name,
  id,
  isDelete,
}: Album & {
  isDelete?: boolean;
}) {
  const [setFavoriteId] = useFavorite(isDelete);

  return (
    <SearchItem key={id}>
      <Box display="flex" alignItems="center" gap="5px">
        <Avatar alt="Avatar" src={images[0]?.url} />
        {name}
      </Box>
      <span onClick={() => setFavoriteId(id)}>
        <HeartIcon />
      </span>
    </SearchItem>
  );
}

export default AlbumItem;
