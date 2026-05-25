import { CalendarPlus, Heart } from "@phosphor-icons/react";

export function MobileBottomBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-[1001] flex h-[52px]"
      style={{ boxShadow: "0 -4px 24px rgba(0,0,0,0.12)" }}
    >
      <a
        href="https://ferncliff.campbrainregistration.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-teal text-white font-bold text-[14px]"
      >
        <CalendarPlus size={18} weight="regular" /> Register
      </a>
      <a
        href="#giving"
        className="flex-1 flex items-center justify-center gap-2 bg-coral text-white font-bold text-[14px]"
      >
        <Heart size={18} weight="regular" /> Give
      </a>
    </div>
  );
}
