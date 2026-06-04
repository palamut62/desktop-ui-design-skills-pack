# AGENTS.md

Bu repoda masaustu uygulama UI/UX tasarimlari icin tekrar kullanilabilir ve kurulabilir Markdown skill dosyalari bulunur.

## Genel talimat

- Kullanici bir UI stili istediginde once `skills/` klasorundeki ilgili `SKILL.md` dosyasini oku.
- Tasarim uretirken ilgili skill icindeki renk paleti, tipografi, layout, bilesenler, platforma uygun tasarim tokenlari ve kabul kriterlerine uy.
- Kod uretiminde hedef platforma uygun token sistemi kullan:
  - Web/Electron/Tauri web UI: CSS degiskenleri veya theme tokens.
  - WinForms: C#/VB.NET token sinifi/modulu, helper style metotlari ve custom controls.
  - WPF/WinUI/Avalonia: resource dictionary veya theme resources.
  - PyQt/PySide: QSS, palette ve ortak component helperlari.
- Kullanici ozellikle istemedikce tek seferde tum uygulamayi yeniden yazma; sadece gereken component, style veya screen dosyalarini uret.
- Masaustu hedefleri: Electron, Windows Forms, WPF, WinUI, Avalonia, Tauri, PyQt/PySide veya web tabanli desktop UI.

## Stil secimi

- Glassmorphism: premium dashboard, AI tools, modern sunum.
- Dark Developer: kodlama araclari, terminal, repo manager.
- Minimal Sidebar: CRUD, yonetim paneli, sade is uygulamasi.
- Command Palette: hizli komut ve klavye odakli launcher.
- Card Dashboard: KPI, grafik, butce, abonelik, satis panelleri.
- Neumorphism: kisisel yardimci araclar, soft UI.
- Fluent Windows 11: Windows'a dogal gorunen uygulamalar.
- Split Panel Workspace: not, dosya, markdown, kural/skill yoneticisi.
- Kanban Board: gorev ve proje yonetimi.
- Terminal + GUI Hybrid: CLI wrapper, log izleme, sistem monitoru.
- Floating Tool Window: OCR capture, clipboard manager, quick launcher, mini arac penceresi.
- Workspace UI: Codex/Claude/OpenCode benzeri cok panelli calisma alani.
- Settings-First UI: API key, model, entegrasyon, guvenlik ve ayar panelleri.
- Data Table Admin UI: filtrelenebilir tablo, bulk action, admin liste ekranlari.
- AI Chat + Tool Panel UI: sohbet + parametre/export paneli olan AI araclari.
- Classic Windows Form UI: retro Windows 95/98/2000 tarzinda legacy form arayuzu.
- Cyberpunk HUD UI: neon, sci-fi, veri yogun kontrol ve oyun panelleri.
- Neo-Brutalism UI: kalin border, sert shadow, pastel ve bold SaaS/task panelleri.
- Claymorphism UI: pastel, buyuk radius, yumusak ic/dis golgeli yaratici paneller.

## Kurulum ve dagitim

- Paket kurulumu icin `install.sh`, `install.ps1` veya `scripts/install-apply.js` kullanilir.
- Desteklenen hedefler: `claude`, `claude-project`, `codex`, `codex-project`, `cursor`, `opencode`.
- Claude plugin manifesti `.claude-plugin/plugin.json` icindedir.
- Codex plugin manifesti `.codex-plugin/plugin.json` icindedir.
- `manifests/skills.json` skill katalog manifestidir.
- `ALL_SKILLS.md` dosyasi `skills/` klasorunden yeniden uretilmelidir; elle drift olusturma.

## Uygulama ilkeleri

- Her skill icin `default`, `hover`, `active`, `focus`, `disabled`, `loading`, `empty`, `error` durumlari dusunulmelidir.
- Icon-only butonlarda tooltip ve accessible label kullan.
- Uzun tablo, terminal, log ve chat alanlarinda scroll davranisini net tanimla.
- Kritik islemler icin onay dialogu veya ikinci adim kullan.
- Tasarim yalnizca guzel gorunmemeli; gercek veri baglama, hata ve bos durum senaryolarina hazir olmalidir.
