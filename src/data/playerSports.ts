import judgeImage from '../assets/images/players/baseball/aaron-judge/aaron-judge-mangaTile.png';
import wittImage from '../assets/images/players/baseball/bobby-witt-jr/bobby-witt-jr-mangaTile.png';
import delacruzImage from '../assets/images/players/baseball/elly-de-la-cruz/elly-de-la-cruz-mangaTile.png';
import troutImage from '../assets/images/players/baseball/mike-trout/mike-trout-mangaTile.png';
import ohtaniImage from '../assets/images/players/baseball/shohei-ohtani/shohei-ohtani-mangaTile.png';
import jamesImage from '../assets/images/players/basketball/lebron-james/lebron-james-mangaTile.png';
import doncicImage from '../assets/images/players/basketball/luka-doncic/luka-doncic-mangaTile.png';
import jordanImage from '../assets/images/players/basketball/michael-jordan/michael-jordan-mangaTile.png';
import curryImage from '../assets/images/players/basketball/stephen-curry/stephen-curry-mangaTile.png';
import wembyImage from '../assets/images/players/basketball/victor-wembanyama/victor-wembanyama-mangaTile.png';
import stroudImage from '../assets/images/players/football/cj-stroud/cj-stroud-mangaTile.png';
import allenImage from '../assets/images/players/football/josh-allen/josh-allen-mangaTile.png';
import burrowImage from '../assets/images/players/football/joe-burrow/joe-burrow-mangaTile.png';
import herbertImage from '../assets/images/players/football/justin-herbert/justin-herbert-mangaTile.png';
import mahomesImage from '../assets/images/players/football/patrick-mahomes/patrick-mahomes-mangaTile.png';
import bradyImage from '../assets/images/players/football/tom-brady/tom-brady-mangaTile.png';
import dechambeauImage from '../assets/images/players/golf/bryson-dechambeau/bryson-dechambeau-mangaTile.png';
import mickelsonImage from '../assets/images/players/golf/phil-mickelson/phil-mickelson-mangaTile.png';
import roryImage from '../assets/images/players/golf/rory-mcilroy/rory-mcilroy-mangaTile.png';
import schefflerImage from '../assets/images/players/golf/scottie-scheffler/scottie-scheffler-mangaTile.png';
import tigerImage from '../assets/images/players/golf/tiger-woods/tiger-woods-mangaTile.png';
import ronaldoImage from '../assets/images/players/soccer/cristiano-ronaldo/cristiano-ronaldo-mangaTile.png';
import haalandImage from '../assets/images/players/soccer/erling-haaland/erling-haaland-mangaTile.png';
import bellinghamImage from '../assets/images/players/soccer/jude-bellingham/jude-bellingham-mangaTile.png';
import mbappeImage from '../assets/images/players/soccer/kylian-mbappe/kylian-mbappe-mangaTile.png';
import messiImage from '../assets/images/players/soccer/lionel-messi/lionel-messi-mangaTile.png';

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
            name: 'Cristiano Ronaldo',
            href: '/players/cristiano-ronaldo',
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