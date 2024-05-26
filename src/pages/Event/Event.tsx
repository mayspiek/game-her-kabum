import NavBar from "../../components/navbar/NavBar"
import SearchIcon from '../../assets/img/search-icon.png'
import { atualizacoes, recomendacaoEvento } from "../../data"
import arrow from '../../assets/img/arrow.png'
import './Event.styles.css'
import denuncia from '../../assets/img/denuncia.png'
import coracao from '../../assets/img/coracao.png'

export const Event = () => {
    return (
        <div className="event-wapper">
            <NavBar />
            <div className="eventBody">
                <h3>Participe dos principais eventos no mundo do game</h3>

                <div className="busca">
                    <label htmlFor="search" />
                    <input placeholder="Buscar eventos" name='search' type="text" />
                    <img src={SearchIcon} alt="Search Icon" />
                </div>
                <div className="disclaimer">
                    <h3>Atenção</h3>
                    <p>Nós não nos responsabilizamos pela organização e pelas premiações dos eventos. A responsabilidade e planejamento ficam direcionadas aos organizadores.</p>
                </div>
                <div className="eventsWrapper">
                    <h3>Recomendações de eventos</h3>
                    <div className="eventCardWrapper">
                        {recomendacaoEvento.map((evento, index) => (
                            <div className="event--card" key={index}>
                                <div>
                                    <p className="event--date">{evento.data}</p>
                                </div>
                                <div>
                                    <h3 className="event--title">{evento.titulo}</h3>
                                    <p className="event--desc">{evento.descricao}</p>
                                    <span>Saiba mais <img src={arrow} alt="Arrow Icon" /> </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="atualizacoes-wrapper">
                    <h3>Atualizações</h3>
                    <div className="atualizacoes">
                        {atualizacoes.map((event, index) => {
                            return (
                                <div className="atualizacao--card" key={index}>
                                    <img className="atualizacao--img" src={event.img} alt="" />
                                    <div className="atualizacao--title">
                                        <a href={event.href}>
                                            <h3 className="atualizacao--event--title">{event.title}</h3>
                                        </a>
                                        <div className="atualizacoes--icons">
                                            <img src={denuncia} alt="" />
                                            <img src={coracao} alt="" />
                                        </div>
                                    </div>
                                    <div className="localNDate">
                                        <p className="atualizacao--event--date">{event.date}</p>
                                        <p className="atualizacao--event--local">{event.local}</p>
                                    </div>
                                    <p className="atualizacao--event--desc">{event.description}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Event;
