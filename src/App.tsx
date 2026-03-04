/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll } from "motion/react";
import React, { useEffect, useState, ReactNode } from "react";

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-12% 0px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const GoldDivider = () => (
  <div className="flex items-center gap-3 my-5">
    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent max-w-[120px]" />
    <div className="w-1.5 h-1.5 bg-gold rotate-45" />
    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent max-w-[120px]" />
  </div>
);

export default function App() {
  const [showSticky, setShowSticky] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section className="min-h-screen bg-[#1e1408] relative flex items-center justify-center overflow-hidden px-5 py-16">
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-44 h-44 opacity-15">
          <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
            <path d="M10 10 L10 80 Q10 10 80 10 Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
            <path d="M10 10 L60 10 M10 10 L10 60" stroke="#c9a84c" strokeWidth="1.5"/>
            <path d="M25 10 Q10 10 10 25" stroke="#c9a84c" strokeWidth="0.7"/>
            <path d="M50 10 Q10 10 10 50" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="2 4"/>
            <circle cx="10" cy="10" r="4" fill="#c9a84c"/>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-44 h-44 opacity-15 scale-x-[-1]">
          <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
            <path d="M10 10 L10 80 Q10 10 80 10 Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
            <path d="M10 10 L60 10 M10 10 L10 60" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="4" fill="#c9a84c"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-44 h-44 opacity-15 scale-y-[-1]">
          <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
            <path d="M10 10 L10 80 Q10 10 80 10 Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
            <path d="M10 10 L60 10 M10 10 L10 60" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="4" fill="#c9a84c"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-44 h-44 opacity-15 scale-[-1]">
          <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
            <path d="M10 10 L10 80 Q10 10 80 10 Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
            <path d="M10 10 L60 10 M10 10 L10 60" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="4" fill="#c9a84c"/>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="max-w-6xl text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block border border-gold/40 text-gold font-display text-[10px] tracking-[4px] px-5 py-2 mb-10 uppercase"
          >
            Pelan Pelan Edition · Ramadan & Raya 1447H
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="w-56 md:w-72 lg:w-80 shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[-3deg] hover:rotate-0 transition-transform duration-700"
            >
              <img 
                src="https://drive.google.com/thumbnail?id=1oCEnJP91Gwq0KuOX6QGiwc4O8t1okHm-&sz=w1000" 
                alt="Senandung Malam Book Cover" 
                className="w-full h-auto border-[6px] border-gold/10 bg-gold/5"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Text Column */}
            <div className="text-center md:text-left max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-serif font-light text-cream text-6xl md:text-7xl lg:text-9xl leading-[0.95] -tracking-[2px] mb-2"
              >
                Senandung<br /><em className="italic text-gold-light">Malam</em>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex items-center justify-center md:justify-start gap-4 my-6"
              >
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent md:hidden" />
                <div className="hidden md:block w-16 h-[1px] bg-gradient-to-r from-gold to-transparent" />
                <span className="font-display text-[11px] tracking-[3px] text-cream/50 uppercase whitespace-nowrap">A Digital Coloring Journey</span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="font-serif text-lg md:text-2xl italic text-cream/75 leading-relaxed mb-10"
              >
                Lepas penat seharian puasa, buka iPad kamu.<br />
                Warna. Bernafas. Rasa tenang.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col items-center md:items-start gap-4"
              >
                <a href="https://buy.stripe.com/fZucN46iJfPb3h206Y8k802" target="_blank" rel="noopener noreferrer" className="group relative bg-gold text-[#1e1408] font-display text-[13px] tracking-[3px] px-12 py-5 flex flex-col items-center transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] overflow-hidden">
                  <span className="relative z-10">DAPATKAN SEKARANG</span>
                  <span className="relative z-10 font-sans text-[11px] font-light tracking-[2px] opacity-80 mt-0.5">RM 12.90 sahaja · Muat turun segera</span>
                  <div className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </a>
                <div className="text-[11px] text-cream/35 tracking-[2px] font-display uppercase">✦ &nbsp; PDF DIGITAL · SESUAI UNTUK iPAD & PROCREATE &nbsp; ✦</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="bg-white text-center py-24 px-5">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <span className="font-display text-[9px] tracking-[5px] text-gold uppercase mb-4 block">Kamu kenal perasaan ini</span>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="font-serif text-2xl md:text-4xl italic text-ink leading-tight mb-6 relative">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] text-gold/15 font-serif leading-none pointer-events-none">"</span>
              "Penat sangat. Tapi tak tahu nak lepaskan macam mana."
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[15px] leading-[1.9] text-ink-light max-w-lg mx-auto">
              Kerja penuh. Rumah riuh. Bulan Ramadan datang tapi rasa rushing. Kita semua tahu — wanita dewasa zaman sekarang carry <em>so much.</em><br /><br />
              Tapi bayangkan ini: selepas Isyak, kamu ambil iPad, pakai earphone, letak Quran recitation dalam background — dan mula mewarna satu halaman yang cantik, intricate, dan penuh makna.<br /><br />
              Bukan sekadar aktiviti. Ini <strong>digital therapy</strong> yang kamu deserve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-cream py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-lg mb-16">
            <Reveal>
              <span className="font-display text-[9px] tracking-[5px] text-gold uppercase mb-4 block">Kenapa Senandung Malam?</span>
              <h2 className="font-serif font-normal text-4xl md:text-6xl text-ink leading-[1.05]">Bukan sekadar<br /><em className="italic text-terracotta">buku mewarna biasa.</em></h2>
              <GoldDivider />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-gold/10 border border-gold/20">
            {[
              { title: "10 Halaman Premium", text: "Setiap halaman adalah sebuah cerita — dari Anyaman Nenek hingga Selamat Hari Raya. Satu perjalanan emosi yang lengkap dalam satu buku." },
              { title: "PDF Resolusi Tinggi", text: "Fail PDF A4 — optimum untuk mewarna digital di Procreate, GoodNotes, atau Adobe Fresco. Boleh print juga untuk mewarna manual!" },
              { title: "Tema Aesthetic & Bermakna", text: "Reka bentuk yang sophisticated — bukan coloring book budak-budak. Thin lines, intricate details, dan vibes yang tenang. Sesuai untuk wanita 25–38." },
              { title: "Muat Turun Segera", text: "The link will be automatically given after payment. Just click the link and download it to your platform or drive." }
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 h-full transition-colors hover:bg-cream group">
                  <div className="w-11 h-11 mb-5 opacity-80 text-gold">
                    <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
                      <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-[22px] font-medium text-ink mb-2.5">{feature.title}</h3>
                  <p className="text-[13.5px] leading-[1.8] text-ink-light">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="bg-[#1e1408] py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-lg mb-16">
            <Reveal>
              <span className="font-display text-[9px] tracking-[5px] text-gold uppercase mb-4 block">10 Halaman · Satu Perjalanan</span>
              <h2 className="font-serif font-normal text-4xl md:text-6xl text-cream leading-[1.05]">Setiap halaman<br /><em className="italic text-gold-light">ada ceritanya.</em></h2>
              <GoldDivider />
              <p className="text-sm text-cream/50 leading-[1.8] mt-2">Bukan sekadar gambar untuk diwarnakan — ini adalah kisah seorang wanita melalui Ramadan hingga Raya.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { id: "01", title: "Anyaman Nenek", story: "Dia duduk di sisi neneknya. Tangan tua itu menganyam ketupat — satu tradisi yang diwarisi turun-temurun." },
              { id: "02", title: "Lentera Pertama", story: "Dia menggantung lentera pertama di pintu. Anak bulan muncul. Ramadan telah tiba." },
              { id: "03", title: "Jalan ke Masjid", story: "Dia berjalan melalui taman kampung. Bunga peony di kiri kanan. Di hujung jalan, kubah masjid menyambut." },
              { id: "04", title: "Sajadah Corner", story: "Ruang doanya yang tersendiri. Quran terbuka. Teh panas. Tasbih di sisi. Inilah santuarinya." },
              { id: "05", title: "Raya Henna Hands", story: "Malam sebelum Raya. Pakcik melukis inai di tapak tangannya. Setiap kelopak adalah doa." },
              { id: "06", title: "Iftar Table", story: "Sepuluh minit sebelum Maghrib. Meja sudah tersedia. Kurma. Air sejuk. Bau bubur lambuk dari dapur." },
              { id: "07", title: "Baju Kurung Texture", story: "Dia membuka almari dan menemui baju kurung ibunya. Renda bunga tanjung masih sempurna." },
              { id: "08", title: "Night Sky Dua", story: "Malam ke-27. Dia angkat tangan berdoa dan dunia sekelilingnya hilang. Malam Lailatul Qadar." },
              { id: "09", title: "Raya Morning Window", story: "Dia bangun sebelum orang lain. Dari tingkap, matahari Syawal pertama muncul. Dia tersenyum." },
              { id: "10", title: "Selamat Hari Raya", story: "Seluruh keluarga berkumpul. Tawa. Emas. Hijau. Ini saat yang akan dia kenang selamanya." }
            ].map((page, i) => (
              <Reveal key={i} delay={(i % 5) * 0.1}>
                <div className="bg-cream/5 border border-gold/15 p-6 h-full transition-all hover:bg-cream/10 hover:border-gold/40 hover:-translate-y-1 group cursor-pointer">
                  <div className="font-display text-[10px] text-gold tracking-[3px] opacity-70 mb-3 uppercase">HALAMAN {page.id}</div>
                  <h3 className="font-serif text-xl text-cream italic mb-2">{page.title}</h3>
                  <p className="text-[12px] text-cream/45 leading-[1.7]">{page.story}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inside Section */}
      <section className="bg-cream py-24 px-5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="font-display text-[9px] tracking-[5px] text-gold uppercase mb-4 block">Apa yang kamu dapat</span>
            <h2 className="font-serif font-normal text-4xl md:text-6xl text-ink leading-[1.05]">Semua dalam<br /><em className="italic text-terracotta">satu muat turun.</em></h2>
            <GoldDivider />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {[
              { title: "10 Halaman Coloring PDF", text: "Resolusi tinggi, format A4 portrait" },
              { title: "Sesuai untuk iPad & Apple Pencil", text: "Compatible dengan Procreate, GoodNotes & Adobe Fresco" },
              { title: "Boleh Print untuk Mewarna Manual", text: "Gunakan pensel warna, marker, atau watercolor" },
              { title: "Story Card untuk Setiap Halaman", text: "Konteks emosional yang menjadikan pengalaman lebih bermakna" },
              { title: "Contoh coloured version disertakan", text: "Contoh coloured version untuk setiap halaman disertakan" },
              { title: "Muat Turun Segera Selepas Bayar", text: "The link will be automatically given after payment. Just click the link and download it to your platform or drive." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-5 bg-white border-l-2 border-gold h-full">
                  <svg className="w-[18px] h-[18px] shrink-0 mt-0.5" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="#c9a84c" strokeWidth="1.2"/>
                    <path d="M5 9 L8 12 L13 6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="text-sm text-ink leading-[1.6]">
                    <strong className="font-serif text-[17px] block mb-0.5">{item.title}</strong>
                    {item.text}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 px-5 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <Reveal>
              <span className="font-display text-[9px] tracking-[5px] text-gold uppercase mb-4 block">Apa kata mereka</span>
              <h2 className="font-serif font-normal text-4xl md:text-6xl text-ink leading-[1.05]">Wanita seperti kamu<br /><em className="italic text-terracotta">sudah merasakannya.</em></h2>
              <div className="flex justify-center"><GoldDivider /></div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { author: "NURFARAHIN A.", role: "Executive, Shah Alam · iPad Pro user", text: "Seriously the best RM12.90 I spent this Ramadan. Lepas terawih, I duduk colour satu page sambil dengar Quran. Rasa so peaceful. Gambar dia pun cantik gila — macam art piece!" },
              { author: "SITI NABILAH R.", role: "Teacher, Johor Bahru · GoodNotes user", text: "I've tried many adult coloring books tapi yang ni lain. Ada cerita disebalik setiap page. Page 'Sajadah Corner' buat I nangis sikit — so relatable. Highly recommend untuk wanita kerja." },
              { author: "IZZATI M.", role: "Marketing Manager, KL · Procreate user", text: "Dah share dekat WhatsApp group dengan 8 kawan. Semua beli! Kami colour sama-sama lepas berbuka, pastu share hasil dalam group. So fun and so therapeutic. Lagi best dari scroll TikTok!" }
            ].map((testi, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-gold/20 p-8 bg-cream relative h-full">
                  <span className="absolute top-3 left-5 text-5xl text-gold/20 font-serif leading-none pointer-events-none">❝</span>
                  <div className="text-gold text-[13px] tracking-[2px] mb-3">★★★★★</div>
                  <p className="font-serif text-[17px] italic text-ink leading-[1.65] mb-5 pt-4">{testi.text}</p>
                  <div className="font-display text-[10px] tracking-[2px] text-gold uppercase">{testi.author}</div>
                  <div className="text-[11px] text-ink-light mt-1">{testi.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#1e1408] py-32 px-5 text-center" id="beli">
        <div className="max-w-xl mx-auto">
          <Reveal>
            <span className="font-display text-[9px] tracking-[5px] text-gold uppercase mb-4 block">Harga & Pembelian</span>
            <h2 className="font-serif font-normal text-4xl md:text-6xl text-cream leading-[1.05]">Satu harga.<br /><em className="italic text-gold-light">Seumur hidup.</em></h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border border-gold/30 p-12 md:p-14 mt-12 bg-cream/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold text-[#1e1408] font-display text-[9px] tracking-[3px] px-5 py-1.5 uppercase">PALING POPULAR</div>

              <p className="font-sans text-sm text-cream/30 line-through mb-2 tracking-[1px]">Harga asal RM 25.00</p>
              <div className="font-serif text-[80px] text-gold-light font-light leading-none -tracking-[3px]">
                <span className="text-[32px] align-top mt-4 inline-block">RM</span>12.90
              </div>
              <p className="font-sans text-[12px] text-cream/40 tracking-[2px] mt-2 mb-8 uppercase">Bayar sekali · Muat turun terus · Simpan selamanya</p>

              <ul className="space-y-2 mb-10 text-left">
                {[
                  "10 halaman coloring PDF resolusi tinggi",
                  "Compatible: iPad, Procreate, GoodNotes, Adobe Fresco",
                  "Boleh print untuk mewarna manual",
                  "Story card untuk setiap halaman",
                  "Contoh coloured version untuk setiap halaman disertakan",
                  "Muat turun segera — tiada penghantaran"
                ].map((item, i) => (
                  <li key={i} className="text-[13px] text-cream/60 py-2 border-b border-gold/10 flex items-center gap-2.5">
                    <span className="text-gold text-[7px]">◆</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="https://buy.stripe.com/fZucN46iJfPb3h206Y8k802" target="_blank" rel="noopener noreferrer" className="block w-full bg-gold hover:bg-gold-light text-[#1e1408] font-display text-sm tracking-[4px] py-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(201,168,76,0.25)] uppercase">
                BELI SEKARANG — RM 12.90
              </a>

              <p className="mt-5 text-[11px] text-cream/30 tracking-[1px]">🔒 &nbsp; Pembayaran selamat · PDF dihantar terus ke emel kamu</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 px-5">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <span className="font-display text-[9px] tracking-[5px] text-gold uppercase mb-4 block">Soalan Lazim</span>
            <h2 className="font-serif font-normal text-4xl md:text-6xl text-ink leading-[1.05]">Ada soalan?<br /><em className="italic text-terracotta">Kami ada jawapan.</em></h2>
            <GoldDivider />
          </Reveal>

          <div className="space-y-0">
            {[
              { q: "Apa format fail yang saya akan dapat?", a: "Kamu akan menerima fail PDF resolusi tinggi format A4. Sesuai untuk dibuka dalam Procreate, GoodNotes, Adobe Fresco (digital), atau dicetak untuk mewarna secara manual." },
              { q: "Adakah saya perlukan iPad atau Apple Pencil?", a: "Tidak semestinya! Walaupun buku ini direka untuk pengalaman digital terbaik di iPad, kamu juga boleh print dan mewarna secara manual menggunakan pensel warna, marker, atau watercolor." },
              { q: "Bagaimana cara muat turun selepas bayar?", a: "The link will be automatically given after payment. Just click the link and download it to your platform or drive." },
              { q: "Boleh saya kongsi PDF ini dengan kawan?", a: "Pembelian adalah untuk kegunaan peribadi sahaja. Untuk kawan-kawan, sila share link pembelian ini — harga RM12.90 sangat berbaloi dan menyokong hasil kerja kreatif tempatan. 🌙" },
              { q: "Berapa lama saya boleh akses fail ini?", a: "Selamanya! Ini bukan subscription. Bayar sekali, simpan dalam peranti kamu, dan warna bila-bila masa kamu mahukan — Ramadan tahun ini, tahun hadapan, atau bila-bila masa kamu perlukan digital therapy." }
            ].map((faq, i) => (
              <Reveal key={i}>
                <div className="border-b border-gold/15 py-6">
                  <div className="font-serif text-xl text-ink font-medium mb-3">{faq.q}</div>
                  <p className="text-sm leading-[1.8] text-ink-light">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-cream-dark py-24 px-5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] opacity-[0.03] leading-none pointer-events-none">🌙</div>
        <div className="max-w-xl mx-auto relative z-10">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl italic text-ink leading-[1.2] mb-5">"Kamu deserve<br />saat yang tenang."</h2>
            <p className="text-[15px] text-ink-light leading-[1.7] mb-10">Bulan Ramadan hanya datang sekali setahun. Jadikan ia bermakna — dengan mewarna, bernafas, dan merasai setiap momen yang indah itu.</p>
            <a href="https://buy.stripe.com/fZucN46iJfPb3h206Y8k802" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-gold-light text-[#1e1408] font-display text-sm tracking-[4px] px-10 py-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(201,168,76,0.25)] uppercase max-w-md mx-auto block">
              DAPATKAN SENANDUNG MALAM — RM 12.90
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e1408] py-10 px-5 text-center">
        <div className="font-serif text-[22px] text-gold italic mb-3">Senandung Malam</div>
        <p className="text-[11px] text-cream/25 tracking-[1px] leading-relaxed uppercase">
          © 2026 Pelan Pelan Edition · Buku Mewarna Digital Aesthetic · Ramadan & Raya 1447H<br />
          Sokongan: hello@senandungmalam.com
        </p>
      </footer>

      {/* Sticky Bar */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: showSticky ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 bg-[#1e1408]/95 border-t border-gold/20 px-5 py-3.5 flex items-center justify-between z-[999] backdrop-blur-md"
      >
        <div className="font-serif text-lg italic text-cream">
          Senandung Malam
          <span className="font-display text-[10px] not-italic text-gold block tracking-[2px] uppercase">Buku Mewarna Digital Aesthetic</span>
        </div>
        <a href="https://buy.stripe.com/fZucN46iJfPb3h206Y8k802" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-gold-light text-[#1e1408] font-display text-[11px] tracking-[3px] px-7 py-3 transition-all uppercase">
          BELI RM 12.90
        </a>
      </motion.div>
    </div>
  );
}
