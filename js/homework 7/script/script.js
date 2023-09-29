function excludeBy(arr1, arr2, value) {
    let i = 0;
    var newarr = [];

    innerloop:
        for (i; i < arr1.length; i++) {
               outloop:
                for (let b = 0; b < arr2.length; b++) {
                   if (arr1[i][value] == arr2[b][value]) continue innerloop;
                   else if (b == arr2.length-1 && arr1[i][value] !== arr2[b][value]) {
                    newarr.push(arr1[i]);
                } else continue outloop;
            }
        }
    return newarr;
} ;
const users1 = [{
        name: "Ivan",
        surname: "Ivanov",
        gender: "male",
        age: 30
    },
    {
        name: "Anton",
        surname: "Petrov",
        gender: "male",
        age: 12
    },
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 34
    }
]
const users2 = [{
        name: "Ivan",
        surname: "Ivanov",
        gender: "male",
        age: 30
    },
    {
        name: "Elena",
        surname: "Petrov",
        gender: "female",
        age: 34
    }
]

console.log(excludeBy(users1, users2, "age"));
