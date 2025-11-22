"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // destructuring
    const user = {
        id: 416,
        name: {
            firstName: "Nayan",
            middleName: "Chandra",
            lastName: "Halder"
        },
        contactNo: "01789825572",
        address: "Dhaka, Bangladesh",
    };
    const { contactNo, name: { firstName } } = user;
    // array destructuring
    const myFriends = ['Bokul', 'Mitali', 'Tonni', 'Swarna'];
    const [bestFriend, ...rest] = myFriends;
}
//# sourceMappingURL=1.8.js.map