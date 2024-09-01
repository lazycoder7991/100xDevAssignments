/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  /*
  let ans = new Array()

  for(let transaction of transactions){
    const temp = ans.find(x => x["category"] === transaction["category"])
    if(temp === undefined)
      ans.push(Object.assign({},{category: transaction["category"], totalSpent: transaction["price"]}))
    else
      temp["totalSpent"] += transaction["price"]
  }
  */

  //cleaner version of above code. Courtesy: Chat GPT
 let ans = []

 for({category, price} of transactions){
   const existingCategory = ans.find(x => x.category === category)

  if(existingCategory)
  existingCategory.totalSpent += price
  else
  ans.push({category, totalSpent: price})
 }

  return ans
}

module.exports = calculateTotalSpentByCategory;
