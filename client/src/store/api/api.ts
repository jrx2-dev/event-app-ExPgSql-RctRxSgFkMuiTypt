import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { QueryResults } from "../../models/Interfaces";

const callAPI = async ({
  url,
  method,
  data,
}: AxiosRequestConfig): Promise<AxiosResponse<QueryResults>> => {
  return await Axios({
    url,
    method,
    data,
  });
};

export default callAPI;
