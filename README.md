# Desktop UI Design Skills Pack

Bu paket, masaüstü uygulamaları için 11 farklı arayüz tasarım stilini Codex, Claude Code ve benzeri AI coding araçlarının okuyabileceği Markdown skill dosyaları olarak sunar.

## Kullanım

- Her tasarım kendi klasöründe `SKILL.md` olarak bulunur.
- Claude/Codex benzeri araçlara ilgili `SKILL.md` dosyasını okutabilir veya proje içine ekleyebilirsin.
- Codex için ayrıca kök dizine `AGENTS.md` eklenmiştir.

## Skill listesi

- `01-glassmorphism-dashboard/SKILL.md` — Glassmorphism Dashboard
- `02-dark-developer-ui/SKILL.md` — Dark Developer UI
- `03-minimal-sidebar-ui/SKILL.md` — Minimal Sidebar UI
- `04-command-palette-ui/SKILL.md` — Command Palette UI
- `05-card-dashboard-ui/SKILL.md` — Card Dashboard UI
- `06-neumorphism-ui/SKILL.md` — Neumorphism UI
- `07-fluent-windows-11-ui/SKILL.md` — Fluent Design / Windows 11 UI
- `08-split-panel-workspace/SKILL.md` — Split Panel Workspace
- `09-kanban-board-ui/SKILL.md` — Kanban Board UI
- `10-terminal-gui-hybrid/SKILL.md` — Terminal + GUI Hybrid
- `11-windows-forms-app-ui/SKILL.md` — Windows Forms App UI

## Önerilen kullanım

1. Uygulamanın tarzını seç.
2. İlgili `SKILL.md` dosyasını AI coding aracına bağla.
3. Prompt içinde şu şekilde belirt: `Bu uygulamayı skills/03-minimal-sidebar-ui/SKILL.md standardına göre tasarla.`
4. Kod üretirken hedef platforma uygun tasarım tokenlarını, layout kurallarını ve kabul kriterlerini uygulat. Web/Electron için CSS değişkenleri; WinForms için C#/VB.NET token sınıfı/modülü; WPF/WinUI/Avalonia için resource/theme tokenları kullanılmalı.

## Kalite standardı

- Her skill yalnızca görsel stil değil; ekran anatomisi, bileşen durumları, boş/hata/yükleniyor durumları, erişilebilirlik ve responsive/adaptive masaüstü davranışı tarif etmeli.
- Klavye kullanımı, focus sırası, kontrast, yüksek DPI/ölçeklendirme ve uzun içerik scroll davranışı her masaüstü tasarımında kontrol edilmeli.
- Tasarım tokenları platformdan bağımsız isimlerle düşünülmeli: `bg`, `surface`, `border`, `text`, `muted`, `primary`, `success`, `warning`, `danger`, `space`, `radius`, `shadow/elevation`.
- Kurumsal masaüstü uygulamalarında dekoratif efektler okunabilirlikten, veri yoğunluğundan ve görev hızından daha öncelikli olmamalı.
