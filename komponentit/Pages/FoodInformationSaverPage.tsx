import { Button, StyleSheet, View } from 'react-native';
import InputComp from '../Components/InputComp';
import { useState } from 'react';
import { storeData, getData } from '../Functions/databseFunctions';
import { Ingredient } from '../Objects/ingredientObject';
import { processNumbers } from '../Functions/processNumber';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FoodInformationSaverPage = () => {
    const [name, setName] = useState(String);
    const [category, setCategory] = useState(String);
    const [manuf, setManuf] = useState(String);
    const [kcals, setKcals] = useState(String);
    const [proteins, setProteins] = useState(String);
    const [Fats, setFats] = useState(String);
    const [carbs, setCarbs] = useState(String);



            return(
                <View>
                    <Button title="Save ingredient" onPress={() => {saveFoodInformation(name, category,  manuf, kcals, proteins, Fats, carbs)}}/>
                    <Button title="Save new category" onPress={() => {saveFoodCategory(category)}}/>
                    <Button title="Delete category" onPress={() => {deleteFoodCategory(category)}}/>
                    <InputComp label="Name" labelColor={styles.labelColor} inputKeybordType="text" inputFunctio={newText => setName(newText)} inputValue={name}/>
                    <InputComp label="Category" labelColor={styles.labelColor} inputKeybordType="search" inputFunctio={newText => setCategory(newText)} inputValue={category}/>
                    <InputComp label="Manufacturer" labelColor={styles.labelColor} inputKeybordType="text" inputFunctio={newText => setManuf(newText)} inputValue={manuf}/>
                    <InputComp label="Kcals" labelColor={styles.labelColor} inputKeybordType="numeric" inputFunctio={newText => setKcals(newText)} inputValue={processNumbers(kcals)}/>
                    <InputComp label="Proteins" labelColor={styles.labelColor} inputKeybordType="numeric" inputFunctio={newText => setProteins(newText)} inputValue={processNumbers(proteins)}/>
                    <InputComp label="Fats" labelColor={styles.labelColor} inputKeybordType="numeric" inputFunctio={newText => setFats(newText)} inputValue={processNumbers(Fats)}/>
                    <InputComp label="Carbohydrates" labelColor={styles.labelColor} inputKeybordType="numeric" inputFunctio={newText => setCarbs(newText)} inputValue={processNumbers(carbs)}/>
                </View>
                );

};

function saveFoodInformation(name:string, category:string, manuF:string, kcals:string, proteins:string, fats:string, carbs:string){

    const ingredient = new Ingredient(name, category, manuF, Number(kcals), Number(proteins), Number(fats), Number(carbs));

    console.log(ingredient);

    storeData(ingredient.name+'_1',JSON.stringify(ingredient));
    getData(ingredient.name+'_1');
}

const saveFoodCategory = async (category:string) =>{
    category = category.toLowerCase();
    let testMatch:boolean = false;
    const keys = await AsyncStorage.getAllKeys();
    const allKeys = await AsyncStorage.multiGet(keys);



    for (let i = 0; i < allKeys.length; i++) {
        if(allKeys[i][0].includes(category)){
            console.log('löyty ' + allKeys[i]);
            testMatch = true;
        }
    }

    if( testMatch === false){
        AsyncStorage.setItem(category + '_category',category);
        console.log('Stored key');
    }else {console.log('Key already exists');}

    console.log(AsyncStorage.getItem(category + '_1'));

};

const deleteFoodCategory = async(category:string) => {
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
}


const styles = StyleSheet.create({
    button:{color:'white'},
    labelColor:{color:'white'},
});

export default FoodInformationSaverPage;
