import AsyncStorage from '@react-native-async-storage/async-storage';


export async function storeData(value: any, storageKey: string) {
  try {
    await AsyncStorage.setItem(`@${storageKey}`, JSON.stringify(value))
  } catch (error) {
    console.warn("Ops, houve um erro!")
    console.log(error)
  } 
}

export const getData = async (storageKey: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${storageKey}`)
    return value ? JSON.parse(value) : {};
  } catch (error) {
    console.warn("Ops, houve um erro!")
    console.log(error)
    return Promise.reject(error)
  }
}