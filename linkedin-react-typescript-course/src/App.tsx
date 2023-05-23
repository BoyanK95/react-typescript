import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let firstStringValue: string = 'Many';
    let firstNumberValue: number = 33;
    let secondBooleanValue: boolean = true;
    let thirdBooleanValue: number[] = [33, 3, 7, 23];
    let fourthArrValue: Array<string> = ['Matt', '3', '8', 'Denis'];

    //tuple
    let aTyple: [string, number] = ['Boyan', 23];

    //enum
    enum Codes {
        first = 1,
        second
    }

    //any
    let anyTypeValye: any = 'Something';

    const warning = (): void => console.log('Warning!');
    

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    The value {firstStringValue} is of {typeof firstStringValue} type!
                </p>
                <p>
                    The value {firstNumberValue} is of {typeof firstNumberValue} type!
                </p>
                <p>
                    The value {secondBooleanValue} is of {typeof secondBooleanValue} type!
                </p>
                <p>
                    The value {thirdBooleanValue} is of {typeof thirdBooleanValue} type!
                </p>
                <p>
                    The value {fourthArrValue} is of {typeof fourthArrValue} type!
                </p>
                <p>
                    The value {aTyple} is of {typeof aTyple} type!
                </p>
                <p>
                    The value {Codes.second} is of {typeof Codes.second} type!
                </p>
                <p>
                    The value {anyTypeValye} is of {typeof anyTypeValye} type!
                </p>
            </header>
        </div>
    );
}

export default App;
