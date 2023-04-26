import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Venue, venue1, venue2 } from "./venue";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export default function Access() {
	const [venue, setVenue] = useState<Venue>(venue1);
	const duration = 1.5;

	return (
		<div className="bg-slate-900 min-h-screen pt-12 drop-shadow-2xl">
			<div className="overflow-hidden drop-shadow-2xl shadow sm:rounded-lg">
				<AnimatePresence>
					<motion.div
						key={venue.name}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration }}
						exit={{ opacity: 0 }}
						className="flex justify-between px-4 py-6 sm:px-6"
					>
						<div>
							<h3 className="flex text-base font-semibold leading-7 text-white">
								{venue.name}
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
								</span>
							</h3>
							<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-200">
								{venue.neighborhood}
							</p>
						</div>
						<div className="flex">
							<MinusIcon height={48} className="text-gray-200 cursor-pointer mr-0.5" />
							<PlusIcon height={48} className="text-gray-200 cursor-pointer" />
						</div>
					</motion.div>
				</AnimatePresence>
				<div className="border-t border-gray-600">
					<dl className="divide-y divide-gray-600">
						<AnimatePresence>
							<motion.div
								key={venue.address + venue.borough}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
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
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration }}
								exit={{ opacity: 0 }}
								className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
							>
								<dt className="text-sm font-medium text-white">
									{venue.accessibility}
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
									{venue.accessNotes}
								</dd>
							</motion.div>
							<motion.div
								key={`${venue.confirmed} ${venue.link}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration }}
								exit={{ opacity: 0 }}
								className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
							>
								<dt className="text-sm font-medium text-white">
									{venue.confirmed
										? "Confirmed"
										: "Unconfirmed"}
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
									{venue.link
										? venue.link
										: "No Link Provided"}
								</dd>
							</motion.div>
							<motion.div
								key={`${venue.mask} ${venue.maskLink}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration }}
								exit={{ opacity: 0 }}
								className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
							>
								<dt className="text-sm font-medium text-white">
									{venue.mask
										? "Masks Required"
										: "Masks Optional"}
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
									{venue.maskLink
										? venue.maskLink
										: "No Link Provided"}
								</dd>
							</motion.div>
							<motion.div
								key={`summary ${venue.name}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration }}
								exit={{ opacity: 0 }}
								className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
							>
								<dt className="text-sm font-medium text-white">
									About
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
									{venue.name} ipsum ipsum deserunt culpa aute
									sint do nostrud anim incididunt cillum culpa
									consequat. Excepteur qui ipsum aliquip
									consequat sint. Sit id mollit nulla mollit
									nostrud in ea officia proident. Irure
									nostrud pariatur mollit ad adipisicing
									reprehenderit deserunt qui eu.
								</dd>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration }}
								exit={{ opacity: 0 }}
								className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
							>
								<dt className="text-sm text-white font-medium leading-6 text-gray-900">
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
						</AnimatePresence>
					</dl>
				</div>
			</div>
		</div>
	);
}
