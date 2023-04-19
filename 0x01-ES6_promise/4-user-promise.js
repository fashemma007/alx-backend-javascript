function signUpUser(firstName, lastName) {
  return Promise.resolve({ // returns a resolved promise
    firstName,
    lastName,
  });
}

export default signUpUser;
