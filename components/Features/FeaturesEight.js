import React from "react";
import Image from "next/image";

const FeaturesEight = () => {
  const teamMembers = [
    {
      name: "Likeur",
      avatar: "https://avatars.githubusercontent.com/u/102558960?v=4"
    },
    {
      name: "M. Irung",
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4"
    },
    {
      name: "B. Ng",
      avatar: "https://avatars.githubusercontent.com/u/31113941?v=4"
    }
  ];

  return (
    <div className="rainbow-features-area" style={{
      backgroundColor: '#0a0a0a',
      color: 'white',
      padding: '40px 0 120px 0',
      marginTop: '0px',
      marginBottom: '60px'
    }}>
      <div className="container">
        {/* Features Grid - 2x3 Layout */}
        <div className="row g-4 mb-5">
          {/* Top Row - 3 cards */}
          {/* Card 1: Network Nodes */}
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
            <div
              className="feature-card h-100 p-4 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                background: 'rgba(26, 26, 26, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(58, 106, 207, 0.2)',
                borderRadius: '20px',
                minHeight: '300px',
                transition: 'all 0.4s ease',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.6)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(58, 106, 207, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div className="feature-icon mb-4">
                {/* Network nodes visualization */}
                <div style={{ position: 'relative', width: '120px', height: '80px' }}>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '20px',
                    width: '12px',
                    height: '12px',
                    background: '#3A6ACF',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(58, 106, 207, 0.5)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: '15px',
                    width: '10px',
                    height: '10px',
                    background: '#5533ff',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgba(85, 51, 255, 0.5)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '30px',
                    width: '14px',
                    height: '14px',
                    background: '#3A6ACF',
                    borderRadius: '50%',
                    boxShadow: '0 0 12px rgba(58, 106, 207, 0.5)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '25px',
                    width: '8px',
                    height: '8px',
                    background: '#5533ff',
                    borderRadius: '50%',
                    boxShadow: '0 0 6px rgba(85, 51, 255, 0.5)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    background: 'linear-gradient(45deg, #3A6ACF, #5533ff)',
                    borderRadius: '50%',
                    boxShadow: '0 0 15px rgba(58, 106, 207, 0.7)'
                  }}></div>
                  {/* Connection lines */}
                  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3 }}>
                    <line x1="26" y1="16" x2="60" y2="40" stroke="#3A6ACF" strokeWidth="1"/>
                    <line x1="60" y1="40" x2="95" y2="36" stroke="#3A6ACF" strokeWidth="1"/>
                    <line x1="60" y1="40" x2="44" y2="65" stroke="#3A6ACF" strokeWidth="1"/>
                    <line x1="60" y1="40" x2="95" y2="60" stroke="#3A6ACF" strokeWidth="1"/>
                  </svg>
                </div>
              </div>
              <h4 className="feature-title mb-3" style={{ color: 'white', fontSize: '1.8rem', fontWeight: '600' }}>
                Network Nodes
              </h4>
              <p className="feature-description" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Decentralized network of nodes ensuring reliability, security, and global accessibility for all DeBros applications.
              </p>
            </div>
          </div>

          {/* Card 2: Secure by default */}
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-duration="700" data-sal-delay="200">
            <div
              className="feature-card h-100 p-4 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                background: 'rgba(26, 26, 26, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(58, 106, 207, 0.2)',
                borderRadius: '20px',
                minHeight: '300px',
                transition: 'all 0.4s ease',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.6)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(58, 106, 207, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div className="feature-icon mb-4">
                <div style={{
                  width: '80px',
                  height: '80px',
                  border: '2px solid rgba(58, 106, 207, 0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  background: 'rgba(58, 106, 207, 0.1)'
                }}>
                  {/* Enhanced fingerprint icon */}
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(58, 106, 207, 0.6) 2px, rgba(58, 106, 207, 0.6) 4px)',
                    borderRadius: '50%',
                    opacity: 0.8
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    width: '30px',
                    height: '30px',
                    border: '2px solid rgba(58, 106, 207, 0.4)',
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}></div>
                </div>
              </div>
              <h4 className="feature-title mb-3" style={{ color: 'white', fontSize: '1.8rem', fontWeight: '600' }}>
                Secure by default
              </h4>
              <p className="feature-description text-center" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Built-in security protocols and encryption ensure your data and transactions are protected at every level.
              </p>
            </div>
          </div>

          {/* Card 3: Faster than light */}
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-duration="700" data-sal-delay="300">
            <div
              className="feature-card h-100 p-4 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                background: 'rgba(26, 26, 26, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(58, 106, 207, 0.2)',
                borderRadius: '20px',
                minHeight: '300px',
                transition: 'all 0.4s ease',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.6)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(58, 106, 207, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div className="feature-icon mb-4">
                <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', marginBottom: '15px' }}>
                  ⬇ Download &nbsp;&nbsp;&nbsp;&nbsp; 14.34 mbps
                </div>
                <svg width="120" height="60" viewBox="0 0 120 60" style={{ opacity: 0.9 }}>
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#3A6ACF', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#5533ff', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="none"
                    stroke="url(#chartGradient)"
                    strokeWidth="3"
                    points="10,45 25,35 40,40 55,25 70,30 85,15 100,20 115,10"
                  />
                  {/* Glow effect */}
                  <polyline
                    fill="none"
                    stroke="url(#chartGradient)"
                    strokeWidth="1"
                    opacity="0.5"
                    points="10,45 25,35 40,40 55,25 70,30 85,15 100,20 115,10"
                    filter="blur(2px)"
                  />
                </svg>
              </div>
              <h4 className="feature-title mb-3" style={{ color: 'white', fontSize: '1.8rem', fontWeight: '600' }}>
                Lightning Fast
              </h4>
              <p className="feature-description text-center" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Optimized performance and instant transactions powered by cutting-edge blockchain technology.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row - 2 cards */}
        <div className="row g-4">
          {/* Card 4: Developer DAO Governance */}
          <div className="col-lg-6 col-md-6 col-sm-12" data-sal="slide-up" data-sal-duration="700" data-sal-delay="400">
            <div
              className="feature-card h-100 p-4"
              style={{
                background: 'rgba(26, 26, 26, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(58, 106, 207, 0.2)',
                borderRadius: '20px',
                minHeight: '320px',
                transition: 'all 0.4s ease',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.6)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(58, 106, 207, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div className="d-flex align-items-start mb-3">
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(58, 106, 207, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  marginTop: '5px',
                  border: '1px solid rgba(58, 106, 207, 0.3)'
                }}>
                  {/* DAO Governance Icon - Voting/Democracy symbol */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="url(#iconGradient)" strokeWidth="2" fill="rgba(58, 106, 207, 0.2)"/>
                    <path d="M9 9L11 11L15 7" stroke="url(#iconGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#3A6ACF'}} />
                        <stop offset="100%" style={{stopColor: '#5533ff'}} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'rgba(58, 106, 207, 0.8)', fontSize: '0.8rem', marginBottom: '5px' }}>DAO</div>
                </div>
              </div>

              <div className="mb-4" style={{ height: '120px', position: 'relative' }}>
                {/* DAO Governance Visualization - Simple Voting */}
                <svg width="100%" height="120" viewBox="0 0 300 120" style={{ opacity: 0.9 }}>
                  <defs>
                    <linearGradient id="daoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#3A6ACF', stopOpacity: 0.8}} />
                      <stop offset="100%" style={{stopColor: '#5533ff', stopOpacity: 0.8}} />
                    </linearGradient>
                  </defs>

                  {/* Central Proposal */}
                  <rect x="110" y="35" width="80" height="50" rx="8" fill="rgba(58, 106, 207, 0.2)" stroke="#3A6ACF" strokeWidth="2"/>
                  <text x="150" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PROPOSAL</text>
                  <text x="150" y="70" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="10">#001</text>

                  {/* YES Vote */}
                  <circle cx="60" cy="60" r="20" fill="rgba(58, 106, 207, 0.3)" stroke="#3A6ACF" strokeWidth="2"/>
                  <path d="M 50 60 L 57 67 L 70 52" stroke="#3A6ACF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="60" y="95" textAnchor="middle" fill="#3A6ACF" fontSize="10" fontWeight="bold">YES</text>

                  {/* NO Vote */}
                  <circle cx="240" cy="60" r="20" fill="rgba(255, 100, 100, 0.3)" stroke="#ff6464" strokeWidth="2"/>
                  <path d="M 230 50 L 250 70 M 250 50 L 230 70" stroke="#ff6464" strokeWidth="3" strokeLinecap="round"/>
                  <text x="240" y="95" textAnchor="middle" fill="#ff6464" fontSize="10" fontWeight="bold">NO</text>

                  {/* Simple arrows */}
                  <path d="M 85 60 L 105 60" stroke="rgba(58, 106, 207, 0.6)" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <path d="M 195 60 L 215 60" stroke="rgba(255, 100, 100, 0.6)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

                  <defs>
                    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="rgba(255, 255, 255, 0.6)"/>
                    </marker>
                  </defs>
                </svg>
              </div>

              <h4 className="feature-title mb-3" style={{ color: 'white', fontSize: '1.8rem', fontWeight: '600' }}>
                Developer DAO Governance
              </h4>
              <p className="feature-description" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Community-driven governance where developers vote on project decisions, funding allocation, and ecosystem direction through decentralized proposals.
              </p>
            </div>
          </div>

          {/* Card 5: Community Trust (with team members) */}
          <div className="col-lg-6 col-md-6 col-sm-12" data-sal="slide-up" data-sal-duration="700" data-sal-delay="500">
            <div
              className="feature-card h-100 p-4"
              style={{
                background: 'rgba(26, 26, 26, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(58, 106, 207, 0.2)',
                borderRadius: '20px',
                minHeight: '320px',
                transition: 'all 0.4s ease',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.6)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(58, 106, 207, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div className="d-flex align-items-start mb-4">
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(58, 106, 207, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  marginTop: '5px',
                  border: '1px solid rgba(58, 106, 207, 0.3)'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'linear-gradient(45deg, #3A6ACF, #5533ff)',
                    borderRadius: '3px'
                  }}></div>
                </div>
              </div>

              <h4 className="feature-title mb-3" style={{ color: 'white', fontSize: '1.8rem', fontWeight: '600' }}>
                Community Trust
              </h4>
              <p className="feature-description mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Built by developers, for developers. Join a trusted community of innovators shaping the future of Web3.
              </p>

              {/* Team Members */}
              <div className="team-members">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center mb-2"
                    style={{
                      padding: '10px 15px',
                      background: 'rgba(58, 106, 207, 0.1)',
                      borderRadius: '25px',
                      marginBottom: '10px',
                      border: '1px solid rgba(58, 106, 207, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div
                      className="avatar-wrapper me-3"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid rgba(58, 106, 207, 0.4)'
                      }}
                    >
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={36}
                        height={36}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '500' }}>
                      {member.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesEight;
