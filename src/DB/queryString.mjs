import {config} from '../config/settings.mjs';

export const getQueryString = (type, params, recommendations = false) => {
  if (type === 'search') {
    return `${config.baseUrl}search/multi?api_key=${config.token}&query=${params}`;
  } else if (type === 'movie' && !recommendations) {
    return `${config.baseUrl}movie/${params}?api_key=${config.token}`;
  } else if (type === 'movie' && recommendations) {
    return `${config.baseUrl}movie/${params}/recommendations?api_key=${config.token}`;
  } else if (type === 'tv' && !recommendations) {
    return `${config.baseUrl}tv/${params}?api_key=${config.token}`;
  } else if (type === 'tv' && recommendations) {
    return `${config.baseUrl}tv/${params}/recommendations?api_key=${config.token}`;
  } else {
    return new Error(`За типом ${type} не можливо сформувати стрічку запиту`);
  };
};