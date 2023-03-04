import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {CounterSetting} from "./components/CounterSetting/CounterSetting";
import {Counter} from "./components/Counter/Counter";

function App() {
    let [min, setMin] = useState(0);
    let [max, setMax] = useState(5);
    const [count, setCount] = useState(min);
    const [flag, setFlag] = useState(false);
    const incDisabled = count === max;
    const resetDisabled = count === min;
    const setDisabled = min >= max || min < 0 || max < 0;
    const styleForMaxValueInput = max <= min || max <= 0;
    const styleForMinValueInput = min >= max || min < 0;

    const incCounter = () => {
        setCount(count + 1);
    }

    const resetCounter = () => {
        setCount(min);
    }

    const setSetting = () => {
        localStorage.setItem('min', JSON.stringify((min)))
        localStorage.setItem('max', JSON.stringify((max)))
        setCount(min);
        setFlag(false);
    }

    useEffect(() => {
        const minValueString = localStorage.getItem('min',)
        const maxValueString = localStorage.getItem('max',)
        if (minValueString && maxValueString) {
            setMin(JSON.parse(minValueString))
            setMax(JSON.parse(maxValueString))
            setCount(JSON.parse(minValueString))
        }
    }, [])

    const maxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value);
        setFlag(true);
    }

    const minInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(+e.currentTarget.value);
        setFlag(true);
    }

    // useEffect( () => {
    //     localStorage.setItem('min', JSON.stringify((min)))
    //     localStorage.setItem('max', JSON.stringify((max)))
    // }, [min, max])

    return (
        <div className="app-container">
            <CounterSetting
                min={min}
                max={max}
                setSetting={setSetting}
                setDisabled={setDisabled}
                styleForMaxValueInput={styleForMaxValueInput}
                styleForMinValueInput={styleForMinValueInput}
                maxInputValue={maxInputValue}
                minInputValue={minInputValue}
            />

            <Counter
                incDisabled={incDisabled}
                resetDisabled={resetDisabled}
                setDisabled={setDisabled}
                incCounter={incCounter}
                resetCounter={resetCounter}
                maxValue={max}
                count={count}
                flag={flag}
                min={min}
            />
        </div>
    );
}

export default App;
