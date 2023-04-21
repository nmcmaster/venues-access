export interface Venue {
	mask: boolean;
	accessibility:
		| "accessible"
		| "stairs"
		| "wheelchair"
		| "notAccessible"
		| null;
	name: string;
	address: string;
	neighborhood: string;
	borough: string;
	accessNotes: string | null;
	link: string | null;
	confirmed: "email" | "msgs" | "insta" | "check" | "texts" | null;
	maskLink: string | null;
}

export const venue1: Venue = {
	mask: false,
	accessibility: "stairs",
	name: "First Unitarian Church",
	address: "119 Pierrepont St",
	neighborhood: "brooklyn heights",
	borough: "brooklyn",
	accessNotes: "wheelchair lift",
	link: null,
	confirmed: "email",
	maskLink: null,
};

export const venue2: Venue = {
	mask: false,
	accessibility: "wheelchair",
	name: "Forest Hills Stadium",
	address: "1 Tennis Pl",
	neighborhood: "Forest Hills",
	borough: "queens",
	accessNotes: null,
	link: null,
	confirmed: "email",
	maskLink: null,
};

const z = {
	name: 'jessica',
	age: 36,
	occupation: 'developer',
	education: 'masters',
	yearsOfExperience: 10,
	yearsOfExperienceInThisField: 5,
	yearsOfExperienceInThisFieldAtThisCompany: 3,
};



function SayWord() {
    const x = "word";
	const y = 2;
	const z = x + y;


	return 'word';
}

SayWord();