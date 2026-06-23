import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { A as AdminLayout, b as PageHeader, B as Button, S as StatCard, C as Card, T as Table, P as Pill } from "./AdminLayout-CKgi6IRm.js";
import { Plus, X } from "@phosphor-icons/react";
import { u as useContentStore } from "./router-DASrCSie.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
function RetreatsAdmin() {
  const {
    bookings,
    inquiries,
    addBooking,
    setBookingStatus,
    setInquiryStatus
  } = useContentStore();
  const [tab, setTab] = useState("bookings");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAdd, setShowAdd] = useState(false);
  const filteredBookings = useMemo(() => bookings.filter((b) => statusFilter === "all" || b.status === statusFilter), [bookings, statusFilter]);
  const counts = {
    confirmed: bookings.filter((b) => b.status === "Confirmed").length,
    pending: bookings.filter((b) => b.status === "Pending").length,
    inquiry: bookings.filter((b) => b.status === "Inquiry").length + inquiries.filter((i) => i.status === "new").length,
    total: bookings.length
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Retreats & Bookings", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Retreats & Bookings", action: /* @__PURE__ */ jsxs(Button, { onClick: () => setShowAdd(true), children: [
      /* @__PURE__ */ jsx(Plus, { size: 14 }),
      " Add Booking"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsx(StatCard, { accent: "teal", value: String(counts.total), label: "Total Bookings" }),
      /* @__PURE__ */ jsx(StatCard, { accent: "teal", value: String(counts.confirmed), label: "Confirmed" }),
      /* @__PURE__ */ jsx(StatCard, { accent: "gold", value: String(counts.pending), label: "Pending" }),
      /* @__PURE__ */ jsx(StatCard, { accent: "gold", value: String(counts.inquiry), label: "Open Inquiries" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4 border-b border-[#E8E2D8]", children: ["bookings", "inquiries"].map((t) => /* @__PURE__ */ jsxs("button", { onClick: () => setTab(t), className: `px-4 py-2 text-[13px] font-medium capitalize border-b-2 -mb-px ${tab === t ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#8a857c]"}`, children: [
      t,
      " ",
      t === "inquiries" ? `(${inquiries.length})` : `(${bookings.length})`
    ] }, t)) }),
    tab === "bookings" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-3 mb-4 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs("select", { value: statusFilter, onChange: (e) => setStatusFilter(e.target.value), className: "h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
          /* @__PURE__ */ jsx("option", { value: "all", children: "All statuses" }),
          /* @__PURE__ */ jsx("option", { children: "Confirmed" }),
          /* @__PURE__ */ jsx("option", { children: "Pending" }),
          /* @__PURE__ */ jsx("option", { children: "Inquiry" }),
          /* @__PURE__ */ jsx("option", { children: "Cancelled" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-[12px] text-[#8a857c] ml-auto", children: [
          filteredBookings.length,
          " bookings"
        ] })
      ] }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(Table, { headers: ["Organization", "Contact", "Dates", "Facility", "Guests", "Status", "Actions"], rows: filteredBookings.map((b) => [/* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
        b.org,
        b.fromInquiryId && /* @__PURE__ */ jsx("span", { className: "ml-2 text-[10px] text-[#8a6a26] bg-[#C49A3C]/15 px-1.5 py-0.5 rounded", children: "from inquiry" })
      ] }), /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { children: b.contact }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#8a857c]", children: b.email })
      ] }), b.dates, b.facility, b.guests, /* @__PURE__ */ jsx(Pill, { color: b.status === "Confirmed" ? "green" : b.status === "Pending" ? "gold" : b.status === "Inquiry" ? "yellow" : "red", children: b.status }), /* @__PURE__ */ jsxs("select", { value: b.status, onChange: (e) => setBookingStatus(b.id, e.target.value), className: "h-7 px-2 rounded border border-[#E8E2D8] bg-white text-[12px]", children: [
        /* @__PURE__ */ jsx("option", { children: "Confirmed" }),
        /* @__PURE__ */ jsx("option", { children: "Pending" }),
        /* @__PURE__ */ jsx("option", { children: "Inquiry" }),
        /* @__PURE__ */ jsx("option", { children: "Cancelled" })
      ] })]) }) })
    ] }),
    tab === "inquiries" && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(Table, { headers: ["Organization", "Contact", "Guests", "Dates", "Type", "Received", "Status", "Actions"], rows: inquiries.map((i) => [/* @__PURE__ */ jsx("span", { className: "font-medium", children: i.org }), /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { children: i.contact }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#8a857c]", children: i.email })
    ] }), i.guests, i.dates, i.type, i.received, /* @__PURE__ */ jsx(Pill, { color: i.status === "new" ? "yellow" : i.status === "in-progress" ? "gold" : "green", children: i.status }), /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        addBooking({
          org: i.org,
          contact: i.contact,
          email: i.email,
          dates: i.dates,
          facility: "TBD",
          guests: i.guests,
          status: "Pending",
          fromInquiryId: i.id
        });
        setInquiryStatus(i.id, "responded");
        setTab("bookings");
      }, className: "text-[#2B7A6F] hover:underline text-[12px]", children: "Convert →" }),
      /* @__PURE__ */ jsxs("select", { value: i.status, onChange: (e) => setInquiryStatus(i.id, e.target.value), className: "h-7 px-1 rounded border border-[#E8E2D8] bg-white text-[11px]", children: [
        /* @__PURE__ */ jsx("option", { value: "new", children: "New" }),
        /* @__PURE__ */ jsx("option", { value: "in-progress", children: "In progress" }),
        /* @__PURE__ */ jsx("option", { value: "responded", children: "Responded" })
      ] })
    ] })]) }) }),
    showAdd && /* @__PURE__ */ jsx(AddBookingModal, { onClose: () => setShowAdd(false), onAdd: (b) => {
      addBooking(b);
      setShowAdd(false);
    } })
  ] });
}
function AddBookingModal({
  onClose,
  onAdd
}) {
  const [org, setOrg] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [facility, setFacility] = useState("Brown Center");
  const [guests, setGuests] = useState(20);
  const [status, setStatus] = useState("Pending");
  const submit = () => {
    if (!org || !contact || !dates) return;
    onAdd({
      org,
      contact,
      email,
      dates,
      facility,
      guests,
      status
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4", onClick: onClose, children: /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F5] rounded-xl w-full max-w-md", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxs("div", { className: "h-12 px-5 border-b border-[#E8E2D8] flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[14px] font-medium", children: "Add Booking" }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, children: /* @__PURE__ */ jsx(X, { size: 18 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 space-y-3", children: [
      /* @__PURE__ */ jsx(Field, { label: "Organization", children: /* @__PURE__ */ jsx("input", { value: org, onChange: (e) => setOrg(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" }) }),
      /* @__PURE__ */ jsx(Field, { label: "Contact name", children: /* @__PURE__ */ jsx("input", { value: contact, onChange: (e) => setContact(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" }) }),
      /* @__PURE__ */ jsx(Field, { label: "Email", children: /* @__PURE__ */ jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" }) }),
      /* @__PURE__ */ jsx(Field, { label: "Dates", children: /* @__PURE__ */ jsx("input", { value: dates, onChange: (e) => setDates(e.target.value), placeholder: "Oct 18–20, 2026", className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsx(Field, { label: "Facility", children: /* @__PURE__ */ jsxs("select", { value: facility, onChange: (e) => setFacility(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
          /* @__PURE__ */ jsx("option", { children: "Brown Center" }),
          /* @__PURE__ */ jsx("option", { children: "Camp McMillan" }),
          /* @__PURE__ */ jsx("option", { children: "Retreat House" }),
          /* @__PURE__ */ jsx("option", { children: "Belden Cabins" })
        ] }) }),
        /* @__PURE__ */ jsx(Field, { label: "Guests", children: /* @__PURE__ */ jsx("input", { type: "number", value: guests, onChange: (e) => setGuests(Number(e.target.value)), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" }) })
      ] }),
      /* @__PURE__ */ jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]", children: [
        /* @__PURE__ */ jsx("option", { children: "Confirmed" }),
        /* @__PURE__ */ jsx("option", { children: "Pending" }),
        /* @__PURE__ */ jsx("option", { children: "Inquiry" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsx(Button, { onClick: submit, className: "flex-1 justify-center", children: "Add Booking" }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#8a857c] mb-1.5", children: label }),
    children
  ] });
}
export {
  RetreatsAdmin as component
};
