export  class  Product {
  count: number;
  result: [{
    codProducto: string;
    nombreProducto: string;
    codLinea: string;
    presentacion: string;
  }]

  constructor(values: Object = {}) {
   Object.assign(this, values);
  }
}
