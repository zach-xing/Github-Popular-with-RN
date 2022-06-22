import { useAsyncStorage } from "@react-native-async-storage/async-storage";

/**
 * custom packaging Storage hook
 */
export default function useStorage<T extends object | string>(
  key: string,
  defaultValue?: T
) {
  const { setItem, getItem } = useAsyncStorage(key);

  const setAsyncItem = async function (data: T) {
    await setItem(JSON.stringify(data));
  };

  const getAsyncItem = async function (): Promise<T | null> {
    try {
      let value: string | null = await getItem();
      if (typeof value === "string") {
        return JSON.parse(value) as T;
      }
      if (defaultValue !== undefined) {
        // 若有默认值的情况下
        await setAsyncItem(defaultValue);
        return defaultValue;
      }
      return value;
    } catch (error) {
      console.log("getItem error");
      return null;
    }
  };

  return { setAsyncItem, getAsyncItem };
}
