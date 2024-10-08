export const useLocalStorage = <T extends any>(key: string) => {
  const getItem = (): T | null => {
    const item = localStorage?.getItem(key);

    if (!item) return null;
    return JSON.parse(item);
  };

  // item의 타입을 사용하는 곳에서 할당하겠음.
  const setItem = (item: T) => {
    try {
      localStorage?.setItem(key, JSON.stringify(item));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return { getItem, setItem };
};
