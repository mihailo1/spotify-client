import { useSnackbar } from 'notistack';
import { useQuery } from 'react-query';
import { saveAlbums, deleteAlbums, fetchAlbums } from 'api';
import { useEffect, useState } from 'react';
import { queryKeys } from 'constant';
import { Album, Albums } from 'types';

export const useFavorite = (isDelete?: boolean) => {
  const [favorite, setFavoriteId] = useState<null | string>(null);
  const { enqueueSnackbar } = useSnackbar();

  useQuery<unknown>(
    [queryKeys.SAVE_ALBUMS, favorite],
    () => (isDelete ? deleteAlbums : saveAlbums)(favorite ? [favorite] : []),
    {
      enabled: Boolean(favorite),
      onSuccess() {
        enqueueSnackbar(
          isDelete
            ? 'Album succesfuly deleted from your library!'
            : 'Album succesfuly added to your library!',
          {
            variant: 'success',
          },
        );
      },
    },
  );

  return [setFavoriteId];
};

export const useAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [search, setSearch] = useState<null | string>(null);

  const { data, isSuccess } = useQuery<Albums>(
    [queryKeys.FETCH_ALBUMS, search],
    () => fetchAlbums(search || ''),
    {
      enabled: Boolean(search),
    },
  );

  useEffect(() => {
    if (isSuccess && data) setAlbums(data.artists.items);
  }, [isSuccess, data]);

  return { albums, setSearch };
};
