Silakan download starter project di atas karena submission ini wajib menggunakan starter project yang disediakan.

Cara Menjalankan Starter Project
Ekstrak berkas ZIP yang telah diunduh ke folder proyek Anda
Buka terminaldan arahkan ke folder proyek:
cd nama-folder-proyek
Install dependenciesyang diperlukan:
npm install
Jalankan development server:
npm run dev
Buka browser dan akses aplikasi di http://localhost:5173 (port bisa berbeda tergantung konfigurasi)
Catatan Penting:

Pastikan Anda memiliki Node.js versi 18 atau lebih tinggi
Development server akan berjalan otomatis dan restart saat ada perubahan kode
Jangan lupa untuk menghapus folder node_modules sebelum mengirimkan submission
Di dalam starter project Anda akan menemukan komentar TODO dengan tag [Basic], [Skilled], dan [Advanced]. Tag tersebut mewakili level pada skema Mastery-Based Grading (akan dijelaskan lebih detail di bagian rubrik). Lengkapi terlebih dahulu seluruh TODO [Basic] di setiap berkas sebelum mencoba level di atasnya. TODO [Skilled] dan [Advanced] bersifat tantangan lanjutan, pilih sesuai target nilai Anda.

Seluruh styling (berkas CSS) sudah disediakan. Anda tidak perlu menambahkan atau memodifikasi style agar rubrik apa pun (termasuk advanced) dapat dinilai dengan baik.

Semua TODO yang wajib diperiksa tercantum di daftar berikut:

src/components/App.jsx
src/components/NoteInput.jsx
src/components/NotesList.jsx
src/components/NoteItem.jsx
src/components/NoteSearch.jsx
Gunakan daftar ini sebagai checklist sebelum melakukan submit.

Penting: Komponen starter telah memiliki atribut data-testid pada elemen-elemen kunci untuk kebutuhan pengujian otomatis. Jangan menghapus, mengganti nama, atau memindahkan atribut tersebut. Anda boleh menambahkan data-testid tambahan bila diperlukan, namun nilai yang sudah ada wajib tetap sama agar penilaian dapat berjalan mulus.