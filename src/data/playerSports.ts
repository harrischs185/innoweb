export const playerSportConfig = {
	football: {
		title: 'Football Players',
		description: 'Explore top football players and related cards.',
		players: [
            'josh-allen',
            'patrick-mahomes',
            'cj-stroud', 
            'tom-brady',
            'justin-herbert',
            'joe-burrow',
        ],      
	},
    baseball: {
		title: 'Baseball Players',
		description: 'Explore top baseball players and related cards.',
		players: [
            'shohei-ohtani',
            'aaron-judge',
            'bobby-witt-jr',
            'mike-trout',
            'elly-de-la-cruz',
        ],
    },
    basketball: {
		title: 'Basketball Players',
		description: 'Explore top basketball players and related cards.',
		players: [
            'michael-jordan',
            'lebron-james',
            'stephen-curry',
            'victor-wembanyama',
            'luka-doncic',
        ],
    },
    golf: {
		title: 'Golfers',
		description: 'Explore top golfers and related cards.',
		players: [
            'tiger-woods',
            'rory-mcilroy',
            'scottie-scheffler',
            'bryson-dechambeau',
            'phil-mickelson',
        ],
    },
    soccer: {
		title: 'Soccer Players',
		description: 'Explore top soccer players and related cards.',
		players: [
            'lionel-messi',
            'cristiano-ronaldo',
            'kylian-mbappe',
            'erling-haaland',
            'jude-bellingham',
        ],
    }
} as const;

export type PlayerSportKey = keyof typeof playerSportConfig;