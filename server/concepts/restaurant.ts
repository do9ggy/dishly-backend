import DocCollection, { BaseDoc } from "../framework/doc";
import { DishDoc } from "./dish";
import { LocationDoc } from "./location";

export interface RestaurantDoc extends BaseDoc {
  dish: DishDoc;
  location: LocationDoc;
}

export default class RestaurantConcept {
  public readonly restaurants = new DocCollection<RestaurantDoc>("restaurants");
}
