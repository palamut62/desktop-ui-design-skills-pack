---
name: neo-brutalism-ui
description: Kalin siyah border, sert offset shadow, doygun pastel zeminler, duz koseler ve cesur tipografiyle modern neo-brutalist arayuzler uretir.
---

# Skill 18 - Neo-Brutalism UI

## Amac
Bu skill, **Neo-Brutalism UI** stilinde dikkat cekici, sert, renkli ve ozguvenli arayuzler uretmek icin kullanilir. Hedef; trend SaaS, yaratici araclar, gorev panolari ve kural yoneticilerinde cesur ama kullanilabilir bir tasarim dili kurmaktir.

Bu stil HTML oyun alanindaki `Neo-Brutalism UI` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- Trend SaaS araclari, yaratici tool, gorev panosu, ideation board, kampanya paneli.
- Markanin enerjik, cesur, oyunlu ve anti-kurumsal gorunmesi isteniyorsa.
- Dashboard degil, tekil gorev/form/kart akisi one cikacaksa.
- Genclik/creator/startup odakli urunlerde.

## Gorsel kimlik
- **Atmosfer:** Cesur, sert, dogrudan, renkli, oyuncu.
- **Kompozisyon:** Kalin border'li kartlar, sert shadow, buyuk tipografi, net aksiyonlar.
- **Renk:** Pastel zemin + siyah border + tek veya iki doygun vurgu.
- **Kose:** Rounded yok veya cok dusuk; genellikle `0px`.
- **Golge:** Blur yok; 3-8px offset sert siyah shadow.
- **Tipografi:** Bold, genis, net, okunabilir.

## Renk paleti
- `#000000` - border/text
- `#FFFFFF` - surface
- `#FEF08A` - yellow
- `#F9A8D4` - pink
- `#FDBA74` - orange
- `#86EFAC` - green
- `#93C5FD` - blue
- `#EF4444` - destructive

## Tipografi
- **Ana font:** Inter, Plus Jakarta Sans, Archivo, system-ui
- **Baslik:** 22-32px, 800-900
- **Kart basligi:** 14-18px, 800
- **Govde:** 13-15px, 600
- **Button:** 12-14px, 800, uppercase opsiyonel

## Yerlesim sistemi
1. Bold header: sayfa adi ve buyuk primary CTA.
2. Brutal card grid: kalin border ve offset shadow.
3. Form controls: kalin border input/select/textarea.
4. Status blocks: renkli ama metin destekli.
5. Action row: primary renkli, secondary beyaz, danger kirmizi.
6. Feedback: sert toast veya inline block.

## Bilesenler
- Brutal card
- Offset shadow button
- Heavy border input
- Sticker badge
- Checkbox tile
- Radio block
- Progress bar with hard border
- Alert block
- Modal with thick border
- Empty state poster
- Action menu

## Tasarim tokenlari

```css
:root {
  --brutal-bg: #fef08a;
  --brutal-surface: #ffffff;
  --brutal-text: #000000;
  --brutal-border: #000000;
  --brutal-primary: #f9a8d4;
  --brutal-secondary: #93c5fd;
  --brutal-success: #86efac;
  --brutal-warning: #fdba74;
  --brutal-danger: #ef4444;
  --brutal-radius: 0px;
  --brutal-border-width: 3px;
  --brutal-shadow: 5px 5px 0 #000000;
  --brutal-space: 16px;
}
```

## Etkilesim kurallari
- Button active durumunda `translate(2px, 2px)` ve shadow azalmasi kullanilabilir.
- Focus state siyah outline + renkli offset ile cok belirgin olmali.
- Hover renk degistirebilir ama shadow sistemi tutarli kalmali.
- Form hatalari kalin kirmizi border + metinle gosterilmeli.
- Drag/drop veya kart tasima varsa shadow/position geri bildirimi sert olmali.
- Animasyonlar hizli ve mekanik olmali; yavas easing kullanma.

## Yap
- Kalin border ve sert shadow'u butun sistemde ayni tut.
- Pastel renkleri status/section ayrimi icin bilincli kullan.
- Metin hiyerarsisini bold ama okunabilir kur.
- Primary CTA'yi cok net yap.
- Empty state'i poster gibi guclu ama aksiyonlu tasarla.

## Yapma
- Blur shadow, glass, gradient veya soft neumorphic efekt karistirma.
- Her karti farkli shadow yonuyle tasarlama.
- Renkleri anlamsiz dekor olarak dagitma.
- Cok kucuk metinlerde uppercase kullanma.
- Kurumsal veri tablosu gibi yogun ekranlarda tum yuzeyi brutal yapmak.

## AI uretim promptu

```text
Neo-Brutalism UI stilinde kalin siyah border'li, sert offset shadow'lu, pastel renkli bir gorev/kural paneli tasarla. Duz koseler, bold tipografi, heavy input/select/textarea, checkbox tile, radio block, progress bar, status badge, alert block ve primary/secondary/danger button varyantlari olsun. Hover, active, focus, disabled, error ve empty state durumlarini ayni brutal token sistemiyle uret.
```

## Kabul kriterleri
- Kalin border ve sert offset shadow sistemi tutarli.
- Pastel renkler hiyerarsi veya durum icin kullaniliyor.
- Form kontrolleri, kartlar ve butonlar ayni gorsel dile sahip.
- Focus/error/disabled durumlari eksik degil.
- Stil cesur ama okunabilir.

