import Image from "next/image";
import Link from "next/link";
import React from "react";

import brandImg1 from "../../public/images/brand/anyone.png";
import brandImg4 from "../../public/images/brand/solana.png";
import brandImg3 from "../../public/images/brand/ethereum.png";

const BrandList = () => {
  return (
    <div className="brand-list-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '7rem',
      padding: '2rem',
      flexWrap: 'wrap'
    }}>
            <Link 
        href="https://ethereum.org" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Image
          src={brandImg3}
          width={250}
          height={80}
          alt="Ethereum"
          style={{
            objectFit: 'contain'
          }}
        />
      </Link>

      <Link 
        href="https://anyone.io" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Image
          src={brandImg1}
          width={250}
          height={80}
          alt="Anyone"
          style={{
            objectFit: 'contain'
          }}
        />
      </Link>

      <Link 
        href="https://solana.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Image
          src={brandImg4}
          width={280}
          height={90}
          alt="Solana"
          style={{
            objectFit: 'contain'
          }}
        />
      </Link>
    </div>
  );
};

export default BrandList;
