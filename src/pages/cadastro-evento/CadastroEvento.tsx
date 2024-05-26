import { Event } from '../../models/Event';
// import React, { useState } from 'react'
// import NavBar from '../../components/navbar/NavBar'
// import { PublicType } from '../../models/Event'

// export const CadastroEvento = () => {
//     const [publico, setPublico] = useState<PublicType>();

//     const handlePublico = (publico: string) => {

//     }

//     return (
//         <div>
//             <NavBar />
//             <h2>Cadastre seu evento</h2>
//             <form>
//                 <div className='form--label--item'>
//                     <label htmlFor="name">Nome do evento</label>
//                     <input placeholder="Nome do evento" name='name' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="description">Descrição do evento</label>
//                     <input placeholder='Descrição do evento' name='description' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Qual o público o seu evento?</label>
//                     <input name='' type="text" />
//                     <div className='publicOptions'>
//                         <button className={publico === Role.ROLE_USER ? "btn-check" : "btn-button"} onClick={() => handlePublico(Role.ROLE_USER)}>Gamer</button>
//                         <button className=''>Público Feminino</button>

//                     </div>
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Endereço</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Link de inscrição</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Jogo</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Data</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Horário</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Informações adicionais</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Inclusão de anexos e imagens</label>
//                     <input name='' type="text" />
//                 </div>

//                 <h3>Cadastrar cartão</h3>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Bandeira do cartão</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Data de validade</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Número do cartão</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Código de segurança</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">Titular</label>
//                     <input name='' type="text" />
//                 </div>
//                 <div className='form--label--item'>
//                     <label htmlFor="">CPF do titular</label>
//                     <input name='' type="text" />
//                 </div>
//             </form>
//         </div>
//     )
// }
