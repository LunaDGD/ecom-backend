const data = {
  products: [
    {
      _id: '1',
      name: 'Nvidia RTX 3080',
      slug: 'Nvidia-RTX-3080',
      category: 'GPU',
      image: '/images/3080-eva.jpeg',
      price: 850,
      countInStock: 10,
      brand: 'Nvidia',
      rating: 4.5,
      numReviews: 10,
      description: 'Description of 3080',
    },
    {
      _id: '2',
      name: 'AMD RX 6800XT',
      slug: 'AMD-RX-6800XT',
      category: 'GPU',
      image: '/images/yeston-6800xt.jpeg',
      price: 700,
      countInStock: 10,
      brand: 'AMD',
      rating: 4.5,
      numReviews: 10,
      description: 'description of 6800XT',
    },
    {
      _id: '3',
      name: 'Nvidia RTX 3050',
      slug: 'Nvidia-RTX-3050',
      category: 'GPU',
      image: '/images/gigabyte-3050.jpeg',
      price: 250,
      countInStock: 10,
      brand: 'Nvidia',
      rating: 4.5,
      numReviews: 10,
      description: 'description of 3050',
    },
    {
      _id: '4',
      name: 'AMD RX 5700XT',
      slug: 'AMD-RX-5700XT',
      category: 'GPU',
      image: '/images/sapphire-5700xt.jpeg',
      price: 250,
      countInStock: 10,
      brand: 'AMD',
      rating: 4.5,
      numReviews: 10,
      description: 'description of 5700XT',
    },
    {
      _id: '5',
      name: 'MSI-z590',
      slug: 'MSI-z590',
      category: 'Motherboard',
      image: '/images/MSI-z590.jpeg',
      price: 350,
      countInStock: 10,
      brand: 'MSI',
      rating: 4,
      numReviews: 2,
      description:
        "The MSI MEG Z590 GODLIKE is the Top of the line Motherboard within MSI's Intel Z590 Line-up. It possesses many features and quality components that set it apart from other Z590 motherboards currently available. The Z590 GODLIKE is designed for Overclocking and such brings with it a Top Class VRM. ",
    },
    {
      _id: '6',
      name: 'MSI-x570',
      slug: 'MSI-x570',
      category: 'Motherboard',
      image: '/images/MSI-x570.jpeg',
      price: 360,
      countInStock: 10,
      brand: 'MSI',
      rating: 5,
      numReviews: 13,
      description: `Supports AMD Ryzen 5000 Series, 5000 G-Series, 4000 G-Series, 3000 Series, 3000 G-Series, 2000 Series and 2000 G-Series desktop processors
      Supports DDR4 Memory, Dual Channel 5300(OC) MHz+
      Extreme Power Design: Direct 16+2+1 phases with 90A Smart Power Stage and dual CPU power connectors to unleash the maximum performance`,
    },
    {
      _id: '7',
      name: 'ASRock-z690',
      slug: 'ASRock-z690',
      category: 'Motherboard',
      image: '/images/ASRock-z690.jpeg',
      price: 890,
      countInStock: 14,
      brand: 'ASRock',
      rating: 4.5,
      numReviews: 11,
      description: `Supports 12th Gen Intel Core Processors (LGA1700)
      20 Phase SPS Dr.MOS Power Design
      Supports DDR5 6400MHz (OC)
      2 PCIe 5.0 x16, 1 PCIe 4.0 x16, 1 PCIe 3.0 x1
      Graphics Output Options: HDMI, 2 Thunderbolt Type-C`,
    },
    {
      _id: '8',
      name: 'Asus-b550',
      slug: 'Asus-b550',
      category: 'Motherboard',
      image: '/images/Asus-b550.jpeg',
      price: 150,
      countInStock: 10,
      brand: 'Asus',
      rating: 4.5,
      numReviews: 10,
      description: `The white/silver heatsinks make this an ideal board for any white/silver aesthetic build.
      - Preinstalled I/O shield is a godsend; no more finishing a build and then realizing you forgot to put the I/O shield in.
      - BIOS Flashback makes updating the BIOS a cinch, even on a new build. Especially helpful if you're planning to use a 5000 series Ryzen. The motherboard box came with a sticker on it that said "AMD Ryzen 5000x Desktop Ready", but to be safe I went ahead and used Flashback to update the BIOS anyway (actually I didn't notice the sticker until after I updated the BIOS lol). Super easy to use; no need to install CPU or RAM, you only need to connect the main 24-pin to your power supply.`,
    },
    {
      _id: '9',
      name: 'AMD-Threadripper',
      slug: 'AMD-Threadripper',
      category: 'CPU',
      image: '/images/AMD-Threadripper.jpeg',
      price: 8000,
      countInStock: 4,
      brand: 'AMD',
      rating: 4.5,
      numReviews: 11,
      description: `7nm Castle Peak (Zen 2) 280W
      256MB L3 Cache
      32MB L2 Cache
      Windows 11 Supported`,
    },
    {
      _id: '10',
      name: 'AMD-5950x',
      slug: 'AMD-5950x',
      category: 'CPU',
      image: '/images/AMD-5950x.jpeg',
      price: 409,
      countInStock: 10,
      brand: 'AMD',
      rating: 4.5,
      numReviews: 10,
      description: `7nm Vermeer (Zen 3) 105W
      64MB L3 Cache
      6MB L2 Cache
      Windows 11 Supported`,
    },
    {
      _id: '11',
      name: 'i9-11900k',
      slug: 'i9-11900k',
      category: 'CPU',
      image: '/images/i9-11900k.jpeg',
      price: 400,
      countInStock: 10,
      brand: 'Intel',
      rating: 4.5,
      numReviews: 10,
      description: `14nm Rocket Lake 125W
      16MB L3 Cache
      Intel UHD Graphics 750
      Windows 11 Supported`,
    },
    {
      _id: '12',
      name: 'i9-12900ks',
      slug: 'i9-12900ks',
      category: 'CPU',
      image: '/images/i9-11900k.jpeg',
      price: 700,
      countInStock: 10,
      brand: 'Intel',
      rating: 4.5,
      numReviews: 10,
      description: `Intel 7 Alder Lake Processor Base Power: 125W
      Maximum Turbo Power: 241W
      30MB L3 Cache
      14MB L2 Cache
      Intel UHD Graphics 770
      Windows 11 Supported`,
    },
  ],
};
export default data;
