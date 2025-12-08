import React from 'react';

const Clients: React.FC = () => {
  // Using placeholders that look professional for the mockup

const clients = [
  "https://iblanco.com.br/wp-content/uploads/2025/11/COOCERQUI-MERCADO-1.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/BEM-BARATO.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/LITORAL-PLAZA.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/ARTESANAL.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/AO-PHARMACEUTICO-1.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/THE-BLUE.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/GASTROCLINIC.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/SKANIA.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/SEMPRE-FORTE.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/ROVAL.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/ROTARI.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_cemiterio_metropolitano.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/MODERNA-MANIPULACAO.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/ROSARIO-MANIPULACAO.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/ROSARIO.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/RELIVE-CLUB.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/PERFIL.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/PASSEIO-SAO-CARLOS.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/coop.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/COOCERQUI-DROGARIA-1.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/MULTIVITAL.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/MODERNA.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/MD-SOLUCOES.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/RELIVE-MED.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/MAGVITAM.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/KOKIMBOS.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/INDUSPARQUET.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/GRUPO-AMR.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/DI-GENIO.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_osan.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/IBERIA.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_pense_mais_farma.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/DAYARA.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/COOPERCICA-DROGARIA.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_ecovitam.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/FISIOCLINIC.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/emporio.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/iporanga.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/on-call.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_microlife.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/assifarma.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/medlevensohn.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/retiro.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/vitaup.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/vitta.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/ELO.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/maple.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/grupo-pense.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_relive.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_veromed.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_kaskin.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_dr_esau.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_farmacia_sempre_fort.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_suplen_mais.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_drogarias_brasileiras.png",
  "https://iblanco.com.br/wp-content/uploads/2025/11/logo_drogaria_estacao.png"
];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Alguns de nossos <span className="text-brand-orange">clientes</span>
        </h2>
        <p className="text-gray-400 mb-12 text-sm max-w-2xl mx-auto">
          Desde 1990 temos o privilégio de construir parcerias que nos enchem de orgulho.
          Agradecemos pela confiança e por nos permitir fazer parte de cada jornada.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client, i) => (
            <div 
                key={i} 
                onMouseMove={handleMouseMove}
                className="group relative px-6 py-4 bg-[#232323] rounded-lg border border-white/5 flex items-center justify-center transition-all duration-300 overflow-hidden"
            >
                {/* Interactive Glow Layer */}
                <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                    background: `radial-gradient(300px circle at var(--x) var(--y), rgba(255, 107, 0, 0.25), transparent 40%)`
                }}
                />

               {/* Simulating Logo with Text */}
               <img src={clients[i]} className="relative max-w-[100px] z-10 font-bold text-gray-300 text-sm group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-xs text-gray-600">E muitos outros clientes que confiam em nosso trabalho há mais de 35 anos</p>
      </div>
    </section>
  );
};

export default Clients;