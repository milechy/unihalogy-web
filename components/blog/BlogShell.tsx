interface BlogShellProps {
  children: React.ReactNode;
}

export default function BlogShell({ children }: BlogShellProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="flex-1">{children}</main>
    </div>
  );
}

