
export default function Page() {
  return (
    <section className="py-16">
      <div className="mx-auto w-[min(1152px,92vw)] grid md:grid-cols-[1.2fr_.8fr] gap-7 items-start">
        <div>
          <p className="text-brand font-bold tracking-[.18em] uppercase text-xs">Creative Tech • Music Direction • Design</p>
          <h1 className="font-[Space_Grotesk] text-[clamp(36px,5vw,58px)] leading-tight mt-2">We build shows, systems, and stories<span className="block text-brand">— BLKLYT</span></h1>
          <p className="text-[#d4d6ff] max-w-[62ch] text-[clamp(16px,1.8vw,18px)] mt-3">Playback engineering, live music direction, and brand systems for artists, tours, and experiences. Clean signal flow, tight arrangements, beautiful interfaces.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn" href="/contact">Book a Show</a>
            <a className="btn" href="/store">Shop HBRDSHRY</a>
            <a className="btn" href="/tour">See Tour</a>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="text-xl font-semibold mb-2">Highlights</h3>
          <ul className="list-disc pl-6 text-[#d8d9ff]">
            <li>MD + Playback for live acts and festivals</li>
            <li>Rig design (Ableton, Dante, RF, redundancy)</li>
            <li>Visual + web systems for releases</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
