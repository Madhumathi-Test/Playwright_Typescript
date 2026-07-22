// Create array of tuples with product name, price and GST
const productsWithGST: [string, number, number][] = [
    ["Laptop", 20000, 18],
    ["Mobile", 1000, 12],
    ["Tablet", 15000, 5]
];

// create a function to calculate the price of the product with GST
function calculatePriceWithGST(product: string, price: number, gst: number) {
    return price + (price * gst / 100);
}

// Navigate through the array of tuples and calculate the price of each product with GST (Array Destructuring)
// for (const [product, price, gst] of productsWithGST) {
//     const priceWithGST = calculatePriceWithGST(product, price, gst);
//     // The product should be sorted in ascending order based on the price with GST
//     // productsWithGST.sort((a, b) => a[1] - b[1]);
//     // Display the product name, price and GST in a formatted string
//     console.log(`The price of ${product} is ${price} and with GST ${gst}% is: ${priceWithGST}`);
// }

//

// Navigate through the array of tuples and calculate the price of each product with GST using for loop
for (let i = 0; i < productsWithGST.length; i++) {
    const [product, price, gst] = productsWithGST[i];
    const priceWithGST = calculatePriceWithGST(product, price, gst);
    // Display the product name, price and GST in a formatted string
    // console.log(`The price of ${product} is ${price} and with GST ${gst}% is: ${priceWithGST}`);
    // sort the productsWithGST array in ascending order based on the price with GST
    productsWithGST.sort((a, b) => a[1] - b[1]);
    // Print the productsWithGST array in a formatted string
    console.log(`The price of ${product} is ${price} and with GST ${gst}% is: ${productsWithGST}`);
    // console.log(`The products sorted in ascending order based on the price with GST is: ${productsWithGST}`);

}

// // Navigate through the array of tuples and calculate the price of each product with GST using forEach
// productsWithGST.forEach(([product, price, gst]) => {
//     const priceWithGST = calculatePriceWithGST(product, price, gst);
//     console.log(`The price of ${product} with GST is: ${priceWithGST}`);
// });