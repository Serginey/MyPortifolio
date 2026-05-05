export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-accent text-xs font-medium tracking-widest uppercase">
      {children}
    </span>
  );
}
