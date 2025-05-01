import axios from "axios";

const API_BASE_URL = "https://lbt0630zfb.microcms.io/api/v1";
const API_KEY = process.env.MICROCMS_API_KEY

if (!API_KEY) {
  throw new Error("環境変数MICROCMS_API_KEYが設定されていません。");
}

export const getArticles = async () => {
  const res = await axios.get(`${API_BASE_URL}/articles`, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY
    }
  });
  return res.data;
};

export const getArticle = async (articleId: string) => {
  const res = await axios.get(`${API_BASE_URL}/articles/${articleId}`, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY
    }
  });
  return res.data;
};
