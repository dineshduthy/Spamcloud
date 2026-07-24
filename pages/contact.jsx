import React from 'react';
import Head from 'next/head';
import ContactUsForm from './Forms/ContactUsForm';
import Link from 'next/link';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/contactuses?populate=contact.row,contact.row.phone,contact.row.email,contact.row.website');

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        contactData: data.data[0],
      },
    };
  } catch (error) {
    console.error('Website is under maintenance:', error);

    return {
      props: {
        contactData: null,
        error: error.message,
      },
    };
  }
}

export default function ContactUs({ contactData, error }) {

  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error}</p>
      </div>
    );
  }

  const contact = contactData?.contact || [];

  return (
    <div>
      <Head>
        <title>{contact[0]?.title}</title>
        <meta property="og:locale" content="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={contact[0]?.description} />
        <meta name="author" content="Spam Cloud" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href={contact[0]?.canonical} />
        <meta property="og:title" content={contact[0]?.ogtitle} />
        <meta property="og:description" content={contact[0]?.ogdescription} />
        <meta property="og:image" content={contact[0]?.ogimage} />
        <meta property="og:url" content={contact[0]?.ogurl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={contact[0]?.ogtitle} />
        <meta name="twitter:description" content={contact[0]?.ogdescription} />
        <meta name="twitter:image" content={contact[0]?.ogimage} />
      </Head>

      <div className='main'>

        {/* banner sec starts */}
        <section className="contact-banner-sec" style={{ backgroundImage: `url(${contact[1]?.img})` }}>
          <div className="container-1">
            <div className="row ">
              <div className="col-12">
                <h1>{contact[1]?.heading}</h1>
              </div>
            </div>
          </div>
        </section>

        {/* contact form starts */}
        <section className="contact-form-sec">
          <div className="container-1">
            <div className="row">
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.6483831902!2d80.2334966!3d12.9294261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105717f8fe239c9%3A0x45c0f6cf503fc3ea!2sSixth%20Star%20Technologies%20-%20Web%20Hosting%20company%20in%20Chennai!5e0!3m2!1sen!2sin!4v1721981052844!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="col-md-6 contact-form">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </section>

        {/* contact para sec starts */}
        <section className="contact-para-sec">
          <div className="container-1">
            <div className="row ">
              <div className="col-12">
                <p>{contact[2]?.para}</p>
              </div>
            </div>
          </div>
        </section>

        {/* contact address sec starts */}
        <section className="contact-add-sec">
          <div className="container-1 w">
            <div className="row ">
              <div className="col-12">
                <h3 className='text-center'>{contact[3]?.heading}</h3>
                <hr />
                <div className="row contact-add">
                  {contact[3]?.row?.map((row) => (
                    <div key={row.id} className='col-lg-3 col-md-6'>
                      <h3>{row.heading}</h3>
                      <hr />
                      <p>{row.address}</p>
                      <ul className='m-0 p-0'>
                        {row.phone?.map((call) => (
                          <li key={call.id}><i className={call.icon}></i> <Link href={call.link}>{call.number}</Link></li>
                        ))}
                      </ul>
                      <ul className='m-0 p-0'>
                        {row.email?.map((email) => (
                          <li key={email.id}><i className={email.icon}></i> <Link href={email.link}>{email.email}</Link></li>
                        ))}
                      </ul>
                      <ul className='m-0 p-0'>
                        {row.website?.map((site) => (
                          <li key={site.id}><i className={site.icon}></i> <Link href={site.link}>{site.website}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
