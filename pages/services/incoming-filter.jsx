import React from 'react'
import Head from 'next/head'

export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/incoming-spam-filters?populate=income.homeboxrow,income.homeboxrow.col');

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        incomeData: data.data[0],
      },
    };
  } catch (error) {
    console.error('Website is under maintenance:', error);

    return {
      props: {
        incomeData: null,
        error: error.message,
      },
    };
  }
}


export default function IncomingFilter({ incomeData, error }) {
  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error}</p>
      </div>
    );
  }

  const income = incomeData?.income || [];

  return (
    <div>
        <Head>
        <title>{income[0]?.title}</title>
        <meta property="og:locale" content="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={income[0]?.description} />
        <meta name="author" content="Spam Cloud" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href={income[0]?.canonical} />
        <meta property="og:title" content={income[0]?.ogtitle} />
        <meta property="og:description" content={income[0]?.ogdescription} />
        <meta property="og:image" content={income[0]?.ogimage} />
        <meta property="og:url" content={income[0]?.ogurl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={income[0]?.ogtitle} />
        <meta name="twitter:description" content={income[0]?.ogdescription} />
        <meta name="twitter:image" content={income[0]?.ogimage} />
        </Head>

        {/* banner section start */}

        <section>
        <div className="grid grid-cols-2 gap-0  incoming-banner-column  ">

  <div className='incoming-banner-column'>
    <h1 className='text-center incoming-banner-heading'>
    {income[1]?.heading}
    </h1>
    <p className='incoming-banner-para'>{income[1]?.para}</p>
  </div>
  <div className='incoming-banner-column'>
<img  className='incoming-banner-image' src={income[1]?.image} alt="" />
  </div>  

</div>
        </section>
        {/* banner section ends */}

        {/* incomingspamfilter starts */}

        <section className='incoming-spamfilter-section'>
          <div className="grid grid-cols-2 gap-2 incoming-filter-column">
            <div className='incoming-spamfilter-column1'>
              <img className='incoming-spamfilter-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1726573037/Untitled_design_4_ou0gkh.png" alt="" />
            </div>
            <div className='incoming-spamfilter-column2'>
              <h1  className='incoming-spamfilter-heading'>
              {income[2]?.heading}
              </h1>
              <p className='incoming-spamfilter-para'>
              {income[2]?.para}</p>
            </div>
          </div>
        </section>
        {/* incomingspamfilter section ends */}

{/* incoming box-section-starts */}
<h1 className=' text-center incoming-box-section-heading'>Why Choose Spam Cloud Incoming Filter</h1>

<section className='incoming-spamfilter-box-section'>
<div className="grid grid-cols-2 gap-2 incoming-spamfilter-box-row">
{income[3]?.homeboxrow?.map((row) => 
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
