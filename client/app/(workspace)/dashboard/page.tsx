import { Dashboard, InitPanel } from "@/components";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();

  if(!user) {
    redirect('/login');
  }

  return (
    <main className="size-full flex gap-4 items-center justify-center">
      <InitPanel />
      {/* <Dashboard /> */}
    </main>
  );
}