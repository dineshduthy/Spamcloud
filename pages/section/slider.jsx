import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4, // Default for desktop view
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024, // For tablets and below
                settings: {
                    slidesToShow: 3, // Show 3 slides for tablet-sized screens
                }
            },
            {
                breakpoint: 768, // For mobile view
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time for mobile
                }
            }
        ]
    };

    const logos = [
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985083/client11.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985084/client12.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985086/client13.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985089/client14.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985105/client20.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985110/client22.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985112/client1.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985116/client3.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985118/client4.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985121/client5.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985127/client8.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985132/client9.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985134/client10.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985266/client26.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985269/client25.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985272/client23.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985274/client24.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603902/voltech_enginner_d5wb5u.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603902/velammal_anzfkq.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vcerp_iz8ka7.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vecura_uuxnb4.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vcare-logo_nlya0m.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/tvs_qfc2sc.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/trlpl_vbwnq1.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/techindia_c4xpx8.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/spl_infra_rxefmx.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/mega-global_q0fscr.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/rock_worth_yvvgu6.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/sahara_courier_dtznwq.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/ifluids_dmmvaf.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/power-groups_nbyhpz.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/panimallar_oooj2x.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/nccr_zw3ouz.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/kingfa_edsqaq.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/hhf_logo_fmga1o.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/marg_kg1hjk.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/letsgro_tusjbf.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/hlflogo_ft4fca.webp",
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/chetinad_health_city_sdjjef.webp",
    ];

    return (
        <div className='pt-3 pb-3'>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="container">
                        <img src={logo} alt='client img' width={224} height={109} loading='lazy' className='logo-slider-img' />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientSlider;
