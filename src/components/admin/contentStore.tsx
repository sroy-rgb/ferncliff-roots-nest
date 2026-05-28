import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type PageEntry = {
  id: string;
  title: string;
  slug: string;
  status: "Published" | "Draft" | "Archived";
  modified: string;
  parent?: string;
  body?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type BlogPost = {
  id: number;
  title: string;
  category: string;
  author: string;
  status: "Published" | "Draft";
  date: string;
  excerpt: string;
  slug?: string;
};

export type CampSession = {
  id: number;
  week: string;
  dates: string;
  types: string[];
  capacity: number;
  registered: number;
  status: "open" | "filling";
};

export type Inquiry = {
  id: number;
  org: string;
  contact: string;
  email: string;
  guests: number;
  dates: string;
  type: string;
  status: "new" | "in-progress" | "responded";
  received: string;
  message?: string;
};

export type Donation = {
  id: number;
  date: string;
  donor: string;
  amount: number;
  type: string;
  campaign: string;
};

export type ActivityEvent = {
  id: number;
  text: string;
  dot: string;
  time: string;
  ts: number;
};

export type Homepage = {
  heroTagline: string;
  heroSubtext: string;
  campaignRaised: number;
  campaignGoal: number;
};

export type Registration = {
  id: number;
  camperName: string;
  parentName: string;
  email: string;
  phone: string;
  session: string;
  campType: string;
  age: number;
  notes?: string;
  status: "new" | "confirmed" | "waitlist" | "cancelled";
  receivedISO: string;
  received: string;
};

export type VolunteerRequest = {
  id: number;
  name: string;
  email: string;
  interest: string;
  message?: string;
  status: "new" | "acknowledged" | "in-progress" | "resolved";
  receivedISO: string;
  received: string;
};

export type Enrollment = {
  id: number;
  childName: string;
  childAge: number;
  parentName: string;
  email: string;
  phone: string;
  program: string;
  startDate: string;
  notes?: string;
  status: "new" | "confirmed" | "waitlist" | "cancelled";
  receivedISO: string;
  received: string;
};

export type GeneralInquiry = {
  id: number;
  name: string;
  email: string;
  source: string;
  subject: string;
  message: string;
  status: "pending" | "acknowledged" | "resolved";
  receivedISO: string;
  received: string;
};

export type Booking = {
  id: number;
  org: string;
  contact: string;
  email: string;
  dates: string;
  facility: string;
  guests: number;
  status: "Confirmed" | "Pending" | "Inquiry" | "Cancelled";
  createdISO: string;
  fromInquiryId?: number;
};

type State = {
  homepage: Homepage;
  pages: PageEntry[];
  blogPosts: BlogPost[];
  campSessions: CampSession[];
  inquiries: Inquiry[];
  donations: Donation[];
  activity: ActivityEvent[];
  registrations: Registration[];
  volunteerRequests: VolunteerRequest[];
  enrollments: Enrollment[];
  generalInquiries: GeneralInquiry[];
  bookings: Booking[];
};

type Ctx = State & {
  updateHomepage: (patch: Partial<Homepage>) => void;
  updatePage: (id: string, patch: Partial<PageEntry>) => void;
  addPage: (p: Omit<PageEntry, "id" | "modified">) => void;
  deletePage: (id: string) => void;
  setBlogStatus: (id: number, status: BlogPost["status"]) => void;
  addBlogPost: (b: Omit<BlogPost, "id" | "date">) => void;
  updateBlogPost: (id: number, patch: Partial<BlogPost>) => void;
  deleteBlogPost: (id: number) => void;
  addBooking: (b: Omit<Booking, "id" | "createdISO">) => void;
  setBookingStatus: (id: number, status: Booking["status"]) => void;
  addInquiry: (i: Omit<Inquiry, "id" | "received" | "status">) => void;
  setInquiryStatus: (id: number, status: Inquiry["status"]) => void;
  addRegistration: (r: Omit<Registration, "id" | "received" | "receivedISO" | "status">) => void;
  setRegistrationStatus: (id: number, status: Registration["status"]) => void;
  addVolunteerRequest: (v: Omit<VolunteerRequest, "id" | "received" | "receivedISO" | "status">) => void;
  setVolunteerStatus: (id: number, status: VolunteerRequest["status"]) => void;
  addEnrollment: (e: Omit<Enrollment, "id" | "received" | "receivedISO" | "status">) => void;
  setEnrollmentStatus: (id: number, status: Enrollment["status"]) => void;
  addGeneralInquiry: (g: Omit<GeneralInquiry, "id" | "received" | "receivedISO" | "status">) => void;
  setGeneralInquiryStatus: (id: number, status: GeneralInquiry["status"]) => void;
  addDonation: (d: Omit<Donation, "id" | "date">) => void;
  pushActivity: (text: string, dot?: string) => void;
};

const initial: State = {
  homepage: {
    heroTagline: "Where faith, nature & community come together",
    heroSubtext: "Camp · Retreats · Nature School · Outreach",
    campaignRaised: 6_080_000,
    campaignGoal: 7_600_000,
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
    { id: "contact", title: "Contact", slug: "/contact", status: "Draft", modified: "Apr 28, 2026" },
  ],
  blogPosts: [
    { id: 1, title: "Rev. Rebecca Spooner Barber and the Heart of Mission", category: "Support", author: "Kimberly Graves", status: "Published", date: "January 21, 2026", excerpt: "Rev. Rebecca Spooner Barber has spent her life shaped by camp ministry...", slug: "/stories/rebecca-spooner" },
    { id: 2, title: "What Stayed With Her: Emelia Lee", category: "Nature Pre School", author: "Kimberly Graves", status: "Published", date: "February 8, 2026", excerpt: "When Emelia's family began looking for a preschool...", slug: "/stories/emelia-lee" },
    { id: 3, title: "A Preschooler Reminds Us Anyone Can Make a Difference", category: "Giving", author: "Kimberly Graves", status: "Published", date: "March 15, 2026", excerpt: "Sometimes the smallest hands make the biggest impact...", slug: "/stories/anyone-can-make-a-difference" },
    { id: 4, title: "Summer 2026: What's New at Ferncliff", category: "Summer Camp", author: "Kimberly Graves", status: "Draft", date: "May 24, 2026", excerpt: "" },
  ],
  campSessions: [
    { id: 1, week: "Aspen", dates: "Jun 1–5", types: ["Day Camp"], capacity: 60, registered: 43, status: "open" },
    { id: 2, week: "Balsam", dates: "Jun 7–12", types: ["Day", "Overnight"], capacity: 120, registered: 107, status: "filling" },
    { id: 3, week: "Cedar", dates: "Jun 14–19", types: ["Day", "Overnight"], capacity: 120, registered: 78, status: "open" },
    { id: 4, week: "Dogwood", dates: "Jun 21–26", types: ["Day", "Overnight", "Discovery"], capacity: 140, registered: 132, status: "filling" },
    { id: 5, week: "Elm", dates: "Jun 28–Jul 3", types: ["Day", "Overnight"], capacity: 120, registered: 54, status: "open" },
    { id: 6, week: "Fern", dates: "Jul 5–10", types: ["Day", "Overnight", "Discovery"], capacity: 140, registered: 128, status: "filling" },
    { id: 7, week: "Gum", dates: "Jul 12–17", types: ["Day", "Overnight", "Discovery"], capacity: 140, registered: 81, status: "open" },
  ],
  inquiries: [
    { id: 1, org: "First Presbyterian Church, Little Rock", contact: "Sarah Mitchell", email: "sarah@fpclr.org", guests: 45, dates: "Oct 2026", type: "Church Retreat", status: "new", received: "May 22, 2026", message: "Full-weekend retreat for our adult congregation. Need lodging for 45 plus worship and breakout space." },
    { id: 2, org: "Conway Youth Group", contact: "Pastor Mike Davis", email: "mike@conwaychurch.org", guests: 28, dates: "Sep 2026", type: "Youth Retreat", status: "in-progress", received: "May 20, 2026", message: "Annual fall retreat — high school students. Outdoor activities and campfire programs." },
    { id: 3, org: "Arkansas Women's Leadership", contact: "Jennifer Cole", email: "jcole@awlc.org", guests: 65, dates: "Nov 2026", type: "Corporate", status: "new", received: "May 23, 2026", message: "Three-day leadership intensive. Need dining for all meals plus large meeting room." },
  ],
  donations: [
    { id: 1, date: "May 24", donor: "Anonymous", amount: 250, type: "One-time", campaign: "General" },
    { id: 2, date: "May 23", donor: "Johnson Family", amount: 50, type: "Monthly", campaign: "Friends of Ferncliff" },
    { id: 3, date: "May 22", donor: "First Presbyterian Conway", amount: 1000, type: "One-time", campaign: "Transform Campaign" },
    { id: 4, date: "May 21", donor: "Rebecca S. Barber", amount: 100, type: "Monthly", campaign: "Friends of Ferncliff" },
    { id: 5, date: "May 20", donor: "Anonymous", amount: 25, type: "One-time", campaign: "General" },
  ],
  activity: [
    { id: 1, text: "New camp registration — Balsam Week, Pathfinders", dot: "#2B7A6F", time: "2 hours ago", ts: Date.now() - 7200_000 },
    { id: 2, text: "Donation received — $100, Friends of Ferncliff", dot: "#C49A3C", time: "3 hours ago", ts: Date.now() - 10800_000 },
    { id: 3, text: "Blog post published — Rev. Rebecca Spooner Barber", dot: "#2B7A6F", time: "Yesterday", ts: Date.now() - 86400_000 },
    { id: 4, text: "Retreat inquiry — First Presbyterian, 45 guests", dot: "#2B7A6F", time: "Yesterday", ts: Date.now() - 86400_000 },
    { id: 5, text: "Volunteer application — Mission Teams", dot: "#C49A3C", time: "2 days ago", ts: Date.now() - 172800_000 },
  ],
  registrations: [
    { id: 201, camperName: "Ella Thompson", parentName: "Marcus Thompson", email: "marcus.thompson@example.com", phone: "(501) 555-0142", session: "Balsam (Jun 7–12)", campType: "Overnight", age: 11, notes: "Peanut allergy", status: "confirmed", receivedISO: new Date(Date.now() - 86_400_000).toISOString(), received: "May 25, 9:14 AM" },
    { id: 202, camperName: "Noah Patel", parentName: "Priya Patel", email: "priya.patel@example.com", phone: "(479) 555-0188", session: "Cedar (Jun 14–19)", campType: "Day Camp", age: 9, status: "new", receivedISO: new Date(Date.now() - 3_600_000).toISOString(), received: "May 26, 8:32 AM" },
    { id: 203, camperName: "Sophia Reyes", parentName: "Elena Reyes", email: "elena.r@example.com", phone: "(501) 555-0119", session: "Dogwood (Jun 21–26)", campType: "Discovery", age: 13, notes: "Returning camper, cabin with Mia R.", status: "waitlist", receivedISO: new Date(Date.now() - 172_800_000).toISOString(), received: "May 24, 4:48 PM" },
    { id: 204, camperName: "Liam Johnson", parentName: "Rachel Johnson", email: "rachel.j@example.com", phone: "(870) 555-0167", session: "Fern (Jul 5–10)", campType: "Overnight", age: 12, status: "confirmed", receivedISO: new Date(Date.now() - 259_200_000).toISOString(), received: "May 23, 11:02 AM" },
    { id: 205, camperName: "Ava Williams", parentName: "Derek Williams", email: "derek.w@example.com", phone: "(501) 555-0203", session: "Elm (Jun 28–Jul 3)", campType: "Day Camp", age: 8, notes: "First-time camper", status: "new", receivedISO: new Date(Date.now() - 7_200_000).toISOString(), received: "May 26, 7:11 AM" },
  ],
  volunteerRequests: [
    { id: 301, name: "Hannah Bradley", email: "hannah.b@example.com", interest: "Summer Camp Counselor", message: "College sophomore, available all of June and July. CPR certified.", status: "acknowledged", receivedISO: new Date(Date.now() - 86_400_000).toISOString(), received: "May 25, 2:30 PM" },
    { id: 302, name: "Tyler Brooks", email: "tbrooks@example.com", interest: "Mission Teams", message: "Group of 8 from Conway Methodist wants to help with summer prep work.", status: "in-progress", receivedISO: new Date(Date.now() - 172_800_000).toISOString(), received: "May 24, 10:15 AM" },
    { id: 303, name: "Megan Carter", email: "megan.carter@example.com", interest: "Nature School Helper", message: "Retired teacher, available Tues/Thurs mornings.", status: "new", receivedISO: new Date(Date.now() - 5_400_000).toISOString(), received: "May 26, 7:48 AM" },
    { id: 304, name: "David Nguyen", email: "dnguyen@example.com", interest: "Retreat Hospitality", status: "resolved", receivedISO: new Date(Date.now() - 432_000_000).toISOString(), received: "May 21, 3:00 PM" },
  ],
  enrollments: [
    { id: 401, childName: "Mia Foster", childAge: 4, parentName: "Allison Foster", email: "allison.f@example.com", phone: "(501) 555-0144", program: "Nature Preschool", startDate: "Sep 2026", status: "confirmed", receivedISO: new Date(Date.now() - 172_800_000).toISOString(), received: "May 24, 9:00 AM" },
    { id: 402, childName: "Owen Hayes", childAge: 5, parentName: "Jeremy Hayes", email: "j.hayes@example.com", phone: "(479) 555-0177", program: "Nature Preschool", startDate: "Sep 2026", notes: "Returning sibling", status: "new", receivedISO: new Date(Date.now() - 7_200_000).toISOString(), received: "May 26, 7:42 AM" },
    { id: 403, childName: "Lila Greene", childAge: 7, parentName: "Tara Greene", email: "tara.g@example.com", phone: "(501) 555-0193", program: "Wildcraft", startDate: "Aug 2026", status: "waitlist", receivedISO: new Date(Date.now() - 259_200_000).toISOString(), received: "May 23, 1:18 PM" },
  ],
  generalInquiries: [
    { id: 501, name: "Patricia Long", email: "p.long@example.com", source: "Contact", subject: "Facility tour request", message: "Would love to tour the campus for an upcoming women's retreat.", status: "pending", receivedISO: new Date(Date.now() - 3_600_000).toISOString(), received: "May 26, 8:00 AM" },
    { id: 502, name: "Brian Walsh", email: "brian.w@example.com", source: "Give", subject: "Question about monthly giving", message: "Can I change my recurring gift amount?", status: "acknowledged", receivedISO: new Date(Date.now() - 86_400_000).toISOString(), received: "May 25, 11:20 AM" },
    { id: 503, name: "Sara Kim", email: "sara.k@example.com", source: "Volunteer", subject: "Group volunteer slot", message: "Our youth group has 12 people available July 15.", status: "pending", receivedISO: new Date(Date.now() - 18_000_000).toISOString(), received: "May 26, 3:00 AM" },
  ],
  bookings: [
    { id: 601, org: "First Presbyterian, LR", contact: "Sarah Mitchell", email: "sarah@fpclr.org", dates: "Oct 18–20, 2026", facility: "Camp McMillan", guests: 45, status: "Confirmed", createdISO: new Date(Date.now() - 5 * 86_400_000).toISOString() },
    { id: 602, org: "Conway Youth", contact: "Pastor Mike Davis", email: "mike@conwaychurch.org", dates: "Sep 12–14, 2026", facility: "Brown Center", guests: 28, status: "Pending", createdISO: new Date(Date.now() - 3 * 86_400_000).toISOString() },
    { id: 603, org: "Pulaski Heights UMC", contact: "Anne Reed", email: "areed@phumc.org", dates: "Jan 9–11, 2027", facility: "Camp McMillan", guests: 35, status: "Confirmed", createdISO: new Date(Date.now() - 86_400_000).toISOString() },
  ],
};


const ContentCtx = createContext<Ctx | null>(null);

let nextInquiryId = 100;
let nextActivityId = 1000;

export function ContentStoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(initial);

  const pushActivity = useCallback((text: string, dot = "#2B7A6F") => {
    setState((s) => ({
      ...s,
      activity: [
        { id: ++nextActivityId, text, dot, time: "Just now", ts: Date.now() },
        ...s.activity,
      ],
    }));
  }, []);

  const updateHomepage = useCallback((patch: Partial<Homepage>) => {
    setState((s) => ({ ...s, homepage: { ...s.homepage, ...patch } }));
  }, []);

  const updatePage = useCallback((id: string, patch: Partial<PageEntry>) => {
    setState((s) => {
      const next = s.pages.map((p) => (p.id === id ? { ...p, ...patch, modified: "Just now" } : p));
      const updated = next.find((p) => p.id === id);
      if (updated) {
        setState((s2) => ({
          ...s2,
          activity: [
            { id: ++nextActivityId, text: `Page updated — ${updated.title}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() },
            ...s2.activity,
          ],
        }));
      }
      return { ...s, pages: next };
    });
  }, []);

  const setBlogStatus = useCallback((id: number, status: BlogPost["status"]) => {
    setState((s) => {
      const next = s.blogPosts.map((b) => (b.id === id ? { ...b, status } : b));
      const post = next.find((b) => b.id === id);
      return {
        ...s,
        blogPosts: next,
        activity: post
          ? [{ id: ++nextActivityId, text: `Blog post ${status === "Published" ? "published" : "drafted"} — ${post.title}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity]
          : s.activity,
      };
    });
  }, []);

  const addBlogPost: Ctx["addBlogPost"] = useCallback((b) => {
    setState((s) => {
      const now = new Date();
      const date = now.toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" });
      const post: BlogPost = { ...b, id: ++nextInquiryId, date };
      return {
        ...s,
        blogPosts: [post, ...s.blogPosts],
        activity: [{ id: ++nextActivityId, text: `Blog post created — ${b.title}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity],
      };
    });
  }, []);

  const updateBlogPost: Ctx["updateBlogPost"] = useCallback((id, patch) => {
    setState((s) => ({
      ...s,
      blogPosts: s.blogPosts.map((b) => (b.id === id ? { ...b, ...patch } : b)),
      activity: [{ id: ++nextActivityId, text: `Blog post updated — ${patch.title ?? s.blogPosts.find(b=>b.id===id)?.title ?? ""}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity],
    }));
  }, []);

  const deleteBlogPost: Ctx["deleteBlogPost"] = useCallback((id) => {
    setState((s) => {
      const post = s.blogPosts.find((b) => b.id === id);
      return {
        ...s,
        blogPosts: s.blogPosts.filter((b) => b.id !== id),
        activity: post ? [{ id: ++nextActivityId, text: `Blog post deleted — ${post.title}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity] : s.activity,
      };
    });
  }, []);

  const addBooking: Ctx["addBooking"] = useCallback((b) => {
    setState((s) => {
      const booking: Booking = { ...b, id: ++nextInquiryId, createdISO: new Date().toISOString() };
      return {
        ...s,
        bookings: [booking, ...s.bookings],
        activity: [{ id: ++nextActivityId, text: `Booking added — ${b.org} · ${b.dates}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity],
      };
    });
  }, []);

  const setBookingStatus = useCallback((id: number, status: Booking["status"]) => {
    setState((s) => ({
      ...s,
      bookings: s.bookings.map((b) => (b.id === id ? { ...b, status } : b)),
    }));
  }, []);


  const addInquiry: Ctx["addInquiry"] = useCallback((i) => {
    setState((s) => {
      const inquiry: Inquiry = { ...i, id: ++nextInquiryId, status: "new", received: "Just now" };
      return {
        ...s,
        inquiries: [inquiry, ...s.inquiries],
        activity: [
          { id: ++nextActivityId, text: `Retreat inquiry — ${i.org}, ${i.guests} guests`, dot: "#2B7A6F", time: "Just now", ts: Date.now() },
          ...s.activity,
        ],
      };
    });
  }, []);

  const setInquiryStatus = useCallback((id: number, status: Inquiry["status"]) => {
    setState((s) => {
      const next = s.inquiries.map((i) => (i.id === id ? { ...i, status } : i));
      const inq = next.find((i) => i.id === id);
      return {
        ...s,
        inquiries: next,
        activity: inq
          ? [{ id: ++nextActivityId, text: `Inquiry ${status} — ${inq.org}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity]
          : s.activity,
      };
    });
  }, []);

  const fmtTime = (d: Date) => d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

  const addRegistration: Ctx["addRegistration"] = useCallback((r) => {
    setState((s) => {
      const now = new Date();
      const reg: Registration = { ...r, id: ++nextInquiryId, status: "new", receivedISO: now.toISOString(), received: fmtTime(now) };
      return {
        ...s,
        registrations: [reg, ...s.registrations],
        activity: [
          { id: ++nextActivityId, text: `New camp registration — ${r.camperName} · ${r.session}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() },
          ...s.activity,
        ],
      };
    });
  }, []);

  const setRegistrationStatus = useCallback((id: number, status: Registration["status"]) => {
    setState((s) => {
      const next = s.registrations.map((r) => (r.id === id ? { ...r, status } : r));
      const reg = next.find((r) => r.id === id);
      return {
        ...s,
        registrations: next,
        activity: reg
          ? [{ id: ++nextActivityId, text: `Registration ${status} — ${reg.camperName}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity]
          : s.activity,
      };
    });
  }, []);

  const addVolunteerRequest: Ctx["addVolunteerRequest"] = useCallback((v) => {
    setState((s) => {
      const now = new Date();
      const vol: VolunteerRequest = { ...v, id: ++nextInquiryId, status: "new", receivedISO: now.toISOString(), received: fmtTime(now) };
      return {
        ...s,
        volunteerRequests: [vol, ...s.volunteerRequests],
        activity: [
          { id: ++nextActivityId, text: `Volunteer request — ${v.name} · ${v.interest}`, dot: "#C49A3C", time: "Just now", ts: Date.now() },
          ...s.activity,
        ],
      };
    });
  }, []);

  const setVolunteerStatus = useCallback((id: number, status: VolunteerRequest["status"]) => {
    setState((s) => {
      const next = s.volunteerRequests.map((v) => (v.id === id ? { ...v, status } : v));
      const vol = next.find((v) => v.id === id);
      return {
        ...s,
        volunteerRequests: next,
        activity: vol
          ? [{ id: ++nextActivityId, text: `Volunteer ${status} — ${vol.name}`, dot: "#C49A3C", time: "Just now", ts: Date.now() }, ...s.activity]
          : s.activity,
      };
    });
  }, []);

  const addEnrollment: Ctx["addEnrollment"] = useCallback((e) => {
    setState((s) => {
      const now = new Date();
      const enr: Enrollment = { ...e, id: ++nextInquiryId, status: "new", receivedISO: now.toISOString(), received: fmtTime(now) };
      return {
        ...s,
        enrollments: [enr, ...s.enrollments],
        activity: [
          { id: ++nextActivityId, text: `New enrollment — ${e.childName} · ${e.program}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() },
          ...s.activity,
        ],
      };
    });
  }, []);

  const setEnrollmentStatus = useCallback((id: number, status: Enrollment["status"]) => {
    setState((s) => {
      const next = s.enrollments.map((e) => (e.id === id ? { ...e, status } : e));
      const enr = next.find((e) => e.id === id);
      return {
        ...s,
        enrollments: next,
        activity: enr
          ? [{ id: ++nextActivityId, text: `Enrollment ${status} — ${enr.childName}`, dot: "#2B7A6F", time: "Just now", ts: Date.now() }, ...s.activity]
          : s.activity,
      };
    });
  }, []);

  const addGeneralInquiry: Ctx["addGeneralInquiry"] = useCallback((g) => {
    setState((s) => {
      const now = new Date();
      const gi: GeneralInquiry = { ...g, id: ++nextInquiryId, status: "pending", receivedISO: now.toISOString(), received: fmtTime(now) };
      return {
        ...s,
        generalInquiries: [gi, ...s.generalInquiries],
        activity: [
          { id: ++nextActivityId, text: `Inquiry — ${g.name} · ${g.source}`, dot: "#C49A3C", time: "Just now", ts: Date.now() },
          ...s.activity,
        ],
      };
    });
  }, []);

  const setGeneralInquiryStatus = useCallback((id: number, status: GeneralInquiry["status"]) => {
    setState((s) => ({
      ...s,
      generalInquiries: s.generalInquiries.map((g) => (g.id === id ? { ...g, status } : g)),
    }));
  }, []);

  const addDonation: Ctx["addDonation"] = useCallback((d) => {
    setState((s) => {
      const now = new Date();
      const date = now.toLocaleString("en-US", { month: "short", day: "numeric" });
      const don: Donation = { ...d, id: ++nextInquiryId, date };
      return {
        ...s,
        donations: [don, ...s.donations],
        homepage: { ...s.homepage, campaignRaised: s.homepage.campaignRaised + d.amount },
        activity: [
          { id: ++nextActivityId, text: `Donation received — $${d.amount.toLocaleString()} · ${d.campaign}`, dot: "#C49A3C", time: "Just now", ts: Date.now() },
          ...s.activity,
        ],
      };
    });
  }, []);

  return (
    <ContentCtx.Provider value={{
      ...state,
      updateHomepage, updatePage, setBlogStatus, addBlogPost, updateBlogPost, deleteBlogPost,
      addBooking, setBookingStatus,
      addInquiry, setInquiryStatus,
      addRegistration, setRegistrationStatus,
      addVolunteerRequest, setVolunteerStatus,
      addEnrollment, setEnrollmentStatus,
      addGeneralInquiry, setGeneralInquiryStatus,
      addDonation,
      pushActivity,
    }}>
      {children}
    </ContentCtx.Provider>
  );
}

export function useContentStore() {
  const v = useContext(ContentCtx);
  if (!v) throw new Error("useContentStore must be used inside ContentStoreProvider");
  return v;
}
