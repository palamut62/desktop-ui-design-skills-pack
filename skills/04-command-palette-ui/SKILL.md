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

