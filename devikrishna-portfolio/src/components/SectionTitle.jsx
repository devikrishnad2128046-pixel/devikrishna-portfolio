export default function SectionTitle({
  eyebrow,
  title,
  text,
}) {
  return (

    <div className="mb-14 max-w-2xl">

      <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {text && (

        <p className="mt-5 leading-7 text-slate-400">
          {text}
        </p>

      )}

    </div>

  );
}