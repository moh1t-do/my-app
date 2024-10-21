interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User): number {
    return user1.age + user2.age;
}

let John: User = {
    name: "John",
    age: 12,
}

let Sam: User = {
    name: 'Sam',
    age: 14
}

console.log(sumOfAge(John, Sam));