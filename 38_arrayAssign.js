console.log("********************************************************************************");
console.log("1) Log The First and Last Element");
let arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is "${arraySeasonalFruits}"`);
const firstFruit=arraySeasonalFruits[0];
console.log(`First ELement is : ${firstFruit}`);
const lastFruit=arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`Last Element is : ${lastFruit}`);
console.log("********************************************************************************");

console.log("2) Add Papaya before the element Banana");
let arraySeasonalFruitss=["Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruitss.unshift("Papaya");
console.log(`After adding Papaya the array is : ${arraySeasonalFruitss}`);
console.log("********************************************************************************");

console.log("3) Remove mango from Array");
let arraySeasonalFruitsss=["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
const removeMango=arraySeasonalFruitsss.splice(4,1);
console.log(`After Removing Mango the Array is : ${arraySeasonalFruitsss}`);
console.log("********************************************************************************");

console.log("4) Adding Pineapple at last position ");
let arraySeasonalFruitssss=["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruitssss.push("Pineapple");
console.log(`After adding Pineapple the array is: ${arraySeasonalFruitssss} `);
console.log("********************************************************************************");

console.log("5) Adding Dragon Fruit before Water Melon");
let arraySeasonalFruitsssss=["Papaya","Banana","Orange","Apple","Mango","Water Melon","Pineapple"];
console.log(`The Array is: ${arraySeasonalFruitsssss}`);
arraySeasonalFruitsssss.splice(5,0,"Dragon Fruit")
console.log(`After Adding Dragon Fruit the array is : ${arraySeasonalFruitsssss} `);
console.log("********************************************************************************");

console.log(`6) Replace an element 'Orange' with 'Kiwi'`);
let arraySeasonalFruitssssss=["Papaya","Banana","Orange","Apple","Mango","Dragon Fruit","Water Melon","Pineapple"];
console.log(`The Array is: ${arraySeasonalFruitssssss}`);
arraySeasonalFruitssssss.splice(2,1,"Kiwi");
console.log(`After Replacing an element 'orange' with 'Kiwi' the array is : ${arraySeasonalFruitssssss}`);
console.log("********************************************************************************");

console.log(`7)Log The element starting from index 1 to 4`);
let arraySeasonalFruitsssssss=["Papaya","Banana","Kiwi","Apple","Mango","Dragon Fruit","Water Melon","Pineapple"];
console.log(`The Array is: ${arraySeasonalFruitsssssss}`);
const remove=arraySeasonalFruitsssssss.slice(1,5);
console.log(`The element starting from index 1 to 4 is: ${remove} `);
console.log("********************************************************************************");

console.log(`8) Log last 3 element`);
let arraySeasonalFruitssssssss=["Papaya","Banana","Kiwi","Apple","Mango","Dragon Fruit","Water Melon","Pineapple"];
console.log(`The Array is: ${arraySeasonalFruitssssssss}`);
const lastThree=arraySeasonalFruitssssssss.slice(5);
console.log(`The last 3 element is : ${lastThree}`);
console.log("********************************************************************************");

