---
name: classic-windows-form-ui
description: Windows 95/98/2000 donemi retro masaustu estetigini, gri 3D cerceveleri, inset/outset kontrolleri ve legacy form davranisini bilincli olarak yeniden uretir.
---

# Skill 16 - Classic Windows Form UI

## Amac
Bu skill, modern WinForms standardindan farkli olarak **Classic Windows Form UI** yani retro/legacy Windows form estetigini tasarlamak icin kullanilir. Hedef; nostaljik, sistem araci hissi veren, piksel netliginde, 3D border'li ve sade form panelleri uretmektir.

Bu stil HTML oyun alanindaki `Classic Windows Form` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- Nostaljik sistem araci, retro database paneli, Win98 simulatoru, legacy admin tool veya egitim/demo arayuzu.
- Bilincli olarak eski Windows 95/98/2000 hissi isteniyorsa.
- Modern rounded/card tasarim degil, mekanik ve tanidik masaustu kontrol dili hedefleniyorsa.
- VB.NET/C# WinForms, web retro UI, Electron veya WPF ile legacy gorunum taklit edilecekse.

## Gorsel kimlik
- **Atmosfer:** Retro, sistemsel, mekanik, keskin, nostaljik.
- **Kompozisyon:** Title bar, group box, form grid, inset input, outset button, status strip.
- **Renk:** Acik gri zemin, lacivert title bar, siyah metin, beyaz/koyu gri 3D kenarlar.
- **Kose:** Radius yok veya 0-2px.
- **Golge:** Modern blur shadow yok; 1-2px sert 3D border kullan.
- **Tipografi:** MS Sans Serif, Tahoma, Segoe UI fallback; kucuk punto.

## Renk paleti
- `#D4D0C8` - klasik pencere zemini
- `#C0C0C0` - kontrol yuzeyi
- `#FFFFFF` - highlight edge
- `#808080` - shadow edge
- `#404040` - dark edge
- `#000080` - active title bar
- `#000000` - text
- `#FFFFE1` - tooltip/info
- `#FF0000` - kritik hata

## Tipografi
- **Ana font:** MS Sans Serif, Tahoma, Microsoft Sans Serif, Segoe UI
- **Normal metin:** 8-9pt
- **Group label:** 8-9pt, bold
- **Button:** 8-9pt
- **Status text:** 8pt
- **Monospace alan:** Consolas veya Courier New, 8-9pt

## Yerlesim sistemi
1. Title bar: aktif lacivert, beyaz text, klasik minimize/maximize/close.
2. Menu/toolbar: File/Edit/View/Help veya icon strip.
3. GroupBox: alanlari mantikli gruplara ayirir.
4. Form grid: label solda, input sagda.
5. Data/list area: inset border ile ayrilir.
6. Button row: OK, Cancel, Apply veya Baglan/Iptal.
7. Status bar: hazir, baglanti, kayit sayisi.

## Bilesenler
- Win98 window
- Title bar
- Inset input
- Outset button
- Group box
- Checkbox/radio
- Combo box
- Progress bar
- Status strip
- List view/table
- Dialog button row
- System message panel

## Tasarim tokenlari

```css
:root {
  --classic-bg: #d4d0c8;
  --classic-surface: #c0c0c0;
  --classic-highlight: #ffffff;
  --classic-shadow: #808080;
  --classic-dark: #404040;
  --classic-title: #000080;
  --classic-text: #000000;
  --classic-info: #ffffe1;
  --classic-danger: #ff0000;
  --classic-border-size: 2px;
  --classic-space: 6px;
}

.classic-inset {
  border: 2px solid;
  border-color: var(--classic-shadow) var(--classic-highlight) var(--classic-highlight) var(--classic-shadow);
}

.classic-outset {
  border: 2px solid;
  border-color: var(--classic-highlight) var(--classic-shadow) var(--classic-shadow) var(--classic-highlight);
}
```

## Etkilesim kurallari
- Button active durumunda border yonu ters donmeli.
- Focus rectangle klasik dotted outline olarak gorunebilir.
- Dialoglarda Enter OK, Esc Cancel davranisi korunmali.
- Inputlar inset, butonlar outset olmalidir.
- Critical action varsayilan focus olmamali.
- Progress bar segmentli veya sert dolgulu olabilir.
- Modern animasyon kullanma; geri bildirim mekanik ve anlik olmali.

## Yap
- Retro stili bilincli ve tutarli uygula.
- 3D border mantigini tum kontrollerde ayni yonle kullan.
- GroupBox ve status bar ile eski masaustu hiyerarsisini kur.
- Kucuk font kullanirken okunabilirligi test et.
- Modern WinForms ile karistirmamak icin stil adini net tut.

## Yapma
- Retro pencereye modern gradient, blur veya yuvarlak kart ekleme.
- Her kontrolu farkli gri tonuyla karistirma.
- Kritik islemleri onaysiz calistirma.
- Kucuk buton hedeflerini 24px altina dusurme.
- Nostalji ugruna form hiyerarsisini bozma.

## AI uretim promptu

```text
Classic Windows Form UI stilinde retro bir masaustu ayar/dialog penceresi tasarla. Gri #D4D0C8 zemin, lacivert title bar, inset inputlar, outset butonlar, GroupBox alanlari, klasik checkbox/radio/combo, progress bar ve status strip olsun. Radius kullanma, modern shadow/blur ekleme. Enter/Esc dialog davranisi, focus rectangle ve kritik islem onayi tasarla.
```

## Kabul kriterleri
- Stil modern WinForms degil, bilincli retro Windows 95/98 hissi veriyor.
- Inset/outset border mantigi tutarli.
- GroupBox, dialog button row ve status bar var.
- Klavye/focus davranisi klasik masaustu beklentisine uygun.
- Modern blur/gradient/dekoratif kart dili kullanilmamis.

