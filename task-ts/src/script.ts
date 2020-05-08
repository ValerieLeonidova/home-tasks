import {Address, Profession, User, Dog, GenericFunction} from "./interfaces";


const getUser: Promise<any> = Promise.resolve({
    id: 1,
    address: {
        street: 'Glushko',
        building: 26,
        apartment: 3,
    },
    profession: {
        name: 'Programmer',
        salary: 1000,
        position: {
            name: 'Java',
        },
    },
    name: 'Vasya',
});

const tellTheNameOfUser = (user: User) => {
    console.log(user.name);
};

const concatAddress = (address: Address) => `${address.street}, b. ${address.building}, apt ${address.apartment}`;

const whatProfession = (profession: Profession) => {
    console.log(profession.name, profession.position?.name);
};
getUser.then(tellTheNameOfUser);
getUser
    .then((user) => concatAddress(user.address))
    .then(console.log);

getUser.then((user) => whatProfession(user.profession));

const fnc: GenericFunction<string> = (a) => a;

class University<T> {
    // students: User[] = [];

    constructor(public students: T[]) {
    }

    addUser(student: T) {
        this.students.push(student);
    }
}

const universityOfUsers = new University<User>([]);

const universityOfDogs = new University<Dog>([]);

getUser.then((user) => universityOfUsers.addUser(user))
    .then(() => console.log(universityOfUsers));


// import {Buttons, MyOwnTypeOfSumFunc, SpecialString} from "./interfaces";
//
// const sum: MyOwnTypeOfSumFunc = (a, b) => a + b;
// console.log(sum(1,2));
// const consoleSpecialString = (string: SpecialString) => {
//     console.log(string);
// };
// const btnClicked = Buttons.DOWN;
// const tellWhatBtnHasBeenClicked = (btn:Buttons) => {
//     switch (btn) {
//         case Buttons.DOWN: {
//             console.log('Clicked Down');
//             break;
//         }
//         case Buttons.UP: {
//             console.log('Clicked Up');
//             break;
//         }
//     }
// };
// tellWhatBtnHasBeenClicked(btnClicked);
//