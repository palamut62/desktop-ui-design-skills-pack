---
name: cyberpunk-hud-ui
description: Neon, keskin kenarli, veri yogun, futuristik HUD ve kontrol paneli arayuzleri uretir. Oyun yonetim konsollari, sci-fi paneller ve siber guvenlik gosterge ekranlari icin kullanilir.
---

# Skill 17 - Cyberpunk HUD UI

## Amac
Bu skill, **Cyberpunk HUD UI** stilinde futuristik, neon vurgulu, keskin ve veri yogun arayuzler uretmek icin kullanilir. Hedef; oyun/sci-fi kontrol odasi hissi verirken okunabilirligi ve islevselligi kaybetmeyen bir panel sistemi kurmaktir.

Bu stil HTML oyun alanindaki `Cyberpunk HUD UI` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- Sci-fi oyun yonetim paneli, ajan kontrol odasi, siber guvenlik tarayicisi, telemetry dashboard.
- Veri yogun HUD, alarm paneli, network map veya otonom agent kontrol ekrani.
- Markali/tematik bir arayuzde dramatik neon atmosfer isteniyorsa.
- Utility veya kurumsal uygulamada sadece demo/tematik mod olarak kullanilmali.

## Gorsel kimlik
- **Atmosfer:** Futuristik, gergin, neon, keskin, teknik.
- **Kompozisyon:** HUD frame, telemetry grid, status strips, alarm panels, command controls.
- **Renk:** Siyah zemin, cyan/teal neon, magenta/kirmizi alarm, sari warning.
- **Kose:** Keskin; gerekirse clip-path ile kirpilmis kose.
- **Golge:** Glow kontrollu olmali; metin okunabilirligini bozmamali.
- **Tipografi:** Monospace veya condensed tech font.

## Renk paleti
- `#000000` - ana zemin
- `#020617` - panel zemin
- `#0E7490` - derin cyan
- `#22D3EE` - neon cyan
- `#A855F7` - neon mor
- `#F43F5E` - alarm
- `#FACC15` - warning
- `#D1FAE5` - okunabilir acik metin

## Tipografi
- **Ana font:** JetBrains Mono, Fira Code, Rajdhani, Orbitron fallback
- **HUD label:** 9-11px, uppercase, letter spacing pozitif
- **Panel basligi:** 14-18px, 800
- **Data text:** 11-13px monospace
- **Alarm:** 10-12px, 800

## Yerlesim sistemi
1. HUD header: sistem adi, threat/alarm status, timestamp.
2. Telemetry grid: sensor, node, load, heat, signal kartlari.
3. Command form: target, mode, shield, intensity, command textarea.
4. Log/terminal strip: anlik olaylar.
5. Alarm footer: abort, confirm, execute.
6. Decorative scan lines sadece dusuk opaklikta.

## Bilesenler
- HUD frame
- Neon border panel
- Clipped corner card
- Threat badge
- Telemetry metric
- Signal/progress bar
- Target input
- Mode selector
- Command textarea
- Alarm button
- Abort button
- Scanline overlay
- Event log

## Tasarim tokenlari

```css
:root {
  --cy-bg: #000000;
  --cy-panel: #020617;
  --cy-border: #0e7490;
  --cy-neon: #22d3ee;
  --cy-purple: #a855f7;
  --cy-danger: #f43f5e;
  --cy-warning: #facc15;
  --cy-text: #d1fae5;
  --cy-muted: #0891b2;
  --cy-glow: 0 0 18px rgba(34,211,238,.35);
  --cy-radius: 0px;
  --cy-space: 12px;
}

.cy-panel {
  background: var(--cy-panel);
  color: var(--cy-neon);
  border: 1px solid var(--cy-border);
  box-shadow: var(--cy-glow);
}
```

## Etkilesim kurallari
- Hover glow artabilir ama metin blur olmamali.
- Alarm/critical action iki asamali onay istemeli.
- Running state scan/progress ile gosterilebilir.
- Kirmizi yalnizca alarm ve destructive islerde kullanilmali.
- Klavye focus neon outline ile belirgin olmali.
- Animasyonlar 150-300ms ve dusuk opaklikta kalmali; motion azaltma destegi dusunulmeli.
- Veri yogunlugunda grup basliklari ve divider kullan.

## Yap
- Neon efektleri tokenlastir.
- Keskin border ve clipped-corner dilini tutarli kullan.
- Veri yogunlugu ile aksiyon alanlarini ayir.
- Error/warning/success durumlarini metin ve ikonla destekle.
- Terminal/log alanini monospace tut.

## Yapma
- Her seyi glow ile okunmaz hale getirmek.
- Mor/cyan/kirmizi renkleri rastgele dekor olarak dagitmak.
- Sade is uygulamasini gereksiz cyberpunk yapmak.
- Uzun paragraflari all-caps yazmak.
- Kritik komutlari tek tikla calistirmak.

## AI uretim promptu

```text
Cyberpunk HUD UI stilinde siyah zeminli, cyan neon border'li, keskin koseli bir kontrol paneli tasarla. Header'da sistem durumu, ortada telemetry grid, target input, mode selector, intensity slider, command textarea, signal/progress bar, event log ve abort/execute aksiyonlari olsun. Glow efektleri kontrollu, focus state belirgin, alarm ve destructive aksiyonlar onayli olsun.
```

## Kabul kriterleri
- Cyberpunk/HUD atmosferi net ama okunabilir.
- Neon border, telemetry, command form ve event log var.
- Alarm/warning/normal durumlari ayriliyor.
- Animasyon ve glow metin okunabilirligini bozmuyor.
- Kritik aksiyonlar onayli.

