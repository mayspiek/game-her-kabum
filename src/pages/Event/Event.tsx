import NavBar from "../../components/navbar/NavBar"
import SearchIcon from '../../assets/img/search-icon.png'
import { atualizacoes, recomendacaoEvento } from "../../data"
import './Home.styles.css'
import arrow from '../../assets/img/arrow.png'

export const Event = () => {
    return (
        <div className="homePage">
            <NavBar />
            <div className="eventBody">
                <h3>Participe dos principais eventos no mundo do game</h3>

                <div className="busca">
                    <label htmlFor="search" />
                    <input placeholder="Buscar eventos" name='search' type="text" />
                    <img src={SearchIcon} alt="" />
                </div>

                <h3>Atenção</h3>
                <p>Nós não nos responsabilizamos pela organização e pelas premiações dos eventos. A responsabilidade e planejamento ficam direcionadas aos organizadores.</p>

                <h3>Recomendações de eventos</h3>
                <div className="eventCardWrapper">
                    {recomendacaoEvento.map((evento, index) => {
                        return (
                            <div className="event--card">
                                <div>
                                    <p className="event--date">{evento.data}</p>
                                </div>
                                <div key={index}>
                                    <h3 className="event--title">{evento.titulo}</h3>
                                    <p className="event--desc">{evento.descricao}</p>
                                    <span>Saiba mais <img src={arrow} alt="" /> </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h3>Atualizações</h3>
                <div className="atualizacoes">
                    {atualizacoes.map((event, index) => {
                        return (
                            <a href={event.href}>
                                <div className="atualizacao--card" key={index}>
                                    <img className="atualizacao--img" src={event.img} alt="" />
                                    <h3 className="atualizacao--event--title">{event.title}</h3>
                                    <div className="localNDate">
                                        <p className="atualizacao--event--date">{event.date}</p>
                                        <p className="atualizacao--event--local">{event.local}</p>
                                    </div>
                                    <p className="atualizacao--event--desc">{event.description}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
