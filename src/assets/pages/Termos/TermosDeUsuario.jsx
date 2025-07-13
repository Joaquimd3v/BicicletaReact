import React from "react";
import "./Termos.css";

const TermosUsuario = () => {
  return (
    <main>
      <div className="titulo-bg">
        <div className="titulo container">
          <p className="font-2-l-b cor-c5">Termos de usuário</p>
          <h1 className="font-1-xxl cor-branco">
            termos e condições<span className="cor-p1">.</span>
          </h1>
        </div>
      </div>

      <div className="termos container font-2-s cor-c10">
        <h2 className="font-1-l cor-c11">1. Contrato de Uso do Site</h2>
        <p>
          Este contrato estabelece os termos de uso entre o usuário e a Vireon
          Legacy, regulando o acesso, navegação e utilização dos serviços
          oferecidos por meio deste site.
        </p>

        <h2 className="font-1-l cor-c11">1.1. Aceitação</h2>
        <p>
          Ao acessar e utilizar o site da Vireon Legacy, o usuário declara ter
          lido, compreendido e aceitado integralmente este contrato. Caso não
          concorde com qualquer cláusula, o uso deve ser imediatamente
          interrompido.
        </p>

        <h2 className="font-1-l cor-c11">1.2. Cadastro de Usuário</h2>
        <p>
          Algumas funcionalidades podem exigir a criação de uma conta. O usuário
          se compromete a fornecer informações verdadeiras e atualizadas, sendo
          responsável por manter a confidencialidade de seus dados de acesso.
        </p>

        <h2 className="font-1-l cor-c11">1.3. Responsabilidades do Usuário</h2>
        <p>
          O usuário compromete-se a utilizar o site apenas para fins legais e
          éticos, abstendo-se de práticas que violem leis, regulamentações ou
          direitos de terceiros.
        </p>

        <h2 className="font-1-l cor-c11">1.4. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo presente neste site, incluindo textos, imagens,
          marcas, logotipos e elementos de design, é protegido por direitos
          autorais e pertence à Vireon Legacy ou a seus respectivos autores,
          sendo proibida a reprodução sem autorização prévia.
        </p>

        <h2 className="font-1-l cor-c11">1.5. Suspensão e Encerramento</h2>
        <p>
          A Vireon Legacy se reserva o direito de suspender ou encerrar o acesso
          de usuários que descumprirem os termos aqui estabelecidos, sem
          necessidade de aviso prévio.
        </p>

        <h2 className="font-1-l cor-c11">1.6. Limitação de Responsabilidade</h2>
        <p>
          A Vireon Legacy não se responsabiliza por danos diretos, indiretos ou
          incidentais decorrentes do uso ou da impossibilidade de uso do site,
          incluindo falhas técnicas, indisponibilidade de serviços ou perda de
          dados.
        </p>

        <h2 className="font-1-l cor-c11">1.7. Modificações no Contrato</h2>
        <p>
          Este contrato pode ser modificado a qualquer momento, a critério
          exclusivo da Vireon Legacy. As alterações entram em vigor
          imediatamente após sua publicação no site. Recomendamos a leitura
          periódica.
        </p>

        <h2 className="font-1-l cor-c11">1.8. Foro e Legislação Aplicável</h2>
        <p>
          Este contrato será regido pelas leis brasileiras. Em caso de litígio,
          fica eleito o foro da comarca de Recife, Pernambuco, como competente
          para dirimir quaisquer questões decorrentes deste documento.
        </p>

        <h2 className="font-1-l cor-c11">1.9. Aviso Acadêmico</h2>
        <p>
          Este site é parte de um projeto acadêmico sem fins lucrativos. Algumas
          referências visuais e estruturais foram inspiradas em materiais da
          comunidade Figma, com conteúdo adaptado para fins de apresentação de
          TCC.
        </p>
      </div>
    </main>
  );
};

export default TermosUsuario;
