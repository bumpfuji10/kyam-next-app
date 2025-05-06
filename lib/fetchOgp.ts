// lib/fetchOgp.ts
import ogs from 'open-graph-scraper';

export async function fetchOgp(url: string) {
  try {
    const { result } = await ogs({ url });
    return {
      title: result.ogTitle || '',
      description: result.ogDescription || '',
      image: (() => {
        const ogImage = result.ogImage;
        if (!ogImage) return '';
        if (Array.isArray(ogImage)) {
          return ogImage[0]?.url || '';
        }
        return (ogImage as { url: string }).url || '';
      })()
    };
  } catch (error) {
    console.error(`OGP取得エラー（${url}）:`, error);
    return {};
  }
}


