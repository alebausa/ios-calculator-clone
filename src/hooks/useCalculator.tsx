import { useState, useRef } from 'react';

enum Operators {
  sum, subs, multiply, divide
}

export const useCalculator = () => {
  const [result, setResult] = useState('0')
  const [prevResult, setPrevResult] = useState('0')
  const lastOperator = useRef<Operators>();

  const handleCleanScreen = () => {
    setPrevResult('0');
    setResult('0')
  }

  const handleSetNumber = (keyText: string) => {
   // No aceptar doble punto
        if( result.includes('.') && keyText === '.' ) return;
        if ( result.startsWith('0') || result.startsWith('-0') ) {
            // Punto decimal
            if ( keyText === '.' ) {
                setResult( result + keyText );

                // Evaluar si es otro cero, y hay un punto
            } else if( keyText === '0' && result.includes('.')  ) {
                setResult( result + keyText );

                // Evaluar si es diferente de cero y no tiene un punto
            } else if( keyText !== '0' && !result.includes('.') ) {
                setResult( keyText );

                // Evitar 0000.0
            } else if( keyText === '0' && !result.includes('.') ) {
                setResult( result );
            } else {
                setResult( result + keyText ); 
            }

        } else {
            setResult( result + keyText );
        }
  }

  const handlePositiveToNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''))
    } else {
      setResult('-' + result)
    }
  }

  const handleDelete = () => {
    if (result.length === 2 && result.includes('-')) {
      setResult('0')
    } else if (result.length > 1) {
      const digit = result.slice(0,-1);
      setResult(digit)
    } else {
      setResult('0')
    }
  }

  const handleUpdateResult = () => {
    if (result.endsWith('.')) {
      setPrevResult(result.slice(0,-1))
    } else {
      setPrevResult(result)
    }
    setResult('0')
  }

  const handleDivision = () => {
    handleUpdateResult();
    lastOperator.current = Operators.divide;
  }

  const handleMultiply = () => {
    handleUpdateResult();
    lastOperator.current = Operators.multiply;
  }

  const handleSum = () => {
    handleUpdateResult();
    lastOperator.current = Operators.sum;
  }

  const handleSubs = () => {
    handleUpdateResult();
    lastOperator.current = Operators.subs;
  }

  const handleOperation = () => {
    const num1 = Number(prevResult);
    const num2 = Number(result);
    switch (lastOperator.current) {
      case Operators.sum:
        setResult((num1 + num2).toString());
        break;
      case Operators.divide:
        setResult((num1 / num2).toString());
        break;
      case Operators.subs:
        setResult((num1 - num2).toString());
        break;
      case Operators.multiply:
        setResult((num1 * num2).toString());
        break;
      default:
        break;
    }
    setPrevResult('0')
  }

  return { result, prevResult, handleCleanScreen, handleSetNumber, handlePositiveToNegative, handleDelete, handleDivision, handleMultiply, handleSum, handleSubs, handleOperation }

}