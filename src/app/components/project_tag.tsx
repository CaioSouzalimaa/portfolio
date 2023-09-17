import {twMerge} from "tailwind-merge";

type ProjectTagProps = {
  tag: string;
  onClick: (tag: string) => void;
  isSelected: boolean;
}

export const ProjectTag = (props: ProjectTagProps) => {
  const buttonStyles = props.isSelected ? "border-primary-500 text-white hover:none " : "";
  return (
    <button
      onClick={() => props.onClick(props.tag)}
      className={twMerge("rounded-full border-2 px-6 py-3 text-xl cursor-pointer text=[#ADB7BE] border-slate-600 hover:border-white", buttonStyles)}
    >
      {props.tag}
    </button>
  )
}
