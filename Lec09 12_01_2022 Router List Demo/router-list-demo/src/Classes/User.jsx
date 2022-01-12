
export default class User {
  constructor(email, pass, name, grade) {
    this.email = email;
    this.pass = pass;
    this.name = name;
    this.grade = grade;
  }

  tos() {
    return `email=${this.email} , pass=${this.pass} , name=${this.name} , grade=${this.grade}`;
  }
}  