namespace Subjects {
  // 1️⃣ On augmente l'interface Teacher
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // 2️⃣ Classe Java étendant Subject
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      // Vérification correcte de l'expérience
      if (!this.teacher || this.teacher.experienceTeachingJava === undefined) {
        return 'No available teacher';
      }

      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
