# Gumroad launch checklist — senin dashboard’una göre

Mağaza: https://musaata.gumroad.com/l/stjrok  
Demo: https://nexlify-saas.vercel.app/

## Durum (screenshot’tan)

| Adım | Durum | Ne yapacaksın |
|------|--------|----------------|
| Welcome aboard | ✅ | — |
| Make an Impression | ✅ | — |
| Showtime (first product) | ✅ | — |
| Money inbound (payout) | ✅ | — |
| Build your tribe (first follower) | ❌ | `sell/SOCIAL_POSTS.md` → post at + profil linki paylaş |
| Cha-ching (first sale) | ❌ | Listing’i güncelle + launch fiyatı + demo |
| Making waves (email blast) | ❌ | `sell/EMAIL_BLAST.md` → gönder |
| Command line | ❌ | Aşağıdaki CLI adımı |
| Connect social (optional) | ⬜ | Dashboard’dan Connect an account |

---

## 1) Ürün dosyasını güncelle (ZIP)

Bu repoda `scripts/pack-release.ps1` çalıştır → `dist/nexlify-saas-landing.zip` oluşur.

Gumroad → Products → Nexlify → **Content** → ZIP yükle (eski dosyayı değiştir).

ZIP içinde olmalı:
- source code
- README.md
- CUSTOMIZE.md
- LICENSE.md

---

## 2) Listing metnini yapıştır

`sell/GUMROAD_LISTING.md` içindeki English description’ı ürün sayfasına koy.

Cover image önerisi:
1. Hero full-bleed screenshot (dark)
2. Pricing section screenshot
3. Light mode screenshot (isteğe bağlı)

---

## 3) İlk satış için 48s taktik

1. Fiyatı geçici **$19** veya **₺699** yap (Launch badge notu ekle)
2. Demo linkini description’ın **en üstüne** koy
3. X + LinkedIn + 1 Discord/Slack post
4. Email blast’i aynı gün gönder
5. 48 saat sonra fiyatı standart seviyeye çek

---

## 4) Gumroad CLI (checklist “Command line”)

Gumroad resmi olarak basit bir global CLI paketlemez; checklist genelde **API / script** kullanımını sayar.

### Seçenek A — API ile ürün listele (PowerShell)

1. Gumroad → Settings → Advanced → **Access token** oluştur  
2. Token’ı kaydet (asla commit etme)

```powershell
$env:GUMROAD_ACCESS_TOKEN = "YOUR_TOKEN_HERE"
Invoke-RestMethod -Uri "https://api.gumroad.com/v2/products" -Method Get -Body @{ access_token = $env:GUMROAD_ACCESS_TOKEN }
```

Başarılı JSON dönerse CLI/API adımı tamamdır.

### Seçenek B — `curl`

```bash
curl "https://api.gumroad.com/v2/products?access_token=YOUR_TOKEN"
```

Hazır script: `scripts/gumroad-list-products.ps1`

---

## 5) Bugün yapılacak 15 dakikalık sıra

1. [ ] ZIP üret + Gumroad’a yükle  
2. [ ] Listing description güncelle  
3. [ ] Cover screenshot ekle (hero)  
4. [ ] Email blast gönder  
5. [ ] 2 sosyal post at  
6. [ ] Gumroad API script’ini bir kez çalıştır  
7. [ ] Opsiyonel: social account bağla  

İlk satış gelince review iste — checklist + sosyal kanıt bir arada ilerler.
