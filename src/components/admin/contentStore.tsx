import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type PageEntry = {
  id: string;
  title: string;
  slug: string;
  status: "Published" | "Draft" | "Archived";
  modified: string;
  parent?: string;
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
};

type Ctx = State & {
  updateHomepage: (patch: Partial<Homepage>) => void;
  updatePage: (id: string, patch: Partial<PageEntry>) => void;
  setBlogStatus: (id: number, status: BlogPost["status"]) => void;
  addInquiry: (i: Omit<Inquiry, "id" | "received" | "status">) => void;
  setInquiryStatus: (id: number, status: Inquiry["status"]) => void;
  addRegistration: (r: Omit<Registration, "id" | "received" | "receivedISO" | "status">) => void;
  setRegistrationStatus: (id: number, status: Registration["status"]) => void;
  addVolunteerRequest: (v: Omit<VolunteerRequest, "id" | "received" | "receivedISO" | "status">) => void;
  setVolunteerStatus: (id: number, status: VolunteerRequest["status"]) => void;
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

  return (
    <ContentCtx.Provider value={{ ...state, updateHomepage, updatePage, setBlogStatus, addInquiry, setInquiryStatus, pushActivity }}>
      {children}
    </ContentCtx.Provider>
  );
}

export function useContentStore() {
  const v = useContext(ContentCtx);
  if (!v) throw new Error("useContentStore must be used inside ContentStoreProvider");
  return v;
}
