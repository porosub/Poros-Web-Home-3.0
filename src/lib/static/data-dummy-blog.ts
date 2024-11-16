// data/blogData.js
const dataDummyBlog = [
  {
    id: 1,
    author: "Edward Sullivan",
    date: "18/09/2024",
    title: "Tim AcRtf' Menjadi 1st Runner Up di COMPFEST 15",
    description:
      "Tim AcRtf' berhasil meraih prestasi gemilang sebagai 1st Runner Up dalam ajang bergengsi COMPFEST 15.",
    image: "/img/pencapaian-compfest-15-acrtf.png",
  },
  {
    id: 2,
    author: "Jessica Tan",
    date: "21/09/2024",
    title: "Poros Filkom UB Gelar Webinar AI Nasional",
    description:
      "Webinar nasional ini menghadirkan pembicara ternama yang membahas perkembangan AI di Indonesia.",
    image: "/img/pencapaian-gemastik-2024-acrtf.jpg",
  },
  {
    id: 3,
    author: "Michael Lee",
    date: "24/09/2024",
    title: "Mahasiswa UB Raih Prestasi di Lomba Debat Nasional",
    description:
      "Tim debat UB meraih juara kedua dengan performa yang luar biasa.",
    image: "/img/pencapaian-joints-2023-yotocurry.png",
  },
  {
    id: 4,
    author: "Emma Taylor",
    date: "30/09/2024",
    title: "Karya Inovatif Mahasiswa UB di TechComFest",
    description:
      "Mahasiswa UB memenangkan kategori inovasi teknologi dalam ajang TechComFest 2023.",
    image: "/img/pencapaian-techcomfest-2023-acrtf.png",
  },
  {
    id: 5,
    author: "Robert Johnson",
    date: "02/10/2024",
    title: "Pengembangan Teknologi Edukasi di Gemastik 2024",
    description:
      "Tim UB berhasil menciptakan platform edukasi berbasis AI yang diakui secara nasional.",
    image: "/img/pencapaian-gemastik-2024-acrtf.jpg",
  },
  {
    id: 6,
    author: "Samantha Green",
    date: "05/10/2024",
    title: "AcRtf' Sukses Raih Penghargaan di JOINTS 2023",
    description:
      "Tim berhasil menunjukkan inovasi canggih dalam JOINTS 2023 dengan aplikasi 'YotoCurry'.",
    image: "/img/pencapaian-joints-2023-yotocurry.png",
  },
  {
    id: 7,
    author: "Chris Evans",
    date: "08/10/2024",
    title: "POROS UB Gelar Pelatihan AI untuk Mahasiswa",
    description:
      "Pelatihan AI ini bertujuan untuk membekali mahasiswa UB dengan keterampilan teknologi terbaru.",
    image: "/img/pencapaian-compfest-15-acrtf.png",
  },
  {
    id: 8,
    author: "Nancy Wong",
    date: "11/10/2024",
    title: "AcRtf' Raih Juara di TechComFest 2023",
    description:
      "AcRtf' menjuarai kategori inovasi sosial dalam acara tahunan TechComFest.",
    image: "/img/pencapaian-techcomfest-2023-acrtf.png",
  },
  {
    id: 9,
    author: "Julia Chan",
    date: "14/10/2024",
    title: "Gemastik 2024: Inovasi Mahasiswa dalam Pendidikan",
    description:
      "Mahasiswa UB mempersembahkan platform pembelajaran berbasis VR yang mengesankan.",
    image: "/img/pencapaian-gemastik-2024-acrtf.jpg",
  },
  {
    id: 10,
    author: "William Adams",
    date: "17/10/2024",
    title: "POROS UB Berikan Pelatihan untuk Guru Nasional",
    description:
      "Pelatihan ini diadakan untuk meningkatkan keterampilan guru dalam menggunakan teknologi AI.",
    image: "/img/pencapaian-compfest-15-acrtf.png",
  },
  {
    id: 11,
    author: "Lucas Gray",
    date: "20/10/2024",
    title: "JOINTS 2023: Prestasi Besar Tim YotoCurry",
    description:
      "YotoCurry menjadi solusi inovatif yang diperkenalkan dalam JOINTS 2023.",
    image: "/img/pencapaian-joints-2023-yotocurry.png",
  },
  {
    id: 12,
    author: "Sophia Kim",
    date: "23/10/2024",
    title: "TechComFest 2023: POROS UB Tampilkan AI Canggih",
    description:
      "POROS UB menampilkan AI terbaru yang mendapat pengakuan dalam TechComFest.",
    image: "/img/pencapaian-techcomfest-2023-acrtf.png",
  },
  {
    id: 13,
    author: "Henry Ford",
    date: "26/10/2024",
    title: "Kolaborasi Mahasiswa UB di COMPFEST 15",
    description:
      "Mahasiswa UB bekerja sama dalam tim untuk menciptakan solusi di bidang kesehatan.",
    image: "/img/pencapaian-compfest-15-acrtf.png",
  },
  {
    id: 14,
    author: "Ella McCarthy",
    date: "29/10/2024",
    title: "Teknologi untuk Pendidikan di Gemastik 2024",
    description:
      "UB memperkenalkan teknologi pembelajaran adaptif di ajang Gemastik.",
    image: "/img/pencapaian-gemastik-2024-acrtf.jpg",
  },
  {
    id: 15,
    author: "David Smith",
    date: "01/11/2024",
    title: "Pencapaian Tim YotoCurry di JOINTS 2023",
    description:
      "YotoCurry membawa inovasi kuliner ke panggung nasional di JOINTS 2023.",
    image: "/img/pencapaian-joints-2023-yotocurry.png",
  },
  {
    id: 16,
    author: "Isabella Carter",
    date: "04/11/2024",
    title: "Tim POROS Tampilkan Inovasi di TechComFest 2023",
    description:
      "Tim POROS berhasil menciptakan AI yang berkontribusi pada pengembangan bisnis.",
    image: "/img/pencapaian-techcomfest-2023-acrtf.png",
  },
  {
    id: 17,
    author: "Evan Turner",
    date: "07/11/2024",
    title: "Mahasiswa UB Memenangkan COMPFEST 15",
    description:
      "Mahasiswa UB meraih kemenangan melalui inovasi di bidang edukasi.",
    image: "/img/pencapaian-compfest-15-acrtf.png",
  },
  {
    id: 18,
    author: "Grace Hughes",
    date: "10/11/2024",
    title: "Gemastik 2024: Inovasi Teknologi dari Mahasiswa UB",
    description:
      "Inovasi mahasiswa UB menggabungkan teknologi VR dalam pembelajaran.",
    image: "/img/pencapaian-gemastik-2024-acrtf.jpg",
  },
  {
    id: 19,
    author: "Amelia Wong",
    date: "13/11/2024",
    title: "Pencapaian AcRtf' di JOINTS 2023 dengan YotoCurry",
    description:
      "AcRtf' mendapatkan penghargaan atas solusi inovatif YotoCurry di JOINTS.",
    image: "/img/pencapaian-joints-2023-yotocurry.png",
  },
  {
    id: 20,
    author: "Joshua Lee",
    date: "16/11/2024",
    title: "TechComFest 2023: POROS UB dan Inovasi Terbaru",
    description:
      "POROS UB membawa solusi teknologi terdepan yang mendapat penghargaan di TechComFest.",
    image: "/img/pencapaian-techcomfest-2023-acrtf.png",
  },
];

export default dataDummyBlog;
