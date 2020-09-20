import React from 'react'
import Card from 'react-bootstrap/Card';
const Coins = ({name,image,symbol,price,volume,priceChange,marketcap,marketcaprank}) => {
    return (
  
     <Card style={{ width: '18rem' }} className="m-2 col-md-6 col-sm-12 col-lg-3 mx-auto cardd">
         <br/>
    <Card.Img variant="top" src={image} style={{ width: '100px',height:'100px'}} className="mx-auto d-block"/>
    <Card.Body>
    <Card.Title><h2>{name}</h2></Card.Title>
    <hr/>
    <Card.Text>
    <p className="coin-price">Price = ₹{price}</p>
                    <p className="coin-volume">Volume = ₹{volume.toLocaleString()}</p>
                    {
    priceChange<0?(<p className="coin-percent red" style={{color:"red"}}>
      <i class="fa fa-arrow-circle-down"></i>  {priceChange.toFixed(2)}%
    </p>):(<p className="coin-percent green" style={{color:"#009988"}}>
    <i class="fa fa-arrow-circle-up"></i>  {priceChange.toFixed(2)}%
    </p>)
}
<p className="coin-marketcap">
    MKT Cap:₹{marketcap.toLocaleString()}
</p>
<p className="coin-marketcap">
    Market Rank : {marketcaprank.toLocaleString()}
</p>
    </Card.Text>
     </Card.Body>
     <br/>
</Card>

  
    )
}
export default Coins;