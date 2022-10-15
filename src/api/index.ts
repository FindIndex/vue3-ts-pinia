import request from "@/api/request";

// const getAppConfig = () => axios.get("config.json");

// const getAppInit = () => axios.get("init.json");

// $$$$$$$$$$$$$$$$$$
const getHomeRecommended = ({ offset = 0, limit = 10 } = {}): Promise<any> => {
  console.log(offset);
  return request.get(`home/recommended/${offset}/${limit}`);
};

// export { getAppConfig, getAppInit };
export { getHomeRecommended };
