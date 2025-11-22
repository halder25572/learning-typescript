"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // ternary operator || optional chaning || nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });
    // nullish coalescing operator
    // null / undefined ---> decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 }, { result2 });
    const user = {
        name: "Nayan",
        address: {
            city: "dhk",
            road: "awesome",
            presentAddress: "Barishal"
        },
    };
    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
    console.log(permanentAddress);
}
//# sourceMappingURL=1.11.js.map