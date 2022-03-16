import React, { useState } from 'react'
import './Header.css'
import BABY from './img/BABY.png'
import walletAddress from './App'
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ConstructionIcon from '@mui/icons-material/Construction';
import CollectionsIcon from '@mui/icons-material/Collections';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';



function Header() {

  const [walletAddress, setWalletAddress] = useState(null)

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {

  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
  setWalletAddress(accounts[0])



    }

    
  }
  
  

  

  return (
    <div className='header'>
        
        <a href="/">
            <DensityMediumIcon className='settings' />
            </a>

         <a href="/">
        <img className= "header_logo" src={BABY}></img>
        </a>
        
        <div className="header_search">
            <input type="text" className="header_searchInput" />
<a className="headersearchicon" href=""><TravelExploreIcon /></a>
        </div>

<div className="header_nav">
    
    <div className="header_option">
        <a onClick={connectWallet} className="header_option">       
         <span className="header_optionlineOne">Hello</span>
        <span className="header_optionlineTWO">Account: {walletAddress.substring(0,6)}...</span>
        <WalletIcon className='header_searchicon' />
        </a>
</div>

    <div className="header_option">
    <a href="#" className="header_option"> 
    <span className="header_optionlineOne">Create</span>
        <span className="header_optionlineTWO">& Mint</span>
        <ConstructionIcon />
        </a>
    </div>
   
   
    <div className="header_option">
    <a href="/YourNFTs" className="header_option"> 
    <span className="header_optionlineOne">Your</span>
        <span className="header_optionlineTWO">NFTs</span>
        <CollectionsIcon />
        </a>
    
    
    
  </div>
</div>
</div>
  )
}

export default Header;