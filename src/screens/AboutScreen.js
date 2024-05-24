import React from "react";

function AboutScreen() {
    return (
        <div>
            <section className="about-section-1">
                <div className="about-section-1-over">
                    <h2>¿Quienes sómos?</h2>
                    <p>BR Agro es una empresa comprometida con las ciencias agrícolas, dedicada a proporcionar soluciones innovadoras y sostenibles para la protección de los cultivos. Desde el desarrollo hasta la implementación de sistemas y la adopción de soluciones biológicas modernas, nos apasiona ofrecer a los productores mexicanos herramientas nuevas y eficaces.</p>

                    <p>Nos destacamos por nuestra búsqueda constante de la excelencia y la innovación. Nuestro enfoque se centra en desarrollar soluciones que no solo sean efectivas, sino también respetuosas con el medio ambiente y beneficiosas para la salud de los cultivos y las comunidades agrícolas.</p>

                    <p>En BR Agro, entendemos las complejidades y desafíos que enfrentan los productores en un entorno agrícola en constante cambio. Por ello, nos esforzamos por estar a la vanguardia de la investigación y el desarrollo, brindando a nuestros clientes las herramientas y el conocimiento necesarios para prosperar en un mercado competitivo y en evolución.</p>

                </div>
            </section>
            <section style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <div>
                    <h2 className="section-title2">NUESTOS INICIOS</h2>
                </div>
                <div className="about-section">
                    <div>

                        <p>En 2019, BR Agro se fundó gracias a la visión del Ingeniero en Agronomía, Benito Reyes, quien identificó una oportunidad en el campo mexicano y decidió emprender desde el estado de Puebla. Con el tiempo, hemos desarrollado nuevas fórmulas y nuestro catálogo está en constante evolución.</p>

                        <p>Además, hemos establecido alianzas estratégicas con distribuidores y tiendas de agroinsumos en todo México, expandiendo nuestra presencia a lo largo del país. En 2023, fortalecimos nuestra presencia global al establecer alianzas con empresas en Asia y Europa, lo que nos ha permitido continuar creciendo y ofrecer a los productores mexicanos productos de excelente calidad a precios más accesibles.</p>

                        <p>Nuestros productos han sido probados y respaldados por miles de productores en todo el país, con ayuda de nuestros <strong>Socios Comerciales y Distribuidores Autorizados</strong> quienes han encontrado en BR Agro la mejor opción para optimizar sus cultivos y hacer más rentable la producción agrícola.</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/media/ceo-profile.jpg'} alt="inclusividad" />
                    </div>
                </div>

            </section>
            <section style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <div>
                    <h2 className="section-title2">VISIÓN</h2>
                </div>
                <div className="about-section">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/media/vision-pic.png'} alt="vision-pic" />
                    </div>
                    <div class="vision-content">
                        <p>En BR Agro, nos esforzamos por ser líderes en la industria de productos agroquímicos, innovando constantemente para proporcionar soluciones efectivas y sostenibles que impulsen el éxito de nuestros clientes y contribuyan al bienestar del medio ambiente.</p>
                        <p>Buscamos ser reconocidos por nuestro compromiso con la calidad, la seguridad y la responsabilidad social, estableciendo estándares ejemplares en todo lo que hacemos. Nos dedicamos a crear un mundo agrícola más próspero y equilibrado, donde la agricultura sea más eficiente, sostenible y rentable para todos.</p>
                    </div>
                </div>

            </section>
            <section style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <div>
                    <h2 className="section-title2">MISIÓN</h2>
                </div>
                <div className="about-section">
                    <div class="mission-content">
                        <p>En BR Agro, nuestra misión es proporcionar soluciones innovadoras y de alta calidad en productos agroquímicos que contribuyan al aumento de la productividad y la sostenibilidad en la agricultura. Nos esforzamos por ser socios confiables de nuestros clientes, brindándoles productos seguros y efectivos que les ayuden a enfrentar los desafíos del campo y alcanzar sus metas de producción.</p>
                        <p>Buscamos promover prácticas agrícolas responsables y respetuosas con el medio ambiente, minimizando el impacto negativo de nuestros productos y fomentando el uso responsable de los recursos naturales. Estamos comprometidos con la mejora continua y la excelencia en todo lo que hacemos, con el objetivo de contribuir al desarrollo sostenible de la agricultura y al bienestar de las comunidades agrícolas en todo el mundo.</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/media/mision-br.png'} alt="inclusividad" />
                    </div>
                </div>

            </section>
            <section className="about-2">
                <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center"
                }}>
                    <h2>Nuestros Valores</h2>
                    <div className="valores-icons-container">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/media/commitment.png'} alt="compromiso" />
                            <h3>Compromiso</h3>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/media/security.png'} alt="seguridad" />
                            <h3>Seguridad</h3>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/media/servicio.png'} alt="servicio" />
                            <h3>Servicio</h3>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/media/honesty.png'} alt="honestidad" />
                            <h3>Honestidad</h3>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/media/sostenible.png'} alt="sostenible" />
                            <h3>Sostenibilidad</h3>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/media/inclusive.png'} alt="inclusividad" />
                            <h3>Inclusividad</h3>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AboutScreen;