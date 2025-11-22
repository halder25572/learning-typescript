{
// union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
// type FullStackDeveloper = 'frontendDeveloper' | 'jexpertDeveloper';

// type Developer = FrontendDeveloper | FullStackDeveloper;


// const newDeveloper : FrontendDeveloper = 'juniorDeveloper';

// type User = {
//     name: string;
//     email?: string;
//     gender: "Male" | "Female";
//     bloodGroup: "O+" | "A+" | "AB+"
// }

// const user1 : User = {
//     name: "Nayan",
//     gender: "Male",
//     bloodGroup: "O+"
// }


// intersection type

type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer"
}

type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer"
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
const fullstackdeveloper : FullstackDeveloper = {
    skills:['HTML', 'CSS', 'JAVASCRIPT', 'ReactJS', 'NextJS'],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
}


}