import './Converter.css';
import currencyStore from '../../stores/currencyStore';
import { observer } from 'mobx-react-lite';

const Converter = observer(() => {
  const { amountEUR, amountUSD, setAmountEUR, setAmountUSD, reset } = currencyStore;

  const handleEURChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setAmountEUR(newValue);
  };

  const handleUSDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setAmountUSD(newValue);
  };

  return (
    <div className="converter-wrapper">
      <form className="converter" onSubmit={(event) => event.preventDefault()}>
        <div className="converter__field">
          <label htmlFor="EUR">Euro</label>
          <input type="number" id="EUR" value={amountEUR ? amountEUR : ''} onChange={handleEURChange} name="EUR"/>
        </div>
        <div className="converter__buttons">
                  <div className="converter__rate">exchange rate: <span>1.07</span></div>
                  <button className='converter__reset' onClick={reset}>Reset</button>
        </div>
        <div className="converter__field">
          <label htmlFor="USD">US Dollars</label>
          <input type="number" id="USD" value={amountUSD ? amountUSD : ''} onChange={handleUSDChange} name="USD"/>
        </div>
      </form>
    </div>
  )
});

export default Converter;