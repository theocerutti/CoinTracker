import {AxiosError} from 'axios';

export const extractErrMessage = (err: AxiosError) => {
  if (!err) return 'Unknown error';
  if (err.response && err.response.data && err.response.data.message)
    return err.response.data.message;
  return err.message;
};
