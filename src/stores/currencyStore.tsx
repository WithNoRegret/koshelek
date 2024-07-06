import { makeAutoObservable } from "mobx";
import { convert } from "../helpers/convert";

class currencyStore {
  amountEUR: number = 0;
  amountUSD: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setAmountEUR = (newAmount: number) => {
    this.amountEUR = newAmount;
    this.amountUSD = convert(newAmount, 'EUR', 'USD');
  }

  setAmountUSD = (newAmount: number) => {
    this.amountUSD = newAmount;
    this.amountEUR = convert(newAmount, 'USD', 'EUR');
  }

  reset = () => {
    this.setAmountEUR(0);
  }
}

export default new currencyStore();