import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  
  const {
    result,
    prevResult,
    handleCleanScreen,
    handleSetNumber,
    handlePositiveToNegative,
    handleDelete,
    handleDivision,
    handleMultiply,
    handleSum,
    handleSubs,
    handleOperation
   } = useCalculator()


  return (
    <View style={styles.calcContainer}>
      {prevResult !== '0' && <Text style={styles.prevResult}>{prevResult}</Text>}
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {result}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text="AC" color="#9b9b9b" action={handleCleanScreen} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={handlePositiveToNegative}/>
        <ButtonCalc text="del" color="#9b9b9b" action={handleDelete}/>
        <ButtonCalc text="/" color="#ff9427" action={handleDivision}/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={handleSetNumber} />
        <ButtonCalc text="8" action={handleSetNumber} />
        <ButtonCalc text="9" action={handleSetNumber} />
        <ButtonCalc text="X" color="#ff9427" action={handleMultiply}/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={handleSetNumber}/>
        <ButtonCalc text="5" action={handleSetNumber}/>
        <ButtonCalc text="6" action={handleSetNumber}/>
        <ButtonCalc text="-" color="#ff9427" action={handleSubs}/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={handleSetNumber}/>
        <ButtonCalc text="2" action={handleSetNumber}/>
        <ButtonCalc text="3" action={handleSetNumber}/>
        <ButtonCalc text="+" color="#ff9427" action={handleSum}/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" double action={handleSetNumber}/>
        <ButtonCalc text="." action={handleSetNumber}/>
        <ButtonCalc text="=" color="#ff9427" action={handleOperation}/>
      </View>
    </View>
  )
}
