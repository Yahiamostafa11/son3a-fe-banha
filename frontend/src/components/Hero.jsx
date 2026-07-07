import '../styles/Hero.css'
import { useLanguage } from '../context/LanguageContext'

import logo_blue from '../assets/home/logo_blue.png'
import hero_circle from '../assets/home/hero_circle.png'
import paper_plane from '../assets/home/paper_plane.png'
import dashed_line from '../assets/home/dashed_line.png'
import three_heros from '../assets/home/three_heros.png'
import board from '../assets/home/board.png'
import brush from '../assets/home/brush.png'
import corn from '../assets/home/corn.png'
import helmet from '../assets/home/helmet.png'

function Hero() {
  const { t } = useLanguage()

  return (
    
    <section className="hero" id="hero-section">

      {/* Left Side */}
      <div className="hero-left reveal-left">

        <img src={hero_circle} className="hero-circle" alt="" />
        <img src={three_heros} className="three-heros" alt="" />

        <img src={brush} className="brush" alt="" />
        <img src={corn} className="corn" alt="" />
        <img src={board} className="board" alt="" />

      </div>

      {/* Right Side */}
      <div className="hero-right reveal-right">

        <div className="hero-logo-container">

          <img src={logo_blue} className="hero-logo" alt="" />
          <img src={helmet} className="helmet" alt="" />

          <img src={paper_plane} className="paper-plane" alt="" />
          <img src={dashed_line} className="dashed-line" alt="" />

        </div>

        <h2>{t('hero_desc')}</h2>

        <button className="hero-btn">
          {t('hero_btn_upload')}
        </button>

      </div>

    </section>
  )
}

export default Hero