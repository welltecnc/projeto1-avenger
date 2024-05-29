import Container from "@/components/Container"

export default function App({Component,pages}){
  return(
    <>
    <Container>
    	  <Component {...pages}/>
    </Container>
    </>
  )
}