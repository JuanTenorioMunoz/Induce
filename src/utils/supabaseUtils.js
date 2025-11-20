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

 

// Obsoleto: usa signUpUser en lugar de esta función

export const getUserProfile = async () => {
  const { data: sessionData } = await supabase.auth.getSession();
  const uid = sessionData?.session?.user?.id;
  if (!uid) return null;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("auth_id", uid)
    .maybeSingle();
  if (error) throw error;
  return data || null;
};

export const ensureProfileForCurrentUser = async (profile = {}) => {
  const { data: sessionData } = await supabase.auth.getSession();
  const uid = sessionData?.session?.user?.id;
  if (!uid) return null;
  const { data: existing } = await supabase
    .from("users")
    .select("id")
    .eq("auth_id", uid)
    .maybeSingle();
  if (existing) return existing;
  const payload = {
    auth_id: uid,
    email: sessionData.session.user.email,
    name: profile.name ?? null,
    surname: profile.surname ?? null,
    account_plan: profile.account_plan ?? "free",
  };
  const insertRes = await supabase
    .from("users")
    .insert(payload)
    .select("id")
    .maybeSingle();
  if (insertRes.error) {
    if (insertRes.error.code === "23505") {
      const { data } = await supabase
        .from("users")
        .select("id")
        .eq("auth_id", uid)
        .maybeSingle();
      return data || null;
    }
    throw insertRes.error;
  }
  return insertRes.data;
};
