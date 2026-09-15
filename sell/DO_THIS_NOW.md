# Şimdi yap (15 dk) — ilk satışa giden yol

Senin hesabında benim yapamadığım adımlar bunlar. Hepsi hazır metin/dosya ile.

## 1. ZIP yükle (2 dk)
Dosya hazır:
`dist/nexlify-saas-landing.zip`

Gumroad → Products → Nexlify → Content → bu ZIP’i yükle.

Yeniden üretmek için:
```powershell
npm run pack:release
```

## 2. Cover image (1 dk)
Dosya:
`sell/assets/cover-hero.png`

Gumroad ürün cover’ına yükle. İstersen ikinci görsel: `sell/assets/cover-pricing.png`

## 3. Açıklamayı yapıştır (3 dk)
`sell/GUMROAD_LISTING.md` → English Full description → ürün sayfasına yapıştır.
Demo linkini en üste koy (zaten metinde var).

## 4. Launch fiyatı (1 dk)
48 saat için **$19** veya **₺699** yap → ilk satışı hızlandırır.
Sonra standart fiyata dön.

## 5. Email blast (2 dk)
`sell/EMAIL_BLAST.md` → Gumroad email blast’e yapıştır → gönder
→ checklist: **Making waves**

## 6. Sosyal post (3 dk)
`sell/SOCIAL_POSTS.md` → X + LinkedIn
→ checklist: **Build your tribe**

## 7. CLI adımı (2 dk)
1. Gumroad → Settings → Advanced → Access token al
2. PowerShell:
```powershell
$env:GUMROAD_ACCESS_TOKEN = "TOKEN"
powershell -File .\scripts\gumroad-list-products.ps1
```
→ checklist: **Command line**

## 8. Opsiyonel
Dashboard → **Connect an account**

---

Linkler
- Demo: https://nexlify-saas.vercel.app/
- Ürün: https://musaata.gumroad.com/l/stjrok
- Checklist detay: `sell/LAUNCH_CHECKLIST.md`
