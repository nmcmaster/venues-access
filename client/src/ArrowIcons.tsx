import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface ArrowIconsProps {
	duration: number;
	previous: () => void;
	next: () => void;
}

const ArrowIcons: React.FC<ArrowIconsProps> = ({
	duration,
	previous,
	next,
}) => {
	return (
		<motion.div
			key="fontSizeIcons"
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration }}
			exit={{ opacity: 0 }}
			className="flex"
		>
			<ArrowLeftIcon
				height={48}
				className="text-gray-200 border-blue-50 border rounded-full cursor-pointer mr-2.5"
				onClick={() => {
					previous();
				}}
			/>
			<ArrowRightIcon
				height={48}
				className="text-gray-200 border-blue-50 border rounded-full cursor-pointer"
				onClick={() => {
					next();
				}}
			/>
		</motion.div>
	);
};
export default ArrowIcons;
