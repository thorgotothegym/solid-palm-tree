interface CustomPriceLiter {
  id: number;
  customLitres: number;
  total: number;
}

export type GasStationV2ConstructorArgs = {
  id: string;
  nameGasStation: string;
  totalPrice: string;
  gasolinePrice: CustomPriceLiter[];
  totalLiter: CustomPriceLiter[];
};

export default class GasStationV2 {
  readonly id: string;
  readonly nameGasStation: string;
  readonly totalPrice: string;
  readonly gasolinePrice: CustomPriceLiter[];
  readonly totalLiter: CustomPriceLiter[];

  constructor({
    id,
    nameGasStation,
    totalPrice,
    gasolinePrice,
    totalLiter,
  }: GasStationV2ConstructorArgs) {
    this.id = id;
    this.nameGasStation = nameGasStation;
    this.totalPrice = totalPrice;
    this.gasolinePrice = gasolinePrice;
    this.totalLiter = totalLiter;
  }
}
