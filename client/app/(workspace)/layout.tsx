
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
      <main className="h-full flex gap-2 text-white">
        <div className="w-1/6">
          {sidebar}
        </div>
        <div className="w-5/6">
          {children}
        </div>
      </main>
      {modal}
    </>
  );
}
