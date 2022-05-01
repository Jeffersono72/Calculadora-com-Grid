
import React, { useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Row, Grid } from "react-native-easy-grid";

export default function App() {
  const [receiveText, setReceiveText] = useState("");
  const [calcText, setCalcText] = useState("");
  const ClickButton = (text) => {
    if (text == "=") {
      return Result();
    }
    setReceiveText(receiveText + text);
  };

  const Result = () => {
    setCalcText(eval(receiveText));
  };


  function OperationsCalc(operation) {
    let operations = ["DEL", "+", "-", "*", "/"];

    if (operation == "DEL") {
      return setReceiveText(
        receiveText.toString().substring(0, receiveText.length - 1)
      )
    };
    
    if (operation == "AC") {
      setCalcText(0);
      setReceiveText("");
      return;
    }
    
    if (operations.includes(receiveText.toString().split("").pop()))
      return;
    setReceiveText(receiveText + operation);
  }

  return (
    
    <Grid style={styles.container}>
      <Row size={12.5}>
      <Grid style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
      </Grid>
      </Row>
      <Row size={10}>
      <Grid style={styles.calculation}>
        <Text style={styles.Calctext}>{receiveText}</Text>
      </Grid>
      </Row>
      <Row size={60}>
      <Grid style={styles.buttons}>
        <Row size={80}>
        <View style={styles.backgroundNumbers}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => ClickButton(1)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ClickButton(2)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ClickButton(3)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => ClickButton(4)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ClickButton(5)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ClickButton(6)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => ClickButton(7)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ClickButton(8)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ClickButton(9)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => ClickButton(".")}
              style={styles.aux}
            >
              <Text style={styles.numbers}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ClickButton(0)}
              style={styles.aux}
            >
              <Text style={styles.numbers}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ClickButton("=")}
              style={styles.aux}
            >
              <Text style={styles.numbers}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Row>
        <Row size={20}>
        <View style={styles.operations}>
        <TouchableOpacity
            onPress={() => OperationsCalc("AC")}
            style={styles.aux}
          >
            <Text style={styles.operationButton}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => OperationsCalc("DEL")}
            style={styles.aux}
          >
            <Text style={styles.operationButton}>DEL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => OperationsCalc("-")}
            style={styles.aux}
          >
            <Text style={styles.operationButton}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => OperationsCalc("+")}
            style={styles.aux}
          >
            <Text style={styles.operationButton}>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => OperationsCalc("*")}
            style={styles.aux}
          >
            <Text style={styles.operationButton}>*</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => OperationsCalc("/")}
            style={styles.aux}
          >
            <Text style={styles.operationButton}>/</Text>
          </TouchableOpacity>
         
        </View>
        </Row>
      </Grid>
      </Row>
    </Grid>
  );
}
const styles = StyleSheet.create({
  container: {
    minWidth:100,
    minHeight:100,

  },
  result: {
    
    backgroundColor: "#006400",
    justifyContent: "center",
    alignItems:'center'
  },
  resultText: {
    fontSize: 30,
    color: "white",
  },
  Calctext: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  numbers: {
    fontSize: 30,
    color: "white",
  },
  calculation: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  aux: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: 30,
  },
  buttons: {
    minWidth:10,
    minHeight:10,
    flexDirection: "row",
  },
  backgroundNumbers: { 
    flex:1,
    backgroundColor: "#434343",
  },
  row: {
    flexDirection: "row",
    flex:1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  operations: {
    flex:1,
    backgroundColor: "#006400",
    alignItems: "center",
    justifyContent: "space-around",
  },
  operationButton: {
    fontSize: 25,
    color: "white",
  },
});