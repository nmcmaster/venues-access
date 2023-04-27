export interface Venue {
	mask: string | null;
	accessibility: string | null;
	name: string | null;
	address: string | null;
	neighborhood: string | null;
	borough: string | null;
	accessNotes: string | null;
	link: string | null;
	confirmed: string | null;
	maskLink: string | null;
}

// old version
// export interface Venue {
// 	mask: boolean;
// 	accessibility:
// 		| "accessible"
// 		| "stairs"
// 		| "wheelchair"
// 		| "notAccessible"
// 		| null;
// 	name: string;
// 	address: string;
// 	neighborhood: string;
// 	borough: string;
// 	accessNotes: string | null;
// 	link: string | null;
// 	confirmed: "email" | "msgs" | "insta" | "check" | "texts" | null;
// 	maskLink: string | null;
// }