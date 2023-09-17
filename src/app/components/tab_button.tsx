import {ReactNode} from "react";
import {motion} from "framer-motion";

type TabButtonProps = {
  selectTab: () => void;
  active: boolean;
  children: ReactNode;
}

const variants = {
  default: {width: 0},
  active: {width: "calc(100% - 0.75rem)"}
}

export const TabButton = (props: TabButtonProps) => {
  const buttonClasses = props.active ? "text-white " : "text-[#ADB7BE]";
  return (
    <button onClick={props.selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {props.children}
      </p>
      <motion.div
        variants={variants}
        animate={props.active ? "active" : "default"}
        className={"h-1 bg-primary-500 mt-2 mr-3"}/>
    </button>
  )
}
