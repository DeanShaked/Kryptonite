// Async Functions
import { sendHttpAsync } from '../async/accountAsync';

// Reducers Methods
import { setRates } from '../reducers/accountSlice';

export const sendHttp = () => async dispatch => {
  const response = await sendHttpAsync();
  dispatch(setRates(response));
};
