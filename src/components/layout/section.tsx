"use client";

interface SectionProps {
  title?: string;
  children?: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  if (title) {
    return (
      <section className="flex flex-col ">
        <h3 className="text-rich-black">{title}</h3>
        <div className="w-[1240px] p-[60px] bg-white-fg mt-4 shadow-double rounded-large">
          {children}
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col">
        <div className="w-[1240px] p-[60px] bg-white-fg mt-[60px] shadow-double rounded-large">
          {children}
        </div>
      </section>
    );
  }
}

export function SectionInvisible({ children }: SectionProps) {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[1240px] p-[60px] bg-transparent mt-0">
        {children}
      </div>
    </section>
  );
} 