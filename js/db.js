let products = [
	{
		id: 1,
		badge: {
			title: "Sold",
			bg: "sold"	
		},
		image: "/images/product-1.jpg",
		name: "Cuphead",
		price: 21,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 2,
		category: 1,

	},
	{
		id: 2,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/product-2.jpg",
		name: "Cyberpunk",
		price: 30,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 2,
	},
	{
		id: 3,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/product-3.jpg",
		name: "Dark Souls",
		price: 5,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 4,
		category:3,
	},
	{
		id: 4,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/product-4.jpg",
		name: "Diablo",
		price: 51,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 1,
		category: 4,
	},
	{
		id: 5,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "/images/product-5.jpg",
		name: "Fallout",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 0,
		category: 7,
	},

	{
		id: 6,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/product-6.jpg",
		name: "God of War",
		price: 31,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category:  5,
	},
	{
		id: 7,
		badge: {
			title: "Sale",
			bg: "sale"
		},
		image: "/images/product-7.jpg",
		name: "Horizon",
		price: 35,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 4,
		category: 6,
	},

	{
		id: 8,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/product-8.jpg",
		name: "Warcraft",
		price: 25,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 3,
		category: 8,
	},
                      
	{
		id: 9,
		badge: {
			title: "Sold",
			bg: "sold"	
		},
		image: "/images/product-9.jpg",
		name: "Red dead redemption",
		price: 24,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 12,
	},
                   
	{
		id: 10,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/product-10.jpg",
		name: "Resident evil",
		price: 16,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 0,
		category: 10,
	},
	{
		id: 11,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "/images/product-11.jpg",
		name: "Starcraft",
		price: 13,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 11,
	},

	{
		id: 12,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/product-12.jpg",
		name: "The Witcher",
		price: 11,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 2,
		category: 9,
	},
	
];

let categories = [
	{
		id: 1,
		image: "/images/product-1.jpg",
		section: "Action games",
    	name: "Cuphead"
	},
	{
    	id: 2,
    	name: "Cyberpunk",
		image: "/images/product-2.jpg",
		section: "Action games",
	},
	{
		id: 3,
		image: "/images/product-3.jpg",
		name: "Dark-Souls",
    	section: "Role-playing"
	},
	{
		id: 4,
		image: "/images/product-4.jpg",
		name: "Diablo",
    	section: "Role-playing"
	},
	{
		id: 5,
		image: "/images/product-5.jpg",
		name: "God of War",
    	section: "Role-playing"
	},
		{
		id: 7,
		image: "/images/product-6.jpg",
		name: "Fallout",
    	section: "Puzzle games",
	},
	{
		id: 6,
		image: "/images/product-7.jpg",
		name: "Horizon",
    	section: "Puzzle games"
	},


	{
		id: 8,
		image: "/images/product-8.jpg",
		name: "Warcraft",
    	section: "Adventure games"
	},
                      
	{
		id: 9,
		image: "/images/product-9.jpg",
		name: "Witcher ",
    	section: "Adventure games"
	},
                   
	{
		id: 10,
		image: "/images/product-10.jpg",
		name: "Resident Evil",
    	section: "Adventure games"
	},
	{
		id: 11,
		image: "/images/product-11.jpg",
		name: "Starcraft",
    	section: "Strategy games"
	},

	{
		id: 12,
		image: "/images/product-12.jpg",
		name: "Red dead redemption",
    	section: "Strategy games"
	},

];
