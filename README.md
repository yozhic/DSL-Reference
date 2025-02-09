# Справочник по DSL

DSL (Dictionary Specification Language) — язык описания электронных словарей (лексиконов). Изначально создавался для использования в программе ABBYY Lingvo, но получил широкое распространение и поддержку других приложений, таких как [GoldenDict](https://github.com/goldendict/goldendict/releases).  

Полная, обновляемая версия для чтения онлайн располагается на ~~[lingvoboard.ru](https://lingvoboard.ru/store/html/DSLReference_HTML/index.html)~~ (_временно не работает; альтернатива: [yozhic.github.io](https://yozhic.github.io/DSL-Reference/)_). Если со дня последнего посещения страницы онлайн-версии справочник был отредактирован (см. [историю изменений](https://github.com/yozhic/DSL-Reference/commits/master)), перед чтением рекомендуется почистить кэш браузера.  

Для пользования справочником офлайн понадобится скачать [архив последнего выпуска](https://github.com/yozhic/DSL-Reference/releases) или [архив данного репозитория](https://github.com/yozhic/DSL-Reference/archive/refs/heads/master.zip) и распаковать его в любую доступную папку. Для начала чтения запустить файл `docs/index.html`.  

Можно также пользоваться справочником офлайн в формате CHM. Файлом CHM укомплектованы [архивы выпусков](https://github.com/yozhic/DSL-Reference/releases), а CHM с текущей редактурой скачивается из папки [`compiled`](https://github.com/yozhic/DSL-Reference/tree/master/compiled).  

Для самостоятельной компиляции в формат CHM: если установлен [Microsoft® HTML Help Workshop](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/htmlhelp/microsoft-html-help-downloads) _(архивная копия: [htmlhelp.exe](http://web.archive.org/web/20160201063255/http://download.microsoft.com/download/0/A/9/0A939EF6-E31C-430F-A3DF-DFAE7960D564/htmlhelp.exe), [helpdocs.zip](http://web.archive.org/web/20160314043751/http://download.microsoft.com/download/0/A/9/0A939EF6-E31C-430F-A3DF-DFAE7960D564/helpdocs.zip))_, запускаем `make_chm.cmd`. Возможно также использование любых других chm-компиляторов.  
