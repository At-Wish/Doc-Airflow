import React, { PropsWithChildren } from 'react';
import Head from '@docusaurus/Head';
import NotificationBanner from '../components/NotificationBanner'; // Import the banner component

const Root: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      {/* Add the banner at the top */}
      <NotificationBanner />
      
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {children}
    </>
  );
};

export default Root;
