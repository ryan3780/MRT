const TheHotelAPI =
  "https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev/hotels";

const callAPI = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
};

export const requestImages = async setData => {
  try {
    const result = await callAPI(TheHotelAPI);
    setData(result);
    return result;
  } catch (e) {
    console.warn(e);
  }
};

export const getPrices = async id => {
  const Prices = `https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev/hotel-prices?ids=${id}`;
  try {
    const result = await callAPI(Prices);
    console.log(result);
    return result;
  } catch (e) {
    console.warn(e);
  }
};

// export const requestMoreCats = async () => {
//     requestRandomCats()
// }

// export const requestRandomCats = async setImages => {
//     setImages({loading: true})

//     try {
//         const cats = await callAPI(TheCatAPI);
//         console.log(cats)
//         if (cats.length)
//             setImages({images: cats, loading: false})
//         return cats;
//     } catch (e) {
//         console.warn(e);
//     }
// };
