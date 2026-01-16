interface DirectorInterface {
  workFromHome(): string;
  getCoffeebreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeebreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'
  }

  getCoffeebreak(): string {
    return 'Getting a coffe break'
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot working from home'
  }

  getCoffeebreak(): string {
    return 'Cannot have a break'
  }

  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof(salary) === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
// la consigne ne demande pas faire en sorte qu'on lise la valeur d'une string...
// si on passe '500', ça doit créer un directeur ; bof/20

// Predicate function a cette syntaxe
// on peut vérifier si a méthode est un attribut de la classe Director
function isDirector(employee: any): employee is Director {
  return typeof employee === 'object' &&
  employee !== null &&
  'workDirectorTasks' in employee;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  }
  else {
    console.log(employee.workTeacherTasks());
  }
}