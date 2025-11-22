{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo: string;
        address: string
    }

    const student1: Student = {
        name: "Nayan",
        age: 25,
        gender: "Male",
        contactNo: "01789825572",
        address: "Dhaka"
    }

    const student2:  Student = {
        name: "Robi",
        age: 25,
        gender: "Male",
        contactNo: "01846927974",
        address: "Barishal"
    }

    type UserName = string;
    type IsAdmin = boolean;
    type Add = (num1: number, num2: number) => number;


    const userName : UserName = 'Tonny';
    const IsAdmin : IsAdmin = true;
    const add : Add = (num1, num2) => num1 + num2;

}

