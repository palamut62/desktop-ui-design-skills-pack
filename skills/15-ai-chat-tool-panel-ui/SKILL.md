---
name: ai-chat-tool-panel-ui
description: Sol sohbet alani ve sag arac/parametre paneli olan AI destekli uretim, slayt, cheatsheet, kod ve belge arayuzleri uretir.
---

# Skill 15 - AI Chat + Tool Panel UI

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


