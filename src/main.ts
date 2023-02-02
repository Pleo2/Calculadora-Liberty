import { calculator } from './calculator';
import { $form, $price, $pounds, $shipping  } from './nodes';
import { ProductFeactures } from './product.model';
import { createResponseHTML } from './utils';

$form?.addEventListener('submit', event => {
  event.preventDefault();
  const productData = (data: ProductFeactures) => {
    return data
  }

  if($form !== null){
    const product = productData({
      priceProduct: parseInt($price?.value),
      shippingPrice: parseInt($shipping?.value),
      pounds: parseInt($pounds?.value)
    })

    const response:string = calculator({
      priceProduct: product.priceProduct,
      pounds: product.pounds,
      shippingPrice: product?.shippingPrice
    })

    createResponseHTML(response);



  }
})