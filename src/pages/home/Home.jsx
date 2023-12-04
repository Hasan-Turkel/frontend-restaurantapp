import Footer from "../../components/Footer"
import "./Home.css"

const Home = () => {

  const props ="position-absolute bottom-0"

    return (

      <>
    <main className="text-white justify-content-center d-flex align-items-center">
   <h1 className="mb-5">The Taste in the Middle of Europe</h1>
    </main>
    <Footer props={props}/>

</>

  )
}

export default Home