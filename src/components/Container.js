import Nav from "./Nav"
import Footer from "./Footer"

//Desestruturando para chamar os componentes filhos
export default function Container({children}){
  return(
    <>

    <Nav/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}