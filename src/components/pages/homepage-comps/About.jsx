import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="Sobre mi" 
        className='relative w-full md:h-screen text-white h-unset'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>Sobre mi </h2>
                    </div>

                    <p className="mb-4 py-6">Me defino como una persona apasionada por el aprendizaje y las nuevas tecnologías, mi propósito es incorporarme al mundo laboral y tener una oportunidad de desarrollarme profesionalmente.
                    
                    
                   

                    </p>
                    <p className="mb-4 py-6">
                    Estoy a punto de completar mi curso como Técnico Superior en Desarrollo de Aplicaciones Web, lo que me ha proporcionado una base sólida que creo puede ser útil para las empresas que me contraten, pero mi principal deseo es aprender a resolver las necesidades de los clientes, así como de crear soluciones.

                    </p>
                    <p>Mi interés principal es encontrar una empresa que me permita  llevar a cabo las prácticas para  obtener mi título, consolidar mis  conocimientos y contribuir significativamente para que cuando acaben las prácticas se planteen contratarme en su plantilla.</p>

                   
            </div>

            <ScrollLink to="Proyectos" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
