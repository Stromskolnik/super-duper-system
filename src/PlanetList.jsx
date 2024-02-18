import React, { useState } from 'react';
import Planet from './Planet';

function PlanetList() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planetName) => {
    setSelectedPlanet(planetName === selectedPlanet ? null : planetName);
  };

  const planetsData = [
    {
      name: "Merkur",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/250px-Mercury_in_color_-_Prockter07-edit1.jpg",
      description: "Jedná se o jednu ze čtyř terestrických planet v soustavě, která má pevný kamenitý povrch. Planeta je tvořena přibližně ze 70 % z kovových materiálů a 30 % tvoří křemičitany."
    },
    {
      name: "Venuše",
      imageUrl: "https://www.aldebaran.cz/astrofyzika/sunsystem/venuse/Venus_clouds.jpg",
      description: "Venuše je druhá planeta od Slunce ve sluneční soustavě. Je pojmenována po římské bohyni lásky a krásy Venuši. Jedná se o jedinou planetu sluneční soustavy, která je pojmenována po ženě."
    },
    {
      name: "Země",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/250px-The_Blue_Marble_%28remastered%29.jpg",
      description: "Třetí planeta od Slunce a jediná známá planeta, na níž existuje život. Je to největší z pohledu množství a rozmanitosti života. Země je jedinou planetou, která není pojmenována po římském nebo řeckém bohu nebo bohyni."
    },
    {
      name: "Mars",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
      description: "Čtvrtá planeta od Slunce v pořadí od něj. Je druhou nejmenší planetou sluneční soustavy. Mars je někdy nazýván Rudou planetou kvůli své charakteristické barvě způsobené oxidem železa na jeho povrchu."
    },
    {
      name: "Jupiter",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/800px-Jupiter.jpg",
      description: "Pátá planeta od Slunce a největší planeta sluneční soustavy. Jupiter je složen převážně z vodíku a helia a nemá pevný povrch. Má velmi výrazné prstence a mnoho měsíců, včetně čtyř velkých měsíců známých jako galileovské měsíce."
    },
    {
      name: "Saturn",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg",
      description: "Šestá planeta od Slunce. Saturn je známý svým výrazným prstencem ze vzácně vyskytujícího se ledového materiálu. Má složitý systém prstenců skládajících se z tisíců menších prstenců a několika hlavních prstenců."
    },
    {
      name: "Uran",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg",
      description: "Sedmá planeta od Slunce. Uran je složen převážně z vodíku a helia, spolu s těžšími prvky jako je voda, amoniak a metan. Má jedinečnou charakteristiku rotovat téměř vzhůru nohama ve srovnání s ostatními planetami sluneční soustavy."
    },
    {
      name: "Neptun",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Neptune_Voyager2_color_calibrated%2C_brightened.png/250px-Neptune_Voyager2_color_calibrated%2C_brightened.png",
      description: "Osmá a poslední planeta sluneční soustavy. Neptun je složen převážně z vodíku, helia a lehkých prvky, podobně jako Uran. Je známý svou modrou barvou způsobenou pravděpodobně přítomností methanu v atmosféře."
    },
  ];

  return (
    <div className='planet-list'>
      {planetsData.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          imageUrl={planet.imageUrl}
          description={planet.description}
          isSelected={planet.name === selectedPlanet}
          onClick={() => handlePlanetClick(planet.name)}
        />
      ))}
    </div>
  );
}

export default PlanetList;
