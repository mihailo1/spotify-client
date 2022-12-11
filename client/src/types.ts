export type AccessToken = {
  accessToken: string;
};

export type Albums = {
  artists: {
    items: Album[];
  };
};

export type MyAlbums = {
  items: { album: Album }[];
};

export type Album = {
  name: string;
  id: string;
  images: Image[];
};

export type User = {
  displayName: string;
  country: string;
  email: string;
  followers: { total: number };
  href: string;
  id: string;
  images: Image[];
  externalUrls: {
    spotify: string;
  };
};

export type Current = {
  item: {
    album: {
      images: Image[];
      name: string;
    };
    name: string;
    artists: Artist[];
    id: string;
  };
  isPlaying: boolean;
};

export type Artist = {
  name: string;
};

export type Image = {
  url: string;
};

// generics
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
