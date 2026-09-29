# Справочник по DSL

![Руководство по DSL](https://img.shields.io/badge/Руководство_по_DSL-blue) ![Инструкция по DSL](https://img.shields.io/badge/Инструкция_по_DSL-blue) ![Справка DSL](https://img.shields.io/badge/Справка_DSL-blue) ![DSL Manual](https://img.shields.io/badge/DSL_Manual-454d5a) ![DSL Help](https://img.shields.io/badge/DSL_Help-454d5a)

**Текущая, редактируемая версия**: 1.1.1 от 9 февраля 2025 г.  
**Скачать текущую версию**: [CHM](https://raw.githubusercontent.com/yozhic/DSL-Reference/refs/heads/master/compiled/DSLReference.dev.chm), [ZIP/HTML](https://github.com/yozhic/DSL-Reference/archive/refs/heads/master.zip).  

Последний выпуск: 1.1 от 7 сентября 2023 г.  
Скачать последний выпуск: в разделе [Releases](https://github.com/yozhic/DSL-Reference/releases).  
<br>

DSL (Dictionary Specification Language) — язык описания электронных словарей (лексиконов). Изначально создавался для использования в программе ABBYY Lingvo, но получил широкое распространение и поддержку других приложений, таких как [GoldenDict](https://github.com/goldendict/goldendict/releases).  

Ознакомиться со справочником онлайн можно в разделе [Wiki](https://github.com/yozhic/DSL-Reference/wiki), где размещена (<mark>пока ещё не полностью</mark>) текущая версия в формате Markdown. Оформление в Markdown отличается от оформления в CHM/HTML в сторону упрощения. Для постоянного использования рекомендуется скачать справочник в формате CHM или HTML.

Справочник в HTML — это набор файлов, которые можно просматривать в интернет-браузере. Удобство: можно редактировать, запускается на любой системе. Неудобство: много файлов. Для начала чтения: скачать архив ZIP по ссылке выше, распаковать, открыть папку `server` (или `html`, если это архив выпуска) и запустить файл `index.html`.

Справочник в CHM — это один файл, для просмотра которого на Windows не требуется ничего дополнительного. Удобство: один файл, как книга. Неудобство: может не запуститься на других системах (не Windows), не редактируется. Для начала чтения: скачать файл CHM по ссылке выше и запустить его. Или, если это выпуск, скачать архив ZIP, распаковать, в папке `chm` запустить единственный файл.

Для самостоятельной компиляции .html в .chm: если установлен [Microsoft® HTML Help Workshop](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/htmlhelp/microsoft-html-help-downloads) _(архивная копия: [htmlhelp.exe](http://web.archive.org/web/20160201063255/http://download.microsoft.com/download/0/A/9/0A939EF6-E31C-430F-A3DF-DFAE7960D564/htmlhelp.exe), [helpdocs.zip](http://web.archive.org/web/20160314043751/http://download.microsoft.com/download/0/A/9/0A939EF6-E31C-430F-A3DF-DFAE7960D564/helpdocs.zip))_, запустить `make_chm.cmd`. Или воспользоваться любым другим CHM-компилятором.  

> [!NOTE]<br>
> <sup>Текущая, обновляемая версия для чтения онлайн долгое время располагалась на сервере [lingvoboard.ru](https://lingvoboard.ru/store/html/DSLReference_HTML/index.html), который сейчас недоступен. Будем надеяться, что временно...<!--Если со дня последнего посещения страницы онлайн-версии справочник был отредактирован (см. [историю изменений](https://github.com/yozhic/DSL-Reference/commits/master)), перед чтением рекомендуется почистить кэш браузера.--></sup>  
<br>

Благодарности: Игорю Мостицкому, [lingvoboard](https://github.com/lingvoboard) (aka andreyefgs), Romul81, niccolo, Tevton, [vsemozhetbyt](https://github.com/vsemozhetbyt) (aka vmbvmb), Bombist1, InTrancer, toty794, amixdun, и всем лексикографам на Ru-Board.
