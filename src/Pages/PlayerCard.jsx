import cardBg from '../assets/images/card_bg.png';

const PlayerCard = ({ player }) => {
// Import the card background image from your assets folder

return (
    <div
        className="fut-player-card relative w-[300px] h-[485px] p-[3.8rem_0] z-[2] transition-all duration-200 ease-in"
        style={{
            backgroundImage: `url(${cardBg})`,
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
        }}
    >
        <div className="player-card-top relative flex px-6" style={{ color: player.textColor }}>
            <div className="player-master-info absolute leading-[2.2rem] font-light py-6 uppercase">
                <div className="player-rating text-[2rem]">
                    <span>{player.rating}</span>
                </div>
                <div className="player-position text-[1.4rem]">
                    <span>{player.position}</span>
                </div>
                <div className="player-nation block w-8 h-[25px] my-[0.3rem]">
                    <img
                        src={player.nation.flag || "/placeholder.svg"}
                        alt={player.nation.name}
                        className="w-full h-full object-contain"
                        draggable="false"
                    />
                </div>
                <div className="player-club block w-[2.1rem] h-[40px]">
                    <img
                        src={player.club.logo || "/placeholder.svg"}
                        alt={player.club.name}
                        className="w-full h-full object-contain"
                        draggable="false"
                    />
                </div>
            </div>
            <div className="player-picture w-[200px] h-[200px] mx-auto overflow-hidden">
                <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-full object-contain relative right-[-1.5rem] bottom-0"
                    draggable="false"
                />
                <div className="player-extra absolute right-0 bottom-[-0.5rem] overflow-hidden text-base font-bold uppercase w-full h-8 px-6 text-right bg-none">
                    <span className="ml-[0.6rem] text-shadow-sm">{player.skills}</span>
                    <span className="ml-[0.6rem] text-shadow-sm">{player.weakFoot}</span>
                </div>
            </div>
        </div>
        <div className="player-card-bottom relative">
            <div
                className="player-info block py-[0.3rem] w-[90%] mx-auto h-auto relative z-[2]"
                style={{ color: player.textColor }}
            >
                <div
                    className="player-name w-full block text-center text-[1.6rem] uppercase pb-[0.3rem] overflow-hidden"
                    style={{ borderBottom: `2px solid ${player.textColor}30` }}
                >
                    <span className="block text-shadow-sm">{player.name}</span>
                </div>
                <div className="player-features my-[0.5rem] mx-auto flex justify-center">
                    <div className="player-features-col px-[2.3rem]" style={{ borderRight: `2px solid ${player.textColor}30` }}>
                        <span className="flex text-[1.2rem] uppercase">
                            <div className="player-feature-value mr-[0.3rem] font-bold">{player.stats.pac}</div>
                            <div className="player-feature-title font-light">PAC</div>
                        </span>
                        <span className="flex text-[1.2rem] uppercase">
                            <div className="player-feature-value mr-[0.3rem] font-bold">{player.stats.sho}</div>
                            <div className="player-feature-title font-light">SHO</div>
                        </span>
                        <span className="flex text-[1.2rem] uppercase">
                            <div className="player-feature-value mr-[0.3rem] font-bold">{player.stats.pas}</div>
                            <div className="player-feature-title font-light">PAS</div>
                        </span>
                    </div>
                    <div className="player-features-col px-[2.3rem]">
                        <span className="flex text-[1.2rem] uppercase">
                            <div className="player-feature-value mr-[0.3rem] font-bold">{player.stats.dri}</div>
                            <div className="player-feature-title font-light">DRI</div>
                        </span>
                        <span className="flex text-[1.2rem] uppercase">
                            <div className="player-feature-value mr-[0.3rem] font-bold">{player.stats.def}</div>
                            <div className="player-feature-title font-light">DEF</div>
                        </span>
                        <span className="flex text-[1.2rem] uppercase">
                            <div className="player-feature-value mr-[0.3rem] font-bold">{player.stats.phy}</div>
                            <div className="player-feature-title font-light">PHY</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default PlayerCard
