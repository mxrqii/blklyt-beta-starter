
export const metadata = { title: 'Contact — BLKLYT' }

export default function Page() {
  return (
    <section className="py-12">
      <div className="mx-auto w-[min(1152px,92vw)] grid gap-5 max-w-2xl">
        <h2 className="text-3xl font-bold">Book / Contact</h2>
        <p className="text-[#d8d9ff]">Tell us about the show. We’ll reply with availability and a preliminary tech plan.</p>
        <form action="https://formspree.io/f/xbldummy" method="POST" className="grid gap-3">
          <input className="card p-3" required name="name" placeholder="Your name" />
          <input className="card p-3" required type="email" name="email" placeholder="Email" />
          <input className="card p-3" name="phone" placeholder="Phone (optional)" />
          <textarea className="card p-3" required name="details" rows={5} placeholder="Date, location, set length, MD/playback needs, budget range" />
          <button className="btn w-fit" type="submit">Send</button>
        </form>
        <p className="text-sm text-muted">You can replace Formspree with your own backend later.</p>
      </div>
    </section>
  )
}
