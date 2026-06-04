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
