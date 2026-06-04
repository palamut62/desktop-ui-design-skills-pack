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

