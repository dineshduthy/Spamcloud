import React from 'react'
import Head from 'next/head'
import Link from 'next/link';


export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/carbonio-mails?populate=carbonio.homeboxrow,carbonio.homeboxrow.col');

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        carbonioData: data.data[0],
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


export default function CarbonioMailService({ carbonioData, error }) {

  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error}</p>
      </div>
    );
  }

  const carbonio = carbonioData?.carbonio || [];

  return (
    <div>
        <Head>
        <title>{carbonio[3]?.title}</title>
        <meta property="og:locale" content="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={carbonio[3]?.description} />
        <meta name="author" content="Spam Cloud" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href={carbonio[3]?.canonical} />
        <meta property="og:title" content={carbonio[3]?.ogtitle} />
        <meta property="og:description" content={carbonio[3]?.ogdescription} />
        <meta property="og:image" content={carbonio[3]?.ogimage} />
        <meta property="og:url" content={carbonio[3]?.ogurl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={carbonio[3]?.ogtitle} />
        <meta name="twitter:description" content={carbonio[3]?.ogdescription} />
        <meta name="twitter:image" content={carbonio[3]?.ogimage} />

        </Head>

        {/* banner section start */}

        <section>
        <div className="grid grid-cols-2 gap-0  incoming-banner-column  ">

  <div className='carbonio-banner-column'>
    <h1 className='text-center incoming-banner-heading'>
    {carbonio[0]?.heading}
    </h1>
    <p className='incoming-banner-para'>{carbonio[0]?.para}</p>
  </div>
  <div className='incoming-banner-column'>
<img  className='carbonio-banner-image' src={carbonio[0]?.image} alt="" />
  </div>

</div>
        </section>
        {/* banner section ends */}

        {/* incomingspamfilter starts */}

        <section className='incoming-spamfilter-section'>
          <div className="grid grid-cols-2 gap-2 incoming-filter-column">
            <div className='incoming-spamfilter-column1'>
              <img className='carbonio-second-image' src={carbonio[1]?.image} alt="" />
            </div>
            <div className='incoming-spamfilter-column2'>
              <h1  className='incoming-spamfilter-heading'>
              {carbonio[1]?.heading}
              </h1>
              <p className='incoming-spamfilter-para'>
              {carbonio[1]?.para}
              </p>
            </div>
          </div>
        </section>
        {/* incomingspamfilter section ends */}

{/* incoming box-section-starts */}
<h1 className=' text-center incoming-box-section-heading'>Why Choose Carbonio Email Server?</h1>

<section className='incoming-spamfilter-box-section'>
  <div className="grid grid-cols-2 gap-2 incoming-spamfilter-box-row">
    {carbonio[2]?.homeboxrow?.map((row) =>
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
