// Async Requests
import { getMarketItems } from "../async/marketAsync";

// Reducers Methods
import { setMarketItems } from "../reducers/marketSlice";

export const fetchAllMarketItems = () => async (dispatch) => {
  const marketItems = await getMarketItems();
  if (marketItems) dispatch(setMarketItems());
  else console.log("No market items found");
};
