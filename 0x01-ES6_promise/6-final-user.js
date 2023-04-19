import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// export default function handleProfileSignup(firstName, lastName, fileName) {
//   return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
// }

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const photoUplaod = uploadPhoto(fileName);

  return Promise.allSettled([signup, photoUplaod])
    .then((data) => {
      const result = [];
      data.forEach((valz) => {
        if (valz.status === 'fulfilled') {
          result.push({ status: valz.status, value: valz.value });
        } else {
          result.push({
            status: valz.status,
            value: `Error: ${valz.reason.message}`,
          });
        }
      });
    return result;
  });
}