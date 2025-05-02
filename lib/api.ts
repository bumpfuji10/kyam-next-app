import axios from "axios";

const API_BASE_URL = "https://lbt0630zfb.microcms.io/api/v1";
const API_KEY = process.env.MICROCMS_API_KEY;

// サーバーサイドでのみ実行される関数
export const getArticles = async () => {
  if (!API_KEY) {
    throw new Error("環境変数MICROCMS_API_KEYが設定されていません。.env.localファイルを確認してください。");
  }

  try {
    const res = await axios.get(`${API_BASE_URL}/articles`, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY
      }
    });
    return res.data;
  } catch (error) {
    console.error("記事一覧の取得中にエラーが発生しました:", error);
    throw error;
  }
};

export const getArticle = async (articleId: string) => {
  if (!API_KEY) {
    throw new Error("環境変数MICROCMS_API_KEYが設定されていません。.env.localファイルを確認してください。");
  }

  try {
    const res = await axios.get(`${API_BASE_URL}/articles/${articleId}`, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY
      }
    });
    return res.data;
  } catch (error) {
    console.error(`記事ID: ${articleId} の取得中にエラーが発生しました:`, error);
    throw error;
  }
};
