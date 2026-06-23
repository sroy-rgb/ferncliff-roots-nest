import { r as reactExports, T as jsxRuntimeExports } from "./server-DQxG6UPC.js";
import { a as useNavigate, c as useAdminAuth, L as Link } from "./router-CcwXCmxT.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function LoginPage() {
  const nav = useNavigate();
  const {
    login
  } = useAdminAuth();
  const [email, setEmail] = reactExports.useState("kimberly@ferncliff.org");
  const [pw, setPw] = reactExports.useState("");
  const submit = (e) => {
    e.preventDefault();
    login();
    nav({
      to: "/admin"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#F0F0F0] px-4", style: {
    fontFamily: "'DM Sans', system-ui, sans-serif"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#E5E5E5] rounded-2xl shadow-sm p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-12 h-12 rounded-xl bg-[#2B7A6F] flex items-center justify-center text-white text-lg font-bold mb-3", children: "F" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-[#1A1A1A]", children: "Ferncliff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-[#666]", children: "Content Management System" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-wider text-[#888]", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: email, onChange: (e) => setEmail(e.target.value), type: "email", className: "mt-1 w-full h-10 px-3 rounded-md border border-[#E5E5E5] text-[14px] focus:outline-none focus:border-[#2B7A6F]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] uppercase tracking-wider text-[#888]", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pw, onChange: (e) => setPw(e.target.value), type: "password", className: "mt-1 w-full h-10 px-3 rounded-md border border-[#E5E5E5] text-[14px] focus:outline-none focus:border-[#2B7A6F]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full h-10 mt-2 bg-[#2B7A6F] hover:bg-[#236158] text-white rounded-md text-[14px] font-medium", children: "Sign In" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-6 text-[11px] text-[#999]", children: [
      "Powered by XTS · ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#2B7A6F]", children: "Back to site" })
    ] })
  ] }) });
}
export {
  LoginPage as component
};
