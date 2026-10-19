import Hobby from './Hobby.jsx'
import './App.css'
import './Hobby.css'

function App() {
  const hobbies = [
    {
      name: 'Analog photography',
      category: 'Slow creative practice',
      description:
        'Find the extraordinary in ordinary corners. Analog photography invites you to notice light, texture, and the little stories hiding in plain sight.',
      image:
        'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'A vintage camera resting on a wooden table',
      time: '2-4 hours / week',
      level: 'Beginner friendly',
    },
    {
      name: 'Pottery',
      category: 'Hands-on craft',
      description:
        'Shape clay with your hands and enjoy the meditative rhythm of making something useful, beautiful, and completely your own.',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Hands shaping clay on a pottery wheel',
      time: '3-5 hours / week',
      level: 'Beginner friendly',
    },
    {
      name: 'Cooking experiments',
      category: 'Kitchen creativity',
      description:
        'Try new flavors, perfect a recipe, and make family dinners feel like a little adventure worth savoring.',
      image:
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Fresh ingredients and a plated meal on a kitchen counter',
      time: '4-6 hours / week',
      level: 'All levels',
    },
    {
      name: 'Indoor gardening',
      category: 'Calm routine',
      description:
        'Grow herbs, small plants, and a more peaceful space at home while learning the joy of nurturing something alive.',
      image:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Indoor plant leaves in a bright sunlight room',
      time: '1-3 hours / week',
      level: 'Beginner friendly',
    },
    {
      name: 'Sketching',
      category: 'Creative focus',
      description:
        'Slow down and draw what you see around you. Sketching helps you notice details and build confidence one line at a time.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Person drawing in a notebook with pencils nearby',
      time: '2-4 hours / week',
      level: 'Beginner friendly',
    },
  ]

  const benefits = [
    {
      title: 'Mindful routines',
      text: 'Pick a hobby that gives your days a little more texture and less noise.',
    },
    {
      title: 'Creative energy',
      text: 'Turn spare time into a ritual that keeps your curiosity alive.',
    },
    {
      title: 'Low pressure',
      text: 'Start small, stay consistent, and enjoy learning without the stress.',
    },
  ]

  const quickStats = [
    { label: 'Hours saved', value: '16+' },
    { label: 'New ideas', value: 'weekly' },
    { label: 'Skill level', value: 'easy start' },
  ]

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">H</span>
          <span className="brand-name">Hobby Club</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#discover">Discover</a>
          <a href="#plans">Plans</a>
        </nav>

        <button type="button" className="nav-button">
          Start now
        </button>
      </header>

      <main className="page-content">
        <section className="hero-section" id="about">
          <div className="hero-copy">
            <p className="eyebrow">A little time, well spent</p>
            <h1>
              Pick a hobby that feels like <span>your reset</span>.
            </h1>
            <p className="intro-copy">
              Slow down, explore something new, and turn everyday hours into a habit you actually enjoy.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-button">
                Explore hobbies
              </button>
              <button type="button" className="secondary-button">
                See starter ideas
              </button>
            </div>
          </div>

          <div className="hero-panel" aria-label="Hobby summary panel">
            <div className="mini-card dark">
              <span>Weekend ritual</span>
              <strong>Camera walks</strong>
            </div>
            <div className="mini-card light">
              <span>Energy</span>
              <strong>Creative</strong>
            </div>
            <div className="hero-badge">
              <span>Best for</span>
              <strong>Quiet focus</strong>
            </div>
          </div>
        </section>

        <section className="stats-row" aria-label="Key stats">
          {quickStats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="feature-section" id="discover">
          <div className="section-heading">
            <p className="eyebrow">Why it works</p>
            <h2>Simple habits, better days.</h2>
          </div>

          <div className="feature-grid">
            {benefits.map((item) => (
              <article className="feature-card" key={item.title}>
                <span className="feature-icon" aria-hidden="true">✦</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <div className="section-heading">
            <p className="eyebrow">Pick one</p>
            <h2>Five hobbies worth trying.</h2>
          </div>

          <div className="hobby-grid">
            {hobbies.map((hobby) => (
              <Hobby key={hobby.name} {...hobby} />
            ))}
          </div>
        </section>

        <section className="cta-section" id="plans">
          <div>
            <p className="eyebrow">Ready to start?</p>
            <h2>Find your next small obsession.</h2>
          </div>
          <button type="button" className="primary-button">
            Join the club
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
