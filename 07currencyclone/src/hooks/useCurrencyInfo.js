import { useEffect, useState } from "react";

function useCurrencyInfo(currency) { // function wiht a given curr as a param (ie: eur), techically a custom "hook", like useEffect, useCallback
    const [data, setData] = useState({}); // known as a state variable, the {} for array destruct
        useEffect(() => { //    useEffect, executetes everytime the "currency" var mutates
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) // the ...json is an "api"
               .then((res) => res.json())
               .then((res) => setData(res[currency])) // this like saying school[teachersArray] or school.teachersArray
               // ^^ it "extracts the nested object"
        
        }, [currency])
        // console.log(`List of currencies: ${Object.keys(data)}`)
        // console.log(`Convertion from ${currency} to USD:  ${data.usd}`)
        return data
}


export default useCurrencyInfo;

// thsi function retruns me an array, of values for currencies, 
// calculated from the base currency passed in as a param

// explain fully what this: import { useEffect, useState } from "react"; function useCurrencyInfo(currency) { const [data, setData] = useState({}); useEffect(() => { fetch(https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json) .then((res) => res.json()) .then((res) => setData(res[currency])) }, [currency]) console.log(data) return data } export default useCurrencyInfo; , does when the fetch links to something like this: (eur) "date": "2025-09-06", "eur": { "1inch": 4.76761537, "aave": 0.0038668721, "ada": 1.40036268, "aed": 4.30253513, "afn": 80.29584768, "agi