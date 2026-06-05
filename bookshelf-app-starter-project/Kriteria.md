Submission ini akan meminta Anda membuat aplikasi dengan tema aplikasi pencatatan buku. Ini kita namakan “Bookshelf App”. Aplikasi tersebut Anda butuhkan sebagai salah satu syarat untuk lulus dari kelas ini. Kami mengedepankan kreativitas Anda dalam membangun aplikasi, tetapi pastikan aplikasi yang dibuat memenuhi kriteria yang akan kami jelaskan.

Buatlah aplikasi web yang dapat memasukan data buku ke dalam rak, memindahkan data buku antar rak, dan menghapus data buku dari rak.

Untuk lebih jelasnya, ada lima kriteria wajib yang harus Anda penuhi.

Kriteria Wajib 1: Gunakan localStorage sebagai Penyimpanan
Data buku yang ditampilkan pada rak-rak harus dapat bertahan walaupun halaman web ditutup. Dengan begitu, Anda harus menyimpan data buku pada localStorage.
Setiap buku harus berupa objek JavaScript yang membawa beberapa data berikut. Pastikan nama properti beserta tipe data value-nya juga sesuai.
Format objek beserta tipe data nilainya.

{
  id: string | number,
  title: string,
  author: string,
  year: number,
  isComplete: boolean,
}
Berikut contoh implementasi data buku riilnya.

{
  id: 3657848524,
  title: 'Harry Potter and the Philosopher\'s Stone',
  author: 'J.K Rowling',
  year: 1997,
  isComplete: false,
}


Kriteria Wajib 2: Mampu Menambahkan Buku
Aplikasi harus mampu menyimpan buku baru menggunakan formulir yang telah disediakan dalam starter project.
ID buku harus dihasilkan secara otomatis dan unik. Tipsnya, Anda dapat memanfaatkan timestamp sebagai nilainya. Nilai timestamp dapat diperoleh dengan kode new Date().getTime() atau Number(new Date()).
Formulir setidaknya bisa menghasilkan empat data berikut.
title: judul buku.
author: penulis buku.
year: tahun rilis buku bertipe number.
isComplete: kondisi apakah sudah selesai dibaca atau belum.


Kriteria Wajib 3: Memiliki Dua Rak Buku
Aplikasi wajib memiliki 2 Rak buku, yakni “Belum selesai dibaca” dan “Selesai dibaca”.
Rak "Belum selesai dibaca" hanya menyimpan buku-buku dengan isComplete bernilai false.
Rak "Selesai dibaca" hanya menyimpan buku-buku dengan isComplete bernilai true.


Kriteria Wajib 4: Dapat Memindahkan Buku Antar Rak
Buku-buku dalam rak harus dapat dipindahkan ke rak lainnya, baik "Belum selesai dibaca" maupun "Selesai dibaca". Pastikan perubahan ini juga tersimpan dalam localStorage.



Kriteria Wajib 5: Dapat Menghapus Data Buku
Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat dihapus. Selain menghilang dari halaman, data buku dalam localStorage juga harus terhapus.

Selain kriteria utama, ada kriteria opsional juga yang dapat Anda penuhi agar mendapat penilaian yang lebih tinggi.

Kriteria Opsional 1: Menambahkan Fitur Pencarian Buku
Memiliki fitur pencarian buku yang telah disimpan dan ditampilkan pada rak sesuai dengan title buku yang dituliskan pada kolom pencarian.

Kriteria Opsional 2: Menambahkan Fitur Edit Buku
Selain dapat menambahkan baru, buku-buku yang telah tersimpan diharapkan dapat diedit.

Submission Anda akan dinilai oleh reviewer dengan penilaian bintang berskala 1-5. Penilaian ini akan diukur berdasarkan parameter yang akan kita jelaskan. Anda dapat menerapkan beberapa saran untuk mendapatkan nilai tinggi. Berikut daftarnya.

Menerapkan kriteria opsional pertama: Menambahkan Fitur Pencarian Buku.
Menerapkan kriteria opsional kedua: Menambahkan Fitur Edit Buku.