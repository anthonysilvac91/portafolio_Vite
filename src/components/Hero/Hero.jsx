import React from 'react'
import './Hero.css'
import html from '../../../assets/01_icon_html.png'
import js from '../../../assets/02_icon_js.png'
import css from '../../../assets/03_icon_css.png'
import perfil from '../../../assets/as_foto_perfil.png'


const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>bla bla bla bla blabl ablalalala</h2>
            <p>blablablalblblablablalfalsdfsjfsj jsdjfjs sd sjdfsfsjfn sdjfnsfn jksdfnsfd nsdklfsdfmdsfskk sdkfjsf</p>
        </div>

        <div className='hero-img'>
            <div>
                <img src={perfil} alt="foto_perfil" />  
            </div>
            <div>
                <div className='tech-icon'>
                    <img src={html} alt="html_logo" />
                </div>
                <div className='tech-icon'>
                    <img src={js} alt="js_logo" />
                </div>
                <div className='tech-icon'>
                    <img src={css} alt="css_logo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero