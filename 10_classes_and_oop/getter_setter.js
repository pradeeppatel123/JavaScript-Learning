class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return `${this._password}pradeep`;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
  set email(value) {
    this._email = value;
  }
}

const pradeep = new User("pradeep@gmail.com", "abc");
console.log(pradeep.password);
console.log(pradeep.email);
