const $ = (id: string) => document.getElementById(id);

export const $form = $('form') as HTMLFormElement; 
export const $price = $('price') as HTMLInputElement;
export const $pounds = $('pounds') as HTMLInputElement;
export const $shipping = $('shipping') as HTMLInputElement;
export const $h2container = $('h2-container') as HTMLDivElement;

