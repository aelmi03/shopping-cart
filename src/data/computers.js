import uniqid from "uniqid";

const computers = [
  {
    id: uniqid(),
    name: "Acer Predator Orion 3000 Gaming PC (Intel Ci7-11700F/1TB SSD/16GB RAM/Nvidia RTX 3060Ti/Windows 10)",
    price: 1999.99,
    description:
      "Enjoy running the latest games and software in amazing graphic quality with the Acer Predator Orion 3000 gaming PC. Embedded with an Intel Core i7 CPU, 16GB of RAM and an NVIDIA RTX GPU, this gaming beast delivers mind-blowing performance in every task. It also includes 1TB of SSD storage, efficient thermal regulation, and RGB lighting effects.",
    imgSrc: "https://m.media-amazon.com/images/I/51uud7wTY1S._AC_SL1280_.jpg",
  },
  {
    id: uniqid(),
    name: "ASUS ROG Strix G15DK Gaming PC (AMD Ryzen 5-5600X/1TB SSD/16GB RAM/GeForce RTX 3060)",
    price: 1899.99,
    description:
      "Built with advanced hardware, the Asus ROG Strix G15DK gaming PC is sure to impress any gaming enthusiast. It is embedded with AMD Ryzen 5 CPU and 16GB RAM that makes it capable of taking down the most intense games with ease. It also comes with integrated Wi-Fi and Bluetooth, 1TB of storage, and more in a travel-friendly cabinet.",
    imgSrc: "https://m.media-amazon.com/images/I/81RkGTTlJqL._AC_SL1500_.jpg",
  },
  {
    id: uniqid(),
    name: "HP Omen 30L Gaming PC (Intel Core i7-11700KF/1TB SSD/32GB RAM/GeForce RTX 3080)",
    price: 2999.99,
    description:
      "Achieve powerful performance you require for high-level gaming with the HP Omen 30L gaming PC. Its Intel Core i7 CPU, 32GB of RAM, and dedicated NVIDIA GeForce RTX 3080 graphics card can handle any game efficiently without any fuss or lag. With multiple USB ports at the front and rear, you can pair a variety of computer accessories in a breeze.",
    imgSrc: "https://m.media-amazon.com/images/I/810naSDT+2L._AC_SL1500_.jpg",
  },
  {
    id: uniqid(),
    name: "Alienware Aurora R12 Gaming PC - White (Intel Core i7 11700F/1TB HDD/512GB SSD/16GB RAM/RTX 3080)",
    price: 2799.99,
    description:
      "The most hardcore games are no match with this Alienware Aurora R12 Gaming PC. It has an 8-core A Intel Core i7 11700F CPU which can be overclocked and features 16GB of RAM to handle anything you throw at it. The NVIDIA GeForce RTX 3080 graphics card with 10GB of video dedicated video memory delivers excellent 3D imagery, while the 1TB HDD and 512GB SSD provide ample storage space.",
    imgSrc: "https://m.media-amazon.com/images/I/71PckBfcDES._AC_SL1500_.jpg",
  },
  {
    id: uniqid(),
    name: "SkyTech Chronos Gaming PC (AMD Ryzen 7 3700X/1TB SSD/16GB RAM/GeForce RTX 3070)",
    price: 2599.99,
    description:
      "Take your gaming experience to a whole new level with the SkyTech Chronos gaming PC. Featuring an NVIDIA GeForce RTX 3070 graphics card to deliver high frame rates, this computer delivers highly realistic images and video for an immersive, seamless gaming experience. The AMD Ryzen 7 3700X processor powers up your gaming with the ability to stream and edit videos simultaneously.",
    imgSrc: "https://m.media-amazon.com/images/I/91gmEwVG7IS._AC_SL1500_.jpg",
  },
  {
    id: uniqid(),
    name: 'HP Pavilion 24" All-in-One Desktop - White (Intel i5-10400T/512GB SSD/12GB RAM/Windows 10)',
    price: 1199.99,
    description:
      "Sporting a sleek, beautiful display and B&O speakers, the HP Pavilion All-In-One desktop is designed for modern tastes. It packs an Intel Core i5 CPU and 12GB of RAM with Windows 10 to handle all your everyday tasks with ease. It also offers a power-efficient 512GB SSD that delivers fast load times.",
    imgSrc: "https://m.media-amazon.com/images/I/81UUML7evNL._AC_SL1500_.jpg",
  },
  {
    id: uniqid(),
    name: "CyberPowerPC Gamer Master Gaming PC (AMD Ryzen 5 5600G/500GB SSD/8GB RAM/Radeon RX 6600 XT/Win 11)",
    price: 1629.99,
    description:
      "Feel the thrill of realistic gameplay with the CyberPowerPC Gamer Master gaming PC. It's equipped with an AMD Ryzen 5 5600G processor, 8GB of RAM, and an AMD Radeon RX 6600 XT graphics card to deliver high-octane performance that handles any task with utmost perfection. Its multiple USB ports enable easy connectivity with various gaming accessories.",
    imgSrc: "https://m.media-amazon.com/images/I/71sfsXayo7L._AC_SL1500_.jpg",
  },
  {
    id: uniqid(),
    name: 'Apple iMac (MXWT2LL/A) 27" Intel Core i5 Hexa-Core 10th Gen 3.1GHz Computer',
    price: 2399.99,
    description:
      "iMac performance is at an all-time high with a tenth-generation Intel Core i5 processor, powerful AMD Radeon Pro 5300 graphics, 256GB of ultrafast SSD storage, and Thunderbolt 3 (USB-C) connectivity. It all comes to life on a stunning 27-inch Retina 5K display with one billion colours and 500 nits of brightness that delivers vibrant images and razor-sharp text.",
    imgSrc: "https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_SL1500_.jpg",
  },
  {
    id: uniqid(),
    name: 'Apple iMac 24" (Spring 2021) - Green (Apple M1 Chip / 8-Core GPU / 512GB SSD / 8GB RAM)',
    price: 2099.99,
    description:
      "Enjoy reliable, fast performance with the Apple iMac. Powered by the Apple M1 chip and 8GB of RAM, it can easily handle multitasking so you can work efficiently on your projects. Its 4.5K Retina display with P3 wide colour gamut brings your content to life in sharp detail, and it comes complete with a Magic Keyboard and a Magic Mouse so you can get started right away.",
    imgSrc: "https://m.media-amazon.com/images/I/61eoyE0l9gS._AC_SL1500_.jpg",
  },
  {
    id: uniqid(),
    name: "CLX Set w/Intel Core i9 10980XE Processor, 64GB DDR4 Memory, GeForce RTX 3090 Graphics, 1 TB SSD, 6 TB HDD",
    price: 6559.99,
    description:
      "A true gaming system, this CLX SET delivers outstanding computing power and visual performance! It's driven by a Liquid-Cooled 10th Gen 18-Core/36-Thread Intel Core i9 10980XE 3GHz processor (Max. Turbo Speed of 4.6GHz) and 64GB of Quad-Channel RGB DDR4-3200 memory. The 24GB GeForce RTX 3090 video card delivers eye-stunning graphics. Meanwhile, the 1TB Solid State Drive and 6TB Hard Drive provide a perfect blend of speed and storage. And it isn't just the insides that look great; the CLX SET is housed in a sleek Mid-Tower gaming chassis, designed for maximum expandability and airflow. With both wired and wireless networking capabilities, you can game how you want, where you want. We even pre-install Windows 10 Home, and include a FREE Wired 7 Color Gaming Keyboard and Mouse, so you can be up and playing like a pro on your favorite games in no time!",
    imgSrc: "https://m.media-amazon.com/images/I/713TkgbrI7L._AC_SL1500_.jpg",
  },
];

export default computers;
