import React from 'react';
import './styles.css';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="container">

      <div className="header">
        <img src="/logo-gameher.png" alt="Game.Her Logo" className="logo" />
        <Navbar/>
        <div  className="nav">
          <a href="#">Início</a>
          <a href="#">Sobre</a>
        </div>
      </div>

      <div className="content">
        <div className="section">
          <h2>Saiba mais sobre o Game.Her</h2>
          <p>
            Queremos aumentar a visibilidade e a participação feminina nos jogos, criando um espaço onde meninas e mulheres possam descobrir eventos emocionantes e se conectar com outras jogadoras.
            A Game.Her Hub é um dos maiores e mais relevantes para o público feminino nos jogos, que celebra a presença feminina no mundo dos games.
            Encontre eventos que se adequam a você e ajude-nos a construir uma comunidade de jogadoras engajadas e empoderadas.
          </p>
        </div>

        <div className="section">
          <div className="card">
            <h3>Game.Her</h3>
            <p>
              Temos o objetivo de facilitar o acesso a jogos focados em mulheres, garantindo que essas oportunidades sejam amplamente conhecidas e que a rivalidade da habilidade no jogo prevaleça.
              Além disso, oferecemos um ambiente onde jogadoras se encontram e interagem, promovendo uma comunidade mais sólida e presente no mundo dos jogos.
              Desse modo, a Game.Her fornece informação e recursos que ajudam meninas e mulheres a se envolverem ativa e profundamente na participação e em torneios, além do desenvolvimento de habilidades técnicas.
            </p>
          </div>

          <div className="card">
            <h3>Como cadastrar eventos</h3>
            <ul>
              <li>Crie uma conta: Organizadores de eventos podem começar criando uma conta na Game.Her, isso permite o acesso ao painel de controle da plataforma.</li>
              <li>Preencha os Detalhes do Evento: No painel de controle, clique em "Cadastrar Evento" e preencha todos os detalhes relevantes, como nome do evento, data, horário, local, informações promocionais online, tipo de jogo, requisitos de inscrição e uma breve descrição.</li>
              <li>Adicione Imagens e Links: Insira imagens e links importantes, como as siglas de inscrição ou redes sociais relacionadas ao seu evento.</li>
              <li>Revise e Envie: Após preencher todas as informações, revise os detalhes para garantir precisão e clique em "Enviar". Nossa time revisará e aprovará seu pedido.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Como acessar informações sobre eventos</h3>
            <ul>
              <li>Navegue pelo Calendário: Acesse o calendário de eventos na página principal da Game.Her Hub. Use a interface amigável para navegar por datas e encontrar eventos que estão em nosso espaço para sua regional (ou em outras presenciais) que estão.</li>
              <li>Use Filtros Personalizados: Utilize filtros avançados para refinar sua busca. Você pode filtrar eventos por tipo de jogo, localização, modalidade online ou presencial, e data e taxa.</li>
              <li>Visualize Detalhes do Evento: Clique no evento de interesse para acessar informações detalhadas,  incluindo a descrição do evento, datas e horários, formas de participação, requisitos de inscrição, e contato para receber notificações sobre novos eventos e torneios dos eventos em que você se inscreveu. Assim, você nunca perderá uma oportunidade de participar.</li>
            </ul>
          </div>
        </div>

        <div className="cta">
          <button>Realize o seu cadastro na plataforma!</button>
          <p>Já possui uma conta? <a href="#">Faça o login</a></p>
        </div>

        <div className="section">
          <h3>Contato</h3>
          <div className="contact-info">
            <a href="mailto:contato@gameher.com"><i className="fa fa-envelope"></i> contato@gameher.com</a>
            <a href="https://www.instagram.com/jogoafogameher"><i className="fa fa-instagram"></i> @jogoafogameher</a>
            <a href="tel:+551193234-4678"><i className="fa fa-phone"></i> +55 (11) 93234-4678</a>
            <a href="https://www.suportagameher.com.br"><i className="fa fa-globe"></i> www.suportagameher.com.br</a>
            <a href="mailto:suporte@gameher.com"><i className="fa fa-envelope"></i> suporte@gameher.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;