interface Teacher {
    readonly firstName: string,
    readonly fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);


function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));


interface classInterface {
    firstName: string,
    lastName: string,
    workOnHomework() : string,
    displayName() : string
}

  interface StudentClassConstructor {
    new (firstName: string, lastName: string): classInterface;
}
  
class StudentClass implements classInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());
