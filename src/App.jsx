import { useEffect, useState } from 'react'
import './App.css'
import analisesImagem from './assets/Analises.jpg'
import aparelhosImagem from './assets/Aparelhos.jpg'
import clareamentoImagem from './assets/Clareamento.avif'
import limpezaImagem from './assets/Limpesa.jpg'
import profissional1Imagem from './assets/Profissional1.jpg'
import profissional2Imagem from './assets/Profissional2.jpg'
import profissional3Imagem from './assets/Profissional3.jpg'
import video1 from './assets/Video1.mp4'
import video2 from './assets/Video2.mp4'
import video3 from './assets/Video3.mp4'

const videosCabecalho = [video1, video2, video3]

const servicos = [
  {
    numero: '01',
    nome: 'Limpeza e prevenção',
    imagem: limpezaImagem,
    descricaoImagem: 'Limpeza e prevenção odontológica',
  },
  {
    numero: '02',
    nome: 'Ortodontia',
    imagem: aparelhosImagem,
    descricaoImagem: 'Aparelhos ortodônticos',
  },
  {
    numero: '03',
    nome: 'Clareamento',
    imagem: clareamentoImagem,
    descricaoImagem: 'Clareamento dental',
  },
  {
    numero: '04',
    nome: 'Avaliação completa',
    imagem: analisesImagem,
    descricaoImagem: 'Análise odontológica',
  },
]

const equipe = [
  {
    nome: 'Dra. Helena Martins',
    especialidade: 'Clínica geral',
    imagem: profissional1Imagem,
  },
  {
    nome: 'Dr. Caio Nunes',
    especialidade: 'Ortodontia',
    imagem: profissional2Imagem,
  },
  {
    nome: 'Dra. Sofia Lima',
    especialidade: 'Estética dental',
    imagem: profissional3Imagem,
  },
]

function App() {
  const [indiceVideo, setIndiceVideo] = useState(0)
  const [reduzirMovimento, setReduzirMovimento] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const consultaMovimento = window.matchMedia('(prefers-reduced-motion: reduce)')
    const atualizarPreferencia = (evento) => setReduzirMovimento(evento.matches)

    consultaMovimento.addEventListener('change', atualizarPreferencia)
    return () => consultaMovimento.removeEventListener('change', atualizarPreferencia)
  }, [])

  function impedirEnvio(evento) {
    evento.preventDefault()
  }

  return (
    <>
      <header className="cabecalho" id="inicio">
        {!reduzirMovimento && (
          <video
            key={videosCabecalho[indiceVideo]}
            className="cabecalho-video"
            src={videosCabecalho[indiceVideo]}
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onEnded={() => setIndiceVideo((indice) => (indice + 1) % videosCabecalho.length)}
          />
        )}
        <div className="cabecalho-sobreposicao" aria-hidden="true" />
        <a className="marca" href="#inicio" aria-label="OdontoVida, início">
          Odonto<span>Vida</span>
        </a>
        <nav className="navegacao" aria-label="Navegação principal">
          <a href="#inicio">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="apresentacao">
          <p className="sobretitulo sobretitulo-claro">OdontoVida · cuidado próximo</p>
          <h1>
            Sorria com confiança.
            <br />
            Cuidado odontológico completo para toda a família, em um ambiente
            acolhedor e moderno.
          </h1>
          <a className="botao botao-claro" href="#contato">
            Agende sua consulta <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="hero-nota" aria-hidden="true">Odontologia com cuidado humano</span>
      </header>

      <main>
        <section className="sobre secao-clara" id="sobre">
          <div className="sobre-grade">
            <div className="sobre-lateral">
              <p className="sobretitulo">Nossa clínica</p>
              <h2>Sobre a OdontoVida</h2>
              <div className="valores">
                <span className="detalhe-numero">01 / Nosso jeito</span>
                <h3>Valores que sustentam nosso trabalho</h3>
                <p>
                  Ética, empatia e excelência técnica em cada atendimento — com
                  humanização do início ao fim e compromisso total com o seu
                  resultado.
                </p>
              </div>
            </div>
            <div className="sobre-conteudo">
              <h3 className="sobre-chamada">
                Mais do que tratar sorrisos, cuidamos de pessoas: conheça os
                princípios que norteiam cada atendimento na OdontoVida.
              </h3>
              <p>
                Há mais de 10 anos, a Clínica OdontoVida se dedica a transformar
                sorrisos e devolver a autoestima de seus pacientes. Contamos com
                uma equipe multidisciplinar de dentistas especializados,
                comprometidos em oferecer um atendimento humanizado, técnico e
                personalizado para cada paciente.
              </p>
              <p>
                Acreditamos que ir ao dentista não precisa ser motivo de medo ou
                desconforto. Por isso, investimos em tecnologia de ponta e em um
                ambiente pensado para proporcionar bem-estar do início ao fim
                do tratamento.
              </p>
            </div>
          </div>

          <div className="servicos" id="servicos">
            <div className="cabecalho-secao">
              <div>
                <p className="sobretitulo">Cuidado em cada etapa</p>
                <h2>Serviços</h2>
              </div>
              <p className="apoio-secao">
                Um plano de cuidado pensado para o seu sorriso e para a sua rotina.
              </p>
            </div>
            <div className="servicos-grade">
              {servicos.map((servico) => (
                <article className="cartao-servico" key={servico.numero}>
                  <img
                    className="servico-imagem"
                    src={servico.imagem}
                    alt={servico.descricaoImagem}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="servico-numero">{servico.numero}</span>
                  <span className="servico-linha" aria-hidden="true" />
                  <h3>{servico.nome}</h3>
                  <span className="servico-seta" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="equipe" id="equipe">
          <div className="cabecalho-secao">
            <div>
              <p className="sobretitulo">Gente que cuida de gente</p>
              <h2>Nosso time</h2>
            </div>
            <p className="apoio-secao">
              Profissionais experientes, atentos a você em todos os detalhes.
            </p>
          </div>
          <div className="equipe-grade">
            {equipe.map((profissional, indice) => (
              <article
                className={`cartao-equipe cartao-equipe-${indice + 1}`}
                key={profissional.nome}
              >
                <img
                  className="equipe-foto"
                  src={profissional.imagem}
                  alt={`Foto de ${profissional.nome}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="equipe-identificacao">
                  <h3>{profissional.nome}</h3>
                  <p>{profissional.especialidade}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contato-fundo" id="contato">
          <div className="contato-painel">
            <div className="contato-informacoes">
              <p className="sobretitulo sobretitulo-claro">Estamos por aqui</p>
              <h2>Vamos cuidar do seu sorriso?</h2>
              <div className="informacao-item">
                <span>Endereço</span>
                <p>Rua das Acácias, 120 · Centro</p>
              </div>
              <div className="informacao-item">
                <span>Telefone</span>
                <a href="tel:+551140002026">(11) 4000-2026</a>
              </div>
              <a className="link-social" href="#redes-sociais">
                Acompanhe a OdontoVida <span aria-hidden="true">↗</span>
              </a>
            </div>

            <form className="formulario" onSubmit={impedirEnvio}>
              <div className="formulario-cabecalho">
                <p className="sobretitulo">Primeiro passo</p>
                <h2>Entre em contato</h2>
                <p>Preencha seus dados e conte como podemos ajudar.</p>
              </div>
              <label>
                Tipo de serviço
                <select defaultValue="">
                  <option value="" disabled>Selecione uma opção</option>
                  {servicos.map((servico) => (
                    <option key={servico.numero}>{servico.nome}</option>
                  ))}
                </select>
              </label>
              <div className="formulario-linha">
                <label>
                  Nome completo
                  <input type="text" placeholder="Como podemos chamar você?" />
                </label>
                <label>
                  Telefone
                  <input type="tel" placeholder="(00) 00000-0000" />
                </label>
              </div>
              <label>
                E-mail
                <input type="email" placeholder="voce@email.com" />
              </label>
              <label>
                Como podemos ajudar?
                <textarea rows="3" placeholder="Conte um pouco do que precisa..." />
              </label>
              <button className="botao botao-escuro" type="submit">
                Enviar mensagem <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="rodape" id="redes-sociais">
        <a className="marca marca-rodape" href="#inicio">Odonto<span>Vida</span></a>
        <div className="rodape-redes">
          <span>Redes sociais</span>
          <div>
            <a href="#redes-sociais">Instagram</a>
            <a href="#redes-sociais">Facebook</a>
            <a href="#redes-sociais">WhatsApp</a>
          </div>
        </div>
        <p>© 2026 OdontoVida. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
