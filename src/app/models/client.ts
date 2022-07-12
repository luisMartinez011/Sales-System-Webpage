import { Venta } from "./venta";

export interface Client {
  id?: number,
  name: string,
  venta?: Venta[]
}
