export type GasStationConstructorArgs = {
  id: string;
  nameGasStation: string;
  pricePer1Liter: number;
  pricePer3Liter: number;
  pricePer5Liter: number;
  pricePer15Liter: number;
  gasoline1LPrice: number;
  gasoline3LPrice: number;
  gasoline5LPrice: number;
  gasoline15LPrice: number;
  total1Liter: number;
  total3Liter: number;
  total5Liter: number;
  total15Liter: number;
  totalLiter: number;
  totalPrice: number;
};

export default class GasStation {
  readonly id: string;
  readonly nameGasStation: string;
  readonly pricePer1Liter: number;
  readonly pricePer3Liter: number;
  readonly pricePer5Liter: number;
  readonly pricePer15Liter: number;
  readonly gasoline1LPrice: number;
  readonly gasoline3LPrice: number;
  readonly gasoline5LPrice: number;
  readonly gasoline15LPrice: number;
  readonly total1Liter: number;
  readonly total3Liter: number;
  readonly total5Liter: number;
  readonly total15Liter: number;
  readonly totalLiter: number;
  readonly totalPrice: number;

  constructor({
    id,
    nameGasStation,
    pricePer1Liter,
    pricePer3Liter,
    pricePer5Liter,
    pricePer15Liter,
    gasoline1LPrice,
    gasoline3LPrice,
    gasoline5LPrice,
    gasoline15LPrice,
    total1Liter,
    total3Liter,
    total5Liter,
    total15Liter,
    totalLiter,
    totalPrice,
  }: GasStationConstructorArgs) {
    this.id = id;
    this.nameGasStation = nameGasStation;
    this.pricePer1Liter = pricePer1Liter;
    this.pricePer3Liter = pricePer3Liter;
    this.pricePer5Liter = pricePer5Liter;
    this.pricePer15Liter = pricePer15Liter;
    this.gasoline1LPrice = gasoline1LPrice;
    this.gasoline3LPrice = gasoline3LPrice;
    this.gasoline5LPrice = gasoline5LPrice;
    this.gasoline15LPrice = gasoline15LPrice;
    this.total1Liter = total1Liter;
    this.total3Liter = total3Liter;
    this.total5Liter = total5Liter;
    this.total15Liter = total15Liter;
    this.totalPrice = totalPrice;
    this.totalLiter = totalLiter;
  }
}
