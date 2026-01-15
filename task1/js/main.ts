interface Teacher {
  readonly firstName: string; // after assigning a value to firstName, it can't be change later 
  // even w/ another string
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string
  // syntaxe : (parametre1: type, parametre2:type...): type_du_retour
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};
// l'interface concerne d'abord une variable. 
// pour l'appliquer à une fonction on commencera donc par déclarer une variable du nom de la fonction voulue avec const

console.log(printTeacher('John', 'Doe'));

console.log(director1);

console.log(teacher3);
