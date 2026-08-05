const ctaHref = "mailto:info@pleniumbuilders.com?subject=Start%20a%20project";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Page() {
  return (
    <main>
      <style>{`
        :root { --ink:#101514; --paper:#f2efe8; --lime:#c8d93b; --blue:#274f70; --line:rgba(16,21,20,.2); }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--paper); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; }
        img { display:block; width:100%; }
        .nav { height:86px; padding:0 4vw; display:flex; align-items:center; gap:42px; background:var(--ink); color:white; border-bottom:1px solid rgba(255,255,255,.18); }
        .nav-logo { width:158px; height:auto; margin-right:auto; }
        .nav-links { display:flex; gap:28px; font-size:12px; text-transform:uppercase; letter-spacing:.15em; }
        .nav-links a { text-decoration:none; }
        .cta { display:inline-flex; align-items:center; justify-content:space-between; gap:26px; min-width:176px; padding:15px 18px; background:var(--lime); color:var(--ink); text-decoration:none; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:.1em; transition:transform .2s, background .2s; }
        .cta:hover { transform:translateY(-2px); background:#d8e759; }
        .hero { position:relative; min-height:760px; color:white; display:flex; align-items:flex-end; overflow:hidden; }
        .hero-bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .hero:after { content:""; position:absolute; inset:0; background:linear-gradient(90deg,rgba(7,14,14,.88) 0%,rgba(7,14,14,.35) 65%,rgba(7,14,14,.12)),linear-gradient(0deg,rgba(7,14,14,.75),transparent 45%); }
        .hero-copy { position:relative; z-index:1; padding:90px 4vw; width:min(930px,90%); }
        .eyebrow { display:flex; align-items:center; gap:12px; margin:0 0 28px; font-size:11px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; }
        .eyebrow:before { content:""; width:38px; height:3px; background:var(--lime); }
        h1,h2,h3,p { margin-top:0; }
        h1 { margin-bottom:28px; font-size:clamp(58px,8.6vw,132px); line-height:.83; letter-spacing:-.065em; text-transform:uppercase; max-width:900px; }
        .hero-copy > p:not(.eyebrow) { max-width:580px; font-size:18px; line-height:1.55; color:rgba(255,255,255,.82); }
        .hero .cta { margin-top:18px; }
        .proof-bar { display:grid; grid-template-columns:repeat(3,1fr); background:var(--blue); color:white; }
        .proof-stat { min-height:158px; padding:34px 4vw; border-right:1px solid rgba(255,255,255,.18); display:flex; gap:20px; align-items:center; }
        .proof-stat strong { font-size:42px; line-height:1; color:var(--lime); letter-spacing:-.05em; }
        .proof-stat span { max-width:220px; font-size:12px; line-height:1.55; text-transform:uppercase; letter-spacing:.1em; }
        .section { padding:120px 4vw; }
        .split { display:grid; grid-template-columns:minmax(0,1.05fr) minmax(340px,.75fr); gap:8vw; align-items:center; }
        .section h2 { max-width:820px; margin-bottom:32px; font-size:clamp(44px,6vw,88px); line-height:.92; letter-spacing:-.055em; text-transform:uppercase; }
        .section p { font-size:17px; line-height:1.7; color:#3b4542; }
        .photo-frame { position:relative; }
        .photo-frame img { height:650px; object-fit:cover; }
        .caption { position:absolute; right:-20px; bottom:28px; padding:18px 22px; background:var(--lime); font-size:11px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .quote { padding:34px 0 0; border-top:1px solid var(--line); margin-top:36px; font-size:24px!important; line-height:1.4!important; color:var(--ink)!important; font-weight:700; }
        .quote small { display:block; margin-top:18px; font-size:11px; letter-spacing:.12em; text-transform:uppercase; }
        .scheels { background:var(--ink); color:white; padding-bottom:0; }
        .scheels p { color:rgba(255,255,255,.7); }
        .case-head { display:grid; grid-template-columns:1.2fr .8fr; gap:8vw; align-items:end; }
        .case-head h2 { margin-bottom:0; }
        .case-grid { margin-top:70px; display:grid; grid-template-columns:1.45fr .55fr; min-height:650px; }
        .case-grid > img { height:650px; object-fit:cover; }
        .case-note { background:var(--blue); padding:55px 42px; display:flex; flex-direction:column; justify-content:space-between; }
        .case-note .number { font-size:92px; color:var(--lime); font-weight:900; line-height:.8; letter-spacing:-.07em; }
        .case-note blockquote { margin:0; font-size:21px; line-height:1.45; }
        .case-note cite { display:block; margin-top:22px; font-size:11px; font-style:normal; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.65); }
        .recognition { display:grid; grid-template-columns:.72fr 1.28fr; padding:0; background:#e6e1d7; }
        .recognition-art { min-height:620px; background:var(--blue); display:grid; place-items:center; padding:12%; }
        .recognition-art img { max-width:280px; max-height:340px; object-fit:contain; }
        .recognition-copy { padding:100px 8vw; align-self:center; }
        .recognition-copy h2 { font-size:clamp(46px,6vw,82px); }
        .award-row { margin-top:35px; padding-top:24px; border-top:1px solid var(--line); display:flex; gap:24px; align-items:center; }
        .award-row strong { font-size:15px; text-transform:uppercase; letter-spacing:.08em; }
        .projects-head { display:flex; align-items:end; justify-content:space-between; gap:40px; }
        .projects-head h2 { margin-bottom:0; }
        .project-grid { display:grid; grid-template-columns:1.15fr .85fr .85fr; gap:18px; margin-top:58px; }
        .project { position:relative; min-height:520px; overflow:hidden; background:#ccc; }
        .project img { width:100%; height:100%; object-fit:cover; transition:transform .5s; }
        .project:hover img { transform:scale(1.025); }
        .project figcaption { position:absolute; inset:auto 0 0; padding:50px 24px 24px; color:white; background:linear-gradient(transparent,rgba(0,0,0,.82)); font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:.08em; }
        .project figcaption span { display:block; margin-bottom:9px; color:var(--lime); font-size:10px; }
        .homes { background:#d8d1c3; }
        .homes-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:7vw; align-items:center; }
        .homes img { height:720px; object-fit:cover; }
        .homes-list { margin:38px 0; display:grid; grid-template-columns:1fr 1fr; border-top:1px solid var(--line); }
        .homes-list span { padding:16px 0; border-bottom:1px solid var(--line); font-size:11px; text-transform:uppercase; letter-spacing:.1em; }
        .community { background:var(--paper); }
        .community-card { display:grid; grid-template-columns:1fr 1fr; min-height:650px; background:var(--blue); color:white; }
        .community-card img { height:100%; min-height:650px; object-fit:cover; }
        .community-copy { padding:8vw 7vw; display:flex; flex-direction:column; justify-content:center; }
        .community-copy p { color:rgba(255,255,255,.72); }
        .community-copy blockquote { margin:28px 0 0; font-size:clamp(24px,3vw,39px); line-height:1.25; letter-spacing:-.025em; }
        .community-copy cite { margin-top:28px; font-size:11px; font-style:normal; letter-spacing:.13em; text-transform:uppercase; color:var(--lime); }
        .faq-wrap { display:grid; grid-template-columns:.78fr 1.22fr; gap:8vw; align-items:start; }
        .faq-image { position:sticky; top:20px; }
        .faq-image img { height:600px; object-fit:cover; }
        details { border-top:1px solid var(--line); padding:24px 0; }
        details:last-child { border-bottom:1px solid var(--line); }
        summary { cursor:pointer; list-style:none; display:flex; justify-content:space-between; gap:20px; font-size:19px; font-weight:800; }
        summary:after { content:"+"; color:var(--blue); }
        details[open] summary:after { content:"−"; }
        details p { padding-top:18px; max-width:680px; font-size:15px!important; }
        .final { padding:110px 4vw; background:var(--lime); display:grid; grid-template-columns:1fr auto; gap:60px; align-items:end; }
        .final h2 { max-width:920px; margin:0; font-size:clamp(54px,8vw,116px); line-height:.85; letter-spacing:-.065em; text-transform:uppercase; }
        .final .cta { background:var(--ink); color:white; }
        footer { padding:60px 4vw 28px; background:var(--ink); color:white; }
        .footer-main { display:grid; grid-template-columns:1fr auto auto; gap:8vw; align-items:start; padding-bottom:60px; }
        .footer-symbol { width:72px; }
        footer h3 { font-size:11px; color:var(--lime); letter-spacing:.15em; text-transform:uppercase; }
        footer p, footer a { color:rgba(255,255,255,.65); font-size:13px; line-height:1.8; text-decoration:none; }
        .legal { padding-top:22px; border-top:1px solid rgba(255,255,255,.14); display:flex; justify-content:space-between; font-size:10px; color:rgba(255,255,255,.45); letter-spacing:.1em; text-transform:uppercase; }
        @media (max-width:900px) {
          .nav { height:72px; padding:0 20px; } .nav-links { display:none; } .nav-logo { width:130px; } .nav .cta { min-width:0; padding:12px; }
          .hero { min-height:680px; } .hero-copy { padding:65px 20px; width:100%; } h1 { font-size:58px; }
          .proof-bar { grid-template-columns:1fr; } .proof-stat { min-height:105px; padding:24px 20px; border-right:0; border-bottom:1px solid rgba(255,255,255,.18); }
          .section { padding:80px 20px; } .split,.case-head,.recognition,.homes-grid,.community-card,.faq-wrap { grid-template-columns:1fr; }
          .photo-frame img,.homes img { height:500px; } .caption { right:0; }
          .case-grid { grid-template-columns:1fr; } .case-grid > img { height:470px; } .case-note { min-height:420px; }
          .recognition-art { min-height:430px; } .recognition-copy { padding:70px 20px; }
          .projects-head { display:block; } .projects-head .cta { margin-top:28px; } .project-grid { grid-template-columns:1fr; } .project { min-height:460px; margin:0; }
          .community { padding-left:0; padding-right:0; } .community-card img { min-height:450px; height:450px; } .community-copy { padding:70px 20px; }
          .faq-image { position:relative; } .faq-image img { height:400px; } .faq-list { margin-top:40px; }
          .final { padding:80px 20px; grid-template-columns:1fr; align-items:start; } .final h2 { font-size:58px; }
          .footer-main { grid-template-columns:1fr; } .legal { gap:20px; flex-direction:column; }
        }
      `}</style>

      <nav className="nav" aria-label="Main navigation">
        <img className="nav-logo" src="/images/word_mark_logo_white-8c32bfaf23.png" alt="Plenium Builders" />
        <div className="nav-links">
          <a href="#work">Work</a><a href="#approach">Approach</a><a href="#homes">Homes</a><a href="#about">About</a>
        </div>
        <a className="cta" href={ctaHref}>Start a project <Arrow /></a>
      </nav>

      <header className="hero">
        <img className="hero-bg" src="/images/scheels-meridian-idaho-general-contractor-plenium-4c42076083.jpg" alt="SCHEELS Meridian built by Plenium Builders" />
        <div className="hero-copy">
          <p className="eyebrow">General contractor · Construction manager</p>
          <h1>Built to perform.</h1>
          <p>Commercial buildings and singular homes delivered with the skill, heart, and accountability to stand up long after opening day.</p>
          <a className="cta" href={ctaHref}>Start a project <Arrow /></a>
        </div>
      </header>

      <section className="proof-bar" aria-label="Company highlights">
        <div className="proof-stat"><strong>10+</strong><span>Years building high-performing stores for SCHEELS</span></div>
        <div className="proof-stat"><strong>400</strong><span>Ranked among ENR’s Top 400 Contractors</span></div>
        <div className="proof-stat"><strong>60+</strong><span>Years of construction tradition in the region</span></div>
      </section>

      <section className="section split" id="approach">
        <div>
          <p className="eyebrow">The right team</p>
          <h2>Precision starts before construction.</h2>
          <p>Plenium project leaders work beside owners and design partners from preconstruction through final punch. Proven planning, risk mitigation, and direct communication keep complex work moving without losing sight of the finished experience.</p>
          <p className="quote">“A true partner from the first handshake.”<small>Brian Ebert · R&amp;D Program Director, HORIBA</small></p>
        </div>
        <div className="photo-frame">
          <img src="/images/new-deantronics-nevada-23-f36a4d215f.jpg" alt="Detailed commercial construction by Plenium Builders" />
          <span className="caption">Plan well. Build once.</span>
        </div>
      </section>

      <section className="section scheels" id="work">
        <div className="case-head">
          <div><p className="eyebrow">Proof in partnership</p><h2>A decade of better-performing stores.</h2></div>
          <p>SCHEELS Meridian is retail engineered as an experience: electrochromatic glass, a Ferris wheel, and a 16,000-gallon aquarium. It is also the product of a builder relationship tested across more than ten years.</p>
        </div>
        <div className="case-grid">
          <img src="/images/scheels-meridian-general-contractor-plenium-14_-b8a4c1de04.jpg" alt="Interior of SCHEELS Meridian" />
          <div className="case-note">
            <div><div className="number">10+</div><p>years of repeat partnership</p></div>
            <blockquote>“The stores that your team built perform better and require less maintenance.”<cite>Jason Loney · Former VP, SCHEELS</cite></blockquote>
          </div>
        </div>
      </section>

      <section className="recognition">
        <div className="recognition-art"><img src="/images/top-400-53f990b46f.png" alt="Engineering News-Record Top 400 Contractor recognition" /></div>
        <div className="recognition-copy">
          <p className="eyebrow">Nationally ranked · Locally invested</p>
          <h2>Among ENR’s Top 400 Contractors.</h2>
          <p>National recognition backed by work across healthcare, civic, education, industrial, hospitality, and residential construction.</p>
          <div className="award-row"><strong>Nevada AGC Pinnacle Awards</strong><span>·</span><strong>NAIOP CRE Awards</strong></div>
        </div>
      </section>

      <section className="section">
        <div className="projects-head"><div><p className="eyebrow">Selected commercial work</p><h2>Built around real operations.</h2></div><a className="cta" href={ctaHref}>Start a project <Arrow /></a></div>
        <div className="project-grid">
          <figure className="project"><img src="/images/carson-city-civic-building-contractor-nevada-3e8f0e79cc.jpg" alt="Nevada Legislature Building West Addition" /><figcaption><span>Civic · Carson City</span>NV Legislature Building West Addition</figcaption></figure>
          <figure className="project"><img src="/images/renownplenium9-18-25_dusk---no-dist-9d125fd929.jpg" alt="Renown Northwest Reno Urgent Care" /><figcaption><span>Healthcare · Reno</span>Renown NW Urgent Care</figcaption></figure>
          <figure className="project"><img src="/images/airway-commerce-1---expanded-sky____-e6f390a292.jpg" alt="Airway Commerce Center" /><figcaption><span>Industrial · 893,000+ SF</span>Airway Commerce Center</figcaption></figure>
        </div>
      </section>

      <section className="section homes" id="homes">
        <div className="homes-grid">
          <img src="/images/hearthline_house_custom_home_builder_reno_nv-eed708533b.jpg" alt="Hearthline House custom home" />
          <div><p className="eyebrow">Custom homes</p><h2>No room for almost right.</h2><p>A select number of homes and remodels each year gives the team space to communicate clearly and execute every corner, curve, reveal, and finish with intent.</p><div className="homes-list"><span>Custom homes</span><span>Whole-home remodels</span><span>Preconstruction</span><span>Precision carpentry</span></div><a className="cta" href={ctaHref}>Start a project <Arrow /></a></div>
        </div>
      </section>

      <section className="section community" id="about">
        <div className="community-card">
          <img src="/images/pb-good-works-committee-3c005869b9.jpg" alt="Plenium Builders Good Works Committee serving the community" />
          <div className="community-copy"><p className="eyebrow">Built for the community</p><p>Through its employee-led Good Works Committee, Plenium supports organizations that make Northern Nevada stronger, including the Boys &amp; Girls Club of Truckee Meadows.</p><blockquote>“The building they remodeled far exceeded our expectations. The quality of their work and their constant attention to detail really came through.”</blockquote><cite>Mike Wurm · Executive Director, Boys &amp; Girls Club of Truckee Meadows</cite></div>
        </div>
      </section>

      <section className="section faq-wrap">
        <div className="faq-image"><img src="/images/villah-harrah-remodel-lake-tahoe01-3f2b132552.jpg" alt="Villa Harrah remodel at Lake Tahoe" /></div>
        <div className="faq-list"><p className="eyebrow">Common questions</p><h2>Before we build.</h2>
          <details><summary>What kinds of projects does Plenium build?</summary><p>Commercial work spans healthcare, education, civic, industrial, retail, hospitality, and tenant improvements. The residential team builds select custom homes and major remodels.</p></details>
          <details><summary>When should Plenium join the team?</summary><p>Early involvement creates the most value. Preconstruction collaboration supports budgeting, constructability, scheduling, procurement, and risk planning while design is still taking shape.</p></details>
          <details><summary>Where is Plenium licensed?</summary><p>Plenium is a licensed general contractor in Nevada (License #76482) and California (License #983684).</p></details>
          <details><summary>Can construction happen around ongoing operations?</summary><p>Yes. Plenium has phased work around active resorts, healthcare facilities, schools, fire stations, and operating support buildings.</p></details>
        </div>
      </section>

      <section className="final"><h2>Bring us the ambitious part.</h2><a className="cta" href={ctaHref}>Start a project <Arrow /></a></section>

      <footer>
        <div className="footer-main"><img className="footer-symbol" src="/images/brand_graphic_logo_white-357159465d.png" alt="Plenium Builders symbol" /><div><h3>Visit</h3><p>825 Steneri Way<br />Sparks, NV 89431</p></div><div><h3>Connect</h3><p><a href="tel:+17753980123">775.398.0123</a><br /><a href="mailto:info@pleniumbuilders.com">info@pleniumbuilders.com</a></p></div></div>
        <div className="legal"><span>Plenium Builders © 2026</span><span>NV #76482 · CA #983684</span></div>
      </footer>
    </main>
  );
}
