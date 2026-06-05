Setiap rubrik mendapat skor 0—3 (Rejected, Basic, Skilled, Advanced). Jika ada rubrik yang berstatus Rejected, submission otomatis ditolak.

1. Penguasaan Array Function
Rejected: Komponen App tidak menggunakan Array.prototype.map maupun Array.prototype.filter (UI rusak atau daftar tidak berubah).
Basic: NotesList merender setiap NoteItem menggunakan map, dan onDelete menghapus catatan dengan filter.
Skilled: App menerapkan filter berdasarkan searchKeyword untuk menampilkan daftar hasil pencarian ( case-insensitive).
Advanced: Catatan dikelompokkan per kombinasi bulan–tahun (boleh bahasa inggris atau indonesia) sebelum di-render; NotesList menampilkan struktur <section class="notes-group"> dengan header dan jumlah item untuk tiap grup.
2. Reusable Component
Rejected: UI utama ditulis dalam satu komponen sehingga NotesList atau NoteItem tidak digunakan.
Basic: Komponen starter (App, NoteInput, NotesList, NoteItem) tetap terpisah dan data dikirim melalui props.
Skilled: Tersedia src/components/NoteActionButton.jsx dengan props variant dan onClick yang dipakai NoteItem untuk tombol hapus serta arsip.
Advanced: File src/components/NoteItem.jsx mendefinisikan fungsi highlightText yang mengembalikan elemen <mark> dan digunakan ulang untuk menyorot note.title serta note.body.
3. State & Event Management
Rejected: Tambah atau hapus catatan tidak mengubah state notes.
Basic: onAdd menambahkan catatan baru, onDelete menghapus catatan dari state, dan pesan kosong muncul saat array catatan kosong.
Skilled: NoteSearch menyimpan searchKeyword di state dan App merender daftar yang sudah difilter sesuai kata kunci.
Advanced: onArchive men-toggle field archived, dan UI menampilkan dua section terpisah untuk catatan aktif dan arsip lengkap dengan judul Catatan Aktif dan Arsip beserta jumlah item.
4. Controlled Form
Rejected: Nilai input tidak sinkron dengan state atau submit form gagal menambahkan catatan.
Basic: Input judul dan isi merupakan controlled component dan form di-reset setelah submit berhasil.
Skilled: Judul dibatasi maksimal 50 karakter menggunakan state (jika menggunakan atribut maxLength, tidak terhitung valid), serta menampilkan counter. note-input__title__char-limit yang berubah dinamis.
Advanced: Submit ditolak apabila isi catatan < 10 karakter; pesan error ditampilkan menggunakan elemen dengan class note-input__feedback--error.
