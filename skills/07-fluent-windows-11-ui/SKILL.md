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

