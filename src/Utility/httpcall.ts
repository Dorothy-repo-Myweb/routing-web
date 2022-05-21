import axios from "axios";
import { Method } from "axios";

const HttpCall = (url: string, mthd: Method, data?: object) => {
  return axios({
    method: mthd,
    url: url,
    data: data,
  });
};
export default HttpCall;
