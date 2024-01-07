const User = {
  _email: "pradeep@gmail.com",
  _password: "pradeep123",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this.email = value;
  },
};

const tea = Object.create(User);

console.log(tea.email);
