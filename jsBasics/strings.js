const name = 'Steve Roger';
console.log(typeof name); // string

const anotherName = new String('Thor');
console.log(typeof anotherName); // object

let sentence = "A something new sentence here!";

// 01. sentence.includes()
const doesInclude = sentence.includes('new');
console.log(doesInclude);

// accessing the Char at idx
console.log(sentence[5]);

// 02. sentence.startsWith();
const startsWithA = sentence.startsWith('A');

// 03. sentence.endsWith();
const endsWithS = sentence.endsWith('W');
console.log(endsWithS);

// 04. .replace()
const updatedSentence = sentence.replace('new', 'old');
console.log(updatedSentence);

// 05. .trim() => trim all the spaces beginning and end
const trimmedSentence = sentence.trim();

// 06. .split() => will split function on the basis of specified argument
const splittedSentence = sentence.split('e');
console.log(splittedSentence);

// 07 & 08. toLowerCase() & toUpperCase()
const loweredCase = sentence.toLowerCase();
console.log(loweredCase);
const upperCase = sentence.toUpperCase();
console.log(upperCase); 

// Jo bhi in-built methods pdne ho uske liye `https://developer.mozilla.org/` ye site visit krein