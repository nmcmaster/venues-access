import { PaperClipIcon } from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Venue } from "../../server/src/venue/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { trpc } from "./trpc";
import FontSizeIcon from "./FontSizeIcons";
import ArrowIcons from "./ArrowIcons";

const initVenue: Venue = {
	mask: "",
	accessibility: "stairs",
	name: "First Unitarian Church",
	address: "119 Pierrepont St",
	neighborhood: "brooklyn heights",
	borough: "brooklyn",
	accessNotes: "wheelchair lift",
	link: "",
	confirmed: "email",
	maskLink: "",
};

// const magicWord = process.env.REACT_APP_MAGIC_WORD || "error";

export default function App() {
	const { data, isLoading } = trpc.venue.getVenues.useQuery();
	const [venue, setVenue] = useState<Venue>(initVenue);
	const [venues, setVenues] = useState<Venue[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [loggedIn, setLoggedIn] = useState<boolean>(true);

	// animation variables
	const duration = 1.5;
	const shelfDropInitial = { opacity: 0, y: -100 };
	const shelfDropAnimate = { opacity: 1, y: 0 };

	useEffect(() => {
		if (data) {
			const filtered = data.filter(
				(venue) => venue.address !== "[dm hosts]"
			);
			setVenues(filtered);
		}
	}, [data]);

	useEffect(() => {
		if (venues.length > 0) {
			setVenue(venues[currentIndex]);
		}
	}, [venues, currentIndex]);

	function previous() {
		if (currentIndex !== 0) {
			setCurrentIndex(currentIndex - 1);
		}
	}

	function next() {
		if (currentIndex < venues.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	}

	function random() {
		const randomIndex = Math.floor(Math.random() * venues.length);
		setCurrentIndex(randomIndex);
	}

	function handleChange(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		if (e.currentTarget.value === import.meta.env.VITE_MAGIC_WORD) {
			setLoggedIn(true);
		}
	}

	return (
		<>
			{!loggedIn && (
				<input
					onChange={(e) => handleChange(e)}
					className="border-gray-600 border py-1 px-7 m-16 text-lg"
					placeholder="what's the magic word"
					type="text"
					name="login"
				/>
			)}
			{loggedIn && (
				<div className="bg-slate-900 min-h-screen pt-12 drop-shadow-2xl">
					<div className="overflow-hidden drop-shadow-2xl shadow sm:rounded-lg">
						<div className="flex justify-between px-4 py-5 sm:px-6">
							<motion.div
								key={venue.name}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: duration + 0.5 }}
								exit={{ opacity: 0 }}
							>
								<h3 className="flex text-xl font-semibold leading-7 text-white">
									{venue.name}
									<span className="relative flex h-3 w-3">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
									</span>
								</h3>
								<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-200">
									{venue.neighborhood ? (
										<span>{venue.neighborhood}</span>
									) : (
										<span className="text-gray-600">
											no neighborhood record
										</span>
									)}
								</p>
							</motion.div>
							<ArrowIcons
								duration={duration}
								previous={previous}
								next={next}
							/>
						</div>
						<motion.div
							key={`${venue.address} + ${venue.borough}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration }}
							exit={{ opacity: 0 }}
							className="border-t border-gray-600"
						>
							<dl className="divide-y divide-gray-600">
								<motion.div
									key={`${venue.address} + ${venue.borough}`}
									initial={shelfDropInitial}
									animate={shelfDropAnimate}
									transition={{ duration }}
									exit={{ opacity: 0 }}
									className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<dt className="text-sm font-medium text-white">
										{venue.address}
									</dt>
									<dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
										{venue.borough}
									</dd>
								</motion.div>
								<motion.div
									key={`${venue.accessibility} ${venue.accessNotes}`}
									initial={{ opacity: 0, x: -100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration }}
									exit={{ opacity: 0 }}
									className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<div className="flex ">
										<dt className="text-3xl font-medium text-white">
											{venue.accessibility}
										</dt>
										{/* <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
								{venue.accessNotes}
							</dd> */}
									</div>
								</motion.div>
								<motion.div
									key={`${venue.confirmed} ${venue.link}`}
									initial={shelfDropInitial}
									animate={shelfDropAnimate}
									transition={{ duration }}
									exit={{ opacity: 0 }}
									className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<dt className="text-sm font-medium">
										{venue.confirmed ? (
											<span className="text-white">
												Confirmed
											</span>
										) : (
											<span className="text-gray-300">
												Unconfirmed
											</span>
										)}
									</dt>
									<dd className="mt-1 text-xs leading-6 sm:col-span-2 sm:mt-0">
										{venue.link ? (
											<motion.span
												initial={{ color: "#FFFFFF" }}
												animate={{
													color: [
														"#5eead4",
														"#4338ca",
														"#fef08a",
														"#FFFFFF",
													],
												}}
												transition={{
													delay: 1.5,
													duration: 3.5,
												}}
												className="text-white cursor-pointer"
											>
												{<a href={venue.link}>{venue.link}</a> }
											</motion.span>
										) : (
											<span className="text-gray-600">
												No Link Provided
											</span>
										)}
									</dd>
								</motion.div>
								<motion.div
									key={`${venue.mask} ${venue.maskLink}`}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration }}
									exit={{ opacity: 0 }}
									className="flex justify-between px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<div>
										{" "}
										<dt className="text-sm font-medium text-white">
											{venue.mask
												? "Masks Required"
												: "Masks Optional"}
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-600 sm:col-span-2 sm:mt-0">
											{venue.maskLink
												? venue.maskLink
												: "No Link Provided"}
										</dd>
									</div>
									<FontSizeIcon duration={duration} />
								</motion.div>
								<motion.div
									key={`summary ${venue.name}`}
									initial={shelfDropInitial}
									animate={shelfDropAnimate}
									transition={{ duration }}
									exit={{ opacity: 0 }}
									className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<dt className="text-sm font-medium text-white">
										Access Notes
									</dt>
									<dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
										{`${
											venue.accessNotes
												? venue.accessNotes
												: "No access notes provided"
										}. ${venue.name} ${venue.name} ${
											venue.name
										} ${venue.name} ${venue.name} ${
											venue.name
										} ${venue.name} ${venue.name} ${
											venue.name
										} ${venue.name} ${venue.name} ${
											venue.name
										} ${venue.name}. `}
										Excepteur qui ipsum aliquip consequat
										sint. Sit id mollit nulla mollit nostrud
										in ea officia proident. Irure nostrud
										pariatur mollit ad adipisicing
										reprehenderit deserunt qui eu.
									</dd>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration }}
									exit={{ opacity: 0 }}
									className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<dt className="text-sm text-white font-medium leading-6">
										Attachments
									</dt>
									<dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
										<ul
											role="list"
											className="divide-y divide-gray-100 rounded-md border border-gray-200"
										>
											<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
												<div className="flex w-0 flex-1 items-center">
													<PaperClipIcon
														className="h-5 w-5 flex-shrink-0 text-gray-400"
														aria-hidden="true"
													/>
													<div className="ml-4 flex min-w-0 flex-1 gap-2">
														<span className="truncate font-medium text-gray-200">
															accessibility_profile.pdf
														</span>
														<span className="flex-shrink-0 text-gray-400">
															2.4mb
														</span>
													</div>
												</div>
												<div className="ml-4 flex-shrink-0">
													<a
														href="#"
														className="font-medium text-indigo-600 hover:text-indigo-500"
													>
														Download
													</a>
												</div>
											</li>
											<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
												<div className="flex w-0 flex-1 items-center">
													<PaperClipIcon
														className="h-5 w-5 flex-shrink-0 text-gray-400"
														aria-hidden="true"
													/>
													<div className="ml-4 flex min-w-0 flex-1 gap-2">
														<span className="truncate font-medium text-gray-200">
															contact_list.pdf
														</span>
														<span className="flex-shrink-0 text-gray-400">
															4.5mb
														</span>
													</div>
												</div>
												<div className="ml-4 flex-shrink-0">
													<a
														href="#"
														className="font-medium text-indigo-600 hover:text-indigo-500"
													>
														Download
													</a>
												</div>
											</li>
										</ul>
									</dd>
								</motion.div>
							</dl>
						</motion.div>
					</div>
					<div className="fixed bottom-0 text-sky-300 min-w-full flex justify-center pb-3 opacity-75">
						<SparklesIcon height={48} onClick={() => random()} />
					</div>
				</div>
			)}
		</>
	);
}
