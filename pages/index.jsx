import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { StyleSheet, css } from 'aphrodite';
import fadeIn from 'react-animations/lib/fade-in';
import slideInUp from 'react-animations/lib/slide-in-up';
import slideInDown from 'react-animations/lib/slide-in-down';
import tada from 'react-animations/lib/tada';
import zoomInDown from 'react-animations/lib/zoom-in-down';
import slideInLeft from 'react-animations/lib/slide-in-left';  // Importing zoomInDown
import Link from 'next/link';
import ClientSlider from './section/slider';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2s',
  },
  slideInUp: {
    animationName: slideInUp,
    animationDuration: '2s',
  },
  slideInDown: {
    animationName: slideInDown,
    animationDuration: '2s',
  },
  tada: {
    animationName: tada,
    animationDuration: '15s',
  },
  zoomInDown: {
    animationName: zoomInDown,  // Correct usage after import
    animationDuration: '4s',
  },
  slideInLeft: {
    animationName: slideInLeft,  // Correct usage after import
    animationDuration: '4s',
  },
});

export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/homes?populate=banner.but,banner.feature,banner.item,banner.homeboxrow,banner.homeboxrow.col,banner.clientimage');

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        homeData: data.data[0],
      },
    };
  } catch (error) {
    console.error('website is under maintanance:', error);


    return {
      props: {
        homeData: null,
        error: error.message,
      },


    };
  }
}

export default function New({ homeData, error }) {
  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error}</p>
      </div>
    );
  }

  const banner = homeData?.banner || [];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures code runs only on the client-side
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
        <title>My Website</title>
      </Head>

      {/* Banner section starts */}
      <section className="index-banner-sec">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="container" style={{ position: 'relative' }}>
                {/* Only apply animations if client-side rendering */}
                <h1 className={isClient ? css(styles.slideInUp) : ''}>
                  Outgoing SPAM Filter
                </h1>
                <p className={isClient ? css(styles.slideInDown) : ''}>
                  PROTECT AND STOP UNWANTED EMAILS
                </p>
                <button className={isClient ? css(styles.slideInDown) : ''}>
                  <Link href="#">Discover More</Link>
                </button>
              </div>
            </div>

            {/* Additional slides */}
            <div className="carousel-item" data-bs-interval="20000">
              <div className="container">
              <h1 className={isClient ? css(styles.slideInDown) : ''}>
              Incoming SPAM Filter
                </h1>
                <p className={isClient ? css(styles.slideInUp) : ''}>
                  PROTECT UNWANTED EMAILS
                </p>

                <button className={isClient ? css(styles.slideInDown) : ''}>
                  <Link href="#">Discover More</Link>
                </button>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="10000">
              <div className="container">
              <h1 className={isClient ? css(styles.slideInDown) : ''}>
              STOP UNWANTED EMAILS

                </h1>
                <p className={isClient ? css(styles.slideInUp) : ''}>
                Both I/O SPAM Filter
                </p>

                <button className={isClient ? css(styles.slideInDown) : ''}>
                  <Link href="#">Discover More</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* Banner section ends */}

      {/* Services section starts */}
      <section className="index-service-sec">
        <div className="container">
          <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728562780/services-one-shape_hkx7r5.png" className={`${isClient ? css(styles.tada) : ''} shake-img`} alt="" />
          <div className="row index-service">
            <div className="col-md-6">
              <h5>Our Services List</h5>
              <h2>What We’re Offering</h2>
            </div>

            <div className="col-md-6 align-content-center">
              <p>Our services : Incoming spam , outgoing, Both I/O SPAM Filter, Email Archieving</p>
            </div>
          </div>

          <div className="row index-service">
            <div className="col-lg-3 col-md-6">
              <div><i className="fi fi-ts-envelope-download"></i></div>
              <span>01</span>
              <h4>Incoming <br /> SPAM FILTER</h4>
              <Link href="#"><i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <div><i className="fi fi-ts-envelope-dot"></i></div>
              <span>02</span>
              <h4>Outgoing<br /> SPAM FILTER</h4>
              <Link href="#">
                <i className={` fa-solid fa-arrow-right-long`}></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <div><i className="fi fi-bs-mailbox-envelope"></i></div>
              <span>03</span>
              <h4>EMAIL<br /> ARCHIVING</h4>
              <Link href="#"><i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <div><i className="fi fi-ss-email-pending"></i></div>
              <span>04</span>
              <h4>CARBONIO<br /> MAIL</h4>
              <Link href="#"><i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
          </div>

          <div className="row index-service">
            <div className="col-12 text-center align-content-center">
              <p>We substantially illustrate the immense verifiable levels of spam and virus detection service for your business</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services section ends */}

       {/* Home Box Section */}
       <section className='incoming-spamfilter-box-section'>
        <h2 className='text-center'>Our Valubale Clients</h2>
       <ClientSlider />
      </section>

      {/* project sec starts */}

    <section className='index-pro-sec'>
    <div className="container">
  <div className="row ">

    <div className="col-12">

    <div className="row index-pro">

<div className="col-lg-3 col-md-6">
<i className="fi fi-ss-edit-alt"></i>
<h3>17</h3>
<p>years of experience
</p>
</div>

<div className="col-lg-3 col-md-6">
<i className="fi fi-ts-feedback-review"></i>
<h3>400 + </h3>
<p>clients
</p>
</div>

<div className="col-lg-3 col-md-6">
<i className="fi fi-ss-review"></i>
<h3>Trusted</h3>
<p>by top companies
</p>
</div>

<div className="col-lg-3 col-md-6">
<i className="fi fi-ss-employees"></i>
<h3>Expert</h3>
<p>Teams
</p>
</div>

</div>

    </div>

  </div>
</div>
    </section>

      {/* project sec ends */}


      {/* index why choose */}

      <section className="index-whychoose-sec">
      <div className="container">
  <div className="row index-whychoose">

    <div className="col-md-6">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1729659698/spamcloud-bene_gl7za1.jpg" alt="" />
    </div>

    <div className="col-md-6">
    <span>Spam CLoud</span>
    <h2>Essential Features of Email Filtering Services</h2>
    <p className='m-0'>We substantially illustrate the immense verifiable levels of spam and virus detection service for your business.</p>
    <div className='why'>
      <ul>
        <li><i className="fa-solid fa-check"></i>How email identified as spam - Quarantined, tagged, and delivered.</li>
        <li><i className="fa-solid fa-check"></i>Rate of false positives - The number of authenticated emails get blocked.</li>
        <li><i className="fa-solid fa-check"></i>Reporting options - The reporting options are available to detect whitelist and blacklist senders.</li>
        <li><i className="fa-solid fa-check"></i>Filtering and testing - To accelerate the filtering process, the front end test is conducted.</li>
        <li><i className="fa-solid fa-check"></i>Virus protection - Best antivirus software protects your business from malware activities.</li>
      </ul>
    </div>
    </div>

  </div>
</div>
      </section>


      {/* index why choose ends */}

      {/* index protext sec starts */}

      <section className="index-protect-sec">\
      <div className="container">
  <div className="row index-protect">

    <div className="col-12">
      <div className='icon'>
      <i className="fa-solid fa-shield"></i>
      </div>

    <h2>PROTECT AND STOP UNWANTED EMAILS REACHING YOUR NETWORK</h2>
    </div>

  </div>
</div>
      </section>

      {/* index protext sec ends */}

      {/* index tab sec starts */}

      <section className="index-tab-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12 index-tab">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">WHAT MAKES US UNIQUE</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Why choose SixthStar</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Spam soltution
    </button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className='index-tab-con'>
      <ul>
        <li><i className="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Simple to Use</h4>
        <p>Users can easily maintain and transfer your messages through the network within a short span of time.</p>
        </div></li>
        <li><i className="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>More Detection Rate</h4>
        <p>The virus and malware were detected precisely and can be prevented before entering into the network.</p>
        </div></li>
        <li><i className="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Email Flow</h4>
        <p>We offer an additional protective layer for an incoming filter in order to maintain the email flow.</p>
        </div></li>
      </ul>
      <div className='index-tab-con'>
        <div className='left-con'>
        <i className="fi fi-tr-meeting-alt"></i>
        <h3>We have over 17 years of experience</h3>
        <button><Link href='/contact'>Contact Us</Link></button>
        </div>
        <div className='right-tab-con'>
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1729660324/spam-cloud-exp-img_xecpxl.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className='index-tab-con'>
      <ul>
        <li><i className="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Incoming Spam Filter</h4>
        <p>SixthStar provides you an excellent incoming spam filter in which users send mails to the recipient.</p>
        </div></li>
        <li><i className="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Outgoing Spam Filter</h4>
        <p>SixthStar provides a cloud-based outgoing spam filter that verifies and blocks spams to provide the most secure email delivery.</p>
        </div></li>
      </ul>
      <div className='index-tab-con'>
        <div className='left-con'>
        <i className="fi fi-tr-meeting-alt"></i>
        <h3>We have over 17 years of experience</h3>
        <button><Link href='/contact'>Contact Us</Link></button>
        </div>
        <div className='right-tab-con'>
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1729675537/index_tab_bg2_z5v9kf.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

  <div className='index-tab-con '>
      <ul>
        <li><i className="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Reporting portal</h4>
        <p>The reporting portal is useful to find out the whitelist and blacklist in a powerful way.</p>
        </div></li>
        <li><i className="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Antivirus protection</h4>
        <p>It detects, prevents, and deletes malware and viruses that affect any part of the files or system.</p>
        </div></li>
        <li><i className="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Phishing prevention</h4>
        <p>Phishing protection is significantly required to protect the user's sensitive information from hackings.</p>
        </div></li>
      </ul>
      <div className='index-tab-con'>
        <div className='left-con'>
        <i className="fi fi-tr-meeting-alt"></i>
        <h3>We have over 17 years of experience</h3>
        <button><Link href='/contact'>Contact Us</Link></button>
        </div>
        <div className='right-tab-con'>
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1729675536/index-tab-img3_ygb2hy.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

  </div>
</div>
      </section>

      {/* index tabsec ends */}

<section className='index-faq-sec'>
  <h2>FREQUENTLY ASKED QUESTIONS</h2>
<div class="container">
  <div class="row index-faq">

    <div class="col-md-6">
          <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1729661580/1_spmzxs.png" alt="" />
    </div>

    <div class="col-md-6 faq">

    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      1. What happens to a spam-detected message?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <p>For inbound messages: This filtering will be done based on the IP address of the sender. As a default process, content-filter spam is sent to the junk folder of the recipient. All these actions can be controlled by you. For outbound messages: Here, the email delivery status can be easily known by the sender whether the email is bounced or not delivered through a message status.</p>      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      2. Do I need to configure the service to provide anti-spam protection?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <p>Once you get the spam filter, service will be automatically enabled as per anti-spam policies. If you want any alteration in the policies based on your organizational structure, you can tailor it according to it.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      3. Does the service have URL filtering?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <p>Yes, the service provides URL filtering. If the read URL has any spam content, then it will be marked as a spam message.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingfour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
      4. Is bulk email filtering works automatically?
      </button>
    </h2>
    <div id="panelsStayOpen-collapsefour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfour">
      <div class="accordion-body">
        <p>This email filtering works differently for new and migrated customers. So make sure if the service is automatically enabled or not.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingfive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="panelsStayOpen-collapsefive">
      5. Can I get spam reports?
      </button>
    </h2>
    <div id="panelsStayOpen-collapsefive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfive">
      <div class="accordion-body">
        <p>Yes, you will get spam reports about the volume of messages present in the account.</p>
      </div>
    </div>
  </div>
</div>


    </div>

  </div>
</div>
</section>


    </div>
  );
}
