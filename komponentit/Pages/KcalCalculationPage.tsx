import {  useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import InputComp from "../Components/InputComp";


const KcalCalculationPage = () => {
    const [weight,setWeight] = useState(String);
    const [kcals, setKcals] = useState(String);
    const [proteins, setProteins] = useState(String);
    const [fats, setFats] = useState(String);
    const [carbs, setCarbs] = useState(String);
    return(
        <View>
            <InputComp label="Weight (g)" labelColor={styles.inputLabelColor} inputKeybordType="numeric" inputFunctio={newText => setWeight(processNumbers(newText))} inputValue={weight}/>
            <InputComp label="Kcals" labelColor={styles.inputLabelColor} inputKeybordType="numeric" inputFunctio={newText => setKcals(processNumbers(newText))} inputValue={kcals}/>
            <InputComp label="Proteins" labelColor={styles.inputLabelColor} inputKeybordType="numeric" inputFunctio={newText => setProteins(processNumbers(newText))} inputValue={proteins}/>
            <InputComp label="Fats" labelColor={styles.inputLabelColor} inputKeybordType="numeric" inputFunctio={newText => setFats(processNumbers(newText))} inputValue={fats}/>
            <InputComp label="Carbohydrates" labelColor={styles.inputLabelColor} inputKeybordType="numeric" inputFunctio={newText => setCarbs(processNumbers(newText))} inputValue={carbs}/>
            <View>
                {calculateNumbers(Number(weight),Number(kcals),Number(proteins),Number(fats),Number(carbs))}
            </View>
        </View>
    );
};


function calculateNumbers(weight:number, kcals:number, protein:number, fats:number, carbs:number){
     var totalKcals:number, totalProteins:number, totalFats:number, totalCarbs:number;

    if(isNaN((weight && kcals && protein && fats && carbs))){
        processNumbers(weight.toString());
        return(
            <View>
                <Text style={styles.inputLabelColor}>Check operations </Text>
            </View>);
    }else{
            totalKcals = kcals * (weight / 100);
            totalProteins = protein * (weight / 100);
            totalFats = fats * (weight / 100);
            totalCarbs = carbs * (weight / 100);

            totalKcals = Math.round(totalKcals * 100) / 100;
            totalProteins = Math.round(totalProteins * 100) / 100;
            totalFats = Math.round(totalFats * 100) / 100;
            totalCarbs = Math.round(totalCarbs * 100) / 100;

            return (
                <View>
                    <Text style={styles.inputLabelColor}>Total Kcals: {totalKcals.toFixed(2)}</Text>
                    <Text style={styles.inputLabelColor}>Total Protein: {totalProteins.toFixed(2)}</Text>
                    <Text style={styles.inputLabelColor}>Total Fats: {totalFats.toFixed(2)}</Text>
                    <Text style={styles.inputLabelColor}>Total Carbs: {totalCarbs.toFixed(2)}</Text>
                </View>);
    }

}

function processNumbers(num:string):string{
    const numReg =  /[^0-9.]/, numeReg = /[0-9]/;
    var arr = [];
   // console.log(Number(num.toString().replace(numReg,'')));
   if(num.startsWith('0')){
    for(var i = 0; i < num.length; i++){
        arr.push(num[i]);
    }
    console.log(arr + " " + arr.length)
    if(arr.length > 1){
        if(arr[1].match(numeReg)){
        console.log('asd');
        num = num.slice(1);}
    }else {arr = [];}

    console.log(arr[1]);
   }

    if(isNaN(Number(num))) {
            for(var i = 0; i < num.length; i++){
                arr.push(num[i]);
            }
            for(var i = arr.indexOf('.') + 1; i < arr.length; i++){
                if(arr[i] === '.'){ arr.splice(i,1)}
            }
           num = arr.join('');
         return num.replace(numReg,'').trim();
        }
    return num;
}


const styles = StyleSheet.create({
    inputLabelColor:{
        color:'white',
    },
});

export default  KcalCalculationPage;
