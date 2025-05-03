import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

export async function highlightHtml(rawHtml: string): Promise<string> {
  const result = await unified()
    .use(rehypeParse, { fragment: true }) // 生HTMLをパース
    .use(rehypePrismPlus) // Prismのクラス付与
    .use(rehypeStringify) // HTMLに戻す
    .process(rawHtml);

  return result.toString();
}
