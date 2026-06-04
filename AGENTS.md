# AGENTS.md

Bu repoda masaüstü uygulama UI tasarımları için tekrar kullanılabilir Markdown skill dosyaları bulunur.

## Genel talimat

- Kullanıcı bir UI stili istediğinde önce `skills/` klasöründeki ilgili `SKILL.md` dosyasını oku.
- Tasarım üretirken ilgili skill içindeki renk paleti, tipografi, layout, bileşen, platforma uygun tasarım tokenları ve kabul kriterlerine uy.
- Kod üretiminde hedef platforma uygun token sistemi kullan: web/Electron için CSS değişkenleri, WinForms için C#/VB.NET token sınıfı/modülü, WPF/WinUI/Avalonia için resource/theme sözlükleri.
- Kullanıcı özellikle istemedikçe tek seferde tüm uygulamayı yeniden yazma; sadece gereken component/CSS dosyalarını üret.
- Masaüstü hedefleri: Electron, Windows Forms, WPF, WinUI, Avalonia, Tauri, PyQt veya web tabanlı desktop UI.

## Stil seçimi

- Glassmorphism: premium dashboard, AI tools, modern sunum.
- Dark Developer: kodlama araçları, terminal, repo manager.
- Minimal Sidebar: CRUD, yönetim paneli, sade iş uygulaması.
- Command Palette: hızlı komut ve klavye odaklı launcher.
- Card Dashboard: KPI, grafik, bütçe, abonelik, satış panelleri.
- Neumorphism: kişisel yardımcı araçlar, soft UI.
- Fluent Windows 11: Windows’a doğal görünen uygulamalar.
- Split Panel Workspace: not, dosya, markdown, kural/skill yöneticisi.
- Kanban Board: görev ve proje yönetimi.
- Terminal + GUI Hybrid: CLI wrapper, log izleme, sistem monitörü.
- Windows Forms App UI: VB.NET/C# WinForms, kurumsal kayıt/takip, DataGridView ve klasik masaüstü iş uygulamaları.
