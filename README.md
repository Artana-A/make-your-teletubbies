# Make Your Teletubbies

Make Your Teletubbies adalah proyek REST API yang digunakan untuk membuat dan mengelola data Teletubbies. Melalui API ini, pengguna dapat menambahkan teletubby baru, melihat daftar teletubbies, melihat detail teletubby berdasarkan ID, mengupdate informasi teletubby, serta menghapus teletubby.

Setiap teletubby memiliki lima atribut, yaitu nama, warna, bentuk antena, kepribadian, dan ukuran. Data tersebut divalidasi menggunakan Mongoose dan disimpan secara permanen di MongoDB.

## Tech Stack

- Node.js – Runtime JavaScript.
- Express.js – Framework untuk membangun REST API.
- MongoDB – Database NoSQL untuk menyimpan data.
- Mongoose – ODM untuk mengelola data MongoDB.
- Postman – Digunakan untuk menguji endpoint API.

## Struktur Proyek
make-your-teletubbies/
- config/
  - database.js
- controllers/
  - teletubby.controller.js
- models/
  - teletubby.model.js
- routes/
  - teletubby.routes.js
- .env
- .gitignore
- index.js
- package.json
- package-lock.json
- README.md

## Instalasi dan Menjalankan Proyek

### 1. Clone Repository

```bash
git clone <URL_REPOSITORY_GITHUB>
```

Masuk ke direktori proyek:
```bash
cd make-your-teletubbies
```

### 2. Install Dependencies

Jalankan perintah berikut untuk menginstal seluruh dependencies:

```bash
npm install
```

### 3. Konfigurasi Environment Variables

Buat file `.env` pada direktori utama proyek, kemudian isi dengan konfigurasi berikut:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Ganti `your_mongodb_connection_string` dengan connection string MongoDB yang digunakan.

Sesuaikan nama variabel database dengan yang digunakan pada `config/database.js`.

### 4. Jalankan Server

```bash
node index.js
```

Jika berhasil, terminal akan menampilkan:
```text
Server jalan di http://localhost:3000
```

Server berjalan pada port `3000` secara default.

## Endpoint API

Base URL: `http://localhost:3000`

1. Memeriksa Status Server
   - Method: `GET`
   - URL: `http://localhost:3000/`
   - Fungsi: Memastikan server berjalan dengan baik.

2. Menambahkan Teletubby
   - Method: `POST`
   - URL: `http://localhost:3000/api/teletubbies`
   - Fungsi: Menambahkan karakter Teletubby baru ke database.

3. Mengambil Seluruh Data Teletubby
   - Method: `GET`
   - URL: `http://localhost:3000/api/teletubbies`
   - Fungsi: Menampilkan seluruh data Teletubby yang tersimpan di database.

4. Mengambil Data Teletubby Berdasarkan ID
   - Method: `GET`
   - URL: `http://localhost:3000/api/teletubbies/:id`
   - Fungsi: Menampilkan detail karakter Teletubby berdasarkan ID tertentu.

5. Mengupdate Data Teletubby
   - Method: `PUT`
   - URL: `http://localhost:3000/api/teletubbies/:id`
   - Fungsi: Mengupdate informasi karakter Teletubby berdasarkan ID.

6. Menghapus Data Teletubby
   - Method: `DELETE`
   - URL: `http://localhost:3000/api/teletubbies/:id`
   - Fungsi: Menghapus karakter Teletubby berdasarkan ID.

### Contoh Penggunaan

#### 1. Memeriksa Status Server

```http
GET http://localhost:3000/
```

#### 2. Menambahkan Teletubby

```http
POST http://localhost:3000/api/teletubbies
```

Contoh request body:

Contoh data Po:
```json
{
  "name": "Po",
  "color": "Red",
  "antenna": "Circular",
  "personality": "Cheerful",
  "size": "Small"
}
```

Contoh data Dipsy:
```json
{
  "name": "Dipsy",
  "color": "Green",
  "antenna": "Straight",
  "personality": "Playful",
  "size": "Large"
}
```

#### 3. Mengambil Seluruh Data Teletubby

```http
GET http://localhost:3000/api/teletubbies
```

#### 4. Mengambil Data Berdasarkan ID

```http
GET http://localhost:3000/api/teletubbies/:id
```

Ganti `:id` dengan ID Teletubby yang ingin dicari.

#### 5. Mengupdate Data Teletubby

```http
PUT http://localhost:3000/api/teletubbies/:id
```
Ganti `:id` dengan ID Teletubby yang ingin diupdate.

Contoh request body:

```json
{
  "name": "Po",
  "color": "Red",
  "antenna": "Circular",
  "personality": "Playful",
  "size": "Small"
}
```
Pada contoh ini, personality Po diubah dari Cheerful menjadi Playful, sedangkan atribut lainnya tetap sama.

#### 6. Menghapus Data Teletubby

```http
DELETE http://localhost:3000/api/teletubbies/:id
```

Ganti `:id` dengan ID Teletubby yang ingin dihapus.

## Validasi Data

Setiap karakter Teletubby memiliki lima atribut yang wajib diisi, yaitu:

1. `name` (String): Nama karakter Teletubby.
2. `color` (String): Warna karakter, dengan pilihan Purple, Green, Yellow, Red, Blue, atau Pink.
3. `antenna` (String): Bentuk antena, dengan pilihan Triangle, Straight, Curly, Circular, atau Star.
4. `personality` (String): Kepribadian karakter, dengan pilihan Cheerful, Shy, Energetic, Calm, atau Playful.
5. `size` (String): Ukuran karakter, dengan pilihan Small, Medium, atau Large.

Validasi data dilakukan menggunakan Mongoose Schema untuk memastikan seluruh atribut wajib diisi dan nilai yang dimasukkan sesuai dengan pilihan yang telah ditentukan.

## Pengujian API

Pengujian endpoint dilakukan menggunakan Postman untuk memastikan seluruh operasi CRUD berjalan dengan baik.

Pengujian mencakup:

- Membuat data Teletubby baru.
- Mengambil seluruh data Teletubby.
- Mengambil data berdasarkan ID.
- Mengupdate data Teletubby.
- Menghapus data Teletubby.
- Menguji validasi data dan penanganan kesalahan.

Penyimpanan data menggunakan MongoDB sehingga data tetap tersimpan meskipun server dihentikan dan dijalankan kembali.