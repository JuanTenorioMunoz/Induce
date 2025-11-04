import { supabase } from "../services/supabase";


export const signUpUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

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

  if (data.session) localStorage.setItem("session", JSON.stringify(data.session));
  if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

  return data;
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;

  localStorage.removeItem("session");
  localStorage.removeItem("user");
};

export const getCurrentSession = async () => {
  const storedSession = localStorage.getItem("session");
  if (storedSession) return JSON.parse(storedSession);

  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  if (data?.session) {
    localStorage.setItem("session", JSON.stringify(data.session));
  }
  return data?.session || null;
};

export const getCurrentUser = async () => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) return JSON.parse(storedUser);

  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  if (data?.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }
  return data?.user || null;
};

export const fetchAllFromTable = async (tableName) => {
  if (!tableName) throw new Error("Table name is required");

  const { data, error } = await supabase.from(tableName).select("*");

  if (error) throw error;

  console.log(data)
  return data;
};
