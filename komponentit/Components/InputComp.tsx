import { TextInput, View, Text, TextStyle, InputModeOptions, StyleSheet } from "react-native";

type InputProps = {
    label:String;
    labelColor:TextStyle;
    inputKeybordType:InputModeOptions;
    inputFunctio:(val:string) => void;
    inputValue:string
}


const InputComp = (props:InputProps) => {
return(
    <View >
        <Text style={props.labelColor}>{props.label}</Text>
        <TextInput inputMode={props.inputKeybordType} style={styles.inputBox} onChangeText={props.inputFunctio} value={props.inputValue} />
    </View>
);
};

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor: 'white',
        color:'black',
    },
});

export default InputComp;
