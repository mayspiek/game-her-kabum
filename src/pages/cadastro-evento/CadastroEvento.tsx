import React, { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import { PublicType } from '../../models/Event'
import './CadastroEvento.styles.css'
import { Button } from '../../components/button/Button'
export const CadastroEvento = () => {
    const [publico, setPublico] = useState<PublicType>();

    const handlePublico = (publico: PublicType) => {
        setPublico(publico);
    }

    return (
        <>
            <NavBar />
            <div className='eventRegisterWrapper'>
                <h2>Cadastre seu evento</h2>
                <form className='cadastro--evento--form'>
                    <div className='form--label--item'>
                        <label htmlFor="name">Nome do evento</label>
                        <input placeholder="Nome do evento" name='name' type="text" />
                    </div>
                    <div className='form--label--item'>
                        <label htmlFor="description">Descrição do evento</label>
                        <input placeholder='Descrição do evento' name='description' type="text" />
                    </div>
                    <div className='form--label--item'>
                        <label htmlFor="">Qual o público o seu evento?</label>
                        <div className='publicOptions'>
                            <button className={publico === PublicType.GENERAL ? "btn-check" : "btn-button"} onClick={() => handlePublico(PublicType.GENERAL)}>Público Geral</button>
                            <button className={publico === PublicType.FEMALE ? "btn-check" : "btn-button"} onClick={() => handlePublico(PublicType.FEMALE)}>Público Feminino</button>
                        </div>
                    </div>
                    <div className='form--label--item'>
                        <label htmlFor="">Endereço</label>
                        <input name='' type="text" />
                    </div>
                    <div className='form--label--item'>
                        <label htmlFor="">Link de inscrição</label>
                        <input name='' type="text" />
                    </div>
                    <div className="dateInformation">
                        <div className='form--label--item'>
                            <label htmlFor="">Jogo</label>
                            <select name="" id="">
                                <option value="lol">LOL</option>
                                <option value="fifa">FIFA</option>
                                <option value="fifa">Fortnite</option>
                                <option value="fifa">FreeFire</option>
                                <option value="fifa">Counter Strike</option>
                            </select>
                        </div>
                        <div className='form--label--item'>
                            <label htmlFor="">Data</label>
                            <input name='' type="date" />
                        </div>
                        <div className='form--label--item'>
                            <label htmlFor="">Horário</label>
                            <input name='' type="time" />
                        </div>
                    </div>
                    <div className='form--label--item'>
                        <label htmlFor="">Informações adicionais</label>
                        <input name='' type="text" />
                    </div>
                    <div className='form--label--item'>
                        <label htmlFor="">Inclusão de anexos e imagens</label>
                        <input name='' type="text" />
                    </div>

                    <h3>Cadastrar cartão</h3>
                    <div className="validacaoCartao">
                        <div className='form--label--item'>
                            <label htmlFor="">Bandeira do cartão</label>
                            <select name="" id="">
                                <option value="visa">Visa</option>
                                <option value="master">Master</option>
                                <option value="elo">Elo</option>
                                <option value="amex">Amex</option>
                            </select>
                        </div>
                        <div className='form--label--item'>
                            <label htmlFor="">Data de validade</label>
                            <input name='' type="Date" />
                        </div>
                    </div>
                    <div className="cardInfo">
                        <div className='form--label--item'>
                            <label htmlFor="">Número do cartão</label>
                            <input name='' type="text" />
                        </div>
                        <div className='form--label--item'>
                            <label htmlFor="">Código de segurança</label>
                            <input name='' type="text" />
                        </div>
                        <div className='form--label--item'>
                            <label htmlFor="">Titular</label>
                            <input name='' type="text" />
                        </div>
                        <div className='form--label--item'>
                            <label htmlFor="">CPF do titular</label>
                            <input name='' type="text" />
                        </div>
                    </div>

                    <Button type='submit'> Cadastrar </Button>
                </form>
            </div>
        </>
    )
}
