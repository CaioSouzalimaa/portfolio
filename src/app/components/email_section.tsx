import Link from "next/link";
import {GitHubIcon} from "@/app/components/icons/github_icon";
import {LinkedinIcon} from "@/app/components/icons/linkedin_icon";

export const EmailSection = () => {

  return (
    <section
      id={"#contact"}
      className={"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"}
    >
      <div
        className={"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"}></div>
      <div className={"z-10"}>
        <h5 className={"text-xl font-bold text-white my-2"}>Entre em contato</h5>
        <p className={"text-[#ADB7BE] mb-4 max-w-md"}>Estou aberto a oportunidades e novos projetos.</p>
        <div className={"social flex flex-col gap-2 "}>
          <Link href={"https://github.com/CaioSouzalimaa"}>
            <GitHubIcon/>
          </Link>
          <Link href={"https://www.linkedin.com/in/caio-souza-limaa/"}>
            <LinkedinIcon/>
          </Link>
        </div>
      </div>
      <div className={"z-10"}>
        <form className={"flex flex-col"}>
          <div className={"mb-6"}>
            <label htmlFor="email" className={"text-white block mb-2 text-sm font-medium"}>
              Seu Email
            </label>
            <input
              type={"email"}
              id={"email"}
              required
              placeholder={"exemplo@gmail.com"}
              className={"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"}
            />
          </div>
          <div className={"mb-6"}>
            <label
              htmlFor={"subject"}
              className={"text-white block text-sm mb-2 font-medium"}
            >
              Assunto
            </label>
            <input
              type={"text"}
              id={"subject"}
              required
              className={"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"}
              placeholder={"Apenas um assunto..."}
            />
          </div>
          <div className={"mb-6"}>
            <label
              htmlFor={"message"}
              className={"text-white block text-sm mb-2 font-medium"}
            >
              Mensagem
            </label>
            <textarea
              name={"message"}
              id={"message"}
              className={"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"}
              placeholder={"Vamos conversar sobre..."}
            />
          </div>
          <button
            type={"submit"}
            className={"bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"}
          >
            Envie uma mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
