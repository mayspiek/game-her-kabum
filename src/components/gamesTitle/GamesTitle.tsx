import { gameTitle } from '../../data'
import './GamesTitle.styles.css'

export const GamesTitle = () => {
    return (
        <div className='gamesWrapper'>
            {gameTitle.map((game, index) => {
                return (
                    <p className='gameList--item' key={index}>
                        <span>{game}</span>
                    </p>
                )
            })}
        </div>
    )
}
