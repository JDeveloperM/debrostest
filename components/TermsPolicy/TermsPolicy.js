import Link from "next/link";
import React from "react";

const TermsPolicy = () => {
  return (
    <>
      <div className="rbt-main-content mb--0 policy-page">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content rainbow-section-gap policy-content">
            <div className="banner-area">
              <div className="settings-area">
                <h3 className="title">Terms of Use</h3>
              </div>
            </div>
            <div className="content-page pb--50">
              <div className="chat-box-list">
                <div className="content">
                  <h4>Welcome to DeBros</h4>
                  <p>
                    DeBros operates as a decentralized platform designed to provide users with services that do not rely on centralized data collection or storage. By accessing or using the DeBros website or services (collectively, the "Service"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to all of the terms and conditions of this agreement, do not use the Service.
                  </p>

                  <ol className="rbt-terms-content">
                    <li>
                      <h5>Acceptance of Terms</h5>
                      <p>Your use of the Service constitutes your acceptance of these Terms and any modifications thereof. These Terms apply to all users of the Service.</p>
                    </li>
                    <li>
                      <h5>Description of Service</h5>
                      <p>DeBros facilitates a decentralized environment where users interact directly via blockchain or peer-to-peer technologies. The Service may evolve over time, introducing new features or removing outdated ones without notice.</p>
                    </li>
                    <li>
                      <h5>User Responsibilities</h5>
                      <ul>
                        <li><strong>Compliance with Laws:</strong> You agree to comply with all local, state, national, and international laws, rules, and regulations applicable to your use of the Service.</li>
                        <li><strong>Prohibited Conduct:</strong> You may not engage in any activity that interferes with or disrupts the Service or the networks connected to the Service, including but not limited to, hacking, spamming, or using any unauthorized scripts or bots.</li>
                      </ul>
                    </li>
                    <li>
                      <h5>Intellectual Property</h5>
                      <ul>
                        <li>The Service, including all content, interfaces, and software, are owned by DeBros or its licensors. You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial use.</li>
                        <li>You must not reproduce, distribute, or create derivative works without explicit permission from DeBros.</li>
                      </ul>
                    </li>
                    <li>
                      <h5>User Data and Privacy</h5>
                      <ul>
                        <li>DeBros does not collect, store, or process any personal data from its users. Interactions occur directly between users or through decentralized protocols, ensuring privacy and data sovereignty.</li>
                        <li>All blockchain transactions are public by nature, but DeBros does not have access to or control over these transactions.</li>
                      </ul>
                    </li>
                    <li>
                      <h5>Third-Party Links</h5>
                      <p>The Service might include links to third-party websites or services. DeBros is not responsible for the content or practices of these third parties.</p>
                    </li>
                    <li>
                      <h5>Disclaimer of Warranties</h5>
                      <p>DeBros provides the Service on an "as is" and "as available" basis. We do not guarantee that the Service will be uninterrupted, timely, secure, or error-free.</p>
                    </li>
                    <li>
                      <h5>Limitation of Liability</h5>
                      <p>To the extent permitted by law, DeBros will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, data, or other intangible losses resulting from your use of the Service.</p>
                    </li>
                    <li>
                      <h5>Indemnification</h5>
                      <p>You agree to defend, indemnify, and hold harmless DeBros and its affiliates, officers, agents, and employees from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Service, your violation of these Terms, or your violation of any rights of another.</p>
                    </li>
                    <li>
                      <h5>Changes to Terms</h5>
                      <p>DeBros may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.</p>
                    </li>
                    <li>
                      <h5>Termination</h5>
                      <p>We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</p>
                    </li>
                    <li>
                      <h5>Governing Law</h5>
                      <p>These Terms shall be governed and construed in accordance with the laws of Europe, without regard to its conflict of law provisions.</p>
                    </li>
                    <li>
                      <h5>Contact Information</h5>
                      <p>If you have any questions about these Terms, please contact us at:</p>
                      <p><a href="mailto:info@debros.io">Email: info@debros.io</a></p>
                      <p>Effective Date: 01/01/2025</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPolicy;