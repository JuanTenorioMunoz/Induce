import { supabase } from "./supabase";

export const signUpUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  // store session and user if available
  if (data.session) localStorage.setItem("session", JSON.stringify(data.session));
  if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

  return data;
};

export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;

  // store session and user
  if (data.session) localStorage.setItem("session", JSON.stringify(data.session));
  if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

  return data;
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;

  // clear local storage
  localStorage.removeItem("session");
  localStorage.removeItem("user");
};

export const getCurrentSession = async () => {
  // try localStorage first
  const storedSession = localStorage.getItem("session");
  if (storedSession) return JSON.parse(storedSession);

  // fallback to Supabase
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  if (data?.session) {
    localStorage.setItem("session", JSON.stringify(data.session));
  }
  return data?.session || null;
};

export const getCurrentUser = async () => {
  // try localStorage first
  const storedUser = localStorage.getItem("user");
  if (storedUser) return JSON.parse(storedUser);

  // fallback to Supabase
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  if (data?.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }
  return data?.user || null;
};
