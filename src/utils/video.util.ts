export const getVideoPath = (key?: string) => {
  return key
    ? // ? `https://www.youtube.com/watch?v=${key}`
      `https://www.youtube.com/embed/${key}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`
    : undefined;
};
