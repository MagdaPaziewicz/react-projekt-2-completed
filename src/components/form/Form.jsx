import React from 'react';
import Select from './Select';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import Paragraph from './Paragraph';

const Form = ({ placeholder }) => {
    const [result, setResult] = useState('To');
    const [value, setValue] = useState('');
    const [code, setCode] = useState();
    
    const onInputChange = (e) => {
        setValue(e.target.value);
    };
    
    const onSelectChange = (e) => {
        setCode(e.target.value);
        console.log(e.target.value);
    };
    
    const onBtnClick = (e) => {
        e.preventDefault();
        getCurrency(code);
    };
    const getCurrency = (currencyCode) => {
        
        fetch('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')
        .then((response) => response.json())
        .then((data) => {
            const currency = data[0].rates.filter(
                (elem) => elem.code === currencyCode
                );
                if (value) {
                    setResult(`To ${(currency[0].mid * value).toFixed(2)} PLN`);
                }
                console.log(currency);
        })
        .catch((error) => console.log(error));
    };
    
    return (
        <form className='form'>
        <section className='section'>
            <Input
            change={onInputChange}
            placeholder={placeholder}
            value={value}
            />
            <Select
            symbols={['Wybierz walutę','EUR', 'USD', 'CHF']}
            change={onSelectChange}
            values={['','EUR', 'USD', 'CHF']}
            />
            <Button click={onBtnClick} />
            <Paragraph result={result} />
        </section>
    </form>
    );
};

export default Form;