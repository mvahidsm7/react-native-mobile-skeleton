# React Native Mobile Skeleton

Skeleton aplikasi mobile menggunakan Expo SDK 54, React Native, TypeScript, dan Expo Router. Versi ini ditujukan agar dapat dibuka melalui Expo Go pada perangkat fisik selama masa transisi SDK 57.

## Fitur awal

- Routing berbasis file dengan grup `(auth)` dan `(tabs)`.
- Halaman login, beranda, profil, dan logout.
- Session context serta penyimpanan session menggunakan SecureStore.
- Fallback `localStorage` untuk web.
- API client menggunakan `fetch`, timeout, JSON parsing, Bearer token, dan error handling.
- Alias import `@/*` ke folder `src`.
- Mock login agar project langsung bisa dijalankan tanpa backend.

## Struktur folder

```text
src/
├── app/                      # Route Expo Router
│   ├── (auth)/
│   ├── (tabs)/
│   ├── _layout.tsx
│   └── index.tsx
├── components/ui/            # Komponen UI reusable
├── config/                   # Environment/configuration
├── constants/                # Theme dan konstanta
├── context/                  # Global context
├── features/                 # Modul per fitur
├── services/                 # API client umum
├── storage/                  # Adapter persistent storage
├── types/                    # TypeScript types
└── utils/                    # Utility functions
```

## Menjalankan di Windows

Pastikan Node.js sudah terpasang, lalu buka PowerShell atau Git Bash di folder project.

```powershell
npm install
Copy-Item .env.example .env
npx expo install --fix
npm run doctor
npx expo start -c
```

Setelah Metro terbuka:

- Tekan `a` untuk Android Emulator.
- Scan QR menggunakan Expo Go untuk perangkat Android/iOS.
- Tekan `w` untuk menjalankan versi web.

## Konfigurasi backend

Edit `.env`:

```env
EXPO_PUBLIC_API_URL=https://api-domain-anda.com
EXPO_PUBLIC_USE_MOCK_API=false
```

Skeleton mengharapkan endpoint berikut:

```http
POST /auth/login
Content-Type: application/json

{
  "email": "demo@example.com",
  "password": "password"
}
```

Response:

```json
{
  "token": "access-token",
  "user": {
    "id": "1",
    "name": "Nama Pengguna",
    "email": "demo@example.com"
  }
}
```

Sesuaikan kontrak response pada `src/features/auth/services/auth.service.ts` bila backend Anda berbeda.

## Langkah pengembangan berikutnya

1. Ganti `bundleIdentifier` dan `android.package` di `app.json`.
2. Tambahkan feature folder seperti `products`, `notifications`, atau `orders`.
3. Tambahkan validasi form sesuai kebutuhan.
4. Tambahkan refresh token/interceptor bila backend memakainya.
5. Tambahkan unit test dan E2E test setelah alur utama stabil.

## Catatan keamanan

Variabel dengan prefix `EXPO_PUBLIC_` masuk ke bundle aplikasi. Jangan simpan secret, private key, atau credential server di `.env` aplikasi mobile.
