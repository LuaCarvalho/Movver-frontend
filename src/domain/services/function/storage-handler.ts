import AsyncStorage from "@react-native-async-storage/async-storage";


async function get(key: string): Promise<Object> {
  const value = await AsyncStorage.getItem(key);
  if (!value) return new Error("Nem um item foi encontrado com essa chave: " + key)
  return JSON.parse(value)
}

async function set(key: string, value: any): Promise<void> {
  const store = JSON.stringify(value)
  await AsyncStorage.setItem(key, store)
}

export const StorageHandler = {
  get,
  set
}