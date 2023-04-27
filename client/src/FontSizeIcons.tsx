import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface FontSizeIconProps {
    duration: number;
}

const FontSizeIcon: React.FC<FontSizeIconProps> = ({duration}) => {
	return (
		<motion.div
			key="fontSizeIcons"
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration }}
			exit={{ opacity: 0 }}
			className="flex"
		>
			<MinusIcon
				height={48}
				className="text-gray-200 cursor-pointer mr-0.5"
			/>
			<PlusIcon height={48} className="text-gray-200 cursor-pointer" />
		</motion.div>
	);
};
export default FontSizeIcon;
