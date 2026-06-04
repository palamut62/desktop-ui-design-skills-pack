---
name: settings-first-ui
description: API anahtari, model secimi, guvenlik, entegrasyon, faturalandirma ve hassas konfigurasyon formlarina odaklanan ayar merkezli masaustu arayuzleri uretir.
---

# Skill 14 - Settings-First UI

## Amac
Bu skill, kullanicinin ana gorevinin konfigurasyon yapmak oldugu uygulamalar icin **Settings-First UI** tasarlar. Hedef; karmasik ayarlari guvenli, gruplanmis, dogrulanabilir ve geri alinabilir bicimde sunmaktir.

Bu stil HTML oyun alanindaki `Settings-First UI` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- OpenRouter, DeepSeek, NVIDIA, GitHub, SMTP, veritabani veya SaaS entegrasyon ayarlari.
- API key, secret, token, model, quota, billing, proxy, endpoint, permission ve workspace ayarlari.
- Kullanici kaydetmeden once test, dogrulama, maskeleme ve reset ihtiyaci duyacaksa.
- Masaustu admin paneli veya agent configuration manager yapilirken.

## Gorsel kimlik
- **Atmosfer:** Guven veren, sakin, kontrollu, ayar odakli.
- **Kompozisyon:** Sol kategori listesi, sag ayar gruplari, sticky save bar.
- **Bosluk:** Form gruplari arasinda 20-28px, satir icinde 8-12px.
- **Kose:** 8-12px radius; ayar satirlarinda gereksiz dekor yok.
- **Kontrast:** Label, aciklama, input ve hata metni hiyerarsisi belirgin.
- **Guvenlik:** Hassas degerler maskeli, kopyalama/gosterme/test aksiyonlari kontrollu.

## Renk paleti
- `#F8FAFC` - background
- `#FFFFFF` - surface
- `#E2E8F0` - border
- `#2563EB` - primary
- `#0F172A` - text
- `#64748B` - muted
- `#10B981` - valid
- `#F59E0B` - warning
- `#EF4444` - invalid/destructive

## Tipografi
- **Ana font:** Inter, Segoe UI, system-ui
- **Sayfa basligi:** 20-24px, 700
- **Grup basligi:** 13-15px, 700
- **Label:** 12-13px, 600
- **Aciklama:** 11-12px, 400-500
- **Secret/code:** monospace, 12px

## Yerlesim sistemi
1. Sol settings nav: kategori ve durum indicator.
2. Page header: baslik, aciklama, global search.
3. Section card: baslik, aciklama, form rows.
4. Sensitive input row: masked value, reveal, copy, rotate/test.
5. Validation summary: sorunlar ve cozum aksiyonlari.
6. Sticky footer/save bar: unsaved state, reset, test, save.

## Bilesenler
- Settings navigation item
- Form field row
- Secret input
- Reveal/copy icon button
- Endpoint input
- Model selector
- Numeric stepper
- Toggle row
- Radio card group
- Validation message
- Test connection button
- Sticky save bar

## Tasarim tokenlari

```css
:root {
  --settings-bg: #f8fafc;
  --settings-surface: #ffffff;
  --settings-border: #e2e8f0;
  --settings-text: #0f172a;
  --settings-muted: #64748b;
  --settings-primary: #2563eb;
  --settings-valid: #10b981;
  --settings-warning: #f59e0b;
  --settings-danger: #ef4444;
  --settings-radius: 12px;
  --settings-row: 44px;
  --settings-gap: 16px;
}
```

## Etkilesim kurallari
- Hassas input varsayilan olarak maskeli olmali; reveal gecici olabilir.
- Copy action toast vermeli ama secret degerini ekranda kalici gostermemeli.
- Save butonu sadece degisiklik varsa belirginlesmeli.
- Test connection islemi save'den ayrilmali; sonuc inline status olarak gosterilmeli.
- Hata mesajlari ilgili input altinda ve sayfa ustu ozetinde gorunmeli.
- Destructive reset/rotate key aksiyonlari onay istemeli.
- Klavye ile label-input-yardim-hata akisi mantikli olmalidir.

## Yap
- Ayarlari kategori ve risk seviyesine gore grupla.
- Her input icin aciklama ve dogrulama kriteri ver.
- Unsaved changes durumunu net goster.
- Toggle ve radio ayarlarini satir aciklamasiyla destekle.
- Test, save, reset ve destructive aksiyonlari gorsel olarak ayir.

## Yapma
- API key gibi degerleri duz metin olarak gostermeye baslama.
- Cok fazla ayari tek uzun formda araliksiz yigma.
- Hata mesajlarini sadece toast ile gecici gostermek.
- Kaydetmeden ayrilma uyarisi olmadan sayfa degistirmek.
- Primary renkleri her ayar satirinda dekor olarak kullanmak.

## AI uretim promptu

```text
Settings-First UI stilinde bir API/model ayar paneli tasarla. Sol kategori navigasyonu, sagda ayar bolumleri, maskeli API key inputlari, endpoint/model selector, numeric stepper, toggle row, radio card group, inline validation, test connection ve sticky save bar olsun. Hassas veriler varsayilan maskeli gelsin. Unsaved, valid, invalid, loading ve destructive confirmation durumlarini ekle.
```

## Kabul kriterleri
- Ayar kategorileri ve form bolumleri net.
- Secret alanlari maskeli ve reveal/copy/test aksiyonlari kontrollu.
- Inline validation ve sticky save bar var.
- Hata, basari, warning ve unsaved state gorunuyor.
- Klavye navigasyonu ve focus state eksik degil.

