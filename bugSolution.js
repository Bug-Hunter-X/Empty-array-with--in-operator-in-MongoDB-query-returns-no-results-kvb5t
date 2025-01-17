```javascript
// Solution using conditional logic
const myArray = []; // Or any array, empty or not
let query = {};
if (myArray.length > 0) {
  query = { field: { $in: myArray } };
} else {
  query = {}; // Or apply different logic based on needs
}
db.collection.find(query);

// Solution using $exists operator
db.collection.find({ field: { $exists: true } });
```