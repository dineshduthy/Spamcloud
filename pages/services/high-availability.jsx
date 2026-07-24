    import React from 'react'
    import Head from 'next/head'

    export async function getServerSideProps() {
      try {
        const res = await fetch('https://strapi.sixthstartech.com/api/high-availabilities?populate=ha.homeboxrow,ha.homeboxrow.col');
    
        // Check if response is OK
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
    
        const data = await res.json();
    
        return {
          props: {
            haData: data.data[0],
          },
        };
      } catch (error) {
        console.error('Website is under maintenance:', error);
    
        return {
          props: {
            carboniotData: null,
            error: error.message,
          },
        };
      }
    }
    

    
    export default function HighAvailability({ haData, error }) {
      if (error) {
        return (
          <div>
            <h1>Error loading data</h1>
            <p>{error}</p>
          </div>
        );
      }
    
      const ha = haData?.ha || [];

      
      return (
        <div>
<Head>

<title>{ha[11]?.title}</title>
        <meta property="og:locale" content="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={ha[11]?.description} />
        <meta name="author" content="Spam Cloud" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href={ha[11]?.canonical} />
        <meta property="og:title" content={ha[11]?.ogtitle} />
        <meta property="og:description" content={ha[11]?.ogdescription} />
        <meta property="og:image" content={ha[11]?.ogimage} />
        <meta property="og:url" content={ha[11]?.ogurl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ha[11]?.ogtitle} />
        <meta name="twitter:description" content={ha[11]?.ogdescription} />
        <meta name="twitter:image" content={ha[11]?.ogimage} />
        
</Head>


        <section>
        <div className="grid grid-cols-2 gap-0  high-availability-banner-column  ">

  <div className='high-availability-banner-column'>
    <h1 className='text-center high-availability-banner-heading'>
    {ha[0]?.heading}
    </h1>
    <p className='high-availability-banner-para'>
    {ha[0]?.para}</p>
  </div>
  <div className='high-availability-banner-column'>
<img  className='high-availability-banner-image' src={ha[0]?.image} alt="" />
  </div>  

</div>
        </section>
        <div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[1]?.heading}</h1>
        <p>{ha[1]?.para}</p>
      </div>

      <div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[2]?.heading}</h1>
        <p>{ha[2]?.para}</p>
      </div>


      <div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[3]?.heading}</h1>
        <p>{ha[3]?.para}</p>
      </div>

      <div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[4]?.heading}</h1>
        <p>{ha[4]?.para}</p>
      </div>
      <div className='high-availability-second-content'>
        <h1 className='benefits-heading'>
          Benefits of Greater Accessibility
        </h1>
      </div>

      <section className='incoming-spamfilter-box-section'>
<div className="grid grid-cols-2 gap-2 incoming-spamfilter-box-row">
  {ha[5]?.homeboxrow?.map((row) => 
      row.col.map((item) => (
        <div className='incoming-spamfilter-box-section-column' key={item.id}>
          <h1>{item.heading}</h1>
          <p>{item.para}</p>
          <i className={item.icon}></i>
        </div>
      ))
    )}

  </div>
  
</section>

<div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[6]?.heading}</h1>
        <p>{ha[6]?.para}</p>

      </div>

      <div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[7]?.heading}</h1>
        <p>{ha[7]?.para}</p>
      </div>


      <div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[8]?.heading}</h1>
        <p>{ha[8]?.para}</p>
      </div>

      <div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[9]?.heading}</h1>
        <p>{ha[9]?.para}</p>
      </div>

      <div className='high-availability-second-content'>
        <h1 className='text-center'>{ha[10]?.heading}</h1>
        <p>{ha[10]?.para}</p>
      </div>
        </div>
      )
    }
    