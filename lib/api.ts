import axios from "axios";

const API_BASE_URL = "https://lbt0630zfb.microcms.io/api/v1";
const API_KEY = process.env.MICROCMS_API_KEY || process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

// 環境変数チェック関数
const checkApiKey = () => {
  if (!API_KEY) {
    const isVercel = process.env.VERCEL === '1';
    if (isVercel) {
      throw new Error(
        "環境変数MICROCMS_API_KEYが設定されていません。Vercelダッシュボードで環境変数を設定してください。" +
        "Settings > Environment Variables で MICROCMS_API_KEY を追加してください。"
      );
    } else {
      throw new Error(
        "環境変数MICROCMS_API_KEYが設定されていません。.env.localファイルを確認してください。"
      );
    }
  }
};

// サーバーサイドでのみ実行される関数
export const getArticles = async () => {
  checkApiKey();

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
  checkApiKey();

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
