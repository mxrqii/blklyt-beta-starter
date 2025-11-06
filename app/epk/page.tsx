
export const metadata = { title: 'EPK — BLKLYT' }

export default function Page() {
  return (
    <section className="py-12">
      <div className="mx-auto w-[min(1152px,92vw)] grid gap-5">
        <h2 className="text-3xl font-bold">Electronic Press Kit</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card p-5">
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <ul className="list-disc pl-6 text-[#d8d9ff]">
              <li>Music Direction (arrangements, rehearsal, show files)</li>
              <li>Playback Engineering (Ableton rigs, failover, SMPTE)</li>
              <li>Live Sound & Systems (Dante, RF coordination)</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-xl font-semibold mb-2">Select Stages</h3>
            <p className="text-[#d8d9ff]">Rise Rooftop, Axelrad, House of Blues, private showcases, festivals.</p>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-[#d8d9ff]">Booking & press: <a href="mailto:hello@blklyt.org">hello@blklyt.org</a> • SMS available.</p>
        </div>
      </div>
    </section>
  )
}
