import { CardType } from "../../models/Event";
import { EventCreateService } from '../../api/services/EventCreateService';
import { EventCreateRepository } from '../../api/repositories/EventCreateRepository';
import { AxiosHttpClient } from '../../api/AxiosHttpClient';

// export {};

export function Teste(){
    return (
        <button onClick={handleRegisterEvent} />
    )
}

const handleRegisterEvent = () => {
    const useService = new EventCreateService(new EventCreateRepository(new AxiosHttpClient));
    // const useService = new UserRegisterService(new UserRegisterRepository(new AxiosHttpClient));
    const eventMock = {
        id: '1',
        title: 'Mocked Event',
        type: 'Mocked Event',
        game: 'Mocked Game',
        cashPrize: 1000,
        description: 'Mocked Description',
        hour: '10:00 AM',
        number: '12345',
        price: 50,
        date: new Date(),
        cpf: '123.456.789-00',
        cardType: CardType.DEBITO,
        verificationCode: "123",
        expirationCode: '12/25'
    }

    useService.eventCreate(eventMock)
}

// export {}; // Declaração de exportação vazia para tornar o arquivo um módulo válido


// export function EventCadastro() {
//     const [eventData, setEventData] = useState<EventCreate>({
//         id: "",
//         title: "",
//         game: "",
//         cashPrize: 0,
//         hour: "",
//         description: "",
//         number: "",
//         date: new Date(),
//         cpf: "",
//         price: 0,
//         cardType: CardType.DEBITO,
//         verificationCode: 0,
//         expirationCode: ""
//     });



//     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setEventData(prevEventData => ({
//             ...prevEventData,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         // Process the event data, e.g., send it to the server
//         console.log('Event Data:', eventData);
//     };

//     return (
//         <div className="container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <h2>Cadastro de Evento</h2>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Título"
//                     required
//                     className="input"
//                     value={eventData.title}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="game"
//                     placeholder="Jogo"
//                     required
//                     className="input"
//                     value={eventData.game}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="number"
//                     name="cashPrize"
//                     placeholder="Prêmio em Dinheiro"
//                     required
//                     className="input"
//                     value={eventData.cashPrize}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="hour"
//                     placeholder="Hora"
//                     required
//                     className="input"
//                     value={eventData.hour}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Descrição"
//                     required
//                     className="input"
//                     value={eventData.description}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="number"
//                     placeholder="Número"
//                     required
//                     className="input"
//                     value={eventData.number}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="date"
//                     name="date"
//                     placeholder="Data"
//                     required
//                     className="input"
//                     value={eventData.date.toISOString().split('T')[0]} // Converte a data para o formato yyyy-mm-dd
//                     onChange={(e) => setEventData((prevEventData: any) => ({ // Explicitly define the type of prevEventData
//                         ...prevEventData,
//                         date: new Date(e.target.value)
//                     }))}
//                 />
//                 <input
//                     type="text"
//                     name="cpf"
//                     placeholder="CPF"
//                     required
//                     className="input"
//                     value={eventData.cpf}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="number"
//                     name="price"
//                     placeholder="Preço"
//                     required
//                     className="input"
//                     value={eventData.price}
//                     onChange={handleChange}
//                 />
//                 <select
//                     name="cardType"
//                     required
//                     className="input"
//                     value={eventData.cardType}
//                     onChange={handleChange}
//                 >
//                     <option value={CardType.DEBITO}>Débito</option>
//                     <option value={CardType.CREDITO}>Crédito</option>
//                 </select>
//                 <input
//                     type="number"
//                     name="verificationCode"
//                     placeholder="Código de Verificação"
//                     required
//                     className="input"
//                     value={eventData.verificationCode}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="expirationCode"
//                     placeholder="Código de Expiração"
//                     required
//                     className="input"
//                     value={eventData.expirationCode}
//                     onChange={handleChange}
//                 />
//                 <Button href={'/eventos'}>
//                     Cadastrar
//                 </Button>
//                 <Link to="/eventos">
//                     <button className="btn-voltar">Voltar</button>
//                 </Link>
//             </form>
//         </div>
//     );
// };

