import PlayerCard from "./PlayerCard";

export default function Home() {
  const players = [
    {
      id: 1,
      name: "MESSI",
      rating: 97,
      position: "RW",
      nation: {
        name: "Argentina",
        flag: "https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg",
      },
      club: {
        name: "Barcelona",
        logo: "https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg",
      },
      image: "https://selimdoyranli.com/cdn/fut-player-card/img/messi.png",
      skills: "4*SM",
      weakFoot: "4*WF",
      stats: {
        pac: 97,
        sho: 95,
        pas: 94,
        dri: 99,
        def: 35,
        phy: 68,
      },
      textColor: "#ffd700", // Gold
    },
    {
      id: 2,
      name: "RONALDO",
      rating: 96,
      position: "ST",
      nation: {
        name: "Portugal",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2560px-Flag_of_Portugal.svg.png",
      },
      club: {
        name: "Manchester United",
        logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/7/7a/Manchester_United_FC_crest.svg/1010px-Manchester_United_FC_crest.svg.png",
      },
      image: "https://www.playmakerstats.com/img/jogadores/new/15/79/1579_cristiano_ronaldo_20250121144448.png",
      skills: "5*SM",
      weakFoot: "4*WF",
      stats: {
        pac: 96,
        sho: 97,
        pas: 85,
        dri: 94,
        def: 38,
        phy: 87,
      },
      textColor: "#ffffff", // White
    },
    {
      id: 3,
      name: "NEYMAR",
      rating: 94,
      position: "LW",
      nation: {
        name: "Brazil",
        flag: "https://cdn.pixabay.com/photo/2022/09/29/01/39/brazil-7486305_640.png",
      },
      club: {
        name: "PSG",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
      },
      image: "https://www.fcratings.com/wp-content/uploads/neymar-jr.png",
      skills: "5*SM",
      weakFoot: "5*WF",
      stats: {
        pac: 93,
        sho: 87,
        pas: 90,
        dri: 96,
        def: 36,
        phy: 63,
      },
      textColor: "#ffeb3b", // Yellow
    },
    {
      id: 4,
      name: "DE BRUYNE",
      rating: 93,
      position: "CAM",
      nation: {
        name: "Belgium",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Flag_of_Belgium_%28Rounded%29.png",
      },
      club: {
        name: "Manchester City",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png",
      },
      image: "https://www.fcratings.com/wp-content/uploads/kevin-de-bruyne-400x400.png",
      skills: "4*SM",
      weakFoot: "5*WF",
      stats: {
        pac: 78,
        sho: 91,
        pas: 95,
        dri: 92,
        def: 64,
        phy: 79,
      },
      textColor: "#00e5ff", // Cyan
    },
    {
      id: 5,
      name: "LEWANDOWSKI",
      rating: 94,
      position: "ST",
      nation: {
        name: "Poland",
        flag: "https://cdn11.bigcommerce.com/s-hhbbk/images/stencil/1280x1280/products/786/38396/POLA0002__41872.1580508345.png?c=2",
      },
      club: {
        name: "Bayern Munich",
        logo: "https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg",
      },
      image: "https://www.fifplay.com/img/fc/24/players/188545.webp",
      skills: "4*SM",
      weakFoot: "4*WF",
      stats: {
        pac: 86,
        sho: 94,
        pas: 82,
        dri: 88,
        def: 44,
        phy: 84,
      },
      textColor: "#80deea",
    },
  ];

  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl font-bold text-center mb-10 bg-blue-100 p-5">
          FIFA Ultimate Team Cards
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}
