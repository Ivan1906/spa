import DBApi from './DB/dbApi.mjs';
import ListVideo from './view/listVideo.mjs';
import DetailVideo from './view/detailVideo.mjs';

const dbApi = new DBApi();
const detailVideo = new DetailVideo('partial');
const listVideo = new ListVideo('partial');

const btnSearch = document.getElementById('btnSearch');
const search = document.getElementById('search');

btnSearch.addEventListener('click', async event => {
  event.preventDefault();
  listVideo.clean();
  let videos = await dbApi.getBySearchText(search.value);
  listVideo.render(videos);
});

listVideo
  .$el
  .addEventListener('click', async event => {
    if (event.keyVideo != undefined && event.typeVideo != undefined) {

      detailVideo.clean();
      let video = await dbApi.getDetailInfoByVideo(event.keyVideo, event.typeVideo);
      detailVideo.render(video);

      let recom = await dbApi.getListVideoRecommendations(event.keyVideo, event.typeVideo);
      detailVideo.renderRecom(recom);
    }
  });
