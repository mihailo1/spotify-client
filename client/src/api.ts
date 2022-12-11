import { URLS } from 'constant';
import { AccessToken, MyAlbums, Albums, Current, User } from 'types';
import client from './api-client';

// Typing can be better here.
const fetchTokens = async (code: string): Promise<AccessToken> =>
  await client.get<unknown, AccessToken>('/callback', {
    params: { code },
  });

const fetchUser = async (): Promise<User> =>
  await client.request({
    url: 'me',
    baseURL: URLS.SPOTIFY_API_BASE_URL,
  });

const fetchAlbums = async (q: string): Promise<Albums> =>
  await client.request({
    url: 'search',
    baseURL: URLS.SPOTIFY_API_BASE_URL,
    params: { q, type: 'artist' },
  });

const fetchMyAlbums = async (): Promise<MyAlbums> =>
  await client.request({
    url: URLS.ALBUMS_URL,
    baseURL: URLS.SPOTIFY_API_BASE_URL,
  });

const deleteAlbums = async (ids: string[]): Promise<MyAlbums> =>
  await client.request({
    url: URLS.ALBUMS_URL,
    baseURL: URLS.SPOTIFY_API_BASE_URL,
    method: 'delete',
    data: { ids },
  });

const saveAlbums = async (ids: string[]): Promise<unknown> =>
  await client.request({
    url: URLS.ALBUMS_URL,
    baseURL: URLS.SPOTIFY_API_BASE_URL,
    method: 'put',
    params: { ids: ids.join() },
    // data: { ids },
  });

const fetchCurrent = async (): Promise<Current> =>
  await client.request({
    url: URLS.PLAYER_URL,
    baseURL: URLS.SPOTIFY_API_BASE_URL,
  });

const control =
  (key: 'pause' | 'play' | 'next' | 'previous', id?: string) =>
  async (): Promise<unknown> =>
    await client.request({
      url: URLS.PLAYER_URL + '/' + key,
      baseURL: URLS.SPOTIFY_API_BASE_URL,
      method: ['next', 'previous'].includes(key) ? 'post' : 'put',
      ...(id && { params: { device_id: id } }),
    });

export {
  fetchTokens,
  fetchUser,
  fetchAlbums,
  saveAlbums,
  fetchCurrent,
  control,
  fetchMyAlbums,
  deleteAlbums,
};
