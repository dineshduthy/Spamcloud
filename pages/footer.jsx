import React from 'react'
import Link from 'next/link'

export default function FOOTER() {
  return (
    <div className='footer-section'>
        <div class="container">
  <div class="row ">

    {/* column - 1 */}
    <div class="col-lg-4 col-md-12">
    <div className='footer-column'>
                <h3 className='text-left'>Contact</h3>
                <ul>
                    <li><p>Address: Sixth Star Technologies,
                           Siri Towers, 1st Floor, No.3 & 4,
                           Fourrts Avenue, Annai Indira Nagar,
                           Thoraipakkam, Chennai - 600 097.</p></li>
                    <li><Link href="#">Phone: (044) 43869199 </Link></li>
                    <li><Link href="#">Email: sales@sixthstar.in </Link></li>
                </ul>

    </div>
    </div>

    {/* column - 2 */}
    <div class="col-lg-4 col-md-12">
    <div class="row ">
    <div class="col-md-6 footer-column">
    <h3 className='text-left'>Services</h3>
                <ul>
                    <li><Link href="/services/incoming-filter">Incoming Spam Filter</Link></li>
                    <li><Link href="/services/outgoing-filter">Outgoing Spam Filter</Link></li>
                    <li><Link href="/services/email-archiving">Email Archiving</Link></li>
                    <li><Link href="/services/carbonio-mail_service">Carbonio Mail</Link></li>
                    <li><Link href="/services/high-availability">High Availability</Link></li>
                </ul>
    </div>

    <div class="col-md-6 footer-column">
    <h3 className='text-left'>Our Company</h3>
                <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/client">Clients</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
    </div>

    </div>
    </div>

    {/* column - 3 */}

    <div class="col-lg-4 col-md-12">
    <div class="row ">

<div class="col-md-6 footer-column">
<h3 className='text-left'>Other Services</h3>
            <ul>
                <li><Link href="/iso-sixthstartech.jpg">SSL Certificate</Link></li>
                <li><Link href="https://sixthstartech.com/servers/dedicated-server">Dedicated Hosting</Link></li>
                <li><Link href="https://sixthstartech.com/servers/vps-server-hosting">VPS Hosting</Link></li>
                <li><Link href="https://sixthstartech.com/servers/cloud-hosting-services">Cloud Hosting</Link></li>
                <li><Link href="https://sixthstartech.com/servers/web-hosting">Web Hosting</Link></li>
            </ul>
</div>

<div class="col-md-6 footer-image">
<h3 className=' text-left footer-image-heading'> ISO Certificate</h3>
            <img className='footer-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1727067938/iso-sixthstartech_uq1nq6.jpg" alt="" />
</div>

</div>
    </div>


  </div>
</div>
        </div>


  )
}
