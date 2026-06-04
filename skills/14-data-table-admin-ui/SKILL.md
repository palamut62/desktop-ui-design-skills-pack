---
name: data-table-admin-ui
description: Filtrelenebilir veri tablolari, arama, status badge, bulk action, pagination ve detay paneli olan yogun admin arayuzleri uretir.
---

# Skill 14 - Data Table Admin UI

## Amac
Bu skill, liste yonetimi ve operasyonel admin ekranlari icin **Data Table Admin UI** standardi saglar. Hedef; cok sayida kaydi tarama, filtreleme, siralama, secme, toplu islem ve detay inceleme akisini hizli ve guvenilir hale getirmektir.

Bu stil HTML oyun alanindaki `Data Table Admin UI` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- Repo cleaner, dosya analiz, abonelik listesi, kullanici yonetimi, stok/personel/CRM listeleri.
- Kayit sayisi fazla, kolonlar cesitli ve bulk action gerekiyorsa.
- Kullanici filtre, arama, siralama, secim ve detay paneli arasinda hizli calisacaksa.
- Web/Electron, WinForms DataGridView, WPF DataGrid, Avalonia DataGrid veya PyQt table view hedefleniyorsa.

## Gorsel kimlik
- **Atmosfer:** Operasyonel, okunabilir, yogun, hizli taranabilir.
- **Kompozisyon:** Toolbar, filtre chipleri, tablo, bulk action bar, pagination, detail drawer.
- **Bosluk:** Tablo satiri 40-52px; toolbar 48-64px.
- **Kose:** Tablo container 8-12px; satirlar genellikle radius kullanmaz.
- **Kontrast:** Header, zebra, hover, selected ve focus state ayrilmali.
- **Veri hiyerarsisi:** Ana kolon daha guclu, metadata ve status daha dusuk vurgu ile verilmeli.

## Renk paleti
- `#F8FAFC` - page bg
- `#FFFFFF` - table surface
- `#E2E8F0` - border/grid
- `#F1F5F9` - header/zebra
- `#2563EB` - selected/primary
- `#0F172A` - text
- `#64748B` - muted
- `#10B981` - active/success
- `#F59E0B` - pending/warning
- `#EF4444` - error/destructive

## Tipografi
- **Table text:** 12-14px
- **Header:** 11-12px, uppercase veya semibold
- **Badge:** 10-11px, 700
- **Toolbar:** 12-13px
- **Numeric columns:** tabular nums veya monospace tercih edilebilir

## Yerlesim sistemi
1. Top toolbar: title, search, saved views, primary action.
2. Filter row: dropdown filters, date range, active chips.
3. Bulk action bar: selected count, export, archive, delete.
4. Data table: checkbox, primary field, metadata, status, actions.
5. Pagination/footer: count, page size, page controls.
6. Detail drawer: selected row details and edit form.

## Bilesenler
- Search input
- Filter dropdown
- Date range picker
- Active filter chip
- Column header sort
- Row checkbox
- Status badge
- Inline action menu
- Bulk action bar
- Empty table state
- Error/retry state
- Pagination control
- Detail drawer

## Tasarim tokenlari

```css
:root {
  --table-bg: #f8fafc;
  --table-surface: #ffffff;
  --table-header: #f1f5f9;
  --table-border: #e2e8f0;
  --table-text: #0f172a;
  --table-muted: #64748b;
  --table-primary: #2563eb;
  --table-selected: #dbeafe;
  --table-success: #10b981;
  --table-warning: #f59e0b;
  --table-danger: #ef4444;
  --table-row-height: 46px;
  --table-radius: 10px;
}
```

## Etkilesim kurallari
- Header click siralama yapmali; sort direction ikonla gorunmeli.
- Checkbox secimi bulk action bar'i acmali.
- Shift-click veya keyboard multi-select dusunulebilir.
- Row hover ile selected state karismamali.
- Actions menu satir sonunda ve keyboard ile erisilebilir olmali.
- Filter degisince active chips guncellenmeli; tek tikla temizlenebilmeli.
- Empty state filtre temizleme veya yeni kayit aksiyonu sunmali.
- Loading state table skeleton olarak gelmeli; satirlar ziplamamali.

## Yap
- Kolon genisliklerini veri tipine gore planla.
- Status degerlerini renk + metin + ikon ile ver.
- Bulk delete gibi aksiyonlarda onay dialogu kullan.
- Tabloda yatay scroll gerekiyorsa ilk kolon ve actions kolonu sticky olabilir.
- Sayfa boyutu ve siralama tercihlerini kaydet.

## Yapma
- Cok uzun metinleri satir yuksekligini bozacak sekilde gostermek.
- Tum kolonlari ayni onemde ve ayni genislikte yapmak.
- Status'u yalnizca renkle anlatmak.
- Bulk action bar olmadan coklu secim sunmak.
- Hata durumunda tum tabloyu bos gibi gostermek.

## AI uretim promptu

```text
Data Table Admin UI stilinde yogun bir admin liste ekrani tasarla. Ust toolbar, arama, filtre dropdownlari, aktif filtre chipleri, checkbox'li tablo satirlari, sortable kolonlar, status badge'leri, inline actions menu, bulk action bar, pagination ve sag detay drawer olsun. Loading skeleton, empty state, error retry, selected state ve destructive confirmation durumlarini ekle.
```

## Kabul kriterleri
- Tablo toolbar, filtre, bulk action ve pagination ile tamamlanmis.
- Satir secimi, selected state ve bulk action net.
- Status badge ve sort state yalnizca renge bagli degil.
- Empty/loading/error durumlari var.
- Dar pencerede tablo yatay scroll veya kart listeye donusebiliyor.


