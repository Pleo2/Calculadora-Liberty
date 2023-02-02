import { ProductFeactures } from "./product.model";

export const libertyFee = {
  fboInsurence: 0.05,
  priceFuel: 0.9,
  firstPound: 3.5,
  secundPound: 4.5,
  aduanaMagnament: 1.05,
};

export const calculator = (data: ProductFeactures) => {
  const productFbo = data.priceProduct * libertyFee.fboInsurence;
  const productFuelFee = data.pounds * libertyFee.priceFuel;

  if (data.pounds > 1) {
    const poundsProuductPrice = (libertyFee.secundPound * (data.pounds - 1));
    const finalPriceWitchoutShipping =
    productFbo +
    productFuelFee +
    poundsProuductPrice +
    data.priceProduct +
    libertyFee.firstPound +
    libertyFee.aduanaMagnament;

    if (data.shippingPrice !== undefined) {
      const priceWithShipping = finalPriceWitchoutShipping + data.shippingPrice;
      return `El precio del producto sin envio es de: ${Math.floor(priceWithShipping)} $`;
    }

    return `El precio del producto sin envio es de: ${Math.floor(finalPriceWitchoutShipping)} $`;

  } else {
    const productFbo = data.priceProduct * libertyFee.fboInsurence;
    const productFuelFee = libertyFee.priceFuel;
    const poundsProuductPrice = libertyFee.firstPound;

    const finalPriceWitchoutShipping =
      productFbo +
      productFuelFee +
      poundsProuductPrice +
      data.priceProduct +
      libertyFee.aduanaMagnament;

    if (data.shippingPrice !== undefined) {
      const priceWithShipping = finalPriceWitchoutShipping + data.shippingPrice;
      return `El precio del producto sin envio es de: ${Math.floor(priceWithShipping)} $`;
    }

    return `El precio del producto sin envio es de: ${Math.floor(finalPriceWitchoutShipping)} $`;
  }
};
