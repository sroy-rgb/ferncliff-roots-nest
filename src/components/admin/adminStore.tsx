import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type AdminAuth = {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const Ctx = createContext<AdminAuth | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    try {
      setLoggedIn(localStorage.getItem("ferncliff_admin") === "1");
    } catch {}
  }, []);
  const login = () => {
    try { localStorage.setItem("ferncliff_admin", "1"); } catch {}
    setLoggedIn(true);
  };
  const logout = () => {
    try { localStorage.removeItem("ferncliff_admin"); } catch {}
    setLoggedIn(false);
  };
  return <Ctx.Provider value={{ loggedIn, login, logout }}>{children}</Ctx.Provider>;
}

export function useAdminAuth() {
  const v = useContext(Ctx);
  if (!v) return { loggedIn: false, login: () => {}, logout: () => {} } as AdminAuth;
  return v;
}
