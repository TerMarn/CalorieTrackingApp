import { Button, StyleSheet, View } from 'react-native';
import InputComp from '../Components/InputComp';
import { useState } from 'react';
import {deleteFoodCategory, saveFoodCategory, saveFoodInformation,showAllKeys, deleteAllKeys } from '../Functions/databseFunctions';
import { processNumbers } from '../Functions/processNumber';


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
                    <Button title="Show All category(debug)" onPress={() => {showAllKeys()}}/>
                    <Button title="Delete All category(debug)" onPress={() => {deleteAllKeys()}}/>
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






const styles = StyleSheet.create({
    button:{color:'white'},
    labelColor:{color:'white'},
});

export default FoodInformationSaverPage;
