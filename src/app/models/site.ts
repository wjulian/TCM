import { KeyValue } from "@angular/common";

export interface Site extends KeyValue<number, string> {
  address: string
}
