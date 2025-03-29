import React from "react";
import { Helmet } from "react-helmet-async";


function AboutScreen() {
    return (
        <div className="about-page">
            <Helmet>
                <title>BR Agro - Nosotros</title>
                <meta
                    name="description"
                    content="Optimiza tu producción agrícola con los mejores agroquímicos del mercado. BR Agro ofrece fertilizantes, insecticidas y soluciones innovadoras para el campo."
                />
                <meta
                    name="keywords"
                    content="Agroquímicos, fertilizantes agrícolas, insecticidas, BR Agro, protección de cultivos, distribuidores agroquímicos, soluciones agrícolas, nutrición vegetal, bioestimulantes"
                />
                <meta name="author" content="isaSoft" />
            </Helmet>

            {/* Sección 1: Introducción con Mapa */}
            <section className="about-intro">
                <div className="about-intro-container">

                    {/* Texto a la izquierda */}
                    <div className="about-intro-text">
                        <h2>Expansión con Impacto</h2>
                        <p>
                            En <strong>BR Agro</strong>, estamos construyendo una red de agrónomos con visión de crecimiento.
                            Nuestro modelo de negocio no solo se basa en la venta de agroinsumos, sino en el desarrollo
                            de <strong>emprendedores del campo</strong>, jóvenes que buscan generar impacto, estabilidad
                            económica y un futuro próspero para el sector agrícola en México.
                        </p>
                    </div>

                    {/* Mapa de México a la derecha */}
                    <div className="about-intro-map">
                        <img src={process.env.PUBLIC_URL + "/media/map1.png"} alt="Mapa de México BR Agro" />
                    </div>

                </div>
            </section>

            {/* Sección 2: Biografía del Fundador */}
            <section className="founder-section">
                <div className="founder-image">
                    <img src={process.env.PUBLIC_URL + "/media/mision-br.png"} alt="Visión BR Agro" />
                </div>
                <div className="founder-text">
                    <h2>Una Visión que Transforma</h2>
                    <h3>Visión</h3>
                    <p>
                        En BR Agro creemos que el campo mexicano necesita más que productos: necesita <strong>personas preparadas</strong> y oportunidades reales de crecimiento.
                    </p>
                    <p>
                        Nuestra visión es construir una red nacional de <strong>emprendedores agrícolas</strong>, brindándoles acceso a herramientas, conocimiento y modelos de negocio rentables para impulsar el desarrollo del sector y transformar vidas en las comunidades rurales.
                    </p>
                </div>
            </section>
            {/* Sección 3: Historia de BR Agro */}
            <section className="company-history">
                <div className="history-text">
                    <h2>Nuestros Inicios</h2>
                    <p>
                        BR Agro nació en <strong>2019</strong> en Puebla con un objetivo claro:
                        revolucionar el sector agropecuario mexicano. Desde sus primeros días, la empresa
                        apostó por la innovación y la accesibilidad en los productos para los productores nacionales.
                    </p>
                    <p>
                        Con el tiempo, nos dimos cuenta de que nuestra verdadera fortaleza estaba en la
                        <strong> comunidad de agrónomos</strong> que creíamos, aquellos que confían en nuestra visión y
                        encuentran en BR Agro una plataforma para <strong>construir su futuro</strong>.
                    </p>
                </div>
                <div className="history-image">
                    <img src={process.env.PUBLIC_URL + "/media/shipping.png"} alt="Crecimiento BR Agro" />
                </div>
            </section>

            {/* Sección 4: Expansión Nacional y Red de Agrónomos */}
            <section className="expansion-strategy">
                <h2>Construyendo una Red de Líderes Agrónomos</h2>
                <p>
                    No creemos en la competencia individual. Creemos en la <strong> colaboración </strong>
                    como la clave para transformar el campo mexicano. Por eso, nuestra estrategia de expansión
                    está basada en la <strong> formación de redes de agrónomos</strong>, donde cada miembro
                    crece junto con nosotros.
                </p>
                <p>
                    Nuestro enfoque va más allá de la distribución de agroquímicos. Desarrollamos
                    <strong> modelos de negocio sostenibles</strong> para que los jóvenes agrónomos puedan
                    emprender con confianza, generar ingresos y, al mismo tiempo, mejorar la producción agrícola en México.
                </p>
            </section>

            {/* Sección 5: Compromiso con el Campo Mexicano */}
            <section className="commitment-section">
                <div className="commitment-text">
                    <h2>Un Modelo de Crecimiento Justo y Sostenible</h2>
                    <p>
                        La agricultura mexicana merece un cambio. Nuestro compromiso es proporcionar soluciones
                        que no solo sean rentables, sino que también <strong>generen bienestar</strong>.
                        Al conectar a los productores con una <strong>red de agrónomos preparados</strong>,
                        estamos asegurando un futuro más sólido para el campo.
                    </p>
                    <p>
                        Creemos en el talento de los jóvenes. Creemos en su capacidad de transformar la agricultura.
                        Y sobre todo, creemos que cuando crecemos juntos, <strong>ganamos todos</strong>.
                    </p>
                </div>
                <div className="commitment-image">
                    <img src={process.env.PUBLIC_URL + "/media/main-img.png"} alt="Compromiso con el campo" />
                </div>
            </section>

        </div>
    );
}

export default AboutScreen;
