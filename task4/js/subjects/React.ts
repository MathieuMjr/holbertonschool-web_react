namespace Subjects {
  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React'
    }

    getAvailableTeacher() {
      if (this.teacher.experienceTeachingReact !== 0 && typeof(this.teacher.experienceTeachingReact) !== 'undefined') {
        return `Available Teacher: ${this.teacher.firstName}`
      }
      return 'No available teacher'
    }
  }

  export interface Teacher {
    experienceTeachingReact?: number;
  }
}