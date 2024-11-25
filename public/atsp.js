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
    sub: "BAB II Asas, Tujuan, Fungsi, dan Arah"
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
    sub: "BAB II Asas, Tujuan, Fungsi, dan Arah"
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
    sub: "BAB II Asas, Tujuan, Fungsi, dan Arah"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB V Pedoman Perilaku Penyiaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB VIII Sanksi Administratif"
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
    sub: "BAB II Asas, Tujuan, Fungsi, dan Arah"
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
    sub: "BAB I Ketentuan Umum"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB II Asas, Tujuan, Fungsi, dan Arah"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB V Pedoman Perilaku Penyiaran"
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
    sub: "BAB IV Pelaksanaan Siaran"
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
    sub: "BAB X Ketentuan Pidana"
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
    sub: "BAB III Penyelenggaraan Penyiaran"
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
      sub: "BAB II Asas, Tujuan, Fungsi, dan Arah"
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
      sub: "BAB IV Pelaksanaan Siaran"
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
      sub: "BAB III Penyelenggaraan Penyiaran"
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
      sub: "BAB III Penyelenggaraan Penyiaran"
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
      sub: "BAB IV Pelaksanaan Siaran"
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
      sub: "BAB III Penyelenggaraan Penyiaran"
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
      sub: "BAB III Penyelenggaraan Penyiaran"
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
      sub: "BAB IV Pelaksanaan Siaran"
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
      sub: "BAB III Penyelenggaraan Penyiaran"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
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
        sub: "PP No. 11 Tahun 2005"
      }
    ];
    