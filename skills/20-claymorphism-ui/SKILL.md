---
name: claymorphism-ui
description: Pastel yuzeyler, buyuk radius, ic/dis yumusak golgeler ve hamur/kil hissi veren dostane arayuzler uretir. Kisisel asistan, yaratici arac ve eglenceli egitim panelleri icin kullanilir.
---

# Skill 20 - Claymorphism UI

## Amac
Bu skill, **Claymorphism UI** stilinde yumusak, sevimli, pastel ve dokunsal arayuzler uretmek icin kullanilir. Hedef; kisisel asistan, yaratici workspace, egitim veya hafif araclarda sicak ve davetkar bir his olusturmaktir.

Bu stil HTML oyun alanindaki `Claymorphism` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- Kisisel asistan, gunluk, yaratici portfolyo, egitim, cocuksu veya eglenceli mini paneller.
- Kullaniciya sert kurumsal UI yerine rahat, oyunlu ve dokunsal bir deneyim verilecekse.
- Form kontrolleri dusuk riskli, sakin ve yaratici is akisi icindeyse.
- Dashboard yogun veri ekranlarinda ana stil olarak degil, destekleyici alanlarda kullanilabilir.

## Gorsel kimlik
- **Atmosfer:** Yumusak, pastel, dokunsal, dostane, hafif.
- **Kompozisyon:** Buyuk radius kartlar, ic/dis golge, yuvarlak inputlar, pill buttons.
- **Renk:** Pastel pembe, mavi, lavanta, mint, krem.
- **Kose:** 24-36px buyuk radius.
- **Golge:** Dis golge + ic golge kombinasyonu; kontrast dusmemeli.
- **Tipografi:** Yuvarlak ve modern sans fontlar.

## Renk paleti
- `#FCE7F3` - pink surface
- `#DBEAFE` - blue surface
- `#EDE9FE` - lavender
- `#DCFCE7` - mint
- `#FFFFFF` - highlight
- `#334155` - text
- `#64748B` - muted
- `#EC4899` - primary
- `#8B5CF6` - secondary

## Tipografi
- **Ana font:** Plus Jakarta Sans, Inter, Nunito, Segoe UI
- **Baslik:** 18-24px, 700-800
- **Govde:** 13-15px, 500
- **Label:** 10-12px, 700, uppercase opsiyonel
- **Button:** 12-14px, 700

## Yerlesim sistemi
1. Soft shell: pastel arka plan veya yumusak surface.
2. Main clay card: buyuk radius, ic/dis golge.
3. Form controls: rounded input, select, slider, checkbox/radio.
4. Soft progress/metric: pill bar, gentle status.
5. Action row: rounded primary/secondary buttons.
6. Friendly empty state: kisa metin ve pozitif aksiyon.

## Bilesenler
- Clay card
- Soft input
- Rounded select
- Pill toggle
- Soft slider
- Bubble badge
- Inner shadow panel
- Rounded progress
- Friendly toast
- Empty state bubble
- Avatar chip

## Tasarim tokenlari

```css
:root {
  --clay-bg: #fce7f3;
  --clay-surface: #ffecf2;
  --clay-surface-2: #dbeafe;
  --clay-text: #334155;
  --clay-muted: #64748b;
  --clay-primary: #ec4899;
  --clay-secondary: #8b5cf6;
  --clay-highlight: #ffffff;
  --clay-radius: 30px;
  --clay-shadow: 10px 10px 20px rgba(0,0,0,.06), inset -8px -8px 16px rgba(0,0,0,.08), inset 8px 8px 16px rgba(255,255,255,.75);
  --clay-space: 18px;
}

.clay-card {
  background: var(--clay-surface);
  color: var(--clay-text);
  border-radius: var(--clay-radius);
  box-shadow: var(--clay-shadow);
}
```

## Etkilesim kurallari
- Hover'da yuzey hafif yukselebilir ama shadow abartilmamali.
- Active durumda buton ic golgeye donebilir.
- Focus state pastel zeminde kaybolmamali; net outline kullan.
- Error state soft stili bozmayacak sekilde kirmizi border + metinle gelmeli.
- Disabled state opaklik dusurur ama label okunabilir kalir.
- Uzun formlarda buyuk radius ve bosluk azaltip okunabilir yogunluk korunmali.

## Yap
- Pastel renkleri dengeli kullan; metni koyu tut.
- Ic ve dis golgeleri tokenlarla yonet.
- Rounded kontrolleri tutarli radius sistemiyle kur.
- Friendly empty/loading durumlari ekle.
- Kisisel/yaratici uygulamalarda sicak mikro metin kullan.

## Yapma
- Dusuk kontrastli pastel metin kullanma.
- Her yuzeye coklu golge verip arayuzu bulaniklastirma.
- Kurumsal veri tablolarini tamamen clay yapmak.
- Radius degerlerini rastgele degistirmek.
- Focus state'i sadece shadow ile anlatmak.

## AI uretim promptu

```text
Claymorphism UI stilinde pastel renkli, buyuk radiuslu ve ic/dis yumusak golgeli bir kisisel asistan veya yaratici arac paneli tasarla. Clay card, soft input, rounded select, pill toggle, slider, avatar chip, progress bar, friendly empty state ve rounded primary/secondary button olsun. Kontrast, focus ring, error state, disabled state ve loading state okunabilir kalsin.
```

## Kabul kriterleri
- Pastel, dokunsal ve yumusak clay hissi net.
- Ic/dis golge tokenlari tutarli.
- Metin kontrasti yeterli.
- Form kontrolleri ve butonlar ayni radius/golge diline sahip.
- Focus, error, disabled ve loading durumlari tanimli.
