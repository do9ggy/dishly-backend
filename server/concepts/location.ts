import { ObjectId } from "mongodb";

import DocCollection, { BaseDoc } from "../framework/doc";

export interface LocationDoc extends BaseDoc {
  post: ObjectId;
  address: string;
}

export default class LocationConcept {
  public readonly locations = new DocCollection<LocationDoc>("locations");
}
