
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
      <main className="h-full flex gap-2">
        <div className="w-1/4">
          {sidebar}
        </div>
        <div className="w-3/4">
          {children}
        </div>
      </main>
      {modal}
    </>
  );
}
