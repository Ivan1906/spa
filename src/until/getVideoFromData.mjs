import Video from './../Model/video.mjs';

export const getDetailVideo = (data, type) => {
  if (type === 'movie') {
    return new Video(data.id, data.original_title, data.media_type, data.overview, data.poster_path);
  } else if (type === 'tv') {
    return new Video(data.id, data.original_name, data.media_type, data.overview, data.poster_path);
  }
};

export const getListVideo = data => {
  return data.map(d => {
    if (d.media_type === 'movie') {
      return new Video(d.id, d.original_title, d.media_type);
    } else if (d.media_type === 'tv') {
      return new Video(d.id, d.original_name, d.media_type);
    }
  }).filter(el => el != null);
};

export const getListVideoRecom = (data, type, count = 5) => {
  return data.map(d => {
    if (type === 'movie') {
      return new Video(d.id, d.original_title);
    } else if (type === 'tv') {
      return new Video(d.id, d.original_name);
    }
  }).filter((el, index) => index < count);
};