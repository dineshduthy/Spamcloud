import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/abouts?populate=about.but,about.col,about.col.but');

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        aboutData: data.data[0],
      },
    };
  } catch (error) {
    console.error('website is under maintanance:', error);


    return {
      props: {
        aboutData: null,
        error: error.message,
      },


    };
  }
}


export default function about({ aboutData, error }) {

  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error}</p>
      </div>
    );
  }

  const about = aboutData?.about || [];
  return (
    <div>
        <Head>
        <title>{about[4]?.title}</title>
      <meta property="og:locale" content="en" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content={about[4]?.description} />
<meta name="author" content="Spam Cloud" />
<meta name="robots" content="index, follow" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="canonical" href={about[4]?.canonical} />
<meta property="og:title" content={about[4]?.ogtitle} />
<meta property="og:description" content={about[4]?.ogdescription} />
<meta property="og:image" content={about[4]?.ogimage} />
<meta property="og:url" content={about[4]?.ogurl} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={about[4]?.ogtitle} />
<meta name="twitter:description" content={about[4]?.ogdescription} />
<meta name="twitter:image" content={about[4]?.ogimage} />

        </Head>

        {/* banner section start */}

        <section>
        <div className="grid grid-cols-2 gap-2  banner-column  ">

  <div className='about-banner-column'>
    <h1 className='text-center banner-heading'>
    {about[0]?.heading}
    </h1>
    <p className='banner-para'>{about[0]?.para}</p>
  </div>
  <div className='about-banner-column'>
<img  className='banner-image' src={about[0]?.image} alt="" />
  </div>

</div>
        </section>
        {/* banner section ends */}

        {/* welcome to spam cloud section starts */}

        <section className='welcome-to-spamcloud-section'>
          <div className="grid grid-cols-2 gap-2 welcome-to-spamcloud-column">
            <div className='welcome-to-spamcloud-column1'>
              <img className='welcome-to-spamcloud-image' src={about[1]?.image} alt="" />
            </div>
            <div className='welcome-to-spamcloud-column2'>
              <h1 className='welcome-to-spamcloud-heading'>

              {about[1]?.heading}
              </h1>
              <p className='welcome-to-spamcloud-para'>
              {about[1]?.para}
               </p>

            </div>
          </div>
        </section>
        {/* welcome to spam cloud section ends */}

{/* box-section-starts */}

<section className='box-section'>
<div className="grid grid-cols-3 gap-3 box-row">


  {about[2]?.col?.map((item) => (


        <div key={item.id} className='box-section-column'>

          <h2>{item.heading}</h2>
          <p>{item.para}</p>
          <button><Link href={item.but.url} className='box-section-learnmore'>{item.but.name} </Link></button>
        </div>
      ))}

  </div>
</section>
{/* box-section-ends */}


{/* our services section starts */}
<section className='our-services-section'>

  <h1 className='text-center our-services-heading'>
    Our Services
  </h1>
<div className="grid grid-cols-3 gap-3 our-services-row">

  {about[3]?.col?.map((item) => (
    <div key={item.id} className='our-services-section-column'>
      <h2>{item.heading}</h2>
      <p>{item.para}</p>
      <button className='learnmore-div' ><Link href={item.but.url} className='our-services-section-learnmore'>{item.but.name} </Link></button>
    </div>
  ))}

  </div>
</section>
    </div>
  )
}
