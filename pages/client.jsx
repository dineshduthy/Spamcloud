import React from 'react';
import Head from 'next/head';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/clients?populate=client.row,client.row.img');

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        clientData: data.data[0],
      },
    };
  } catch (error) {
    console.error('Website is under maintenance:', error);

    return {
      props: {
        clientData: null,
        error: error.message,
      },
    };
  }
}

export default function ClientPage({ clientData, error }) {
  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error}</p>
      </div>
    );
  }

  // Access client data properly
  const client = clientData?.client || [];

  return (
    <div>
      <Head>
      <title>{client[2]?.title}</title>
      <meta property="og:locale" content="en" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content={client[2]?.description} />
<meta name="author" content="Spam Cloud" />
<meta name="robots" content="index, follow" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="canonical" href={client[2]?.canonical} />
<meta property="og:title" content={client[2]?.ogtitle} />
<meta property="og:description" content={client[2]?.ogdescription} />
<meta property="og:image" content={client[2]?.ogimage} />
<meta property="og:url" content={client[2]?.ogurl} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={client[2]?.ogtitle} />
<meta name="twitter:description" content={client[2]?.ogdescription} />
<meta name="twitter:image" content={client[2]?.ogimage} />
      </Head>

      <section>
        <div className="grid grid-cols-2 gap-0 client-banner-column">
          <div className='client-banner-column'>
            <h1 className='text-center client-banner-heading'>
              {client[0]?.heading}
            </h1>
            <p className='client-banner-para'>
              {client[0]?.para}
            </p>
          </div>
          <div className='client-banner-column'>
            <img className='client-banner-image' src={client[0]?.image} alt="" />
          </div>
        </div>
      </section>

      {/* Section to display client images */}
      <div>
        {client[1]?.row?.map((row) => (
          <div key={row.id} className='grid grid-cols-4 gap-4 client-row'>
            {row.img?.map((imgItem) => (
              <div key={imgItem.id}>
                <img src={imgItem.img} alt="Client Image" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
