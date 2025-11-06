
import events from '@/data/events.json'

export const metadata = { title: 'Tour — BLKLYT' }

export default function Page() {
  return (
    <section className="py-12">
      <div className="mx-auto w-[min(1152px,92vw)]">
        <h2 className="text-3xl font-bold mb-4">Upcoming Shows</h2>
        <div className="grid gap-4">
          {events.map((e, i) => (
            <article key={i} className="card p-5 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-brand text-sm font-semibold">{new Date(e.date).toLocaleDateString()}</p>
                <h3 className="text-xl font-semibold">{e.venue}</h3>
                <p className="text-[#d8d9ff]">{e.city} — {e.notes}</p>
              </div>
              <div className="mt-3 md:mt-0">
                <a className="btn" href={e.ticketUrl} target="_blank">Tickets</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
