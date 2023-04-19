import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoAwait = await uploadPhoto();
    const userAwait = await createUser();
    return { photo: photoAwait, user: userAwait };
  } catch (error) {
    return { photo: null, user: null };
  }
}
