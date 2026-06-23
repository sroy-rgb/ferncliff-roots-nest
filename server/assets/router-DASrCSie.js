import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouterState, Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext, useCallback } from "react";
import { Gear, PencilSimple, ArrowLeft } from "@phosphor-icons/react";
const appCss = "/assets/styles-DHEB3hmX.css";
const Ctx = createContext(null);
function AdminAuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    try {
      setLoggedIn(localStorage.getItem("ferncliff_admin") === "1");
    } catch {
    }
  }, []);
  const login = () => {
    try {
      localStorage.setItem("ferncliff_admin", "1");
    } catch {
    }
    setLoggedIn(true);
  };
  const logout = () => {
    try {
      localStorage.removeItem("ferncliff_admin");
    } catch {
    }
    setLoggedIn(false);
  };
  return /* @__PURE__ */ jsx(Ctx.Provider, { value: { loggedIn, login, logout }, children });
}
function useAdminAuth() {
  const v = useContext(Ctx);
  if (!v) return { loggedIn: false, login: () => {
  }, logout: () => {
  } };
  return v;
}
function AdminToggle() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { loggedIn } = useAdminAuth();
  if (path.startsWith("/admin")) return null;
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: loggedIn ? "/admin" : "/admin/login",
      className: "fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[9999] inline-flex items-center gap-1.5 bg-[#2c2926] hover:bg-[#2B7A6F] text-white px-4 py-2 rounded-full text-[12px] font-medium transition-colors shadow-md",
      style: { fontFamily: "'DM Sans', system-ui, sans-serif" },
      children: [
        /* @__PURE__ */ jsx(Gear, { size: 14, weight: "regular" }),
        " Admin"
      ]
    }
  );
}
const initial = {
  homepage: {
    heroTagline: "Where faith, nature & community come together",
    heroSubtext: "Camp · Retreats · Nature School · Outreach",
    campaignRaised: 608e4,
    campaignGoal: 76e5
  },
  pages: [
    { id: "home", title: "Homepage", slug: "/", status: "Published", modified: "May 20, 2026" },
    { id: "camp", title: "Camp", slug: "/camp", status: "Published", modified: "May 18, 2026" },
    { id: "camp-overview", title: "Camp Overview", slug: "/camp", status: "Published", modified: "May 18, 2026", parent: "camp" },
    { id: "overnight", title: "Overnight Camp", slug: "/camp/overnight", status: "Published", modified: "May 15, 2026", parent: "camp" },
    { id: "day", title: "Day Camp", slug: "/camp/day", status: "Published", modified: "May 15, 2026", parent: "camp" },
    { id: "first", title: "First-Time Campers", slug: "/camp/first-time", status: "Published", modified: "May 22, 2026", parent: "camp" },
    { id: "dates", title: "2026 Dates", slug: "/camp/dates", status: "Published", modified: "May 19, 2026", parent: "camp" },
    { id: "retreats", title: "Retreats & Conferences", slug: "/retreats", status: "Published", modified: "May 12, 2026" },
    { id: "nature", title: "Nature School", slug: "/nature-school", status: "Published", modified: "May 10, 2026" },
    { id: "outreach", title: "Outreach", slug: "/outreach", status: "Published", modified: "May 8, 2026" },
    { id: "about", title: "About", slug: "/about", status: "Published", modified: "May 24, 2026" },
    { id: "giving", title: "Giving", slug: "/giving", status: "Published", modified: "May 20, 2026" },
    { id: "store", title: "Store", slug: "/store", status: "Draft", modified: "May 2, 2026" },
    { id: "contact", title: "Contact", slug: "/contact", status: "Draft", modified: "Apr 28, 2026" }
  ],
  blogPosts: [
    { id: 1, title: "Rev. Rebecca Spooner Barber and the Heart of Mission", category: "Support", author: "Kimberly Graves", status: "Published", date: "January 21, 2026", excerpt: "Rev. Rebecca Spooner Barber has spent her life shaped by camp ministry...", slug: "/stories/rebecca-spooner" },
    { id: 2, title: "What Stayed With Her: Emelia Lee", category: "Nature Pre School", author: "Kimberly Graves", status: "Published", date: "February 8, 2026", excerpt: "When Emelia's family began looking for a preschool...", slug: "/stories/emelia-lee" },
    { id: 3, title: "A Preschooler Reminds Us Anyone Can Make a Difference", category: "Giving", author: "Kimberly Graves", status: "Published", date: "March 15, 2026", excerpt: "Sometimes the smallest hands make the biggest impact...", slug: "/stories/anyone-can-make-a-difference" },
    { id: 4, title: "Summer 2026: What's New at Ferncliff", category: "Summer Camp", author: "Kimberly Graves", status: "Draft", date: "May 24, 2026", excerpt: "" }
  ],
  campSessions: [
    { id: 1, week: "Aspen", dates: "Jun 1–5", types: ["Day Camp"], capacity: 60, registered: 43, status: "open" },
    { id: 2, week: "Balsam", dates: "Jun 7–12", types: ["Day", "Overnight"], capacity: 120, registered: 107, status: "filling" },
    { id: 3, week: "Cedar", dates: "Jun 14–19", types: ["Day", "Overnight"], capacity: 120, registered: 78, status: "open" },
    { id: 4, week: "Dogwood", dates: "Jun 21–26", types: ["Day", "Overnight", "Discovery"], capacity: 140, registered: 132, status: "filling" },
    { id: 5, week: "Elm", dates: "Jun 28–Jul 3", types: ["Day", "Overnight"], capacity: 120, registered: 54, status: "open" },
    { id: 6, week: "Fern", dates: "Jul 5–10", types: ["Day", "Overnight", "Discovery"], capacity: 140, registered: 128, status: "filling" },
    { id: 7, week: "Gum", dates: "Jul 12–17", types: ["Day", "Overnight", "Discovery"], capacity: 140, registered: 81, status: "open" }
  ],
  inquiries: [
    { id: 1, org: "First Presbyterian Church, Little Rock", contact: "Sarah Mitchell", email: "sarah@fpclr.org", guests: 45, dates: "Oct 2026", type: "Church Retreat", status: "new", received: "May 22, 2026", message: "Full-weekend retreat for our adult congregation. Need lodging for 45 plus worship and breakout space." },
    { id: 2, org: "Conway Youth Group", contact: "Pastor Mike Davis", email: "mike@conwaychurch.org", guests: 28, dates: "Sep 2026", type: "Youth Retreat", status: "in-progress", received: "May 20, 2026", message: "Annual fall retreat — high school students. Outdoor activities and campfire programs." },
    { id: 3, org: "Arkansas Women's Leadership", contact: "Jennifer Cole", email: "jcole@awlc.org", guests: 65, dates: "Nov 2026", type: "Corporate", status: "new", received: "May 23, 2026", message: "Three-day leadership intensive. Need dining for all meals plus large meeting room." }
  ],
  donations: [
    { id: 1, date: "May 24", donor: "Anonymous", amount: 250, type: "One-time", campaign: "General" },
    { id: 2, date: "May 23", donor: "Johnson Family", amount: 50, type: "Monthly", campaign: "Friends of Ferncliff" },
    { id: 3, date: "May 22", donor: "First Presbyterian Conway", amount: 1e3, type: "One-time", campaign: "Transform Campaign" },
    { id: 4, date: "May 21", donor: "Rebecca S. Barber", amount: 100, type: "Monthly", campaign: "Friends of Ferncliff" },
    { id: 5, date: "May 20", donor: "Anonymous", amount: 25, type: "One-time", campaign: "General" }
  ],
  activity: [
    { id: 1, text: "New camp registration — Balsam Week, Pathfinders", dot: "#2B7A6F", time: "2 hours ago", ts: Date.now() - 72e5 },
    { id: 2, text: "Donation received — $100, Friends of Ferncliff", dot: "#C49A3C", time: "3 hours ago", ts: Date.now() - 108e5 },
    { id: 3, text: "Blog post published — Rev. Rebecca Spooner Barber", dot: "#2B7A6F", time: "Yesterday", ts: Date.now() - 864e5 },
    { id: 4, text: "Retreat inquiry — First Presbyterian, 45 guests", dot: "#2B7A6F", time: "Yesterday", ts: Date.now() - 864e5 },
    { id: 5, text: "Volunteer application — Mission Teams", dot: "#C49A3C", time: "2 days ago", ts: Date.now() - 1728e5 }
  ],
  registrations: [
    { id: 201, camperName: "Ella Thompson", parentName: "Marcus Thompson", email: "marcus.thompson@example.com", phone: "(501) 555-0142", session: "Balsam (Jun 7–12)", campType: "Overnight", age: 11, notes: "Peanut allergy", status: "confirmed", receivedISO: new Date(Date.now() - 864e5).toISOString(), received: "May 25, 9:14 AM" },
    { id: 202, camperName: "Noah Patel", parentName: "Priya Patel", email: "priya.patel@example.com", phone: "(479) 555-0188", session: "Cedar (Jun 14–19)", campType: "Day Camp", age: 9, status: "new", receivedISO: new Date(Date.now() - 36e5).toISOString(), received: "May 26, 8:32 AM" },
    { id: 203, camperName: "Sophia Reyes", parentName: "Elena Reyes", email: "elena.r@example.com", phone: "(501) 555-0119", session: "Dogwood (Jun 21–26)", campType: "Discovery", age: 13, notes: "Returning camper, cabin with Mia R.", status: "waitlist", receivedISO: new Date(Date.now() - 1728e5).toISOString(), received: "May 24, 4:48 PM" },
    { id: 204, camperName: "Liam Johnson", parentName: "Rachel Johnson", email: "rachel.j@example.com", phone: "(870) 555-0167", session: "Fern (Jul 5–10)", campType: "Overnight", age: 12, status: "confirmed", receivedISO: new Date(Date.now() - 2592e5).toISOString(), received: "May 23, 11:02 AM" },
    { id: 205, camperName: "Ava Williams", parentName: "Derek Williams", email: "derek.w@example.com", phone: "(501) 555-0203", session: "Elm (Jun 28–Jul 3)", campType: "Day Camp", age: 8, notes: "First-time camper", status: "new", receivedISO: new Date(Date.now() - 72e5).toISOString(), received: "May 26, 7:11 AM" }
  ],
  volunteerRequests: [
    { id: 301, name: "Hannah Bradley", email: "hannah.b@example.com", interest: "Summer Camp Counselor", message: "College sophomore, available all of June and July. CPR certified.", status: "acknowledged", receivedISO: new Date(Date.now() - 864e5).toISOString(), received: "May 25, 2:30 PM" },
    { id: 302, name: "Tyler Brooks", email: "tbrooks@example.com", interest: "Mission Teams", message: "Group of 8 from Conway Methodist wants to help with summer prep work.", status: "in-progress", receivedISO: new Date(Date.now() - 1728e5).toISOString(), received: "May 24, 10:15 AM" },
    { id: 303, name: "Megan Carter", email: "megan.carter@example.com", interest: "Nature School Helper", message: "Retired teacher, available Tues/Thurs mornings.", status: "new", receivedISO: new Date(Date.now() - 54e5).toISOString(), received: "May 26, 7:48 AM" },
    { id: 304, name: "David Nguyen", email: "dnguyen@example.com", interest: "Retreat Hospitality", status: "resolved", receivedISO: new Date(Date.now() - 432e6).toISOString(), received: "May 21, 3:00 PM" }
  ],
  enrollments: [
    { id: 401, childName: "Mia Foster", childAge: 4, parentName: "Allison Foster", email: "allison.f@example.com", phone: "(501) 555-0144", program: "Nature Preschool", startDate: "Sep 2026", status: "confirmed", receivedISO: new Date(Date.now() - 1728e5).toISOString(), received: "May 24, 9:00 AM" },
    { id: 402, childName: "Owen Hayes", childAge: 5, parentName: "Jeremy Hayes", email: "j.hayes@example.com", phone: "(479) 555-0177", program: "Nature Preschool", startDate: "Sep 2026", notes: "Returning sibling", status: "new", receivedISO: new Date(Date.now() - 72e5).toISOString(), received: "May 26, 7:42 AM" },
    { id: 403, childName: "Lila Greene", childAge: 7, parentName: "Tara Greene", email: "tara.g@example.com", phone: "(501) 555-0193", program: "Wildcraft", startDate: "Aug 2026", status: "waitlist", receivedISO: new Date(Date.now() - 2592e5).toISOString(), received: "May 23, 1:18 PM" }
  ],
  generalInquiries: [
    { id: 501, name: "Patricia Long", email: "p.long@example.com", source: "Contact", subject: "Facility tour request", message: "Would love to tour the campus for an upcoming women's retreat.", status: "pending", receivedISO: new Date(Date.now() - 36e5).toISOString(), received: "May 26, 8:00 AM" },
    { id: 502, name: "Brian Walsh", email: "brian.w@example.com", source: "Give", subject: "Question about monthly giving", message: "Can I change my recurring gift amount?", status: "acknowledged", receivedISO: new Date(Date.now() - 864e5).toISOString(), received: "May 25, 11:20 AM" },
    { id: 503, name: "Sara Kim", email: "sara.k@example.com", source: "Volunteer", subject: "Group volunteer slot", message: "Our youth group has 12 people available July 15.", status: "pending", receivedISO: new Date(Date.now() - 18e6).toISOString(), received: "May 26, 3:00 AM" }
  ],
  bookings: [
    { id: 601, org: "First Presbyterian, LR", contact: "Sarah Mitchell", email: "sarah@fpclr.org", dates: "Oct 18–20, 2026", facility: "Camp McMillan", guests: 45, status: "Confirmed", createdISO: new Date(Date.now() - 5 * 864e5).toISOString() },
    { id: 602, org: "Conway Youth", contact: "Pastor Mike Davis", email: "mike@conwaychurch.org", dates: "Sep 12–14, 2026", facility: "Brown Center", guests: 28, status: "Pending", createdISO: new Date(Date.now() - 3 * 864e5).toISOString() },
    { id: 603, org: "Pulaski Heights UMC", contact: "Anne Reed", email: "areed@phumc.org", dates: "Jan 9–11, 2027", facility: "Camp McMillan", guests: 35, status: "Confirmed", createdISO: new Date(Date.now() - 864e5).toISOString() }
  ]
};
const ContentCtx = createContext(null);
let nextInquiryId = 100;
let nextActivityId = 1e3;
function ContentStoreProvider({ children }) {
  const [state, setState] = useState(initial);
  const pushActivity = useCallback((text, dot = "#2B7A6F") => {
    setState((s) => ({
      ...s,
      activity: [
        { id: ++nextActivityId, text, dot, time: "Just now", ts: Date.now() },
        ...s.activity
      ]
    }));
  }, []);
  const updateHomepage = useCallback((patch) => {
    setState((s) => ({ ...s, homepage: { ...s.homepage, ...patch } }));
  }, []);
  const updatePage = useCallback((id, patch) => {
    setState((s) => {
      const next = s.pages.map((p) => p.id === id ? { ...p, ...patch, modified: "Just now" } : p);
      const updated = next.find((p) => p.id === id);
      if (updated) {
        setState((s2) => ({
          ...s2,
          activity: [
            { id: ++nextActivityId, text: `Page updated — ${updated.title}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() },
            ...s2.activity
          ]
        }));
      }
      return { ...s, pages: next };
    });
  }, []);
  const addPage = useCallback((p) => {
    setState((s) => {
      const id = `page-${Date.now()}`;
      const entry = { ...p, id, modified: "Just now" };
      return {
        ...s,
        pages: [...s.pages, entry],
        activity: [{ id: ++nextActivityId, text: `Page created — ${p.title}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity]
      };
    });
  }, []);
  const deletePage = useCallback((id) => {
    setState((s) => {
      const page = s.pages.find((p) => p.id === id);
      return {
        ...s,
        pages: s.pages.filter((p) => p.id !== id && p.parent !== id),
        activity: page ? [{ id: ++nextActivityId, text: `Page deleted — ${page.title}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity] : s.activity
      };
    });
  }, []);
  const setBlogStatus = useCallback((id, status) => {
    setState((s) => {
      const next = s.blogPosts.map((b) => b.id === id ? { ...b, status } : b);
      const post = next.find((b) => b.id === id);
      return {
        ...s,
        blogPosts: next,
        activity: post ? [{ id: ++nextActivityId, text: `Blog post ${status === "Published" ? "published" : "drafted"} — ${post.title}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity] : s.activity
      };
    });
  }, []);
  const addBlogPost = useCallback((b) => {
    setState((s) => {
      const now = /* @__PURE__ */ new Date();
      const date = now.toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" });
      const post = { ...b, id: ++nextInquiryId, date };
      return {
        ...s,
        blogPosts: [post, ...s.blogPosts],
        activity: [{ id: ++nextActivityId, text: `Blog post created — ${b.title}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity]
      };
    });
  }, []);
  const updateBlogPost = useCallback((id, patch) => {
    setState((s) => ({
      ...s,
      blogPosts: s.blogPosts.map((b) => b.id === id ? { ...b, ...patch } : b),
      activity: [{ id: ++nextActivityId, text: `Blog post updated — ${patch.title ?? s.blogPosts.find((b) => b.id === id)?.title ?? ""}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity]
    }));
  }, []);
  const deleteBlogPost = useCallback((id) => {
    setState((s) => {
      const post = s.blogPosts.find((b) => b.id === id);
      return {
        ...s,
        blogPosts: s.blogPosts.filter((b) => b.id !== id),
        activity: post ? [{ id: ++nextActivityId, text: `Blog post deleted — ${post.title}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity] : s.activity
      };
    });
  }, []);
  const addBooking = useCallback((b) => {
    setState((s) => {
      const booking = { ...b, id: ++nextInquiryId, createdISO: (/* @__PURE__ */ new Date()).toISOString() };
      return {
        ...s,
        bookings: [booking, ...s.bookings],
        activity: [{ id: ++nextActivityId, text: `Booking added — ${b.org} · ${b.dates}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity]
      };
    });
  }, []);
  const setBookingStatus = useCallback((id, status) => {
    setState((s) => ({
      ...s,
      bookings: s.bookings.map((b) => b.id === id ? { ...b, status } : b)
    }));
  }, []);
  const addInquiry = useCallback((i) => {
    setState((s) => {
      const inquiry = { ...i, id: ++nextInquiryId, status: "new", received: "Just now" };
      return {
        ...s,
        inquiries: [inquiry, ...s.inquiries],
        activity: [
          { id: ++nextActivityId, text: `Retreat inquiry — ${i.org}, ${i.guests} guests`, dot: "#2B7A6F", time: "Just now", ts: Date.now() },
          ...s.activity
        ]
      };
    });
  }, []);
  const setInquiryStatus = useCallback((id, status) => {
    setState((s) => {
      const next = s.inquiries.map((i) => i.id === id ? { ...i, status } : i);
      const inq = next.find((i) => i.id === id);
      return {
        ...s,
        inquiries: next,
        activity: inq ? [{ id: ++nextActivityId, text: `Inquiry ${status} — ${inq.org}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity] : s.activity
      };
    });
  }, []);
  const fmtTime = (d) => d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  const addRegistration = useCallback((r) => {
    setState((s) => {
      const now = /* @__PURE__ */ new Date();
      const reg = { ...r, id: ++nextInquiryId, status: "new", receivedISO: now.toISOString(), received: fmtTime(now) };
      return {
        ...s,
        registrations: [reg, ...s.registrations],
        activity: [
          { id: ++nextActivityId, text: `New camp registration — ${r.camperName} · ${r.session}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() },
          ...s.activity
        ]
      };
    });
  }, []);
  const setRegistrationStatus = useCallback((id, status) => {
    setState((s) => {
      const next = s.registrations.map((r) => r.id === id ? { ...r, status } : r);
      const reg = next.find((r) => r.id === id);
      return {
        ...s,
        registrations: next,
        activity: reg ? [{ id: ++nextActivityId, text: `Registration ${status} — ${reg.camperName}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity] : s.activity
      };
    });
  }, []);
  const addVolunteerRequest = useCallback((v) => {
    setState((s) => {
      const now = /* @__PURE__ */ new Date();
      const vol = { ...v, id: ++nextInquiryId, status: "new", receivedISO: now.toISOString(), received: fmtTime(now) };
      return {
        ...s,
        volunteerRequests: [vol, ...s.volunteerRequests],
        activity: [
          { id: ++nextActivityId, text: `Volunteer request — ${v.name} · ${v.interest}`, dot: "#C49A3C", time: "Just now", ts: Date.now() },
          ...s.activity
        ]
      };
    });
  }, []);
  const setVolunteerStatus = useCallback((id, status) => {
    setState((s) => {
      const next = s.volunteerRequests.map((v) => v.id === id ? { ...v, status } : v);
      const vol = next.find((v) => v.id === id);
      return {
        ...s,
        volunteerRequests: next,
        activity: vol ? [{ id: ++nextActivityId, text: `Volunteer ${status} — ${vol.name}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity] : s.activity
      };
    });
  }, []);
  const addEnrollment = useCallback((e) => {
    setState((s) => {
      const now = /* @__PURE__ */ new Date();
      const enr = { ...e, id: ++nextInquiryId, status: "new", receivedISO: now.toISOString(), received: fmtTime(now) };
      return {
        ...s,
        enrollments: [enr, ...s.enrollments],
        activity: [
          { id: ++nextActivityId, text: `New enrollment — ${e.childName} · ${e.program}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() },
          ...s.activity
        ]
      };
    });
  }, []);
  const setEnrollmentStatus = useCallback((id, status) => {
    setState((s) => {
      const next = s.enrollments.map((e) => e.id === id ? { ...e, status } : e);
      const enr = next.find((e) => e.id === id);
      return {
        ...s,
        enrollments: next,
        activity: enr ? [{ id: ++nextActivityId, text: `Enrollment ${status} — ${enr.childName}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity] : s.activity
      };
    });
  }, []);
  const addGeneralInquiry = useCallback((g) => {
    setState((s) => {
      const now = /* @__PURE__ */ new Date();
      const gi = { ...g, id: ++nextInquiryId, status: "pending", receivedISO: now.toISOString(), received: fmtTime(now) };
      return {
        ...s,
        generalInquiries: [gi, ...s.generalInquiries],
        activity: [
          { id: ++nextActivityId, text: `Inquiry — ${g.name} · ${g.source}`, dot: "#C49A3C", time: "Just now", ts: Date.now() },
          ...s.activity
        ]
      };
    });
  }, []);
  const setGeneralInquiryStatus = useCallback((id, status) => {
    setState((s) => ({
      ...s,
      generalInquiries: s.generalInquiries.map((g) => g.id === id ? { ...g, status } : g)
    }));
  }, []);
  const addDonation = useCallback((d) => {
    setState((s) => {
      const now = /* @__PURE__ */ new Date();
      const date = now.toLocaleString("en-US", { month: "short", day: "numeric" });
      const don = { ...d, id: ++nextInquiryId, date };
      return {
        ...s,
        donations: [don, ...s.donations],
        homepage: { ...s.homepage, campaignRaised: s.homepage.campaignRaised + d.amount },
        activity: [
          { id: ++nextActivityId, text: `Donation received — $${d.amount.toLocaleString()} · ${d.campaign}`, dot: "#C49A3C", time: "Just now", ts: Date.now() },
          ...s.activity
        ]
      };
    });
  }, []);
  return /* @__PURE__ */ jsx(ContentCtx.Provider, { value: {
    ...state,
    updateHomepage,
    updatePage,
    addPage,
    deletePage,
    setBlogStatus,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    addBooking,
    setBookingStatus,
    addInquiry,
    setInquiryStatus,
    addRegistration,
    setRegistrationStatus,
    addVolunteerRequest,
    setVolunteerStatus,
    addEnrollment,
    setEnrollmentStatus,
    addGeneralInquiry,
    setGeneralInquiryStatus,
    addDonation,
    pushActivity
  }, children });
}
function useContentStore() {
  const v = useContext(ContentCtx);
  if (!v) throw new Error("useContentStore must be used inside ContentStoreProvider");
  return v;
}
function AdminViewingBar() {
  const { loggedIn } = useAdminAuth();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { pages } = useContentStore();
  if (!loggedIn || path.startsWith("/admin")) return null;
  const match = pages.find((p) => p.slug === path);
  const editTarget = match ? match.slug === "/" || match.slug.startsWith("/camp") ? "/admin/pages" : match.slug.startsWith("/stories") ? "/admin/blog" : "/admin/pages" : "/admin/pages";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "sticky top-0 z-[60] h-9 flex items-center px-4 md:px-6 text-[12px]",
      style: { background: "#FFFDF9", borderLeft: "3px solid #C49A3C", borderBottom: "1px solid #E8E2D8", color: "#6b665d" },
      children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "You're viewing the live site. Content changes made in the admin panel are reflected here." }),
        /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Live preview · admin session" }),
        /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: editTarget, className: "inline-flex items-center gap-1 text-[#2B7A6F] hover:underline", children: [
            /* @__PURE__ */ jsx(PencilSimple, { size: 12 }),
            " Edit This Page"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/admin", className: "inline-flex items-center gap-1 text-[#2c2926] hover:text-[#2B7A6F]", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 12 }),
            " Back to Admin"
          ] })
        ] })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$C = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ferncliff Camp & Conference Center" },
      { name: "description", content: "Summer camp, retreats, nature school, and outreach — just outside Little Rock, Arkansas. 1,200 acres of community since 1937." },
      { name: "author", content: "Ferncliff" },
      { property: "og:title", content: "Ferncliff Camp & Conference Center" },
      { property: "og:description", content: "Summer camp, retreats, nature school, and outreach — just outside Little Rock, Arkansas. 1,200 acres of community since 1937." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ferncliff Camp & Conference Center" },
      { name: "twitter:description", content: "Summer camp, retreats, nature school, and outreach — just outside Little Rock, Arkansas. 1,200 acres of community since 1937." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cba4eb0a-0286-4b92-a920-6e938ec1a590/id-preview-4431c279--ac6b7774-b6cd-420a-b4aa-f0b3038e71b3.lovable.app-1779700608455.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cba4eb0a-0286-4b92-a920-6e938ec1a590/id-preview-4431c279--ac6b7774-b6cd-420a-b4aa-f0b3038e71b3.lovable.app-1779700608455.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Nunito:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$C.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(AdminAuthProvider, { children: /* @__PURE__ */ jsxs(ContentStoreProvider, { children: [
    /* @__PURE__ */ jsx(AdminViewingBar, {}),
    /* @__PURE__ */ jsx(AdminToggle, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] }) }) });
}
const $$splitComponentImporter$B = () => import("./retreats-BBPBqgop.js");
const Route$B = createFileRoute("/retreats")({
  head: () => ({
    meta: [{
      title: "Retreats & Conferences — Ferncliff"
    }, {
      name: "description",
      content: "Church retreats, corporate offsites, youth events, and family reunions on 1,200 acres outside Little Rock."
    }, {
      property: "og:title",
      content: "Retreats & Conferences — Ferncliff"
    }, {
      property: "og:description",
      content: "Church retreats, corporate offsites, youth events, and family reunions on 1,200 acres outside Little Rock."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./outreach-Lc0YtPZg.js");
const Route$A = createFileRoute("/outreach")({
  head: () => ({
    meta: [{
      title: "Outreach & Mission — Ferncliff"
    }, {
      name: "description",
      content: "Disaster relief, mission teams, food redistribution, and community service extending Ferncliff's mission far beyond camp season."
    }, {
      property: "og:title",
      content: "Outreach & Mission — Ferncliff"
    }, {
      property: "og:description",
      content: "Caring for others, close to home and beyond."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./nature-school-B_8bgmRw.js");
const Route$z = createFileRoute("/nature-school")({
  head: () => ({
    meta: [{
      title: "Nature School — Ferncliff"
    }, {
      name: "description",
      content: "Arkansas's first nature preschool, Wildcraft homeschool programs, and outdoor education on 1,200 acres."
    }, {
      property: "og:title",
      content: "Nature School — Ferncliff"
    }, {
      property: "og:description",
      content: "Where the classroom is the forest. Year-round nature education for ages 3 through adult."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./giving-DZMXawU5.js");
const Route$y = createFileRoute("/giving")({
  head: () => ({
    meta: [{
      title: "Give to Ferncliff"
    }, {
      name: "description",
      content: "Every gift grows something extraordinary. Support camp scholarships, environmental stewardship, and disaster relief."
    }, {
      property: "og:title",
      content: "Every gift grows something extraordinary — Ferncliff"
    }, {
      property: "og:description",
      content: "Ways to give, monthly Friends of Ferncliff, planned giving, and the Connect Inspire Transform campaign."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./about-BLpHC4il.js");
const Route$x = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Ferncliff Camp & Conference Center"
    }, {
      name: "description",
      content: "Since 1937, Ferncliff has welcomed people into a life of caring for Creation, others, and themselves. Learn about our mission, staff, and 1,200 acres."
    }, {
      property: "og:title",
      content: "About — Ferncliff"
    }, {
      property: "og:description",
      content: "As an expression of God's love — our mission, sustainability, staff, and history."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./index-kmKHxem6.js");
const Route$w = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./index-D34VEJUx.js");
const Route$v = createFileRoute("/stories/")({
  head: () => ({
    meta: [{
      title: "Stories of Impact — Ferncliff"
    }, {
      name: "description",
      content: "Real stories from the people whose lives have been shaped by Ferncliff."
    }, {
      property: "og:title",
      content: "Stories of Impact — Ferncliff"
    }, {
      property: "og:description",
      content: "Real stories from the people whose lives have been shaped by Ferncliff."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./index-B7tFHlVm.js");
const Route$u = createFileRoute("/camp/")({
  head: () => ({
    meta: [{
      title: "Summer Camp — Ferncliff"
    }, {
      name: "description",
      content: "Day and overnight summer camps for grades 1-12 on 1,200 acres outside Little Rock."
    }, {
      property: "og:title",
      content: "Summer Camp — Ferncliff"
    }, {
      property: "og:description",
      content: "Day and overnight summer camps for grades 1-12 on 1,200 acres outside Little Rock."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./index-BchS9-XK.js");
const Route$t = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$t, "component"),
  head: () => ({
    meta: [{
      title: "Dashboard — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$s = () => import("./rebecca-spooner-BjMUE-bT.js");
const Route$s = createFileRoute("/stories/rebecca-spooner")({
  head: () => ({
    meta: [{
      title: "Rev. Rebecca Spooner Barber and the Heart of Mission — Ferncliff"
    }, {
      name: "description",
      content: "A story of faith, loss, and new beginnings at Ferncliff."
    }, {
      property: "og:title",
      content: "Rev. Rebecca Spooner Barber and the Heart of Mission"
    }, {
      property: "og:description",
      content: "A story of faith, loss, and new beginnings at Ferncliff."
    }, {
      property: "og:image",
      content: "https://ferncliff.org/wp-content/uploads/2026/01/rebsea-13-scaled.jpg"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./emelia-lee-BMC1JOHV.js");
const Route$r = createFileRoute("/stories/emelia-lee")({
  head: () => ({
    meta: [{
      title: "What Stayed With Her: Emelia Lee — Ferncliff"
    }, {
      name: "description",
      content: "A family's discovery of Ferncliff's Nature Preschool and the lasting impact of forest-based learning."
    }, {
      property: "og:title",
      content: "What Stayed With Her: Emelia Lee"
    }, {
      property: "og:description",
      content: "A family's discovery of Ferncliff's Nature Preschool."
    }, {
      property: "og:image",
      content: "https://images.pexels.com/photos/7671083/pexels-photo-7671083.jpeg?auto=compress&cs=tinysrgb&w=1920"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./anyone-can-make-a-difference-BECR08-u.js");
const Route$q = createFileRoute("/stories/anyone-can-make-a-difference")({
  head: () => ({
    meta: [{
      title: "A Preschooler Reminds Us That Anyone Can Make a Difference — Ferncliff"
    }, {
      name: "description",
      content: "A small act of generosity sparked a giving moment across the Ferncliff community."
    }, {
      property: "og:title",
      content: "A Preschooler Reminds Us That Anyone Can Make a Difference"
    }, {
      property: "og:description",
      content: "A small act of generosity sparked a giving moment across the Ferncliff community."
    }, {
      property: "og:image",
      content: "https://images.pexels.com/photos/19510836/pexels-photo-19510836.jpeg?auto=compress&cs=tinysrgb&w=1920"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./specialty-C2lb1twg.js");
const Route$p = createFileRoute("/camp/specialty")({
  head: () => ({
    meta: [{
      title: "Specialty Camps — Ferncliff"
    }, {
      name: "description",
      content: "Theme-based camp experiences: Hydro Water Camp, Night Owl Camp, and more."
    }, {
      property: "og:title",
      content: "Specialty Camps — Ferncliff"
    }, {
      property: "og:description",
      content: "Theme-based camp experiences: Hydro Water Camp, Night Owl Camp, and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./register-CmMmKgpz.js");
const Route$o = createFileRoute("/camp/register")({
  head: () => ({
    meta: [{
      title: "Register for Camp — Ferncliff"
    }, {
      name: "description",
      content: "Secure inline camp registration."
    }, {
      property: "og:title",
      content: "Register for Camp — Ferncliff"
    }, {
      property: "og:description",
      content: "Secure inline camp registration."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./overnight-Bm-AJeat.js");
const Route$n = createFileRoute("/camp/overnight")({
  head: () => ({
    meta: [{
      title: "Overnight Camp — Ferncliff"
    }, {
      name: "description",
      content: "Multi-night overnight summer camps for grades 1-12 at Ferncliff."
    }, {
      property: "og:title",
      content: "Overnight Camp — Ferncliff"
    }, {
      property: "og:description",
      content: "Multi-night overnight summer camps for grades 1-12 at Ferncliff."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./gallery-02Tblz-y.js");
const Route$m = createFileRoute("/camp/gallery")({
  head: () => ({
    meta: [{
      title: "Camp Gallery — Ferncliff"
    }, {
      name: "description",
      content: "See Ferncliff through our campers' eyes."
    }, {
      property: "og:title",
      content: "Camp Gallery — Ferncliff"
    }, {
      property: "og:description",
      content: "See Ferncliff through our campers' eyes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./first-time-BMpGpPL0.js");
const Route$l = createFileRoute("/camp/first-time")({
  head: () => ({
    meta: [{
      title: "First-Time Campers — Ferncliff"
    }, {
      name: "description",
      content: "Everything first-time campers and parents need: packing list, FAQ, safety, virtual tour."
    }, {
      property: "og:title",
      content: "First-Time Campers — Ferncliff"
    }, {
      property: "og:description",
      content: "Everything first-time campers and parents need: packing list, FAQ, safety, virtual tour."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./family-BpEenfB4.js");
const Route$k = createFileRoute("/camp/family")({
  head: () => ({
    meta: [{
      title: "Family Camps & Retreats — Ferncliff"
    }, {
      name: "description",
      content: "Weekend retreats for the whole family with hotel-style lodging and all camp activities."
    }, {
      property: "og:title",
      content: "Family Camps & Retreats — Ferncliff"
    }, {
      property: "og:description",
      content: "Weekend retreats for the whole family with hotel-style lodging and all camp activities."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./discovery-C_8SXwWC.js");
const Route$j = createFileRoute("/camp/discovery")({
  head: () => ({
    meta: [{
      title: "Discovery Camps — Ferncliff"
    }, {
      name: "description",
      content: "Discovery camps for first-time overnight campers. Build confidence at your own pace."
    }, {
      property: "og:title",
      content: "Discovery Camps — Ferncliff"
    }, {
      property: "og:description",
      content: "Discovery camps for first-time overnight campers. Build confidence at your own pace."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./day-BxjSAFIU.js");
const Route$i = createFileRoute("/camp/day")({
  head: () => ({
    meta: [{
      title: "Day Camp — Ferncliff"
    }, {
      name: "description",
      content: "Day camp for grades 1-8 with drop-off and pick-up, plus optional overnight add-on."
    }, {
      property: "og:title",
      content: "Day Camp — Ferncliff"
    }, {
      property: "og:description",
      content: "Day camp for grades 1-8 with drop-off and pick-up, plus optional overnight add-on."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./dates-DE7n-p6g.js");
const Route$h = createFileRoute("/camp/dates")({
  head: () => ({
    meta: [{
      title: "2026 Camp Dates — Ferncliff"
    }, {
      name: "description",
      content: "Full 2026 summer camp schedule for Ferncliff — June 1 through August 7."
    }, {
      property: "og:title",
      content: "2026 Camp Dates — Ferncliff"
    }, {
      property: "og:description",
      content: "Full 2026 summer camp schedule for Ferncliff — June 1 through August 7."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./volunteers-D8q_TXa5.js");
const Route$g = createFileRoute("/admin/volunteers")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component"),
  head: () => ({
    meta: [{
      title: "Volunteer Requests — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$f = () => import("./users-Cb-h-ZRw.js");
const Route$f = createFileRoute("/admin/users")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component"),
  head: () => ({
    meta: [{
      title: "Users — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$e = () => import("./subscribers-1W7rC7Sv.js");
const Route$e = createFileRoute("/admin/subscribers")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component"),
  head: () => ({
    meta: [{
      title: "Subscribers — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$d = () => import("./settings-DTPTFzJe.js");
const Route$d = createFileRoute("/admin/settings")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component"),
  head: () => ({
    meta: [{
      title: "Settings — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$c = () => import("./seo-BOEaHrqx.js");
const Route$c = createFileRoute("/admin/seo")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component"),
  head: () => ({
    meta: [{
      title: "SEO & Analytics — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$b = () => import("./roadmap-BSBtj_AI.js");
const Route$b = createFileRoute("/admin/roadmap")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component"),
  head: () => ({
    meta: [{
      title: "Phase 2 Roadmap — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$a = () => import("./retreats-C_S6teu2.js");
const Route$a = createFileRoute("/admin/retreats")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component"),
  head: () => ({
    meta: [{
      title: "Retreats — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$9 = () => import("./registrations-CdH87-_A.js");
const Route$9 = createFileRoute("/admin/registrations")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  head: () => ({
    meta: [{
      title: "Registrations — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$8 = () => import("./pages-Dt6eKySU.js");
const Route$8 = createFileRoute("/admin/pages")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
  head: () => ({
    meta: [{
      title: "Pages — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$7 = () => import("./outreach-CFHQgd4n.js");
const Route$7 = createFileRoute("/admin/outreach")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "Outreach — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$6 = () => import("./nature-D5C66-Jh.js");
const Route$6 = createFileRoute("/admin/nature")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Nature School — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./media-CX77J5Oh.js");
const Route$5 = createFileRoute("/admin/media")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Media — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./login-BFVXoy8D.js");
const Route$4 = createFileRoute("/admin/login")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Sign In — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./inquiries-4nZB4xHv.js");
const Route$3 = createFileRoute("/admin/inquiries")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Inquiries — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./giving-BKcGyo57.js");
const Route$2 = createFileRoute("/admin/giving")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Giving — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./camp-CsZ5KpQS.js");
const Route$1 = createFileRoute("/admin/camp")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "Camp Sessions — Ferncliff CMS"
    }]
  })
});
const $$splitComponentImporter = () => import("./blog-7ldoGXzA.js");
const Route = createFileRoute("/admin/blog")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Blog — Ferncliff CMS"
    }]
  })
});
const RetreatsRoute = Route$B.update({
  id: "/retreats",
  path: "/retreats",
  getParentRoute: () => Route$C
});
const OutreachRoute = Route$A.update({
  id: "/outreach",
  path: "/outreach",
  getParentRoute: () => Route$C
});
const NatureSchoolRoute = Route$z.update({
  id: "/nature-school",
  path: "/nature-school",
  getParentRoute: () => Route$C
});
const GivingRoute = Route$y.update({
  id: "/giving",
  path: "/giving",
  getParentRoute: () => Route$C
});
const AboutRoute = Route$x.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$C
});
const IndexRoute = Route$w.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$C
});
const StoriesIndexRoute = Route$v.update({
  id: "/stories/",
  path: "/stories/",
  getParentRoute: () => Route$C
});
const CampIndexRoute = Route$u.update({
  id: "/camp/",
  path: "/camp/",
  getParentRoute: () => Route$C
});
const AdminIndexRoute = Route$t.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => Route$C
});
const StoriesRebeccaSpoonerRoute = Route$s.update({
  id: "/stories/rebecca-spooner",
  path: "/stories/rebecca-spooner",
  getParentRoute: () => Route$C
});
const StoriesEmeliaLeeRoute = Route$r.update({
  id: "/stories/emelia-lee",
  path: "/stories/emelia-lee",
  getParentRoute: () => Route$C
});
const StoriesAnyoneCanMakeADifferenceRoute = Route$q.update({
  id: "/stories/anyone-can-make-a-difference",
  path: "/stories/anyone-can-make-a-difference",
  getParentRoute: () => Route$C
});
const CampSpecialtyRoute = Route$p.update({
  id: "/camp/specialty",
  path: "/camp/specialty",
  getParentRoute: () => Route$C
});
const CampRegisterRoute = Route$o.update({
  id: "/camp/register",
  path: "/camp/register",
  getParentRoute: () => Route$C
});
const CampOvernightRoute = Route$n.update({
  id: "/camp/overnight",
  path: "/camp/overnight",
  getParentRoute: () => Route$C
});
const CampGalleryRoute = Route$m.update({
  id: "/camp/gallery",
  path: "/camp/gallery",
  getParentRoute: () => Route$C
});
const CampFirstTimeRoute = Route$l.update({
  id: "/camp/first-time",
  path: "/camp/first-time",
  getParentRoute: () => Route$C
});
const CampFamilyRoute = Route$k.update({
  id: "/camp/family",
  path: "/camp/family",
  getParentRoute: () => Route$C
});
const CampDiscoveryRoute = Route$j.update({
  id: "/camp/discovery",
  path: "/camp/discovery",
  getParentRoute: () => Route$C
});
const CampDayRoute = Route$i.update({
  id: "/camp/day",
  path: "/camp/day",
  getParentRoute: () => Route$C
});
const CampDatesRoute = Route$h.update({
  id: "/camp/dates",
  path: "/camp/dates",
  getParentRoute: () => Route$C
});
const AdminVolunteersRoute = Route$g.update({
  id: "/admin/volunteers",
  path: "/admin/volunteers",
  getParentRoute: () => Route$C
});
const AdminUsersRoute = Route$f.update({
  id: "/admin/users",
  path: "/admin/users",
  getParentRoute: () => Route$C
});
const AdminSubscribersRoute = Route$e.update({
  id: "/admin/subscribers",
  path: "/admin/subscribers",
  getParentRoute: () => Route$C
});
const AdminSettingsRoute = Route$d.update({
  id: "/admin/settings",
  path: "/admin/settings",
  getParentRoute: () => Route$C
});
const AdminSeoRoute = Route$c.update({
  id: "/admin/seo",
  path: "/admin/seo",
  getParentRoute: () => Route$C
});
const AdminRoadmapRoute = Route$b.update({
  id: "/admin/roadmap",
  path: "/admin/roadmap",
  getParentRoute: () => Route$C
});
const AdminRetreatsRoute = Route$a.update({
  id: "/admin/retreats",
  path: "/admin/retreats",
  getParentRoute: () => Route$C
});
const AdminRegistrationsRoute = Route$9.update({
  id: "/admin/registrations",
  path: "/admin/registrations",
  getParentRoute: () => Route$C
});
const AdminPagesRoute = Route$8.update({
  id: "/admin/pages",
  path: "/admin/pages",
  getParentRoute: () => Route$C
});
const AdminOutreachRoute = Route$7.update({
  id: "/admin/outreach",
  path: "/admin/outreach",
  getParentRoute: () => Route$C
});
const AdminNatureRoute = Route$6.update({
  id: "/admin/nature",
  path: "/admin/nature",
  getParentRoute: () => Route$C
});
const AdminMediaRoute = Route$5.update({
  id: "/admin/media",
  path: "/admin/media",
  getParentRoute: () => Route$C
});
const AdminLoginRoute = Route$4.update({
  id: "/admin/login",
  path: "/admin/login",
  getParentRoute: () => Route$C
});
const AdminInquiriesRoute = Route$3.update({
  id: "/admin/inquiries",
  path: "/admin/inquiries",
  getParentRoute: () => Route$C
});
const AdminGivingRoute = Route$2.update({
  id: "/admin/giving",
  path: "/admin/giving",
  getParentRoute: () => Route$C
});
const AdminCampRoute = Route$1.update({
  id: "/admin/camp",
  path: "/admin/camp",
  getParentRoute: () => Route$C
});
const AdminBlogRoute = Route.update({
  id: "/admin/blog",
  path: "/admin/blog",
  getParentRoute: () => Route$C
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  GivingRoute,
  NatureSchoolRoute,
  OutreachRoute,
  RetreatsRoute,
  AdminBlogRoute,
  AdminCampRoute,
  AdminGivingRoute,
  AdminInquiriesRoute,
  AdminLoginRoute,
  AdminMediaRoute,
  AdminNatureRoute,
  AdminOutreachRoute,
  AdminPagesRoute,
  AdminRegistrationsRoute,
  AdminRetreatsRoute,
  AdminRoadmapRoute,
  AdminSeoRoute,
  AdminSettingsRoute,
  AdminSubscribersRoute,
  AdminUsersRoute,
  AdminVolunteersRoute,
  CampDatesRoute,
  CampDayRoute,
  CampDiscoveryRoute,
  CampFamilyRoute,
  CampFirstTimeRoute,
  CampGalleryRoute,
  CampOvernightRoute,
  CampRegisterRoute,
  CampSpecialtyRoute,
  StoriesAnyoneCanMakeADifferenceRoute,
  StoriesEmeliaLeeRoute,
  StoriesRebeccaSpoonerRoute,
  AdminIndexRoute,
  CampIndexRoute,
  StoriesIndexRoute
};
const routeTree = Route$C._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  useAdminAuth as a,
  router as r,
  useContentStore as u
};
