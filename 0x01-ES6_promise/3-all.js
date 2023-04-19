import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      /*
      console.log(data);
      const bodyz = data[0].body;
      const firstNamez = data[1].firstName;
      const lastNamez = data[1].lastName;
      console.log(`${bodyz} ${firstNamez} ${lastNamez}`);
      */
      // using es6 standards
      const { body } = data[0];
      const { firstName } = data[1];
      const { lastName } = data[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
export default handleProfileSignup;
