---
name: floating-tool-window
description: Her zaman ustte duran, koseye sabitlenebilen, kompakt ama islevsel mini masaustu arac pencereleri tasarlar. OCR capture, clipboard manager, quick launcher, color picker, screenshot tool ve hizli not panelleri icin kullanilir.
---

# Skill 12 - Floating Tool Window

## Amac
Bu skill, masaustu uygulamalarinda **Floating Tool Window** stilini tutarli sekilde uretmek icin kullanilir. Hedef; ana uygulama alanini kaplamadan kullaniciya hizli araclar, mikro formlar, anlik durumlar ve tek tiklik aksiyonlar sunan kompakt pencereler tasarlamaktir.

Bu stil HTML oyun alanindaki `Floating Tool Window` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- OCR capture, clipboard manager, screenshot tool, color picker, quick launcher veya ekran ustu mini yardimci araclarda.
- Kullanici ana is akisini bozmadan hizli ayar, yakalama, kopyalama, pinleme veya calistirma aksiyonu yapacaksa.
- Uygulama her zaman ustte, ekran kosesinde, system tray yakininda veya secili alan ustunde calisacaksa.
- Electron, Tauri, WPF, WinUI, Avalonia, PyQt veya WinForms ile kucuk yardimci masaustu araci uretilirken.

## Gorsel kimlik
- **Atmosfer:** Kompakt, hizli, araca odakli, hafif ve her zaman erisilebilir.
- **Kompozisyon:** Baslik/drag alani, mikro kontrol grubu, durum satiri ve birincil aksiyon alani.
- **Boyut:** Varsayilan genislik 220-360px; yukseklik 180-420px araliginda kalmali.
- **Bosluk:** 6-8px mikro spacing, 10-12px grup spacing, 12-16px dis padding.
- **Kose:** 10-16px radius modern arac hissi verir; sistem/legacy hedefte 4-8px tercih edilebilir.
- **Golge:** Pencereyi arka plandan ayirmak icin tek ve net elevation kullan.
- **Kontrast:** Kucuk metinler nedeniyle renk kontrasti yuksek olmali.

## Renk paleti
- `#FFFFFF` - ana yuzey
- `#F8FAFC` - ikincil yuzey
- `#E2E8F0` - border
- `#4F46E5` - vurgu
- `#0F172A` - ana metin
- `#64748B` - ikincil metin
- `#10B981` - basari
- `#F59E0B` - uyari
- `#EF4444` - kritik

## Tipografi
- **Ana font:** Inter, Segoe UI, system-ui
- **Baslik:** 12-14px, 700 weight
- **Govde:** 11-12px, 500 weight
- **Mikro metin:** 9-10px, 600 weight
- **Kod/path/kisayol:** JetBrains Mono veya SF Mono, 10-11px

## Yerlesim sistemi
1. Ust drag bar: ikon, kisa baslik, pin/close/minimize aksiyonlari.
2. Hizli durum satiri: aktif mod, secili kaynak, baglanti veya izin durumu.
3. Mikro form: input, select, toggle, slider veya segmented mode.
4. Preview alani: yakalanan metin, pano icerigi, renk swatch veya son sonuc.
5. Aksiyon satiri: primary button + secondary icon buttons.

## Bilesenler
- Floating shell
- Drag handle / title bar
- Pin toggle
- Compact icon button
- Mini search input
- Mode segmented control
- Source selector
- Capture preview
- Shortcut chip
- Status pill
- Progress strip
- Toast / copied state

## Tasarim tokenlari

```css
:root {
  --tool-bg: #ffffff;
  --tool-bg-muted: #f8fafc;
  --tool-border: #e2e8f0;
  --tool-text: #0f172a;
  --tool-muted: #64748b;
  --tool-primary: #4f46e5;
  --tool-success: #10b981;
  --tool-warning: #f59e0b;
  --tool-danger: #ef4444;
  --tool-radius: 14px;
  --tool-shadow: 0 20px 50px rgba(15,23,42,.18);
  --tool-space-xs: 6px;
  --tool-space-sm: 8px;
  --tool-space-md: 12px;
  --tool-space-lg: 16px;
}

.floating-tool {
  width: min(340px, calc(100vw - 24px));
  background: var(--tool-bg);
  color: var(--tool-text);
  border: 1px solid var(--tool-border);
  border-radius: var(--tool-radius);
  box-shadow: var(--tool-shadow);
}
```

## Etkilesim kurallari
- Pencere drag edilebilir olmali; drag alani input/button ile karismamali.
- Pin state acikca gorunmeli; pinned olmayan pencere focus kaybinda otomatik kuculebilir.
- Kapatma ve minimize aksiyonlari cok kucuk hedef olmamali; minimum 28x28px tiklama alani saglanmali.
- Klavye kisayolu ile ac/kapat desteklenmeli; kapaninca focus onceki uygulamaya donmeli.
- Ekran kenarina yaklastiginda snap hissi verilebilir.
- Uzun islemde primary button loading veya cancel durumuna gecmeli.
- Kopyalama/yakalama sonrasi toast ve event log benzeri kisa geri bildirim verilmeli.

## Yap
- Kompakt ol ama kontrol anlamlarini gizleme.
- Icon-only butonlarda tooltip ve accessible label kullan.
- Pencerenin son konumunu ve pin durumunu kaydet.
- Kucuk alanlarda metni truncate et; tam metin icin tooltip veya expand panel sun.
- Her zaman ustte davranisini kullanici kontrolune birak.

## Yapma
- Mini pencereyi tam dashboard gibi doldurma.
- Kritik islemleri tek tikla calistirma.
- Kucuk metinlerde dusuk kontrast kullanma.
- Pencereyi kapatma/minimize kontrollerinden mahrum birakma.
- Ana uygulama uzerinde kalici olarak onemli icerigi kapatma.

## AI uretim promptu

```text
Floating Tool Window stilinde kompakt bir masaustu arac penceresi tasarla. 280-340px genisliginde, her zaman ustte durabilen, drag bar, pin toggle, mini input/select/toggle kontrolleri, preview alani, status pill ve birincil aksiyon butonu olsun. Kucuk alanda okunabilirlik, klavye kisayolu, tooltip ve focus state zorunlu olsun. Tasarim tokenlarini bg, surface, border, text, primary, radius, shadow ve spacing olarak merkezi tanimla.
```

## Kabul kriterleri
- Pencere kompakt ama islevsel gorunuyor.
- Drag, pin, close/minimize ve primary action yuzeyleri net.
- En az bir mikro form alani, bir status pill ve bir feedback/preview alani var.
- Icon-only aksiyonlarda tooltip/accessibility dusunulmus.
- 1366x768 ekranda pencere ana icerigi gereksiz kapatmiyor.
