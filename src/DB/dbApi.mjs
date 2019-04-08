import {getQueryString} from './queryString.mjs';
import {convertFetchDataToJson} from './query.mjs';
import {getListVideo, getDetailVideo, getListVideoRecom} from '../until/getVideoFromData.mjs';

export default class DBApi {
  async getBySearchText(text) {
    let videos = null;
    try {
      let data = await convertFetchDataToJson(getQueryString('search', text));
      videos = getListVideo(data.results);
    } catch (err) {
      console.error(err);
    } finally {
      return videos;
    }
  };

  async getDetailInfoByVideo(id, type) {
    let video = null;
    try {
      let data = await convertFetchDataToJson(getQueryString(type, id));
      video = getDetailVideo(data, type);
    } catch (err) {
      console.error(err);
    } finally {
      return video;
    }
  };

  async getListVideoRecommendations(id, type) {
    let recomVideos = null;
    try {
      let data = await convertFetchDataToJson(getQueryString(type, id, true));
      recomVideos = getListVideoRecom(data.results, type);
    } catch (err) {
      console.log(err);
    } finally {
      return recomVideos;
    }
  };

}