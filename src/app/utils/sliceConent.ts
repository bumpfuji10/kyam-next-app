export function sliceContent(length: number) {
  return function (content: string) {
    const plainText = content.replace(/<[^>]*>/g, '');
    return plainText.slice(0, length) + "...";
  };
}
