import judgeImage from '../assets/images/players/baseball/aaron-judge.png';
import wittImage from '../assets/images/players/baseball/bobby-witt-jr.png';
import delacruzImage from '../assets/images/players/baseball/elly-de-la-cruz.png';
import troutImage from '../assets/images/players/baseball/mike-trout.png';
import ohtaniImage from '../assets/images/players/baseball/shohei-ohtani.png';
import jamesImage from '../assets/images/players/basketball/lebron-james.png';
import doncicImage from '../assets/images/players/basketball/luka-doncic.png';
import jordanImage from '../assets/images/players/basketball/michael-jordan.png';
import curryImage from '../assets/images/players/basketball/stephen-curry.png';
import wembyImage from '../assets/images/players/basketball/victor-wembanyama.png';
import stroudImage from '../assets/images/players/football/cj-stroud.png';
import allenImage from '../assets/images/players/football/josh-allen.png';
import burrowImage from '../assets/images/players/football/joe-burrow.png';
import herbertImage from '../assets/images/players/football/justin-herbert.png';
import mahomesImage from '../assets/images/players/football/patrick-mahomes.png';
import bradyImage from '../assets/images/players/football/tom-brady.png';
import dechambeauImage from '../assets/images/players/golf/bryson-dechambeau.png';
import mickelsonImage from '../assets/images/players/golf/phil-mickelson.png';
import roryImage from '../assets/images/players/golf/rory-mcilroy.png';
import schefflerImage from '../assets/images/players/golf/scottie-scheffler.png';
import tigerImage from '../assets/images/players/golf/tiger-woods.png';
import ronaldoImage from '../assets/images/players/soccer/christian-ronaldo.png';
import haalandImage from '../assets/images/players/soccer/erling-haaland.png';
import bellinghamImage from '../assets/images/players/soccer/jude-bellingham.png';
import mbappeImage from '../assets/images/players/soccer/kylian-mbappe.png';
import messiImage from '../assets/images/players/soccer/lionel-messi.png';

export const playerSportConfig = {
	football: {
		title: 'Football Players',
		description: 'Explore top football players and related cards.',
		players: [
            {
                name: 'Josh Allen',
                href: '/players/josh-allen',
                image: allenImage.src,
                meta: 'Modern Star',
            },
            {    
                name: 'Patrick Mahomes',
                href: '/players/patrick-mahomes',
                image: mahomesImage.src,
                meta: 'Modern Star',
            },
            {     
                name: 'CJ Stroud',
                href: '/players/cj-stroud', 
                image: stroudImage.src,
                meta: 'Modern Star',
            },
            {     
                name: 'Tom Brady',
                href: '/players/tom-brady',
                image: bradyImage.src,
                meta: 'Football Legend', 
            },
            {     
                name: 'Justin Herbert',
                href: '/players/justin-herbert',
                image: herbertImage.src,
                meta: 'Modern Star',
            },
            {     
                name: 'Joe Burrow',
                href: '/players/joe-burrow',
                image: burrowImage.src,
                meta: 'Modern Star',
            }
        ],
	},
	baseball: {
		title: 'Baseball Players',
		description: 'Explore top baseball players and related cards.',
		players: [
            {
                name: 'Shohei Ohtani',
                href: '/players/shohei-ohtani',
                image: ohtaniImage.src,
                meta: 'Modern Star', 
            },
            { 
                name: 'Aarron Judge',
                href: '/players/aaron-judge',
                image: judgeImage.src,
                meta: 'Modern Star',
            },
            { 
                name: 'Bobby Witt Jr.',
                href: '/players/bobby-witt-jr',
                image: wittImage.src,
                meta: 'Modern Star',
            },
            { 
                name: 'Mike Trout',
                href: '/players/mike-trout',
                image: troutImage.src,
                meta: 'Modern Star',
            },
            { 
                name: 'Elly De La Cruz',
                href: '/players/elly-de-la-cruz',
                image: delacruzImage.src,
                meta: 'Modern Star',
            }
        ],
	},
    basketball: {
    title: 'Basketball Players',
    description: 'Explore top basketball players and related cards.',
    players: [
        {
            name: 'Michael Jordan',
            href: '/players/michael-jordan',
            image: jordanImage.src,
            meta: 'Basketball Legend', 
        },
        { 
            name: 'LeBron James',
            href: '/players/lebron-james',
            image: jamesImage.src,
            meta: 'Modern Star',
        },
        { 
            name: 'Stephen Curry',
            href: '/players/stephen-curry',
            image: curryImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Victor Wembanyama',
            href: '/players/victor-wembanyama',
            image: wembyImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Luka Donic',
            href: '/players/luka-doncic',
            image: doncicImage.src,
            meta: 'Modern Star',
        }
        ],
	},
    golf: {
    title: 'Golfers',
    description: 'Explore top golfers and related cards.',
    players: [
        {
            name: 'Tiger Woods',
            href: '/players/tiger-woods',
            image: tigerImage.src,
            meta: 'Golfing Legend',
        },
        { 
            name: 'Rory McIlroy',
            href: '/players/rory-mcilroy',
            image: roryImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Scottie Scheffler',
            href: '/players/scottie-scheffler',
            image: schefflerImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Bryson Dechambeau',
            href: '/players/bryson-dechambeau',
            image: dechambeauImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Phil Mickelson',
            href: '/players/phil-mickelson',
            image: mickelsonImage.src,
            meta: 'Golfing Legend',
        }
        ],
	},
    soccer: {
    title: 'Soccer Players',
    description: 'Explore top soccer players and related cards.',
    players: [
        {
            name: 'Lionel Messi',
            href: '/players/lionel-messi',
            image: messiImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Christian Ronaldo',
            href: '/players/christian-ronaldo',
            image: ronaldoImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Kylian Mbappe',
            href: '/players/kylian-mbappe',
            image: mbappeImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Erling Haaland',
            href: '/players/erling-haaland',
            image: haalandImage.src,
            meta: 'Modern Star', 
        },
        { 
            name: 'Jude Bellingham',
            href: '/players/jude-bellingham',
            image: bellinghamImage.src,
            meta: 'Modern Star',
        }
        ],      
	},
} as const;

export type PlayerSportKey = keyof typeof playerSportConfig;