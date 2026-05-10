"use client";

import ChatBox from "@/components/chat/ChatBox";
import SideBar from "@/components/layout/SideBar";

export default function Home() {
  return (
    <main className="size-full flex gap-4">
      <SideBar />
      <div className="flex-1">
        {/* <ChatBox /> */}
      </div>
    </main>
  );
}
