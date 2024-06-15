
const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen my-5 bg-img-1">
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-slate-50">React es una biblioteca de JavaScript para crear interfaces de usuario</h1>
                        <p className="mb-5 text-white">React permite crear proyectos legibles, limpios y fáciles de mantener en cuestión de minutos. Esto es especialmente beneficioso para los desarrolladores</p>
                        <button className="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">Ir a la web oficial de React</button>
                    </div>
                </div>
            </div>
            
            <div className="hero min-h-screen my-3 bg-img-2">
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-slate-950">DummyJSON es una herramienta que proporciona una API REST falsa de datos JSON</h1>
                        <p className="mb-5 text-black">React permite crear proyectos legibles, limpios y fáciles de mantener en cuestión de minutos. Esto es especialmente beneficioso para los desarrolladores</p>
                        <button className="bg-transparent hover:bg-white text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded">Ir a la web oficial de React</button>
                    </div>
                </div>
            </div>
            
            <div className="hero min-h-screen my-3 bg-img-3">
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-sky-500	">Acelera el diseño de tu página web con Tailwind CSS</h1>
                        <p className="mb-5 text-cyan-400">Tailwind CSS es un framework de diseño de código abierto que te permite crear páginas web de forma rápida y eficiente. Con su enfoque basado en utilidades, Tailwind CSS te brinda un conjunto completo de clases predefinidas que puedes utilizar para diseñar tu sitio web de manera fácil y sin la necesidad de escribir CSS personalizado.</p>
                        <button className="bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded">Ir a la web oficial de React</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero