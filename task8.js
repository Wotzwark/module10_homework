let myMap = new Map();
myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(3, 'three');
for (let name of myMap.keys()) {
	console.log(`Ключ - ${name}`);
}
for (let values of myMap.values()) {
	console.log(`Значение - ${values}`);
}