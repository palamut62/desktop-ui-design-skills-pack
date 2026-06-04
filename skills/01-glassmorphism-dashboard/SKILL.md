---
name: glassmorphism-dashboard
description: Yarı saydam yüzeyler, arka plan bulanıklığı, yumuşak ışık ve yüzen kartlarla modern, sakin ve premium masaüstü dashboard arayüzleri üretir. Bu skill, kullanıcı yarı saydam cam kartlar, blur, pastel gradient ve premium dashboard hissi gerektiğinde kullanılır.
---

# Skill 01 — Glassmorphism Dashboard

## Amaç
Bu skill, masaüstü uygulamalarında **Glassmorphism Dashboard** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Yarı saydam cam kartlar, blur, pastel gradient ve premium dashboard hissi gerektiğinde.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Yarı saydam yüzeyler, arka plan bulanıklığı, yumuşak ışık ve yüzen kartlarla modern, sakin ve premium masaüstü dashboard arayüzleri üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#F4F8FF`
- `#CFE3FF`
- `#7AA8FF`
- `#8F7CFF`
- `#FFFFFF`
- `#101828`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Inter
- Plus Jakarta Sans
- SF Pro Display

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Sol sidebar: ikon + metin navigasyon
2. Üst bar: sayfa başlığı, arama, bildirim, profil
3. KPI kartları: 3–5 adet özet gösterge
4. Ana grafik alanı: geniş merkezi panel
5. İkincil panel: liste, son işlemler, en çok satanlar

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **Glass card**
- **Blurred sidebar**
- **KPI stat card**
- **Search input**
- **Gradient primary button**
- **Chart card**
- **Data chip**
- **Floating modal**

### Bileşen üretim kuralları
- Her bileşen `default`, `hover`, `active`, `focus`, `disabled`, `loading` durumlarına sahip olmalı.
- Aynı ekranda en fazla 1 adet ana CTA kullan.
- İkincil butonlar düşük kontrastlı ama okunabilir olmalı.
- Kartlar içinde başlık, açıklama, ana değer ve opsiyonel aksiyon düzeni tutarlı kalmalı.
- Tablo/listelerde satır yüksekliği 44–56px aralığında tutulmalı.

## CSS / Tasarım tokenları

```css
:root {
--bg: linear-gradient(135deg,#eef6ff,#efeaff,#ffffff);
--glass-bg: rgba(255,255,255,.22);
--glass-border: rgba(255,255,255,.38);
--surface: rgba(255,255,255,.72);
--text: #101828;
--blur: 16px;
--radius-lg: 24px;
--shadow: 0 18px 48px rgba(16,24,40,.10);
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
  backdrop-filter: blur(var(--blur)) saturate(160%);
  -webkit-backdrop-filter: blur(var(--blur)) saturate(160%);
}
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
- Arka plan yalnızca dekor değil, cam yüzeylerin okunabilirliğini destekleyen düşük detaylı ve düşük kontrastlı bir katman olmalı.
- Glass card içinde başlık, ana değer, ikincil metin ve aksiyon alanı her kartta aynı sırayı izlemeli.
- Blur değeri arttıkça metin kontrastı ve border opaklığı da kontrol edilmeli; tablo ve form alanlarında cam efekti yerine daha opak yüzey tercih edilmeli.
- Dashboard ekranında KPI kartları, ana grafik, filtreler, son aktiviteler ve uyarı/boş durum alanları aynı spacing rampına bağlı olmalı.
- Arka plan görseli, gradient veya canlı veri haritası kullanılacaksa karanlık/açık overlay tokenı tanımlanmalı.
- Düşük performanslı cihazlar veya uzak masaüstü senaryosu için blur kapatılabilen fallback surface sağlanmalı.
- Focus ring cam yüzeyde kaybolmamalı; 2px opak accent ring ve yeterli offset kullanılmalı.
- Empty state yalnızca metin olmamalı; veri bağlama, filtre temizleme veya ilk kaydı oluşturma aksiyonu içermeli.

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
Pastel mavi-mor gradient arka planlı, yarı saydam cam kartlı, 16-20px blur efektli, 24px radius değerli modern masaüstü dashboard tasarla. Sol sidebar, üst arama barı, KPI kartları, büyük grafik alanı ve sağda liste paneli olsun.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.

