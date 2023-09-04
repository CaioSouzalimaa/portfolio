import {ReactNode} from "react";

type TabButtonProps = {
  selectTab: () => void;
  active: boolean;
  children: ReactNode;
}

export const TabButton = (props: TabButtonProps) => {
  const buttonClasses = props.active ? "text-white border-b border-purple-500" : "text-[#ADB7BE]";
  return (
    <button onClick={props.selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {props.children}
      </p>
    </button>
  )
}
