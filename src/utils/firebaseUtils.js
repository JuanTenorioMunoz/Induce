import { db } from '../services/firebase';

export const createUser = async (userId, data) => {
  try {
    const userRef = doc(db, "users", userId);

    await setDoc(userRef, {
      accountPlan: data.accountPlan,
      accountType: data.accountType,
      background: {
        certificates: data.background?.certificates || [],
        education: data.background?.education || [],
        jobExperience: data.background?.jobExperience || [],
      },
      city: data.city,
      email: data.email,
      name: data.name,
      phoneNumber: data.phoneNumber,
      surname: data.surname,
    });

    console.log("user created");
  } catch (error) {
    console.error("error with user creation", error);
  }
};