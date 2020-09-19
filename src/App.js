import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Coins from './coins'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-bootstrap/Fade'
import Button from 'react-bootstrap/Button'
import Header from './header'
import Footer from './footer'
import './App.css';
import img from './img/1.jpg';
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false
function App() {
  const [open, setOpen] = useState(false);
  const [coins,setCoins]=useState([])
  const [search,setSearch]=useState('')
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data)
    }).catch(error=>console.log(error))
  },[])

  const handleChange=e=>{
    setSearch(e.target.value)
  }

  const filteredCoins=coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())

  )
  return (
<>
<Header/>
<section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-lg-6 pt-3 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto">
              
              <h1 style={{color:"#333"}}>Find Any CryptoCurrency Here And Start Trading!! </h1>
              <div className="mt-3">
              <div className="row">
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        className="col-6  btn-lg btn-info mx-auto"
      >
       Search Currency
      </Button>
      </div>
     
      <br/>
      <Fade in={open}>
        <div id="example-fade-text">
        <form>
            <input type="text" className="col-12 mx-auto" onChange={handleChange} placeholder="Enter Currency Name"/>
          </form>
         </div>
      </Fade>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 header-img pt-3">
              <img src={img} className="img-fluid animated" alt="home-img"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="coin-app mx-auto App-header ">
        <div className="coin-search">
          <h1 className="coin-text ">
            {/* Search Crypto Currency */}
          </h1>
         
       
        </div>
        <div className="row p-2 m-2">
        {filteredCoins.map(coin=>{
          return(

      <Coins key={coin.id} 
      name={coin.name} 
      image={coin.image} 
      symbol={coin.symbol} 
      volume={coin.total_volume}
      price={coin.current_price}
      priceChange={coin.price_change_percentage_24h}
      marketcap={coin.market_cap}
      marketcaprank={coin.market_cap_rank}
      />
    
          );
        })}
      </div>
</div>
<Footer/>
</>
  );
}

export default App;
