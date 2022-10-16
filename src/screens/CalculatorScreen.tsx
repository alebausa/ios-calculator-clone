import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  const [result, setResult] = useState('100')
  const [prevResult, setPrevResult] = useState('0')

  const clean = () => {
    setPrevResult(result);
    setResult('0')
  }

  const setNumber = (keyText: string) => {
    // Don't accept double float
    if (result.includes('.') && keyText === '.') {
      return;
    }
    if (result.startsWith('0') || result.startsWith('-0')) {
      // Floating point
      if (keyText === '.') {
        setResult(result + keyText)
        // Is it another 0?
      } else if (keyText === '0' && result.includes('.')) {
        setResult(result + keyText)

        // It is not 0 and doesnt have floating point
      } else if (keyText !== '0' && !result.includes('.')) {
        setResult(keyText)
      }
      
    } else {
      setResult( result + keyText )
    }
  }

  const positiveToNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''))
    } else {
      setResult('-' + result)
    }
  }

  return (
    <View style={styles.calcContainer}>
      <Text style={styles.prevResult}>{prevResult}</Text>
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {result}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9b9b9b" action={clean} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveToNegative}/>
        <ButtonCalc text="%" color="#9b9b9b" action={setNumber}/>
        <ButtonCalc text="/" color="#ff9427" action={setNumber}/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={setNumber} />
        <ButtonCalc text="8" action={setNumber} />
        <ButtonCalc text="9" action={setNumber} />
        <ButtonCalc text="X" color="#ff9427" action={setNumber}/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={setNumber}/>
        <ButtonCalc text="5" action={setNumber}/>
        <ButtonCalc text="6" action={setNumber}/>
        <ButtonCalc text="-" color="#ff9427" action={setNumber}/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={setNumber}/>
        <ButtonCalc text="2" action={setNumber}/>
        <ButtonCalc text="3" action={setNumber}/>
        <ButtonCalc text="+" color="#ff9427" action={setNumber}/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" double action={setNumber}/>
        <ButtonCalc text="." action={setNumber}/>
        <ButtonCalc text="=" color="#ff9427" action={setNumber}/>
      </View>
    </View>
  )
}
