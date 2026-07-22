// calculating the price of the product with GST

function calculatePriceWithGST(product: string, price: number, gst: number): number {
    return price + (price * gst / 100);
}

console.log(calculatePriceWithGST("Laptop", 20000, 18)); // valid