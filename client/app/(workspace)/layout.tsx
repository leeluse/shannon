
export default function WorkspaceLayout({
  sidebar,
  modal,
  children
}: Readonly<{
  sidebar: React.ReactNode;
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="h-full flex gap-4 text-white">
        <div className="w-64 shrink-0">
          {sidebar}
        </div>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </main>
      {modal}
    </>
  );
}
