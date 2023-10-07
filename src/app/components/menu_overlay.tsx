import { NavLink } from "@/app/components/nav_link";

type MenuOverlayProps = {
  links: {href: string, text:string}[];
}

export const MenuOverlay = (props: MenuOverlayProps) => {
  return (
    <div className={"flex flex-col py-4 items-center list-none"}>
      {props.links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} text={link.text}/>
        </li>
      ))}
    </div>
  )
}
