import { contacts, experiences, profile, projects, techStack } from "@/data/site";
import { SectionFrame } from "@/components/ui/section-frame";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionFrame
        eyebrow="About Pilot"
        title="鍏充簬鎴?"
        description="杩欓噷涓嶆槸娴佹按璐﹀紡绠€鍘嗭紝鑰屾槸鍥寸粫鑳藉姏缁撴瀯銆佸伐浣滆矾寰勫拰椤圭洰浜や粯鍋氳鏁磋緭鍑恒€?"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="cyber-card p-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff7aa6]">Identity</div>
            <h3 className="mt-4 text-2xl font-semibold text-[#f3f3f6]">{profile.name}</h3>
            <p className="mt-4 text-lg text-[#8ef4fb]">{profile.title}</p>
            <p className="mt-4 leading-8 text-[var(--muted-foreground)]">{profile.intro}</p>
          </div>
          <div className="cyber-card p-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#05d9e8]">Contact</div>
            <div className="mt-4 space-y-4">
              {contacts.map((item) => (
                <a key={item.label} href={item.href} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-[#dadce3] transition hover:border-[#05d9e8]/35 hover:text-[#f5f5f8]">
                  <span className="font-mono uppercase tracking-[0.2em] text-[#05d9e8]">{item.label}</span>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionFrame>

      <div className="grid gap-8 lg:grid-cols-2">
        <SectionFrame eyebrow="Career Log" title="宸ヤ綔缁忓巻">
          <div className="space-y-4">
            {experiences.map((item) => (
              <div key={item.period} className="cyber-card p-5">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#05d9e8]">{item.period}</div>
                <h3 className="mt-3 text-xl font-semibold text-[#f3f3f6]">{item.title}</h3>
                <div className="mt-1 text-sm text-[#ff7aa6]">{item.company}</div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">{item.summary}</p>
              </div>
            ))}
          </div>
        </SectionFrame>

        <SectionFrame eyebrow="Project Feed" title="椤圭洰缁忓巻">
          <div className="space-y-4">
            {projects.map((item) => (
              <div key={item.name} className="cyber-card p-5">
                <h3 className="text-xl font-semibold text-[#f3f3f6]">{item.name}</h3>
                <div className="mt-2 text-sm text-[#05d9e8]">{item.role}</div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((stack) => (
                    <span key={stack} className="cyber-tag">{stack}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionFrame>
      </div>

      <SectionFrame eyebrow="Tech Route" title="鎶€鏈矾绾?">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {techStack.map((item) => (
            <div key={item.name} className="cyber-card p-5">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">{item.type}</div>
              <div className="mt-3 text-xl font-semibold text-[#f3f3f6]">{item.name}</div>
            </div>
          ))}
        </div>
      </SectionFrame>
    </div>
  );
}

