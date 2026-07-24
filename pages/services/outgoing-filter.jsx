import React from 'react'
import Head from 'next/head'

export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/outgoing-filters?populate=outgoing.homeboxrow,outgoing.homeboxrow.col');

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        outgoingData: data.data[0],
      },
    };
  } catch (error) {
    console.error('Website is under maintenance:', error);

    return {
      props: {
        outgoingData: null,
        error: error.message,
      },
    };
  }
}

export default function OutgoingFilter({ outgoingData, error }) {

  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error}</p>
      </div>
    );
  }

  const outgoing = outgoingData?.outgoing || [];
  return (
    <div>
        <Head>
        <title>{outgoing[0]?.title}</title>
        <meta property="og:locale" content="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={outgoing[0]?.description} />
        <meta name="author" content="Spam Cloud" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href={outgoing[0]?.canonical} />
        <meta property="og:title" content={outgoing[0]?.ogtitle} />
        <meta property="og:description" content={outgoing[0]?.ogdescription} />
        <meta property="og:image" content={outgoing[0]?.ogimage} />
        <meta property="og:url" content={outgoing[0]?.ogurl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={outgoing[0]?.ogtitle} />
        <meta name="twitter:description" content={outgoing[0]?.ogdescription} />
        <meta name="twitter:image" content={outgoing[0]?.ogimage} />
        </Head>

        {/* banner section start */}

        <section>
        <div className="grid grid-cols-2 gap-0  incoming-banner-column  ">

  <div className='incoming-banner-column'>
    <h1 className='text-center incoming-banner-heading'>
    {outgoing[1]?.heading}
    </h1>
    <p className='incoming-banner-para'>{outgoing[1]?.para}</p>
  </div>
  <div className='incoming-banner-column'>
<img  className='outgoing-banner-image' src={outgoing[1]?.image} alt="" />
  </div>  

</div>
        </section>
        {/* banner section ends */}

        {/* incomingspamfilter starts */}

        <section className='incoming-spamfilter-section'>
          <div className="grid grid-cols-2 gap-2 incoming-filter-column">
            <div className='incoming-spamfilter-column1'>
              <img className='incoming-spamfilter-image' src={outgoing[2]?.image} alt="" />
            </div>
            <div className='incoming-spamfilter-column2'>
              <h1  className='incoming-spamfilter-heading'>
              {outgoing[2]?.heading}
              </h1>
              <p className='incoming-spamfilter-para'>
              {outgoing[2]?.para}
              </p>
            </div>
          </div>
        </section>
        {/* incomingspamfilter section ends */}

{/* incoming box-section-starts */}
<h1 className=' text-center incoming-box-section-heading'>Why Choose Spam Cloud Outgoing Filter</h1>

<section className='incoming-spamfilter-box-section'>
<div className="grid grid-cols-2 gap-2 incoming-spamfilter-box-row">
{outgoing[3]?.homeboxrow?.map((row) => 
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
{/* box-section-ends */}



    </div>
  )
}
