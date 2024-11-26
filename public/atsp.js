const questions = [
  {
    question: "Apa tujuan utama penyiaran sebagaimana diatur dalam UU Nomor 32 Tahun 2002 Pasal 3?",
    options: [
      "Meningkatkan keuntungan lembaga penyiaran",
      "Memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa",
      "Menyebarluaskan program asing secara dominan",
      "Menarik sebanyak mungkin penonton atau pendengar",
      "Mengurangi peran masyarakat dalam kontrol sosial",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB II Asas, Tujuan, Fungsi, dan Arah"
  },
  {
    question: "Menurut UU Nomor 32 Tahun 2002, apa yang menjadi dasar pelaksanaan penyiaran di Indonesia?",
    options: [
      "Kepentingan globalisasi",
      "Keuntungan komersial lembaga penyiaran",
      "Pancasila dan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
      "Teknologi terbaru di bidang penyiaran",
      "Kebutuhan pemilik modal",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB II Asas, Tujuan, Fungsi, dan Arah"
  },
  {
    question: "Apa fungsi ekonomi dalam kegiatan penyiaran yang diatur dalam UU Nomor 32 Tahun 2002 Pasal 4 ayat (2)?",
    options: [
      "Memajukan kebudayaan nasional",
      "Memberikan penghasilan utama kepada pemerintah",
      "Meningkatkan kualitas sumber daya manusia",
      "Mendukung industri penyiaran dan ekonomi kreatif",
      "Menjamin penyiaran gratis untuk semua masyarakat",
    ],
    answer: 4,
    sub: " Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB II Asas, Tujuan, Fungsi, dan Arah"
  },
  {
    question: "Siapa yang memiliki wewenang untuk menetapkan standar program siaran sesuai UU Nomor 32 Tahun 2002?",
    options: [
      "Kementerian Komunikasi dan Informatika",
      "Komisi Penyiaran Indonesia",
      "Presiden",
      "Pemerintah Daerah",
      "Asosiasi Lembaga Penyiaran",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Menurut UU Nomor 32 Tahun 2002 Pasal 35, apa yang wajib dicantumkan oleh lembaga penyiaran terkait isi siaran?",
    options: [
      "Hak siar",
      "Iklan komersial",
      "Nama produser acara",
      "Klasifikasi khalayak",
      "Lisensi penyiaran",
    ],
    answer: 4,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa yang dilarang dalam isi siaran menurut UU Nomor 32 Tahun 2002 Pasal 36 ayat (5)?",
    options: [
      "Menyebarkan berita yang sudah terjadi",
      "Mempromosikan pendidikan lokal",
      "Menyampaikan pendapat netral",
      "Mengandung unsur fitnah dan menghasut",
      "Menggunakan bahasa Indonesia yang baik dan benar",
    ],
    answer: 4,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa syarat utama anggota Komisi Penyiaran Indonesia (KPI) sesuai UU Nomor 32 Tahun 2002?",
    options: [
      "Memiliki modal awal di bidang penyiaran",
      "Berpendidikan minimal SMA",
      "Nonpartisan dan tidak terkait langsung dengan media massa",
      "Berasal dari lembaga penyiaran swasta",
      "Memiliki usaha di bidang teknologi informasi",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Bagaimana mekanisme pemberian izin penyelenggaraan penyiaran menurut UU Nomor 32 Tahun 2002 Pasal 33?",
    options: [
      "Ditentukan oleh asosiasi lembaga penyiaran",
      "Diputuskan oleh lembaga penyiaran secara mandiri",
      "Melalui kesepakatan antara KPI dan Pemerintah",
      "Hanya berdasarkan kepentingan pemohon izin",
      "Mengikuti peraturan internasional",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Apa fungsi Lembaga Penyiaran Komunitas menurut UU Nomor 32 Tahun 2002 Pasal 21?",
    options: [
      "Menarik keuntungan melalui iklan komersial",
      "Memajukan kesejahteraan komunitas dengan program lokal",
      "Mendominasi pasar penyiaran daerah",
      "Menyiarkan program siaran berlangganan",
      "Mengganti peran lembaga penyiaran swasta",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Apa pembatasan utama dalam kepemilikan lembaga penyiaran swasta berdasarkan Pasal 18 UU Nomor 32 Tahun 2002?",
    options: [
      "Dibatasi untuk lembaga penyiaran televisi saja",
      "Hanya diperbolehkan untuk modal asing",
      "Tidak boleh dimiliki oleh satu orang atau satu badan hukum saja",
      "Harus melibatkan lembaga internasional",
      "Dibatasi berdasarkan lokasi geografis",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Apa yang menjadi tanggung jawab utama lembaga penyiaran terkait iklan layanan masyarakat?",
    options: [
      "Menerima dana dari sponsor",
      "Menyiarkan iklan layanan masyarakat tanpa batas waktu",
      "Menyediakan waktu tertentu untuk siaran iklan layanan masyarakat",
      "Mengizinkan lembaga asing mengatur konten iklan",
      "Mengutamakan iklan layanan masyarakat di luar negeri",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa peran KPI dalam memastikan pedoman perilaku penyiaran?",
    options: [
      "Menentukan konten iklan komersial",
      "Mewajibkan semua lembaga penyiaran tunduk pada keputusan KPI",
      "Melarang lembaga penyiaran swasta beroperasi di daerah tertentu",
      "Mengawasi penggunaan bahasa asing dalam program siaran",
      "Mengelola pendapatan lembaga penyiaran publik",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB V Pedoman Perilaku Penyiaran"
  },
  {
    question: "Bagaimana aturan penggunaan bahasa daerah dalam siaran berdasarkan UU Nomor 32 Tahun 2002 Pasal 38?",
    options: [
      "Tidak diperbolehkan sama sekali",
      "Hanya digunakan untuk promosi produk lokal",
      "Dapat digunakan untuk program muatan lokal",
      "Harus digunakan dalam semua program siaran",
      "Menggantikan bahasa Indonesia dalam program nasional",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa yang harus dilakukan lembaga penyiaran jika terdapat kesalahan dalam isi siaran menurut Pasal 44?",
    options: [
      "Menghapus semua rekaman siaran",
      "Membuat pernyataan terbuka kepada khalayak",
      "Melakukan ralat dalam waktu kurang dari 24 jam",
      "Menyalahkan pihak ketiga terkait kesalahan tersebut",
      "Mengganti program siaran dengan konten baru",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa sanksi administratif terberat yang dapat dikenakan kepada lembaga penyiaran menurut UU Nomor 32 Tahun 2002?",
    options: [
      "Teguran tertulis",
      "Penghentian sementara siaran",
      "Denda administratif",
      "Pencabutan izin penyelenggaraan penyiaran",
      "Pembatasan durasi siaran",
    ],
    answer: 4,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB VIII Sanksi Administratif"
  },
  {
    question: "Apa asas utama yang harus dijunjung tinggi dalam penyiaran menurut UU Nomor 32 Tahun 2002 Pasal 2?",
    options: [
      "Komersial dan kompetitif",
      "Keberagaman, keamanan, dan etika",
      "Manfaat, adil, dan merata",
      "Teknologi, inovasi, dan efisiensi",
      "Kontrol penuh oleh pemerintah",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB II Asas, Tujuan, Fungsi, dan Arah"
  },
  {
    question: "Apa yang dimaksud dengan 'tatanan informasi nasional yang adil, merata, dan seimbang' dalam UU ini?",
    options: [
      "Arus informasi harus dikendalikan pemerintah pusat",
      "Informasi terdistribusi secara harmonis antarwilayah dan internasional",
      "Semua lembaga penyiaran menggunakan teknologi yang sama",
      "Informasi harus bersumber dari lembaga swasta",
      "Arus informasi dipusatkan di daerah tertentu",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB I Ketentuan Umum"
  },
  {
    question: "Apa batas kepemilikan modal asing dalam Lembaga Penyiaran Swasta menurut Pasal 17 ayat (2)?",
    options: [
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Apa fungsi utama Komisi Penyiaran Indonesia (KPI) sebagaimana tercantum dalam Pasal 8 ayat (1)?",
    options: [
      "Mengelola pendapatan iklan dari lembaga penyiaran",
      "Mewadahi aspirasi masyarakat terkait penyiaran",
      "Mengatur kegiatan ekonomi lembaga penyiaran",
      "Memperkenalkan teknologi baru dalam penyiaran",
      "Mengelola infrastruktur penyiaran nasional",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Apa tujuan penyiaran dalam membangun masyarakat sebagaimana diatur dalam Pasal 3 UU ini?",
    options: [
      "Mengutamakan kepentingan ekonomi individu",
      "Membentuk masyarakat yang mandiri, demokratis, adil, dan sejahtera",
      "Meningkatkan keuntungan dari konten internasional",
      "Mengurangi pengaruh budaya lokal",
      "Memonopoli informasi secara nasional",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB II Asas, Tujuan, Fungsi, dan Arah"
  },
  {
    question: "Apa saja yang wajib dimiliki lembaga penyiaran asing untuk melakukan kegiatan jurnalistik di Indonesia?",
    options: [
      "Izin dari pemerintah daerah",
      "Hak cipta konten asing",
      "Izin sesuai peraturan perundang-undangan Indonesia",
      "Lisensi eksklusif dari pemilik media lokal",
      "Kerjasama dengan Lembaga Penyiaran Swasta",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Apa konsekuensi yang dihadapi lembaga penyiaran jika memindahtangankan izin penyelenggaraan penyiarannya?",
    options: [
      "Pembatasan waktu siaran",
      "Pembekuan sementara kegiatan penyiaran",
      "Pencabutan izin penyelenggaraan penyiaran",
      "Penalti denda administratif",
      "Peringatan tertulis dari KPI",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Apa syarat utama agar anggota KPI dapat diangkat, sesuai Pasal 10 ayat (1)?",
    options: [
      "Berpendidikan minimal SMA",
      "Memiliki pengalaman kerja di lembaga swasta",
      "Tidak terkait langsung dengan kepemilikan media massa",
      "Berstatus pegawai negeri sipil",
      "Memiliki lisensi sebagai penyiar",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
  {
    question: "Apa aturan khusus tentang penggunaan bahasa asing dalam program penyiaran di Indonesia?",
    options: [
      "Hanya boleh digunakan dalam konten musik",
      "Hanya dapat digunakan untuk siaran berita internasional",
      "Harus disertai teks Bahasa Indonesia untuk siaran televisi",
      "Tidak diperbolehkan sama sekali",
      "Dibatasi hanya untuk siaran iklan",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa batasan waktu siaran iklan niaga untuk lembaga penyiaran swasta, sesuai Pasal 46 ayat (8)?",
    options: [
      "10% dari seluruh waktu siaran",
      "15% dari seluruh waktu siaran",
      "20% dari seluruh waktu siaran",
      "25% dari seluruh waktu siaran",
      "30% dari seluruh waktu siaran",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa kewajiban lembaga penyiaran terkait penyimpanan bahan siaran, sesuai Pasal 45?",
    options: [
      "Menyimpan bahan siaran selama 3 bulan",
      "Menyimpan bahan siaran sekurang-kurangnya 1 tahun setelah disiarkan",
      "Menghapus bahan siaran setiap minggu",
      "Membagikan bahan siaran kepada khalayak secara gratis",
      "Mengirimkan bahan siaran kepada KPI setiap bulan",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa yang harus dilakukan jika terdapat pelanggaran terhadap pedoman perilaku penyiaran?",
    options: [
      "Menghentikan siaran tanpa evaluasi",
      "Melaporkan kepada pemerintah pusat",
      "Meneruskan aduan kepada lembaga penyiaran terkait dan memberikan hak jawab",
      "Mengganti pengelola lembaga penyiaran",
      "Memberikan sanksi denda langsung kepada pengiklan",
    ],
    answer: 3,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB V Pedoman Perilaku Penyiaran"
  },
  {
    question: "Apa pembatasan terhadap siaran iklan niaga dalam mata acara untuk anak-anak sesuai Pasal 46 ayat (6)?",
    options: [
      "Iklan tidak boleh menggunakan animasi",
      "Iklan harus memenuhi standar siaran untuk anak-anak",
      "Iklan hanya boleh ditayangkan pada jam malam",
      "Iklan harus berasal dari produsen lokal",
      "Iklan tidak boleh lebih dari 5 menit",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
  },
  {
    question: "Apa hukuman untuk pelanggaran terkait izin penyelenggaraan penyiaran menurut Pasal 58?",
    options: [
      "Denda maksimal Rp. 100 juta",
      "Pidana penjara maksimal 2 tahun dan/atau denda Rp. 500 juta",
      "Penghentian sementara siaran selama 6 bulan",
      "Denda sebesar 10% dari pendapatan tahunan lembaga",
      "Penghapusan hak untuk memperpanjang izin",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB X Ketentuan Pidana"
  },
  {
    question: "Apa persyaratan minimal untuk perpanjangan izin penyiaran sesuai Pasal 34?",
    options: [
      "Menyediakan siaran iklan layanan masyarakat secara penuh",
      "Lulus masa uji coba siaran yang ditentukan",
      "Menggunakan teknologi terbaru dalam penyiaran",
      "Mendapatkan sponsor internasional",
      "Memperluas jaringan penyiaran secara nasional",
    ],
    answer: 2,
    sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
  },
    {
      question: "Menurut Pasal 4 ayat (1), apa fungsi utama penyiaran sebagai kegiatan komunikasi massa?",
      options: [
        "Menciptakan program yang menguntungkan",
        "Menyebarkan nilai budaya internasional",
        "Sebagai media informasi, pendidikan, hiburan, kontrol, dan perekat sosial",
        "Mendominasi pasar penyiaran lokal",
        "Memengaruhi opini publik demi kepentingan ekonomi",
      ],
      answer: 3,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB II Asas, Tujuan, Fungsi, dan Arah"
    },
    {
      question: "Apa yang dilarang dalam iklan niaga menurut Pasal 46 ayat (3)?",
      options: [
        "Menggunakan bahasa asing",
        "Memperagakan rokok secara visual",
        "Memperkenalkan produk lokal",
        "Menggunakan simbol budaya daerah",
        "Mengacu pada ideologi negara",
      ],
      answer: 2,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
    },
    {
      question: "Apa peran utama Lembaga Penyiaran Publik sesuai Pasal 14 ayat (1)?",
      options: [
        "Menarik investasi asing",
        "Mengutamakan keuntungan finansial",
        "Memberikan layanan untuk kepentingan masyarakat secara independen dan netral",
        "Mengelola jaringan penyiaran internasional",
        "Menggantikan peran lembaga penyiaran swasta",
      ],
      answer: 3,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
    },
    {
      question: "Apa batas waktu penyelenggaraan uji coba siaran untuk lembaga penyiaran televisi sebagaimana diatur dalam Pasal 34 ayat (3)?",
      options: [
        "3 bulan",
        "6 bulan",
        "1 tahun",
        "2 tahun",
        "Tidak ada batas waktu",
      ],
      answer: 3,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
    },
    {
      question: "Apa kewajiban utama lembaga penyiaran terhadap anak-anak dan remaja sesuai Pasal 36 ayat (3)?",
      options: [
        "Menayangkan acara hiburan sepanjang hari",
        "Menyiarkan acara yang sesuai pada waktu yang tepat",
        "Mengurangi durasi siaran iklan",
        "Mengizinkan akses tanpa batas ke semua program",
        "Menyediakan program siaran berbahasa asing",
      ],
      answer: 2,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
    },
    {
      question: "Apa yang menjadi tanggung jawab KPI dalam melaksanakan pengawasan, sebagaimana tercantum dalam Pasal 8 ayat (2)?",
      options: [
        "Mengawasi pelaksanaan pedoman perilaku penyiaran dan standar program siaran",
        "Mengelola pendanaan untuk lembaga penyiaran",
        "Menentukan tema utama siaran nasional",
        "Menyediakan saluran untuk program pendidikan",
        "Menghapus siaran iklan niaga dari semua saluran",
      ],
      answer: 1,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
    },
    {
      question: "Apa pembatasan untuk stasiun penyiaran lokal sesuai Pasal 31 ayat (5)?",
      options: [
        "Hanya dapat beroperasi pada jam tertentu",
        "Wilayah jangkauan terbatas pada lokasi tempat stasiun tersebut berada",
        "Dilarang menayangkan program dari luar negeri",
        "Hanya boleh dioperasikan oleh pemerintah daerah",
        "Tidak boleh menjalin kerjasama dengan lembaga asing",
      ],
      answer: 2,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
    },
    {
      question: "Apa konsekuensi jika lembaga penyiaran melanggar ketentuan isi siaran sesuai Pasal 36 ayat (6)?",
      options: [
        "Diberi peringatan tertulis",
        "Mendapatkan teguran dari pemerintah",
        "Mendapat sanksi administratif atau pidana sesuai ketentuan",
        "Diwajibkan membayar denda kepada KPI",
        "Dihapus dari daftar penyiaran nasional",
      ],
      answer: 3,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB IV Pelaksanaan Siaran"
    },
    {
      question: "Apa definisi 'lembaga penyiaran komunitas' menurut Pasal 21 ayat (1)?",
      options: [
        "Lembaga penyiaran yang berorientasi komersial",
        "Lembaga penyiaran yang melayani kepentingan komunitas tertentu dengan daya pancar rendah",
        "Lembaga penyiaran yang berfokus pada program internasional",
        "Lembaga penyiaran yang berbentuk badan usaha swasta",
        "Lembaga penyiaran yang dikelola pemerintah daerah",
      ],
      answer: 2,
      sub: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran BAB III Penyelenggaraan Penyiaran"
    },
    {
      question: "Apa sanksi administratif yang dapat dikenakan jika lembaga penyiaran tidak memenuhi kewajiban sebagaimana tercantum dalam Pasal 55 ayat (2)?",
      options: [
        "Peringatan tertulis dan penghentian sementara acara bermasalah",
        "Penghapusan izin siaran untuk program tertentu",
        "Pemutusan hubungan kerja dengan produser acara",
        "Pengurangan dana operasional oleh KPI",
        "Penghentian semua kegiatan penyiaran selama satu bulan",
      ],
      answer: 1,
      sub: "BAB VIII Sanksi Administratif"
    },
      {
        question: "Apa tujuan utama didirikannya Lembaga Penyiaran Publik menurut PP No. 11 Tahun 2005 Pasal 4?",
        options: [
          "Mendukung dominasi siaran internasional",
          "Menghasilkan keuntungan maksimal bagi negara",
          "Menyajikan program siaran yang mendorong mental masyarakat yang beriman, cerdas, dan mandiri",
          "Mengurangi pengaruh budaya asing dalam program lokal",
          "Menyediakan akses penuh kepada lembaga swasta untuk memproduksi siaran",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Menurut Pasal 5, apa kewajiban RRI dan TVRI dalam menyelenggarakan sistem jaringan siaran?",
        options: [
          "Hanya melibatkan stasiun pusat tanpa cabang",
          "Menyediakan jaringan siaran di wilayah terbatas",
          "Menggunakan sistem stasiun jaringan yang menjangkau seluruh wilayah Indonesia",
          "Bekerjasama hanya dengan lembaga penyiaran swasta",
          "Mengutamakan siaran berbasis satelit internasional",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa kriteria utama yang harus dipenuhi untuk mendirikan Lembaga Penyiaran Publik Lokal sebagaimana diatur dalam Pasal 7?",
        options: [
          "Tidak adanya stasiun penyiaran swasta di wilayah tersebut",
          "Adanya persetujuan dari KPI tanpa melibatkan masyarakat",
          "Tersedianya alokasi frekuensi dan sumber daya profesional",
          "Dikelola oleh lembaga internasional dengan izin pemerintah",
          "Beroperasi selama 24 jam penuh tanpa gangguan",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Bagaimana mekanisme penetapan izin penyelenggaraan penyiaran untuk Lembaga Penyiaran Publik Lokal menurut Pasal 9?",
        options: [
          "Hanya diberikan oleh pemerintah daerah setempat",
          "Diterbitkan langsung oleh Menteri tanpa proses evaluasi",
          "Melibatkan Forum Rapat Bersama antara KPI dan Menteri",
          "Berdasarkan keputusan lembaga penyiaran swasta terkait",
          "Bergantung pada persetujuan publik melalui referendum",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa yang menjadi batasan untuk siaran iklan rokok pada Lembaga Penyiaran Publik sebagaimana diatur dalam Pasal 25?",
        options: [
          "Hanya boleh ditayangkan pada siaran internasional",
          "Tidak diperbolehkan sama sekali pada waktu siaran",
          "Hanya boleh ditayangkan pukul 21.30 hingga 05.00 waktu setempat",
          "Wajib disertai peringatan kesehatan pada setiap iklan",
          "Hanya diperbolehkan di wilayah tertentu dengan izin khusus",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa sanksi administratif bagi Lembaga Penyiaran Publik Lokal yang tidak memenuhi kewajiban menyimpan bahan siaran selama 1 tahun?",
        options: [
          "Pencabutan izin penyiaran secara permanen",
          "Teguran tertulis",
          "Penghentian sementara siaran lokal",
          "Denda administratif maksimal Rp. 10 juta",
          "Larangan menyelenggarakan siaran iklan komersial",
        ],
        answer: 2,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa yang diatur dalam Pasal 18 tentang netralitas isi siaran RRI dan TVRI?",
        options: [
          "Harus mencantumkan nama lembaga penyiaran pada setiap siaran",
          "Tidak boleh mengutamakan kepentingan golongan tertentu",
          "Hanya boleh menyiarkan program lokal tanpa konten luar negeri",
          "Wajib berorientasi pada budaya asing",
          "Harus mengutamakan program pendidikan sepanjang hari",
        ],
        answer: 2,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Menurut Pasal 13, apa keunikan penyelenggaraan multipleksing oleh Lembaga Penyiaran Publik?",
        options: [
          "Mengutamakan teknologi analog untuk semua program siaran",
          "Menyiarkan dua program atau lebih dalam satu saluran pada saat bersamaan",
          "Hanya berlaku untuk siaran internasional berbasis satelit",
          "Menyediakan akses penuh untuk lembaga swasta",
          "Dibatasi untuk program pendidikan saja",
        ],
        answer: 2,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa batas waktu untuk masa uji coba siaran sebelum izin tetap diberikan kepada Lembaga Penyiaran Publik Lokal televisi?",
        options: [
          "3 bulan",
          "6 bulan",
          "1 tahun",
          "2 tahun",
          "Tidak ada batas waktu yang ditentukan",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Bagaimana tanggung jawab Dewan Pengawas sesuai Pasal 5?",
        options: [
          "Melakukan evaluasi harian terhadap konten program",
          "Mengelola pendanaan lembaga penyiaran publik",
          "Mewakili masyarakat, pemerintah, dan lembaga dalam pengawasan",
          "Menentukan struktur organisasi penyelenggaraan penyiaran",
          "Menetapkan batasan frekuensi siaran regional",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Menurut Pasal 15, berapa persen alokasi frekuensi radio untuk RRI dan TVRI di setiap wilayah layanan siaran?",
        options: [
          "10%",
          "15%",
          "20%",
          "25%",
          "30%",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa kewajiban utama lembaga penyiaran terkait ralat siaran menurut Pasal 23?",
        options: [
          "Melakukan ralat dalam waktu 48 jam setelah kekeliruan ditemukan",
          "Menyampaikan ralat kepada pihak pemerintah saja",
          "Melakukan ralat dalam waktu kurang dari 24 jam atau pada kesempatan pertama",
          "Mengganti program siaran yang bersangkutan dengan program baru",
          "Menghapus rekaman siaran yang keliru tanpa pemberitahuan",
        ],
        answer: 3,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa yang diatur dalam Pasal 19 mengenai klasifikasi acara siaran?",
        options: [
          "Mengutamakan program berbasis hiburan untuk semua umur",
          "Pencantuman kode layak tonton untuk klasifikasi tertentu, seperti anak dan dewasa",
          "Hanya menggunakan bahasa Indonesia sebagai standar utama",
          "Membatasi durasi setiap acara hingga 30 menit",
          "Menentukan jadwal siaran berdasarkan preferensi lembaga penyiaran",
        ],
        answer: 2,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa tanggung jawab Dewan Direksi terhadap keuangan lembaga penyiaran sebagaimana diatur dalam Pasal 32?",
        options: [
          "Melaporkan keuangan kepada KPI setiap bulan",
          "Bertanggung jawab atas keseluruhan penyelenggaraan keuangan internal dan eksternal",
          "Menyerahkan pengelolaan anggaran kepada Dewan Pengawas",
          "Mengutamakan pemasukan dari iklan niaga",
          "Mengelola dana hanya untuk siaran regional",
        ],
        answer: 2,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
      {
        question: "Apa batas maksimal siaran iklan niaga dalam sehari untuk Lembaga Penyiaran Publik menurut Pasal 25?",
        options: [
          "10%",
          "15%",
          "20%",
          "25%",
          "30%",
        ],
        answer: 2,
        sub: "PP No. 11 Tahun 2005 tentang Penyelenggaraan Penyiaran Lembaga Penyiaran Publik"
      },
  {
    question: "Salah satu tugas Asisten Teknisi Siaran Pemula adalah memahami proses produksi siaran. Sebutkan dan jelaskan lima tahapan utama dalam proses produksi siaran, serta peran penting yang dimainkan oleh Asisten Teknisi di setiap tahapan tersebut.",
    options: [
      "Tahapan pra-produksi, produksi, pasca-produksi, distribusi, dan evaluasi. Asisten Teknisi berperan dalam persiapan alat, pengaturan set, pengambilan gambar, editing, dan analisis hasil siaran.",
      "Tahapan perencanaan, pengambilan gambar, penyuntingan, distribusi, dan promosi. Asisten Teknisi bertanggung jawab untuk merencanakan konten, mengoperasikan kamera, menyunting video, mendistribusikan konten, dan mempromosikan siaran.",
      "Tahapan pengembangan konsep, pengambilan gambar, penyuntingan audio-visual, distribusi media sosial, dan analisis audiens. Asisten Teknisi terlibat dalam setiap langkah untuk memastikan kualitas teknis.",
      "Tahapan ideasi, pengambilan gambar langsung, editing video, publikasi online, dan feedback dari penonton. Asisten Teknisi membantu dalam semua aspek teknis untuk memastikan siaran berjalan lancar.",
      "Tahapan perencanaan konten, pengaturan peralatan teknis, pengambilan gambar langsung di lapangan, editing akhir video, dan penayangan di platform media. Asisten Teknisi berkontribusi di semua tahap untuk menjaga kualitas siaran.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Dalam dunia penyiaran, pemahaman tentang perangkat keras sangat penting. Sebutkan tiga jenis perangkat keras yang umum digunakan dalam produksi siaran langsung dan jelaskan fungsi serta tantangan penggunaannya di lapangan.",
    options: [
      "Kamera video untuk merekam gambar; mixer audio untuk mengatur suara; dan transmitter untuk mengirim sinyal. Tantangan termasuk pengaturan teknis yang rumit dan risiko gangguan sinyal.",
      "Laptop untuk editing video; microphone untuk menangkap suara; dan lampu studio untuk pencahayaan. Tantangan termasuk kesulitan dalam pengeditan waktu nyata dan pengaturan pencahayaan yang tepat.",
      "Kamera DSLR untuk kualitas gambar tinggi; perangkat lunak editing untuk pasca produksi; dan monitor untuk melihat tayangan langsung. Tantangan termasuk kebutuhan akan pengetahuan teknis mendalam dan perangkat lunak yang kompleks.",
      "Perangkat streaming untuk menyampaikan konten secara online; tripod untuk stabilitas kamera; dan sistem audio portable untuk mobilitas. Tantangan termasuk koneksi internet yang tidak stabil dan pengaturan perangkat di lokasi berbeda.",
      "Mixer video untuk menggabungkan berbagai sumber video; microphone nirkabel untuk kebebasan bergerak; dan sistem distribusi sinyal untuk menjangkau audiens luas. Tantangan termasuk sinkronisasi audio-video yang tepat dan manajemen sumber daya di lapangan.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Asisten Teknisi Siaran Pemula juga harus memahami prinsip dasar audio-visual. Diskusikan tiga prinsip dasar audio-visual yang harus dikuasai oleh seorang teknisi siaran serta bagaimana penerapannya dapat mempengaruhi kualitas siaran secara keseluruhan.",
    options: [
      "Prinsip komposisi visual yang baik; penggunaan warna yang tepat; dan keseimbangan audio. Penerapan prinsip ini dapat meningkatkan daya tarik visual siaran serta memastikan suara jelas dan seimbang.",
      "Prinsip pencahayaan yang baik; penggunaan efek suara; dan transisi antar adegan. Penerapan prinsip ini dapat menciptakan suasana yang tepat bagi pemirsa serta menjaga kontinuitas cerita dalam siaran.",
      "Prinsip kecepatan frame; penggunaan grafik animasi; dan pemilihan musik latar. Penerapan prinsip ini dapat meningkatkan dinamika siaran serta menarik perhatian pemirsa dengan elemen visual yang menarik.",
      "Prinsip narasi visual; penggunaan teknik pengambilan gambar; dan penyesuaian suara latar. Penerapan prinsip ini dapat membantu menyampaikan pesan dengan lebih efektif kepada pemirsa.",
      "Prinsip penggunaan teknologi terbaru; integrasi media sosial; dan interaktivitas dengan audiens. Penerapan prinsip ini dapat meningkatkan keterlibatan pemirsa serta memperluas jangkauan siaran.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Keselamatan kerja adalah aspek penting dalam industri penyiaran. Sebutkan tiga prosedur keselamatan kerja yang harus diterapkan oleh Asisten Teknisi Siaran Pemula saat bekerja di lokasi siaran langsung serta potensi risiko jika prosedur tersebut tidak diterapkan dengan baik.",
    options: [
      "Penggunaan alat pelindung diri (APD), pematuhan terhadap instruksi keamanan listrik, dan penanganan peralatan berat dengan benar. Risiko meliputi cedera fisik akibat kecelakaan kerja atau kebakaran.",
      "Menghindari penggunaan kabel panjang tanpa pelindung, menjaga area kerja tetap bersih dari barang-barang tidak terpakai, serta memastikan semua peralatan terpasang dengan baik sebelum digunakan. Risiko termasuk terjadinya korsleting listrik atau kecelakaan akibat barang berserakan.",
      "Hanya menggunakan peralatan standar tanpa modifikasi apapun, tidak berbagi peralatan pribadi dengan orang lain selama proses siaran berlangsung serta selalu melakukan pemeriksaan peralatan sebelum digunakan. Risiko termasuk kerusakan alat atau cedera akibat penggunaan alat yang tidak sesuai standar.",
      "Memastikan semua anggota tim mengenakan pakaian formal saat siaran berlangsung agar terlihat profesional di depan kamera, menjaga area kerja tetap terang benderang agar memudahkan pekerjaan teknis serta menghindari penggunaan perangkat elektronik saat siaran berlangsung agar tidak terjadi gangguan teknis. Risiko termasuk gangguan visual bagi penonton atau kebingungan di lapangan jika terjadi masalah teknis mendadak.",
      "Menerapkan sistem rotasi tugas di antara anggota tim agar tidak ada satu orang pun yang terlalu lama berada di area berbahaya selama proses syuting berlangsung, membatasi akses ke area berbahaya bagi orang luar agar tidak terjadi insiden serta melakukan simulasi keadaan darurat secara berkala agar semua anggota tim siap menghadapi situasi darurat kapan saja. Risiko termasuk kurangnya kesiapan menghadapi situasi darurat atau kebingungan saat terjadi insiden mendesak di lapangan.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Dalam konteks penyiaran digital saat ini, seorang Asisten Teknisi Siaran Pemula harus memahami berbagai platform distribusi konten. Sebutkan tiga platform distribusi konten digital yang populer saat ini beserta kelebihan masing-masing platform dalam konteks penyiaran langsung.",
    options: [
      "YouTube Live karena jangkauannya yang luas; Facebook Live karena kemampuan interaksi langsung dengan audiens; Twitch karena fokus pada konten gaming dengan komunitas aktif.",
      "Instagram Live karena kemudahan aksesnya bagi pengguna smartphone; TikTok Live karena format video pendeknya yang menarik perhatian cepat; LinkedIn Live karena fokus pada profesionalisme dalam penyampaian konten bisnis.",
      "Zoom karena fitur interaksi tatap muka secara langsung dengan audiens kecil; Skype karena kemampuannya dalam panggilan video grup; Google Meet karena integrasinya dengan aplikasi Google lainnya seperti Google Calendar.",
      "Vimeo Live karena kualitas streaming tinggi tanpa iklan mengganggu; DLive karena berbasis blockchain sehingga memberikan imbalan kepada pembuat konten secara adil; Periscope karena kemudahan berbagi ke Twitter secara langsung.",
      "Rumble karena kebebasan berekspresi tanpa sensor ketat dari platform lain; Bigo Live karena fitur monetisasi bagi streamer populer; Dailymotion karena dukungan terhadap berbagai format video tanpa batasan waktu tayang.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Salah satu tantangan besar bagi Asisten Teknisi Siaran Pemula adalah menghadapi masalah teknis selama siaran langsung. Diskusikan tiga jenis masalah teknis umum yang sering terjadi selama siaran langsung beserta langkah-langkah pencegahan atau solusi cepat yang dapat diterapkan oleh seorang teknisi di lapangan.",
    options: [
      "Masalah sinyal lemah dapat dicegah dengan melakukan pengecekan lokasi sebelum siaran dimulai serta menggunakan amplifier sinyal jika diperlukan. Jika terjadi masalah saat siaran berlangsung, segera lakukan switch ke sumber cadangan jika tersedia.",
      "Kualitas audio buruk sering disebabkan oleh mikrofon rusak atau posisi mikrofon yang salah. Pencegahan dilakukan dengan memeriksa semua peralatan audio sebelum siaran dimulai dan jika terjadi masalah saat live broadcast, segera gunakan mikrofon cadangan atau atur ulang posisi mikrofon hingga mendapatkan suara terbaik.",
      "Gambar kabur bisa disebabkan oleh lensa kotor atau setting kamera yang salah. Pencegahan dilakukan dengan rutin membersihkan lensa kamera sebelum digunakan serta melakukan uji coba setting kamera sebelum tayang langsung. Jika terjadi masalah saat tayang langsung, segera lakukan zoom out atau ganti kamera jika memungkinkan.",
      "Gangguan dari lingkungan sekitar seperti suara bising dari luar studio dapat dicegah dengan melakukan isolasi suara pada ruangan sebelum tayang atau menggunakan mikrofon directional saat syuting langsung di luar ruangan. Jika gangguan terjadi saat tayang berlangsung, gunakan teknik editing audio pasca-produksi jika memungkinkan atau coba atur ulang posisi mikrofon agar lebih fokus pada pembicara.",
      "Keterlambatan dalam transisi antar segmen dapat disebabkan oleh kurangnya koordinasi antara tim produksi. Pencegahan dilakukan dengan melakukan briefing sebelum tayang agar semua anggota tim mengetahui alur acara serta jika terjadi masalah saat tayang langsung segera lakukan improvisasi sambil menunggu segmen berikutnya siap ditayangkan.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Asisten Teknisi Siaran Pemula juga harus memiliki kemampuan analisis terhadap hasil siarannya sendiri. Apa saja indikator kinerja utama (KPI) yang perlu dianalisis setelah sebuah acara selesai ditayangkan? Jelaskan bagaimana setiap indikator tersebut dapat memberikan wawasan tentang performa acara tersebut.",
    options: [
      "Jumlah penonton live stream sebagai indikator utama keberhasilan acara secara real-time; tingkat interaksi audiens seperti komentar atau likes sebagai ukuran keterlibatan penonton selama acara berlangsung; durasi tonton rata-rata sebagai indikasi seberapa menarik konten tersebut bagi audiens sepanjang acara disiarkan.",
      "Jumlah share di media sosial sebagai ukuran seberapa banyak acara tersebut dibicarakan setelah tayang; jumlah unduhan konten rekaman sebagai ukuran popularitas acara setelah selesai ditayangkan; feedback positif dari survei penonton sebagai ukuran kepuasan audiens terhadap isi acara secara keseluruhan.",
      "Jumlah iklan terjual selama acara sebagai ukuran monetisasi acara tersebut; jumlah sponsor yang terlibat sebagai indikator keberhasilan kerjasama bisnis dalam penyiaran acara tersebut; jumlah artikel berita tentang acara sebagai ukuran dampak media terhadap reputasi acara tersebut setelah tayang.",
      "Tingkat konversi dari promosi produk selama acara sebagai ukuran efektivitas pemasaran melalui media siar; jumlah permintaan informasi lebih lanjut tentang produk/layanan terkait setelah acara sebagai indikator minat audiens terhadap tawaran produk/layanan tersebut setelah tayang;",
      "Jumlah reaksi negatif dari audiens sebagai indikator potensi masalah dalam penyampaian konten selama acara berlangsung; jumlah permintaan maaf dari pihak penyelenggara kepada penonton sebagai ukuran responsibilitas atas kesalahan selama tayang berlangsung;",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Dalam era digital saat ini, seorang Asisten Teknisi Siaran Pemula perlu memahami pentingnya media sosial dalam mendukung kegiatan siarannya. Sebutkan tiga strategi penggunaan media sosial yang efektif untuk mempromosikan program siaran serta bagaimana strategi tersebut dapat meningkatkan keterlibatan audiens?",
    options: [
      "Menggunakan teaser video pendek sebelum acara disiarkan untuk menarik perhatian audiens serta membuat hashtag khusus agar penonton bisa berdiskusi tentang program di media sosial selama tayang berlangsung;",
      "Mengadakan kuis atau giveaway melalui akun media sosial resmi terkait program yang akan disiarkan guna meningkatkan interaksi dengan audiens sebelum tayangnya program;",
      "Membuat polling terkait topik-topik menarik sebelum program dimulai agar penonton merasa dilibatkan dalam proses kreatif program;",
      "Menggunakan live streaming di platform media sosial selama sesi tanya jawab pasca-acara agar pemirsa bisa berinteraksi langsung dengan pembicara;",
      "Semua jawaban benar;",
    ],
    answer: 5,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "'Kreativitas' merupakan salah satu aspek penting bagi seorang Asisten Teknisi Siaran Pemula dalam menciptakan konten menarik. Diskusikan dua cara kreatif dalam menyajikan informasi kepada pemirsa melalui media siar serta dampaknya terhadap pengalaman menonton pemirsa secara keseluruhan.",
    options: [
      "'Menggunakan grafik animasi interaktif' untuk menjelaskan data kompleks secara visual sehingga lebih mudah dipahami oleh pemirsa sambil 'menghadirkan narasumber ahli' secara live untuk memberikan perspektif tambahan sehingga meningkatkan kredibilitas informasi;",
      "'Menggunakan format dokumenter' dalam menyajikan berita terkini agar lebih mendalam sambil 'menghadirkan elemen cerita' sehingga pemirsa merasa terhubung emosional dengan topik bahasan;",
      "'Menyajikan berita melalui segmen talk show' agar lebih dinamis sambil 'membuat segmen khusus' tentang kisah inspiratif dari tokoh masyarakat sehingga mendorong partisipasi aktif dari penonton;",
      "'Menerapkan pendekatan gamifikasi' pada kuis interaktif sambil 'melibatkan influencer' untuk memperluas jangkauan audiens sehingga menciptakan buzz positif tentang program;",
      "'Menggunakan teknik storytelling' dalam setiap segmen sambil 'membagikan tips praktis' terkait topik bahasan sehingga memberikan nilai tambah kepada pemirsa;",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "'Penyiaran berbasis digital' menjadi tren utama saat ini. Sebutkan tiga keuntungan penyiaran berbasis digital dibandingkan penyiaran tradisional serta bagaimana keuntungan-keuntungan tersebut dapat dimanfaatkan oleh seorang Asisten Teknisi Siaran Pemula?",
    options: [
      "'Aksesibilitas global', 'interaktivitas', dan 'penghematan biaya'. Aksesibilitas memungkinkan jangkauan audiens lebih luas tanpa batas geografis;, interaktivitas memungkinkan keterlibatan penonton secara real-time;, sedangkan penghematan biaya berkaitan dengan penggunaan infrastruktur digital dibandingkan analog.",
      
       "'Kualitas gambar tinggi', 'kemudahan analisis data', dan 'kemampuan streaming on-demand'. Kualitas gambar tinggi meningkatkan pengalaman menonton;, kemudahan analisis data memungkinkan evaluasi performa program;, sedangkan kemampuan streaming on-demand memberi fleksibilitas kepada pemirsa.",
       
       "'Fleksibilitas waktu', 'penggunaan teknologi canggih', dan 'kemampuan monetisasi'. Fleksibilitas waktu memberi pilihan kepada pemirsa;, penggunaan teknologi canggih memungkinkan inovasi;, sedangkan kemampuan monetisasi membuka peluang pendapatan baru.",
       
       "'Integrasi multimedia', 'kemudahan kolaborasi', dan 'peningkatan engagement'. Integrasi multimedia memperkaya konten;, kemudahan kolaborasi mempermudah kerja tim;, sedangkan peningkatan engagement mendorong loyalitas audiens.",
       
       "'Penggunaan algoritma cerdas', 'akses data real-time', dan 'kemampuan personalisasi'. Penggunaan algoritma cerdas meningkatkan relevansi konten;, akses data real-time memungkinkan respons cepat;, sedangkan kemampuan personalisasi menciptakan pengalaman unik bagi setiap pengguna.",
      
     ],
     answer: 1,
     sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
   },
   {
     question: "'Evaluasi program' adalah langkah penting setelah pelaksanaan sebuah program siaran. Sebutkan tiga metode evaluasi program yang umum digunakan oleh seorang Asisten Teknisi Siaran Pemula beserta keuntungan masing-masing metode dalam konteks peningkatan kualitas siarannya selanjutnya.", 
     options:[
       "'Survei penonton', 'analisis rating', dan 'focus group discussion'. Survei memberikan data kuantitatif tentang kepuasan penonton;, analisis rating menunjukkan popularitas program;, sedangkan focus group discussion memberi wawasan mendalam tentang persepsi penonton.",
       
       "'Wawancara narasumber', 'analisis kompetitor', dan 'observasi langsung'. Wawancara memberi perspektif dari pihak terkait;, analisis kompetitor membantu memahami posisi pasar;, sedangkan observasi langsung menangkap dinamika lapangan.",
       
       "'Analisis SWOT', 'pemetaan stakeholder', dan 'benchmarking'. Analisis SWOT membantu mengidentifikasi kekuatan/kekurangan;, pemetaan stakeholder menunjukkan hubungan penting;, sedangkan benchmarking membandingkan performa dengan standar industri.",
       
       "'Pengumpulan feedback online', 'diskusi panel', dan 'analisis tren'. Pengumpulan feedback online memberi data real-time;, diskusi panel melibatkan banyak perspektif;, sedangkan analisis tren menunjukkan pola perilaku penonton.",
       
       "'Penyusunan laporan akhir', 'presentasi hasil evaluasi', dan 'diskusi hasil evaluasi'. Penyusunan laporan akhir merangkum temuan;, presentasi hasil evaluasi menyampaikan informasi kepada tim;, diskusi hasil evaluasi membahas langkah selanjutnya.",
     ],
     answer :1,
     sub :("Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula")
   },
  {
    question: "Dalam konteks jabatan Asisten Teknisi Siaran Pemula, salah satu tugas utama adalah memahami dan menerapkan prinsip dasar siaran. Sebutkan dan jelaskan tiga prinsip dasar siaran yang harus dikuasai oleh seorang Asisten Teknisi Siaran Pemula, serta bagaimana penerapannya dalam situasi nyata di lapangan.",
    options: [
      "Prinsip keandalan, prinsip kreativitas, dan prinsip efisiensi. Keandalan memastikan siaran tidak terganggu, kreativitas dalam penyampaian konten, dan efisiensi dalam penggunaan sumber daya.",
      "Prinsip legalitas, prinsip etika, dan prinsip inovasi. Legalitas berkaitan dengan kepatuhan terhadap regulasi, etika dalam penyampaian informasi, dan inovasi dalam teknologi siaran.",
      "Prinsip teknis, prinsip estetika, dan prinsip interaktivitas. Prinsip teknis mencakup penguasaan alat siar, estetika berkaitan dengan kualitas visual dan audio, serta interaktivitas untuk melibatkan pemirsa.",
      "Prinsip akurasi, prinsip transparansi, dan prinsip partisipasi. Akurasi memastikan informasi yang disiarkan benar, transparansi dalam proses produksi siaran, dan partisipasi untuk melibatkan audiens.",
      "Prinsip komunikasi efektif, prinsip pemecahan masalah, dan prinsip kolaborasi. Komunikasi efektif penting untuk menyampaikan pesan dengan jelas, pemecahan masalah untuk mengatasi kendala teknis, dan kolaborasi antar tim untuk hasil maksimal.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Salah satu aspek penting dalam pekerjaan Asisten Teknisi Siaran Pemula adalah pemahaman tentang peralatan siar. Sebutkan tiga jenis peralatan yang umum digunakan dalam siaran langsung dan jelaskan fungsi masing-masing peralatan tersebut serta tantangan yang mungkin dihadapi saat penggunaannya.",
    options: [
      "Kamera video untuk merekam gambar; mixer audio untuk mengatur suara; dan transmitter untuk mengirim sinyal. Tantangan termasuk pengaturan teknis yang rumit dan risiko gangguan sinyal.",
      "Laptop untuk editing video; microphone untuk menangkap suara; dan lampu studio untuk pencahayaan. Tantangan termasuk kesulitan dalam pengeditan waktu nyata dan pengaturan pencahayaan yang tepat.",
      "Kamera DSLR untuk kualitas gambar tinggi; perangkat lunak editing untuk pasca produksi; dan monitor untuk melihat tayangan langsung. Tantangan termasuk kebutuhan akan pengetahuan teknis mendalam dan perangkat lunak yang kompleks.",
      "Perangkat streaming untuk menyampaikan konten secara online; tripod untuk stabilitas kamera; dan sistem audio portable untuk mobilitas. Tantangan termasuk koneksi internet yang tidak stabil dan pengaturan perangkat di lokasi berbeda.",
      "Mixer video untuk menggabungkan berbagai sumber video; microphone nirkabel untuk kebebasan bergerak; dan sistem distribusi sinyal untuk menjangkau audiens luas. Tantangan termasuk sinkronisasi audio-video yang tepat dan manajemen sumber daya di lapangan.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Dalam proses produksi siaran, seorang Asisten Teknisi Siaran Pemula harus mampu bekerja sama dengan tim. Diskusikan pentingnya kolaborasi dalam tim produksi siaran serta bagaimana komunikasi yang efektif dapat meningkatkan hasil siaran secara keseluruhan.",
    options: [
      "Kolaborasi memungkinkan pembagian tugas yang efisien; komunikasi efektif membantu menghindari kesalahpahaman sehingga setiap anggota tim dapat berkontribusi secara optimal.",
      "Kolaborasi tidak terlalu penting karena setiap anggota dapat bekerja secara individu; komunikasi hanya diperlukan saat ada masalah besar.",
      "Kolaborasi menciptakan persaingan di antara anggota tim; komunikasi sering kali menyebabkan kebingungan alih-alih meningkatkan hasil.",
      "Kolaborasi hanya penting pada tahap awal produksi; komunikasi efektif tidak terlalu berpengaruh pada hasil akhir siaran.",
      "Kolaborasi membantu menciptakan ide-ide baru; namun komunikasi sering kali dianggap sebagai formalitas yang tidak perlu di lapangan.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Asisten Teknisi Siaran Pemula juga harus memahami prosedur keselamatan kerja di studio atau lokasi siaran. Sebutkan tiga prosedur keselamatan kerja yang harus diterapkan selama proses siaran langsung serta potensi risiko jika prosedur tersebut dilanggar.",
    options: [
      "Penggunaan alat pelindung diri (APD), pematuhan terhadap instruksi keamanan listrik, dan penanganan peralatan berat dengan benar. Risiko meliputi cedera fisik akibat kecelakaan kerja atau kebakaran.",
      "Menghindari penggunaan kabel panjang, menjaga area kerja tetap bersih, dan memastikan semua peralatan terpasang dengan baik. Risiko termasuk terjadinya korsleting listrik atau kecelakaan akibat barang berserakan.",
      "Hanya menggunakan peralatan standar tanpa modifikasi, tidak berbagi peralatan pribadi dengan orang lain, serta selalu melakukan pemeriksaan peralatan sebelum digunakan. Risiko termasuk kerusakan alat atau cedera akibat penggunaan alat yang tidak sesuai standar.",
      "Memastikan semua anggota tim mengenakan pakaian formal saat siaran, menjaga area kerja tetap terang benderang, serta menghindari penggunaan perangkat elektronik saat siaran. Risiko termasuk gangguan visual bagi penonton atau kebingungan di lapangan.",
      "Menerapkan sistem rotasi tugas di antara anggota tim, membatasi akses ke area berbahaya bagi orang luar, serta melakukan simulasi keadaan darurat secara berkala. Risiko termasuk kurangnya kesiapan menghadapi situasi darurat atau kebingungan saat terjadi insiden.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Salah satu tantangan yang dihadapi oleh Asisten Teknisi Siaran Pemula adalah memastikan kualitas siaran tetap terjaga di tengah gangguan teknis. Sebutkan dan jelaskan tiga jenis gangguan teknis yang umum terjadi selama siaran langsung, serta langkah-langkah yang dapat diambil untuk mengatasi masalah tersebut secara efektif.",
    options: [
      "Gangguan sinyal, masalah audio, dan kesalahan pengaturan kamera. Untuk mengatasi gangguan sinyal, pastikan semua perangkat terhubung dengan baik dan gunakan repeater jika perlu. Masalah audio dapat diatasi dengan memeriksa koneksi mikrofon dan menggunakan alat pemroses suara. Kesalahan pengaturan kamera dapat diperbaiki dengan melakukan kalibrasi sebelum siaran.",
      "Keterlambatan dalam pengambilan gambar, noise latar belakang, dan kesalahan dalam transisi antar segmen. Keterlambatan dapat diatasi dengan melakukan rehearsal sebelum siaran. Noise latar belakang dapat diminimalkan dengan menggunakan mikrofon directional. Kesalahan transisi dapat diperbaiki dengan penggunaan software editing pasca-produksi.",
      "Kualitas gambar buruk, suara tidak sinkron, dan kehilangan sinyal. Kualitas gambar buruk dapat diperbaiki dengan mengecek lensa dan pengaturan pencahayaan. Suara tidak sinkron perlu diatasi dengan menyesuaikan pengaturan audio di mixer. Kehilangan sinyal dapat diatasi dengan memeriksa semua kabel dan koneksi.",
      "Kesalahan dalam pengaturan lighting, penggunaan alat yang tidak sesuai, dan masalah bandwidth internet. Kesalahan lighting dapat diatasi dengan melakukan uji coba pencahayaan sebelum siaran. Penggunaan alat yang tidak sesuai harus dicegah dengan memastikan semua peralatan telah disetujui sebelumnya. Masalah bandwidth internet dapat diatasi dengan menggunakan koneksi cadangan.",
      "Perangkat keras rusak, kurangnya persiapan teknis, dan masalah komunikasi antar tim. Perangkat keras rusak harus segera diganti atau diperbaiki. Kurangnya persiapan teknis dapat diatasi dengan melakukan briefing sebelum siaran. Masalah komunikasi antar tim harus diselesaikan dengan penggunaan alat komunikasi yang efektif.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Dalam penyiaran, penting bagi Asisten Teknisi Siaran Pemula untuk memahami aspek hukum terkait hak cipta. Sebutkan tiga hal penting yang harus diperhatikan terkait hak cipta dalam penyiaran serta konsekuensi hukum yang mungkin timbul jika tidak mematuhi ketentuan tersebut.",
    options: [
      "Memastikan semua konten yang digunakan memiliki izin; memberikan kredit kepada pemilik hak cipta; dan menyimpan catatan penggunaan konten. Konsekuensi hukum termasuk denda tinggi, tuntutan hukum dari pemilik hak cipta, dan penghentian siaran.",
      "Menggunakan konten publik tanpa izin; tidak mencantumkan sumber; dan mengabaikan peraturan internasional tentang hak cipta. Konsekuensi hukum termasuk penjara, kehilangan lisensi siaran, dan kerugian finansial bagi stasiun.",
      "Membeli lisensi untuk semua konten; menggunakan musik bebas royalti; dan menghindari penggunaan logo merek tanpa izin. Konsekuensi hukum termasuk penarikan konten dari platform digital dan reputasi buruk bagi stasiun.",
      "Menggunakan konten dari media sosial tanpa izin; mencantumkan nama pembuat konten; dan mengabaikan ketentuan fair use. Konsekuensi hukum termasuk denda administratif, tuntutan ganti rugi dari pemilik konten, dan risiko reputasi negatif.",
      "Menggunakan karya seni tanpa izin; tidak memberikan atribusi kepada pencipta; dan menggunakan konten yang dilindungi tanpa lisensi. Konsekuensi hukum termasuk tuntutan pidana, denda besar, dan larangan beroperasi bagi stasiun penyiaran.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Asisten Teknisi Siaran Pemula harus mampu beradaptasi dengan perkembangan teknologi baru dalam dunia penyiaran. Sebutkan tiga teknologi terbaru dalam bidang penyiaran serta bagaimana teknologi tersebut dapat meningkatkan kualitas siaran secara keseluruhan.",
    options: [
      "Teknologi streaming 4K untuk kualitas gambar lebih tinggi; penggunaan drone untuk pengambilan gambar dari sudut pandang unik; dan teknologi augmented reality (AR) untuk menambah elemen visual menarik dalam siaran.",
      "Penggunaan kamera DSLR untuk video berkualitas tinggi; teknologi audio digital untuk suara lebih jernih; dan software editing berbasis cloud untuk kolaborasi lebih efisien antara tim produksi.",
      "Teknologi virtual reality (VR) untuk pengalaman imersif bagi audiens; penggunaan sistem transmisi nirkabel untuk mobilitas lebih besar saat syuting; serta aplikasi mobile untuk interaksi langsung dengan penonton selama siaran.",
      "Sistem manajemen konten berbasis AI untuk analisis performa siaran; penggunaan alat pemantau media sosial untuk feedback real-time dari audiens; serta teknologi blockchain untuk transparansi dalam distribusi konten.",
      "Semua jawaban benar karena setiap teknologi baru memberikan keunggulan kompetitif dalam meningkatkan kualitas produksi siaran.",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Dalam situasi darurat selama siaran langsung, seorang Asisten Teknisi Siaran Pemula harus siap menghadapi berbagai kemungkinan. Sebutkan tiga langkah darurat yang harus dilakukan jika terjadi masalah teknis besar selama siaran langsung serta bagaimana langkah-langkah ini dapat meminimalkan dampak negatif pada audiens.",
    options: [
      "Segera beralih ke sumber cadangan jika tersedia; menjaga komunikasi terbuka dengan tim produksi melalui radio atau interkom; dan memberi tahu audiens tentang situasi sambil meminta maaf atas gangguan yang terjadi.",
      "Menghentikan siaran secepatnya hingga masalah teratasi; meminta bantuan dari pihak luar jika diperlukan; serta mengabaikan audiens sampai situasi kembali normal.",
      "Mencoba memperbaiki masalah sambil tetap tayang tanpa memberi tahu audiens tentang gangguan; menggunakan humor untuk mengalihkan perhatian penonton dari masalah teknis;",
      "Mengalihkan tayangan ke program lain tanpa pemberitahuan sebelumnya kepada audiens; menunggu hingga masalah teratasi sebelum melanjutkan tayangan;",
      "Menyiapkan skrip darurat sebelumnya sehingga bisa dibaca saat terjadi masalah; meminta audiens untuk bersabar sambil memperbaiki masalah;",
    ],
    answer: 1,
    sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
  },
  {
    question: "Asisten Teknisi Siaran Pemula perlu memahami pentingnya feedback dari audiens setelah acara ditayangkan. Sebutkan tiga metode efektif untuk mengumpulkan feedback dari audiens serta bagaimana informasi tersebut dapat digunakan untuk meningkatkan kualitas acara berikutnya.",
    options: [
      "'Survei online' setelah acara selesai untuk mendapatkan data kuantitatif tentang kepuasan penonton;, 'diskusi kelompok' dengan beberapa penonton terpilih untuk mendapatkan wawasan kualitatif;, serta 'media sosial' sebagai platform interaksi langsung yang memungkinkan audiens memberikan komentar secara real-time.",
       "'Polling' selama acara berlangsung;, 'komentar langsung' melalui fitur chat pada platform streaming;, serta 'survei pasca-acara' yang dikirim melalui email.",
       "'Analisis rating' acara berdasarkan jumlah penonton;, 'feedback dari sponsor' mengenai respons pasar;, serta 'komentar dari kritikus media' sebagai ukuran kualitas tayangan.",
       "'Wawancara narasumber' setelah acara;, 'analisis data media sosial' mengenai reaksi audiens;, serta 'pengumpulan data rating' sebagai indikator popularitas.",
       "'Penyebaran kuesioner' melalui email;, 'diskusi terbuka' di forum komunitas;, serta 'tanya jawab langsung' di media sosial setelah acara.",
     ],
     answer: 1,
     sub: "Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
   },
   {
     question: "'Penyampaian informasi secara efektif' adalah kunci keberhasilan seorang Asisten Teknisi Siaran Pemula dalam menyampaikan pesan kepada pemirsa. Diskusikan tiga teknik komunikasi efektif yang harus diterapkan oleh seorang teknisi selama proses penyiaran serta bagaimana teknik-teknik ini dapat meningkatkan keterlibatan pemirsa.",
     options:[
       "'Penggunaan bahasa tubuh yang positif', 'penyampaian pesan secara jelas', dan 'mendengarkan aktif'. Bahasa tubuh positif menarik perhatian audiens;, penyampaian pesan jelas mencegah kebingungan;, mendengarkan aktif menunjukkan bahwa pembicara menghargai audiens.",
       "'Penggunaan humor', 'penyampaian informasi secara ringkas', dan 'menggunakan contoh konkret'. Humor membuat acara lebih menarik;, penyampaian ringkas menjaga perhatian;, contoh konkret membantu pemirsa memahami konteks.",
       "'Membuat eye contact', 'menggunakan nada suara bervariasi', dan 'mengajukan pertanyaan retoris'. Eye contact menciptakan kedekatan;, nada suara bervariasi menjaga minat;, pertanyaan retoris merangsang pemikiran kritis.",
       "'Menjaga kecepatan bicara', 'menggunakan alat bantu visual', dan 'melibatkan audiens dalam diskusi'. Kecepatan bicara mempengaruhi pemahaman;, alat bantu visual memperjelas informasi;, keterlibatan audiens meningkatkan interaksi.",
       "'Menghindari jargon teknis', 'menggunakan analogi sederhana', dan 'memberikan ringkasan di akhir'. Menghindari jargon membuat informasi lebih mudah dipahami;, analogi membantu menjelaskan konsep sulit;, ringkasan memperkuat ingatan pemirsa.",
       
     ],
     answer :1,
     sub :"Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
   },
   {
     question: "'Manajemen waktu' sangat penting dalam dunia penyiaran agar semua segmen acara berjalan sesuai jadwal. Sebutkan tiga teknik manajemen waktu yang efektif bagi seorang Asisten Teknisi Siaran Pemula serta bagaimana penerapan teknik-teknik tersebut dapat mempengaruhi kelancaran siaran secara keseluruhan.", 
     options:[
       "'Penyusunan jadwal rinci sebelum acara dimulai', 'penetapan waktu buffer antara segmen', dan 'penggunaan timer selama siaran'. Jadwal rinci membantu semua anggota tim mengetahui tugas mereka;, waktu buffer mencegah keterlambatan segmen berikutnya;, timer menjaga setiap segmen tetap pada jalurnya.",
       "'Membuat daftar tugas harian', 'menghindari multitasking saat live', dan 'melakukan evaluasi waktu setelah acara'. Daftar tugas membantu fokus pada prioritas;, menghindari multitasking mencegah kesalahan saat live;', evaluasi waktu membantu perbaikan ke depan.",
       "'Menetapkan deadline ketat', 'berkomunikasi terus-menerus dengan tim', dan 'menggunakan perangkat lunak manajemen proyek'. Deadline ketat mendorong disiplin waktu;, komunikasi menjaga semua orang berada pada halaman yang sama;', perangkat lunak membantu melacak kemajuan.",
       "'Melakukan briefing sebelum acara', 'mengatur ulang jadwal jika diperlukan', dan 'menerapkan sistem rotasi tugas'. Briefing memastikan semua orang siap;, penyesuaian jadwal fleksibel terhadap situasi mendesak;', rotasi tugas mencegah kejenuhan anggota tim.",
       "'Menggunakan aplikasi pengingat', 'membagi tugas besar menjadi bagian kecil', dan 'memprioritaskan tugas berdasarkan urgensi'. Aplikasi pengingat membantu menjaga fokus pada deadline;, pembagian tugas membuat pekerjaan lebih mudah dikelola;', prioritas memastikan hal-hal penting diselesaikan terlebih dahulu.",
     ],
     answer :1,
     sub :"Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
   },
   {
     question: "'Kreativitas' merupakan salah satu aspek penting bagi seorang Asisten Teknisi Siaran Pemula dalam menciptakan konten menarik. Diskusikan dua cara kreatif dalam menyajikan informasi kepada pemirsa melalui media siar serta dampaknya terhadap pengalaman menonton pemirsa secara keseluruhan.", 
     options:[
       "'Menggunakan grafik animasi interaktif' untuk menjelaskan data kompleks secara visual sehingga lebih mudah dipahami oleh pemirsa sambil 'menghadirkan narasumber ahli' secara live untuk memberikan perspektif tambahan sehingga meningkatkan kredibilitas informasi;";
       "'Menggunakan format dokumenter' dalam menyajikan berita terkini agar lebih mendalam sambil 'menghadirkan elemen cerita' sehingga pemirsa merasa terhubung emosional dengan topik bahasan;",
       "'Menyajikan berita melalui segmen talk show' agar lebih dinamis sambil 'membuat segmen khusus' tentang kisah inspiratif dari tokoh masyarakat sehingga mendorong partisipasi aktif dari penonton;",
       "'Menerapkan pendekatan gamifikasi' pada kuis interaktif sambil 'melibatkan influencer' untuk memperluas jangkauan audiens sehingga menciptakan buzz positif tentang program;",
       "'Menggunakan teknik storytelling' dalam setiap segmen sambil 'membagikan tips praktis' terkait topik bahasan sehingga memberikan nilai tambah kepada pemirsa;",
     ],
     answer :1,
     sub :"Materi Pokok Seleksi Kompetensi Bidang Asisten Teknisi Siaran Pemula"
   }
]
