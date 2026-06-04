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



---
name: dark-developer-ui
description: Koyu yüzeyler, kod editörü hissi, terminal paneli, dosya ağacı ve geliştirici odaklı yoğun bilgi düzeni üretir. Bu skill, kullanıcı kodlama araçları, terminal, repo yöneticisi, AI developer tool veya CLI wrapper yapılırken kullanılır.
---

# Skill 02 — Dark Developer UI

## Amaç
Bu skill, masaüstü uygulamalarında **Dark Developer UI** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Kodlama araçları, terminal, repo yöneticisi, ai developer tool veya cli wrapper yapılırken.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Koyu yüzeyler, kod editörü hissi, terminal paneli, dosya ağacı ve geliştirici odaklı yoğun bilgi düzeni üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#0B1020`
- `#111827`
- `#1E293B`
- `#3B82F6`
- `#22C55E`
- `#E5E7EB`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- JetBrains Mono
- Inter
- SF Mono

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Sol activity bar: ikonlar
2. Explorer panel: klasör/dosya ağacı
3. Editor area: tab + kod alanı
4. Alt panel: terminal/log/debug
5. Status bar: branch, hata, sunucu durumu

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **Activity icon**
- **File tree item**
- **Editor tab**
- **Code block**
- **Terminal panel**
- **Status pill**
- **Command button**
- **Inline warning**

### Bileşen üretim kuralları
- Her bileşen `default`, `hover`, `active`, `focus`, `disabled`, `loading` durumlarına sahip olmalı.
- Aynı ekranda en fazla 1 adet ana CTA kullan.
- İkincil butonlar düşük kontrastlı ama okunabilir olmalı.
- Kartlar içinde başlık, açıklama, ana değer ve opsiyonel aksiyon düzeni tutarlı kalmalı.
- Tablo/listelerde satır yüksekliği 44–56px aralığında tutulmalı.

## CSS / Tasarım tokenları

```css
:root {
--bg: #0B1020;
--surface: #111827;
--surface-2: #1E293B;
--accent: #3B82F6;
--success: #22C55E;
--text: #E5E7EB;
--radius: 12px;
--shadow: 0 16px 40px rgba(0,0,0,.35);
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
  font-family: Inter, system-ui, sans-serif;
}

.code, .terminal { font-family: "JetBrains Mono", "SF Mono", monospace; }
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
- Developer UI anatomisi activity bar, explorer/sidebar, editor/work area, bottom panel ve status bar olarak ayrılmalı.
- Activity bar yalnızca üst seviye modüller için kullanılmalı; sık kullanılan dosya/terminal aksiyonları toolbar veya command palette'e taşınmalı.
- Terminal, problems, output ve logs panelleri aynı tab/panel davranışını paylaşmalı; aktif panel ve hata sayısı net görünmeli.
- Monospace yalnızca kod, terminal, path, branch, commit ve log içeriğinde kullanılmalı; açıklama metinlerinde normal UI fontu korunmalı.
- Status bar global bilgileri solda, dosya/oturum bağlamını sağda göstermeli; renkli uyarı yalnızca bloklayıcı hata için kullanılmalı.
- Dosya ağacı satırları 28-36px yoğunlukta, editor/list satırları 32-44px aralığında tutulmalı.
- Hata, uyarı, başarı ve çalışan işlem durumları ikon + metin + renk üçlüsüyle verilmeli; yalnızca renge güvenilmemeli.
- Komut paleti, terminal ve editor focus sırası klavye kullanıcısı için kesintisiz olmalı.

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
Koyu developer masaüstü arayüzü tasarla. Sol dosya ağacı, orta kod editörü, üst tab sistemi, alt terminal/log paneli, mavi ve yeşil vurgu renkleri, okunabilir monospaced kod alanı kullan.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.



---
name: minimal-sidebar-ui
description: Sade sol menü, geniş boşluk, açık arka plan, ince çizgiler ve düşük görsel gürültü ile temiz masaüstü uygulaması üretir. Bu skill, kullanıcı iş uygulamaları, ayar panelleri, CRUD ekranları, küçük masaüstü yönetim araçları için kullanılır.
---

# Skill 03 — Minimal Sidebar UI

## Amaç
Bu skill, masaüstü uygulamalarında **Minimal Sidebar UI** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Iş uygulamaları, ayar panelleri, crud ekranları, küçük masaüstü yönetim araçları için.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Sade sol menü, geniş boşluk, açık arka plan, ince çizgiler ve düşük görsel gürültü ile temiz masaüstü uygulaması üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#FFFFFF`
- `#F6F8FB`
- `#E5EAF3`
- `#4F83FF`
- `#6B7280`
- `#111827`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Inter
- Segoe UI
- Roboto

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Sol sidebar: 220–260px
2. Üst bar: başlık + arama + ana aksiyon
3. İçerik: tablo/liste kartı
4. Sağ detay paneli: seçili öğe bilgisi
5. Alt alan: durum veya küçük bilgi çubuğu

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **Sidebar item**
- **Table row**
- **Status badge**
- **Search field**
- **Primary button**
- **Empty state**
- **Detail card**
- **Pagination**

### Bileşen üretim kuralları
- Her bileşen `default`, `hover`, `active`, `focus`, `disabled`, `loading` durumlarına sahip olmalı.
- Aynı ekranda en fazla 1 adet ana CTA kullan.
- İkincil butonlar düşük kontrastlı ama okunabilir olmalı.
- Kartlar içinde başlık, açıklama, ana değer ve opsiyonel aksiyon düzeni tutarlı kalmalı.
- Tablo/listelerde satır yüksekliği 44–56px aralığında tutulmalı.

## CSS / Tasarım tokenları

```css
:root {
--bg: #F6F8FB;
--surface: #FFFFFF;
--border: #E5EAF3;
--accent: #4F83FF;
--muted: #6B7280;
--text: #111827;
--radius: 14px;
--shadow: 0 8px 24px rgba(17,24,39,.06);
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

border: 1px solid var(--border);
box-shadow: var(--shadow);
letter-spacing: -0.01em;
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
- Sidebar bilgi mimarisi 5-7 ana modülle sınırlanmalı; ikincil sayfalar içerik içi tab veya breadcrumb ile çözülmeli.
- Aktif menü itemı ikon, metin ve yüzey vurgusuyla anlaşılmalı; hover aktif durumla karışmamalı.
- Header alanı sayfa başlığı, birincil filtre/arama ve en fazla bir ana aksiyon içermeli.
- CRUD ekranlarında liste, detay ve form akışı net olmalı; kaydet/iptal butonları her formda aynı konumda kalmalı.
- Tablo yoğunluğu 44-52px satır yüksekliğiyle okunabilir tutulmalı; dar pencerede kart listeye dönüşebilmelidir.
- Empty state yeni kayıt oluşturma, filtre temizleme veya veri içe aktarma gibi bağlamsal aksiyon sunmalı.
- Sidebar collapse davranışı icon-only modda tooltip ve accessible label korumalı.
- Uzun menülerde yalnızca sidebar scroll etmeli; header ve ana iş akışı yerinden oynamamalı.

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
Açık renkli minimal sidebar masaüstü uygulaması tasarla. Solda sade navigasyon, üstte arama ve yeni kayıt butonu, ortada tablo/liste, sağda seçili öğe detay kartı olsun. Bol boşluk ve ince çizgiler kullan.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.



---
name: command-palette-ui
description: Ctrl+K benzeri komut paleti, hızlı arama, shortcut chipleri ve klavye öncelikli etkileşim tasarımı üretir. Bu skill, kullanıcı hızlı komut, arama, launcher, AI tool manager veya klavye odaklı uygulamalarda kullanılır.
---

# Skill 04 — Command Palette UI

## Amaç
Bu skill, masaüstü uygulamalarında **Command Palette UI** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Hızlı komut, arama, launcher, ai tool manager veya klavye odaklı uygulamalarda.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Ctrl+K benzeri komut paleti, hızlı arama, shortcut chipleri ve klavye öncelikli etkileşim tasarımı üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#0F172A`
- `#111827`
- `#1F2937`
- `#60A5FA`
- `#A78BFA`
- `#F9FAFB`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Inter
- JetBrains Mono
- SF Pro Text

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Arka plan: ana uygulama bulanık/karartılmış
2. Merkez modal: 560–760px genişlik
3. Üst search input: komut girişi
4. Komut listesi: ikon + başlık + açıklama + shortcut
5. Footer: ipuçları veya son kullanılanlar

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **Command search**
- **Command row**
- **Shortcut chip**
- **Section label**
- **Recent command**
- **Icon item**
- **Secondary action**
- **Empty result**

### Bileşen üretim kuralları
- Her bileşen `default`, `hover`, `active`, `focus`, `disabled`, `loading` durumlarına sahip olmalı.
- Aynı ekranda en fazla 1 adet ana CTA kullan.
- İkincil butonlar düşük kontrastlı ama okunabilir olmalı.
- Kartlar içinde başlık, açıklama, ana değer ve opsiyonel aksiyon düzeni tutarlı kalmalı.
- Tablo/listelerde satır yüksekliği 44–56px aralığında tutulmalı.

## CSS / Tasarım tokenları

```css
:root {
--overlay: rgba(15,23,42,.72);
--panel: #111827;
--row: #1F2937;
--accent: #60A5FA;
--purple: #A78BFA;
--text: #F9FAFB;
--radius: 18px;
--shadow: 0 24px 80px rgba(0,0,0,.45);
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
  backdrop-filter: blur(10px);
}

.command-row:hover { background: rgba(96,165,250,.12); }
kbd { border: 1px solid rgba(255,255,255,.14); }
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
- Palet `Ctrl+K`/`Ctrl+P` gibi net kısayolla açılmalı; kapatma için `Esc`, seçim için `Enter`, gezinme için ok tuşları desteklenmeli.
- Arama satırı komut, dosya, ayar, son kullanılan ve önerilen aksiyon tiplerini ayırt eden kategori etiketi gösterebilmeli.
- Sonuç satırı ikon, başlık, kısa açıklama, scope etiketi ve shortcut chip alanlarını sabit sırada taşımalı.
- Arama boşken son kullanılanlar ve önerilen komutlar gösterilmeli; sonuç yokken sorguyu temizleme veya yeni komut oluşturma aksiyonu sunulmalı.
- Seçili satır hover'dan daha güçlü görünmeli; focus palet içinde hapsolmalı ve kapanınca önceki kontrole geri dönmeli.
- Uzun listelerde sanallaştırma veya incremental rendering düşünülmeli; 100+ sonuçta scroll performansı bozulmamalı.
- Komutlar destructive ise inline onay veya ikinci adım istemeli; palet doğrudan kritik silme yapmamalı.
- Mouse kullanıcıları için row hover, keyboard kullanıcıları için aktif satır mantığı planlanmalı.

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
Koyu command palette arayüzü tasarla. Ortada geniş hızlı komut penceresi, üstte arama inputu, altında ikonlu komut satırları, sağda shortcut chipleri ve bulanık koyu overlay olsun.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.



---
name: card-dashboard-ui
description: Modüler kartlar, KPI alanları, grafikler, tablolar ve filtrelerle düzenli dashboard ekranları üretir. Bu skill, kullanıcı analitik, bütçe, abonelik, satış, proje takip gibi veri kartları yoğun ekranlarda kullanılır.
---

# Skill 05 — Card Dashboard UI

## Amaç
Bu skill, masaüstü uygulamalarında **Card Dashboard UI** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Analitik, bütçe, abonelik, satış, proje takip gibi veri kartları yoğun ekranlarda.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Modüler kartlar, KPI alanları, grafikler, tablolar ve filtrelerle düzenli dashboard ekranları üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#FFFFFF`
- `#F8FAFC`
- `#E2E8F0`
- `#2563EB`
- `#10B981`
- `#0F172A`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Inter
- Plus Jakarta Sans
- Segoe UI

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Sidebar veya üst nav
2. KPI grid: 4 kolon
3. Ana grafik: 2/3 genişlik
4. Yan liste: 1/3 genişlik
5. Alt tablo: tam genişlik

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **KPI card**
- **Chart card**
- **Table card**
- **Filter dropdown**
- **Primary button**
- **Tag chip**
- **Stat tile**
- **Date range picker**

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
--border: #E2E8F0;
--accent: #2563EB;
--success: #10B981;
--text: #0F172A;
--radius: 18px;
--shadow: 0 10px 30px rgba(15,23,42,.07);
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

.dashboard-grid { display:grid; gap:24px; }
.card:hover { transform: translateY(-2px); }
transition: all .22s ease;
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
- Dashboard önce kullanıcı sorusunu cevaplamalı: durum nedir, ne değişti, neye müdahale edilmeli.
- KPI kart anatomisi başlık, ana değer, zaman aralığı, değişim yönü, karşılaştırma ve opsiyonel mini trend olarak standartlaşmalı.
- Kartlar veri yoğunluğunu gizlememeli; aynı veri tipleri aynı chart türü, renk sözlüğü ve sayı formatıyla gösterilmeli.
- Filtreler global ve kart bazlı olarak ayrılmalı; aktif filtreler temizlenebilir chip olarak görünmeli.
- Kritik uyarılar dekoratif kart gibi görünmemeli; severity, kaynak, zaman ve önerilen aksiyon açık olmalı.
- Drill-down akışı karttan detay sayfasına, modal'a veya sağ detay paneline tutarlı şekilde gitmeli.
- Loading state kart bazında skeleton; veri hatası kart bazında retry; tüm veri yoksa sayfa seviyesinde empty state olmalı.
- 1366x768 ekranda en önemli 3-4 kart ve ana grafik ilk ekranda kalmalı; geniş ekranda ek detaylar sağ/alt panelde açılmalı.

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
Kart odaklı masaüstü dashboard tasarla. Açık arka plan, KPI kartları, grafik kartı, tablo kartı, filtre dropdownları ve yeşil/mavi durum chipleri olsun. Her modül net ayrılmış ve düzenli olmalı.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.



---
name: neumorphism-ui
description: Yumuşak kabartmalı yüzeyler, iç/dış gölgeler, düşük kontrastlı açık arka plan ve dokunsal butonlar üretir. Bu skill, kullanıcı kişisel araçlar, medya yöneticisi, küçük yardımcı uygulamalar ve sakin deneyimlerde kullanılır.
---

# Skill 06 — Neumorphism UI

## Amaç
Bu skill, masaüstü uygulamalarında **Neumorphism UI** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Kişisel araçlar, medya yöneticisi, küçük yardımcı uygulamalar ve sakin deneyimlerde.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Yumuşak kabartmalı yüzeyler, iç/dış gölgeler, düşük kontrastlı açık arka plan ve dokunsal butonlar üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#EEF2F7`
- `#DCE4EF`
- `#FFFFFF`
- `#B9C7D9`
- `#6C7A89`
- `#1F2937`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Inter
- Nunito Sans
- Segoe UI

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Tek ana açık arka plan
2. Soft sidebar veya üst nav
3. Kabartmalı kart grid
4. Geniş radiuslu input ve butonlar
5. Az sayıda belirgin renk vurgusu

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **Soft button**
- **Pressed button**
- **Toggle**
- **Progress bar**
- **Info card**
- **Search field**
- **List row**
- **Pill chip**

### Bileşen üretim kuralları
- Her bileşen `default`, `hover`, `active`, `focus`, `disabled`, `loading` durumlarına sahip olmalı.
- Aynı ekranda en fazla 1 adet ana CTA kullan.
- İkincil butonlar düşük kontrastlı ama okunabilir olmalı.
- Kartlar içinde başlık, açıklama, ana değer ve opsiyonel aksiyon düzeni tutarlı kalmalı.
- Tablo/listelerde satır yüksekliği 44–56px aralığında tutulmalı.

## CSS / Tasarım tokenları

```css
:root {
--bg: #EEF2F7;
--surface: #EEF2F7;
--light: #FFFFFF;
--dark-shadow: #B9C7D9;
--muted: #6C7A89;
--text: #1F2937;
--radius: 22px;
--shadow: 8px 8px 18px #B9C7D9, -8px -8px 18px #FFFFFF;
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

.soft { box-shadow: var(--shadow); }
.soft-inset { box-shadow: inset 6px 6px 12px #B9C7D9, inset -6px -6px 12px #FFFFFF; }
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
- Neumorphism yalnızca düşük riskli kişisel araçlar ve soft kontrol yüzeyleri için kullanılmalı; veri yoğun kurumsal tabloda ana stil olmamalı.
- Basılı/yükseltilmiş durumlar renk farkıyla da desteklenmeli; yalnızca gölge yönüne güvenilmemeli.
- Input, toggle, slider ve segmented control gibi fiziksel etkileşim hissi veren bileşenlerde kullanılmalı.
- Metin ve ikonlar kabartmalı yüzeyin içine gömülmemeli; okunabilirlik için opak text tokenları korunmalı.
- Hata, uyarı ve başarı durumlarında soft yüzey üstüne net border/icon/metin kombinasyonu eklenmeli.
- Dark mode yapılacaksa iç/dış gölgeler ayrı tokenlarla tanımlanmalı; tek renk ailesine sıkışan düşük kontrasttan kaçınılmalı.
- Focus state gölgeyle değil, belirgin outline/ring ile gösterilmeli.
- Küçük pencere yoğunluğunda büyük soft kartlar azaltılmalı; form alanları standart yüzeye yaklaşmalı.

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
Neumorphism masaüstü arayüzü tasarla. Açık gri-mavi arka plan, kabartmalı kartlar, yumuşak iç ve dış gölgeler, yuvarlak butonlar, düşük kontrast ve sakin kişisel uygulama hissi kullan.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.



---
name: fluent-windows-11-ui
description: Windows 11 hissi veren mica/acrylic benzeri katmanlar, yuvarlatılmış köşeler, sakin derinlik ve yerel uygulama düzeni üretir. Bu skill, kullanıcı Windows’a doğal görünen VB.NET, WPF, WinUI veya Electron uygulamalarında kullanılır.
---

# Skill 07 — Fluent Design / Windows 11 UI

## Amaç
Bu skill, masaüstü uygulamalarında **Fluent Design / Windows 11 UI** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Windows’a doğal görünen vb.net, wpf, winui veya electron uygulamalarında.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Windows 11 hissi veren mica/acrylic benzeri katmanlar, yuvarlatılmış köşeler, sakin derinlik ve yerel uygulama düzeni üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#F5F9FF`
- `#E8F0FE`
- `#DCEBFF`
- `#2F6FEB`
- `#6B7280`
- `#111827`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Segoe UI Variable
- Segoe UI
- Inter

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Sol navigation view
2. Üst command bar
3. Ana içerik kartları
4. Settings/list rows
5. Dialog ve flyout alanları

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **Nav item**
- **Command bar button**
- **Search box**
- **Settings row**
- **Content card**
- **List row**
- **Toggle**
- **Flyout menu**

### Bileşen üretim kuralları
- Her bileşen `default`, `hover`, `active`, `focus`, `disabled`, `loading` durumlarına sahip olmalı.
- Aynı ekranda en fazla 1 adet ana CTA kullan.
- İkincil butonlar düşük kontrastlı ama okunabilir olmalı.
- Kartlar içinde başlık, açıklama, ana değer ve opsiyonel aksiyon düzeni tutarlı kalmalı.
- Tablo/listelerde satır yüksekliği 44–56px aralığında tutulmalı.

## CSS / Tasarım tokenları

```css
:root {
--bg: #F5F9FF;
--mica: rgba(255,255,255,.72);
--surface: rgba(255,255,255,.86);
--border: #DCEBFF;
--accent: #2F6FEB;
--muted: #6B7280;
--text: #111827;
--radius: 12px;
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
  backdrop-filter: blur(20px);
  font-family: "Segoe UI Variable", "Segoe UI", sans-serif;
}

.window-surface { background: var(--mica); border:1px solid var(--border); }
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
- Fluent hissi yalnızca blur değil; NavigationView, command bar, settings row, flyout, dialog ve sistem tipografisiyle kurulmalı.
- 4px tabanlı spacing ramp kullanılmalı; 2/6/10px gibi ikon hizalama istisnaları token olarak gerekçeli tanımlanmalı.
- Mica/acrylic yüzeyler ana chrome ve arka plan katmanlarında kalmalı; yoğun tablo/form yüzeylerinde opak surface tercih edilmeli.
- Command bar birincil aksiyonları solda/başlığa yakın, ikincil ve overflow aksiyonları sağda veya `...` menüsünde toplamalı.
- Windows high contrast, text scaling ve keyboard focus senaryolarında tüm kontroller okunabilir kalmalı.
- Navigation item, settings row ve list row yükseklikleri 40-48px aralığında, touch hedefi gereken ekranda 44px+ olmalı.
- Dialog ve flyout kısa süreli göreve odaklanmalı; kritik aksiyonlar destructive renk + metin + onay ile ayrılmalı.
- WinUI/WPF/WinForms uyarlamasında web CSS yerine platformun theme/resource/token mekanizması kullanılmalı.

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
Windows 11 / Fluent Design tarzı masaüstü uygulama tasarla. Sol navigation view, üst command bar, yuvarlak kartlar, mica/acrylic hissi, Segoe UI tipografi, sakin mavi vurgu ve yerel Windows uygulaması hissi olsun.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.



---
name: split-panel-workspace
description: Sol dosya ağacı, sekmeli ana editör, sağ detay/önizleme paneli ve üretkenlik odaklı çalışma alanı üretir. Bu skill, kullanıcı not alma, dosya düzenleme, markdown editör, kural/skill yöneticisi ve proje workspace ekranlarında kullanılır.
---

# Skill 08 — Split Panel Workspace

## Amaç
Bu skill, masaüstü uygulamalarında **Split Panel Workspace** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Not alma, dosya düzenleme, markdown editör, kural/skill yöneticisi ve proje workspace ekranlarında.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Sol dosya ağacı, sekmeli ana editör, sağ detay/önizleme paneli ve üretkenlik odaklı çalışma alanı üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#FFFFFF`
- `#F8FAFC`
- `#E2E8F0`
- `#1D4ED8`
- `#334155`
- `#0F172A`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Inter
- JetBrains Mono
- Segoe UI

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Sol panel: dosya/proje ağacı
2. Üst tab bar: açık belgeler
3. Orta panel: editor/preview
4. Sağ panel: özellikler/detaylar
5. Alt bar: durum, satır, yüzde, sync

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **File tree item**
- **Document tab**
- **Editor area**
- **Detail pane card**
- **Breadcrumb**
- **Search field**
- **Action button**
- **Resizable divider**

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
--border: #E2E8F0;
--accent: #1D4ED8;
--slate: #334155;
--text: #0F172A;
--radius: 12px;
--shadow: 0 8px 24px rgba(15,23,42,.06);
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

.workspace { display:grid; grid-template-columns:260px 1fr 320px; }
.divider { width:1px; background:var(--border); }
.editor { font-family: Inter, sans-serif; }
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
- Split panel anatomisi primary list/sidebar, main editor/detail, inspector/preview ve optional bottom panel olarak tarif edilmeli.
- Pane genişlikleri min/default/max değerleriyle tokenlaşmalı; kullanıcı resize ettiğinde tercih kaydedilebilmeli.
- Resizer görünür, klavye ile odaklanabilir ve çift tıklamayla varsayılan genişliğe dönebilir olmalı.
- Her pane kendi toolbar, scroll ve empty state davranışına sahip olmalı; tüm sayfa aynı anda scroll etmemeli.
- Master-detail seçiminde aktif öğe, açık dosya/kayıt ve kaydedilmemiş değişiklik durumu ayrı ayrı gösterilmeli.
- Dar pencerede inspector sağ panel drawer'a, bottom panel tablı alana dönüşmeli.
- Panel kapatma/gizleme için toolbar butonu ve keyboard shortcut sağlanmalı; kullanıcı gizli paneli geri getirebilmeli.
- Çoklu seçim, compare view veya preview mode varsa pane başlıklarında bağlam net yazılmalı.

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
Split panel workspace masaüstü arayüzü tasarla. Sol dosya ağacı, üstte belge tabları, ortada editor/preview alanı, sağda detay paneli ve altta status bar olsun. Üretkenlik ve düzen hissi öne çıksın.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.



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



---
name: terminal-gui-hybrid
description: Grafiksel kontrollerle canlı terminal/log panelini birleştiren teknik ve güven veren masaüstü arayüzleri üretir. Bu skill, kullanıcı CLI aracı için masaüstü kabuk, sistem monitörü, installer, updater, log izleme veya repo otomasyonunda kullanılır.
---

# Skill 10 — Terminal + GUI Hybrid

## Amaç
Bu skill, masaüstü uygulamalarında **Terminal + GUI Hybrid** stilini tutarlı şekilde üretmek için kullanılır. Hedef; UI tasarımını, platforma uygun tasarım tokenlarını, bileşen kurallarını, etkileşimleri ve üretim promptunu tek standart altında toplamaktır.

## Ne zaman kullanılmalı?
- Cli aracı için masaüstü kabuk, sistem monitörü, installer, updater, log izleme veya repo otomasyonunda.
- Uygulamanın ilk izleniminin güçlü ve profesyonel görünmesi istendiğinde.
- Tasarımın tekrar tekrar aynı kalite ve tutarlılıkla üretilmesi gerektiğinde.
- Electron, WPF, WinUI, Avalonia, MAUI, PyQt, Tauri veya web tabanlı masaüstü UI geliştirirken.

## Görsel kimlik
- **Atmosfer:** Grafiksel kontrollerle canlı terminal/log panelini birleştiren teknik ve güven veren masaüstü arayüzleri üretir.
- **Kompozisyon:** Ana ekranı 3 bölgeye ayır: navigasyon, içerik, durum/yardımcı alan.
- **Boşluk:** Minimum 8px grid kullan. Ana bölümler arası 20–32px boşluk bırak.
- **Köşeler:** Modern masaüstü hissi için 12–24px radius kullan.
- **Gölge:** Gölgeyi bilgi hiyerarşisi için kullan; gereksiz karartma yapma.
- **Kontrast:** Başlık, gövde metni, pasif metin ve border seviyeleri net ayrılmalı.

## Renk paleti
- `#0B1220`
- `#111827`
- `#1F2937`
- `#22C55E`
- `#38BDF8`
- `#E5E7EB`

### Renk kullanım kuralları
- Ana arka plan ve yüzey renklerini birbirinden hafif ayır.
- Vurgu rengini sadece ana aksiyon, seçili menü, aktif tab ve önemli veri için kullan.
- Başarı, uyarı ve hata renklerini sistematik kullan; dekoratif amaçla rastgele dağıtma.
- Metin kontrastı düşükse tasarımı estetik kabul etme; önce okunabilirliği düzelt.

## Tipografi
Önerilen fontlar:
- Inter
- JetBrains Mono
- SF Mono

### Hiyerarşi
- **H1 / ekran başlığı:** 28–34px, 600–700 weight.
- **H2 / kart başlığı:** 18–22px, 600 weight.
- **Gövde:** 14–16px, 400–500 weight.
- **Küçük metin:** 12–13px, 400 weight.
- **Chip / badge / kısayol:** 11–12px, 500–600 weight.
- Kod veya terminal içeren yerlerde monospaced font kullan.

## Yerleşim sistemi
1. Sol sidebar: modüller
2. Üst metric kartları: CPU, RAM, disk, durum
3. Ana log console: canlı çıktı
4. Alt command input: komut gir + çalıştır
5. Sağ/alt panel: işlem geçmişi veya uyarılar

### Responsive masaüstü davranışı
- 1280px altı genişlikte ikincil paneli gizlenebilir drawer yap.
- 1440px ve üzeri ekranlarda kart gridini 12 kolon gibi düşün.
- Minimum pencere genişliğinde tablo yerine liste kartları kullanılabilir.
- Uzun içeriklerde yalnızca içerik alanı scroll olmalı; sidebar sabit kalmalı.

## Bileşenler
- **Sidebar item**
- **Metric card**
- **Log console**
- **Command input**
- **Primary action button**
- **Status chip**
- **Chart tile**
- **Progress row**

### Bileşen üretim kuralları
- Her bileşen `default`, `hover`, `active`, `focus`, `disabled`, `loading` durumlarına sahip olmalı.
- Aynı ekranda en fazla 1 adet ana CTA kullan.
- İkincil butonlar düşük kontrastlı ama okunabilir olmalı.
- Kartlar içinde başlık, açıklama, ana değer ve opsiyonel aksiyon düzeni tutarlı kalmalı.
- Tablo/listelerde satır yüksekliği 44–56px aralığında tutulmalı.

## CSS / Tasarım tokenları

```css
:root {
--bg: #0B1220;
--surface: #111827;
--panel: #1F2937;
--success: #22C55E;
--cyan: #38BDF8;
--text: #E5E7EB;
--radius: 16px;
--shadow: 0 18px 48px rgba(0,0,0,.38);
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

.log { font-family:"JetBrains Mono", monospace; background:#050A14; color:#CFFFE0; }
.log-line.error { color:#F87171; }
.log-line.warn { color:#FBBF24; }
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
- Terminal + GUI düzeninde komut girişi, işlem kuyruğu, canlı log, yapılandırma paneli ve sonuç özeti ayrı bölgeler olmalı.
- Terminal çıktısı monospace, satır sarma ve yatay scroll seçenekleriyle kontrol edilmeli; uzun log tüm uygulama layoutunu büyütmemeli.
- GUI aksiyonları çalıştırılacak gerçek komutu preview olarak göstermeli; kullanıcı kopyalayabilmeli.
- İşlem durumları queued/running/success/warning/error/cancelled olarak tokenlaşmalı ve renk + ikon + metinle verilmeli.
- Running state sırasında primary button iptal/durdur aksiyonuna dönüşmeli veya disabled + ayrı cancel butonu sunmalı.
- Log filtreleri info/warn/error/debug ve search ile çalışmalı; hata satırı detay paneline bağlanmalı.
- Komut geçmişi, environment seçimi ve çalışma dizini görünür olmalı; kritik komutlar onay istemeli.
- Terminal alanı klavye odaklı kalmalı ama GUI kontrolleri tab order içinde erişilebilir olmalı.

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
Terminal + GUI hybrid masaüstü arayüzü tasarla. Koyu sistem monitörü görünümü, üstte metric kartları, ortada canlı log terminali, altta komut inputu, mavi/yeşil vurgu renkleri ve teknik güven hissi olsun.
Tasarımı gerçek bir masaüstü uygulaması gibi üret. Bileşenleri token tabanlı oluştur. Hover, active, focus, disabled, loading ve empty state durumlarını unutma. Web/Electron hedefinde CSS değişkenleriyle; native desktop hedefinde theme/resource/token sınıflarıyla tema yönetimi yap. Kod üretirken erişilebilirlik, klavye kullanımı ve responsive masaüstü davranışını da ekle.
```

## Kabul kriterleri
- Stil, başlıktaki tasarım yaklaşımını açıkça yansıtıyor.
- En az sidebar/topbar/içerik alanı veya o stile uygun eşdeğer ana bölgeler var.
- Platforma uygun tasarım tokenları kullanılmış.
- Bileşen durumları eksik değil.
- Renk, spacing, radius ve shadow sistemi tutarlı.
- Tasarım hem 1366×768 hem de 1920×1080 masaüstü çözünürlükte bozulmuyor.



---
name: windows-forms-app-ui
description: Klasik Windows Forms uygulamalarını modern, düzenli, okunabilir ve üretilebilir masaüstü arayüzlerine dönüştürür. Bu skill; VB.NET veya C# WinForms projelerinde panel, sidebar, toolbar, DataGridView, form, dialog, status bar ve kullanıcı dostu iş uygulaması ekranları tasarlamak için kullanılır.
---

# Skill 11 — Windows Forms App UI

## Amaç
Bu skill, **Windows Forms App** projelerinde klasik WinForms yapısını modern ve profesyonel göstermek için kullanılır. Hedef; sürükle-bırak form yapısına uygun, kolay kodlanabilir, okunabilir, performanslı ve kurumsal masaüstü arayüzleri üretmektir.

Bu skill özellikle **VB.NET WinForms**, **C# WinForms**, kurum içi yönetim panelleri, veri giriş uygulamaları, raporlama araçları, SQLite tabanlı masaüstü uygulamaları ve küçük yardımcı araçlar için uygundur.

## Ne zaman kullanılmalı?
- Proje hedefi doğrudan `Windows Forms App` ise.
- Kullanıcı basit, hızlı, stabil ve Windows üzerinde çalışan bir masaüstü uygulaması istiyorsa.
- Uygulamada çok sayıda form, tablo, kayıt, liste, ayar ekranı veya rapor ekranı varsa.
- VB.NET veya C# ile `Panel`, `UserControl`, `DataGridView`, `FlowLayoutPanel`, `TableLayoutPanel` gibi standart kontroller kullanılacaksa.
- Çok modern ama karmaşık framework gerektirmeyen bir Windows masaüstü UI isteniyorsa.

## Görsel kimlik
- **Atmosfer:** Sade, kurumsal, temiz, güven veren ve hızlı kullanılabilir.
- **Tasarım yaklaşımı:** Klasik WinForms hissini azalt; panel tabanlı, kartlı ve sidebar destekli modern düzen kur.
- **Ana hedef:** Fazla dekorasyon değil, net hiyerarşi, okunabilir tablo, hızlı işlem ve tutarlı bileşenler.
- **Köşeler:** Standart WinForms kontrolleri köşeli olsa bile özel panel, buton ve kartlarda 6–12px radius hissi oluşturulabilir.
- **Boşluk:** Form içinde kontrolleri sıkıştırma. 8px grid mantığı kullan.
- **Kontrast:** Açık arka plan + koyu metin + tek ana vurgu rengi kullan.
- **Windows uyumu:** Uygulama Windows’un doğal davranışına ters düşmemeli; klavye navigasyonu, tab order, focus state ve ölçeklendirme desteklenmeli.

## Renk paleti
Temel açık kurumsal palet:

- `#F5F7FA` — ana form arka planı
- `#FFFFFF` — kart / panel yüzeyi
- `#E5E7EB` — border / ayırıcı çizgi
- `#2563EB` — ana vurgu / birincil buton
- `#1F2937` — ana metin
- `#6B7280` — ikincil metin
- `#10B981` — başarılı durum
- `#F59E0B` — uyarı durumu
- `#EF4444` — hata durumu

Alternatif koyu WinForms paleti:

- `#111827` — ana arka plan
- `#1F2937` — panel yüzeyi
- `#374151` — border
- `#60A5FA` — vurgu
- `#F9FAFB` — ana metin
- `#9CA3AF` — ikincil metin

### Renk kullanım kuralları
- Ana aksiyonlar için yalnızca bir vurgu rengi kullan.
- Silme, hata ve kritik işlemleri kırmızı ile ayır.
- DataGridView satırlarında zebra renk kullan: beyaz + çok açık gri.
- Seçili satır rengi çok koyu olmamalı; metin okunabilir kalmalı.
- Form arka planı ile kart/panel yüzeyi arasında hafif kontrast bırak.

## Tipografi
Önerilen fontlar:

- **Segoe UI** — Windows için en doğal seçenek.
- **Segoe UI Variable** — destekleniyorsa modern Windows görünümü verir.
- **Microsoft Sans Serif** — eski sistem uyumluluğu gerekiyorsa.

### Hiyerarşi
- **Form başlığı:** 18–22px, `FontStyle.Bold`
- **Bölüm başlığı:** 14–16px, `FontStyle.Bold`
- **Normal metin:** 9–10.5pt, Regular
- **Buton metni:** 9–10pt, Semibold/Bold hissi
- **Tablo başlığı:** 9–10pt, Bold
- **Yardımcı açıklama:** 8–9pt, Regular, gri ton

### WinForms notu
WinForms’ta px yerine çoğunlukla point kullanılır. Varsayılan olarak `Segoe UI, 9F` iyi başlangıçtır. Başlıklarda `Segoe UI, 14F, Bold` kullanılabilir.

## Yerleşim sistemi
Önerilen ana uygulama düzeni:

1. **Sol Sidebar:** Modül menüsü, ikon + metin, aktif menü vurgusu.
2. **Üst Header:** Sayfa başlığı, arama kutusu, kullanıcı bilgisi, hızlı butonlar.
3. **İçerik Alanı:** Kartlar, tablo, form veya rapor alanı.
4. **Sağ Detay Paneli:** Seçili kayıt detayları, filtreler veya işlem paneli.
5. **Alt Status Bar:** Bağlantı durumu, kayıt sayısı, son işlem, versiyon bilgisi.

### WinForms layout önerileri
- Ana formda `Panel` veya `TableLayoutPanel` ile iskelet kur.
- Sol menü için `Panel dock = Left` kullan.
- Header için `Panel dock = Top` kullan.
- İçerik alanı için `Panel dock = Fill` kullan.
- Dinamik kartlar için `FlowLayoutPanel` kullan.
- Form alanları için `TableLayoutPanel` kullan; label/input hizasını bozmamak için idealdir.
- Çok sekmeli işlerde `TabControl` kullanılabilir ama yoğun görünürse yerine sidebar + UserControl geçişi tercih edilir.

## Bileşenler

### 1. Ana Form Shell
- Border, title bar ve icon düzgün olmalı.
- Minimum boyut tanımlanmalı.
- İçerik taşmasını önlemek için `AutoScaleMode = Dpi` veya `Font` dikkatli ayarlanmalı.
- Uygulama açılışında pencere ortalanmalı.

### 2. Sidebar Menü
- Aktif menüde sol çizgi veya açık mavi arka plan kullan.
- Menü item yüksekliği 44–48px olmalı.
- İkon + metin arası 10–12px boşluk olmalı.
- Hover durumunda çok hafif arka plan değişimi kullanılmalı.

### 3. Header / Toolbar
- Sayfa başlığı solda, aksiyonlar sağda olmalı.
- Arama kutusu header içinde konumlandırılabilir.
- `ToolStrip` yerine modern görünüm için özel `Panel + Button + TextBox` tercih edilebilir.

### 4. Kart Panel
- Standart `Panel` ile yapılabilir.
- Border için `Paint` event veya özel `RoundedPanel` kullanılabilir.
- İç boşluk 16–20px olmalı.
- KPI kartlarında başlık, değer, küçük açıklama ve ikon düzeni sabit olmalı.

### 5. DataGridView
- Kurumsal WinForms uygulamalarının ana bileşenidir.
- Header rengi, satır yüksekliği, seçili satır, grid çizgileri ve zebra arka plan mutlaka düzenlenmeli.
- Varsayılan mavi seçili satır rengi yerine uygulama vurgu rengine uygun daha yumuşak renk kullanılmalı.

### 6. Form Giriş Alanları
- Label solda, input sağda hizalanmalı.
- Zorunlu alanlarda label yanında `*` veya küçük uyarı kullanılmalı.
- Hata mesajları input altında kırmızı küçük metinle gösterilmeli.
- Kaydet / İptal butonları formun sağ altında olmalı.

### 7. Dialog / Modal Form
- Kısa, odaklı ve tek amaçlı olmalı.
- Başlık, açıklama, içerik ve buton alanı net ayrılmalı.
- Kritik işlemlerde varsayılan buton yanlışlıkla tehlikeli işlem yapmamalı.

### 8. Status Bar
- Alt bölümde bağlantı, kayıt sayısı, işlem durumu ve versiyon bilgisi gösterilebilir.
- Çok dikkat çekmemeli; bilgi destek alanı olarak kalmalı.

## CSS yerine WinForms tasarım tokenları
WinForms CSS kullanmaz. Bu yüzden renk, ölçü ve font değerlerini merkezi bir sınıfta tut.

### C# örnek token sınıfı

```csharp
public static class UiTokens
{
    public static readonly Color Bg = ColorTranslator.FromHtml("#F5F7FA");
    public static readonly Color Surface = Color.White;
    public static readonly Color Border = ColorTranslator.FromHtml("#E5E7EB");
    public static readonly Color Primary = ColorTranslator.FromHtml("#2563EB");
    public static readonly Color Text = ColorTranslator.FromHtml("#1F2937");
    public static readonly Color MutedText = ColorTranslator.FromHtml("#6B7280");
    public static readonly Color Success = ColorTranslator.FromHtml("#10B981");
    public static readonly Color Warning = ColorTranslator.FromHtml("#F59E0B");
    public static readonly Color Danger = ColorTranslator.FromHtml("#EF4444");

    public static readonly Font FontBase = new Font("Segoe UI", 9F, FontStyle.Regular);
    public static readonly Font FontTitle = new Font("Segoe UI", 16F, FontStyle.Bold);
    public static readonly Font FontSection = new Font("Segoe UI", 11F, FontStyle.Bold);

    public const int SpaceXs = 6;
    public const int SpaceSm = 8;
    public const int SpaceMd = 12;
    public const int SpaceLg = 16;
    public const int SpaceXl = 24;
}
```

### VB.NET örnek token modülü

```vbnet
Imports System.Drawing

Public Module UiTokens
    Public ReadOnly Bg As Color = ColorTranslator.FromHtml("#F5F7FA")
    Public ReadOnly Surface As Color = Color.White
    Public ReadOnly Border As Color = ColorTranslator.FromHtml("#E5E7EB")
    Public ReadOnly Primary As Color = ColorTranslator.FromHtml("#2563EB")
    Public ReadOnly Text As Color = ColorTranslator.FromHtml("#1F2937")
    Public ReadOnly MutedText As Color = ColorTranslator.FromHtml("#6B7280")
    Public ReadOnly Success As Color = ColorTranslator.FromHtml("#10B981")
    Public ReadOnly Warning As Color = ColorTranslator.FromHtml("#F59E0B")
    Public ReadOnly Danger As Color = ColorTranslator.FromHtml("#EF4444")

    Public ReadOnly FontBase As New Font("Segoe UI", 9.0F, FontStyle.Regular)
    Public ReadOnly FontTitle As New Font("Segoe UI", 16.0F, FontStyle.Bold)
    Public ReadOnly FontSection As New Font("Segoe UI", 11.0F, FontStyle.Bold)

    Public Const SpaceXs As Integer = 6
    Public Const SpaceSm As Integer = 8
    Public Const SpaceMd As Integer = 12
    Public Const SpaceLg As Integer = 16
    Public Const SpaceXl As Integer = 24
End Module
```

## Örnek ana form iskeleti

### C# ana shell mantığı

```csharp
public partial class MainForm : Form
{
    private Panel sidebar;
    private Panel header;
    private Panel content;
    private StatusStrip statusBar;

    public MainForm()
    {
        InitializeComponent();
        BuildShell();
    }

    private void BuildShell()
    {
        Text = "Modern WinForms App";
        MinimumSize = new Size(1100, 700);
        StartPosition = FormStartPosition.CenterScreen;
        AutoScaleMode = AutoScaleMode.Dpi;
        BackColor = UiTokens.Bg;
        Font = UiTokens.FontBase;

        sidebar = new Panel
        {
            Dock = DockStyle.Left,
            Width = 240,
            BackColor = UiTokens.Surface,
            Padding = new Padding(12)
        };

        header = new Panel
        {
            Dock = DockStyle.Top,
            Height = 72,
            BackColor = UiTokens.Bg,
            Padding = new Padding(20, 12, 20, 12)
        };

        content = new Panel
        {
            Dock = DockStyle.Fill,
            BackColor = UiTokens.Bg,
            Padding = new Padding(20)
        };

        statusBar = new StatusStrip
        {
            BackColor = UiTokens.Surface,
            SizingGrip = false
        };
        statusBar.Items.Add("Hazır");

        Controls.Add(content);
        Controls.Add(header);
        Controls.Add(sidebar);
        Controls.Add(statusBar);
    }
}
```

### VB.NET ana shell mantığı

```vbnet
Public Class MainForm
    Private sidebar As Panel
    Private header As Panel
    Private content As Panel
    Private statusBar As StatusStrip

    Private Sub MainForm_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        BuildShell()
    End Sub

    Private Sub BuildShell()
        Me.Text = "Modern WinForms App"
        Me.MinimumSize = New Size(1100, 700)
        Me.StartPosition = FormStartPosition.CenterScreen
        Me.AutoScaleMode = AutoScaleMode.Dpi
        Me.BackColor = UiTokens.Bg
        Me.Font = UiTokens.FontBase

        sidebar = New Panel With {
            .Dock = DockStyle.Left,
            .Width = 240,
            .BackColor = UiTokens.Surface,
            .Padding = New Padding(12)
        }

        header = New Panel With {
            .Dock = DockStyle.Top,
            .Height = 72,
            .BackColor = UiTokens.Bg,
            .Padding = New Padding(20, 12, 20, 12)
        }

        content = New Panel With {
            .Dock = DockStyle.Fill,
            .BackColor = UiTokens.Bg,
            .Padding = New Padding(20)
        }

        statusBar = New StatusStrip With {
            .BackColor = UiTokens.Surface,
            .SizingGrip = False
        }
        statusBar.Items.Add("Hazır")

        Me.Controls.Add(content)
        Me.Controls.Add(header)
        Me.Controls.Add(sidebar)
        Me.Controls.Add(statusBar)
    End Sub
End Class
```

## DataGridView standardı

### C#

```csharp
private void StyleGrid(DataGridView grid)
{
    grid.BorderStyle = BorderStyle.None;
    grid.BackgroundColor = UiTokens.Surface;
    grid.EnableHeadersVisualStyles = false;
    grid.ColumnHeadersBorderStyle = DataGridViewHeaderBorderStyle.None;
    grid.ColumnHeadersDefaultCellStyle.BackColor = ColorTranslator.FromHtml("#F3F4F6");
    grid.ColumnHeadersDefaultCellStyle.ForeColor = UiTokens.Text;
    grid.ColumnHeadersDefaultCellStyle.Font = new Font("Segoe UI", 9F, FontStyle.Bold);
    grid.ColumnHeadersHeight = 42;

    grid.DefaultCellStyle.BackColor = UiTokens.Surface;
    grid.DefaultCellStyle.ForeColor = UiTokens.Text;
    grid.DefaultCellStyle.SelectionBackColor = ColorTranslator.FromHtml("#DBEAFE");
    grid.DefaultCellStyle.SelectionForeColor = UiTokens.Text;
    grid.DefaultCellStyle.Font = UiTokens.FontBase;
    grid.RowTemplate.Height = 44;

    grid.AlternatingRowsDefaultCellStyle.BackColor = ColorTranslator.FromHtml("#F9FAFB");
    grid.GridColor = UiTokens.Border;
    grid.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
    grid.MultiSelect = false;
    grid.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
}
```

### VB.NET

```vbnet
Private Sub StyleGrid(grid As DataGridView)
    grid.BorderStyle = BorderStyle.None
    grid.BackgroundColor = UiTokens.Surface
    grid.EnableHeadersVisualStyles = False
    grid.ColumnHeadersBorderStyle = DataGridViewHeaderBorderStyle.None
    grid.ColumnHeadersDefaultCellStyle.BackColor = ColorTranslator.FromHtml("#F3F4F6")
    grid.ColumnHeadersDefaultCellStyle.ForeColor = UiTokens.Text
    grid.ColumnHeadersDefaultCellStyle.Font = New Font("Segoe UI", 9.0F, FontStyle.Bold)
    grid.ColumnHeadersHeight = 42

    grid.DefaultCellStyle.BackColor = UiTokens.Surface
    grid.DefaultCellStyle.ForeColor = UiTokens.Text
    grid.DefaultCellStyle.SelectionBackColor = ColorTranslator.FromHtml("#DBEAFE")
    grid.DefaultCellStyle.SelectionForeColor = UiTokens.Text
    grid.DefaultCellStyle.Font = UiTokens.FontBase
    grid.RowTemplate.Height = 44

    grid.AlternatingRowsDefaultCellStyle.BackColor = ColorTranslator.FromHtml("#F9FAFB")
    grid.GridColor = UiTokens.Border
    grid.SelectionMode = DataGridViewSelectionMode.FullRowSelect
    grid.MultiSelect = False
    grid.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill
End Sub
```

## Yuvarlatılmış panel / modern kart yaklaşımı
WinForms standart `Panel` doğrudan radius desteklemez. Bunun için özel kontrol kullanılabilir.

### C# RoundedPanel örneği

```csharp
public class RoundedPanel : Panel
{
    public int Radius { get; set; } = 12;
    public Color BorderColor { get; set; } = ColorTranslator.FromHtml("#E5E7EB");

    protected override void OnPaint(PaintEventArgs e)
    {
        base.OnPaint(e);
        e.Graphics.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

        using var path = new System.Drawing.Drawing2D.GraphicsPath();
        int d = Radius * 2;
        path.AddArc(0, 0, d, d, 180, 90);
        path.AddArc(Width - d - 1, 0, d, d, 270, 90);
        path.AddArc(Width - d - 1, Height - d - 1, d, d, 0, 90);
        path.AddArc(0, Height - d - 1, d, d, 90, 90);
        path.CloseFigure();

        Region = new Region(path);
        using var pen = new Pen(BorderColor, 1);
        e.Graphics.DrawPath(pen, path);
    }
}
```

## Etkileşim kuralları
- Hover durumunda buton/panel arka planı çok hafif değişmeli.
- Aktif sidebar item belirgin olmalı ama göz yormamalı.
- Focus state mutlaka görünür olmalı; klavye ile kullanım desteklenmeli.
- Tab sırası mantıklı olmalı: soldan sağa, yukarıdan aşağıya.
- Kaydetme, silme, güncelleme gibi işlemlerde status bar veya toast benzeri küçük bildirim gösterilmeli.
- Uzun işlemlerde buton disabled olmalı ve progress/loader görünmeli.
- Silme ve kritik işlemler için onay dialog’u kullanılmalı.

## Yap
- `TableLayoutPanel` ve `Dock` kullanarak esnek layout kur.
- Renk, font ve boşlukları merkezi token sınıfında tut.
- DataGridView varsayılan görünümünü mutlaka özelleştir.
- Sidebar + header + content + status bar düzeniyle net uygulama kabuğu oluştur.
- UserControl tabanlı ekran geçişi kullan.
- Her formda minimum boyut ve düzgün tab order ayarla.
- Kurumsal uygulamalarda açık tema, yüksek okunabilirlik ve net kontrast kullan.

## Yapma
- Tüm kontrolleri form üzerine rastgele konumlandırma.
- Varsayılan gri WinForms görünümünü değiştirmeden bırakma.
- Çok fazla renk, gölge veya ikon kullanma.
- Her ekran için farklı font ve farklı buton stili kullanma.
- DataGridView’i küçük satır yüksekliği ve sıkışık kolonlarla bırakma.
- Designer dosyasını gereksiz elle düzenleme; özel kodları ayrı sınıf/metotlarda tut.
- Kritik işlemleri onaysız çalıştırma.

## Derinleştirme kontrol listesi
- Ana shell `sidebar + header + content + detail/filter panel + status bar` düzenini desteklemeli; küçük uygulamada detail panel opsiyonel olmalı.
- Her form `MinimumSize`, `StartPosition`, `AutoScaleMode`, `Font`, `AcceptButton`, `CancelButton` ve mantıklı `TabIndex` değerleriyle başlamalı.
- .NET Framework hedefleniyorsa high DPI için manifest/app.config tarafında Windows 10 uyumluluğu ve `DpiAwareness=PerMonitorV2` planlanmalı; .NET 6+ hedefleniyorsa proje/application ayarları kontrol edilmeli.
- `Application.EnableVisualStyles()` giriş noktasında ilk çağrılardan biri olmalı; eski görünümlü kontroller bilinçli tercih olmadıkça bırakılmamalı.
- `AccessibleName`, `AccessibleDescription` ve `AccessibleRole` özellikle icon-only butonlar, custom panel butonları, grid ve dialog kontrollerinde atanmalı.
- Primary, secondary, danger, ghost button stilleri tek yardımcı metot veya custom control üzerinden üretilmeli.
- TextBox, ComboBox, DateTimePicker ve NumericUpDown için label hizası, error label, required işareti ve disabled görünümü standartlaşmalı.
- DataGridView kolon türleri için ayrı standart olmalı: text, number, date, status badge, action button, checkbox.
- Uzun işlemde ilgili buton disabled olmalı, cursor/progress/status bar mesajı görünmeli ve işlem bitince focus anlamlı kontrole dönmeli.
- Dialog formları tek amaçlı olmalı; silme gibi destructive işlemlerde varsayılan focused buton güvenli seçenek olmalı.

## WinForms kontrol standardı
- `ModernButton`: `Variant = Primary | Secondary | Danger | Ghost`, 36-40px yükseklik, net focus rectangle, disabled alpha.
- `SidebarItem`: 44-48px yükseklik, sol accent çizgisi veya açık mavi aktif yüzey, icon + text arası 10-12px.
- `MetricCard`: başlık, değer, açıklama, durum ikonu ve opsiyonel küçük trend alanı.
- `FormFieldRow`: label, input, required marker, validation text; `TableLayoutPanel` içinde hizalı kullanılmalı.
- `StatusBadge`: success/warning/danger/info varyantları; yalnızca renkle değil kısa metinle de durum anlatmalı.
- `EmptyStatePanel`: başlık, kısa açıklama ve bağlamsal aksiyon butonu içermeli.
- `AppStatusBar`: bağlantı, kayıt sayısı, son işlem ve versiyon bilgisi gibi düşük öncelikli bilgileri taşımalı.

## Platform uyarlama notları
- WinForms modern görünümde sınırlıdır; radius, border ve hover için custom control veya Paint event gerekir.
- Çok gölge, blur ve animasyon WinForms'ta pahalı ve kırılgan olabilir; kurumsal uygulamada opak yüzey, net border ve tutarlı spacing daha güvenlidir.
- Designer dosyası layout için kullanılabilir ama tema/stil kodu `UiTokens`, `UiStyles`, custom control ve helper metotlarda tutulmalı.
- 125%, 150% ve çoklu monitör DPI senaryoları elle test edilmeli; sabit pixel konumlandırma yerine `Dock`, `Anchor`, `TableLayoutPanel`, `FlowLayoutPanel` tercih edilmeli.

## AI üretim promptu
Aşağıdaki prompt, bu skill’e göre WinForms arayüz üretmek için kullanılabilir:

```text
VB.NET/C# Windows Forms App için modern, sade ve kurumsal bir masaüstü arayüz tasarla. Sol tarafta 240px genişliğinde sidebar, üstte 72px header, ortada kartlı içerik alanı ve altta status bar olsun. Renk paleti #F5F7FA arka plan, #FFFFFF panel, #E5E7EB border, #2563EB vurgu, #1F2937 ana metin üzerine kurulsun. Font Segoe UI olsun. DataGridView modernleştirilsin: 44px satır yüksekliği, açık header, zebra satırlar, yumuşak seçili satır rengi. Kodda renk/font/spacing değerlerini UiTokens sınıfında topla. Layout için Dock, TableLayoutPanel, FlowLayoutPanel ve UserControl yaklaşımı kullan. Gereksiz karmaşık animasyon kullanma; okunabilirlik, net hiyerarşi ve hızlı kullanım öncelikli olsun.
```

## Kabul kriterleri
- Uygulama klasik WinForms gibi dağınık değil, modern ve düzenli görünmeli.
- Tüm renk, font ve spacing değerleri merkezi token sınıfı/modülü üzerinden yönetilmeli.
- Sidebar, header, içerik ve status bar düzeni net olmalı.
- DataGridView varsayılan görünümden çıkarılmış olmalı.
- Form 125% ve 150% Windows ölçeklendirmede bozulmamalı.
- Kullanıcı klavye ile formda gezinebilmeli.
- Kod C# veya VB.NET hedef diline göre üretilebilmeli.

## Uygulanabilecek uygulama türleri
- Kurum içi kayıt takip uygulaması
- DSİ / teknik rapor yönetim aracı
- SQLite tabanlı bütçe veya abonelik takip uygulaması
- Kural / skill / plugin yöneticisi
- Dosya analiz ve temizlik uygulaması
- Hakediş, metraj veya rapor hazırlama aracı
- Basit CRM / stok / personel takip uygulaması

## Not
Bu skill, seçilen tasarımı eksiksiz üretmek için görsel ve teknik yönlendirme sağlar. WinForms CSS kullanmadığı için bu dosyada CSS yerine **tasarım tokenları, kontrol stilleri ve C#/VB.NET örnekleri** verilmiştir.


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


---
name: workspace-ui
description: Dosya agaci, sekmeler, editor/detail alani, inspector paneli ve alt log/status paneli olan yogun masaustu calisma alani arayuzleri uretir. Codex, Claude Code, OpenCode, kural yoneticisi ve proje editorleri icin kullanilir.
---

# Skill 13 - Workspace UI

## Amac
Bu skill, kompleks is akislari icin **Workspace UI** tasarlamakta kullanilir. Hedef; dosya/proje navigasyonu, acik sekmeler, duzenleme alani, ayar/inspector paneli, terminal/log ve status bar gibi bolgeleri tutarli bir masaustu calisma ortamina yerlestirmektir.

Bu stil HTML oyun alanindaki `Workspace UI` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- Codex, Claude Code, OpenCode veya agent kurallari yoneten uygulamalar.
- Proje, dosya, prompt, skill, plugin veya konfigurasyon editorleri.
- Kullanici ayni anda gezinme, duzenleme, onizleme, terminal/log ve ayar paneli gorecekse.
- VS Code benzeri ama daha urune ozel bir workbench deneyimi isteniyorsa.

## Gorsel kimlik
- **Atmosfer:** Uretkenlik odakli, yogun ama kontrollu, profesyonel calisma ortami.
- **Kompozisyon:** Activity/navigation, file tree, tabbed editor, inspector, bottom panel, status bar.
- **Bosluk:** Yogun UI icin 4/8px grid; kart dashboard gibi genis bosluklardan kacin.
- **Kose:** Workbench bolgelerinde 4-8px; modallar ve kartlarda 8-12px.
- **Kontrast:** Panel ayrimlari border, arka plan tonu ve aktif state ile okunmali.
- **Yogunluk:** Mouse/keyboard oncelikli masaustu icin 28-40px satir yukseklikleri kullanilabilir.

## Renk paleti
- `#0F172A` - dark shell
- `#111827` - panel
- `#1F2937` - raised panel
- `#334155` - border
- `#6366F1` - primary
- `#22C55E` - success
- `#F97316` - warning
- `#E5E7EB` - text
- `#94A3B8` - muted

## Tipografi
- **UI:** Inter, Segoe UI, system-ui
- **Kod/path:** JetBrains Mono, Fira Code, SF Mono
- **Baslik:** 13-16px, 700
- **Panel label:** 10-11px, uppercase, 700
- **Editor/log:** 12-13px monospace

## Yerlesim sistemi
1. Activity rail: 48-56px icon navigation.
2. Explorer/sidebar: 220-280px file/project tree.
3. Editor tabs: 32-40px yukseklik, dirty state ve close icon.
4. Main editor/detail: fill area, scroll sadece editor icinde.
5. Inspector/settings panel: 300-420px, secili oge ayarlari.
6. Bottom panel: terminal, output, problems, event log tabs.
7. Status bar: branch, errors, sync, model, workspace path.

## Bilesenler
- Activity rail item
- File tree item
- Editor tab
- Breadcrumb
- Split editor group
- Inspector form row
- Problems/output panel
- Terminal/log panel
- Status bar item
- Command palette trigger
- Dirty state badge
- Empty editor state

## Tasarim tokenlari

```css
:root {
  --ws-bg: #0f172a;
  --ws-panel: #111827;
  --ws-panel-2: #1f2937;
  --ws-border: #334155;
  --ws-text: #e5e7eb;
  --ws-muted: #94a3b8;
  --ws-primary: #6366f1;
  --ws-success: #22c55e;
  --ws-warning: #f97316;
  --ws-danger: #ef4444;
  --ws-row: 32px;
  --ws-radius: 8px;
  --ws-space: 8px;
}

.workspace-shell {
  display: grid;
  grid-template-columns: 52px 260px minmax(0, 1fr) 360px;
  grid-template-rows: 40px minmax(0, 1fr) 180px 24px;
  background: var(--ws-bg);
  color: var(--ws-text);
}
```

## Etkilesim kurallari
- Paneller resize edilebilir olmali; min/default/max genislikler tanimlanmali.
- Sekmeler klavye ile gezilebilir, kapanabilir ve dirty state kaybolmadan gorunmelidir.
- Dosya agacinda secili, hover, focus, expanded ve modified durumlari ayri gorunmeli.
- Inspector paneli secili oge yokken empty state gostermeli.
- Bottom panel terminal/output/problems arasinda tab ile gecis yapmali.
- Status bar global bilgi solda, baglamsal bilgi sagda olacak sekilde ayrilmali.
- Kapatilan panel geri getirilebilir olmali; kullanici layoutu kilitlememeli.

## Yap
- Workbench bolgelerini ayni border ve spacing sistemiyle kur.
- Log, terminal ve editor icin monospace kullan; genel UI metninde sans fonta don.
- Panel basliklarina kisa toolbar aksiyonlari ekle.
- Komut paletini tum bolgeler icin ortak aksiyon yuzeyi yap.
- Empty, loading, unsaved, error ve disconnected durumlarini tasarla.

## Yapma
- Her paneli kart gibi kalin shadow ile ayirma.
- Status bar'i reklam veya uzun metin alani gibi kullanma.
- Inspector panelini ana icerigin yerine gecirme.
- Dosya agacinda cok buyuk satir yuksekligi kullanma.
- Kaydedilmemis degisiklikleri yalnizca renk ile belirtme.

## AI uretim promptu

```text
Workspace UI stilinde yogun bir masaustu calisma alani tasarla. Solda activity rail ve file tree, ortada tabbed editor/detail alani, sagda inspector/settings paneli, altta terminal-output-problems paneli ve en altta status bar olsun. Panel resize, tab dirty state, empty state, error state, keyboard navigation ve command palette trigger desteklensin. Tokenlar dark shell, panel, border, text, muted, primary, row height, radius ve spacing olarak merkezi tanimlansin.
```

## Kabul kriterleri
- Activity rail, sidebar, editor, inspector, bottom panel ve status bar ayrimi net.
- Her panelin kendi scroll davranisi var.
- Sekme, dirty state ve secili dosya durumu gorunuyor.
- Klavye/focus akisi workbench icinde kesintisiz.
- 1366x768 ve 1920x1080 masaustu ekranlarda yogunluk bozulmuyor.



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



---
name: data-table-admin-ui
description: Filtrelenebilir veri tablolari, arama, status badge, bulk action, pagination ve detay paneli olan yogun admin arayuzleri uretir.
---

# Skill 15 - Data Table Admin UI

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



---
name: ai-chat-tool-panel-ui
description: Sol sohbet alani ve sag arac/parametre paneli olan AI destekli uretim, slayt, cheatsheet, kod ve belge arayuzleri uretir.
---

# Skill 16 - AI Chat + Tool Panel UI

## Amac
Bu skill, **AI Chat + Tool Panel UI** biciminde sohbet ve arac kontrolunu ayni ekranda birlestiren arayuzler uretir. Hedef; kullanicinin dogal dil ile AI'a talimat verirken, sag panelde parametreleri, export ayarlarini, kaynaklari ve calisma sonucunu yonetebilmesidir.

Bu stil HTML oyun alanindaki `AI Chat + Tool Panel UI` tasarimina karsilik gelir.

## Ne zaman kullanilmali?
- AI kodlama asistani, smart_slayt, cheatsheet generator, prompt builder, rapor uretici.
- Sohbet + tool call + preview/export akisi gerekiyorsa.
- Kullanici hem konusma gecmisini hem de model/format/kaynak ayarlarini ayni anda gormek istiyorsa.
- Agent workflow, RAG paneli, belge/slayt uretim araci veya developer assistant tasarlanirken.

## Gorsel kimlik
- **Atmosfer:** Akilli, uretken, odakli, iki panelli.
- **Kompozisyon:** Sol chat stream, alt composer, sag tool settings, source/output paneli.
- **Bosluk:** Chat mesajlari 12-16px gap; tool panel form rows 10-14px gap.
- **Kose:** Chat bubble 12-18px; tool cards 8-12px.
- **Kontrast:** AI, user, system, tool result mesajlari ayrilmali.
- **Geri bildirim:** Streaming, thinking, tool running, success, blocked ve error durumlari net olmali.

## Renk paleti
- `#F8FAFC` - app bg
- `#FFFFFF` - chat surface
- `#F1F5F9` - user bubble
- `#EEF2FF` - AI/tool highlight
- `#4F46E5` - primary
- `#0F172A` - text
- `#64748B` - muted
- `#10B981` - success
- `#F59E0B` - tool running
- `#EF4444` - error

## Tipografi
- **Chat message:** 13-15px, 1.45 line-height
- **Tool label:** 11-12px, 600
- **Code/tool output:** monospace, 12-13px
- **Timestamp/meta:** 10-11px
- **Primary action:** 12-13px, 700

## Yerlesim sistemi
1. Chat header: conversation title, model, status, new chat.
2. Chat stream: user, assistant, system, tool result messages.
3. Composer: input, attach, voice/shortcut, send, stop.
4. Tool panel: model, temperature, format, source, export settings.
5. Preview/export: generated artifact, download/copy/open actions.
6. Activity/status: token usage, running tool, error summary.

## Bilesenler
- Chat message bubble
- Streaming cursor
- Tool call card
- Source citation chip
- Composer input
- Attachment button
- Send/stop button
- Model selector
- Temperature slider
- Format radio group
- Export settings panel
- Preview card
- Usage meter
- Error/retry banner

## Tasarim tokenlari

```css
:root {
  --ai-bg: #f8fafc;
  --ai-surface: #ffffff;
  --ai-panel: #f1f5f9;
  --ai-assistant: #eef2ff;
  --ai-border: #e2e8f0;
  --ai-text: #0f172a;
  --ai-muted: #64748b;
  --ai-primary: #4f46e5;
  --ai-success: #10b981;
  --ai-warning: #f59e0b;
  --ai-danger: #ef4444;
  --ai-radius: 14px;
  --ai-gap: 14px;
}
```

## Etkilesim kurallari
- Enter/Shift+Enter davranisi net olmali.
- Streaming sirasinda send butonu stop/cancel aksiyonuna donmeli.
- Tool call calisirken durum karti gorunmeli; tamamlaninca sonuc ozetlenmeli.
- Kullanici kaynak/format/model degistirince yeni yanita etkisi belli olmali.
- Hata durumunda retry, edit prompt veya fallback model aksiyonu sunulmali.
- Uzun chat'te composer sticky kalmali.
- Sag panel dar ekranda drawer veya tab olarak acilmali.

## Yap
- Sohbet ve tool ayarlarini birbirine bagla; panel sadece dekor olmasin.
- AI mesajlarinda kaynak, tool sonucu ve aksiyonlari ayrik goster.
- Copy/export/download aksiyonlarini gorunur tut.
- Token/limit ve privacy durumlarini sakince belirt.
- Empty state'te ornek promptlar sun.

## Yapma
- Tum ayarlari chat icine gommek.
- Tool calisirken kullaniciyi sessiz bekletmek.
- Error'u sadece kirmizi toast ile gostermek.
- Uzun yanitlarda composer'i ekran disina itmek.
- Model/format degisikligini kaydetmeden kaybolacak sekilde tasarlamak.

## AI uretim promptu

```text
AI Chat + Tool Panel UI stilinde iki panelli bir masaustu arayuzu tasarla. Solda chat header, mesaj akisi, streaming state ve sticky composer; sagda model selector, temperature slider, kaynak secimi, output format radio group, export ayarlari, preview ve download/copy aksiyonlari olsun. Tool running, success, error, retry, empty state ve stop generating durumlarini ekle.
```

## Kabul kriterleri
- Sol chat ve sag tool paneli ayni is akisini destekliyor.
- Streaming, tool call, error ve retry durumlari var.
- Composer sticky ve klavye davranisi net.
- Export/copy/download aksiyonlari gorunur.
- Dar pencerede sag panel davranisi tanimli.



---
name: classic-windows-form-ui
description: Windows 95/98/2000 donemi retro masaustu estetigini, gri 3D cerceveleri, inset/outset kontrolleri ve legacy form davranisini bilincli olarak yeniden uretir.
---

# Skill 17 - Classic Windows Form UI

## Amac
Bu skill, modern WinForms standardindan farkli olarak **Classic Windows Form UI** yani retro/legacy Windows form estetigini tasarlamak icin kullanilir. Hedef; nostaljik, sistem araci hissi veren, piksel netliginde, 3D border'li ve sade form panelleri uretmektir.

Bu stil HTML oyun alanindaki `Classic Windows Form` tasarimina karsilik gelir. Modern kurumsal WinForms icin `11-windows-forms-app-ui` kullanilmalidir.

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


---
name: cyberpunk-hud-ui
description: Neon, keskin kenarli, veri yogun, futuristik HUD ve kontrol paneli arayuzleri uretir. Oyun yonetim konsollari, sci-fi paneller ve siber guvenlik gosterge ekranlari icin kullanilir.
---

# Skill 18 - Cyberpunk HUD UI

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


---
name: neo-brutalism-ui
description: Kalin siyah border, sert offset shadow, doygun pastel zeminler, duz koseler ve cesur tipografiyle modern neo-brutalist arayuzler uretir.
---

# Skill 19 - Neo-Brutalism UI

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
