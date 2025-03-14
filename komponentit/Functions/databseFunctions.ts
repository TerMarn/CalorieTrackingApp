import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (dataKey:string, dataValue:string)=> {
    try {
        await AsyncStorage.setItem(dataKey,dataValue);
    } catch (error) {
        console.log(error);
    }
    console.log('Store done');
};

export const getData = async (dataKey:string) => {
    try {
        const value = await AsyncStorage.getItem(dataKey);
        if (value !== null){
            console.log('get done: ' + value);
        }
    } catch (error) {
    }
    
};

export const getAllKeys = async () => {
    const keys:string[] = [];
    try {
        keys.push(await AsyncStorage.getAllKeys());

    } catch (error) {

    }
    console.log(keys[0]);
}
