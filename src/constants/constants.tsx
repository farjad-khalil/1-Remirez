// Data

export const our_story_text = {
    heading: "M. Ramirez Landscaping Inc.",
    description: ",Our company has its beginnings ten years ago. We were founded by owner, Mauricio Ramirez and have been growing rapidly each year with more employees, trucks, and more services for our clients. You can find our trucks mostly in the Garden City, Long Island area servicing gorgeous homes and gardens. We only offer the best in service for all our customers."

};
export const testimonialsData = [
    {
        name: "Brook",
        image: "/assets/aboutus/person-1.png",
        rating: 5,
        title: "Best landscaping service in town!",
        review: "From sod installation to seasonal cleanup, they handle everything with great attention to detail. My lawn has never looked better, and I appreciate their dedication!",
        designation: "Happy Homeowner",
    },
    {
        name: "James R",
        image: "/assets/aboutus/person-2.png",
        rating: 5,
        title: "Absolutely transformed my backyard!",
        review: "The team did an amazing job designing and installing my garden. The flowers and greenery are perfectly placed, and my yard looks stunning! Highly recommend their services!",
        designation: "Happy Homeowner",
    },
    {
        name: "Alice K",
        image: "/assets/aboutus/person-3.png",
        rating: 5,
        title: "Excellent Work!",
        review: "They took care of my lawn and made it look perfect! Professional team with great dedication.",
        designation: "Satisfied Customer",
    },
    {
        name: "John D",
        image: "/assets/aboutus/person-1.png",
        rating: 5,
        title: "Very Professional",
        review: "The best landscaping team I’ve ever hired. They handled my garden with precision and care.",
        designation: "Homeowner",
    },
];

export const footer_text = "For over 20 years we’ve been growing only by word of mouth and the testimonies of all our customers! We appreciate all our loyal patrons and offer them service with exceptional attention to detail for 100% customer satisfaction! Thank you Long Island!"

export const footer_contact = {
    phone: "(516) 270-7024",
    mail: "mramirezlandscaper@gmail.com",
    url: "ramirez.net",
    location: "D block, H Road Nassur"
}


// constants.tsx
export const hero_data_aboutus = {
    t1: "About",
    t2: "Us",
    description: (
        <p className="md:text-2xl md:mx-44 text-lg mx-10">
            What sets us apart? Our commitment to <span className="text-[#94f312]">excellence</span>,{" "}
            <span className="text-[#94f312]">attention to detail</span>, and{" "}
            <span className="text-[#94f312]">customer satisfaction</span>. We treat every{" "}
            <span className="text-[#94f312]">lawn and garden</span> as if it were our own, ensuring the highest level
            of care and professionalism. Whether you're looking to{" "}
            <span className="text-[#94f312]">refresh your outdoor space</span> or need ongoing maintenance, our team
            is here to bring your vision to life.
        </p>
    ),
    src: "/assets/aboutus/hero_image.png" // Ensure it's correctly formatted
};

export const hero_data_services: any = {
    t1: "Our",
    t2: "Services",
    description: (
        <p className="md:text-2xl md:mx-44 text-lg mx-10">
            Our services are designed to enhance and maintain the beauty of your outdoor space with expert care. From <span className="text-[#94f312]">landscape design and tree trimming</span>,{" "}
            to sod installation and seasonal cleanup, we ensure your lawn and garden stay vibrant
            <span className="text-[#94f312]">year-round.</span>, and{" "} With attention to detail and a passion for greenery, we bring your outdoor vision to life!

        </p>
    ),
    src: "/assets/services/hero.png"
}

export const hero_data_gallery: any = {
    t1: "Our",
    t2: "Gallery",
    description: (
        <p className="md:text-2xl md:mx-44 text-lg mx-10">
            Browse through our <span className="text-[#94f312]">gallery </span>,{" "}to see stunning examples of our
            <span className="text-[#94f312]">landscape transformations.</span>, From vibrant gardens to manicured lawns and flawless{" "}
            <span className="text-[#94f312]">sod installations,</span>. our work reflects our dedication and expert craftsmanship. Each project is a testament to our passion for creating beautiful outdoor spaces. Let these images inspire your next{" "}
            <span className="text-[#94f312]">landscaping project.</span> Your perfect landscape is waiting to be brought to life!
        </p>
    ),
    src: "/assets/gallery/hero.png"
}


export const sections = [
    {
        title: "Landscape Design & Installation",
        h1: "Custom Garden Creations",
        h2: "Seasonal Plant Selection",
        h3: "Expert Installation",
        desc_1: "Our team designs tailored garden layouts to enhance the beauty and functionality of your outdoor space. Whether you prefer a modern, structured look or a natural, flowing design, we bring your vision to life",
        desc_2: " We carefully choose flowers, shrubs, and greenery based on the season, ensuring your garden remains colorful and vibrant all year round. Our selections are made to thrive in your local climate.",
        desc_3: " From preparing the soil to planting and arranging features, our professionals ensure a seamless installation process. We focus on durability, aesthetics, and long-term plant health for a stunning landscape",
        img: "/assets/services/1.png",
        icon: "/assets/services/11.svg"
    },
    {
        title: "Tree, Shrub & Turf Trimming",
        h1: "Healthy Growth Maintenance",
        h2: "Safety & Aesthetic Trimming",
        h3: "Lawn Precision",
        desc_1: "Regular pruning and shaping encourage healthier growth for trees, shrubs, and turf. This promotes stronger, fuller plants that flourish throughout the year.",
        desc_2: "Overgrown or dead branches can be hazardous and diminish your landscape’s appeal. Our trimming services remove unnecessary growth while maintaining a clean and well-structured look.",
        desc_3: "We provide precise edging, mowing, and turf trimming to keep your lawn neat and well-manicured. This enhances curb appeal while ensuring your grass stays in excellent condition.",
        img: "/assets/services/2.png",
        icon: "/assets/services/2.svg",
    },
    {
        title: "Sod Lawn Planting",
        h1: "Instant Lawn Transformation",
        h2: "Climate-Friendly Grass Selection",
        h3: "Seamless Lawn Integration",
        desc_1: "Our premium sod installation service provides you with a lush, green lawn instantly. No waiting for seeds to grow—just an immediate, vibrant transformation of your yard.",
        desc_2: "We help you choose the best sod type based on your region’s climate, soil conditions, and maintenance preferences, ensuring long-lasting, healthy growth.",
        desc_3: "Our sod-laying process ensures smooth, even coverage, creating a natural look without visible seams. With proper care, your new lawn will establish strong roots and thrive.",
        img: "/assets/services/3.png",
        icon: "/assets/services/3.svg",
    },
    {
        title: "Seasonal Garden Enhancement",
        h1: "Vibrant Floral Updates",
        h2: "Climate-Smart Planting",
        h3: "Aesthetic & Health Boost",
        desc_1: "We refresh your garden each season by adding colorful flowers and lush greenery, ensuring it always looks fresh, lively, and inviting.",
        desc_2: "Choosing plants that align with seasonal weather conditions is key to long-lasting beauty. We provide expert plant recommendations that thrive in your environment.",
        desc_3: "Our enhancements not only make your garden visually appealing but also support plant health, ensuring a well-balanced and flourishing outdoor space.",
        img: "/assets/services/4.png",
        icon: "/assets/services/4.svg",
    },
    {
        title: "Fall Leaves Cleanup",
        h1: "Complete Leaf Removal",
        h2: "Lawn Protection",
        h3: "Eco-Friendly Disposal",
        desc_1: "We efficiently clear fallen leaves, twigs, and debris from your lawn, keeping your outdoor space tidy and preventing buildup that can smother grass.",
        desc_2: "Excess leaves can block sunlight, trap moisture, and cause lawn damage. Our cleanup service ensures your grass stays healthy and breathable throughout fall and winter.",
        desc_3: "We responsibly collect and dispose of leaves in an environmentally friendly manner, ensuring sustainability while keeping your yard spotless.",
        img: "/assets/services/5.png",
        icon: "/assets/services/5.svg",
    },
    {
        title: "Lawn & Garden Maintenance",
        h1: "Routine Lawn Care",
        h2: "Shrub & Flower Bed Upkeep",
        h3: "Pest & Irrigation Management",
        desc_1: "Our regular mowing, weeding, and fertilization services keep your lawn lush, green, and free from invasive plants, ensuring a consistently healthy appearance.",
        desc_2: "We maintain your shrubs, hedges, and flower beds by trimming, mulching, and fertilizing to enhance the overall structure and beauty of your landscape.",
        desc_3: "Our team helps protect your garden from pests and weeds while ensuring your irrigation system provides adequate hydration for optimal plant growth.",
        img: "/assets/services/6.png",
        icon: "/assets/services/6.svg",
    },
]


// Gallery
export const  galleryImages = [
    "/assets/gallery/1.png",
    "/assets/gallery/2.png",
    "/assets/gallery/3.png",
    "/assets/gallery/4.png",
    "/assets/gallery/5.png",
    "/assets/gallery/6.png",
    "/assets/gallery/7.png",
    "/assets/gallery/8.png",
    "/assets/gallery/9.png",
];