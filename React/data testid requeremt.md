Atribut data-testid sangat penting untuk pengujian. Berikut adalah daftar lengkap data-testid yang wajib ada dan opsional untuk mendukung kriteria skilled dan advanced:

Data-testid Wajib (Basic Functionality)
Struktur Aplikasi:

note-app - Container seluruh aplikasi catatan
note-app-header - Container bagian header aplikasi
note-app-body - Container bagian konten aplikasi (form & daftar catatan)
Form Input Catatan:

note-input - Container bagian input catatan
note-input-form - Container bagian form input
note-input-title-field - Text input untuk judul catatan
note-input-body-field - Text input untuk isi catatan
note-input-submit-button - Button untuk menambahkan catatan
Daftar Catatan Aktif:

active-notes-list - Container daftar catatan aktif
note-item - Container untuk menampilkan item catatan
note-item-content - Container bagian judul, tanggal, dan isi catatan
note-item-title - Heading untuk menampilkan judul catatan
note-item-date - Paragraph untuk menampilkan tanggal catatan
note-item-body - Paragraph untuk menampilkan isi catatan
note-item-action - Container bagian tombol aksi (hapus dan arsip)
note-item-delete-button - Button untuk menghapus catatan
Empty State:

Gunakan pattern: data-testid={parentTestId}-empty untuk pesan kosong
Contoh: data-testid="active-notes-list-empty"
Tambahkan juga className="notes-list__empty-message" pada elemen pesan
Data-testid Opsional (Skilled & Advanced Criteria)
Pencarian Catatan (Criterion 1 & 3 - Skilled):

note-search - Container untuk komponen pencarian
note-search-input - Input field untuk kata kunci pencarian
Fitur Arsip (Criterion 3 - Advanced):

archived-notes-section - Section header untuk catatan arsip
archived-notes-list - Container daftar catatan arsip
note-item-archive-button - Button untuk arsip/unarchive catatan
Character Counter (Criterion 4 - Skilled):

note-input-title-remaining - Counter sisa karakter judul
Tambahkan className="note-input__title__char-limit" pada elemen counter
Form Validation (Criterion 4 - Advanced):

Gunakan className="note-input__feedback--error" untuk pesan error validasi
Tidak memerlukan data-testid khusus, cukup class name saja
Highlighting (Criterion 2 - Advanced):

Tidak perlu data-testid khusus
Gunakan elemen <mark> untuk menyorot hasil pencarian
Grouping (Criterion 1 - Advanced):

Gunakan <section class="notes-group"> untuk grup catatan per bulan-tahun
Tambahkan data-testid="{groupKey}-group" untuk setiap grup
Tambahkan data-testid="{groupKey}-group-count" untuk jumlah item per grup
Pattern Implementasi
Empty State Pattern:

<div data-testid="active-notes-list-empty" className="notes-list__empty-message">
  Tidak ada catatan
</div>
Dynamic Data-testid Pattern:

{Object.entries(groupedNotes).map(([groupKey, notes]) => (
  <section key={groupKey} data-testid={`${groupKey}-group`} className="notes-group">
    <h3>{formatGroupHeader(groupKey)}</h3>
    <span data-testid={`${groupKey}-group-count`}>{notes.length} catatan</span>
    {/* Render notes */}
  </section>
))}
Character Counter Pattern:

<span
  data-testid="note-input-title-remaining"
  className="note-input__title__char-limit"
>
  {50 - title.length} karakter tersisa
</span>
Error Message Pattern:

{body.length < 10 && body.length > 0 && (
  <p className="note-input__feedback--error">
    Isi catatan minimal harus 10 karakter
  </p>
)}