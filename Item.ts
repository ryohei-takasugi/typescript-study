
export class Item {

  private item_number: number;
  private item_name: String;
  private item_price: number;
  private item_expiration_date: Date;
  private tax: number = 1.05;

  constructor(num:number, name: String, price: number, expiration_date: Date) {
    this.item_number = num;
    this.item_name = name;
    this.item_price = price;
    this.item_expiration_date = expiration_date;
  }

  number(): number {
    return this.item_number;
  }

  name(): String {
    return this.item_name;
  }

  taxIncludedPrice(): number {
    return this.item_price * this.tax;
  }

  tax_rate(): number {
    return this.tax;
  }

  expirationDate(): Date {
    return this.item_expiration_date;
  }

}