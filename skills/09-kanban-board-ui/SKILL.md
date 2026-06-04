---
name: kanban-board-ui
description: Sürükle-bırak kolonlar, görev kartları, etiketler, avatarlar, tarih ve durum bilgisiyle kanban panosu üretir. Bu skill, kullanıcı görev yönetimi, proje takip, sprint planlama, AI agent workflow ve yapılacaklar uygulamalarında kullanılır.
---

# Skill 09 — Kanban Board UI

## Amaç
Bu skill, masaüstü uygulamalarında **Kanban Board UI** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Görev yönetimi, proje takip, sprint planlama, ai agent workflow ve yapılacaklar uygulamalarında.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Sürükle-bırak kolonlar, görev kartları, etiketler, avatarlar, tarih ve durum bilgisiyle kanban panosu üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#FFFFFF`
- `#F8FAFC`
- `#E5E7EB`
- `#3B82F6`
- `#F59E0B`
- `#111827`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Inter
- Manrope
- Segoe UI

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Sol sidebar: panolar/projeler
2. Üst board toolbar: filtre, arama, yeni görev
3. Kolonlar: yatay scroll destekli
4. Kartlar: başlık, etiket, kişi, tarih
5. Detay drawer/modal: kart düzenleme

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **Column header**
- **Task card**
- **Label chip**
- **Avatar**
- **Add-card button**
- **Filter bar**
- **Status badge**
- **Drag handle**

### Bileşen üretim kuralları
- Her bileşen `default`, `hover`, `active`, `focus`, `disabled`, `loading` durumlarına sahip olmalı.
- Aynı ekranda en fazla 1 adet ana CTA kullan.
- İkincil butonlar düşük kontrastlı ama okunabilir olmalı.
- Kartlar içinde başlık, açıklama, ana değer ve opsiyonel aksiyon düzeni tutarlı kalmalı.
- Tablo/listelerde satır yüksekliği 44–56px aralığında tutulmalı.

## CSS / Tasarım tokenları

```css
:root {
--bg: #F8FAFC;
--surface: #FFFFFF;
--column: #F1F5F9;
--border: #E5E7EB;
--accent: #3B82F6;
--warning: #F59E0B;
--text: #111827;
--radius: 16px;
--shadow: 0 8px 24px rgba(17,24,39,.08);
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
}

.app-shell {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
}

.surface {
  background: var(--surface, rgba(255,255,255,.9));
  border-radius: var(--radius, 16px);
  box-shadow: var(--shadow);
}

.board { display:flex; gap:20px; overflow-x:auto; }
.column { min-width:300px; background:var(--column); }
.task-card:active { transform: rotate(.4deg) scale(.99); }
```

### Spacing standardı
- İç boşluk küçük bileşenlerde: `8–12px`.
- Kart iç boşluğu: `16–24px`.
- Ana bölümler arası: `24–32px`.
- Dashboard grid gap: `20–28px`.

## Etkileşim kuralları
- **Hover:** Yüzey hafif yükselmeli, border veya background çok az güçlenmeli.
- **Active:** Buton/kart basılı hissi için `scale(.98)` veya daha düşük shadow kullanılabilir.
- **Focus:** Klavye kullanıcıları için 2px net focus ring zorunlu.
- **Transition:** 160–260ms `ease-out`; ağır animasyonlardan kaçın.
- **Loading:** Skeleton, progress bar veya küçük spinner ile gösterilmeli.
- **Empty state:** Sadece “veri yok” yazma; kullanıcıya sonraki aksiyonu göster.

## Yap
- Tasarım tokenlarını önce tanımla, bileşenleri sonra üret.
- Sidebar, topbar, kart ve tablo ölçülerini aynı spacing sistemine bağla.
- Aktif, pasif ve disabled durumlarını net ayır.
- Bileşen isimlerini kodda anlaşılır tut: `AppSidebar`, `MetricCard`, `CommandPanel` gibi.
- Tema renklerini tek dosyada topla.
- UI’ı mock data ile değil, gerçek veri bağlanabilecek yapıda tasarla.
- Her ekran için en az bir boş durum, hata durumu ve yükleniyor durumu oluştur.

## Yapma
- Her bileşene farklı radius, farklı shadow ve farklı font verme.
- Vurgu rengini her yerde kullanarak hiyerarşiyi bozma.
- Fazla animasyonla masaüstü uygulamasını yavaş hissettirme.
- Tablo, kart ve form alanlarını birbirine çok sıkıştırma.
- Sadece güzel görünen ama okunması zor kontrastlar kullanma.
- Log, tablo veya uzun metin alanlarında scroll davranışını belirsiz bırakma.

## Derinleştirme kontrol listesi
- Board anatomisi header filtreleri, kolon başlıkları, WIP/count göstergesi, kart listesi ve hızlı ekleme alanı içermeli.
- Kart anatomisi başlık, açıklama özeti, etiketler, sorumlu/avatar, tarih, öncelik, durum ve aksiyon menüsü olarak standartlaşmalı.
- Drag başlamadan önce sürüklenebilir alan anlaşılmalı; kart içindeki buton/dropdown varsa ayrı drag handle kullanılmalı.
- Drag sırasında drop indicator veya hedef kolon arka planı sonucu net göstermeli; boş kolonda gereksiz çizgi gösterilmemeli.
- Çoklu seçimde seçili kartlar checkbox ve selected yüzey tokenıyla görünmeli; çoklu drag preview stack + sayı badge'i kullanmalı.
- Drag sonrası taşınan kart kısa bir flash/selection geri bildirimi almalı.
- Erişilebilirlik için sürükle-bırak dışı hareket menüsü olmalı: üst/aşağı taşı, kolona taşı, en üste/en alta gönder.
- Kolonlar yatay scroll yapabilir ama board header/filtreler sabit kalmalı; kart listesi kolon içinde dikey scroll olmalı.

## Uygulama iskeleti önerisi

```text
src/
  ui/
    theme/tokens.css
    components/
      AppShell
      Sidebar
      Topbar
      MetricCard
      DataTable
      StatusBadge
      EmptyState
  screens/
    Dashboard
    Settings
    Details
```

## AI üretim promptu

```text
Kanban board masaüstü arayüzü tasarla. Solda proje menüsü, üstte filtre ve yeni görev butonu, yatay kolonlar, her kolonda sürüklenebilir görev kartları, etiket chipleri, avatarlar ve teslim tarihi olsun.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.

