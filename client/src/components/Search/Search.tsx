import { Autocomplete, TextField } from '@mui/material';
import AlbumItem from 'components/Album';
import { Dispatch, SetStateAction } from 'react';
import { Album } from 'types';

type Props = {
  albums: Album[];
  setSearch: Dispatch<SetStateAction<string | null>>;
};

function Search({ albums, setSearch }: Props) {
  return (
    <Autocomplete
      disablePortal
      options={albums}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => <AlbumItem key={option.id} {...option} />}
      onInputChange={(_, value) => setSearch(value)}
    />
  );
}

export default Search;
