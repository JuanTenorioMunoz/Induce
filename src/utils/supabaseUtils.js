import { supabase } from "../services/supabase";

export const getUserProfile = async () => {
  try {
    const storedUser = sessionStorage.getItem("user");
    if (!storedUser) return null;

    const parsedUser = JSON.parse(storedUser);

    const { data: profile, error } = await supabase
      .from("users")
      .select("*")
      .eq("auth_id", parsedUser.id)
      .maybeSingle();

    if (error) throw error;

    return profile || parsedUser;
  } catch (err) {
    console.error("Error fetching user profile:", err);
    return null;
  }
};

export const signUpUser = async (email, password) => {
  const e = (email || "").trim();
  const p = (password || "").trim();
  if (!e || !p) throw new Error("Correo y contraseña son obligatorios");
  const { data, error } = await supabase.auth.signUp({ email: e, password: p });
  if (error) {
    const msg = String(error.message || "Error al registrarse");
    throw new Error(msg);
  }

  if (data.session) localStorage.setItem("session", JSON.stringify(data.session));
  if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

  return data;
};

export const loginUser = async (email, password) => {
  const e = (email || "").trim();
  const p = (password || "").trim();
  if (!e || !p) throw new Error("Correo y contraseña son obligatorios");
  const { data, error } = await supabase.auth.signInWithPassword({ email: e, password: p });
  if (error) {
    const msg = String(error.message || "Error al iniciar sesión");
    throw new Error(msg);
  }

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

export const requestPasswordReset = async (email) => {
  if (!email) throw new Error("Correo requerido");
  const redirectTo = typeof window !== "undefined" ? `${window.location.origin}/sign_in` : undefined;
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
  if (error) throw error;
  return data;
};

export const updateCurrentUserProfile = async (updates = {}) => {
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  if (sessionError) throw sessionError;
  const uid = sessionData?.session?.user?.id;
  if (!uid) throw new Error("Sin sesión");
  const { data, error } = await supabase
    .from("users")
    .update(updates)
    .eq("auth_id", uid)
    .select("*")
    .maybeSingle();
  if (error) throw error;
  if (data) return data;
  const payload = {
    auth_id: uid,
    email: sessionData.session.user.email,
    ...updates,
  };
  const inserted = await supabase
    .from("users")
    .insert(payload)
    .select("*")
    .maybeSingle();
  if (inserted.error) throw inserted.error;
  return inserted.data;
};

export const getUserFromSession = () => {
  try {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error getting user from sessionStorage:", error);
    return null;
  }
};