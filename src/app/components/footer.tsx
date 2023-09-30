export const Footer = () => {
  return(
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="px-10 md:px-20 py-10 flex justify-between items-center">
        <img src={"/images/logo.png"} className={" h-8 md:h-14"} alt={"logo"}/>
        <p className="text-slate-400 text-xs md:text-base">Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
