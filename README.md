# Pengembangan Web Profil POROS 2023

## Versi Node

1. NPM v9.5.0
2. Node v18.15.0

## Daftar Framework / Library

1. [Next JS](https://nextjs.org/)

2. ‌[ES Lint](https://eslint.org/)

3. ‌[Tailwind](https://tailwindcss.com/)

4. ‌[Shadcn](https://ui.shadcn.com/)

5. [Framer Motion](https://www.framer.com/motion/)

6. ‌[Axios](https://axios-http.com/)

7. [Zustand](https://zustand-demo.pmnd.rs/)

8. ‌[React Hook Form](https://www.react-hook-form.com/)

## Aturan Penulisan Kode

1.  **Pisahkan** beberapa bagian dari kode TSX pada page menjadi komponen (misal: card, search, slider) ke folder **"src/components/implement"**

2.  Penulisan UseState yang diikuti dengan fungsi spesifik/UseEffect harus **dipisahkan** dari File layout/page (membuat custom hooks). Kode custom hooks dituliskan pada folder **"src/hooks".**

3.  **Komponen seperti** alert dan modal yang banyak digunakan berulang kali pada banyak page berbeda sebaiknya **cukup dipanggil sekali** pada root project dan atur kemunculan dan kontennya menggunakan state management (zustand).

4.  Komponen yang dibuat **jangan terlalu terikat** pada props variant untuk mengatur tampilan. **Contoh:** komponen button ingin menampilkan icon back (\<Button variant="back-button" />). Lebih baik tulis kode menjadi (<Button icon={\<BackIcon/>} />).

5.  Komponen yang dibuat sebagai **modifikasi** terhadap tag HTML tertentu (misal button) harus meng-**extend** props tag HTML tersebut menggunakan **interface**.

6.  **Jangan memberikan** props ke komponen jika data props tersebut **tidak digunakan** dalam komponen tersebut. (misal, setelah fetch data API maka jangan berikan seluruh data API tersebut sebagai props ke komponen card yang hanya menampilkan gambar dan judul).

7.  **Wajib** menuliskan dokumentasi singkat dalam bentuk **komentar** pada fungsi unik yang kalian buat. Dokumentasi / komentar dituliskan di atas fungsi yang dibuat.

## Next JS Framework

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash

npm run  dev

# or

yarn dev

# or

pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
