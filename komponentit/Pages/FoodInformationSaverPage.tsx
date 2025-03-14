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

function saveFoodCategory(category:string){
    category = category.toLowerCase();
    AsyncStorage.setItem(category + '_1',category);
    console.log(AsyncStorage.getItem(category + '_1'));
}


const styles = StyleSheet.create({
    button:{color:'white'},
    labelColor:{color:'white'},
});

export default FoodInformationSaverPage;
