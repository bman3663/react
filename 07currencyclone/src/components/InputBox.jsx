function InputBox({
    amount,
    onAmountChange,
    onCurrencyChange,
    currnecyArray,
    selectedCurrency, 
    // ^^^^ default example has this = "{eur}"
    amountDisabled = false,
    label
}) {
    console.log(`Amount: ${amount} \n Label: ${label}
         \n Chosen currency: ${selectedCurrency}`)
    return (
        <div className="hangry">
            <div>
                <label htmlFor="amount_id">
                    {label}
                </label>
                <input 
                type="number" 
                id="amound_id" 
                disabled={amountDisabled}
                onChange={(e) => onAmountChange && 
                onAmountChange(Number(e.target.value))} 
                value={amount}
                
                />
            </div>
            <div>
                <p>Currency Type: </p>
                <select 
                
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {
                        currnecyArray.map((currency) => (
                            <option value={currency} key={currency}>{currency}</option>
                        ))
                        // we want to map from each key in the array to an optioon
                    }
                </select>
            </div>
          
        </div>
        
    )
}

export default InputBox