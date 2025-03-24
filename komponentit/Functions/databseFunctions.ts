import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ingredient } from '../Objects/ingredientObject';



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



export async function saveFoodInformation(name:string, category:string, manuF:string, kcals:string, proteins:string, fats:string, carbs:string){
    name = name.toLowerCase();
    category = category.toLowerCase();
    manuF = manuF.toLowerCase();
    const keys = await AsyncStorage.getAllKeys();
    const allKeys = await AsyncStorage.multiGet(keys);

    const ingredient = new Ingredient(name, category, manuF, Number(kcals), Number(proteins), Number(fats), Number(carbs));

    for (let i = 0; i < allKeys.length; i++) {
        console.log('allkeys[i][0]: ' + allKeys[i] + ' allkeys[i][1]: ' + allKeys[i][1]);
        if(allKeys[i][0] === name && allKeys[i][1] === category){
            console.log('löyty meinaan');
        }
    }

    console.log(ingredient);

    storeData('ingredient_' + ingredient.name,JSON.stringify(ingredient));
    getData(ingredient.name);
}

export const saveFoodCategory = async (category:string) =>{
    category = category.toLowerCase();
    let testMatch:boolean = false;
    const keys = await AsyncStorage.getAllKeys();
    const allKeys = await AsyncStorage.multiGet(keys);



    for (let i = 0; i < allKeys.length; i++) {
        if(allKeys[i][0].includes('category_' + category)){
            console.log('löyty ' + allKeys[i]);
            testMatch = true;
        }
    }

    if( testMatch === false){
        AsyncStorage.setItem('category_' + category,category);
        console.log('Stored key');
    }else {console.log('Key already exists');}

    console.log(AsyncStorage.getItem(category + '_1'));

};

export const deleteFoodCategory = async(category:string) => {
    category = category.toLowerCase();
    category = category + '_category';
    const keys = await AsyncStorage.getAllKeys();
    const allKeys = await AsyncStorage.multiGet(keys);


    for(let i = 0; i < allKeys.length; i++){
        if(allKeys[i][0].includes(category)){
            console.log(allKeys[i][0]);
            await AsyncStorage.removeItem(category);
        }
    }
    //await AsyncStorage.multiRemove(keys)
    console.log(allKeys);
};

//"debug"
export const showAllKeys = async() => {
    const keys = await AsyncStorage.getAllKeys();
    const allKeys = await AsyncStorage.multiGet(keys);
    if(allKeys.length > 0){
        for (let i =  0; i < allKeys.length; i++){
            console.log(allKeys[i]);

        }} else {console.log("No keys found");}
};
export const deleteAllKeys = async() => {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
        console.log(keys);
};

