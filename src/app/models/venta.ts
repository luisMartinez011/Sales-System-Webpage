import { Concepto } from "./concepto";

export interface Venta {
  fecha: string,
  total: number,
  conceptos: Concepto[]
}
