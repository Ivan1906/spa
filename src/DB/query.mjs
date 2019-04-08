export const convertFetchDataToJson = async(url) => {
  return await(await fetch(url)).json();
}