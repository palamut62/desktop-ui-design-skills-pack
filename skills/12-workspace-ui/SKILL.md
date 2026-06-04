---
name: workspace-ui
description: Dosya agaci, sekmeler, editor/detail alani, inspector paneli ve alt log/status paneli olan yogun masaustu calisma alani arayuzleri uretir. Codex, Claude Code, OpenCode, kural yoneticisi ve proje editorleri icin kullanilir.
---

# Skill 12 - Workspace UI

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


