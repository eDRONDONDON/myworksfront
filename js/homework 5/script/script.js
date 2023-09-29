function clone(obj) {
  let objClone = {};
   	if (typeof obj !== "object" || obj == null){
        return obj;
    }
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      objClone[prop] = clone(obj[prop]);
    }
  }
  return objClone;
}
const obj = {
	name : "Vasya",
	age: 20,
	smth:{
		city:"Kiyv"
		}
};
const objClone = clone(obj);
console.log(obj.smth === objClone.smth);