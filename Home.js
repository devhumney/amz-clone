import React from 'react';
import blackgradient from './img/BLACKGRADIENT.png';

import './home.css';
import Product from './Product';
import DOUGH from './img/IMAGE1.png';
import BABY from './img/BABY.png';



function Home() {
return (
    <div className='home'>
<div className="home_container">
<img className='home_img' src={ blackgradient } />


<div className="homerow1">
< Product title={"NFT Example"} price={1} image={ DOUGH } rating={3} />
< Product title={"NFT Example"} price={1} image={ BABY } rating={3} />
< Product title={"NFT Example"} price={1} image={ DOUGH } rating={3} />
< Product title={"NFT Example"} price={1} image={ DOUGH } rating={3}  />


</div>

<div className="homerow">
< Product title={"NFT Example"} price={1} image={ DOUGH } rating={3}/>
< Product title={"NFT "} price={15} image={ BABY } rating={5}/>
    {/*product*/}
    < Product title={"NFT Example"} price={1} image={ DOUGH } rating={3}  />
< Product title={"NFT "} price={15} image={ BABY } rating={5} />
</div>

<div className="homerow">
    {/*product*/}

</div>
        </div>
    </div>
  );
}


export default Home;