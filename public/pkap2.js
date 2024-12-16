const questions = [
  {
    "question": "Apa yang dimaksud dengan Kertas Kerja Pemeriksaan Kesehatan Koperasi (KKPKK)?",
    "options": [
      "Dokumen yang hanya digunakan untuk audit keuangan koperasi",
      "Pedoman pemeriksaan yang memuat data dan dokumen selama proses pemeriksaan",
      "Laporan hasil pemeriksaan yang diajukan kepada anggota koperasi",
      "Data rekapan SHU untuk menentukan kesehatan koperasi",
      "Evaluasi tingkat kepatuhan koperasi terhadap hukum"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam KKPKK, profil risiko koperasi mencakup aspek berikut, kecuali:",
    "options": [
      "Risiko inheren",
      "Manajemen risiko",
      "Kinerja usaha koperasi",
      "Tingkat pelanggaran hukum",
      "Pengelolaan permodalan"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa tujuan utama Pemeriksaan Kesehatan Koperasi?",
    "options": [
      "Menghapus koperasi yang tidak produktif",
      "Menentukan tata kelola koperasi secara internal",
      "Meningkatkan efektivitas pengawasan koperasi oleh pemerintah",
      "Menyediakan laporan tahunan untuk kepentingan anggota",
      "Melakukan audit mendalam atas aset koperasi"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Kinerja keuangan koperasi dalam KKPKK mencakup evaluasi berikut, kecuali:",
    "options": [
      "Manajemen likuiditas",
      "Rentabilitas usaha",
      "Peningkatan jumlah anggota",
      "Efisiensi biaya operasional",
      "Kesinambungan keuangan"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa komponen yang dinilai dalam tata kelola koperasi berdasarkan KKPKK?",
    "options": [
      "Kepemilikan aset",
      "Kesesuaian prinsip koperasi dan manajemen organisasi",
      "Jumlah pinjaman yang disalurkan",
      "Tingkat pengembalian SHU",
      "Sumber dana eksternal koperasi"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dokumen apa yang digunakan untuk mencatat temuan selama pemeriksaan kesehatan koperasi?",
    "options": [
      "Berita Acara Pemeriksaan Kesehatan Koperasi",
      "Laporan Hasil Pemeriksaan Kesehatan",
      "Rincian Pemeriksaan Anggota",
      "Notulen Rapat Anggota",
      "Sertifikat Pemeriksaan Kesehatan Koperasi"
    ],
    "answer": 1,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang dinilai dalam manajemen risiko likuiditas koperasi?",
    "options": [
      "Tingkat pelanggaran hukum",
      "Kesesuaian prosedur permodalan",
      "Aset likuid terhadap kewajiban lancar",
      "SHU bersih terhadap total pendapatan",
      "Peningkatan ekuitas koperasi"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa kriteria tingkat kesehatan koperasi dengan nilai aset likuid di bawah 5%?",
    "options": [
      "Cukup sehat",
      "Sehat",
      "Dalam pengawasan khusus",
      "Tidak sehat",
      "Kurang sehat"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang harus dilakukan tim pengawas setelah menyelesaikan pemeriksaan?",
    "options": [
      "Menyerahkan berita acara pemeriksaan kepada koperasi dalam 14 hari",
      "Menyampaikan hasil kepada kepala daerah dalam 30 hari",
      "Menghapus koperasi yang tidak sehat",
      "Menerbitkan laporan keuangan koperasi",
      "Mengadakan rapat anggota koperasi"
    ],
    "answer": 1,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam pemeriksaan mandiri koperasi, dokumen pendukung harus diserahkan kepada siapa?",
    "options": [
      "Anggota koperasi",
      "Pengurus koperasi",
      "Deputi atau kepala perangkat daerah",
      "Tim pengawas koperasi pusat",
      "Lembaga hukum setempat"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa syarat minimal kelayakan tata kelola koperasi untuk dikategorikan 'sehat' dalam KKPKK?",
    "options": [
      "Anggaran dasar telah disahkan oleh anggota",
      "Koperasi memiliki lebih dari 50 anggota aktif",
      "Tersedia laporan keuangan 3 tahun terakhir",
      "Jumlah pinjaman tidak melebihi total aset koperasi",
      "Seluruh prinsip koperasi diterapkan dan dokumen legalitas lengkap"
    ],
    "answer": 5,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa indikator utama dalam menilai risiko kepatuhan koperasi?",
    "options": [
      "Tingkat partisipasi anggota dalam rapat tahunan",
      "Jumlah aset produktif dibandingkan total aset",
      "Jenis, signifikansi, dan frekuensi pelanggaran yang dilakukan",
      "Peningkatan likuiditas dalam 3 tahun terakhir",
      "Rasio aset lancar terhadap kewajiban jangka pendek"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam konteks pemeriksaan mandiri, berapa lama waktu yang dimiliki koperasi untuk menyerahkan hasil pemeriksaan kepada Deputi?",
    "options": [
      "30 hari setelah laporan selesai",
      "14 hari setelah dokumen pendukung disiapkan",
      "7 hari setelah pemeriksaan mandiri selesai",
      "30 hari setelah akhir tahun buku",
      "Tidak ada batasan waktu"
    ],
    "answer": 1,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa tujuan dari pemberian Sertifikat Pemeriksaan Kesehatan Koperasi?",
    "options": [
      "Menjamin transparansi laporan keuangan koperasi",
      "Meningkatkan kredibilitas koperasi di mata anggota",
      "Mengapresiasi koperasi dengan tingkat kesehatan 'cukup sehat' atau lebih",
      "Meningkatkan efisiensi operasional koperasi",
      "Memberikan akses pinjaman kepada koperasi bersertifikat"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa risiko yang diidentifikasi jika aset likuid koperasi kurang dari kewajiban jangka pendek?",
    "options": [
      "Risiko operasional",
      "Risiko kepatuhan",
      "Risiko likuiditas",
      "Risiko strategis",
      "Risiko inheren"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Koperasi yang hasil pemeriksaannya dalam kategori 'Dalam Pengawasan Khusus' dapat menerima sanksi administratif berupa:",
    "options": [
      "Pencabutan izin usaha",
      "Pemotongan SHU",
      "Peringatan tertulis atau pembatasan kegiatan usaha",
      "Penghentian operasi sementara",
      "Penghapusan badan hukum"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa indikator utama yang digunakan untuk menilai kesinambungan keuangan koperasi?",
    "options": [
      "Pertumbuhan aset, ekuitas, dan hasil usaha bersih",
      "Jumlah anggota koperasi",
      "Partisipasi anggota dalam simpanan pokok",
      "Penurunan tingkat pelanggaran hukum",
      "Peningkatan jumlah pinjaman yang disalurkan"
    ],
    "answer": 1,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Bagaimana manajemen risiko operasional dinilai dalam KKPKK?",
    "options": [
      "Berdasarkan aset likuid terhadap kewajiban lancar",
      "Melalui pengawasan pengurus dan keberagaman produk atau jasa",
      "Dari tingkat pendapatan operasional koperasi",
      "Melalui frekuensi rapat anggota",
      "Berdasarkan ketaatan koperasi terhadap anggaran dasar"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang dimaksud dengan tingkat kesehatan koperasi kategori 'Tidak Sehat'?",
    "options": [
      "Koperasi tidak menghasilkan SHU dalam satu tahun terakhir",
      "Nilai risiko inheren dan kepatuhan berada di bawah batas minimal",
      "Hasil pemeriksaan menunjukkan kekurangan dokumen legalitas",
      "Pinjaman koperasi melebihi total aset produktif",
      "Seluruh indikator penilaian memiliki nilai kategori terendah"
    ],
    "answer": 5,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam pemeriksaan kesehatan koperasi oleh Tim Pengawas, berapa lama hasil pemeriksaan harus disampaikan kepada koperasi?",
    "options": [
      "7 hari sejak pemeriksaan selesai",
      "30 hari sejak pemeriksaan selesai",
      "14 hari sejak laporan disusun",
      "60 hari setelah akhir tahun buku",
      "Tidak ada batas waktu"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang menjadi tujuan utama dari pemeriksaan kesehatan koperasi berdasarkan Juknis Deputi Nomor 15 Tahun 2021?",
    "options": [
      "Melakukan evaluasi jumlah anggota koperasi",
      "Mendapatkan laporan keuangan yang transparan",
      "Menghentikan operasional koperasi yang tidak sehat",
      "Meningkatkan tata kelola dan manajemen risiko koperasi",
      "Menentukan kelayakan koperasi untuk mendapatkan pinjaman"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam penilaian profil risiko koperasi, manajemen risiko dinilai berdasarkan aspek berikut, kecuali:",
    "options": [
      "Efektivitas prosedur pengelolaan risiko",
      "Kesesuaian kebijakan dengan peraturan",
      "Kemampuan mitigasi risiko",
      "Penerapan pengendalian internal",
      "Ketersediaan dana cadangan"
    ],
    "answer": 5,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa indikator utama dalam menilai risiko inheren koperasi?",
    "options": [
      "Tingkat partisipasi anggota dalam rapat",
      "Kesesuaian anggaran dasar koperasi",
      "Jumlah anggota aktif koperasi",
      "Kompleksitas aktivitas koperasi",
      "Jumlah aset likuid koperasi"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa langkah pertama yang harus dilakukan oleh koperasi yang masuk kategori 'Kurang Sehat'?",
    "options": [
      "Mengganti pengurus koperasi",
      "Melakukan audit eksternal atas laporan keuangan",
      "Mengajukan permohonan bantuan pemerintah",
      "Menambah jumlah anggota koperasi",
      "Menyiapkan laporan rencana aksi perbaikan"
    ],
    "answer": 5,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang dimaksud dengan risiko likuiditas dalam profil risiko koperasi?",
    "options": [
      "Penurunan jumlah anggota koperasi aktif",
      "Ketidakmampuan koperasi dalam memenuhi kewajiban jangka pendek",
      "Kelemahan dalam pengelolaan pinjaman",
      "Risiko yang timbul akibat pelanggaran hukum koperasi",
      "Kehilangan kepercayaan anggota koperasi"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa kriteria koperasi yang mendapatkan status 'Tidak Sehat'?",
    "options": [
      "Nilai risiko inheren sangat tinggi tanpa mitigasi memadai",
      "Tidak memiliki simpanan pokok anggota",
      "Jumlah anggota koperasi kurang dari 10 orang",
      "Tidak mencatat SHU dalam laporan keuangan",
      "Tidak menyelenggarakan Rapat Anggota Tahunan (RAT)"
    ],
    "answer": 1,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang menjadi dasar evaluasi dalam penilaian kinerja keuangan koperasi?",
    "options": [
      "Frekuensi rapat anggota koperasi",
      "Besarnya dana pinjaman yang disalurkan",
      "Pertumbuhan aset, ekuitas, dan SHU bersih",
      "Peningkatan jumlah anggota koperasi",
      "Jumlah aset koperasi dibandingkan utang"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa fokus utama dalam pemeriksaan kesehatan koperasi terkait tata kelola?",
    "options": [
      "Pemilihan pengurus koperasi oleh anggota",
      "Penerapan kebijakan pemberian pinjaman",
      "Jumlah anggota aktif koperasi",
      "Kesesuaian prinsip koperasi dan manajemen organisasi",
      "Transparansi laporan keuangan koperasi"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa tujuan pemberian skor dalam pemeriksaan kesehatan koperasi?",
    "options": [
      "Menentukan peringkat koperasi di tingkat nasional",
      "Menentukan koperasi yang layak menerima bantuan",
      "Mengukur tingkat partisipasi anggota koperasi",
      "Mengidentifikasi koperasi yang memerlukan pembinaan",
      "Memastikan peningkatan modal koperasi"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang harus dilakukan tim pengawas setelah menyelesaikan pemeriksaan kesehatan koperasi?",
    "options": [
      "Menyampaikan laporan kepada Deputi Perkoperasian",
      "Menetapkan status kesehatan koperasi secara langsung",
      "Membuat berita acara pemeriksaan kepada koperasi",
      "Menyerahkan dokumen hasil pemeriksaan ke instansi pembina",
      "Melakukan audit ulang atas koperasi"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Sebuah koperasi memiliki SHU (Sisa Hasil Usaha) sebesar Rp 120 juta. Berdasarkan aturan pembagian, 40% digunakan untuk dana cadangan, 30% dibagikan kepada anggota berdasarkan jasa usaha, dan sisanya untuk kegiatan lain. Berapa jumlah SHU yang dibagikan kepada anggota?",
    "options": [
      "Rp 30 juta",
      "Rp 36 juta",
      "Rp 48 juta",
      "Rp 60 juta",
      "Rp 72 juta"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Sebuah koperasi memiliki aset likuid Rp 50 juta dan kewajiban jangka pendek Rp 200 juta. Berapakah rasio likuiditas koperasi tersebut?",
    "options": [
      "10%",
      "20%",
      "25%",
      "50%",
      "75%"
    ],
    "answer": 1,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam pemeriksaan kesehatan koperasi, sebuah koperasi ditemukan memiliki risiko inheren tinggi pada tata kelola dan tidak memiliki mitigasi yang memadai. Status apa yang kemungkinan besar akan diberikan kepada koperasi tersebut?",
    "options": [
      "Cukup sehat",
      "Sehat",
      "Kurang sehat",
      "Dalam pengawasan khusus",
      "Tidak sehat"
    ],
    "answer": 5,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang harus dilakukan koperasi yang masuk kategori 'Dalam Pengawasan Khusus' akibat rendahnya skor manajemen risiko?",
    "options": [
      "Menghentikan sementara kegiatan usaha koperasi",
      "Meningkatkan jumlah anggota koperasi",
      "Menyusun dan melaksanakan rencana perbaikan",
      "Mencari bantuan dari lembaga keuangan",
      "Mengganti pengurus koperasi dalam 6 bulan"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Sebuah koperasi memiliki total pendapatan Rp 500 juta dan SHU sebesar Rp 100 juta. Berapakah rentabilitas usaha koperasi tersebut?",
    "options": [
      "10%",
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam sebuah koperasi, hasil pemeriksaan menunjukkan tata kelola yang baik, namun kinerja keuangan menunjukkan penurunan yang signifikan. Status kesehatan koperasi kemungkinan besar adalah:",
    "options": [
      "Sehat",
      "Cukup sehat",
      "Kurang sehat",
      "Dalam pengawasan khusus",
      "Tidak sehat"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam konteks profil risiko koperasi, manajemen risiko dinilai berdasarkan:",
    "options": [
      "Keberagaman produk koperasi",
      "Efektivitas mitigasi risiko",
      "Jumlah aset koperasi",
      "Keanggotaan koperasi",
      "Transparansi laporan keuangan"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam pemeriksaan kesehatan koperasi, berapa minimal rasio likuiditas agar koperasi dapat dikategorikan sebagai 'cukup sehat'?",
    "options": [
      "20%",
      "40%",
      "50%",
      "60%",
      "70%"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Jika hasil pemeriksaan menunjukkan bahwa koperasi memiliki skor tata kelola 70, kinerja keuangan 60, dan profil risiko 50, maka status kesehatan koperasi kemungkinan besar adalah:",
    "options": [
      "Sehat",
      "Cukup sehat",
      "Kurang sehat",
      "Dalam pengawasan khusus",
      "Tidak sehat"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Koperasi dengan SHU sebesar Rp 150 juta menggunakan 20% untuk dana cadangan, 50% untuk anggota berdasarkan jasa usaha, dan sisanya untuk dana pendidikan. Berapa jumlah yang digunakan untuk dana pendidikan?",
    "options": [
      "Rp 20 juta",
      "Rp 30 juta",
      "Rp 40 juta",
      "Rp 50 juta",
      "Rp 60 juta"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa indikator utama yang dinilai dalam penilaian tata kelola koperasi berdasarkan Juknis Deputi Nomor 15 Tahun 2021?",
    "options": [
      "Efisiensi pengelolaan modal",
      "Kesesuaian prinsip koperasi dan manajemen organisasi",
      "Jumlah anggota aktif",
      "Peningkatan jumlah SHU",
      "Frekuensi rapat pengurus"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam pemeriksaan kesehatan koperasi, berapa persen minimal rasio aset likuid terhadap kewajiban jangka pendek agar koperasi dianggap sehat?",
    "options": [
      "40%",
      "50%",
      "60%",
      "70%",
      "80%"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang dimaksud dengan risiko inheren dalam profil risiko koperasi?",
    "options": [
      "Risiko yang melekat pada aktivitas koperasi tanpa mempertimbangkan mitigasi",
      "Risiko yang berasal dari ketidakpatuhan terhadap aturan",
      "Risiko yang timbul akibat kurangnya partisipasi anggota",
      "Risiko yang dihadapi koperasi dalam pengelolaan aset",
      "Risiko yang muncul akibat pengelolaan keuangan"
    ],
    "answer": 1,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa tujuan utama dari pemberian skor dalam evaluasi kinerja keuangan koperasi?",
    "options": [
      "Menentukan kelayakan koperasi untuk mendapatkan bantuan",
      "Mengidentifikasi kelemahan dalam pengelolaan koperasi",
      "Menentukan tingkat partisipasi anggota",
      "Menentukan status kesehatan koperasi",
      "Meningkatkan jumlah aset koperasi"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Jika sebuah koperasi memiliki aset likuid Rp 100 juta dan kewajiban jangka pendek Rp 200 juta, berapa rasio likuiditas koperasi tersebut?",
    "options": [
      "25%",
      "30%",
      "40%",
      "50%",
      "60%"
    ],
    "answer": 4,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Dalam pemeriksaan kesehatan koperasi, apa yang harus dilakukan jika koperasi dinyatakan 'Tidak Sehat'?",
    "options": [
      "Mengganti seluruh pengurus koperasi",
      "Menambah jumlah anggota koperasi",
      "Melaksanakan rencana perbaikan yang diawasi oleh instansi pembina",
      "Mengurangi pinjaman koperasi sebesar 20%",
      "Mengajukan permohonan bantuan dana dari pemerintah"
    ],
    "answer": 3,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang menjadi komponen utama dalam penilaian kinerja keuangan koperasi?",
    "options": [
      "Pertumbuhan aset, rentabilitas, dan efisiensi operasional",
      "Frekuensi Rapat Anggota Tahunan (RAT)",
      "Jumlah pinjaman koperasi",
      "Tingkat pengembalian modal",
      "Jumlah anggota koperasi aktif"
    ],
    "answer": 1,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Jika sebuah koperasi memiliki SHU sebesar Rp 200 juta dan 50% digunakan untuk anggota berdasarkan jasa usaha, berapa jumlah SHU yang dibagikan kepada anggota?",
    "options": [
      "Rp 80 juta",
      "Rp 100 juta",
      "Rp 120 juta",
      "Rp 150 juta",
      "Rp 160 juta"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa komponen yang dinilai dalam manajemen risiko koperasi?",
    "options": [
      "Pengelolaan dana cadangan",
      "Kemampuan mitigasi risiko dan pengendalian internal",
      "Jumlah aset dibandingkan kewajiban",
      "Tingkat SHU terhadap total pendapatan",
      "Frekuensi pelaksanaan rapat pengurus"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  },
  {
    "question": "Apa yang harus dilakukan koperasi jika hasil pemeriksaan menunjukkan status 'Kurang Sehat'?",
    "options": [
      "Mengajukan bantuan dana pemerintah",
      "Melakukan perbaikan sesuai rekomendasi tim pengawas",
      "Mengganti pengurus koperasi",
      "Menghapus anggota tidak aktif",
      "Mengurangi pinjaman koperasi"
    ],
    "answer": 2,
    "sub": "Juknis Deputi Nomor 15 Tahun 2021"
  }
]

