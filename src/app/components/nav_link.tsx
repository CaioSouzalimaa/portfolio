import Link from "next/link";

type NavLinkProps = {
  href: string;
  text: string;
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <Link href={props.href} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"}>
      {props.text}
    </Link>
    )
}
