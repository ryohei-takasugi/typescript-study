import { Item } from "./Item";

class VendingMachine {

  private max_item_number: number = 10;
  private items: Array<Item> = [];

  constructor() {
    this.items.push(new Item(1, "コーラ", 100, new Date(2018, 8, 18)));
  }

  show(num: number):String {
    const itemIndex: Number = this.items.findIndex(item => item.number() == num);
    const item: Item = this.items[itemIndex.valueOf()];
    var item_infomation = "";
    if (item) {
      item_infomation = item.number().toString() + ")";
      item_infomation += " 商品名: " + item.name();
      item_infomation += " 価格: " + item.taxIncludedPrice().toString() + "円(税込み)";
      const date: Date = item.expirationDate();
      item_infomation += " 販売期限: " + date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
    }
    return item_infomation;
  }

  select() {

  }

}