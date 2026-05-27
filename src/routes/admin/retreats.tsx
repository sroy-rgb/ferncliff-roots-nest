import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminLayout, Card, PageHeader, Button, Table, Pill, StatCard } from "@/components/admin/AdminLayout";
import { Plus, X } from "@phosphor-icons/react";
import { useContentStore, type Booking, type Inquiry } from "@/components/admin/contentStore";

export const Route = createFileRoute("/admin/retreats")({
  component: RetreatsAdmin,
  head: () => ({ meta: [{ title: "Retreats — Ferncliff CMS" }] }),
});

function RetreatsAdmin() {
  const { bookings, inquiries, addBooking, setBookingStatus, setInquiryStatus } = useContentStore();
  const [tab, setTab] = useState<"bookings" | "inquiries">("bookings");
  const [statusFilter, setStatusFilter] = useState<"all" | Booking["status"]>("all");
  const [showAdd, setShowAdd] = useState(false);

  const filteredBookings = useMemo(
    () => bookings.filter((b) => statusFilter === "all" || b.status === statusFilter),
    [bookings, statusFilter]
  );

  const counts = {
    confirmed: bookings.filter((b) => b.status === "Confirmed").length,
    pending: bookings.filter((b) => b.status === "Pending").length,
    inquiry: bookings.filter((b) => b.status === "Inquiry").length + inquiries.filter((i) => i.status === "new").length,
    total: bookings.length,
  };

  return (
    <AdminLayout title="Retreats & Bookings">
      <PageHeader title="Retreats & Bookings" action={<Button onClick={() => setShowAdd(true)}><Plus size={14} /> Add Booking</Button>} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard accent="teal" value={String(counts.total)} label="Total Bookings" />
        <StatCard accent="teal" value={String(counts.confirmed)} label="Confirmed" />
        <StatCard accent="gold" value={String(counts.pending)} label="Pending" />
        <StatCard accent="gold" value={String(counts.inquiry)} label="Open Inquiries" />
      </div>

      <div className="flex gap-1 mb-4 border-b border-[#E8E2D8]">
        {(["bookings", "inquiries"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-[13px] font-medium capitalize border-b-2 -mb-px ${tab === t ? "border-[#2B7A6F] text-[#2B7A6F]" : "border-transparent text-[#8a857c]"}`}
          >{t} {t === "inquiries" ? `(${inquiries.length})` : `(${bookings.length})`}</button>
        ))}
      </div>

      {tab === "bookings" && (
        <>
          <Card className="p-3 mb-4 flex flex-wrap items-center gap-3">
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)} className="h-9 px-2 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
              <option value="all">All statuses</option>
              <option>Confirmed</option><option>Pending</option><option>Inquiry</option><option>Cancelled</option>
            </select>
            <div className="text-[12px] text-[#8a857c] ml-auto">{filteredBookings.length} bookings</div>
          </Card>
          <Card>
            <Table
              headers={["Organization", "Contact", "Dates", "Facility", "Guests", "Status", "Actions"]}
              rows={filteredBookings.map((b) => [
                <span className="font-medium">{b.org}{b.fromInquiryId && <span className="ml-2 text-[10px] text-[#8a6a26] bg-[#C49A3C]/15 px-1.5 py-0.5 rounded">from inquiry</span>}</span>,
                <div><div>{b.contact}</div><div className="text-[11px] text-[#8a857c]">{b.email}</div></div>,
                b.dates,
                b.facility,
                b.guests,
                <Pill color={b.status === "Confirmed" ? "green" : b.status === "Pending" ? "gold" : b.status === "Inquiry" ? "yellow" : "red"}>{b.status}</Pill>,
                <select value={b.status} onChange={(e) => setBookingStatus(b.id, e.target.value as Booking["status"])} className="h-7 px-2 rounded border border-[#E8E2D8] bg-white text-[12px]">
                  <option>Confirmed</option><option>Pending</option><option>Inquiry</option><option>Cancelled</option>
                </select>,
              ])}
            />
          </Card>
        </>
      )}

      {tab === "inquiries" && (
        <Card>
          <Table
            headers={["Organization", "Contact", "Guests", "Dates", "Type", "Received", "Status", "Actions"]}
            rows={inquiries.map((i) => [
              <span className="font-medium">{i.org}</span>,
              <div><div>{i.contact}</div><div className="text-[11px] text-[#8a857c]">{i.email}</div></div>,
              i.guests,
              i.dates,
              i.type,
              i.received,
              <Pill color={i.status === "new" ? "yellow" : i.status === "in-progress" ? "gold" : "green"}>{i.status}</Pill>,
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    addBooking({ org: i.org, contact: i.contact, email: i.email, dates: i.dates, facility: "TBD", guests: i.guests, status: "Pending", fromInquiryId: i.id });
                    setInquiryStatus(i.id, "responded");
                    setTab("bookings");
                  }}
                  className="text-[#2B7A6F] hover:underline text-[12px]"
                >Convert →</button>
                <select value={i.status} onChange={(e) => setInquiryStatus(i.id, e.target.value as Inquiry["status"])} className="h-7 px-1 rounded border border-[#E8E2D8] bg-white text-[11px]">
                  <option value="new">New</option><option value="in-progress">In progress</option><option value="responded">Responded</option>
                </select>
              </div>,
            ])}
          />
        </Card>
      )}

      {showAdd && <AddBookingModal onClose={() => setShowAdd(false)} onAdd={(b) => { addBooking(b); setShowAdd(false); }} />}
    </AdminLayout>
  );
}

function AddBookingModal({ onClose, onAdd }: { onClose: () => void; onAdd: (b: Omit<Booking, "id" | "createdISO">) => void }) {
  const [org, setOrg] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [facility, setFacility] = useState("Brown Center");
  const [guests, setGuests] = useState(20);
  const [status, setStatus] = useState<Booking["status"]>("Pending");

  const submit = () => {
    if (!org || !contact || !dates) return;
    onAdd({ org, contact, email, dates, facility, guests, status });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#FAF8F5] rounded-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="h-12 px-5 border-b border-[#E8E2D8] flex items-center justify-between">
          <div className="text-[14px] font-medium">Add Booking</div>
          <button onClick={onClose}><X size={18} /></button>
        </div>
        <div className="p-5 space-y-3">
          <Field label="Organization"><input value={org} onChange={(e) => setOrg(e.target.value)} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" /></Field>
          <Field label="Contact name"><input value={contact} onChange={(e) => setContact(e.target.value)} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" /></Field>
          <Field label="Email"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" /></Field>
          <Field label="Dates"><input value={dates} onChange={(e) => setDates(e.target.value)} placeholder="Oct 18–20, 2026" className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Facility">
              <select value={facility} onChange={(e) => setFacility(e.target.value)} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
                <option>Brown Center</option><option>Camp McMillan</option><option>Retreat House</option><option>Belden Cabins</option>
              </select>
            </Field>
            <Field label="Guests"><input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]" /></Field>
          </div>
          <Field label="Status">
            <select value={status} onChange={(e) => setStatus(e.target.value as Booking["status"])} className="w-full h-10 px-3 rounded-md border border-[#E8E2D8] bg-white text-[13px]">
              <option>Confirmed</option><option>Pending</option><option>Inquiry</option>
            </select>
          </Field>
          <div className="flex gap-2 pt-2">
            <Button onClick={submit} className="flex-1 justify-center">Add Booking</Button>
            <Button variant="outline" onClick={onClose}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-wider text-[#8a857c] mb-1.5">{label}</div>
      {children}
    </label>
  );
}
