/* Task 1 */
function findTypes(...arg) {
    let arrType = [];
    for (let i = 0; i < arg.length; i++) {
        arrType[i] = typeof arg[i];
    }
    return arrType;
}
findTypes(null, 5, "hello");

/* Task 2 */
function executeforEach(arr, fun) {
    let arrEach = [];
    for (let i =0; i < arr.length; i++) {
        arrEach.push(fun(arr[i]));
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el)
});

/* Task 3 */
function mapArray(arr, fun) {
    let arrMap = [];
    executeforEach(arr, function(arg) {
        arrMap.push(fun(arg));
    });
    return arrMap;
}
mapArray([2, 5, 8], function(el) {
    return el + 3
});

/* Task 4 */
function filterArray(arr, fun) {
    let arrFilt = [];
    executeforEach(arr, function(arg) {
        if (fun(arg)) {
            arrFilt.push(arg);
        }
    });
    return arrFilt;
}
filterArray([2, 5, 8], function(el) {
    return el > 3
});

//Input data for task 5 and 6.
const data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

/* Task 5 */
function getAmountOfAdultPeople(data) {
    const adultPeople = filterArray(data, function(people) {
        return people.age > 18;
    });
    return adultPeople.length;
}
getAmountOfAdultPeople(data);

/* Task 6 */
function getGreenAdultBananaLovers(data) {
    const getPeople = filterArray(data, function (people) {
        return people.age > 18 &&
               people.favoriteFruit === "banana" &&
               people.eyeColor === "green";
    });
    return mapArray(getPeople, function (peopleName) {
        return peopleName.name;
    })
}
getGreenAdultBananaLovers(data);

/* Task 7 */
function keys(obj) {
    let arrKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrKeys.push(key);
        }
    }
    return arrKeys;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

/* Task 8 */
function values(obj) {
    let arrValues = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrValues.push(obj[key]);
        }
    }
    return arrValues;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

/* Task 9 */
function showFormattedDate(date) {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return "Date: " + day + " of " + monthNames[monthIndex] + ", " + year;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

/* Task 10 */
function isEvenYear(date) {
    let year = date.getFullYear();
    return year % 2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'));

/* Task 11 */
function isEvenMonth(date) {
    let month = date.getMonth();
    return Math.abs(month % 2) === 1;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));
