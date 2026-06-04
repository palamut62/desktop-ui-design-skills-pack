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
