{
// spread operator
// rest operator
// destructuring


// spread operator
const bros1 : string[] = ["Nayan", "Robi", "Kobi"];
const bros2 : string[] = ["Kabir", "Raju", "Shakil"];
const result = bros1.push(...bros2);
console.log(result);

const mentors1 = {
    typescript: "Nayan",
    redux: "Rakib",
    dbms: "Sojol",
}


const mentors2 = {
    prisma: "Tuhin",
    next: "Tanmot",
    cloud: "Nasir",
}

const mentorList = {
    ...mentors1,
    ...mentors2
}
console.log(mentorList);

// rest operator
const greetFriends = (...friends: string[]) => {
    friends.forEach((friends: string) => console.log(`Hi ${friends}`));
}

const res = greetFriends("Abul", "Babul", "Lablu", "Manik");
console.log(res);




}