const uk = {
  // objectui#4467 — the impersonation banner (app-shell ImpersonationBanner).
  // Raised by `session.impersonatedBy`, so it survives SPA reboots; it names
  // BOTH parties because the audit trail attributes the work to the impersonated
  // user, and the exit states its own failure rather than appearing to succeed.
  impersonation: {
    banner: {
      message: 'Ви працюєте від імені {{user}} — кожна дія записується на цього користувача.',
      startedBy: 'Розпочато адміністратором {{admin}}.',
      startedByUnnamed: 'Розпочато адміністратором.',
      stop: 'Припинити роботу від чужого імені',
      stopping: 'Завершення…',
      stopFailed: 'Не вдалося припинити роботу від чужого імені: {{reason}}',
      notRestored: 'Сервер прийняв запит, але не відновив ваш адміністраторський сеанс — ви все ще працюєте від імені {{user}}. Вийдіть і увійдіть знову, щоб завершити.',
    },
  },
  // objectui#2600 B5 — capability picker scope group headers (labels come from
  // the capability registry; only these group titles are UI strings).
  capability: {
    group: {
      platform: 'Платформа',
      org: 'Організація',
      other: 'Інше',
    },
    // Curated platform capability labels (objectui#2600 B5). Registry-served
    // labels are English; these mirror them and give non-en locales a fallback.
    label: {
      manage_users: 'Керування користувачами',
      manage_org_users: 'Керування користувачами організації',
      manage_metadata: 'Керування метаданими',
      manage_mailboxes: 'Керування поштовими скриньками',
      manage_connector_connections: "Керування підключеннями з'єднувачів",
      manage_platform_settings: 'Керування налаштуваннями платформи',
      setup_access: 'Доступ до налаштування',
      setup_write: 'Запис налаштувань',
      studio_access: 'Доступ до Studio',
      manage_sharing: 'Керування спільним доступом',
      view_all_audit_log: 'Перегляд усього журналу аудиту',
    },
  },
  lookup: {
    recentlyUsed: 'Недавні',
    allResults: 'Усі результати',
    loading: 'Завантаження…',
    noOptions: 'Параметрів не знайдено',
    noRecords: 'Записів не знайдено',
    createNew: 'Створити новий',
    createNamed: 'Створити новий «{{name}}»',
    showingResults: 'Показано {{shown}} із {{total}} результатів',
    showAllResults: 'Показати всі результати ({{count}})',
    selectedBadge: 'Вибрано',
    browseAll: 'Переглянути всі записи',
    remove: 'Видалити {{label}}',
    selectFirst: 'Спочатку виберіть {{fields}}',
    selectRecord: 'Вибрати запис',
    recordCount: '{{count}} записів',
    recordCount_one: '{{count}} запис',
    recordCount_few: '{{count}} записи',
    recordCount_many: '{{count}} записів',
    recordCount_other: '{{count}} записів',
    pageOf: 'Сторінка {{current}} з {{total}}',
    filters: 'Фільтри',
    clear: 'Очистити',
    yes: 'Так',
    filterPlaceholder: 'Фільтр {{label}}',
    prevPage: 'Попередня сторінка',
    nextPage: 'Наступна сторінка',
    jumpToPage: 'Перейти на сторінку',
    retry: 'Спробувати знову',
  },
  common: {
    // objectui#13461 — a disclosure toggle's name (the tree-view node toggle).
    expand: 'Розгорнути',
    collapse: 'Згорнути',
    loading: 'Завантаження…',
    save: 'Зберегти',
    // The SHARED "throw away the unsaved draft" verb, read by
    // `@object-ui/components`' `ConfigPanelRenderer` footer (objectui#4750).
    // The three older spellings stay where they are because each belongs to one
    // surface's wording: `form.discard` is the confirm button of plugin-form's
    // "Discard changes?" alert dialog, `console.settingsView.discard` and
    // `console.objectView.discard` are two console view footers — and the last
    // of those already disagrees with the other two in zh/ko/fr. This one is
    // the shared component's, and its ten values are the majority spelling.
    discard: 'Відкинути',
    cancel: 'Скасувати',
    delete: 'Видалити',
    edit: 'Змінити',
    create: 'Створити',
    filter: 'Фільтр',
    reset: 'Скинути',
    confirm: 'Підтвердити',
    close: 'Закрити',
    back: 'Назад',
    next: 'Далі',
    previous: 'Назад',
    submit: 'Надіслати',
    refresh: 'Оновити',
    export: 'Експорт',
    import: 'Імпорт',
    yes: 'Так',
    no: 'Ні',
    ok: 'OK',
    actions: 'Дії',
    more: 'Більше',
    selectAll: 'Вибрати все',
    clearAll: 'Зняти все',
    addToFavorites: 'Додати до обраного',
    removeFromFavorites: 'Видалити з обраного',
    noData: 'Немає даних',
    noResults: 'Результатів не знайдено',
    required: "Обов'язково",
    optional: "Необов'язково",
    selectOption: 'Виберіть варіант',
    select: 'Вибрати…',
    openChat: 'Відкрити чат',
    closeChat: 'Закрити чат',
    closePanel: 'Закрити панель',
    resizeDrawer: 'Змінити розмір панелі',
    // Count badge on a tab / section header. An i18next count family
    // (objectui#11445): the badge passes `count` and i18next picks the slot
    // each pack's CLDR rules select.
    itemCount: '{{count}} елементів',
    itemCount_one: '{{count}} елемент',
    itemCount_few: '{{count}} елементи',
    itemCount_many: '{{count}} елементів',
    itemCount_other: '{{count}} елементів',
    toggleSidebar: 'Перемкнути бічну панель',
    breadcrumb: 'Навігатор сторінки',
    package: 'Пакет',
    done: 'Готово',
    editInStudio: 'Змінити в Studio',
    record: 'Запис',
    retry: 'Спробувати знову',
    printDialogHint: 'Відкриває діалог друку вашого браузера (не експорт у PDF)',
    // The non-grid row ceiling's footnote (objectui#7210). Two keys because
    // there are two conditions: a reported `total` states the fact with BOTH
    // numbers, a missing one cannot name how many. Kept terse deliberately —
    // this copy is eagerly loaded, and since objectui#7399 these bytes are
    // budgeted by the `i18n-locales` chunk, not `framework`. ⛔ That ceiling's
    // headroom is deliberately NOT restated here — it moves on every
    // re-baseline, and the figure that was here went stale.
    // `pnpm check:eager-closure` prints it.
    rowCeilingNote: 'Показано перші {{shown}} записів із {{total}}. Звузьте фільтр.',
    rowCeilingNoteUnknownTotal: 'Показано перші {{shown}} записів. Звузьте фільтр.',
    // objectstack#33229 — the heading of the trailing section that holds the
    // fields no declared field group claims (`deriveFieldGroupLayout`'s keyless
    // bucket), drawn only when declared groups precede it: the record detail
    // body and the object form arms. Without it those fields sat headerless
    // under the last group and read as its members.
    ungroupedSection: 'Інше',
  },
  actions: {
    decisionOutput: {
      help: 'Передається потоку як вихідне значення рішення.',
    },
    resultDialog: {
      // objectui#13461 — the secret block's reveal toggle, an icon-only button.
      showValue: 'Показати значення',
      hideValue: 'Сховати значення',
      defaultTitle: 'Збережіть це значення зараз',
      acknowledge: 'Я зберіг це',
      copyAll: 'Копіювати все',
      // Accessible names of the icon-only copy buttons, and the polite
      // announcement once a value reaches the clipboard.
      copyField: 'Копіювати {{label}}',
      copyValue: 'Копіювати значення',
      copyFieldItem: 'Копіювати {{label}}, елемент {{index}}',
      copyItem: 'Копіювати елемент {{index}}',
      copied: 'Скопійовано до буфера обміну',
    },
    // The refusal notice for an action whose `autoTrigger` its own declared
    // `visible` gate outranks (objectui#4191) — the deep link or host asked
    // for it, but the author hid it on this surface.
    notAvailableHere: 'Дія «{{action}}» недоступна на поточній сторінці.',
    // The reason a record action greyed out by its declared `disabled`
    // predicate gives on hover, on focus and as its accessible description
    // (objectui#11811): the generic one, since the action spec carries no
    // author-written reason. Not `notAvailableHere` — that one is about the
    // page, this one about the record.
    notAvailableForRecord: 'Недоступно для цього запису',
    // The success toast the action runner shows when no `outcomeMessages`
    // entry applies to the answer and the action declares no `successMessage`;
    // the server's message plays no part (objectui#11344). It is the one
    // success-toast text the runner writes itself (objectui#10900).
    completedSuccessfully: 'Дію успішно виконано',
    // The same toast for an action that has a label: it names what was done.
    completedNamed: 'Дію «{{action}}» виконано',
    // The runner's other own text (objectui#10969): the error fallbacks when no
    // readable error message reached it, and the Undo label it hands the toast
    // handler for an undoable success toast.
    failed: 'Помилка виконання дії',
    parallelFailed: 'Помилка однієї або кількох паралельних дій',
    // The two row-count refusals of a single-record action launched from a
    // list toolbar (`resolveServerActionRecordId` in `@object-ui/core`); the
    // runner asks for them before any confirmation or param dialog opens
    // (objectui#13384).
    selectExactlyOneRow: 'Ця дія виконується над одним записом — виберіть рівно один рядок.',
    selectRowFirst: 'Ця дія виконується над одним записом — спочатку виберіть рядок.',
    undo: 'Скасувати',
    // The confirmation toast after that Undo has run — written by the console's
    // two undo handlers (`useConsoleActionRuntime` and `RecordDetailView`), not
    // by the runner (objectui#11056).
    undone: 'Зміну скасовано',
    // The console's global Ctrl+Z / Ctrl+Shift+Z toasts, raised by
    // `AppContent`'s `useGlobalUndo` handlers once the operation has been
    // undone / redone (objectui#11080). `{{description}}` is the operation's
    // own description, passed through unchanged; the pack owns the words and
    // the word order around it.
    undoneOperation: 'Скасувати: {{description}}',
    redoneOperation: 'Повторити: {{description}}',
  },
  validation: {
    required: "{{field}} — обов'язкове поле",
    minLength: '{{field}} має містити щонайменше {{min}} символів',
    maxLength: '{{field}} має містити щонайбільше {{max}} символів',
    min: '{{field}} має бути не менше ніж {{min}}',
    max: '{{field}} має бути не більше ніж {{max}}',
    email: 'Уведіть коректну адресу електронної пошти',
    url: 'Уведіть коректну URL-адресу',
    pattern: 'Неправильний формат поля {{field}}',
    // Separator between the field labels a form names in one sentence: the
    // record form's clear-on-hide notice (`form.clearedOnHide`) and
    // faulted-`visibleWhen` refusal (`form.visibleWhenFaulted`), and the
    // option-group "select the parent first" hint (`fields.options.selectFirst`).
    // Per-locale because list punctuation is a locale property, not a code
    // constant: CJK enumerates with U+3001, Latin scripts with a comma+space,
    // Arabic with U+060C. Hardcoding one of them in the renderer put the CJK
    // comma into the English invalid-submit toast (objectstack#5407).
    formInvalidJoiner: ', ',
    unique: '{{field}} має бути унікальним',
  },
  form: {
    noPermissionToSave: "У вас немає дозволу зберігати цей запис.",
    // A write the ADR-0015 external write gate refused (`EXTERNAL_WRITE_FORBIDDEN`, objectstack#30334):
    // the object is read-only by design, so the line must not read as a missing permission.
    readOnlyExternalSource: "Ця таблиця доступна лише для читання. Її записи походять із зовнішнього джерела даних, яке не приймає змін.",
    // The notice a record form shows when every field is locked because the
    // object's affordance for the form's mode is closed for this user
    // (objectui#11000). `{{object}}` is the object's label.
    noPermissionToCreate: "У вас немає дозволу створювати записи {{object}}. Поля доступні лише для читання.",
    noPermissionToEdit: "У вас немає дозволу змінювати записи {{object}}. Поля доступні лише для читання.",
    // The same notice when THIS record refuses the update while the object
    // allows it: sharing, ownership or row-level security (objectstack#27138).
    noPermissionToEditRecord: "У вас немає дозволу змінювати цей запис. Поля доступні лише для читання.",
    submitFailed: 'Не вдалося зберегти. Спробуйте ще раз.',
    // The banner an edit form shows when its record read is refused: a
    // denial, a not-found (which row-level security answers for a hidden row,
    // so the line never tells the two apart), and any other failure.
    noPermissionToOpenRecord: "У вас немає доступу до цього запису.",
    recordNotFoundOrHidden: "Цього запису не існує, або ви не маєте до нього доступу.",
    openRecordFailed: 'Не вдалося відкрити цей запис. Спробуйте ще раз.',
    uploadInFlight: 'Дочекайтеся завершення завантаження перед збереженням.',
    // The notice the record form raises when a field's own `visibleWhen` turns
    // it invisible and the form clears the value it held (objectui#8070 names
    // the `6a449fc49` clear). `{{fields}}` is the cleared fields' labels joined
    // with `validation.formInvalidJoiner`. A list after a colon, so no word has
    // to agree with how many fields were cleared.
    clearedOnHide: 'Очищено — більше не застосовується за поточних значень: {{fields}}',
    // The refusal a record form raises at SUBMIT when a field's own
    // `visibleWhen` could not be evaluated (objectui#8069, ADR-0137 D2 as ruled:
    // the client refuses the one rule no server judges). It names the rule and
    // the fields — `{{fields}}` is their labels joined with
    // `validation.formInvalidJoiner` — because the fix is to the metadata, not
    // to anything the person filling the form can type.
    visibleWhenFaulted: "Надсилання неможливе: правило visibleWhen для {{fields}} не вдалося обчислити. Правило потрібно виправити, перш ніж цю форму можна буде надіслати.",
    fieldRequired: "Це поле обов'язкове",
    saveError: 'Не вдалося зберегти',
    unsavedChanges: 'У вас є незбережені зміни. Справді хочете відійти?',
    discardTitle: 'Відкинути зміни?',
    discardMessage: 'У вас є незбережені зміни. Якщо закрити цю форму зараз, ваші правки буде втрачено.',
    // The create/edit dialog's `sr-only` accessible description, used when the
    // form declares no `description` of its own (objectui#4024). Not visible
    // copy: it is what assistive tech announces for the dialog. An app could
    // only displace it by authoring a `description`, which makes a VISIBLE
    // subtitle appear on every form — so the fallback has to come from here.
    dialogDescriptionFallback: 'Заповніть поля форми, а потім надішліть або скасуйте.',
    // The hint under a field the caller may read but not write, shown when the
    // field declares no description of its own (objectui#11071).
    deniedDescription: 'У вас немає доступу на зміну цього поля.',
    // The hint under an empty field on a create form whose default the server
    // resolves at insert — a CEL expression or a runtime token the form cannot
    // evaluate, so it leaves the field empty and omits it (objectui#12108).
    // Shown only while the field is empty: a typed value is saved instead.
    serverDefaultHint: 'Встановлюється автоматично при збереженні.',
    // Under an empty field that a visible update action's static `patch` would
    // make required (objectstack#28382). `{{action}}` is the action's label.
    requiredForAction: 'Потрібно, щоб виконати «{{action}}».',
    // objectstack#28104 — the marker under a create-form field an AI chat
    // draft filled (the record-write card's "Open the full form"), shown until
    // the person edits the field, and the page notice above such a form.
    aiSuggested: 'Пропозиція ШІ',
    aiDraftNotice: 'ШІ заповнив поля з позначкою «Пропозиція ШІ» з чату. Нічого не зберігається, доки ви не перевірите їх і не збережете.',
    // objectstack#28106 — on an edit form opened on an AI chat update's
    // proposed values: the stored value each change replaces, the word for
    // an empty one, and the per-field revert.
    aiBefore: 'Було: {{value}}',
    aiBeforeEmpty: 'порожньо',
    aiRevert: 'Повернути',
    // The size-limit hint the flat `ObjectForm` appends to a `file` or `image`
    // field's description when the field declares `maxSize` (objectui#12156).
    // `{{size}}` is the formatted limit ("10.0 MB"); only the words translate.
    maxFileSize: 'Максимальний розмір: {{size}}',
    // The master-detail form's chrome (objectui#11071): the collection
    // placeholder while its columns resolve, the document totals stack
    // (`{{rate}}` is the header's tax rate), the row editor's title
    // (`{{title}}` is the collection's authored title, or `lineItem` when it
    // has none; `{{row}}` is the 1-based row number), its Apply button, and the
    // sr-only description of the dialog that hosts the form. The verbs `Add`,
    // `Close` and `Saving…` come from `detail.add`, `common.close` and
    // `detail.saving`.
    masterDetail: {
      loadingColumns: 'Завантаження колонок…',
      subtotal: 'Підсумок',
      tax: 'Податок ({{rate}}%)',
      total: 'Разом',
      lineItem: 'Рядок позиції',
      rowTitle: '{{title}} — рядок {{row}}',
      applyRow: 'Застосувати',
      editorDescription: 'Уведіть запис і його рядки позицій, а потім збережіть.',
      // A collection's configuration hints (objectui#11160): no `childObject`
      // (the twin of `lineItems.noChildObject`, which names the panel), a
      // child schema that failed to load, and no lookup or master_detail
      // field on the child that references the parent. `{{property}}` is a
      // property name and `{{object}}` / `{{parent}}` are object names; each
      // is rendered as code and never translated. `lookup` and
      // `master_detail` are field type names, so every pack keeps them as
      // written.
      noChildObject: "У цій колекції не налаштовано дочірній об'єкт: задайте {{property}} для об'єкта, рядки якого вона перелічує.",
      schemaUnavailable: "Не вдалося завантажити схему {{object}}, тому ця колекція не має колонок для показу. Переконайтеся, що об'єкт існує і доступний для читання, а потім перезавантажте.",
      noRelationshipField: "Не вдалося визначити, як {{object}} пов'язаний із {{parent}}: жодне поле типу lookup або master_detail на ньому не посилається на батьківський об'єкт. Задайте {{property}} для цієї колекції — поле, що містить батьківський запис.",
    },
    // The record page's `record:line_items` panel (objectui#11131): its
    // title when the author declared none. Its Save / Saving… button reads
    // `common.save` / `detail.saving`. `MasterDetailForm` reads `title` too,
    // for a collection that authors no heading (objectui#11145).
    //
    // The rest is the panel's own states (objectui#11145): no parent record
    // bound yet, rows held for another parent, and the two fallbacks for a
    // failed load or save, shown when the server sent no message of its own.
    // Its loading line reads `common.loading`. `noChildObject` is the config
    // hint for a panel with no `childObject`: `{{property}}` is filled with
    // the property name, rendered as code and never translated.
    lineItems: {
      title: 'Рядки позицій',
      saveRecordFirst: 'Спочатку збережіть запис, щоб додати рядки позицій.',
      notLoaded: 'Рядки позицій цього запису не завантажено.',
      loadFailed: 'Не вдалося завантажити рядки позицій',
      saveFailed: 'Не вдалося зберегти рядки позицій',
      noChildObject: "На цій панелі не налаштовано дочірній об'єкт: задайте {{property}} для об'єкта, рядки якого вона перелічує.",
    },
    keepEditing: 'Продовжити редагування',
    discard: 'Відкинути',
    conflictTitle: 'Конфлікт збереження',
    conflictMessage: 'Цей запис змінив хтось інший, поки ви редагували. Перезапис замінить їхні зміни вашими.',
    conflictLatestVersion: 'Їхнє збереження: {{time}}',
    conflictOverwrite: 'Перезаписати',
    stepOf: 'Крок {{current}} з {{total}}',
    createTitle: 'Створення {{object}}',
    editTitle: 'Зміна {{object}}',
    viewTitle: 'Перегляд {{object}}',
    createTargetOrg: 'Створюється в {{org}}',
    saveRecord: 'Зберегти',
    create: 'Створити',
    update: 'Оновити',
    createSuccess: '{{object}} успішно створено',
    updateSuccess: '{{object}} успішно оновлено',
    // The console's record-save toasts when the saved record has a display
    // name (ADR-0079): `{{object}}` is the object label, `{{title}}` the
    // record's name. A record with no name keeps `createSuccess` /
    // `updateSuccess` above.
    createdNamed: '{{object}} «{{title}}» створено',
    updatedNamed: '{{object}} «{{title}}» оновлено',
    // plugin-form's own feedback chrome (objectui#11039): the success toast
    // a form raises when the author declared no `successMessage` (`created`
    // after a create, `saved` after an edit), the master-detail form's edit
    // toast when the form has a `title` (`{{title}}` is that title), and the
    // console form page's toast after a submit. An authored message always
    // wins; these are only the defaults. The form's loading line and its
    // thank-you panel read `publicForm.loading` / `publicForm.thankYouTitle` /
    // `publicForm.thankYouMessage`, which say the same thing.
    created: 'Створено',
    saved: 'Збережено',
    savedNamed: '{{title}} збережено',
    submitted: 'Надіслано',
    // The heading of the panel a form shows when its object schema or its
    // record could not be loaded; the error's own message follows it.
    errorLoading: 'Помилка завантаження форми',
    // Rides the success toast when a DECLARED `navigateOnSuccess` produced no
    // destination (objectui#5034): the write succeeded, the declared
    // navigation did not happen. `navigateOnSuccess` is the metadata key's
    // name, so every pack keeps it as written.
    navigateRefused: 'Призначення `navigateOnSuccess`, оголошене для цієї форми, відхилено, тому перехід не відбувся.',
    fullscreen: {
      title: 'Редагування тексту',
      description: 'Змініть повне текстове значення, а потім збережіть або скасуйте зміни.',
      done: 'Готово',
      toggle: 'Змінити {{label}} на весь екран',
      textFallback: 'текст',
    },
  },
  fields: {
    // ADR-0144 D2 — the record-currency code select (`CurrencyCodeField`).
    currencyCode: {
      placeholder: 'Виберіть валюту',
      search: 'Шукати валюту…',
      noResults: 'Валюту не знайдено',
      available: 'Доступні',
      all: 'Усі валюти (ISO 4217)',
    },
    // ADR-0144 D5 — the home field's read-only hint: the rate and document date
    // the engine converted the record's amount at (`CurrencyField`, the record page);
    // and the live preview under the amount while it is edited (`homeAmountPreview.tsx`).
    currencyHome: {
      convertedAt: 'Конвертовано за курсом {{rate}} {{date}}',
      homeCurrency: 'У базовій валюті (курс 1)',
      preview: '≈ {{amount}} за курсом {{rate}} {{date}}',
      previewSame: '≈ {{amount}} (базова валюта)',
      awaitingRate: 'Немає курсу {{currency}} на дату {{date}} або раніше: збереження відхилено, доки курс не додадуть',
      awaitingDate: 'Установіть дату документа, щоб побачити суму в базовій валюті',
      rateUnreadable: 'Конвертується в базову валюту під час збереження',
    },
    // objectui#13461 — names for icon-only buttons in the field widgets.
    masterDetail: {
      view: 'Відкрити {{name}}',
      remove: 'Видалити {{name}}',
    },
    password: {
      show: 'Показати пароль',
      hide: 'Сховати пароль',
    },
    qrCode: {
      copy: 'Копіювати значення',
      show: 'Показати QR-код',
      hide: 'Сховати QR-код',
    },
    relativeDate: {
      overdue: 'Прострочено {{count}} д',
      overdue_one: 'Прострочено {{count}} д',
      overdue_few: 'Прострочено {{count}} д',
      overdue_many: 'Прострочено {{count}} д',
      overdue_other: 'Прострочено {{count}} д',
    },
    file: {
      dragDropHere: 'Перетягніть файли сюди',
      dropFilesHere: 'Відпустіть файли тут',
      browseHint: 'або натисніть, щоб вибрати',
      browseHintCamera: 'або натисніть, щоб вибрати • скористайтеся кнопкою камери нижче',
      takePhoto: 'Зробити фото',
      takeSelfie: 'Зробити селфі',
      cameraCapture: 'Камера',
      choosePhoto: 'Вибрати фото',
      photoFailed: 'Не вдалося отримати фото',
      uploading: 'Завантаження…',
      uploadingPct: 'Завантаження… ({{pct}}%)',
      fileFallback: 'Файл',
      upload: 'Завантажити',
      remove: 'Видалити {{name}}',
      exceedsMaxSize: '«{{name}}» перевищує максимальний розмір ({{max}} МБ)',
      typeNotAccepted: '«{{name}}» — неприпустимий тип файла ({{accept}})',
      uploadFailed: 'Не вдалося завантажити «{{name}}»: {{error}}',
      uploadIncomplete: 'Завантаження «{{name}}» не було завершено: не повернено ідентифікатор файла, тому нічого не збережено',
      restricted: 'Обмежений файл',
      restrictedHint: 'У вас немає доступу до даних цього файла',
    },
    // The scan button text and lookup fields show inside the mobile shell.
    scan: {
      button: 'Сканувати код',
      failed: 'Не вдалося сканувати',
    },
    image: {
      upload: 'Завантажити зображення',
      addMore: 'Додати ще зображення',
      uploading: 'Завантаження…',
      imageAlt: 'Зображення {{index}}',
      crop: 'Обрізати зображення {{index}}',
      remove: 'Видалити зображення {{index}}',
      enlarge: 'Збільшити {{name}}',
      preview: 'Попередній перегляд зображення',
      cropPreview: 'Попередній перегляд обрізаного зображення',
      previous: 'Попереднє зображення',
      next: 'Наступне зображення',
      counter: '{{current}} / {{total}}',
    },
    percent: {
      slider: 'Відсотки',
    },
    richText: {
      format: 'Формат: {{format}}',
      basicEditorHint: 'Текстовий редактор (базовий)',
      placeholder: 'Уведіть текст…',
    },
    // objectui#3231 — the "this option list cannot be filled" copy shared by
    // the fixed-option widgets (select / multiselect / radio / checkboxes) AND
    // by the form renderer's gate hint. One key, one sentence: the renderer
    // interpolates field LABELS, a standalone widget its raw field names.
    options: {
      empty: 'Немає доступних варіантів',
      selectFirst: 'Спочатку виберіть {{fields}}',
    },
    objectRef: {
      loading: "Завантаження об'єктів…",
      placeholder: "Виберіть об'єкт",
      search: "Шукати об'єкти…",
      empty: "Об'єктів не знайдено",
    },
    registryRef: {
      loadFailed: 'Не вдалося завантажити список. Ви все ще можете ввести назву вручну.',
      notFound: '{{name}} (не знайдено)',
      holderPackage: '{{item}} · пакет {{package}}',
      holderEnvironment: '{{item}} · визначено в цьому середовищі',
      holderUnresolved: '{{name}} (його надають кілька пакетів; жоден не названо)',
      holderNeedsPackage: 'Ця форма називає набір дозволів лише за назвою. Коли набір такої назви надають кілька пакетів, тут можна вибрати лише той, що визначений у цьому середовищі.',
    },
    preferenceOption: {
      allTopics: 'Усі теми ({{value}})',
      allChannels: 'Усі канали ({{value}})',
      notConfigured: '{{value}} (не налаштовано)',
      notInList: '{{value}} (немає в списку)',
      useTyped: 'Використати «{{value}}»',
    },
    quietHours: {
      timeZone: 'Часовий пояс',
      start: 'Початок',
      end: 'Кінець',
      range: '{{start}} — {{end}} ({{zone}})',
      pastMidnight: 'Триває після півночі і завершується наступного дня.',
      sameTimes: 'Початок і кінець збігаються, тому нічого не стримується.',
      incomplete: 'Уведіть і час початку, і час завершення.',
      unreadable: 'Це значення не є часовим діапазоном, який цей елемент керування може показати. Збережено як записано.',
      replace: 'Задати часовий діапазон',
      zoneNotInList: '{{zone}} (немає в списку)',
    },
    recipient: {
      selectTypeFirst: 'Спочатку виберіть тип одержувача.',
      loading: 'Завантаження…',
      search: 'Пошук…',
      empty: 'Збігів немає',
      select: 'Вибрати одержувача',
      selectUser: 'Вибрати користувача',
      selectTeam: 'Вибрати команду',
      selectBusinessUnit: 'Вибрати підрозділ',
      selectPosition: 'Вибрати посаду',
      selectQueue: 'Вибрати чергу',
      selectUnitAndSubordinates: 'Вибрати підрозділ',
      selectField: 'Вибрати поле користувача',
      noUserFields: "На цьому об'єкті немає полів користувача",
      fieldNotUserTyped: '{{name}} — не поле користувача',
    },
    filterCondition: {
      selectObjectFirst: "Спочатку виберіть об'єкт.",
      noCriteria: 'Немає умов — це правило нічого не поширює',
      criteriaRequired: 'Додайте щонайменше одну умову. Правило без умов поширювало б кожен запис, тому його не можна зберегти.',
      invalidJson: 'Неправильний JSON — правило не відповідатиме жодному запису, доки його не виправлять.',
      jsonOnly: 'Ці умови можна редагувати лише як JSON',
      editAsJson: 'Редагувати як JSON',
      useVisualBuilder: 'Використати візуальний конструктор',
    },
    // objectui#6755 — a widget's OWN refusal sentence: `ObjectField`'s
    // unparsable JSON draft, and `LocationField`'s format and range refusals
    // (objectui#6716 / #6714). They were string literals in the widgets, so a
    // zh / ja / ar user who mistyped a coordinate or a JSON blob was told why in
    // English inside a form whose every other word was translated.
    //
    // KEYED, where objectui#4028 DROPPED the five address placeholders in the
    // namespace below — and the difference is what that decision's own comment
    // records about them: "The right example is a function of the address's
    // COUNTRY, not the reader's language", and "Each box here already has a
    // visible label naming exactly what it wants". Neither reaches a refusal
    // sentence: nothing else on the screen says why the edit was refused, and
    // what that sentence must say IS a function of the reader's language. What
    // #4028 does establish for both is the COST — ten pack entries per key,
    // bound from then on by `check:i18n-drift` — and the 2026-08-29 maintainer
    // ruling accepted that cost for these three sentences.
    //
    // Values are byte-identical to the literals they replace (`FIELD_DEFAULTS`
    // in `packages/fields/src/widgets/useFieldTranslation.ts` carries the same
    // three), so English and provider-less rendering are unchanged.
    //
    // `{{detail}}` is the SPEC's own complaint about the refused pair.
    // `LocationField` refuses to restate `LocationValueSchema`'s bounds — a
    // hand-copied range is a second contract — so this key translates the frame
    // and interpolates whatever the schema said.
    object: {
      invalidJson: 'Неправильний JSON',
    },
    location: {
      refusedFormat:
        'Не збережено: уведіть пару широта, довгота (приклад: 30.2741, 120.1551).',
      refusedRange: 'Не збережено: {{detail}}',
      latitude: 'широта',
      longitude: 'довгота',
      refusedResidueOne:
        'Не збережено: {{name}} «{{text}}» не є числом. Уведіть звичайні десяткові дроби (приклад: 30.2741, 120.1551).',
      refusedResidue:
        'Не збережено: {{name}} «{{text}}» і {{otherName}} «{{otherText}}» не є числами. Уведіть звичайні десяткові дроби (приклад: 30.2741, 120.1551).',
    },
    // objectui#8148 — the FIFTH refusal sentence of objectui#6755's class, and
    // the only SHARED one. The four above are each ONE widget's; this one is
    // produced by `numberBadInput.tsx` for `NumberField`, `CurrencyField`,
    // `PercentField` and both of `GeolocationField`'s boxes. That last is the
    // sharpest case: it sits beside `LocationField`, whose refusals are keyed
    // right above, so two adjacent coordinate widgets refused bad input in two
    // different languages on the same form.
    //
    // ⭐ `{{example}}` is a HOLE, and that is what keeps decimal numerals out
    // of every pack. Five different values reach this one sentence (`1234`,
    // `1234.56`, `12.5`, `30.2741`, `120.1551`), so keying the example per
    // widget would be five keys times ten packs — and each pack would then
    // hold a decimal it could legitimately re-punctuate, where `1234,56` reads
    // as the `latitude, longitude` PAIR `refusedFormat` above asks for. The
    // widget fills the hole in ASCII; no pack spells a digit.
    //
    // The English value is byte-identical to the literal it replaces
    // (`FIELD_DEFAULTS` in `packages/fields/src/widgets/useFieldTranslation.ts`
    // carries the same one), so English and provider-less rendering are
    // unchanged.
    // objectui#10567 — the editable date-only face's notice for a stored value
    // written on a day that does not exist, the date-only sibling of
    // `dateTime.impossibleDay` below: an `<input type="date">` can only paint
    // such a value blank, so the widget names the stored string beside it.
    // `FIELD_DEFAULTS` in `packages/fields/src/widgets/useFieldTranslation.ts`
    // carries the same English value for provider-less rendering.
    date: {
      impossibleDay:
        'Збережене значення «{{value}}» не є реальною датою. Виберіть дату, щоб замінити його.',
    },
    // objectui#10474 — the editable date-time face's notice for a stored value
    // written on a day that does not exist. The `datetime-local` control can
    // only paint such a value blank, so the widget names the stored string
    // beside it; a blank control alone would hide it (objectui#3127).
    // `FIELD_DEFAULTS` in `packages/fields/src/widgets/useFieldTranslation.ts`
    // carries the same English value for provider-less rendering.
    dateTime: {
      impossibleDay:
        'Збережене значення «{{value}}» не є реальною датою. Виберіть дату й час, щоб замінити його.',
    },
    // objectui#12622 — the record form's date picker: its two shortcuts,
    // the clear / calendar buttons' accessible names, and the notice for
    // typed text that names no date ({{format}} is the locale pattern).
    datePicker: {
      today: 'Сьогодні',
      tomorrow: 'Завтра',
      clear: 'Очистити дату',
      openCalendar: 'Відкрити календар',
      time: 'Час',
      hour: 'Година',
      minute: 'Хвилина',
      invalid:
        'Не збережено: «{{value}}» не є датою. Уведіть її у форматі {{format}} або виберіть у календарі.',
    },
    number: {
      badInput:
        'Не збережено: текст у цьому полі не є числом. Уведіть звичайний десятковий дріб (приклад: {{example}}).',
    },
    // objectui#3342 — the tags widget's input hint, shown while the tag list
    // is empty. The author-declared `field.placeholder` always wins over this.
    tags: {
      placeholder: 'Уведіть і натисніть Enter, щоб додати…',
    },
    // objectui#4028 — `AddressField`'s five sub-labels, previously English
    // string literals with no key at all: on a Chinese console every address
    // field showed five English words in the middle of an otherwise fully
    // translated form, and an app had NO way to reach them. The parts are not
    // fields on the object (`billing_address` is a single `address` column),
    // so there was nothing for a translation bundle to key on and no
    // `subLabels` property to declare — the only workaround left was to stop
    // using `Field.address()` and author five text fields, losing the
    // structured value, geocoding and map view.
    //
    // Values are byte-identical to the literals they replace, so English and
    // provider-less rendering are unchanged (`FIELD_DEFAULTS` in
    // `packages/fields/src/widgets/useFieldTranslation.ts` carries the same
    // five, which is what a host with no `I18nProvider` renders).
    //
    // The five INPUT PLACEHOLDERS that sat next to these labels are gone
    // rather than keyed — see the widget for that measurement.
    address: {
      street: 'Вулиця',
      city: 'Місто',
      state: 'Штат / область',
      postalCode: 'Поштовий індекс',
      country: 'Країна',
    },
    // objectui#3406 — the accessible sentence of the textarea character
    // counter, rendered only when the field declares `maxLength`. The visible
    // text is `{count}/{max}` digits and needs no locale. ONE interpolated key
    // rather than assembled parts: ja and ko put the cap BEFORE the count
    // ("of {{max}} characters, {{count}}"), an order no code-side
    // concatenation can produce.
    //
    // objectui#3408 moved it off the `aria-live` region and onto the
    // textarea's `aria-describedby` — read once when focus lands, instead of
    // re-announced on every keystroke — and added `charactersRemaining` as the
    // one thing that IS still spoken while typing: after a pause, and only
    // inside the last 10% (or last 20 characters) of the cap.
    //
    // `charactersRemaining` is deliberately colon-form. `count` sends i18next
    // to plural lookup before the base key, and these packs declare the base
    // key only; a sentence whose grammar does not bend on the number is
    // correct at 1 without ten plural entries per pack.
    // objectui#11689 — `BooleanCellRenderer`'s own words (every list
    // surface draws them): the badge a status-named column (`active`,
    // `enabled`, …) shows for `false`, where `{{label}}` is the column label
    // the face is handed, and the completion indicator's accessible names.
    boolean: {
      offBadge: '{{label}} — Вимкнено',
      completed: 'Завершено',
      notCompleted: 'Не завершено',
    },
    textarea: {
      characterCount: 'Кількість символів: {{count}} із {{max}}',
      charactersRemaining: 'Залишилося символів: {{count}}',
    },
    // objectui#11131 — the line-items grid's default chrome (`GridField`):
    // its Add button, the read-only grid's empty state, and the list-mode
    // grid's empty state. An authored `addLabel` still wins over `addLine`,
    // and it fills the `{{label}}` hole (`detail.add` when none is authored).
    //
    // objectui#11145 — the rest of that chrome: the column chooser's heading,
    // the computed cell's tooltip, and the row actions. Each row action has
    // one key, read by both its `aria-label` and its `title`. The chooser's
    // button reads `table.columns`, the footer `form.masterDetail.total` and
    // the drag handle `view.dragToReorder`.
    grid: {
      addLine: 'Додати рядок',
      noItems: 'Немає позицій',
      noItemsAddHint: 'Позицій ще немає — натисніть «{{label}}», щоб почати.',
      optionalColumns: "Необов'язкові колонки",
      computed: 'Обчислюване',
      openRow: 'Відкрити рядок',
      duplicateRow: 'Дублювати рядок',
      removeRow: 'Видалити рядок',
    },
  },
  table: {
    rowsPerPage: 'Рядків на сторінці',
    noRows: 'Немає рядків для показу',
    sortAsc: 'Сортувати за зростанням',
    sortDesc: 'Сортувати за спаданням',
    columns: 'Колонки',
    exportCSV: 'Експорт CSV',
    selectRow: 'Вибрати рядок',
    selectAllRows: 'Вибрати всі рядки',
    rowActions: 'Дії над рядком',
    hideColumn: 'Сховати колонку',
    pageInfo: 'Сторінка {{current}} з {{total}}',
    firstPage: 'Перша сторінка',
    previousPage: 'Попередня сторінка',
    nextPage: 'Наступна сторінка',
    lastPage: 'Остання сторінка',
    totalRecords: 'Усього: {{count}}',
    noResults: 'Результатів не знайдено',
    noResultsHint: 'Спробуйте змінити фільтри або запит пошуку.',
    cancelAll: 'Скасувати все',
    saveAll: 'Зберегти все ({{count}})',
    addRecord: 'Додати запис',
    open: 'Відкрити',
    search: 'Пошук…',
    modified: 'Змінено рядків: {{count}}',
    modified_one: 'Змінено {{count}} рядок',
    modified_few: 'Змінено {{count}} рядки',
    modified_many: 'Змінено рядків: {{count}}',
    modified_other: 'Змінено рядків: {{count}}',
    saved: 'Збережено рядків: {{count}}',
    saved_one: 'Збережено {{count}} рядок',
    saved_few: 'Збережено {{count}} рядки',
    saved_many: 'Збережено рядків: {{count}}',
    saved_other: 'Збережено рядків: {{count}}',
    saveFailed: 'Не вдалося зберегти',
    selected: 'Вибрано: {{count}}',
    selected_one: 'Вибрано: {{count}}',
    selected_few: 'Вибрано: {{count}}',
    selected_many: 'Вибрано: {{count}}',
    selected_other: 'Вибрано: {{count}}',
    edit: 'Змінити',
    delete: 'Видалити',
    // The inline-edit row buttons and the hover open affordance (#25916).
    openRecord: 'Відкрити запис',
    cancelChanges: 'Скасувати зміни',
    saveRow: 'Зберегти рядок',
  },
  grid: {
    actions: 'Дії',
    edit: 'Змінити',
    delete: 'Видалити',
    export: 'Експорт',
    exportAs: 'Експорт як {{format}}',
    loading: 'Завантаження таблиці…',
    errorLoading: 'Помилка завантаження таблиці',
    pullToRefresh: 'Потягніть, щоб оновити',
    refreshing: 'Оновлення…',
    openRecord: 'Відкрити запис',
    recordUnavailable: '{{object}} · запис недоступний',
    openMenu: 'Відкрити меню',
    bulkSelected: 'Вибрано: {{count}}',
    bulkSelected_one: 'Вибрано: {{count}}',
    bulkSelected_few: 'Вибрано: {{count}}',
    bulkSelected_many: 'Вибрано: {{count}}',
    bulkSelected_other: 'Вибрано: {{count}}',
    bulkSelectedAllMatches: 'Вибрано: {{count}} (усі збіги)',
    bulkClear: 'Очистити',
    bulkAllOnPage: 'На цій сторінці вибрано всі {{count}} записів.',
    bulkAllOnPage_one: 'На цій сторінці вибрано {{count}} запис.',
    bulkAllOnPage_few: 'На цій сторінці вибрано всі {{count}} записи.',
    bulkAllOnPage_many: 'На цій сторінці вибрано всі {{count}} записів.',
    bulkAllOnPage_other: 'На цій сторінці вибрано всі {{count}} записів.',
    bulkSelectAllMatching: 'Вибрати всі {{count}} записів, що збігаються',
    bulkAllMatchingSelected: 'Вибрано всі {{count}} записів, що збігаються.',
    bulkSelectAllMatchingCapped: 'Вибрати перші {{cap}} із {{total}} записів, що збігаються',
    bulkAllMatchingSelectedCapped: 'Буде оброблено лише перші {{cap}} із {{total}} записів, що збігаються.',
    bulkSelectedAllMatchesCapped: 'Вибрано {{cap}} (з {{total}} збігів)',
    bulkActions: 'Масові дії',
    empty: 'Порожньо',
    yes: 'Так',
    no: 'Ні',
    systemFields: 'Системні',
    // objectui#10881 — the grouped grid's two refusals: over a data source
    // that cannot answer the group header query, and over rows a host
    // handed in while declaring them one page of more. `queryGroupHeaders`
    // is the member's name and stays untranslated.
    grouping: {
      needsHeaderQuery:
        'Це подання згруповане, але його джерело даних не реалізує queryGroupHeaders, тому групи неможливо порахувати. Вилучіть групування, щоб показати записи.',
      needsWholeRows:
        "Для групування потрібні всі записи, але в цю таблицю передано лише одну сторінку з них, тому групи неможливо порахувати. Передайте всі записи або дозвольте таблиці отримати їх із джерела даних, яке реалізує queryGroupHeaders.",
    },
    // Column-footer aggregate prefixes, keyed by the spec's `ColumnSummary`
    // vocabulary (objectui#4024). The footer already formatted its NUMBER
    // through the locale-aware formatter and then put a hardcoded English
    // `Avg: ` / `Sum: ` in front of it.
    //
    // `pattern` is a key rather than a `': '` baked into the renderer: the
    // separator is translatable content — ja/zh set a fullwidth colon, ar runs
    // right-to-left — so a pack owns the whole shape. Same reasoning as
    // `collaboration.resolvedSuffix` below.
    //
    // `pagePattern` is `pattern` for a figure that covers only the page on
    // screen of a larger matched set — the footer's fallback when the server
    // cannot answer the whole set's figure (objectui#12081 item 3). A whole
    // pattern rather than a suffix, for the same reason: where the scope sits
    // is the pack's.
    //
    // `countEmpty`/`percentEmpty` (and the filled pair) deliberately share a
    // word: the trailing `%` is what tells the two families apart on screen,
    // exactly as the renderer's own comment says.
    summary: {
      pattern: '{{label}}: {{value}}',
      pagePattern: '{{label}} (на цій сторінці): {{value}}',
      count: 'Кількість',
      countEmpty: 'Порожні',
      countFilled: 'Заповнені',
      countUnique: 'Унікальні',
      percentEmpty: 'Порожні',
      percentFilled: 'Заповнені',
      sum: 'Сума',
      avg: 'Середнє',
      min: 'Мін',
      max: 'Макс',
    },
    toolbar: {
      densityMode: 'Щільність',
      densityCompact: 'Компактно',
      densityComfortable: 'Звично',
      densitySpacious: 'Просторо',
      densityCycleHint: '{{label}} (натисніть, щоб переключити)',
      densityCycleShortHint: 'Натисніть, щоб переключити',
    },
    import: {
      title: 'Імпорт {{object}}',
      stepUpload: 'Завантаження',
      stepMapping: 'Зіставлення',
      stepPreview: 'Перегляд',
      uploadDescription: 'Завантажте файл CSV або Excel чи вставте вміст із таблиці, щоб почати.',
      mappingDescription: "Зіставте колонки з полями об'єкта.",
      previewDescription: 'Перегляньте дані перед імпортом.',
      dragDrop: 'Перетягніть сюди файл CSV або Excel або натисніть, щоб вибрати',
      browseFiles: 'Вибрати файли',
      downloadTemplate: 'Завантажити шаблон',
      downloadTemplateHint: "Отримайте файл Excel з колонками, доступними для імпорту (обов'язкові позначено *), з інструкціями щодо заповнення.",
      templateFileName: '{{object}}-import-template',
      templateDownloadFailed: 'Не вдалося завантажити шаблон. Спробуйте ще раз.',
      templateNotPermitted: "У вас немає дозволу створювати записи цього об'єкта, тому шаблон імпорту недоступний.",
      parsing: 'Розбір…',
      pasteHint: 'або вставте (Ctrl/⌘+V) рядки, скопійовані з Excel або Google Таблиць',
      legacyXls: 'Застарілі файли .xls не підтримуються — збережіть їх знову як .xlsx.',
      unsupportedFile: 'Непідтримуваний тип файла. Використовуйте CSV, TSV або Excel (.xlsx).',
      parseFailed: 'Не вдалося прочитати цей файл. Перевірте формат і спробуйте ще раз.',
      fileNeedsHeader: 'Файл має містити рядок заголовків і принаймні один рядок даних.',
      mappingTemplate: 'Шаблон зіставлення:',
      chooseTemplate: 'Вибрати шаблон…',
      noSavedTemplates: 'Немає збережених шаблонів',
      noneOption: '— Немає —',
      saveCurrent: 'Зберегти поточний',
      saveCurrentNeedsMapping: 'Зіставте щонайменше одну колонку, щоб зберегти шаблон.',
      templateName: 'Назва шаблону',
      save: 'Зберегти',
      deleteTemplate: 'Видалити шаблон',
      savedMapping: 'Збережене зіставлення:',
      chooseSavedMapping: 'Виберіть збережене зіставлення…',
      manualMapping: '— Зіставити колонки вручну —',
      transform: 'Перетворення',
      savedMappingHint: 'Зіставлення «{{name}}» застосовує перейменування, перетворення та приведення типів на сервері. Зіставлення колонок лише для читання.',
      savedMappingPreviewNote: 'У попередньому перегляді показано ваші вихідні колонки; при імпорті зіставлення «{{name}}» застосовує на сервері перейменування, перетворення та приведення типів.',
      csvColumn: 'Колонка',
      mapsTo: 'Зіставляється з',
      typeMismatch: 'Схоже на {{type}}',
      autoMatched: 'Зіставлено автоматично',
      autoMatchedSummary: 'Автоматично зіставлено колонок: {{count}} — перегляньте й скоригуйте нижче.',
      autoMatchedSummary_one: 'Автоматично зіставлено {{count}} колонку — перегляньте й скоригуйте нижче.',
      autoMatchedSummary_few: 'Автоматично зіставлено {{count}} колонки — перегляньте й скоригуйте нижче.',
      autoMatchedSummary_many: 'Автоматично зіставлено колонок: {{count}} — перегляньте й скоригуйте нижче.',
      autoMatchedSummary_other: 'Автоматично зіставлено колонок: {{count}} — перегляньте й скоригуйте нижче.',
      confidence: {
        high: 'Висока впевненість',
        medium: 'Середня впевненість',
        low: 'Низька впевненість',
      },
      type: {
        number: 'Число',
        boolean: 'Логічне значення',
        date: 'Дата',
        datetime: 'Дата й час',
        text: 'Текст',
      },
      status: 'Статус',
      skipColumn: 'Пропустити колонку',
      skip: '— Пропустити —',
      mapped: 'Зіставлено',
      skipped: 'Пропущено',
      rowsWithErrors: 'Рядків з помилками: {{count}}',
      rowsWithErrors_one: '{{count}} рядок з помилками',
      rowsWithErrors_few: '{{count}} рядки з помилками',
      rowsWithErrors_many: 'Рядків з помилками: {{count}}',
      rowsWithErrors_other: 'Рядків з помилками: {{count}}',
      rowsCorrected: 'Виправлено рядків: {{count}}',
      rowsCorrected_one: 'Виправлено {{count}} рядок',
      rowsCorrected_few: 'Виправлено {{count}} рядки',
      rowsCorrected_many: 'Виправлено рядків: {{count}}',
      rowsCorrected_other: 'Виправлено рядків: {{count}}',
      clickToFix: '— натисніть на підсвічену комірку, щоб виправити її на місці.',
      showingRows: 'Показано {{shown}} рядків із {{total}}',
      importing: 'Імпорт… {{progress}}%',
      asyncQueued: 'У черзі — готується імпорт…',
      asyncProcessing: 'Імпорт {{processed}} рядків із {{total}}… {{progress}}%',
      asyncLargeHint: 'Цей файл великий, тому його буде імпортовано у фоновому режимі.',
      largeSampleNotice: 'Попередній перегляд перших {{shown}} рядків із {{total}}.',
      cancelImport: 'Скасувати імпорт',
      importCancelled: 'Імпорт скасовано',
      resultsTruncated: 'Показано результати перших {{count}} рядків (з {{total}}).',
      resultsTruncated_one: 'Показано результат першого {{count}} рядка (з {{total}}).',
      resultsTruncated_few: 'Показано результати перших {{count}} рядків (з {{total}}).',
      resultsTruncated_many: 'Показано результати перших {{count}} рядків (з {{total}}).',
      resultsTruncated_other: 'Показано результати перших {{count}} рядків (з {{total}}).',
      importComplete: 'Імпорт завершено',
      importPartial: 'Імпорт завершено з помилками',
      importFailed: 'Помилка імпорту',
      imported: 'Імпортовано: {{count}}',
      createdCount: 'Створено: {{count}}',
      createdCount_one: 'Створено: {{count}}',
      createdCount_few: 'Створено: {{count}}',
      createdCount_many: 'Створено: {{count}}',
      createdCount_other: 'Створено: {{count}}',
      updatedCount: 'Оновлено: {{count}}',
      updatedCount_one: 'Оновлено: {{count}}',
      updatedCount_few: 'Оновлено: {{count}}',
      updatedCount_many: 'Оновлено: {{count}}',
      updatedCount_other: 'Оновлено: {{count}}',
      skippedCount: 'Пропущено: {{count}}',
      moreErrors: '… і ще {{count}} помилок',
      moreErrors_one: '… і ще {{count}} помилка',
      moreErrors_few: '… і ще {{count}} помилки',
      moreErrors_many: '… і ще {{count}} помилок',
      moreErrors_other: '… і ще {{count}} помилок',
      downloadFailed: 'Завантажити рядки з помилками',
      options: 'Параметри імпорту',
      writeMode: 'Коли рядок збігається з наявним записом',
      writeModeOpt: {
        insert: 'Завжди створювати новий',
        update: 'Оновити наявний (пропустити, якщо немає збігу)',
        upsert: 'Оновити за збігу, інакше створити',
      },
      matchFields: 'Ключі збігу',
      matchFieldsPlaceholder: 'Виберіть поля збігу…',
      matchFieldsHint: 'Рядки зіставляються з наявними записами за цими полями.',
      needMatchFields: 'Виберіть щонайменше одне поле для збігу.',
      matchOnlyField: '(лише для збігу)',
      optCreateOptions: 'Зберігати невідомі значення варіантів',
      optSkipBlankKey: 'Пропускати рядки з порожнім значенням ключа збігу',
      optBackground: 'Імпортувати у фоновому режимі',
      optBackgroundHint: '(виконується як скасовувана задача)',
      validate: 'Перевірити дані',
      validating: 'Перевірка…',
      validateHint: 'Перевірте кожен рядок на сервері перед імпортом.',
      validatePassed: 'Усі {{ok}} рядків коректні.',
      validateFailed: 'Коректних: {{ok}}, з помилками: {{errors}}.',
      errorRowPrefix: 'Рядок {{row}}: ',
      referenceNotFound: 'Немає запису, що відповідає «{{value}}»',
      referenceAmbiguous: '«{{value}}» відповідає більш ніж одному запису — використайте унікальне значення або ідентифікатор запису',
      invalidBoolean: '«{{value}}» не є коректним значенням true/false',
      invalidNumber: '«{{value}}» не є коректним числом',
      invalidDate: '«{{value}}» не є коректною датою',
      invalidTime: '«{{value}}» не є коректним часом',
      invalidOption: '«{{value}}» не належить до дозволених варіантів',
      requiredValue: "Це поле обов'язкове",
      matchAmbiguous: 'Відповідає більш ніж одному наявному запису — використайте унікальне значення або ідентифікатор запису',
      history: 'Історія',
      historyBack: 'Назад до імпорту',
      historyDescription: "Нещодавні імпорти для цього об'єкта.",
      historyHint: 'Фонові задачі імпорту, від нових до старих.',
      historyRefresh: 'Оновити',
      historyLoading: 'Завантаження…',
      historyEmpty: 'Імпортів ще немає.',
      historyUnsupported: 'Історія імпорту недоступна для цього джерела даних.',
      historyColStatus: 'Статус',
      historyColRows: 'Рядки',
      historyColResult: 'Результат',
      historyColTime: 'Коли',
      errorCount: 'Помилок: {{count}}',
      errorCount_one: 'Помилок: {{count}}',
      errorCount_few: 'Помилок: {{count}}',
      errorCount_many: 'Помилок: {{count}}',
      errorCount_other: 'Помилок: {{count}}',
      undoImport: 'Скасувати імпорт',
      undoing: 'Скасування…',
      undoConfirm: 'Скасувати цей імпорт? Створені ним записи буде видалено, а оновлені — відновлено до попередніх значень.',
      reverted: 'Скасовано',
      undoPartial: 'Не скасовано рядків: {{count}}. Виконайте скасування знову, щоб повторити лише ці рядки.',
      undoPartial_one: 'Не скасовано {{count}} рядок. Виконайте скасування знову, щоб повторити лише цей рядок.',
      undoPartial_few: 'Не скасовано {{count}} рядки. Виконайте скасування знову, щоб повторити лише ці рядки.',
      undoPartial_many: 'Не скасовано рядків: {{count}}. Виконайте скасування знову, щоб повторити лише ці рядки.',
      undoPartial_other: 'Не скасовано рядків: {{count}}. Виконайте скасування знову, щоб повторити лише ці рядки.',
      jobStatus: {
        pending: 'Очікує',
        running: 'Виконується',
        succeeded: 'Успішно',
        failed: 'Помилка',
        cancelled: 'Скасовано',
      },
      cancel: 'Скасувати',
      back: 'Назад',
      next: 'Далі',
      close: 'Закрити',
      importNRows: 'Імпортувати {{count}} рядків',
      importNRows_one: 'Імпортувати {{count}} рядок',
      importNRows_few: 'Імпортувати {{count}} рядки',
      importNRows_many: 'Імпортувати {{count}} рядків',
      importNRows_other: 'Імпортувати {{count}} рядків',
      importingProgress: 'Імпорт…',
      required: "Обов'язково",
      invalidType: 'Неправильний {{type}}',
      legacyReferenceBlocked: "Імпорт заблоковано: {{fields}} — поля пов'язаних записів, які потребують серверного маршруту імпорту, щоб перетворювати назви на ідентифікатори записів, а це підключення його не підтримує. Імпорт їх як звичайного тексту пошкодив би дані. Оновіть бекенд/клієнт або зніміть зіставлення цих колонок і імпортуйте їх окремо.",
      missingRequiredHint: "Продовження неможливе — не зіставлено обов'язкові поля: {{fields}}. Додайте відповідну колонку до файла або поверніться й завантажте файл, що її містить.",
      legacyFallbackNotice: "Імпортовано через резервний режим сумісності: це підключення не підтримує серверний маршрут імпорту, тому значення збережено як текст без серверного перетворення типів. Оновіть бекенд/клієнт для повної підтримки імпорту (перетворення типів і пошук пов'язаних записів).",
      notAllowed: "Цей об'єкт не відкрито для імпорту.",
      requiredMark: '*',
    },
    bulk: {
      confirmDefault: 'Це застосується до {{count}} записів.',
      confirmDefault_one: 'Це застосується до {{count}} запису.',
      confirmDefault_few: 'Це застосується до {{count}} записів.',
      confirmDefault_many: 'Це застосується до {{count}} записів.',
      confirmDefault_other: 'Це застосується до {{count}} записів.',
      overLimit: 'Вибрано ({{count}}) більше за ліміт дії ({{limit}}). Зменшіть вибір, щоб продовжити.',
      affectedRecords: 'Записи, яких стосується дія ({{count}}):',
      skippedIneligible: '{{count}} вибраних записів не підходять для цієї дії і будуть пропущені.',
      skippedIneligible_one: '{{count}} вибраний запис не підходить для цієї дії і буде пропущений.',
      skippedIneligible_few: '{{count}} вибрані записи не підходять для цієї дії і будуть пропущені.',
      skippedIneligible_many: '{{count}} вибраних записів не підходять для цієї дії і будуть пропущені.',
      skippedIneligible_other: '{{count}} вибраних записів не підходять для цієї дії і будуть пропущені.',
      rowFallback: 'Рядок {{index}}',
      andMore: '… і ще {{count}}',
      processed: 'Оброблено {{count}} / {{total}}',
      processedFailed: ' · помилок: {{count}}',
      undonePrefix: 'Скасовано — ',
      succeeded: 'Успішно {{count}} / {{total}}',
      resultFailed: ' · Помилки: {{count}}',
      succeededRecords: 'Успішні записи',
      retry: 'Спробувати знову',
      downloadErrorCsv: 'Завантажити CSV з помилками',
      cancel: 'Скасувати',
      back: 'Назад',
      next: 'Далі',
      run: 'Виконати',
      running: 'Виконується…',
      undo: 'Скасувати',
      undoing: 'Скасування…',
      done: 'Готово',
      loading: 'Завантаження…',
    },
  },
  calendar: {
    today: 'Сьогодні',
    month: 'Місяць',
    week: 'Тиждень',
    day: 'День',
    allDay: 'Увесь день',
    newEvent: 'Нова подія',
    moreEvents: '+{{count}} ще',
    unscheduled: 'Поза розкладом ({{count}})',
    loading: 'Завантаження календаря…',
    loadError: 'Помилка: {{message}}',
    configRequired: "Потрібна конфігурація календаря. Укажіть startDateField — єдиний обов'язковий ключ календаря; заголовок події працює і без titleField.",
    configRequiredHint: 'Він належить до календарного блоку подання. У сторінки інтерфейсу немає власного календарного слота: спрямуйте її sourceView на подання, що оголошує такий блок.',
    eventDetails: 'Подробиці події',
    pullToRefresh: 'Потягніть, щоб оновити',
    refreshing: 'Оновлення…',
    onDate: 'Станом на {{date}}',
    eventTitle: 'Заголовок',
    eventTitlePlaceholder: 'Про що ця подія?',
    creating: 'Створення…',
    titleRequired: "Заголовок обов'язковий",
    // A drag-to-reschedule the server refused because the record is gone for
    // this session: deleted, or no longer visible to it. `{{object}}` is the
    // object's label; with none to show, `form.recordNotFoundOrHidden` is used.
    rescheduleNotFound: "Запис {{object}} більше не існує, або ви більше не маєте до нього доступу.",
    a11y: {
      region: 'Календар',
      grid: 'Сітка календаря',
      goToToday: 'Перейти до сьогодні',
      previousPeriod: 'Попередній період',
      nextPeriod: 'Наступний період',
      currentDate: 'Поточна дата: {{date}}',
      dayCell: '{{date}}, подій: {{count}}',
      dayCell_one: '{{date}}, {{count}} подія',
      dayCell_few: '{{date}}, {{count}} події',
      dayCell_many: '{{date}}, подій: {{count}}',
      dayCell_other: '{{date}}, подій: {{count}}',
      resizeEventEnd: 'Змінити кінець події',
      resizeEventEndHint: 'Потягніть, щоб змінити кінцеву дату',
      resizeStart: 'Зміна початку',
      resizeEnd: 'Зміна кінця',
    },
  },
  list: {
    loading: 'Завантаження записів…',
    recordCount: '{{count}} записів',
    recordCount_one: '{{count}} запис',
    recordCount_few: '{{count}} записи',
    recordCount_many: '{{count}} записів',
    recordCount_other: '{{count}} записів',
    // objectstack#27355 — a windowed calendar's footer: the count is the records
    // loaded for the dates it draws, not the records the view matches.
    calendarRecordCount: 'Завантажено записів на ці дати: {{count}}',
    calendarRecordCount_one: 'Завантажено записів на ці дати: {{count}}',
    calendarRecordCount_few: 'Завантажено записів на ці дати: {{count}}',
    calendarRecordCount_many: 'Завантажено записів на ці дати: {{count}}',
    calendarRecordCount_other: 'Завантажено записів на ці дати: {{count}}',
    addRecord: 'Додати запис',
    // objectui#12703 — the compact list's footer link to the object's list or the block's view.
    viewAll: 'Переглянути всі',
    // objectstack#26613 — the capped list's footer link, with the records the list holds.
    viewAllCount: 'Переглянути всі {{count}} записів',
    viewAllCount_one: 'Переглянути {{count}} запис',
    viewAllCount_few: 'Переглянути всі {{count}} записи',
    viewAllCount_many: 'Переглянути всі {{count}} записів',
    viewAllCount_other: 'Переглянути всі {{count}} записів',
    tabs: 'Вкладки',
    allRecords: 'Усі записи',
    sittingInQueue: 'У черзі',
    sittingInQueueHint: 'Показувати лише записи, що чекають у черзі, поки хтось їх забере',
    // objectui#13405 — the synthetic trailing tab a `showAllRecords` user-filter bar adds.
    userFilters: {
      allRecords: 'Усі записи',
    },
    search: 'Пошук',
    filter: 'Фільтр',
    filterRecords: 'Фільтр записів',
    filterActive: 'Фільтр, активних умов: {{count}}',
    filterActive_one: 'Фільтр, активних умов: {{count}}',
    filterActive_few: 'Фільтр, активних умов: {{count}}',
    filterActive_many: 'Фільтр, активних умов: {{count}}',
    filterActive_other: 'Фільтр, активних умов: {{count}}',
    sort: 'Сортування',
    sortRecords: 'Сортування записів',
    sortByIdSuffix: '(за ID)',
    sortRelationalHint:
      "Колонки, що посилаються на інший запис, не перелічено: їх можна сортувати лише за збереженим ідентифікатором, а не за назвою, показаною в комірці. Щоб сортувати за цією назвою, денормалізуйте її в цей об'єкт як збережене поле, яке записується при зміні джерела, і сортуйте за ним. Це не поле формул: воно віртуальне, тому для нього не зберігається колонка, і сервер відмовляється сортувати за ним.",
    sortRelationalPicked: 'Колонка з посиланням сортується за збереженим ідентифікатором, а не за показаною назвою.',
    resetSortToDefault: 'Скинути до типового подання',
    group: 'Групування',
    groupBy: 'Групувати за',
    export: 'Експорт',
    exportAs: 'Експорт як {{format}}',
    color: 'Колір',
    rowColor: 'Колір рядка',
    colorByField: 'Колір за полем',
    clear: 'Очистити',
    none: 'Немає',
    hideFields: 'Сховати поля',
    noItems: 'Записів не знайдено',
    noItemsMessage: 'Немає записів для показу. Спробуйте змінити фільтри або додати нові дані.',
    firstRunTitle: 'Тут поки порожньо',
    firstRunMessage: 'Створіть свій перший запис, щоб почати.',
    noMatches: 'Немає записів за збігом',
    noMatchesMessage: 'Жоден запис не відповідає поточним фільтрам або пошуку. Спробуйте змінити або очистити їх.',
    clearSearch: 'Очистити пошук',
    clearFilters: 'Очистити фільтри',
    viewFilterNoMatchesMessage: 'Жоден запис не відповідає фільтру цього подання.',
    ownedNoneTitle: 'Вашого тут поки немає',
    ownedNoneMessage: 'Це подання показує лише ваші записи, а у вас їх поки немає.',
    noneVisibleTitle: 'Немає записів, доступних вам',
    noneVisibleMessage: 'Тут немає записів, до яких ви маєте доступ. Якщо ви очікували їх побачити, попросіть адміністратора надати доступ.',
    loadErrorTitle: 'Не вдалося завантажити записи',
    loadErrorMessage: 'Сталася помилка під час завантаження цих даних. Перевірте підключення і спробуйте ще раз.',
    loadErrorForbiddenTitle: 'У вас немає доступу',
    loadErrorForbiddenMessage: 'У вас немає дозволу переглядати ці записи. Зверніться до адміністратора, якщо вважаєте, що доступ вам потрібен.',
    loadErrorUnauthorizedTitle: 'Потрібний вхід',
    loadErrorUnauthorizedMessage: 'Ваш сеанс минув або ви вийшли. Увійдіть знову, щоб переглянути ці записи.',
    loadErrorRejectedTitle: 'Запит цього подання відхилено',
    loadErrorRejectedMessage: 'Сервер не зміг обробити фільтр або параметри запиту цього подання. Очищення фільтрів зазвичай допомагає; якщо подання збережено в такому вигляді, адміністратору потрібно його виправити.',
    loadErrorUnknownColumnMessage: 'Колонка «{{column}}» показує поле «{{field}}», якого немає в {{object}}. Адміністратору потрібно виправити або вилучити цю колонку в поданні.',
    loadErrorUnknownFieldMessage: 'Запит цього подання називає поле «{{field}}», якого немає в {{object}}. Очищення фільтрів зазвичай допомагає; якщо подання збережено в такому вигляді, адміністратору потрібно його виправити.',
    loadErrorApiDisabledTitle: "Цей об'єкт недоступний через API",
    loadErrorApiDisabledMessage: "Ця сторінка не може завантажити записи, бо об'єкт не відкрито через API. Це налаштування самого об'єкта, а не дозвіл — адміністратор має спершу увімкнути для нього доступ через API.",
    retry: 'Спробувати знову',
    managedBy: {
      system: {
        title: 'Тут поки порожньо',
        message:
          "Елементи з'являються автоматично, коли виконується дія-джерело (напр. Подати на затвердження, Спільний доступ, Запросити). Виконайте одну з цих дій над вихідним записом, щоб створити рядок.",
      },
      appendOnly: {
        title: 'Подій не записано',
        message:
          'Це незмінний журнал аудиту. Рядки записує платформа, коли відбуваються події — історію можна експортувати, але звідси записи створити не можна.',
      },
      betterAuth: {
        title: 'Немає записів ідентичності',
        message:
          'Ці записи створює постачальник аутентифікації — через вхід, підготовку облікових записів і потоки безпеки — а не додаються вручну тут.',
      },
      betterAuthUser: {
        title: 'Користувачів ще немає',
        message:
          "Облікові записи користувачів створює постачальник аутентифікації, а не створюються тут. Запросіть колег до вашої організації, і вони з'являться автоматично при першому вході (SSO підготовка за потреби). Кінцеві користувачі застосунку з'являються, коли реєструються через ваш застосунок.",
      },
      betterAuthTeam: {
        title: 'Команд ще немає',
        message:
          "Команди об'єднують учасників в межах організації. Створіть команду кнопкою «Створити команду», або вони з'являться через потоки організації та SSO підготовки вашого постачальника аутентифікації.",
      },
    },
    showAll: 'Показати все',
    refresh: 'Оновити',
    pullToRefresh: 'Потягніть, щоб оновити',
    refreshing: 'Оновлення…',
    share: 'Спільний доступ',
    sharingLockedBy: 'Заблоковано користувачем {{user}}',
    print: 'Друк',
    hideFieldsTitle: 'Сховати поля',
    dataLimitReached: 'Показано перші {{limit}} записів. Даних може бути більше.',
    display: 'Показ',
    layout: 'Макет',
    rowNumbers: 'Номери рядків',
    resetToViewDefault: 'Скинути до типового подання',
    recordOpen: 'Відкриття записів',
    recordOpenDrawer: 'Панель',
    recordOpenPage: 'Уся сторінка',
    recordOpenNote: "Ваш власний параметр, а не частина оголошення об'єкта. Позначка ↗ у записі завжди відкриває повну сторінку.",
    recordOpenDeclaredPage: "Цей об'єкт оголошено так, що він відкривається повною сторінкою",
    addGroup: 'Додати поле групування',
    collapsedByDefault: 'Типово згорнуто',
    removeGroup: 'Вилучити',
    groupingUnstoredNotice: "Цей список не можна групувати за {{fields}}: значення обчислюється при показі, а не зберігається. Список показано без цього групування.",
    groupingUnstoredRemove: 'Вилучити з групування',
    inlineEditShort: 'Правка на місці',
    inlineEditLabel: 'Редагуйте записи на місці (натисніть комірку, щоб змінити)',
  },
  managedByBadge: {
    config: {
      short: 'Налаштовано тут',
      title: 'Конфігурація адміністратора',
      body: 'Ці рядки визначають, як платформа поводиться під час виконання. Авторуйте їх тут; дані виконання, які вони створюють, живуть в окремій таблиці.',
    },
    system: {
      short: 'Керується системою',
      title: 'Керується платформою',
      body: 'Рядки тут створюються автоматично, коли над вихідним записом виконуються дії. Наведений список — поверхня моніторингу лише для читання; дії над рядками (Затвердити, Відкликати, Надіслати знову, …) живуть у кожному рядку.',
    },
    systemWritable: {
      short: 'Вбудований · редаговний',
      title: 'Визначений платформою, доступний адміністратору для редагування',
      body: "Схему цього об'єкта визначає платформа, але рядки ви створюєте й редагуєте тут. Хто може змінювати, визначають делеговане адміністрування та безпека на рівні записів, а не цей знак.",
    },
    appendOnly: {
      short: 'Тільки читання · Журнал аудиту',
      title: 'Історичний запис лише для читання',
      body: 'Незмінний журнал аудиту. Рядки не можна створювати, змінювати або видаляти з інтерфейсу — їх записує платформа, коли відбуваються події. Використовуйте Експорт, щоб завантажити історію для перевірки відповідності.',
    },
    betterAuth: {
      short: 'Через службу ідентичності',
      title: 'Записується через вбудовану службу ідентичності',
      body: "Схема цього об'єкта належить {{provider}} — вбудованій службі ідентичності платформи. Створюйте й змінюйте ці записи діями на цій сторінці або через потоки входу, запрошення і безпеки; кожен із них проходить через цю службу. Редагування таблиці напряму обходило б хешування паролів, перевірку сеансів, двофакторну перевірку та хуки аудиту.",
    },
  },
  kanban: {
    addCard: 'Додати картку',
    addColumn: 'Додати колонку',
    moveCard: 'Перемістити картку',
    noCards: 'Немає карток',
    columnCards: 'Картки «{{column}}»',
    laneCards: 'Картки «{{column}} — {{lane}}»',
    dropBlocked: 'Картку з {{from}} не можна перемістити в {{to}}.',
    cardTitlePlaceholder: 'Уведіть заголовок картки…',
    uncategorized: 'Без категорії',
    loadMore: 'Завантажити ще',
    columns: 'колонок',
    requiredFieldsTitle: "Заповніть обов'язкові поля",
    requiredFieldsDescription: "Цей крок робить поля нижче обов'язковими. Заповніть їх, щоб продовжити.",
    dnd: {
      start: 'Взято картку {{card}} у колонці {{column}}.',
      overCard: 'Переміщення {{card}} над {{target}} у колонці {{column}}.',
      overColumn: 'Переміщення {{card}} над колонкою {{column}}.',
      overNone: 'Переміщення {{card}}. Вона не над колонкою.',
      moved: 'Переміщено картку {{card}} до колонки {{column}}.',
      dropped: 'Відпущено картку {{card}}. Вона залишається в колонці {{column}}.',
      cancelled: 'Скасовано переміщення картки {{card}}. Вона залишається в колонці {{column}}.',
      untitledCard: 'картка без назви',
      unnamedColumn: 'колонка без назви',
      instructions: 'Щоб перемістити цю картку в іншу колонку, перетягніть її вказівником або пальцем.',
      dragging: 'Перетягування {{card}}',
    },
  },
  timeline: {
    bucket: {
      earlier: 'Раніше',
      today: 'Сьогодні',
      tomorrow: 'Завтра',
      thisWeek: 'Цього тижня',
      nextWeek: 'Наступного тижня',
      later: 'Пізніше',
      noDate: 'Без дати',
      unassigned: 'Не призначено',
    },
    scale: {
      week: 'Тиждень {{n}}',
      quarter: 'К{{quarter}} {{year}}',
    },
    gantt: {
      rowLabel: 'Позиції',
      unusableRange: {
        malformedDate:
          'Непридатний діапазон дат діаграми Ганта — {{path}} має значення {{value}}, яке не є коректною датою. Кожна дата діаграми має розбиратися: startDate і endDate на кожному елементі рядка, плюс будь-які minDate / maxDate, зафіксовані в схемі.',
        malformedRow:
          "Непридатні рядки діаграми Ганта — {{path}} має значення {{value}}, яке не є формою рядка. Діаграма Ганта малює позиції як список рядків, кожен рядок — об'єкт із позначкою та власними позиціями, а позиції кожного рядка — список смуг; null, число, рядок або простий об'єкт у жодному з цих місць неможливо намалювати.",
        inverted:
          'Непридатний діапазон дат діаграми Ганта — minDate {{minDate}} після maxDate {{maxDate}}. Зафіксовані minDate / maxDate перекривають діапазон, обчислений із рядків, тому ця вісь не має колонок і на неї не можна поставити жодної смуги; поміняйте значення місцями.',
      },
    },
    unsupported: {
      objectBoundGantt: "Непідтримуваний варіант «gantt» — прив'язана до об'єкта часова шкала показує варіанти потоку ({{variants}}). Гант потребує буквальних рядків, кожен із власними вкладеними позиціями, тому вісь (scale) діаграми тут не діє.",
    },
    unconfigured: {
      noDateAxis: "Потрібна вісь дат часової шкали — це подання не оголошує жодного поля дати, а прив'язана до об'єкта шкала не вигадає його. Оголосіть одне з: {{fields}}. Перше — специфікаційна назва; решта — застарілі псевдоніми.",
    },
  },
  gantt: {
    column: {
      taskName: 'Назва завдання',
      start: 'Початок',
      end: 'Кінець',
    },
    toolbar: {
      prevPeriod: 'Попередній період',
      nextPeriod: 'Наступний період',
      zoomIn: 'Збільшити',
      zoomOut: 'Зменшити',
      jumpToToday: 'Перейти до сьогодні',
      today: 'Сьогодні',
      thisWeek: 'Цього тижня',
      thisMonth: 'Цього місяця',
      showTaskList: 'Показати список завдань',
      hideTaskList: 'Сховати список завдань',
      viewMode: 'Глибина деталізації часу',
      enterFullscreen: 'На весь екран',
      exitFullscreen: 'Вийти з повного екрана',
      criticalPath: 'Позначити критичний шлях',
      autoSchedule: 'Автопланування залежностей',
      exportPng: 'Експорт у PNG',
      exportPdf: 'Експорт у PDF',
      saveLayout: 'Зберегти макет',
      refresh: 'Оновити',
      undo: 'Скасувати',
      redo: 'Повторити',
    },
    viewMode: {
      day: 'День',
      week: 'Тиждень',
      month: 'Місяць',
      quarter: 'Квартал',
      year: 'Рік',
    },
    row: {
      expand: 'Розгорнути',
      collapse: 'Згорнути',
      open: 'Відкрити подробиці',
    },
    aria: {
      taskList: 'Список завдань',
      refreshing: 'Оновлення…',
    },
    tooltip: {
      days: 'д',
    },
    menu: {
      view: 'Переглянути подробиці',
      edit: 'Редагувати на місці',
      delete: 'Видалити',
      addPredecessor: 'Додати попередника…',
      addSuccessor: 'Додати наступника…',
      removeDependency: 'Вилучити залежність',
      noCandidates: 'Немає доступних завдань',
      searchTasks: 'Шукати завдання…',
    },
    delete: {
      title: 'Видалити це завдання?',
      body: '«{{title}}» буде видалено назавжди. Цю дію не можна скасувати.',
      cancel: 'Скасувати',
      confirm: 'Видалити',
      deleting: 'Видалення…',
    },
    drawer: {
      fallbackTitle: 'Подробиці завдання',
    },
    linkType: {
      fs: 'Завершення → Початок',
      ss: 'Початок → Початок',
      ff: 'Завершення → Завершення',
      sf: 'Початок → Завершення',
    },
    linkEnd: {
      start: 'початок',
      end: 'кінець',
    },
    link: {
      rejected: {
        self: 'Завдання не може залежати від самого себе.',
        locked: 'Цей рядок заблоковано, і не можна додати до нього нову залежність.',
        group: "Зведений рядок не може отримати залежність — пов'яжіть одне з його завдань.",
        cycle: "Це зв'язування створило б циклічну залежність.",
      },
    },
    conflict: {
      title: 'Конфлікт розкладу',
      body: 'Це переміщення конфліктує з обмеженнями залежностей. Автоматично перепланувати завдань, яких воно стосується: {{count}}?',
      body_one: 'Це переміщення конфліктує з обмеженнями залежностей. Автоматично перепланувати завдання, яких воно стосується: {{count}}?',
      body_few: 'Це переміщення конфліктує з обмеженнями залежностей. Автоматично перепланувати завдання, яких воно стосується: {{count}}?',
      body_many: 'Це переміщення конфліктує з обмеженнями залежностей. Автоматично перепланувати завдань, яких воно стосується: {{count}}?',
      body_other: 'Це переміщення конфліктує з обмеженнями залежностей. Автоматично перепланувати завдань, яких воно стосується: {{count}}?',
      confirm: 'Автоматично перепланувати',
      cancel: 'Залишити як є',
    },
    autoScheduleDlg: {
      title: 'Автопланування',
      body: "Пересунути завдань пізніше, щоб виконати зв'язки залежностей: {{count}}?",
      body_one: "Пересунути завдання пізніше, щоб виконати зв'язки залежностей: {{count}}?",
      body_few: "Пересунути завдання пізніше, щоб виконати зв'язки залежностей: {{count}}?",
      body_many: "Пересунути завдань пізніше, щоб виконати зв'язки залежностей: {{count}}?",
      body_other: "Пересунути завдань пізніше, щоб виконати зв'язки залежностей: {{count}}?",
      skipped: "Заблокованих завдань, які теж порушують зв'язки і були пропущені: {{count}}.",
      skipped_one: '{{count}} заблоковане завдання також порушує зв\'язки і було пропущене.',
      skipped_few: '{{count}} заблоковані завдання також порушують зв\'язки і були пропущені.',
      skipped_many: "Заблокованих завдань, які теж порушують зв'язки і були пропущені: {{count}}.",
      skipped_other: "Заблокованих завдань, які теж порушують зв'язки і були пропущені: {{count}}.",
      confirm: 'Застосувати',
      cancel: 'Скасувати',
      none: 'Усі залежності виконані — перепланувати нема чого.',
    },
    resource: {
      header: 'Ресурс',
      peak: 'Пік',
      over: 'перевантажено',
      empty: 'Немає завдань для розподілу.',
    },
    quickFilter: {
      all: 'Усі',
      clear: 'Очистити фільтри',
      empty: 'Немає варіантів',
      // SINGLE braces on purpose: the ObjectGantt call site resolves these
      // with a literal `.replace('{shown}', …)`, not i18next interpolation.
      // The last key in the gantt namespace on that idiom — `conflict.body`
      // and the two `autoScheduleDlg` counts moved to `{{count}}` + i18next
      // interpolation in objectui#4157, where the single-brace call site met
      // a `{{count}}` pack and rendered a literal `{2}`.
      resultSummary: 'Показано {shown} / {total} завдань',
    },
    readOnly: 'Лише для читання',
    readOnlyHint: 'Редагування вимкнено для цього подання.',
    lockedHint: 'Немає дозволу на редагування',
    writeFailed: 'Помилка збереження — зміну відкинуто',
  },
  view: {
    editViewConfig: 'Змінити конфігурацію подання',
    rename: 'Перейменувати',
    duplicateView: 'Дублювати подання',
    shareView: 'Спільний доступ до подання',
    setAsDefault: 'Встановити типовим',
    pinView: 'Закріпити подання',
    unpinView: 'Відкріпити подання',
    changeViewType: 'Змінити тип подання',
    deleteView: 'Видалити подання',
    addView: 'Додати подання',
    moreViews: 'Ще {{count}}',
    manageViews: 'Керування поданнями',
    manageAllViews: 'Керувати всіма поданнями…',
    manageViewsDescription: "Перепорядкуйте, перейменуйте, закріпіть або видаліть усі подання цього об'єкта.",
    searchViews: 'Шукати подання',
    addNewView: 'Додати нове подання',
    done: 'Готово',
    noViewsFound: 'Подання за вашим пошуком не знайдено.',
    // objectstack#27594 — the list title's view switcher.
    switcher: {
      label: 'Подання',
      pinned: 'Закріплені',
      recent: 'Нещодавні',
      all: 'Усі подання',
      pin: 'Закріпити: відкривати це подання за замовчуванням',
      unpin: 'Відкріпити: список знову відкриватиме своє типове подання',
      inMenu: 'Уже в меню',
      // objectstack#29635 — the reader's own views (My views).
      myViews: 'Мої подання',
      saveAsMyView: 'Зберегти як моє подання',
      myViewName: 'Назва подання',
    },
    dragToReorder: 'Потягніть, щоб перепорядкувати',
    defaultView: 'Типове подання',
    defaultBadge: 'типове',
    tabActionsFor: 'Дії над поданням {{name}}',
    readonlyAriaLabel: 'Подання лише для читання',
    readonlyTooltip: 'Системне подання — визначене в коді, лише для читання.',
    malformedFilter: 'Фільтр цього подання пошкоджений, тому записи не показуються: умову {{subject}} неможливо застосувати.',
    exportNotPermitted: "У вас немає дозволу експортувати ці записи. Зверніться до адміністратора, якщо вважаєте, що такий дозвіл у вас має бути.",
    // objectui#11605 — an object-bound block whose node names its object in
    // neither place (no own key, no `dataSource.object`). `{{property}}` is the
    // block's object key (`objectName`), interpolated and never translated; the
    // wording was `element.number.noObject`'s with the property as a hole,
    // before objectui#11880 dropped that notice's flat `object`.
    noObject: "Об'єкт не названо: задайте {{property}} або dataSource.object.",
  },
  detail: {
    back: 'Назад',
    edit: 'Змінити',
    editInline: 'Змінити',
    save: 'Зберегти',
    saveChanges: 'Зберегти зміни',
    saving: 'Збереження…',
    editFieldsInline: 'Змінити поля',
    editInlineHint: 'Подвійне натискання — редагування',
    lockedByApproval: 'Заблоковано затвердженням',
    lockedTooltip: 'У цього запису очікує запит на затвердження; редагування заблоковано',
    lockedByState: 'Не редагується в поточному стані',
    writeStrippedTitle: 'Збережено — але деякі поля не набрали сили',
    writeWarningsTitle: 'Збережено — із застереженнями',
    writeStrippedReadonly: 'Доступне лише для читання, тому не набрало сили: {{fields}}',
    writeStrippedByState: "Не редагується в поточному стані цього запису, тому не набрало сили: {{fields}}",
    writeStrippedPrimaryKey: "Ідентифікатор запису не можна змінити збереженням, тому він не набрав сили: {{fields}}",
    writeStrippedComputed: 'Обчислюється сервером за формулою, тому надіслане значення не набрало сили: {{fields}}',
    writeStrippedStoredExpression: 'Обчислюється з запису, тому збережено обчислене значення, а не надіслане: {{fields}}',
    writeStrippedUnknownReason: 'Не застосовано сервером: {{fields}}',
    approvalPendingEditable: 'У затвердженні · редагування дозволено',
    approvalPendingTooltip: 'У цього запису очікує запит на затвердження; цей крок усе ще дозволяє редагування',
    approvalProgress: 'Затвердження — {{got}} з {{need}}',
    approvalProgressGroups: 'Підписання — {{got}} з {{need}} груп',
    approvalProgressLabel: 'Прогрес затвердження',
    approvalsPanelTitle: 'Затвердження',
    cancelApproval: 'Відкликати затвердження',
    cancelApprovalInFlight: 'Відкликання…',
    cancelApprovalTooltip: 'Відкличте очікуваний запит на затвердження, щоб розблокувати цей запис',
    cancelApprovalTooltipUnlocked: 'Відкликати очікуваний запит на затвердження',
    cancelApprovalFailed: 'Не вдалося відкликати затвердження',
    cancelApprovalUnavailable: 'Відкликання затверджень не підтримується в цьому джерелі даних',
    // objectui#5916 — `record:path` stage state in the ACCESSIBLE NAME.
    // Each stage is a `role="listitem"`, which is name-from-AUTHOR only, so
    // visually-hidden text inside it computes to an EMPTY name; these compose
    // the stage's own (already picklist-localized) label with its state into the
    // `aria-label`. The ✓/✗ glyphs stay `aria-hidden` decoration.
    pathLabel: 'Шлях запису',
    pathStageCompleted: '{{stage}}, завершено',
    pathStageCurrent: '{{stage}}, поточний крок',
    pathStageUpcoming: '{{stage}}, попереду',
    pathStageLostCurrent: '{{stage}}, закрито без успіху, поточний крок',
    pathStageLostUpcoming: '{{stage}}, закрито без успіху, не досягнуто',
    pathStageWonUpcoming: '{{stage}}, цільовий крок, не досягнуто',
    pathStageChangeAction: 'Перейти до {{stage}}',
    pathStageChangeTitle: 'Змінити крок?',
    pathStageChangeDescription: 'Перемістити цей запис до {{stage}}?',
    pathStageChangeConfirm: 'Перемістити',
    pathStageChangeConflict: 'Хтось інший змінив цей запис, і показано найновішу версію. Натисніть крок ще раз, якщо переміщення досі актуальне.',
    pathStageChangeDenied: "У вас немає дозволу змінювати крок цього запису.",
    pathStageChangeFailed: 'Крок не вдалося змінити.',
    linkCopied: 'Посилання скопійовано в буфер обміну',
    commentFailed: 'Ваш коментар не опубліковано. Нічого не збережено — спробуйте ще раз.',
    reactionFailed: 'Вашу реакцію не збережено. Спробуйте ще раз.',
    // objectui#12268 — the author's Edit and Delete on their own comment in the
    // record feed: the two buttons' names, the delete confirm, and the two
    // refusals the record page raises.
    editComment: 'Змінити коментар',
    deleteComment: 'Видалити коментар',
    deleteCommentConfirm: 'Справді видалити цей коментар?',
    commentEditFailed: 'Ваші правки не збережено. Коментар зберіг попередній текст.',
    commentDeleteFailed: 'Коментар не видалено. Спробуйте ще раз.',
    // objectstack#28218 — a comment write whose answer names mentioned users the
    // server will not notify (`withheldMentions`): one sentence naming them, no reason.
    mentionsWithheld: '{{names}} не отримають сповіщення про цей коментар.',
    linkCopyFailed: 'Не вдалося скопіювати посилання',
    claim: 'Заявити права',
    claimed: 'Тепер цей запис ваш.',
    claimTaken: 'Хтось інший заявив права на цей запис раніше.',
    claimFailed: 'Заявку не прийнято.',
    cancel: 'Скасувати',
    cancelEdit: 'Відкинути зміни',
    sectionMoreDetails: 'Більше подробиць',
    // Concurrent update (OCC) dialog
    concurrentUpdateTitle: 'Цей запис змінив хтось інший',
    concurrentUpdateDescription: "Інший користувач зберіг новішу версію {{field}}, поки ви редагували. Щоб непомітно не перезаписати його зміну, виберіть, як розв'язати конфлікт.",
    concurrentUpdateYourEdit: 'Ваша правка',
    concurrentUpdateCurrentValue: 'Поточне значення',
    concurrentUpdateUpdatedBy: 'Оновлено: {{name}}',
    concurrentUpdateUpdatedAt: 'Оновлено о {{when}}',
    concurrentUpdateReload: 'Перезавантажити найновіше',
    concurrentUpdateOverwrite: 'Все одно перезаписати',
    concurrentUpdateCancel: 'Скасувати',
    concurrentUpdateRecordLabel: 'цей запис',
    openInNewTab: 'Відкрити в новій вкладці',
    share: 'Спільний доступ',
    duplicate: 'Дублювати',
    export: 'Експорт',
    viewHistory: 'Переглянути історію',
    delete: 'Видалити',
    moreActions: 'Більше дій',
    addReaction: 'Додати реакцію',
    pageHeaderActions: 'Дії шапки сторінки',
    emojiPicker: 'Вибір емодзі',
    reactionCount: '{{emoji}} реакцій: {{count}}',
    reactionCount_one: '{{emoji}} {{count}} реакція',
    reactionCount_few: '{{emoji}} {{count}} реакції',
    reactionCount_many: '{{emoji}} реакцій: {{count}}',
    reactionCount_other: '{{emoji}} реакцій: {{count}}',
    // Record-overlay chrome (objectstack#5506). `recordDetail` is the VISIBLE
    // heading the overlay falls back to when the host passes no title;
    // `openAsFullPage` is the icon-only expand button's default accessible
    // name; `recordDetailOverlay` is the sr-only description on the
    // Sheet/Dialog when the host supplies none.
    recordDetail: 'Подробиці запису',
    // Same heading, but for the hosts that DO know which object they are
    // showing (objectui#3426): `ListView` / `ObjectGrid` used to string-build
    // `` `${label} Detail` `` in TypeScript and hand it to the overlay's
    // `title` prop, so `recordDetail` above never got a chance to apply and a
    // non-English session read one English heading. Interpolating keeps the
    // object label in the heading without freezing English word order — a pack
    // whose qualifier trails the noun (de: a hyphenated compound) or that needs
    // a possessive particle (ja/zh) writes its own arrangement here.
    recordDetailWithLabel: '{{label}} — подробиці',
    openAsFullPage: 'Відкрити повною сторінкою',
    // The record page's way back into the drawer it was expanded from
    // (objectstack#26679).
    collapseToDrawer: 'Згорнути в панель',
    recordDetailOverlay: 'Накладка подробиць запису для {{title}}.',
    addToFavorites: 'Додати до обраного',
    removeFromFavorites: 'Видалити з обраного',
    previousRecord: 'Попередній запис',
    nextRecord: 'Наступний запис',
    maximize: 'Розгорнути',
    restoreSize: 'Повернути розмір',
    recordOf: '{{current}} з {{total}}',
    // The record top bar's counter, naming its list (objectstack#27524).
    recordOfScope: '{{current}} з {{total}} у {{scope}}',
    // The enlarged related list's toolbar (objectstack#27524).
    relatedFilter: 'Фільтр {{title}}…',
    relatedChips: 'Показувати',
    relatedChipAll: 'Усі',
    relatedChipMine: 'Мої',
    relatedChipOverdue: 'Прострочені',
    relatedExport: 'Експорт',
    relatedRows: 'Рядків: {{count}}',
    relatedRows_one: '{{count}} рядок',
    relatedRows_few: '{{count}} рядки',
    relatedRows_many: 'Рядків: {{count}}',
    relatedRows_other: 'Рядків: {{count}}',
    recordNotFound: 'Запис не знайдено',
    recordNotFoundDescription: 'Запису, який ви шукаєте, не існує, можливо, його видалено, або ви не маєте до нього доступу.',
    goBack: 'Назад',
    details: 'Подробиці',
    related: "Пов'язане",
    relatedRecords: 'Записів: {{count}}',
    relatedRecordOne: '{{count}} запис',
    noRelatedRecords: "Пов'язаних записів не знайдено",
    loading: 'Завантаження…',
    copyToClipboard: 'Копіювати в буфер обміну',
    copied: 'Скопійовано!',
    deleteConfirmation: 'Справді видалити цей запис? Цю дію не можна скасувати.',
    deleteConfirmQuestion: 'Справді видалити цей запис?',
    deleted: 'Запис видалено',
    editRecord: 'Змінити запис',
    viewAll: 'Переглянути все',
    new: 'Створити',
    add: 'Додати',
    activity: 'Події',
    // objectstack#27524 — 动态 (was 时间线), the record page's stream: its
    // panel, its tab and the strip's label; the right column's ⊟, and the
    // 动态 panel's one-line composer.
    timeline: 'Події',
    relatedColumn: 'Права колонка',
    timelineComposer: 'Напишіть нотатку… @, щоб згадати',
    // objectstack#27055 — the record page v3.
    emptySections: 'Порожніх розділів: {{count}}',
    emptySections_one: '{{count}} порожній розділ',
    emptySections_few: '{{count}} порожні розділи',
    emptySections_many: 'Порожніх розділів: {{count}}',
    emptySections_other: 'Порожніх розділів: {{count}}',
    showEmptySections: 'Розгорнути',
    hideEmptySections: 'Згорнути',
    owner: 'Власник',
    relatedCardMenu: 'Більше для {{title}}',
    relatedCardEnlarge: 'Збільшити',
    relatedCardAllColumns: 'Усі колонки',
    relatedCardExpand: 'Розгорнути',
    relatedCardHide: 'Сховати',
    relatedCardNew: 'Створити',
    relatedPanelViewAll: 'Переглянути всі {{count}}',
    relatedPanelViewAll_one: 'Переглянути всі {{count}}',
    relatedPanelViewAll_few: 'Переглянути всі {{count}}',
    relatedPanelViewAll_many: 'Переглянути всі {{count}}',
    relatedPanelViewAll_other: 'Переглянути всі {{count}}',
    relatedPanelReorder: 'Перепорядкувати {{title}}',
    relatedPanelReorderHint: 'Потягніть, щоб перепорядкувати · ⌥↑ ⌥↓',
    relatedEmptyFold: 'Ще порожніх списків: {{count}}',
    relatedEmptyFold_one: 'Ще {{count}} порожній список',
    relatedEmptyFold_few: 'Ще {{count}} порожні списки',
    relatedEmptyFold_many: 'Ще порожніх списків: {{count}}',
    relatedEmptyFold_other: 'Ще порожніх списків: {{count}}',
    relatedDefaultChanged: 'Типовий порядок оновлено',
    relatedRestoreDefault: 'Повернути типове',
    relatedRestoreDefaultOrder: 'Повернути типовий порядок',
    relatedHiddenCount: 'Сховано: {{count}}',
    relatedHiddenCount_one: 'Сховано: {{count}}',
    relatedHiddenCount_few: 'Сховано: {{count}}',
    relatedHiddenCount_many: 'Сховано: {{count}}',
    relatedHiddenCount_other: 'Сховано: {{count}}',
    relatedShowHidden: 'Показати',
    recordTabs: 'Вкладки запису',
    recordTabOverview: 'Огляд',
    recordTabsMore: 'Ще вкладок: {{count}}',
    recordTabsMore_one: 'Ще {{count}} вкладка',
    recordTabsMore_few: 'Ще {{count}} вкладки',
    recordTabsMore_many: 'Ще вкладок: {{count}}',
    recordTabsMore_other: 'Ще вкладок: {{count}}',
    recordTabsHidden: 'Сховано',
    bodyTableTotals: 'Підсумки (ця сторінка)',
    streamAll: 'Усі',
    streamActivity: 'Події',
    streamDiscussion: 'Обговорення',
    streamChanges: 'Зміни',
    viewAllEntries: 'Переглянути всі {{count}} →',
    viewAllEntries_one: 'Переглянути всі {{count}} →',
    viewAllEntries_few: 'Переглянути всі {{count}} →',
    viewAllEntries_many: 'Переглянути всі {{count}} →',
    viewAllEntries_other: 'Переглянути всі {{count}} →',
    panelToggles: 'Панелі',
    history: 'Історія',
    historyEmpty: 'Історії ще немає',
    editRow: 'Змінити',
    deleteRow: 'Видалити',
    deleteRowConfirmation: 'Справді видалити «{{name}}»?',
    deleteRowTitle: 'Видалення запису',
    actions: 'Дії',
    previousPage: 'Попередня',
    nextPage: 'Наступна',
    pageOf: 'Сторінка {{current}} з {{total}}',
    sortBy: 'Сортувати за',
    filterPlaceholder: 'Фільтр…',
    highlightFields: 'Ключові поля',
    highlightsLabel: 'Акценти запису',
    // Comments
    comments: 'Коментарі',
    searchComments: 'Шукати коментарі…',
    addCommentPlaceholder: 'Додайте коментар… (Ctrl+Enter — надіслати)',
    noMatchingComments: 'Коментарів за збігом немає',
    noCommentsYet: 'Коментарів ще немає',
    pinned: 'Закріплено',
    pin: 'Закріпити',
    unpin: 'Відкріпити',
    justNow: 'щойно',
    minutesAgo: '{{count}} хв тому',
    minutesAgo_one: '{{count}} хв тому',
    minutesAgo_few: '{{count}} хв тому',
    minutesAgo_many: '{{count}} хв тому',
    minutesAgo_other: '{{count}} хв тому',
    hoursAgo: '{{count}} год тому',
    hoursAgo_one: '{{count}} год тому',
    hoursAgo_few: '{{count}} год тому',
    hoursAgo_many: '{{count}} год тому',
    hoursAgo_other: '{{count}} год тому',
    daysAgo: '{{count}} д тому',
    daysAgo_one: '{{count}} д тому',
    daysAgo_few: '{{count}} д тому',
    daysAgo_many: '{{count}} д тому',
    daysAgo_other: '{{count}} д тому',
    // Activity feed actors
    systemActor: 'Система',
    impersonatedActor: '{{admin}} від імені {{user}}',
    unknownUser: 'Невідомо',
    // Record meta footer (audit provenance). `created`/`updated` are the
    // actor-less variants — "Created by · 5m ago" dangles when created_by
    // is null (system/seeded rows), so the footer falls back to these.
    createdBy: 'Створено:',
    updatedBy: 'Оновлено:',
    created: 'Створено',
    updated: 'Оновлено',
    // Attachments
    dropFilesToUpload: 'Перетягніть файли сюди або натисніть, щоб завантажити',
    attachmentCount: 'Вкладень: {{count}}',
    attachmentCount_one: '{{count}} вкладення',
    attachmentCount_few: '{{count}} вкладення',
    attachmentCount_many: 'Вкладень: {{count}}',
    attachmentCount_other: 'Вкладень: {{count}}',
    removeAttachment: 'Видалити вкладення',
    // Record Attachments panel (enable.files, objectstack#4358)
    attachments: 'Вкладення',
    uploadAttachment: 'Завантажити',
    loadingAttachments: 'Завантаження вкладень…',
    noAttachments: 'Вкладень ще немає. Завантажте файл, щоб почати.',
    downloadAttachment: 'Завантажити',
    deleteAttachment: 'Видалити вкладення',
    deleteAttachmentConfirm: 'Справді видалити вкладення «{{name}}»?',
    attachmentDeleteDenied: 'Видалити це вкладення може лише той, хто його завантажив, або той, хто може змінювати цей запис.',
    attachmentParentAccessDenied: "У вас немає доступу, щоб додавати файли до цього запису.",
    attachmentDownloadDenied: "У вас немає доступу, щоб завантажити це вкладення.",
    attachmentAuthRequired: 'Щоб завантажити це вкладення, увійдіть у систему.',
    attachmentPermissionDenied: "У вас немає дозволу це робити.",
    attachmentsAccessDenied: "У вас немає доступу до цих вкладень.",
    attachmentsLoadFailed: "Не вдалося завантажити вкладення цього запису.",
    attachmentsApiUnavailable: "Список вкладень недоступний для цього об'єкта.",
    retryLoadAttachments: 'Спробувати знову',
    // Discussion
    discussion: 'Обговорення',
    showDiscussion: 'Показати обговорення ({{count}})',
    hideDiscussion: 'Сховати обговорення',
    // Rich text editor
    bold: 'Жирний (Ctrl+B)',
    italic: 'Курсив (Ctrl+I)',
    listFormat: 'Список',
    inlineCode: 'Строковий код',
    mentionSomeone: 'Згадати когось',
    // objectstack#28218 — the composer's row of picked-mention chips.
    mentionedPeople: 'Згадані',
    preview: 'Перегляд',
    submitComment: 'Надіслати (Ctrl+Enter)',
    sendComment: 'Надіслати',
    writeComment: 'Напишіть коментар…',
    // Subscription
    subscribedTooltip: 'Ви підписані — натисніть, щоб відписатися',
    unsubscribedTooltip: 'Підписатися на сповіщення',
    // The reference rail's empty related-record list
    noRecords: 'Немає записів',
    // objectui#3863 — the BASE key; since objectui#11432 every pack also spells out
    // each CLDR category its language selects, so with a count no pack reaches the
    // base. In `en` this value is parity ballast — and it must stay byte-identical to
    // the call site's inline `defaultValue` in `record-reference-rail.tsx`, which
    // `check:i18n-keys` now judges as class 3.
    showEmptyRelated: '+ Порожніх: {{count}}',
    showEmptyRelated_one: '+ {{count}} порожній',
    showEmptyRelated_few: '+ {{count}} порожні',
    showEmptyRelated_many: '+ Порожніх: {{count}}',
    showEmptyRelated_other: '+ Порожніх: {{count}}',
    // Activity timeline
    allActivity: 'Усі події',
    commentsOnly: 'Лише коментарі',
    fieldChangesFilter: 'Зміни полів',
    tasksOnly: 'Лише завдання',
    leaveCommentPlaceholder: 'Залиште коментар… (Ctrl+Enter — надіслати)',
    noActivity: 'Подій не зафіксовано',
    activityAccessDenied: "У вас немає дозволу переглядати події цього запису.",
    commentsAccessDenied: "У вас немає дозволу переглядати коментарі цього запису.",
    activityLoadFailed: "Не вдалося завантажити події цього запису.",
    commentsLoadFailed: "Не вдалося завантажити коментарі цього запису.",
    retryLoadFeed: 'Спробувати знову',
    // objectui#7149 — the rest of `ActivityTimeline`. The four chip labels the
    // `detail.*` pack did not already name, and the `formatFieldChange`
    // sentences, which are assembled in code and so need interpolation holes.
    allFilter: 'Усі',
    createsFilter: 'Створення',
    deletesFilter: 'Видалення',
    statusChangesFilter: 'Зміни статусу',
    activityEmptyValue: '(порожньо)',
    activityFieldChanged: 'Змінено {{field}} з «{{old}}» на «{{new}}»',
    activityCreated: 'Створено цей запис',
    activityDeleted: 'Видалено цей запис',
    activityStatusChanged: 'Змінено статус на «{{value}}»',
    activityUpdated: 'Запис оновлено',
    loadMore: 'Завантажити ще',
    edited: '(змінено)',
    via: 'через {{source}}',
    viewSource: 'Переглянути джерело',
    // objectstack#25959 — a run of consecutive updates folded into one feed row.
    foldedUpdates: 'Оновлено {{fields}}',
    foldedUpdateCount: 'Оновлень: {{count}}',
    foldedUpdateCount_one: '{{count}} оновлення',
    foldedUpdateCount_few: '{{count}} оновлення',
    foldedUpdateCount_many: 'Оновлень: {{count}}',
    foldedUpdateCount_other: 'Оновлень: {{count}}',
    foldedMoreFields: 'Ще: {{count}}',
    foldedMoreFields_one: 'Ще: {{count}}',
    foldedMoreFields_few: 'Ще: {{count}}',
    foldedMoreFields_many: 'Ще: {{count}}',
    foldedMoreFields_other: 'Ще: {{count}}',
    expandFolded: 'Показати кожну зміну',
    collapseFolded: 'Сховати зміни',
    // Replies
    replyCount: 'Відповідей: {{count}}',
    replyCount_one: '{{count}} відповідь',
    replyCount_few: '{{count}} відповіді',
    replyCount_many: 'Відповідей: {{count}}',
    replyCount_other: 'Відповідей: {{count}}',
    replyPlaceholder: 'Відповісти…',
    // Aria labels
    filterActivity: 'Фільтр подій',
    openDiscussion: 'Відкрити панель обговорення',
    closeDiscussion: 'Закрити панель обговорення',
    subscribeAriaLabel: 'Підписатися на сповіщення',
    unsubscribeAriaLabel: 'Відписатися від сповіщень',
    clearSearch: 'Очистити пошук',
    copyEmail: 'Копіювати електронну пошту',
    copyPhone: 'Копіювати номер телефону',
    copyRecordId: 'Копіювати ідентифікатор запису',
    showEmptyFields: 'Показати порожніх полів: {{count}}',
    showEmptyFields_one: 'Показати {{count}} порожнє поле',
    showEmptyFields_few: 'Показати {{count}} порожні поля',
    showEmptyFields_many: 'Показати порожніх полів: {{count}}',
    showEmptyFields_other: 'Показати порожніх полів: {{count}}',
    hideEmptyFields: 'Сховати порожні поля',
    noValue: 'Немає значення',
    unresolvedReference: "Нерозв'язане посилання: {{value}} не переведено в користувача",
    unresolvedLookupReference: "Нерозв'язане посилання: {{value}} не переведено в запис на цьому екрані",
    restrictedLookupReference: 'Обмежений запис',
    // Cell-level COUNT phrases for the `repeater` and file cells
    // (objectui#8441). Both were written straight into the renderer before this
    // — `repeater` as a number plus a hardcoded Chinese unit word, which every
    // reader on every locale saw, and `FileCellRenderer` as an English-only
    // `count === 1 ? 'file' : 'files'`, which is not plural-safe anywhere else.
    // One channel, two call sites.
    //
    // REAL i18next plural families — the one count shape this repo uses since
    // objectui#11445 retired the code-selected `xxxCountOne` / `xxxCountPlural`
    // sibling keys. i18next asks `Intl.PluralRules` for the
    // ONE suffix a number needs, so each pack carries every category its language
    // selects (`ru` `_few`/`_many`, `ar` `_zero`/`_two`/`_few`/`_many` —
    // objectui#11432) plus the base key (objectui#3863).
    // `all-locales-key-parity.test.ts` owns both rules.
    repeaterItemCount: 'Позицій: {{count}}',
    repeaterItemCount_one: '{{count}} позиція',
    repeaterItemCount_few: '{{count}} позиції',
    repeaterItemCount_many: 'Позицій: {{count}}',
    repeaterItemCount_other: 'Позицій: {{count}}',
    fileCount: 'Файлів: {{count}}',
    fileCount_one: '{{count}} файл',
    fileCount_few: '{{count}} файли',
    fileCount_many: 'Файлів: {{count}}',
    fileCount_other: 'Файлів: {{count}}',
  },
  chart: {
    loading: 'Завантаження діаграми…',
    refreshing: 'Оновлення…',
    nullCategory: '(Немає)',
    // The refusal a scatter renders when handed more than one series
    // (objectui#7194): it binds ONE measure, so a second series was painted at
    // the first one's y values. One short sentence on purpose — this pack is
    // eagerly loaded and the `framework` chunk's gzip ceiling has ~0.2 KB of
    // headroom; the series keys are rendered by the chart as data, after it.
    scatterOneMeasure: 'Точкова діаграма будує лише одну мірку. Залиште рівно один ряд даних:',
    // The note under a sankey that drew only some of its rows (objectui#7148,
    // translated by objectui#13404): a flow has no negative width, so rows whose
    // measure is not above zero are left out. A count family on the OMITTED
    // rows; `{{field}}` is where the chart draws the measure key as a code chip.
    sankeyOmittedRows: 'Показано {{shown}} рядків із {{total}} — у {{count}} рядків немає {{field}} більшого за нуль, а потік такого не малює.',
    sankeyOmittedRows_one: 'Показано {{shown}} рядків із {{total}} — в {{count}} рядка немає {{field}} більшого за нуль, а потік такого не малює.',
    sankeyOmittedRows_few: 'Показано {{shown}} рядків із {{total}} — у {{count}} рядків немає {{field}} більшого за нуль, а потік такого не малює.',
    sankeyOmittedRows_many: 'Показано {{shown}} рядків із {{total}} — у {{count}} рядків немає {{field}} більшого за нуль, а потік такого не малює.',
    sankeyOmittedRows_other: 'Показано {{shown}} рядків із {{total}} — у {{count}} рядків немає {{field}} більшого за нуль, а потік такого не малює.',
    // The refusal an object-bound chart renders when it declares no category
    // axis (objectui#8168) — `aggregate.groupBy` / `xAxisKey` / `xAxis.field`
    // all absent, so `runAggregate` would have grouped on a name nobody wrote.
    // The twin of `timeline.unconfigured.noDateAxis`. ONE short sentence, for
    // the same reason `scatterOneMeasure` above is one: the packs ship it ten
    // times, and the binding names are rendered by the component after it
    // rather than interpolated, so a rung added to or retired from the
    // resolver cannot leave this sentence naming a stale vocabulary.
    unconfigured: {
      noCategoryAxis: "Потрібна вісь категорій діаграми — прив'язана до об'єкта діаграма не вигадає її. Оголосіть одне з:",
    },
  },
  report: {
    total: 'Разом',
    totals: 'Підсумки',
    subtotal: 'Проміжний підсумок',
    loading: 'Завантаження…',
    // objectui#12330 — the report's no-access state; its title is `dashboard.widgetForbiddenTitle`.
    forbiddenMessage: "У вас немає дозволу переглядати дані за цим звітом.",
    // objectstack-ai/objectstack#25873 — the report period chip (`ReportSchema.dateRange`); its preset labels are `dashboard.filters.*`.
    dateRange: {
      from: 'З',
      to: 'До',
      datasetUnreadable: "Діапазон дат цього звіту не називає виміру, а набір даних «{{dataset}}» не вдалося прочитати, щоб знайти вимір дати ({{reason}}).",
      noSingleDateDimension: "Діапазон дат цього звіту не називає виміру, а набір даних «{{dataset}}» оголошує {{total}} вимірів дати ({{found}}), хоча потрібен рівно один. Назвіть вимір дати в dateRange.dimension звіту.",
    },
    aggregate: {
      count: 'Кількість',
      countDistinct: 'Унікальна кількість',
      sum: 'Сума',
      avg: 'Середнє',
      min: 'Мін',
      max: 'Макс',
      first: 'Перший',
    },
    editor: {
      // ONE key by design, not by accident (objectui#4145). This namespace held
      // 106 keys labelling the hand-rolled report editor form; that form is gone
      // — `ReportConfigPanel`'s body is `ReportDefaultInspector`, a spec-driven
      // inspector whose labels come from the report spec's own metadata. The
      // other 105 keys had no reader in any package, in any pack, in any dynamic
      // `t()` form, so they were retired here rather than left for the next
      // author to infer a live UI from.
      //
      // `panelTitle` names the PANEL (its heading and its `role="complementary"`
      // landmark). It is minted by objectui#4137 and is the namespace's only
      // consumer. Do not grow this namespace back: the spec-driven inspector is
      // the settled direction, and
      // `packages/i18n/src/__tests__/report-editor-retired-4145.test.ts` fails on
      // any retired key that returns.
      panelTitle: 'Змінити звіт',
    },
  },
  designer: {
    undo: 'Скасувати',
    redo: 'Повторити',
    canvasMinimap: 'Мінімапа полотна',
  },
  dashboard: {
    total: 'Разом',
    noDataSourceFor: 'Немає джерела даних для',
    // objectui#7063 — the DEFAULT empty state every dashboard widget renders
    // when its query SUCCEEDED and returned nothing. It replaced the terse
    // per-widget `noRows` / `noDataAvailable` fragments at the render site;
    // objectui#7125 deleted those two keys from all ten packs once nothing
    // read them. The copy here has to read as a state rather than a failure,
    // which is why it says the widget loaded. `sourceLabel` carries its own
    // punctuation so the call site concatenates no separator (see
    // `WidgetEmptyState`).
    empty: {
      title: 'Даних ще немає',
      message: 'Віджет успішно завантажився, і його запит поки не повернув записів.',
      sourceLabel: 'Джерело:',
    },
    loading: 'Завантаження…',
    refreshing: 'Оновлення…',
    refreshAll: 'Оновити все',
    refreshDashboard: 'Оновити дашборд',
    pickMeasures: 'Виберіть мірки (значення) для цього віджета набору даних.',
    datasetUnsupported: 'Це джерело даних не підтримує запити наборів даних.',
    widgetForbiddenTitle: 'У вас немає доступу',
    widgetForbiddenMessage: 'У вас немає дозволу переглядати дані за цим віджетом.',
    allWidgetsForbiddenMessage: 'У вас немає дозволу переглядати дані за цим дашбордом.',
    details: 'Подробиці',
    exportCsv: 'Експорт CSV',
    openInList: 'Відкрити в списку',
    config: {
      breadcrumb: {
        dashboard: 'Дашборд',
        configuration: 'Конфігурація',
        widget: 'Віджет',
        chart: 'Діаграма',
        table: 'Таблиця',
        pivotTable: 'Зведена таблиця',
      },
      section: {
        general: 'Загальне',
        layout: 'Макет',
        data: 'Дані',
        dataBinding: "Прив'язка даних",
        appearance: 'Вигляд',
      },
      field: {
        title: 'Заголовок',
        description: 'Опис',
        columns: 'Колонки',
        gap: 'Відступ',
        rowHeight: 'Висота рядка (px)',
        autoRefresh: 'Автооновлення',
        showDescription: 'Показувати опис',
        theme: 'Тема',
        widgetType: 'Тип віджета',
        colorVariant: 'Кольоровий варіант',
        dataset: 'Набір даних',
        dimensions: 'Виміри',
        values: 'Мірки',
        width: 'Ширина (колонки)',
        height: 'Висота (рядки)',
      },
      placeholder: {
        dashboardTitle: 'Заголовок дашборда',
        dashboardDescription: 'Короткий підсумок під заголовком',
        widgetTitle: 'Заголовок віджета',
        widgetDescription: 'Опис віджета',
        datasetName: 'Назва набору даних',
        selectDataset: 'Виберіть набір даних…',
        searchDatasets: 'Шукати набори даних…',
        addDimension: 'Додати вимір…',
        addMeasure: 'Додати мірку…',
        searchMembers: 'Пошук…',
      },
      empty: {
        datasets: 'Набори даних не знайдено.',
        dimensions: 'Виміри не вибрано.',
        measures: 'Мірки не вибрано.',
        nothingToAdd: 'Додавати більше нічого.',
      },
      help: {
        dataset: "Набір даних семантичного шару, до якого прив'язується цей віджет (ADR-0021).",
        dimensions: 'Групуйте/розбивайте значення за цими вимірами набору даних.',
        dimensionsPivot: 'Групуйте/розбивайте поля. Останній вимір розкладається на колонки.',
        values: 'Мірки з набору даних для показу (щонайменше одна).',
      },
      action: {
        add: 'Додати',
        remove: 'Видалити {{name}}',
      },
      refresh: {
        off: 'Вимкнено',
        every30s: 'Що 30 с',
        every1m: 'Що 1 хв',
        every5m: 'Що 5 хв',
        every15m: 'Що 15 хв',
        every30m: 'Що 30 хв',
        every1h: 'Що 1 год',
      },
      themeOption: {
        light: 'Світла',
        dark: 'Темна',
        auto: 'Авто',
      },
      widgetType: {
        metric: 'Показник',
        bar: 'Стовпчикова діаграма',
        horizontalBar: 'Горизонтальні стовпчики',
        line: 'Лінійна діаграма',
        pie: 'Кругова діаграма',
        donut: 'Кільцева діаграма',
        area: 'Графік області',
        scatter: 'Точкова діаграма',
        funnel: 'Воронка',
        table: 'Таблиця',
        pivot: 'Зведена таблиця',
      },
      color: {
        default: 'Типовий',
        blue: 'Синій',
        teal: 'Бірюзовий',
        orange: 'Помаранчевий',
        purple: 'Фіолетовий',
        success: 'Успіх',
        warning: 'Попередження',
        danger: 'Небезпека',
      },
    },
    trend: {
      vsLastQuarter: 'проти минулого кварталу',
      vsLastMonth: 'проти минулого місяця',
      vsLastWeek: 'проти минулого тижня',
      vsLastYear: 'проти минулого року',
      vsYesterday: 'проти вчорашнього дня',
      vsPreviousPeriod: 'проти попереднього періоду',
      vsThisMonth: 'проти цього місяця',
      vsThisQuarter: 'проти цього кварталу',
    },
    filters: {
      label: 'Фільтри дашборда',
      dateRange: 'Діапазон дат',
      allTime: 'Увесь час',
      custom: 'Власний…',
      all: 'Усі',
      reset: 'Скинути',
      range: {
        today: 'Сьогодні',
        yesterday: 'Вчора',
        this_week: 'Цього тижня',
        last_week: 'Минулого тижня',
        this_month: 'Цього місяця',
        last_month: 'Минулого місяця',
        next_month: 'Наступного місяця',
        this_quarter: 'Цього кварталу',
        last_quarter: 'Минулого кварталу',
        next_quarter: 'Наступного кварталу',
        this_year: 'Цього року',
        last_year: 'Минулого року',
        last_7_days: 'Останні 7 днів',
        last_30_days: 'Останні 30 днів',
        last_90_days: 'Останні 90 днів',
        next_30_days: 'Наступні 30 днів',
      },
    },
  },
  appDesigner: {
    basicInfo: 'Основні відомості',
    objects: "Об'єкти",
    navigation: 'Навігація',
    branding: 'Фірмовий стиль',
    appName: 'Назва застосунку',
    appTitle: 'Заголовок',
    appDescription: 'Опис',
    appIcon: 'Піктограма',
    template: 'Шаблон',
    searchObjects: "Шукати об'єкти…",
    selectAll: 'Вибрати все',
    deselectAll: 'Зняти виділення',
    addGroup: 'Додати групу',
    addUrl: 'Додати URL',
    addSeparator: 'Додати роздільник',
    logoUrl: 'URL логотипа',
    primaryColor: 'Основний колір',
    faviconUrl: 'URL favicon',
    preview: 'Перегляд',
    complete: 'Завершити',
    snakeCaseHint: 'Має бути у snake_case (напр. my_app)',
    modeEdit: 'Редагування',
    addWidget: 'Додати віджет',
    widgetProperties: 'Властивості віджета',
    dataSource: 'Джерело даних',
    stepBasicDesc: 'Назва, заголовок і піктограма',
    stepObjectsDesc: "Виберіть бізнес-об'єкти",
    stepNavigationDesc: 'Побудуйте дерево навігації',
    stepBrandingDesc: 'Логотип, кольори та favicon',
    noObjectsFound: "Об'єктів не знайдено.",
    noNavItemsHint: "Пунктів навігації ще немає. Виберіть об'єкти в попередньому кроці або додайте пункти вручну.",
    separatorLabel: '— Роздільник —',
    newGroup: 'Нова група',
    newLink: 'Нове посилання',
    saveDraft: 'Зберегти чернетку',
    cancelConfirmTitle: 'Відкинути зміни?',
    cancelConfirmMessage: 'У вас є незбережені зміни. Справді бажаєте скасувати?',
    confirmDiscard: 'Відкинути',
    keepEditing: 'Продовжити редагування',
    navNoItems: 'Немає пунктів навігації. Натисніть кнопки вище, щоб додати пункти.',
    navNoPreviewItems: 'Немає пунктів',
    navLivePreview: 'Живий перегляд',
    navCollapseGroup: 'Згорнути групу',
    navExpandGroup: 'Розгорнути групу',
    navAddChild: 'Додати дочірній пункт',
    navMoveUp: 'Перемістити вгору',
    navMoveDown: 'Перемістити вниз',
    navRemove: 'Вилучити',
    navObjectPage: "Сторінка об'єкта",
    navDashboard: 'Дашборд',
    navPage: 'Сторінка',
    navReport: 'Звіт',
    navGroup: 'Група',
    navUrl: 'URL',
    navSeparator: 'Роздільник',
    navTypeObject: "Об'єкт",
    navTypeDashboard: 'Дашборд',
    navTypePage: 'Сторінка',
    navTypeReport: 'Звіт',
    navTypeUrl: 'URL',
    navTypeGroup: 'Група',
    navTypeSeparator: 'Роздільник',
    navTypeAction: 'Дія',
    navTypeComponent: 'Компонент',
    navTypeDoc: 'Документ',
    navEditIcon: 'Змінити піктограму',
    navToggleVisible: 'Перемкнути видимість',
    navHidden: 'Сховано',
    navExportSchema: 'Експорт JSON',
    navImportSchema: 'Імпорт JSON',
    navExportSuccess: 'Схему навігації експортовано',
    navImportSuccess: 'Схему навігації імпортовано',
    navImportError: 'Неправильний JSON навігації',
    navIconPlaceholder: 'Назва піктограми (напр. Users)',
    dashboardEditor: 'Редактор дашборда',
    noWidgets: 'Немає віджетів. Натисніть кнопку вище, щоб додати.',
    widgetLayoutSize: 'Розмір макета',
    widgetWidth: 'Ширина',
    widgetHeight: 'Висота',
    dashboardPreview: 'Перегляд дашборда',
    noWidgetsPreview: 'Немає віджетів для перегляду',
    pageCanvasEditor: 'Редактор полотна сторінки',
    emptyPage: 'Порожня сторінка. Натисніть кнопку вище, щоб додати компонент.',
    pagePreview: 'Перегляд сторінки',
    noComponentsPreview: 'Немає компонентів для перегляду',
    modePage: 'Сторінка',
    modeDashboard: 'Дашборд',
    undo: 'Скасувати',
    redo: 'Повторити',
    brandingEditor: 'Редактор фірмового стилю',
    brandingExport: 'Експорт JSON',
    brandingImport: 'Імпорт JSON',
    brandingPreview: 'Перегляд',
    brandingSampleButton: 'Пробна кнопка',
    brandingSampleText: 'Так виглядатиме ваша фірмова тема.',
    colorPalette: 'Палітра кольорів',
    fontFamily: 'Шрифт',
    fontDefault: 'Типовий (системний)',
    modeLight: 'Світла',
    modeDark: 'Темна',
    mobilePreview: 'Мобільний перегляд',
    objectManager: {
      title: "Менеджер об'єктів",
      addObject: "Новий об'єкт",
      searchPlaceholder: "Шукати об'єкти…",
      noObjects: "Об'єктів не знайдено.",
      objectName: 'API-назва',
      objectLabel: 'Позначка',
      pluralLabel: 'Позначка множини',
      icon: 'Піктограма',
      selectIcon: 'Виберіть піктограму…',
      group: 'Група',
      noGroup: 'Без групи',
      sortOrder: 'Порядок сортування',
      enabled: 'Увімкнено',
      relationships: "Зв'язки",
      systemBadge: 'Система',
      fieldCount: 'Полів: {{count}}',
      ungrouped: 'Без групи',
      deleteConfirmTitle: "Видалити об'єкт?",
      deleteConfirmMessage: "Це назавжди видалить об'єкт і всі його поля. Цю дію не можна скасувати.",
    },
    fieldDesigner: {
      title: 'Конструктор полів',
      addField: 'Нове поле',
      searchPlaceholder: 'Шукати поля…',
      allTypes: 'Усі типи',
      noFields: 'Полів не знайдено.',
      fieldName: 'API-назва',
      fieldLabel: 'Позначка',
      fieldType: 'Тип',
      fieldGroup: 'Група',
      description: 'Опис',
      required: "Обов'язкове",
      unique: 'Унікальне',
      readOnly: 'Лише читання',
      hidden: 'Сховано',
      trackHistory: 'Вести історію',
      defaultValue: 'Типове значення',
      placeholder: 'Заповнювач',
      referenceTo: 'Посилання на',
      options: 'Варіанти',
      addOption: 'Додати варіант',
      systemBadge: 'Система',
      ungrouped: 'Загальне',
      deleteConfirmTitle: 'Видалити поле?',
      deleteConfirmMessage: 'Поле буде видалено назавжди. Наявні дані в цьому полі буде втрачено.',
      basicSection: 'Основне',
      typeSpecificSection: 'Налаштування типу',
      advancedSection: 'Додатково',
      typeCategory: {
        text: 'Текст',
        number: 'Число',
        date: 'Дата й час',
        choice: 'Вибір',
        relation: "Зв'язок",
        advanced: 'Додатково',
      },
    },
  },
  console: {
    // The fixed crumb `AppHeader`'s `studio` variant draws on the Studio front
    // door (objectui#11863), as `organizations.title` is the `orgs` variant's.
    // A product name, which every pack writes as is.
    studio: {
      title: 'Studio',
      // What a principal without `studio.access` reads at the Studio URL they
      // opened (objectui#12035), in place of the silent redirect home.
      accessRequired: 'Щоб відкрити Studio, потрібен доступ до Studio. Адміністратор може надати його набором дозволів у Налаштуваннях → Призначення наборів дозволів.',
    },
    saveAdvisoryTitle: 'Збережено — перевірка авторингу знайшла зауважень: {{count}}',
    saveAdvisoryTitle_one: 'Збережено — перевірка авторингу знайшла {{count}} зауваження',
    saveAdvisoryTitle_few: 'Збережено — перевірка авторингу знайшла {{count}} зауваження',
    saveAdvisoryTitle_many: 'Збережено — перевірка авторингу знайшла зауважень: {{count}}',
    saveAdvisoryTitle_other: 'Збережено — перевірка авторингу знайшла зауважень: {{count}}',
    publishAdvisoryTitle: 'Опубліковано — перевірка авторингу знайшла зауважень: {{count}}',
    publishAdvisoryTitle_one: 'Опубліковано — перевірка авторингу знайшла {{count}} зауваження',
    publishAdvisoryTitle_few: 'Опубліковано — перевірка авторингу знайшла {{count}} зауваження',
    publishAdvisoryTitle_many: 'Опубліковано — перевірка авторингу знайшла зауважень: {{count}}',
    publishAdvisoryTitle_other: 'Опубліковано — перевірка авторингу знайшла зауважень: {{count}}',
    importMappingsUnavailable: 'Збережені імпортні зіставлення для {{object}} не вдалося завантажити',
    importMappingsRefused: 'Сервер відмовив у цьому запиті, тому список порожній, бо його не вдалося прочитати — а не тому, що нічого не зареєстровано. Увійдіть знову або попросіть адміністратора про доступ.',
    importMappingsUnreadable: 'Список порожній, бо його не вдалося прочитати, а не тому, що нічого не зареєстровано. Спробуйте ще раз; якщо це повторюється, повідомте про це.',
    savedViewsUnavailable: 'Збережені подання для {{object}} не вдалося завантажити',
    savedViewsRefused: "Сервер відмовив у цьому запиті, тому список порожній, бо його не вдалося прочитати — а не тому, що в цього об'єкта немає збережених подань. Увійдіть знову або попросіть адміністратора про доступ.",
    savedViewsUnreadable: "Список порожній, бо його не вдалося прочитати, а не тому, що в цього об'єкта немає збережених подань. Спробуйте ще раз; якщо це повторюється, повідомте про це.",
    initializing: 'Відкриваємо вашу консоль…',
    skipToContent: 'Перейти до вмісту',
    search: 'Пошук…',
    breadcrumb: {
      system: 'Система',
      // The Setup system page segment after `System` (objectui#10900).
      marketplace: 'Маркетплейс',
      // The console app's own `system/*` pages after `System` (objectui#10969).
      settings: 'Налаштування',
      apps: 'Застосунки',
      profile: 'Профіль',
      approvals: 'Затвердження',
      aiApprovals: 'Затвердження ШІ',
      auditLog: 'Журнал аудиту',
    },
    nav: {
      pinItem: 'Закріпити {{name}}',
      unpinItem: 'Відкріпити {{name}}',
      favorites: 'Обране',
      launcherLabel: 'Пуск застосунків',
      menuLabel: 'Навігація застосунку',
      menuEmpty: 'У цього застосунку немає пунктів навігації, які можна відкрити.',
      // objectui#12427 — the ⋯ menu a sidebar entry shows on hover (`SidebarItemMenu`).
      itemMenu: 'Більше дій для {{name}}',
      openInNewTab: 'Відкрити в новій вкладці',
      copyLink: 'Копіювати посилання',
      linkCopied: 'Посилання скопійовано в буфер обміну',
      linkCopyFailed: 'Не вдалося скопіювати посилання',
      design: 'Дизайн',
    },
    settingsHub: {
      title: 'Налаштування',
      subtitle: 'Налаштуйте свою систему та інтеграції.',
      loadError: 'Не вдалося завантажити налаштування',
      empty: "Сторінок налаштувань поки немає. Вони з'являться тут, коли встановлений застосунок їх надасть.",
      adminManaged: 'Налаштуваннями керує ваш адміністратор',
      adminManagedDescription: 'Ваш обліковий запис не може переглядати або змінювати ці налаштування. Якщо щось треба змінити, попросіть адміністратора.',
      settingsCount: 'Налаштувань: {{n}}',
      beta: 'Бета',
      // Section headers, keyed by the manifest `category` value. Unknown
      // (plugin-authored) categories fall back to the literal category string.
      categories: {
        Workspace: 'Загальне',
        Communication: 'Комунікації',
        Security: 'Безпека',
        Infrastructure: 'Інфраструктура',
        Beta: 'Бета',
        Other: 'Інше',
      },
    },
    // The single-namespace settings screen (objectui#4024). Placed beside
    // `settingsHub` deliberately: `SettingsView.tsx` and `SettingsHub.tsx` are
    // the same feature in the same directory, and the view was the one file
    // written against a different convention — every string below was a
    // hardcoded English literal while its sibling resolved through the bundle.
    //
    // `useSettingsLabel` already translates the manifest-authored CONTENT
    // (title, description, field labels), so a plugin author could translate
    // what is INSIDE a settings namespace but had no key reaching the chrome
    // around it — a zh-CN admin read translated field labels inside an English
    // save bar.
    settingsView: {
      backToHub: 'Усі налаштування',
      back: 'Назад',
      noNamespace: 'Простір імен не вибрано.',
      loadError: 'Не вдалося завантажити налаштування',
      saved: 'Налаштування збережено',
      saveFailed: 'Помилка збереження',
      // Parameterized, never concatenated: `{{key}}` is spliced into the
      // sentence so a pack can put the key where its own grammar wants it.
      lockedByEnv: 'Заблоковано середовищем: {{key}}',
      // The server named no key — the same refusal without a subject.
      lockedByEnvNoKey: 'Заблоковано середовищем',
      actionSucceeded: 'Дію виконано',
      actionFailed: 'Помилка дії',
      discard: 'Відкинути',
      saveChanges: 'Зберегти зміни',
      // Save-bar counter. A REAL i18next plural family, not an English-only
      // `change(s)`.
      //
      // i18next asks `Intl.PluralRules` for the one suffix a language needs, so
      // each pack spells out every category its language selects — `ru` has
      // four, `ar` six (objectui#11432) — and keeps the base key
      // (objectui#3863). `all-locales-key-parity.test.ts` owns both rules.
      unsavedCount: 'Незбережених змін: {{count}}',
      unsavedCount_one: '{{count}} незбережена зміна',
      unsavedCount_few: '{{count}} незбережені зміни',
      unsavedCount_many: 'Незбережених змін: {{count}}',
      unsavedCount_other: 'Незбережених змін: {{count}}',
      // The toast of a save the server refused field by field (objectui#13146).
      // `{{settings}}` is the refused settings' labels, as their rows draw them,
      // joined with `validation.formInvalidJoiner`; each row shows its own
      // reason, so the toast names the settings and gives no reason.
      fieldErrorsToast: 'Потребують уваги налаштувань: {{count}} — {{settings}}',
      fieldErrorsToast_one: 'Потребує уваги налаштування: {{count}} — {{settings}}',
      fieldErrorsToast_few: 'Потребують уваги налаштування: {{count}} — {{settings}}',
      fieldErrorsToast_many: 'Потребують уваги налаштувань: {{count}} — {{settings}}',
      fieldErrorsToast_other: 'Потребують уваги налаштувань: {{count}} — {{settings}}',
      // The fail-closed crypto refusal (objectstack#8396). objectui#4579 added
      // these as English literals on purpose — routing one string through i18n
      // would have left a single translated string among a dozen hardcoded
      // ones — and deferred them to this card, which converts the screen whole.
      cryptoRefusalTitle: 'Це розгортання не може шифрувати секрети',
      // `{{subject}}` is rendered as a `< code >` element by the view, so the
      // sentence is split around it rather than interpolated.
      cryptoRefusalSubjectSuffix: 'оголошено зашифрованим, тому нічого не записано.',
      cryptoRefusalNoSubject: 'Оголошене зашифрованим значення відхилено, тому нічого не записано.',
      cryptoRefusalToast: 'Не вдається шифрувати секрети: {{subject}}',
      cryptoRefusalToastNoSubject: 'Не вдається шифрувати секрети',
      // The source badge beside a settings row's label (objectui#12694): the
      // layer a value comes from. `{{source}}` is that layer's label, which the
      // server translates under `settingsCommon.sourceLabels`. One sentence per
      // badge, so a pack puts the layer where its own grammar wants it.
      sourceBadgeInherited: 'Успадковано від {{source}}',
      sourceBadgeOverrides: 'Перекриває {{source}}',
      // The action beside an `Overrides` badge (objectui#13145): it clears this
      // layer's value in the draft, and Save sends it as `null` (unset), so the
      // row falls back to the value the layer above carries.
      resetToDefault: 'Скинути до типового',
      // A value set at the scope this page writes (objectstack#30329), and
      // the default its Reset returns to. `{{value}}` is that default in words.
      sourceBadgeModified: 'Змінено',
      defaultValueHint: 'Типове: {{value}}',
      // The chips on a settings row's header (objectui#12821): the env-lock
      // chip and the title it shows when the server sends no reason, and the
      // `Deprecated` chip, with `{{replacedBy}}` the key that replaces it.
      // `unsupportedSpecifierType` is the row drawn for a specifier type the
      // page has no control for, `{{type}}` that type.
      envLockBadge: 'Заблоковано середовищем',
      envLockBadgeTitle: 'Зафіксовано змінною середовища — не можна редагувати з інтерфейсу.',
      // The clear under a pinned row that has a value stored beneath the pin
      // (objectstack#30665): it clears the saved value, never "deletes" it, and
      // says the environment value stays in force. `clearSaved` is the button and
      // the confirm's title and action; `savedCleared` the toast once it is done.
      savedBeneathPin: 'Тут також збережено значення. Значення середовища залишається чинним; збережене повернеться, якщо змінну вилучать.',
      clearSaved: 'Очистити збережене значення',
      clearSavedConfirm: 'Збережене тут значення буде очищено, тому воно не повернеться, якщо змінну середовища вилучать. Значення середовища залишається чинним.',
      savedCleared: 'Збережене значення очищено',
      deprecatedBadge: 'Застаріле',
      deprecatedBadgeReplacedBy: 'Застаріле → {{replacedBy}}',
      unsupportedSpecifierType: 'Непідтримуваний тип специфікатора: {{type}}',
      // The `map` control (objectstack#31391): keyed rows over the keys the server
      // serves. `mapAddRow` is the picker that adds a row by its key, `{{key}}` in
      // `mapRemoveRow` the row's key as shown; `mapKeyNotOffered` marks a stored key
      // the server no longer offers, with `mapKeyNotOfferedHint` as its title;
      // `mapUnitLabel` names a duration cell's unit select, `{{column}}` its header,
      // and `mapUnitHours`..`mapUnitYears` are the h, d, w and y units it offers.
      mapAddRow: 'Додати рядок',
      mapRemoveRow: 'Видалити {{key}}',
      mapKeyNotOffered: 'Не пропонується',
      mapKeyNotOfferedHint: 'Цей ключ зараз не з-поміж тих, що параметр приймає. Зберігання відмовляє йому, доки рядок не вилучать або йому не дадуть іншого ключа.',
      mapNoRows: 'Немає рядків',
      mapSearchKey: 'Пошук…',
      mapUnitLabel: 'Одиниця {{column}}',
      mapUnitHours: 'годин',
      mapUnitDays: 'днів',
      mapUnitWeeks: 'тижнів',
      mapUnitYears: 'років',
      // A settings value that misses its type's declared format blocks Save
      // (objectui#13287). `email` and `url` reuse `validation.email` and
      // `validation.url`; these two name what a phone number and a colour take.
      invalidPhone: 'Уведіть номер телефону лише з цифр, пробілів і знаків + ( ) - .',
      invalidColor: 'Уведіть колір у форматі hex, наприклад #1a2b3c',
      // A `json` setting stored as text by the console before objectstack#31241:
      // the page puts that text in the draft so one Save stores it as an object.
      jsonStoredAsText: 'Це значення зберігається як текст, а не як об\'єкт JSON. Збережіть, щоб записати його як об\'єкт; сторінка позначила його як незбережену зміну.',
      // The address the server judges beside Allowed IP ranges (objectstack#30313),
      // one whole sentence per state of `GET /api/v1/auth/admin/client-address`:
      // `trustProxy` off, on, and no address the server can establish.
      clientAddressDirect: 'Ваша адреса, як її бачить сервер: {{address}}. Список, який її не містить, не можна зберегти звідси. Цей сервер не довіряє заголовкам проксі, тому за проксі це адреса самого проксі.',
      clientAddressViaProxy: 'Ваша адреса, як її бачить сервер: {{address}}, прочитана з переадресованих заголовків проксі, якому цей сервер довіряє. Список, який її не містить, не можна зберегти звідси.',
      clientAddressUnknown: 'Сервер не може встановити вашу адресу, тому непорожній список не можна зберегти звідси.',
      // A settings value that misses its declared pattern (objectstack#30206),
      // said in the console's words instead of the server's English sentence.
      // `{{setting}}` is the setting's label and `{{help}}` the help line the
      // refusal replaces under the field; `invalidFormatPick` is for a setting
      // chosen from a list.
      invalidFormat: '{{setting}} не у коректному форматі.',
      invalidFormatHelp: '{{setting}} не у коректному форматі. {{help}}',
      invalidFormatPick: 'Виберіть значення для {{setting}} зі списку.',
    },
    // The first-run checklist at the top of Home (objectstack#30206): what an
    // administrator sets up first, each row's line read from the real setting.
    // `{{name}}` is the organization's name; `{{language}}`, `{{country}}`,
    // `{{zone}}` and `{{currency}}` the values in words; `{{current}}` the
    // timezone the system uses now. `progress` counts the rows shown. A row
    // that is done shows its value alone, so it has no `done` line here.
    firstRunChecklist: {
      title: 'Підготуйте свою систему',
      description: 'Що налаштувати, доки не почали колеги. Кожен пункт можна змінити пізніше в Налаштуваннях.',
      progress: 'Готово {{done}} із {{total}}',
      dismiss: 'Сховати список',
      showDone: 'Показати завершені ({{done}})',
      hideDone: 'Сховати завершені',
      optional: 'Необов\'язково',
      set: 'Задати',
      change: 'Змінити',
      view: 'Переглянути',
      confirm: 'Підтвердити',
      cancel: 'Скасувати',
      prefilled: 'Незадані значення запропоновано з вашого браузера. Нічого не зберігається, доки ви не підтвердите.',
      organizationName: {
        title: 'Назвіть свою організацію',
        todo: 'Вона досі має ім\'я, з яким її створено: «{{name}}».',
        action: 'Перейменувати',
      },
      languageCountry: {
        title: 'Типова мова і країна',
        todo: 'Зараз {{language}} і {{country}}. Підтвердьте або виберіть інші.',
        saved: 'Типові мова і країна збережені',
      },
      timezone: {
        title: 'Часовий пояс системи',
        todo: 'Досі типове для платформи — {{current}}. Він визначає, що означає «сьогодні» у формулах, і як звіти групують дати.',
        saved: 'Часовий пояс системи задано: {{zone}}',
      },
      currency: {
        title: 'Типова валюта',
        todo: 'Ще не задана, тому суми показуються без символа валюти.',
        saved: 'Типову валюту задано: {{currency}}',
      },
      mail: {
        title: 'Доставка електронної пошти',
        todo: 'Ще не налаштована, тому листи, як-от запрошення і скидання пароля, не доставляються.',
        done: 'Налаштовано на доставку листів.',
        action: 'Налаштувати',
      },
      invite: {
        title: 'Запросіть колег',
        todo: 'Поки ви єдиний учасник.',
        done: 'Колеги приєдналися або були запрошені.',
        action: 'Запросити',
      },
      aiProvider: {
        title: 'Налаштуйте вбудований ШІ',
        todo: 'Постачальника ШІ ще не задіяно. Виберіть одного та додайте його ключ.',
        doneSettings: '{{provider}}, задано в Налаштуваннях.',
        doneEnvironment: '{{provider}}, виявлено в середовищі сервера.',
        action: 'Налаштувати',
      },
      connectAssistant: {
        title: 'Підключіть зовнішнього ШІ-асистента',
        todo: 'Працюйте в цій системі від свого імені з Claude, Doubao та подібних асистентів через MCP. Вбудований ШІ налаштовується окремо, у Налаштуваннях → ШІ та Embedder.',
        done: 'Ваш ШІ-асистент або ключ API підключені.',
        action: 'Підключити',
      },
    },
    error: {
      connectionFailed: 'Не вдається підключитися до сервера',
      checkServer: 'Перевірте мережеве підключення або те, чи працює бекенд.',
    },
    actions: {
      retry: 'Спробувати знову',
      retrying: 'Повторна спроба…',
    },
    // Copy owned by the console server-action wrapper (`consoleServerAction.ts`,
    // objectui#3321): the pre-opened SSO spinner tab and the popup-blocked toast.
    serverAction: {
      openingTitle: 'Відкриття…',
      openingBody: 'Відкриваємо… це може тривати мить.',
      popupBlockedTitle: 'Вікно заблоковано',
      popupBlockedDescription: 'Ваш браузер заблокував відкриття нової вкладки.',
      popupBlockedAction: 'Відкрити в новій вкладці',
      // The `newTabUrl` fast path's refusal when no record id resolves
      // (`createConsoleServerActionHandler`, objectui#13397).
      noRecordId: 'Ця дія виконується над одним записом — ідентифікатор запису недоступний.',
      // A refused action whose answer named required fields: what to do next,
      // after the server's own sentence (`createConsoleServerActionHandler`).
      fillRequiredThenRetry: 'Заповніть {{fields}}, а потім виконайте «{{action}}» знову.',
      fillRequiredFirst: 'Спочатку заповніть {{fields}}.',
    },
    shortcuts: {
      title: 'Гарячі клавіші',
      description: 'Швидкий довідник усіх доступних гарячих клавіш.',
      groups: {
        general: 'Загальні',
        navigation: 'Навігація',
        aiChat: 'ШІ-асистент',
      },
      openCommandPalette: 'Відкрити палітру команд',
      showShortcuts: 'Показати гарячі клавіші',
      closeDialog: 'Закрити діалог / панель',
      toggleSidebar: 'Перемкнути бічну панель',
      newChat: 'Новий чат',
      toggleChatsList: 'Перемкнути список розмов',
      goHome: 'На головну',
      toggleRelated: 'Показати / сховати праву колонку',
    },
    reportIndex: {
      title: 'Звіти',
      emptyTitle: 'Немає звітів',
      emptyDescription: 'У цього застосунку немає звітів, які можна відкрити.',
      otherApps: 'Звіти у ваших інших застосунках:',
      viewsLabel: 'Подання звітів',
      viewAll: 'Усі звіти',
      viewRecent: 'Нещодавні',
      searchPlaceholder: 'Шукати звіти…',
      searchLabel: 'Пошук звітів',
      otherSection: 'Інше',
      lastOpened: 'Відкрито {{time}}',
      recentEmpty: 'Нещодавно відкритих звітів немає',
      noMatch: 'Звітів за вашим пошуком немає.',
    },
    commandPalette: {
      title: 'Палітра команд',
      placeholder: 'Уведіть команду або шукайте…',
      noResults: 'Результатів не знайдено.',
      searching: 'Пошук…',
      records: 'Записи',
      recentRecords: 'Нещодавно переглянуті',
      objects: 'Об\'єкти',
      packages: 'Пакети',
      flows: 'Потоки',
      dashboards: 'Дашборди',
      pages: 'Сторінки',
      reports: 'Звіти',
      switchApp: 'Змінити застосунок',
      current: 'Поточний',
      preferences: 'Параметри',
      lightTheme: 'Світла тема',
      darkTheme: 'Темна тема',
      systemTheme: 'Системна тема',
      actions: 'Дії',
      openFullSearch: 'Відкрити сторінку повного пошуку',
    },
    ai: {
      pendingDrafts: {
        count: '{{count}} змін ще не опубліковано — користувачі їх не бачать.',
        publish: 'Опублікувати',
        published: 'Усі очікувані зміни опубліковано.',
        failed: 'Помилка публікації.',
        publishedWithFindings: 'Опубліковано, але проби середовища виконання знайшли проблеми: {{detail}}',
      },
      usage: {
        title: 'Використання ШІ',
        // objectui#11658 — the popover's ONE figure: the share of the single
        // AI pool already used (a formatted percentage, never a token count).
        // It replaced the build / data-Q&A split, which could not attribute a
        // single-composer turn honestly.
        poolUsed: 'Використано {{percent}}',
        statusOk: 'Ще вдосталь',
        statusLow: 'Закінчується',
        statusFull: 'Ліміт досягнуто',
        resetsDaily: 'Скинеться сьогодні ввечері',
        resetsMonthly: 'Скинеться наступного циклу',
        // `resetKind: 'weekly'` (free plan's rolling 7-day window, cloud PR
        // #1852): "N days" (or "N hours" inside the final day). A REAL
        // i18next plural family — see the `unsavedCount` note above — so the
        // BASE key carries no suffix and must stay in every pack's lookup
        // chain (`all-locales-key-parity.test.ts`'s base-key rule).
        resetsWeeklyDays: 'Скинеться за {{count}} днів',
        resetsWeeklyDays_one: 'Скинеться за {{count}} день',
        resetsWeeklyDays_few: 'Скинеться за {{count}} дні',
        resetsWeeklyDays_many: 'Скинеться за {{count}} днів',
        resetsWeeklyDays_other: 'Скинеться за {{count}} днів',
        resetsWeeklyHours: 'Скинеться за {{count}} годин',
        resetsWeeklyHours_one: 'Скинеться за {{count}} годину',
        resetsWeeklyHours_few: 'Скинеться за {{count}} години',
        resetsWeeklyHours_many: 'Скинеться за {{count}} годин',
        resetsWeeklyHours_other: 'Скинеться за {{count}} годин',
        ctaUpgrade: 'Оновіть план, щоб продовжити',
        ctaTopUp: 'Додайте кредити, щоб продовжити',
        ariaLabel: 'Використання ШІ: {{status}}',
      },
      openChats: 'Відкриті чати',
      chats: 'Чати',
      chatsDescription: 'Переглядайте та керуйте розмовами зі ШІ.',
      share: 'Спільний доступ',
      shareTitle: 'Спільний доступ до цієї розмови',
      shareDisabledTitle: 'Почніть чат, щоб уможливити спільний доступ',
      // The build conversation's Build Doctor button (its accessible name,
      // and its tooltip enabled / before the first message) and the drawer
      // title it opens (objectui#10900).
      buildDoctor: 'Build Doctor',
      buildDoctorTitle: 'Build Doctor — що справді потрапило в систему?',
      buildDoctorDisabledTitle: 'Спершу надішліть повідомлення',
      // The Build Doctor drawer's body (objectui#10969): its description, the
      // loading and not-found states, the summary line, the verdict, and each
      // section's title and hint. What the report itself carries (tool, artifact
      // and status names, timeline text) is data and stays verbatim.
      buildDoctorDrawer: {
        description: 'Що агент заявляв проти того, що справді в системі. Діагностика лише для читання.',
        reconciling: 'Зведення…',
        notAvailable: 'Недоступно — розмову не знайдено або ви не маєте доступу.',
        untitled: '(без назви)',
        summary: '{{turns}} ходів · {{messages}} повідомл. · {{tokens}} токенів · {{seconds}} с ШІ',
        allLive: 'Намічених змін у системі: {{count}} — нічого не випарило.',
        discrepancies: '{{count}} розбіжностей — сказане в чаті не збігається з тим, що в системі.',
        orphanedTitle: 'Запропоновано, але ніколи не застосовано',
        orphanedHint: 'Карта підтвердження, яку агент запропонував, але жоден наступний хід не застосував — зміна тихо випарилася.',
        missingTitle: 'Заявлено, але відсутньо',
        missingHint: "Результат інструменту сказав, що застосовано, але артефакта немає в sys_metadata.",
        toolErrorsTitle: 'Помилки інструментів',
        toolErrorsHint: 'Виклики інструментів, які повернули помилку під час збирання.',
        verifyTitle: 'Перевірка збирання (verify_build)',
        yourApp: 'Ваш застосунок:',
        noIssues: '0 проблем',
        issueCount: 'Проблем: {{count}}',
        platformNoise: 'Сховано знахідок платформи sys_*: {{count}}',
        pendingActions: 'Очікувані дії',
        timeline: 'Хронологія ({{count}})',
      },
      newChat: 'Створити',
      searchChats: 'Шукати чати…',
      noChatsYet: 'Чатів ще немає',
      noChatsDescription: 'Розпочніть нову розмову, щоб побачити її тут.',
      noMatchingChats: 'Чатів за збігом немає.',
      newConversation: 'Нова розмова',
      renameConversation: 'Перейменувати розмову',
      deleteConversation: 'Видалити розмову',
      saveRename: 'Зберегти перейменування',
      cancelRename: 'Скасувати перейменування',
      loadingHistory: 'Завантаження історії розмов…',
      offlineDemoMode: 'Офлайн-режим демонстрації — список агентів недоступний',
      sendFailedRateLimited:
        "Ви надсилаєте повідомлення задто швидко. Ваше повідомлення збережено нижче — зачекайте мить і спробуйте знову.",
      sendFailedGeneric:
        "Не вдалося надіслати ваше повідомлення. Воно збережене нижче — спробуйте ще раз.",
      askAgent: 'Спитайте {{agent}}…',
      assistant: 'Асистент',
      liveCanvas: 'Живий перегляд — {{app}} (чернетка)',
      liveCanvasUnlisted: 'Живий застосунок — {{app}} (прихований до публікації)',
      liveCanvasLive: 'Живий застосунок — {{app}}',
      loadingAgents: 'Завантаження агентів…',
      askAnything: 'Питайте про що завгодно…',
      askOrChangeApp: 'Питайте про свої дані або попросіть мене змінити цей застосунок…',
      describeAppToBuild: 'Опишіть застосунок, який хочете зібрати, або що змінити…',
      emptyTitle: 'Розпочніть розмову',
      emptyDescription: 'Питайте про що завгодно — асистент має доступ до контексту вашого поточного застосунку.',
      switchAssistant: 'Змінити асистента',
      chooseAgent: 'Виберіть асистента…',
      // objectui#8329 — the maker's empty-state prose, and the FIRST sentence a
      // new user reads on the build surface (it sits above the start chips).
      // Same ADR-0112 v1 boundary the chips answer to (cloud#1984 /
      // objectui#7709 for the starters, cloud#2022 for the model's own closing
      // suggestions): these two descriptions are the product PROMISING, so they
      // may only name what v1 BUILDS — objects, fields, views, pages,
      // dashboards, sample data, apps and navigation. `build.description` used
      // to offer "an app or workflow … objects, screens and automations" and
      // `editApp.description` "… view or automation"; v1 has no flows, actions
      // or schedules, so a user who took either at its word was refused
      // outright — the worst possible answer to the first line on the page.
      //
      // NOT the same thing as the platform's manual automation surfaces, which
      // are real and stay as they are: `home.build.subtitle` (that card opens
      // Studio, which does author flows), `engine.studio.landing.description`,
      // `packagedAutomation.*` and the
      // marketplace `automation` category. The boundary is v1 AI AUTHORING, not
      // the word "automation".
      //
      // REVERT both sentences when ADR-0112 v2 re-adds flows and actions — same
      // line of the version roadmap as the chips. Every pack's wording is
      // guarded, in its own script, by
      // `packages/i18n/src/__tests__/makerEmptyState-v1-scope-8329.test.ts`.
      empty: {
        build: {
          title: 'Збирайте з ШІ',
          description:
            "Опишіть застосунок простою мовою — я накидаю об'єкти, екрани й демодані, а потім ви перевіряєте і публікуєте.",
        },
        ask: {
          title: 'Запитайте про свої дані',
          description:
            'Поставте запитання про свої записи — кількості, списки та підсумки за даними, до яких ви маєте доступ.',
        },
        editApp: {
          title: 'Редагування «{{app}}»',
          titleGeneric: 'Змінити цей застосунок',
          description:
            "Що хочете змінити? Я правлю цей застосунок на місці — додам поле, об'єкт, подання або дашборд чи підправлю те, що вже є.",
        },
      },
      clearConversation: 'Очистити',
      sendHint: 'надіслати',
      newlineHint: 'для нового рядка',
      agentActivity: 'Активність агента',
      toolCompleted: 'Завершено',
      toolRunning: 'Виконується',
      toolAwaitingApproval: 'Очікує затвердження',
      toolFailed: 'Помилка',
      toolDetailsHidden: 'У цьому перегляді сховано вхідні дані інструментів і сирі результати.',
      // objectui#11667 — the inline HITL deny reason (stored on the pending
      // action as `rejection_reason`, read as prose) and the ADR-0057 P4
      // "Open in Builder" handoff card. The card's Approve / Reject buttons
      // borrow `aiApprovals.approveAndExecute` / `aiApprovals.reject`.
      toolDenyReason: 'Оператор відхилив із чату',
      builderHandoffTitle: 'Зберіть це у Builder',
      builderHandoffOpen: 'Відкрити у Builder →',
      builderHandoffSuperseded: 'Доступний новіший запит',
      // cloud#3565 — the record-write card: ONE record the chat proposes and the user confirms.
      recordWriteCreateTitle: 'Створення {{object}}',
      recordWriteUpdateTitle: 'Зміна {{object}}',
      recordWriteConfirm: 'Підтвердити',
      recordWriteOpenForm: 'Відкрити повну форму',
      recordWriteCancel: 'Скасувати',
      recordWriteCancelReason: 'Скасовано з картки',
      recordWriteOpenFormReason: 'Натомість відкрито повну форму',
      recordWriteDropped: 'Не включено',
      recordWriteSubmitting: 'Записуємо…',
      recordWriteWritten: 'Записано',
      recordWriteCancelled: 'Скасовано',
      sampleDataCleanupTitle: 'Видаліть демодані',
      sampleDataCleanupIrreversible: 'Видалені рядки не відновити.',
      sampleDataCleanupAbsent: '{{count}} записаних рядків не перелічено: ви їх не бачите, або вони вже зникли.',
      sampleDataCleanupAbsent_one: '{{count}} записаний рядок не перелічено: ви його не бачите, або він уже зник.',
      sampleDataCleanupAbsent_few: '{{count}} записані рядки не перелічено: ви їх не бачите, або вони вже зникли.',
      sampleDataCleanupAbsent_many: '{{count}} записаних рядків не перелічено: ви їх не бачите, або вони вже зникли.',
      sampleDataCleanupAbsent_other: '{{count}} записаних рядків не перелічено: ви їх не бачите, або вони вже зникли.',
      sampleDataCleanupEdited: '{{count}} рядків, змінених після створення демоданих, залишаються.',
      sampleDataCleanupEdited_one: '{{count}} рядок, змінений після створення демоданих, залишається.',
      sampleDataCleanupEdited_few: '{{count}} рядки, змінені після створення демоданих, залишаються.',
      sampleDataCleanupEdited_many: '{{count}} рядків, змінених після створення демоданих, залишаються.',
      sampleDataCleanupEdited_other: '{{count}} рядків, змінених після створення демоданих, залишаються.',
      packageRemovalTitle: 'Видалити пакет {{package}}',
      packageRemovalRows: 'Записів: {{count}}',
      packageRemovalRows_one: '{{count}} запис',
      packageRemovalRows_few: '{{count}} записи',
      packageRemovalRows_many: 'Записів: {{count}}',
      packageRemovalRows_other: 'Записів: {{count}}',
      packageRemovalDraft: 'Чернетка, без таблиці',
      packageRemovalRowsUnknown: 'Кількість записів недоступна',
      packageRemovalTotal: 'Усього записів: {{count}}',
      packageRemovalTotal_one: '{{count}} запис усього',
      packageRemovalTotal_few: '{{count}} записи в цілому',
      packageRemovalTotal_many: 'Усього записів: {{count}}',
      packageRemovalTotal_other: 'Усього записів: {{count}}',
      packageRemovalUncounted: "Підсумок оминає {{count}} об'єктів, записи яких не вдалося порахувати.",
      packageRemovalUncounted_one: "Підсумок оминає {{count}} об'єкт, записи якого не вдалося порахувати.",
      packageRemovalUncounted_few: "Підсумок оминає {{count}} об'єкти, записи яких не вдалося порахувати.",
      packageRemovalUncounted_many: "Підсумок оминає {{count}} об'єктів, записи яких не вдалося порахувати.",
      packageRemovalUncounted_other: "Підсумок оминає {{count}} об'єктів, записи яких не вдалося порахувати.",
      packageRemovalPermanent: 'Таблиці буде вилучено назавжди, разом із усіма записами в них. Вилучені таблиці не потрапляють до корзини і не відновлюються.',
      packageRemovalKept: 'Таблиці бази даних і всі записи в них зберігаються; вилучається лише пакет.',
      packageRemovalRemoved: 'Пакет видалено.',
      packageRemovalPartial: 'Пакет видалено частково: не вилучено позицій {{count}}.',
      packageRemovalPartial_one: 'Пакет видалено частково: не вилучено {{count}} позицію.',
      packageRemovalPartial_few: 'Пакет видалено частково: не вилучено {{count}} позиції.',
      packageRemovalPartial_many: 'Пакет видалено частково: не вилучено позицій {{count}}.',
      packageRemovalPartial_other: 'Пакет видалено частково: не вилучено позицій {{count}}.',
      copy: 'Копіювати',
      copied: 'Скопійовано',
      regenerate: 'Згенерувати заново',
      model: 'Модель',
      submit: 'Надіслати',
      uploadFiles: 'Завантажити файли',
      stopResponse: 'Перервати відповідь',
      trace: 'трасування',
      viewTrace: 'Переглянути трасування',
      // Build-flow draft + "Proposed plan" confirm-gate card (AiChatPage /ai/build).
      // Mirror the ConsoleFloatingChatbot locale object so both AI surfaces match.
      nextSteps: 'Що далі',
      publishDrafts: 'Опублікувати',
      publishOk: "Опубліковано — об'єкти вже в системі.",
      seedWarn: 'Опубліковано, але частина демоданих не завантажилася.',
      openBuiltApp: 'Відкрити застосунок',
      viewBuiltAppInStudio: 'Переглянути у Studio',
      previewDraft: 'Перегляд',
      previewApp: 'Перегляд застосунку',
      resizeSplit: 'Змінити розмір чата та перегляду',
      hideChats: 'Сховати чати',
      showChats: 'Показати чати',
      planTitle: 'Запропонований план',
      planQuestions: 'Підтвердьте перед збиранням',
      planAssumptions: 'Припущення',
      planApproveHint: 'Дайте відповідь, щоб затвердити або скоригувати цей план.',
      planApprove: 'Зібрати',
      planAdjust: 'Скоригувати',
      changesTitle: 'Підтвердте зміни',
      changesConfirmed: 'Підтверджено',
      changesConfirm: 'Підтвердити',
      changesConfirmHint: 'Дайте відповідь, щоб підтвердити або скоригувати цю зміну.',
      changesApplying: 'Застосування…',
      changesApplied: 'Застосовано',
      changesDrafted: 'Збережено як чернетка',
      changesFailed: 'Не застосовано',
      discussing: 'Обговорюємо: {{target}}',
      changeVerb: {
        createObject: "Створити об'єкт",
        addField: 'Додати поле',
        modifyField: 'Змінити поле',
        deleteField: 'Видалити поле',
        createMetadata: 'Створити',
        updateMetadata: 'Змінити',
        createSeed: 'Згенерувати демодані',
        createPackage: 'Створити пакет застосунку',
      },
      justNow: 'щойно',
      minutesAgo: '{{count}} хв тому',
      hoursAgo: '{{count}} год тому',
      daysAgo: '{{count}} д тому',
      agentLabels: {
        ask: 'Запитати',
        build: 'Зібрати',
        // Legacy keys kept for back-compat with any external overrides.
        dataChat: 'Асистент',
        metadataAssistant: 'Асистент метаданих',
      },
      suggestions: {
        dataChat: {
          userCount: 'Скільки в системі користувачів? Виведи їхні електронні адреси.',
          recentRecords: 'Перелічи 5 найновіших створених записів.',
          recordCounts: "Порахуй кількість записів для кожного об'єкта.",
        },
        // cloud#1984 — these five chips are the maker's own recommendations, so
        // they may only ask for what ADR-0112 v1 BUILDS: objects, fields, views
        // (grid/kanban/calendar/gallery), pages, dashboards and sample data. No
        // wording that promises autonomous behaviour (alert / remind / notify /
        // automate / status workflow) — v1 has no flows, actions or schedules, and
        // the model silently degrades such a request into a board or a filtered
        // view, so the chip would promise an alert and deliver a page. REVERT to
        // the automation wording when ADR-0112 v2 re-adds flows and actions.
        metadataAssistant: {
          buildCrm: 'Зберіть CRM для продажів — клієнти, контакти та угоди з полем кроку, плюс дашборд, де підсумовується вартість угод за кроками.',
          buildApp: 'Створіть трекер проєктів — проєкти, завдання з виконавцями і термінами, дошку, згруповану за статусом, і календар термінів.',
          buildFlow: 'Спроектуйте службову підтримку — тикети з полями пріоритету і статусу, дошку за статусом і посилання на клієнтів.',
          buildInventory: 'Зберіть застосунок для запасів — товари, рівні складу, постачальники та подання, що показує позиції нижче точки замовлення.',
          buildRecruiting: 'Зробіть трекер кандидатів — кандидати, відкриті вакансії, поле етапу співбесіди і дошку, згруповану за етапом.',
        },
        generic: {
          help: 'Чим можете допомогти?',
          availableObjects: "Перелічи доступні об'єкти даних.",
          recentActivity: 'Підсумуй мої нещодавні дії.',
        },
        // objectui#7709 — the edit-mode starters, shown when the maker is bound
        // to an EXISTING app (`?package=`). Same rule as the five above: they
        // may only ask for what ADR-0112 v1 BUILDS. The fourth chip used to be
        // `addAutomation` ("an approval, a status flow, or a notification") and
        // every capability it named is refused by v1 (cloud#1956 / PR #1970), so
        // it now asks for sample data — `seed` IS on v1's whitelist, and having
        // no data is what an existing app most often lacks. REVERT: when
        // ADR-0112 v2 re-adds flows and actions, THIS chip's automation wording
        // comes back as `addAutomation`; the retired string is pinned for every
        // pack in `packages/i18n/src/__tests__/makerEditChips-v1-scope-7709.test.ts`.
        editApp: {
          addField: "Додай поле до одного з об'єктів.",
          addObject: "Створи новий об'єкт і пов'яжи його з наявним.",
          addDashboard: 'Додай дашборд із ключовими показниками.',
          addSampleData: "Заповни наявні об'єкти реалістичними демо-записами, щоб застосунок можна було показати.",
        },
      },
      // objectui#3546 slice four — the AI console surfaces: the /ai chat page's app switcher,
      // connection banner and plan/publish cards, the ChatDock chrome, and the
      // conversation-list date buckets. `group.*` is the template-key family
      // `console.ai.group.${key}` (ConversationsSidebar), enumerated from the
      // ConversationGroupKey union — all five members, no wildcard.
      collapseToDock: 'Згорнути в бічну панель',
      switchApp: 'Змінити застосунок',
      switchAppLabel: 'Розмови збирання за застосунками',
      newApp: 'Новий застосунок',
      connectionWaiting: 'Очікування сервера…',
      connectionStalled: 'Ще працюємо…',
      connectionOffline: 'Підключення втрачено — перепідключення…',
      designingPlan: 'Проектуємо ваш застосунок…',
      designingPlanHint: {
        data: 'Описуємо дані, які відстежуватимете…',
        objects: "Оформлюємо об'єкти та їхні поля…",
        relations: "Пов'язуємо між собою записи…",
        lookups: "Налаштовуємо зв'язки та підстановки…",
        views: 'Плануємо екрани і подання…',
        forms: 'Розкладаємо форми і списки…',
        defaults: 'Додаємо розумні типові значення і перевірки…',
        dashboard: 'Замальовуємо дашборд для відстеження…',
        review: 'Перевіряємо, чи тримається структура докупи…',
        finalize: 'Зводимо план разом…',
      },
      planBuilding: 'Збираємо…',
      planBuilt: 'Зібрано',
      planDeferred: 'Ще не зібрано',
      planReady: 'План готовий. Збирайте зараз або скажіть, що скоригувати.',
      published: 'Опубліковано',
      publishFailed: 'Помилка публікації',
      unavailableTitle: 'ШІ-асистент недоступний',
      unavailableDescription: "У цьому розгортанні не увімкнено ШІ-асистента. Все інше працює як завжди.",
      unavailableError: "Не вдалося дістатися служби ШІ. Можливо, вона тимчасово офлайн — спробуйте знову або поверніться на головну.",
      unavailableRetry: 'Спробувати знову',
      unavailableHome: 'На головну',
      dock: {
        title: 'Асистент',
        description: 'Чат ШІ-асистента',
        resize: 'Змінити розмір чата',
        collapse: 'Згорнути чат',
        maximize: 'Відкрити повну сторінку',
        open: 'Відкрити асистента',
        // objectui#11666 — the launchers' marker while a proposed plan awaits approval.
        planAwaitingApproval: 'Запропонований план чекає на ваше затвердження',
      },
      group: {
        today: 'Сьогодні',
        yesterday: 'Вчора',
        previous7Days: 'Останні 7 днів',
        previous30Days: 'Останні 30 днів',
        older: 'Старіше',
      },
    },
    // objectui#9954 — the environment admin's read-rate report (cloud#2333).
    // Two anomalous cases, two sets of words: an ABSENT `readsPerWrite` means the
    // environment wrote nothing at all, so the ratio is unbounded — the most
    // severe reading, and never a missing number. `{{threshold}}` always comes
    // from the wire; this repo holds no copy of the line. Report only — the copy
    // states that nothing is limited or blocked, and must keep doing so.
    readRate: {
      ratioTitle: 'Незвичний обсяг читань у цій системі',
      ratio: 'Читання йдуть у темпі {{ratio}} рядків на кожен записаний рядок. Платформа позначає все, що вище за {{threshold}}. Нічого не обмежено і не заблоковано; це повідомлення, щоб модель читання можна було переглянути.',
      noWritesTitle: 'Читання, коли жодних записів немає зовсім',
      noWrites: 'Рядки зчитуються, тоді як нічого не записується взагалі, тому межі для темпу читання немає. Це найсерйозніший варіант. Платформа позначає все, що вище за {{threshold}}. Нічого не обмежено і не заблоковано; це повідомлення, щоб модель читання можна було переглянути.',
    },
    // objectui#10439 — the environment admin's storage-capacity banner (cloud#2135).
    // Raised by the tenant runtime's own verdict on `/api/v1/usage/storage`: `warn`
    // (80% and up) or `blocked` (uploads and bulk imports refused). `{{used}}` and
    // `{{limit}}` are that response's `usedMb` / `limitMb`, already formatted.
    storageUsage: {
      warningTitle: 'Сховище заповнюється',
      warning: 'Використано {{used}} МБ із {{limit}} МБ. Завантаження та імпорти стануть на паузу, щойно сховище заповниться.',
      blockedTitle: 'Сховище заповнене: завантаження та імпорти на паузі',
      blocked: 'Використано {{used}} МБ із {{limit}} МБ. Наявні дані недоторкані; читання, експорт і редагування окремих записів працюють.',
      upgrade: 'Оновіть план, щоб продовжити',
    },
    errors: {
      somethingWentWrong: 'Щось пішло не так',
      unexpectedError: 'Під час показу цього подання сталася неочікувана помилка.',
      tryAgain: 'Спробувати знову',
      goHome: 'На головну',
      errorDetails: 'Подробиці помилки (лише для розробників)',
    },
    // objectui#3546 slice four — the console's catch-all route (AppContent `RouteNotFound`).
    notFound: {
      title: 'Сторінку не знайдено',
      description: 'URL, за яким ви перейшли, не відповідає жодному поданню в цьому застосунку.',
      back: 'Назад',
    },
    theme: {
      toggle: 'Перемкнути тему',
      light: 'Світла',
      dark: 'Темна',
      system: 'Системна',
    },
    objectData: {
      badge: 'Дані',
      description: 'Зріз даних за URL — не прив\'язаний до збереженого подання.',
      filteredBy: 'Відфільтровано за',
      removeFilter: 'Видалити фільтр {{field}}',
      saveAsView: 'Зберегти як подання',
      noAccessTitle: 'Доступ заборонено',
      noAccess: 'У вас немає дозволу переглядати ці дані.',
    },
    identityImport: {
      policyTitle: 'Налаштування входу для імпортованих користувачів',
      policy: {
        auto: 'Автоматично (рекомендується)',
        invite: 'Надіслати запрошення',
        temporary: 'Тимчасові паролі',
        none: 'Без пароля (лише ідентичність)',
      },
      policyHint: {
        auto: 'Досяжні користувачі отримають запрошення (лист або SMS); кого не вдасться досягти, отримають одноразовий пароль, показаний ОДИН РАЗ на екрані результату. Працює як із службою електронної пошти/SMS, так і без неї.',
        invite: 'Кожен створений користувач отримає лист із налаштуванням пароля (або SMS-запрошення для рядків лише з номером телефону). Потрібна налаштована служба електронної пошти/SMS — недосяжні рядки завершаться помилкою.',
        temporary: 'Для розгортань без електронної пошти/SMS: кожен створений користувач отримає одноразовий пароль, показаний ОДИН РАЗ на екрані результату. Перший вхід змушує змінити пароль.',
        none: 'Користувачі спершу входять із телефонним OTP, магічним посиланням або посиланням скидання пароля, а потім задають власний пароль.',
      },
      passwordsNote: 'Тимчасові паролі — показані один раз, ніде не зберігаються. Збережіть їх зараз; кожен користувач має змінити свій пароль при першому вході.',
      passwordsMore: 'Пропущено ще записи — скористайтеся завантаженням.',
      passwordsDownload: 'Завантажити CSV',
    },
    // objectstack#30205 — the ban dialog's account of a user's open work (app-shell UserAssignedWorkPanel).
    assignedWork: {
      title: 'Записи, які тримає ця людина',
      loading: 'Порахуємо записи, які тримає ця людина…',
      countFailed: 'Записи, які тримає ця людина, не вдалося порахувати: {{message}}',
      noClient: 'Записи, які тримає ця людина, тут порахувати неможливо.',
      none: 'Ця людина не тримає записів, які ви можете прочитати.',
      summary: 'З доступних вам записів: усього {{total}}, у власності {{owned}}, призначено {{assigned}}.',
      row: '{{object}} · {{field}}',
      notTransferable: 'Перелічує кількох людей, тому не можна передати звідси.',
      truncated: 'Пораховано не всі поля користувача; у цієї людини може бути більше.',
      unreadable: 'Не пораховано, бо ви не можете їх читати: {{objects}}',
      handoverTo: 'Передати',
      handoverHint: 'Необов\'язково. Блокування не чекає на передачу.',
      handover: 'Передати',
      handingOver: 'Передача…',
      handoverNext: 'Передати наступну партію',
      targetBanned: 'Цю людину заблоковано. Виберіть активного користувача.',
      transferRefused: 'Передачу відхилено: {{message}}',
      report: 'Передано {{updated}}; {{failed}} неможливо перемістити; досі тримається {{remaining}}.',
      failure: '{{object}} {{id}}: {{message}}',
    },
    objectView: {
      // objectui#13330 — Setup → Users on a managed environment.
      managedUsers: {
        inviteLine: 'Це середовище керується з хмари. Запрошуйте людей до своєї організації там; вони з\'являться тут при першому вході. Користувач із позначкою «Не уповноважений» не тримає нічого понад доступ, який має кожен учасник: дайте йому набір дозволів або посаду.',
        unauthorized: 'Не уповноважений',
        unauthorizedHint: 'Не тримає набору дозволів понад базовий, який має кожен учасник, що ввійшов. Дайте йому набір дозволів або посаду.',
      },
      objectNotFound: "Об'єкт не знайдено",
      objectNotFoundDescription: 'Об\'єкта «{{objectName}}» не існує в поточній конфігурації.',
      objectNotFoundHint: 'Перевірте налаштування навігації застосунку або виберіть інший об\'єкт у бічній панелі.',
      objectPackageDisabled: 'Об\'єкт «{{objectName}}» належить до вимкненого пакета, тому його не віддається.',
      filterOrGroupNotEditable: 'У цього фільтра група OR укупи з іншими умовами, яку редактор фільтра не показує, тому тут він лише для читання. Подання все одно його застосовує.',
      filterNestedNotSavable: 'Цей фільтр використовує вкладені групи умов, які збережене подання зберегти не може. Зведіть їх до одного списку умов, щоб зберегти його до подання.',
      systemViewReadonly: 'Системне подання, визначене в коді — лише для читання.',
      // ObjectView.tsx references ONE edit-denied key from four call sites
      // (rename / pin / set-as-default / configure), so the copy has to cover
      // any change to a built-in view rather than name one operation.
      cannotEditMetaView: 'Це вбудоване подання, визначене в коді — його не можна змінити.',
      resetView: 'Скинути до подання',
      resetViewTitle: 'Повертає власні фільтри, пошук, сортування, групування, макет колонок, сховані поля, щільність, макет, колір рядка, номери рядків і редагування на місці цього подання. Закріплені подання, обране і те, як відкриваються записи, залишаються як є. Змінюється лише ваш список.',
      linkFilterRefused: 'Фільтр цього посилання не застосовано. Він називає поле, за яким сюди фільтрувати не можна, тому список показує подання без нього.',
      personalized: 'Персоналізовано',
      personalizedHeading: 'Ваш список відрізняється від цього подання в',
      personalizedParts: {
        filters: 'Фільтри',
        search: 'Пошук',
        sort: 'Сортування',
        grouping: 'Групування',
        columns: 'Макет колонок',
        hiddenFields: 'Сховані поля',
        density: 'Щільність',
        layout: 'Макет',
        rowColor: 'Колір рядка',
        rowNumbers: 'Номери рядків',
        inlineEdit: 'Редагування на місці',
      },
      cannotDeleteMetaView: 'Це вбудоване подання, визначене в коді — його не можна видалити.',
      expandToPage: 'Відкрити повною сторінкою',
      openAsPage: 'Відкрити повною сторінкою',
      allRecords: 'Усі записи',
      new: 'Створити',
      import: 'Імпорт',
      importTitle: 'Імпорт із CSV',
      importedToast: 'Імпортовано рядків: {{count}}.',
      importedToast_one: 'Імпортовано {{count}} рядок.',
      importedToast_few: 'Імпортовано {{count}} рядки.',
      importedToast_many: 'Імпортовано рядків: {{count}}.',
      importedToast_other: 'Імпортовано рядків: {{count}}.',
      importedWithSkipped: 'Імпортовано рядків: {{ok}}; пропущено {{skipped}}.',
      configureView: 'Налаштувати подання',
      toolbarEnabledCount: 'Увімкнено {{count}} із {{total}}',
      searchFields: 'Шукати поля…',
      title: 'Заголовок',
      viewType: 'Тип подання',
      // objectui#11445 — a count family, and every slot worded the way this pack
      // words `list.recordCount` (objectui#10636): the footer and the list bar
      // count the same records in the same words. The stray count-label slots
      // here («Записів: {{count}}») disagreed with the pack's own list family
      // and read the wrong noun at one («Записів: 1»).
      recordCount: '{{count}} записів',
      recordCount_one: '{{count}} запис',
      recordCount_few: '{{count}} записи',
      recordCount_many: '{{count}} записів',
      recordCount_other: '{{count}} записів',
      save: 'Зберегти',
      discard: 'Відкинути',
      createView: 'Створити подання',
      createViewDesc: 'Виберіть тип подання, а потім дайте йому назву. Кожне налаштування можна змінити потім.',
      cancel: 'Скасувати',
      create: 'Створити',
      delete: 'Видалити',
      deleteViewTitle: 'Видалення подання',
      deleteViewConfirm: 'Справді видалити подання «{{name}}»? Цю дію не можна скасувати.',
      bulkDeleteConfirm: 'Видалити {{count}} вибраних записів? Цю дію не можна скасувати.',
      bulkDeleteConfirm_one: 'Видалити {{count}} вибраний запис? Цю дію не можна скасувати.',
      bulkDeleteConfirm_few: 'Видалити {{count}} вибрані записи? Цю дію не можна скасувати.',
      bulkDeleteConfirm_many: 'Видалити {{count}} вибраних записів? Цю дію не можна скасувати.',
      bulkDeleteConfirm_other: 'Видалити {{count}} вибраних записів? Цю дію не можна скасувати.',
      bulkDeleteQuestion: 'Видалити {{count}} вибраних записів?',
      bulkDeleteQuestion_one: 'Видалити {{count}} вибраний запис?',
      bulkDeleteQuestion_few: 'Видалити {{count}} вибрані записи?',
      bulkDeleteQuestion_many: 'Видалити {{count}} вибраних записів?',
      bulkDeleteQuestion_other: 'Видалити {{count}} вибраних записів?',
      duplicateViewName: 'Подання з такою назвою вже існує.',
      viewTypeGrid: 'Таблиця',
      viewTypeGridDesc: 'Таблиця записів у стилі електронної таблиці.',
      viewTypeKanban: 'Канбан',
      viewTypeKanbanDesc: 'Картки, згруповані в колонки за полем одиночного вибору.',
      viewTypeCalendar: 'Календар',
      viewTypeCalendarDesc: 'Записи, розміщені на місячному календарі за датою.',
      viewTypeGallery: 'Галерея',
      viewTypeGalleryDesc: 'Великі картки зображень на основі поля вкладень.',
      viewTypeTimeline: 'Часова шкала',
      viewTypeTimelineDesc: 'Записи вздовж горизонтальної осі часу.',
      viewTypeGantt: 'Гант',
      viewTypeGanttDesc: 'Смуги проєкту з початком/кінець і залежностями.',
      viewTypeMap: 'Карта',
      viewTypeMapDesc: 'Географічні позначки з полів широти/довготи.',
      viewTypeChart: 'Діаграма',
      viewTypeChartDesc: 'Сукупні стовпчикові/лінійні/кругові візуалізації.',
      viewTypeTree: 'Дерево',
      viewTypeTreeDesc: 'Вкладіть записі, що посилаються самі на себе, в ієрархію за батьківським полем.',
      parentField: 'Батьківське поле',
      parentFieldHelp: 'Поле, що вказує на батьківський запис (той самий об\'єкт) і визначає ієрархію. Підходять лише поля, що посилаються самі на себе.',
      newView: 'Нове подання',
      viewName: 'Назва',
      viewNameHelp: 'Машинний ключ (snake_case). Автозаповнюється з заголовка — за бажанням змініть.',
      viewNameRequired: 'Уведіть ключ (малі латинські літери, цифри, підкреслення). Для не-латинських заголовків не заповнюється автоматично.',
      viewNameInvalid: 'Використовуйте малі латинські літери, цифри та підкреслення; почніть із літери або підкреслення.',
      groupByField: 'Поле групування',
      groupByFieldHelp: 'Канбан групує записи в колонки за значеннями цього поля.',
      startDateField: 'Поле дати початку',
      startDateFieldHelp: 'Календар розміщує записи в комірці, що відповідає цій даті.',
      ganttStartDateFieldHelp: 'Лівий край кожної смуги Ганта бере цю дату.',
      ganttEndDateFieldHelp: 'Правий край кожної смуги Ганта бере цю дату.',
      timelineDateFieldHelp: 'Записи розміщуються на часовій шкалі за цією датою.',
      titleField: 'Поле заголовка',
      latitudeField: 'Поле широти',
      latitudeFieldHelp: 'Поле, що дає координату широти (лише geo-поля).',
      longitudeField: 'Поле довготи',
      longitudeFieldHelp: 'Поле, що дає координату довготи (лише geo-поля).',
      imageField: 'Поле зображення',
      imageFieldHelp: 'Обкладинка галереї береться з цього поля зображення або вкладень.',
      selectField: 'Виберіть поле…',
      selectOption: 'Вибрати…',
      noEligibleFieldForType: "Немає придатного поля цього типу. Спершу додайте його до об'єкта.",
      viewTypeUnavailable: 'У цього об\'єкта немає поля, яке могло б слугувати «{{field}}».',
      chartType: 'Тип діаграми',
      chartTypeHelp: 'Визначає, як малюються дані.',
      chartTypeBar: 'Стовпчикова діаграма',
      chartTypeLine: 'Лінійна діаграма',
      chartTypePie: 'Кругова діаграма',
      chartTypeArea: 'Графік області',
      chartTypeScatter: 'Точкова діаграма',
      dataset: 'Набір даних',
      datasetHelp: 'Діаграма бере числа з цього набору даних об\'єкта.',
      chartMeasure: 'Мірка',
      chartMeasureHelp: 'Мірка набору даних, за якою креслиться вісь значень.',
      chartDimension: 'Вимір',
      chartDimensionHelp: 'Вимір набору даних, за яким групуються значення (необов\'язково).',
      viewTypeUnavailableDataset: 'Цей об\'єкт не віддає набору даних для діаграми.',
      noDatasetMeasure: 'Цей набір даних не оголошує мірки для діаграми.',
      endDateField: 'Поле дати кінця',
      ufAddField: '+ Додати поле фільтра…',
      ufShowAllRecords: 'Показувати вкладку «Усі записи»',
    },
    // The runtime draft bar's Publish / Discard refusals (RuntimeDraftBar,
    // objectui#11583). The toast's description is the refusal itself.
    runtimeDraft: {
      publishFailed: 'Помилка публікації',
      discardFailed: 'Помилка відкидання',
    },
    localeSwitcher: {
      label: 'Мова',
    },
    system: {
      aiApprovals: {
        title: 'Затвердження ШІ',
        subtitle: 'Перегляньте дії, які запропонував ШІ-агент. Затвердіть, щоб виконати їх на сервері; відхиліть, щоб передати причину назад моделі — і вона переробить наступний хід.',
        queueTitle: 'Черга',
        queueDescription: 'Опитується кожні 5 секунд. Рішення записуються під вашою ідентичністю.',
      },
      // objectui#13460 — System → Audit Log (`AuditLogPage`).
      auditLog: {
        title: 'Журнал аудиту',
        subtitle: 'Системна активність і зміни записів — лише читання, від нових до старих.',
        openAsList: 'Відкрити як список',
        openEntryPage: 'Відкрити сторінку події',
        openEntryPageHint: 'Сторінка однієї події перелічує всі зміни того самого запису, від нових до старих.',
        openPresetAsList: 'Відкрити {{label}} як список',
        presets: 'Пресети',
        presetOtherSource: 'Це подання читає інше джерело даних.',
        presetFilterUnsupported: "Фільтр цього подання не можна застосувати тут: {{message}}",
        action: 'Дія',
        allActions: 'Усі дії',
        object: 'Об\'єкт',
        anyObject: 'Будь-який об\'єкт',
        searchObjects: "Шукати об'єкти…",
        loadingObjects: "Завантаження об'єктів…",
        noObjects: "Об'єктів не знайдено.",
        actor: 'Виконавець',
        anyUser: 'Будь-який користувач',
        from: 'З',
        to: 'По',
        clearFilters: 'Очистити фільтри ({{n}})',
        loadFailed: 'Не вдалося завантажити журнал аудиту',
        emptyTitle: 'Немає записів аудиту',
        emptyFiltered: 'Спробуйте очистити фільтри або розширити діапазон дат.',
        emptyUnfiltered: 'Події з\'являться тут, як тільки відстежувані об\'єкти змінюватимуться.',
        timestamp: 'Часова мітка',
        page: 'Сторінка {{page}}',
        pageEnd: 'Сторінка {{page}} · кінець',
        eventFallback: 'Подія аудиту',
        ipAddress: 'IP-адреса',
        tenant: 'Орендар',
        targetRecord: 'Запис-ціль',
        userAgent: 'User Agent',
        changePayload: 'Дані змін',
        before: 'Було',
        after: 'Стало',
        metadata: 'Метадані',
        system: 'Система',
      },
    },
  },
  auth: {
    login: {
      title: 'Увійдіть у свій обліковий запис',
      description: 'Уведіть електронну пошту і пароль, щоб продовжити',
      emailLabel: 'Електронна пошта',
      emailPlaceholder: 'name@example.com',
      passwordLabel: 'Пароль',
      passwordPlaceholder: 'Уведіть свій пароль',
      forgotPasswordText: 'Забули пароль?',
      submitButton: 'Увійти',
      submittingButton: 'Вхід…',
      noAccountText: 'Немає облікового запису?',
      signUpText: 'Зареєструватися',
      signingIn: 'Виконуємо вхід…',
      directSignIn: {
        description: "Увійдіть через єдиний вхід вашої організації.",
        retry: "Продовжити з єдиним входом",
      },
      ssoHandoff: 'Продовжити до {{target}}',
      // Phone/OTP sign-in labels. `LoginForm` interpolates `{seconds}` with a
      // literal `.replace('{seconds}', …)` of its own (in `LoginForm`),
      // so those SINGLE braces must survive translation — i18next never sees
      // them.
      emailOrPhoneLabel: 'Електронна пошта або номер телефону',
      emailOrPhonePlaceholder: 'name@example.com або +1 555 000 0000',
      phoneLabel: 'Номер телефону',
      phonePlaceholder: '+1 555 000 0000',
      otpCodeLabel: 'Код підтвердження',
      otpCodePlaceholder: '6-значний код',
      sendOtpButton: 'Отримати код',
      resendOtpCountdownText: 'Надіслати ще раз за {seconds} с',
      usePhoneOtpText: 'Увійти з кодом підтвердження',
      usePasswordSignInText: 'Увійти з паролем',
      // The social provider buttons and the divider under them
      // (`SocialSignInButtons`, fed through `LoginForm`'s labels).
      // `{provider}` is the component's own single-brace hole, filled by a
      // literal `.replace()` with the provider's name as the server reports
      // it — the same convention as `{seconds}` above (objectui#10900).
      socialButton: 'Продовжити через {provider}',
      orText: 'або продовжити з електронною поштою',
      // SSO sign-in (objectui#12762): the SSO button, and under SSO-only
      // ("enforced") mode the line that says how to sign in, the break-glass
      // link to the password form and the link back. Each English value is
      // `LoginForm`'s own default for that label, so an English session reads
      // the same with or without the pack.
      ssoButton: 'Увійти через SSO',
      // Shown before any request when "Sign in with SSO" is pressed with no
      // email: single sign-on routes by the email's domain (objectstack#32087).
      ssoEmailRequiredText: "Уведіть робочу електронну пошту, щоб увійти через SSO.",
      ssoOnlyDescription: "Увійдіть через єдиний вхід вашої організації",
      noSignInMethodText: 'Способу входу немає. Зверніться до адміністратора.',
      usePasswordText: 'Використати пароль',
      backToSsoText: 'Назад до єдиного входу',
      // objectstack#29105 — the second step of a password sign-in for an account
      // with two-factor sign-in on: the code from the authenticator app, or a
      // backup code. Each English value is `LoginForm`'s own default.
      twoFactorTitle: 'Двофакторна перевірка',
      twoFactorDescription: 'Уведіть 6-значний код з вашого застосунку-автентифікатора.',
      twoFactorBackupDescription: 'Уведіть один із резервних кодів, збережених під час налаштування двофакторної перевірки.',
      twoFactorCodeLabel: 'Код автентифікації',
      twoFactorBackupCodeLabel: 'Резервний код',
      twoFactorVerifyButton: 'Перевірити',
      twoFactorVerifyingButton: 'Перевірка…',
      twoFactorUseBackupCodeText: 'Використати резервний код',
      twoFactorUseAuthenticatorText: 'Використати застосунок-автентифікатор',
      twoFactorBackText: 'Назад до входу',
      // objectui#12600 — the console login card's own header, the password
      // field's reveal toggle, and the footer's legal links.
      welcomeTitle: 'З поверненням',
      welcomeDescription: 'Увійдіть, щоб продовжити роботу',
      // The same card's header when the visitor arrived signed out from an
      // invitation link (`?redirect=/accept-invitation/ID`), and the
      // register-first action above the form (#25886). The generic copy names
      // no organization or inviter; the `invitationPreview*` lines below do,
      // once the signed-out invitation preview answers for the link's id
      // (#26473). `{{email}}` is the MASKED address the preview returns.
      invitationTitle: 'Прийміть своє запрошення',
      invitationDescription: 'Використайте адресу електронної пошти, на яку надіслано запрошення.',
      invitationSignUpButton: 'Створити обліковий запис і приєднатися',
      invitationSignInDivider: 'або увійдіть у наявний обліковий запис',
      invitationPreviewTitle: '{{inviter}} запрошує вас до {{organization}}',
      invitationPreviewTitleNoInviter: 'Вас запрошено до {{organization}}',
      invitationPreviewDescription: 'Використайте адресу електронної пошти, на яку надіслано запрошення ({{email}}).',
      // #27509 — the card for an invitation link the server no longer knows:
      // the server's one not-found answer cannot say why, so neither does this.
      invitationGoneTitle: 'Це посилання на запрошення більше не чинне',
      invitationGoneDescription: 'Воно могло минути, бути використаним або відкликаним. Попросіть того, хто вас запросив, надіслати нове запрошення.',
      invitationGoneSignIn: 'До входу',
      invitationLinkHint: 'Є запрошення? Відкрийте посилання з листа-запрошення, щоб його прийняти.',
      // #32021 — the card on a deployment with no account yet (the server
      // answered `hasOwner: false`): set up, not signed in to.
      firstOwner: {
        title: 'Налаштуйте це розгортання',
        description: 'Тут ще ніхто не має облікового запису. Перший створений вами обліковий запис стає власником цього розгортання.',
        createButton: 'Створити обліковий запис власника',
        signInDivider: 'або увійдіть у наявний обліковий запис',
      },
      showPasswordText: 'Показати пароль',
      hidePasswordText: 'Сховати пароль',
      footer: {
        privacy: 'Приватність',
        terms: 'Умови',
      },
      devAdminHint: {
        title: 'Локальний екземпляр розробки',
        signIn: 'Увійти як dev-адміністратор',
      },
      errors: {
        invalidCredentials: 'Неправильна електронна пошта або пароль. Після кількох невдалих спроб вхід призупиняється на деякий час. Забули пароль? Скиньте його й одразу увійдіть.',
        // The same refusal where no mail leaves the deployment (`features.emailDelivery: false`).
        invalidCredentialsNoMail: 'Неправильна електронна пошта або пароль. Після кількох невдалих спроб вхід призупиняється на деякий час. Забули пароль? Попросіть адміністратора скинути його.',
        emailNotVerified: 'Підтвердьте свою адресу електронної пошти перед входом.',
        // objectstack#32432 — `BANNED_USER` with `details.cause: 'scim_deactivated'`:
        // the identity provider deactivated the account. An administrator's ban keeps the server's wording.
        accountDeactivated: "Ваш обліковий запис дезактивовано вашою організацією. Зверніться до свого адміністратора.",
        oauthCallbackFailed: 'Єдиний вхід не вдалося завершити — строк дії посилання на вхід минув або воно вже використане. Спробуйте ще раз.',
        // objectstack#32087 — a refused single sign-on, by the code it lands
        // with (`ssoCallbackRefusal.ts` in the console). `oauthCallbackFailed`
        // above stays for a code with no sentence of its own.
        ssoAccountNotInvited: "Ваш обліковий запис ще не налаштований для цієї системи. Попросіть адміністратора запросити вас.",
        ssoAccountNotLinked: "Обліковий запис з вашою електронною поштою тут вже існує, але не поєднаний з єдиним входом. Увійдіть іншим способом або попросіть адміністратора їх поєднати.",
        ssoResponseRejected: "Служба входу вашої організації надіслала відповідь, яку ця система не може прийняти. Попросіть адміністратора перевірити налаштування єдиного входу.",
        // A refused account creation on the sign-in return: the email is not at a domain
        // this system accepts (`EMAIL_DOMAIN_NOT_ALLOWED`, from the SSO proven-domain rule
        // or the `email_domain` audience posture), or is not an address (`INVALID_EMAIL`).
        ssoEmailDomainNotAllowed: "Обліковий запис не створено: ваша адреса електронної пошти не на домені, з якого ця система приймає нові облікові записи. Використайте пошту вашої організації або попросіть адміністратора.",
        ssoEmailNotAnAddress: "Обліковий запис не створено: служба входу вашої організації не надіслала придатної адреси електронної пошти для вас. Попросіть адміністратора перевірити налаштування єдиного входу.",
        ssoStartFromLoginPage: "Вхід має починатися зі сторінки входу цієї системи. Уведіть тут свою робочу пошту і виберіть «Увійти через SSO».",
        ssoTechnicalDetails: "Технічні подробиці",
        directSignInIncomplete: "Вхід не завершився: ви повернулися з єдиного входу, не увійшовши. Перевірте, що цей браузер дозволяє cookie для цього сайту, і спробуйте знову.",
        directSignInUnavailable: "Для цієї системи не вдалося розпочати єдиний вхід. Попросіть адміністратора перевірити, якою службою входу вона користується.",
        directSignInRateLimited: "З цієї мережі щойно розпочато задто багато входів. Зачекайте кілька секунд і спробуйте знову.",
        // objectstack#32992 — `access_denied`: the identity provider refused the
        // signed-in account for this environment, with its two ways on.
        ssoAccessDenied: "Обліковий запис, під яким ви увійшли, не має доступу до цього середовища. Увійдіть з обліковим записом, що має доступ, або попросіть адміністратора організації цього середовища додати вас як учасника.",
        ssoSwitchAccount: "Змінити обліковий запис",
        ssoBackToConsole: "Назад до консолі",
        ssoSwitchAccountHint: "Зміна облікового запису відкриває вашу службу входу в новій вкладці і здійснює там вихід. Потім знову увійдіть тут з обліковим записом, що має доступ.",
        // A signed-in person's link refused by the callback (`email_does_not_match`), shown where they land.
        linkEmailMismatch: "Обліковий запис не поєднано: його адреса електронної пошти не збігається з поштою облікового запису, під яким ви увійшли. Поєднайте обліковий запис, що користується тією самою адресою електронної пошти.",
        // objectstack#33498 — the vendor's other two link refusals, shown the same way.
        linkAlreadyLinkedToOtherUser: "Обліковий запис не поєднано: він уже поєднаний з іншим користувачем цієї системи. Поєднайте інший обліковий запис, або увійдіть як користувач, з яким він поєднаний, і роз'єднайте їх там спершу.",
        linkUnableToLink: "Обліковий запис не вдалося поєднати. Перевірте, що його адресу електронної пошти підтверджено в тій службі входу, і спробуйте знову. Якщо досі не виходить, попросіть адміністратора.",
        // objectstack#29105 — refusals of the two-factor sign-in step, by the
        // server's code (`signInRefusalMessages`).
        twoFactorInvalidCode: 'Цей код не чинний. Перевірте свій застосунок-автентифікатор і спробуйте знову.',
        twoFactorInvalidBackupCode: 'Цей резервний код не чинний або вже використаний.',
        twoFactorTooManyAttempts: 'Задто багато неправильних кодів. Увійдіть знову з паролем.',
        twoFactorExpired: 'Строк цього входу минув. Увійдіть знову з паролем.',
        twoFactorLocked: 'Задто багато невдалих спроб. Ваш обліковий запис тимчасово заблоковано. Спробуйте пізніше.',
      },
    },
    register: {
      title: 'Створіть обліковий запис',
      description: 'Створіть свій обліковий запис, щоб почати збирання.',
      invitationTitle: 'Створіть обліковий запис, щоб приєднатися',
      invitationDescription: 'Зареєструйтеся з адреси електронної пошти, на яку надіслано запрошення. Прийняти запрошення можна лише з тієї адреси.',
      invitationPreviewDescription: 'Зареєструйтеся з адреси електронної пошти, на яку надіслано запрошення ({{email}}). Прийняти запрошення можна лише з тієї адреси.',
      nameLabel: "Ім'я",
      namePlaceholder: 'Іван Петренко',
      emailLabel: 'Електронна пошта',
      emailPlaceholder: 'name@example.com',
      passwordLabel: 'Пароль',
      passwordPlaceholder: 'Створіть пароль (щонайменше 8 символів)',
      confirmPasswordLabel: 'Підтвердьте пароль',
      confirmPasswordPlaceholder: 'Підтвердьте свій пароль',
      passwordMismatchError: 'Паролі не збігаються',
      passwordTooShortError: 'Пароль має містити щонайменше 8 символів',
      // #32021 — each field's own line under it; the form is `noValidate`.
      nameRequiredError: "Уведіть своє ім'я",
      emailRequiredError: 'Уведіть адресу електронної пошти',
      emailInvalidError: 'Уведіть адресу електронної пошти на кшталт name@example.com',
      firstOwner: {
        title: 'Створіть обліковий запис власника',
        description: 'Тут ще ніхто не має облікового запису. Обліковий запис, який ви створите зараз, стає власником цього розгортання; колег можна запросити потім.',
      },
      submitButton: 'Створити обліковий запис',
      submittingButton: 'Створення облікового запису…',
      hasAccountText: 'Уже маєте обліковий запис?',
      signInText: 'Увійти',
      // Same pair as `auth.login.socialButton` / `orText`, for sign-up.
      socialButton: 'Зареєструватися через {provider}',
      orText: 'або продовжити з електронною поштою',
      captchaRetry: 'Спробувати знову',
      errors: {
        userExists: 'Обліковий запис з такою електронною поштою вже існує. Спробуйте просто увійти.',
        selfRegistrationClosed: 'Самостійна реєстрація в цій системі не відкрита. Попросіть адміністратора про запрошення.',
        captchaFailed: 'Перевірка безпеки не завершилася. Спробуйте ще раз.',
        emailDomainNotAllowed: "Домен цієї електронної пошти не дозволений для реєстрації тут. Використайте пошту вашої організації або попросіть адміністратора про запрошення.",
        // #27509 — `selfRegistrationClosed` for a visitor holding an invitation
        // link; `{{email}}` is the MASKED address the preview returns.
        invitationSentTo: 'Це запрошення надіслано на {{email}}. Зареєструйтеся з тієї адреси, щоб його прийняти.',
        invitationAddressOnly: 'Це запрошення можна прийняти лише з адреси, на яку воно надіслане. Зареєструйтеся з тієї адреси.',
      },
      verifyInbox: {
        title: 'Перевірте свої вхідні',
        description: "Ми надіслали посилання на підтвердження на {{email}}. Перейдіть за посиланням, щоб активувати свій обліковий запис.",
        resend: 'Надіслати лист підтвердження знову',
        resending: 'Надсилання…',
        resent: 'Лист підтвердження надіслано.',
        backToSignIn: 'Назад до входу',
      },
    },
    forgotPassword: {
      title: 'Скиньте свій пароль',
      description: "Уведіть свою адресу електронної пошти, і ми надішлемо вам посилання для скидання пароля",
      emailLabel: 'Електронна пошта',
      emailPlaceholder: 'name@example.com',
      submitButton: 'Надіслати посилання скидання',
      submittingButton: 'Надсилання…',
      successTitle: 'Перевірте свою пошту',
      successDescription: "Ми надіслали посилання для скидання пароля на {email}. Перевірте свої вхідні.",
      backToSignInText: 'Назад до входу',
      rememberPasswordText: "Пам'ятаєте свій пароль?",
      signInText: 'Увійти',
      // The SMS branch of the same form: request an OTP, then set the new
      // password inline instead of following an emailed link. `{seconds}` is
      // ForgotPasswordForm's own hole (packages/auth/src/ForgotPasswordForm.tsx:367).
      phoneLabel: 'Номер телефону',
      phonePlaceholder: '+1 555 000 0000',
      otpCodeLabel: 'Код підтвердження',
      otpCodePlaceholder: '6-значний код',
      sendOtpButton: 'Отримати код',
      resendOtpCountdownText: 'Надіслати ще раз за {seconds} с',
      newPasswordLabel: 'Новий пароль',
      newPasswordPlaceholder: 'Уведіть новий пароль',
      resetButton: 'Скинути пароль',
      usePhoneResetText: 'Скинути через SMS-код',
      useEmailResetText: 'Натомість скинути через електронну пошту',
      phoneSuccessTitle: 'Пароль скинуто',
      phoneSuccessDescription: 'Ваш пароль скинуто. Тепер можете увійти з новим паролем.',
      noDeliveryTitle: "Сюди не можна надіслати посилання скидання",
      noDeliveryDescription: "Це розгортання не надсилає електронну пошту, тому посилання скидання пароля не дійде. Попросіть адміністратора: він може задати вам новий пароль у Налаштуваннях → Користувачі.",
    },
    resetPassword: {
      title: 'Задайте новий пароль',
      description: 'Виберіть пароль, якого ви ще не використовували.',
      newPassword: 'Новий пароль',
      confirmPassword: 'Підтвердьте пароль',
      submit: 'Оновити пароль',
      submitting: 'Оновлення…',
      success: 'Пароль оновлено',
      failed: 'Помилка скидання',
      invalidToken: 'Це посилання скидання не чинне або строк його дії минув.',
      missingToken: 'Посилання скидання відсутнє або строк його дії минув',
      passwordsMismatch: 'Паролі не збігаються',
      requestNewLink: 'Запросіть нове посилання',
    },
    verifyEmail: {
      title: 'Підтвердьте свою адресу електронної пошти',
      description:
        'Ми надіслали посилання на підтвердження на вашу адресу електронної пошти. Перейдіть за ним, щоб підтвердити свій обліковий запис.',
      sentTo: 'Надіслано на:',
      verifyingTitle: 'Підтвердження…',
      verifyingDescription: 'Митьку — підтверджуємо вашу пошту.',
      successTitle: 'Пошту підтверджено',
      successDescription: 'Вашу електронну пошту підтверджено. Тепер можете увійти.',
      handoffSuccessDescription: 'Вашу електронну пошту підтверджено. Поверніться до застосунку, в який ви входили, і увійдіть там.',
      errorTitle: 'Помилка підтвердження',
      errorDescription: 'Підтвердження не вдалося. Запросіть нове посилання.',
      missingToken: 'У посиланні на підтвердження відсутній токен.',
      emailMissing: 'Адреса електронної пошти відсутня',
      resendButton: 'Надіслати лист підтвердження знову',
      resending: 'Надсилання…',
      resent: 'Лист надіслано! Перевірте вхідні',
      resentSuccess: 'Лист підтвердження надіслано!',
      resentDescription: 'Перевірте свої вхідні та перейдіть за посиланням на підтвердження.',
      resendFailed: 'Не вдається надіслати лист підтвердження',
      resendUnavailable:
        'Доставка електронної пошти для цієї системи може бути не налаштована. Якщо це повторюється, зверніться до підтримки.',
      signInLink: 'До входу',
      backToSignIn: 'Назад до входу',
      backToLogin: 'Назад до сторінки входу',
      checkSpam: "Листа немає? Перевірте папку для небажаної пошти або зверніться до підтримки.",
      or: 'Або',
    },
    setup: {
      welcomeTitle: 'Вітаємо в ObjectStack',
      description: 'Створіть перший обліковий запис власника, щоб завершити налаштування цього розгортання.',
      yourName: "Ваше ім'я",
      orgName: 'Назва організації',
      orgNamePlaceholder: 'Acme Inc.',
      emailLabel: 'Електронна пошта',
      emailPlaceholder: 'name@example.com',
      passwordLabel: 'Пароль',
      passwordHint: 'Щонайменше 8 символів',
      submit: 'Створити обліковий запис власника',
      submitting: 'Налаштування…',
      failed: 'Помилка налаштування',
    },
    device: {
      title: 'Уповноважте новий пристрій',
      subtitle: 'Уповноважте цей пристрій увійти як {{email}}.',
      userCodeLabel: 'Код пристрою',
      requesterLabel: 'Запит на підключення від',
      approveWarning: "Схвалюйте, лише якщо ви самі щойно розпочали це підключення. Після схвалення цей рантайм зможе доступатися приватних пакетів вашої організації.",
      loggedInAs: 'Ви увійшли як {{email}}',
      approve: 'Схвалити пристрій',
      approving: 'Схвалення…',
      approvedTitle: 'Пристрій уповноважено',
      approvedDescription: 'Можете повернутися до пристрою — він скоро увійде.',
      approveSuccess: 'Пристрій уповноважено',
      approveSuccessDescription: 'Можете закрити це вікно.',
      approveFailed: 'Помилка схвалення',
      deny: 'Відмовити в запиті',
      denying: 'Відмова…',
      deniedTitle: 'Доступ заборонено',
      deniedDescription: 'Пристрій не отримає доступу.',
      denyFailed: 'Не вдалося відмовити в запиті',
      invalidTitle: 'Не чинне посилання на пристрій',
      invalidDescription: 'В URL не передано код пристрою.',
      // Shown when the deployment has the device-authorization plugin off, so
      // the endpoints 404 (framework#2874 / objectui#2513).
      disabledTitle: 'Уповноваження пристроїв не увімкнено',
      disabledDescription:
        'У цьому розгортанні не увімкнено уповноваження пристроїв, тому цей пристрій тут схвалити не можна.',
      loading: 'Завантаження…',
      cancel: 'Скасувати',
    },
    shell: {
      tenantHostHint: 'Ви входите саме в цю систему',
      poweredBy: 'Працює на ObjectStack',
    },
    // These were previously supplied only as inline `defaultValue:` args at the
    // SetPasswordPage call sites, so `zh` was the only pack that could carry a
    // translation. Owning them here makes the page translatable everywhere.
    setPassword: {
      title: 'Задайте пароль відновлення',
      description:
        'Ви увійшли через єдиний вхід. Задайте локальний пароль, щоб могли увійти напряму, якщо SSO коли-небудь стане недоступним.',
      email: 'Електронна пошта',
      newPassword: 'Новий пароль',
      confirmPassword: 'Підтвердьте пароль',
      submit: 'Задати пароль',
      submitting: 'Збереження…',
      success: 'Локальний пароль задано',
      failed: 'Не вдалося задати пароль',
      passwordsMismatch: 'Паролі не збігаються',
      noSession: 'Строк вашого сеансу минув.',
      backToSignIn: 'Увійдіть знову',
    },
    layout: {
      headline: 'Створюйте потужні бізнес-застосунки — швидше.',
      subhead: 'Універсальна платформа для керування корпоративними даними, потоків робіт та аналітики.',
    },
    // ADR-0069 full-screen remediation gate. A user hitting this cannot reach
    // the rest of the app until they finish, so it must read in their language.
    remediation: {
      signOut: 'Натомість вийти',
      password: {
        title: 'Строк дії вашого пароля минув',
        resetTitle: 'Ви мусите змінити пароль',
        fallbackMessage: 'Задайте новий пароль, щоб продовжити.',
        resetBody: 'Адміністратор задав вам тимчасовий пароль. Виберіть власний новий пароль, щоб продовжити.',
        current: 'Поточний пароль',
        temporary: 'Тимчасовий пароль',
        next: 'Новий пароль',
        confirm: 'Підтвердьте новий пароль',
        submit: 'Змінити пароль і продовжити',
        submitting: 'Оновлення…',
        mismatch: 'Нові паролі не збігаються.',
        sameAsTemporary: 'Виберіть новий пароль, інший за ваш тимчасовий пароль.',
        wrongPassword: 'Уведений пароль неправильний. Перевірте його і спробуйте знову.',
        failed: 'Не вдалося змінити пароль.',
      },
      mfa: {
        title: 'Налаштуйте двофакторну перевірку',
        fallbackMessage: 'Ваша організація вимагає застосунок-автентифікатор, щоб продовжити.',
        confirmPassword: 'Підтвердьте свій пароль',
        continue: 'Продовжити',
        preparing: 'Підготовка…',
        enrollFailed: 'Не вдалося розпочати реєстрацію.',
        unavailable: 'Двофакторну перевірку в цьому розгортанні вимкнено, тому застосунок-автентифікатор поки не налаштувати. Попросіть адміністратора увімкнути її в Налаштуваннях → Автентифікація, а потім спробуйте знову.',
        scanTitle: 'Відскануйте своїм автентифікатором',
        scanBody: 'Відскануйте цей QR-код за допомогою Google Authenticator, 1Password, Authy тощо, потім уведіть 6-значний код.',
        backupTitle: 'Збережіть резервні коди',
        backupBody: 'Зберігайте їх у безпечному місці — кожен можна використати один раз, якщо ви втратите пристрій.',
        codeLabel: '6-значний код',
        verify: 'Перевірити і продовжити',
        verifying: 'Перевірка…',
        invalidCode: 'Неправильний код. Спробуйте знову.',
      },
      // objectui#13208 — the overlay on an IMPERSONATION session: the held
      // credential is the impersonated user's, so it offers the way out instead
      // of their forms. `{{user}}` is the impersonated user's display name.
      impersonation: {
        passwordTitle: '{{user}} має змінити свій пароль',
        mfaTitle: '{{user}} має налаштувати двофакторну перевірку',
        body: 'Ви працюєте від імені {{user}}, і лише ця людина може це зробити собі. Припиніть роботу від чужого імені, щоб повернутися до свого облікового запису.',
      },
    },
  },
  // The OAuth authorization-code consent screen (`/oauth/consent`). A third
  // party asks for scopes and the signed-in user grants or denies them, so
  // every string here is a security decision the user must read in their own
  // language — objectui#3546 slice three.
  oauth: {
    consent: {
      // `{{appName}}` is the client's registered name, or `unknownApp` while the
      // lookup is in flight or when it gives no name. `{{suffix}}` is the
      // parenthesised account hint the page passes (empty when no user is
      // loaded), so it must stay attached to the sentence's last word.
      title: '{{appName}} хоче доступатися вашого облікового запису',
      request: '{{appName}} запитує дозвіл{{suffix}}.',
      unknownApp: 'застосунок',
      // Shown when the lookup gives no registered name, above the raw
      // `client_id` labelled `clientId` — the id is never shown as the name.
      unidentified: 'Цей застосунок не вдалося ідентифікувати.',
      clientId: 'ID клієнта',
      // The server's account of the signed request (`oauth-consent/request`):
      // `sentTo` labels where a consent sends the grant (`{{destination}}` is
      // the redirect's host, or a native app's redirect as it is);
      // `unverified` marks a client no platform administrator registered;
      // `destinationUnconfirmed` is shown, with Authorize disabled, when the
      // server could not answer.
      unverified: 'Неперевірений застосунок',
      unverifiedHint: 'Тут жоден адміністратор не реєстрував цей застосунок, тому його назву не перевірено. Надавайте дозвіл, лише якщо ви довіряєте {{destination}}.',
      destinationUnconfirmed: 'Не вдалося підтвердити, куди буде надіслано цей доступ, тому тут його не можна надати.',
      sentTo: 'Доступ буде надіслано до:',
      willAllow: 'Цей застосунок зможе:',
      // One sentence per scope the page names. The MCP agent scopes take their
      // English from `@objectstack/spec`'s `MCP_OAUTH_SCOPE_CONSENT_COPY` (the
      // page passes it as the default) and must read the same here. Any other
      // scope renders as `unrecognised`, never as its raw spelling.
      scope: {
        openid: 'Підтверджувати вашу ідентичність',
        profile: "Читати ваш базовий профіль (ім'я, зображення)",
        email: 'Читати вашу адресу електронної пошти',
        offlineAccess: 'Залишатися в системі (оновлювати доступ)',
        dataRead: 'Читати записи, у межах ваших власних дозволів',
        dataWrite: 'Створювати, змінювати і видаляти записи, у межах ваших власних дозволів',
        actionsExecute: 'Виконувати дії від вашого імені, у межах ваших власних дозволів',
        metadataWrite: "Збирайте і змінюйте метадані цього застосунку як чернетки, у межах ваших власних дозволів — публікує їх людина",
        unrecognised: 'Нерозпізнаний дозвіл: {{scope}}',
      },
      deny: 'Відмовити',
      authorize: 'Надати дозвіл',
      submitting: 'Надання дозволу…',
      granted: 'Доступ надано',
      denied: 'Доступ відмовлено',
      noRedirect: 'Сервер не повернув URL переадресації.',
      failed: 'Помилка згоди',
      footer: 'Доступ можна відкликати будь-коли з налаштувань вашого облікового запису.',
    },
  },
  profile: {
    title: 'Профіль',
    subtitle: 'Керуйте налаштуваннями свого облікового запису',
    saving: 'Збереження…',
    avatar: {
      upload: 'Завантажити',
      replace: 'Замінити',
      remove: 'Видалити',
    },
    info: {
      title: 'Особисті відомості',
      description: "Оновіть своє ім'я і перегляньте подробиці облікового запису",
      saved: 'Профіль успішно оновлено.',
      name: "Ім'я",
      email: 'Електронна пошта',
      emailImmutable: 'Електронну пошту не можна змінити.',
      role: 'Роль',
      save: 'Зберегти зміни',
    },
    language: {
      title: 'Мова',
      description: 'Мова сповіщень і повідомлень, надісланих вам. Мову інтерфейсу вибирають окремо, у меню глобуса.',
      label: 'Бажана мова',
      systemDefault: 'Використовувати типову для розгортання',
      save: 'Зберегти',
      saved: 'Мовне налаштування оновлено.',
      readOnly: 'Мовою вашого облікового запису керує адміністратор.',
    },
    appLock: {
      title: 'Блокування застосунку',
      off: 'Вимкнено',
      onImmediately: 'Увімкнено — блокує щойно ви відходите із застосунку',
      onAfter: 'Увімкнено — блокує за {{duration}} після того, як ви відходите із застосунку',
    },
    password: {
      changeTitle: 'Зміна пароля',
      setTitle: 'Задання локального пароля',
      changeDescription: 'Оновіть пароль, яким ви входите.',
      setDescription:
        'Ви увійшли через єдиний вхід. Задайте локальний пароль, щоб могли входити також з електронною поштою і паролем.',
      current: 'Поточний пароль',
      new: 'Новий пароль',
      password: 'Пароль',
      confirm: 'Підтвердьте пароль',
      tooShort: 'Пароль має містити щонайменше 8 символів',
      mismatch: 'Паролі не збігаються',
      enterCurrent: 'Уведіть поточний пароль',
      changed: 'Пароль змінено.',
      localSet: 'Локальний пароль задано. Тепер можете входити з електронною поштою і паролем.',
      changeAction: 'Змінити пароль',
      setAction: 'Задати пароль',
    },
  },
  errors: {
    unauthorized: 'Ви не уповноважені виконувати цю дію.',
    forbidden: 'Доступ заборонено.',
    unknown: 'Сталася неочікувана помилка.',
  },
  // A refused write's message (objectui#13332): its first sentence is shown,
  // and the whole server text sits behind the More / Less toggle with a copy
  // button. Read by app-shell's `RefusalMessage`.
  refusalDetails: {
    more: 'Більше',
    less: 'Менше',
    copy: 'Копіювати подробиці',
    copied: 'Скопійовано',
  },
  workspace: {
    label: 'Організації',
    default: 'Моя організація',
    switch: 'Змінити організацію',
    createTitle: 'Створіть організацію',
    createDescription: 'Організація — спільний простір, де працює ваша команда.',
    createButton: 'Створити організацію',
    nameLabel: 'Назва організації',
    namePlaceholder: 'напр. Acme Inc',
    slugLabel: 'Слаг URL',
    slugHint: 'Використовується в URL. Лише малі латинські літери, цифри та дефізи.',
    settings: 'Налаштування організації',
    multiOrgDisabled: 'Створення нових організацій на цьому екземплярі вимкнено.',
    createFailed: 'Не вдалося створити організацію',
  },
  help: {
    onThisPage: 'На цій сторінці',
    appDocs: 'Документація цього застосунку',
    allDocs: 'Уся документація',
    keyboardShortcuts: 'Гарячі клавіші',
    onlineDocs: 'Онлайн-документація',
    loadingDocumentation: 'Завантаження документації',
    documentation: 'Документація',
    uncategorized: 'Без категорії',
    about: 'Про',
    aboutTitle: 'Про цю консоль',
    aboutDescription: 'Збірка, з якої скомпільовано цю консоль.',
    aboutBuild: 'Збірка консолі',
    aboutBuildUnknown: 'Невідома збірка (версію не задано під час компіляції цієї консолі)',
  },
  sidebar: {
    helpTooltip: 'Довідка і документація',
    activityFeed: 'Стрічка подій',
    notifications: 'Сповіщення',
    approvals: 'Затвердження',
    inbox: 'Вхідні',
    inboxAriaLabel: 'Відкрити вхідні',
    area: 'Область',
    packageManagement: 'Керування пакетами',
    searchNavigation: 'Шукати у навігації…',
    recent: 'Нещодавні',
    starred: 'Обране',
    removeFromFavorites: 'Видалити {{name}} з обраного',
    allReports: 'Усі звіти',
    keepOpen: 'Тримати бічну панель відкритою',
  },
  topbar: {
    aiAssistant: 'ШІ-асистент',
    designInStudio: 'Дизайн у Studio',
    editApp: 'Змінити застосунок',
    openAppInStudio: 'Відкрити застосунок у Studio',
    openAssistant: 'Відкрити асистента {{name}}',
    offline: 'Офлайн',
    usersOnline: 'Користувачі онлайн зараз',
    switchView: 'Змінити подання',
    connection: {
      connecting: 'Підключення…',
      reconnecting: 'Перепідключення…',
      disconnected: 'Відключено',
      error: 'Помилка підключення',
    },
    // Platform lifecycle chip shown next to the product wordmark (PreviewBadge).
    stage: {
      preview: 'Ознайомча версія',
      beta: 'Бета',
      tooltip: 'Ця платформа в ознайомчій версії — можливості можуть змінюватися.',
    },
  },
  home: {
    nav: 'Головна',
    yourApps: 'Ваші застосунки',
    showMoreApps: 'Більше',
    showLess: 'Менше',
    continueEmpty: 'Те, що ви відкриваєте, з\'являється тут.',
    // objectui#12602 — Home's "My work" section: its heading, the link to the
    // full inbox, each column's title, "view all" link and empty line.
    myWork: {
      title: 'Моя робота',
      openInbox: 'Відкрити вхідні',
      viewAll: 'Переглянути все',
      approvals: 'Чекають затвердження',
      approvalsEmpty: 'Нічого не чекає на ваше затвердження',
      notifications: 'Сповіщення',
      notificationsEmpty: 'Немає непрочитаних сповіщень',
    },
    greetingMorning: 'Доброго ранку',
    greetingAfternoon: 'Доброго дня',
    greetingEvening: 'Доброго вечора',
    greetingNight: 'Працюєте допізна',
    // objectui#11689 — the greeting's two joiners: the separator between the
    // greeting and the person's name (rendered only when there is a name), and
    // the closing mark. Punctuation is a locale property: zh-CN and ja write
    // full-width marks, ar its own comma.
    greetingSeparator: ', ',
    greetingEnd: '.',
    // objectui#12601 — the field in Home's top bar that opens the command palette.
    search: 'Шукати застосунки, записи, сторінки…',
    // objectui#12601 — the line under the greeting that sums up what is
    // waiting: the approvals count, or `none` at zero.
    summary: {
      approvals: 'Сьогодні чекає на вас запитів на затвердження: {{count}}',
      approvals_one: 'Сьогодні чекає на вас {{count}} запит на затвердження',
      approvals_few: 'Сьогодні чекають на вас {{count}} запити на затвердження',
      approvals_many: 'Сьогодні чекає на вас запитів на затвердження: {{count}}',
      approvals_other: 'Сьогодні чекає на вас запитів на затвердження: {{count}}',
      none: 'Сьогодні на вас нічого не чекає',
    },
    // objectui#12601 — an admin's trailing tile in the apps strip; opens the marketplace.
    addApp: 'Додати застосунок',
    // objectui#12601 — the line under a Home app tile: when the user last had
    // the app open, `time` a compact relative time ("2 hr. ago"). The line is
    // 11 px in a 112 px tile and never cut, so a pack adds a verb only where
    // verb and time still fit (zh "{{time}}打开"); English does not have the
    // room for "Opened". Held to its width budget in every pack by
    // `appTileOpenedLine-12601.test.ts` (app-shell).
    appOpened: '{{time}}',
    build: {
      title: 'Зберіть застосунок',
      noCapability: "У цій системі збирання застосунків недоступне — потрібен дозвіл «Керування метаданими», якого ваш обліковий запис не має.",
      inStudio: 'Нове у Studio',
    },
    template: {
      title: 'Почніть із шаблону',
      marketplaceDisabled: 'У цього рантайма не налаштовано маркетплейс застосунків, тому шаблонів для встановлення тут немає.',
    },
    open: 'Відкрити',
    loading: 'Завантаження…',
    welcome: 'Збирайте свою бізнес-систему з ШІ',
    welcomeAdminDescription: 'Опишіть свій бізнес одним реченням — ШІ згенерує об\'єкти, екрани, API та інструменти агента. Або налаштуйте все самі через меню зліва.',
    welcomeAdminDescriptionNoBuild: 'Налаштуйте свій перший застосунок з меню адміністрування зліва. Щойно з\'являться дані, ШІ-асистент допоможе вам їх дослідити.',
    welcomeAdminDescriptionNoAi: 'Налаштуйте свій перший застосунок з меню адміністрування зліва.',
    noAppsTitle: 'Застосунків ще немає',
    noAppsDescription: 'Система налаштовується — застосунки, якими ваш адміністратор поділиться з вами, з\'являться тут.',
    buildWithAI: 'Збирайте з ШІ',
    askAI: 'Питайте ШІ',
    recoveryReminder: {
      message: 'Задайте пароль відновлення, щоб могли входити, якщо єдиний вхід коли-небудь стане недоступним.',
      cta: 'Задати пароль',
      dismiss: 'Сховати',
    },
    connectAssistant: {
      title: 'Працюйте тут зі свого ШІ-асистента',
      body: 'Ви можете шукати і змінювати свої записи з Claude, Doubao та подібних ШІ-асистентів. Кожен діє від вашого імені, з вашими власними дозволами.',
      action: 'Підключити ШІ-асистента',
      dismiss: 'Сховати',
    },
    pendingDrafts: {
      // objectui#12602 — the drafts row in Home's "My work" section: the
      // count, then the first draft names joined by `nameSeparator`, in
      // their package when they share one.
      title: '{{count}} неопублікованих змін',
      title_one: '{{count}} неопублікована зміна',
      title_few: '{{count}} неопубліковані зміни',
      title_many: '{{count}} неопублікованих змін',
      title_other: '{{count}} неопублікованих змін',
      inPackage: '{{names}} чекають на публікацію в {{package}}',
      waiting: '{{names}} чекають на публікацію',
      nameSeparator: ', ',
      cta: 'Опублікувати',
      publishing: 'Публікація…',
      published: 'Опубліковано! Ваші зміни вже в системі.',
      publishFailed: 'Помилка публікації',
      // objectui#3546 slice six — the rest of `usePublishAllDrafts`'s toasts
      // (the ADR-0038 L3 probe / seed health report and the ADR-0066 ⑨
      // capability-reference lint). Same banner, same publish button, so they
      // live beside the five keys above rather than in a namespace of their own.
      nothing: 'Опубліковувати нічого.',
      probeWarn: 'Опубліковано, але перевірка знайшла проблеми.',
      seedWarn: 'Опубліковано, але частина демоданих не завантажилася.',
      publishedVerified: 'Опубліковано й перевірено — демо-рядків у системі: {{count}}.',
      capabilityWarn: 'Перевірка авторингу: {{count}} посилань на можливості не ведуть нікуди.',
    },
    systemSettings: 'Системні налаштування',
    browseMarketplace: 'Переглянути маркетплейс застосунків',
    quickActions: {
      title: 'Швидкі дії',
      systemSettings: 'Системні налаштування',
      systemSettingsDesc: 'Налаштуйте свою систему',
    },
    recentApps: {
      title: 'Нещодавно відкриті',
      itemType: {
        object: "Об'єкт",
        dashboard: 'Дашборд',
        page: 'Сторінка',
        report: 'Звіт',
        package: 'Пакет',
        view: 'Спискове подання',
        record: 'Запис',
        metadata: 'Метадані',
      },
    },
    starredApps: {
      title: 'Обране',
    },
    gettingStarted: {
      description:
        'Закріпіть застосунок зіркою, щоб він з\'явився тут для доступу одним натисканням. Все, що ви відкриваєте, автоматично показується в списку «Нещодавно відкриті».',
    },
    appCard: {
      noDescription: 'Немає опису',
      default: 'Типовий',
    },
  },
  layout: {
    appSwitcher: {
      switchApplication: 'Змінити застосунок',
      appsAvailable: '{{count}} доступних застосунків',
      allApps: 'Усі застосунки',
      editAppInStudio: 'Змінити {{app}} у Studio',
      openAppInStudio: 'Відкрити {{app}} у Studio',
      backToHome: 'На головну',
      settings: 'Налаштування',
      productHome: 'Головна {{product}}',
    },
    systemNav: {
      systemSettings: 'Системні налаштування',
      applications: 'Застосунки',
      appMarketplace: 'Маркетплейс застосунків',
      users: 'Користувачі',
      organizations: 'Організації',
      roles: 'Ролі',
      configuration: 'Конфігурація',
      administration: 'Адміністрування',
      datasources: 'Джерела даних',
      documentation: 'Документація',
    },
    activityFeed: {
      title: 'Нещодавні події',
      filter: 'Фільтр',
      empty: 'Нещодавніх подій немає',
      accessDenied: "У вас немає дозволу переглядати події.",
      viewAll: 'Переглянути всі події',
      ariaLabel: 'Стрічка подій',
      typeCreate: 'Створення',
      typeUpdate: 'Оновлення',
      typeDelete: 'Видалення',
      typeComment: 'Коментар',
      typeSystem: 'Система',
      relativeJustNow: 'щойно',
      relativeSecondsAgo: '{{count}} с тому',
      relativeMinutesAgo: '{{count}} хв тому',
      relativeHoursAgo: '{{count}} год тому',
      relativeDaysAgo: '{{count}} д тому',
    },
    metadata: {
      label: 'Метадані',
      toggleTitle: 'Перемкнути інспектор метаданих',
      panelTitle: 'Інспектор метаданих',
      jsonBadge: 'JSON',
      copyJson: 'Копіювати JSON',
    },
  },
  search: {
    title: 'Пошук',
    back: 'Назад',
    placeholder: "Шукати об'єкти, дашборди, сторінки, звіти…",
    inputAriaLabel: "Пошук об'єктів, дашбордів, сторінок, звітів",
    resultsCount: '{{count}} результатів для «{{query}}»',
    resultsCount_one: '{{count}} результат для «{{query}}»',
    resultsCount_few: '{{count}} результати для «{{query}}»',
    resultsCount_many: '{{count}} результатів для «{{query}}»',
    resultsCount_other: '{{count}} результатів для «{{query}}»',
    itemsAvailable: '{{count}} доступних елементів',
    itemsAvailable_one: '{{count}} доступний елемент',
    itemsAvailable_few: '{{count}} доступні елементи',
    itemsAvailable_many: '{{count}} доступних елементів',
    itemsAvailable_other: '{{count}} доступних елементів',
    noResults: 'Результатів не знайдено',
    noResultsHint: 'Спробуйте змінити слова пошуку',
    typeObjects: "Об'єкти",
    typeDashboards: 'Дашборди',
    typePages: 'Сторінки',
    typeReports: 'Звіти',
    badgeObject: "об'єкт",
    badgeDashboard: 'дашборд',
    badgePage: 'сторінка',
    badgeReport: 'звіт',
  },
  empty: {
    objectNotFound: "Об'єкт не знайдено",
    objectNotFoundDescription: "Визначення об'єкта «{{name}}» відсутнє. Перевірте конфігурацію або поверніться назад і виберіть чинний об'єкт.",
    interfacePageSourceMissing: 'Ця сторінка інтерфейсу посилається на «{{name}}», який недоступний.',
    recordNotFound: 'Запис не знайдено',
    recordNotFoundDescription: 'Запису, який ви шукаєте, не існує, можливо, його видалено, або ви не маєте до нього доступу.',
    backToList: 'Назад до {{name}}',
    recordAccessDenied: 'У вас немає доступу до записів {{object}}',
    recordAccessDeniedDescription: 'У вас немає дозволу переглядати записи цього типу. Зверніться до адміністратора, якщо вважаєте, що доступ вам має бути.',
    recordLoadFailed: 'Не вдалося завантажити цей запис',
    recordLoadFailedDescription: 'Під час завантаження щось пішло не так. Перевірте підключення і спробуйте ще раз.',
    recordAccessEnded: 'Рішення записано',
    recordAccessEndedDescription: 'Ваш крок затвердження завершено, тому ваш доступ до цього запису закінчився.',
    pageNotFound: 'Сторінку не знайдено',
    pageNotFoundDescription: 'Сторінку «{{name}}» не знайдено. Можливо, її вилучено або перейменовано.',
    recordPagePlacesNoComponent: 'На цій сторінці запису нема чого показувати',
    recordPagePlacesNoComponentDescription: 'Сторінка запису «{{name}}» не розміщує компонента в своїх регіонах, тому не показує нічого для жодного запису. Адміністратор може це виправити в Studio: додати компонент у регіон, зробити сторінку з слотом, щоб показувалася типова сторінка запису, або вилучити сторінку, щоб показувалася типова сторінка запису.',
    recordPagePlacesNoComponentDescriptionUnnamed: 'Ця сторінка запису не розміщує компонента в своїх регіонах, тому не показує нічого для жодного запису. Адміністратор може це виправити в Studio: додати компонент у регіон, зробити сторінку з слотом, щоб показувалася типова сторінка запису, або вилучити сторінку, щоб показувалася типова сторінка запису.',
    dashboardNotFound: 'Дашборд не знайдено',
    dashboardNotFoundDescription: 'Дашборд «{{name}}» не знайдено. Можливо, його вилучено або перейменовано.',
    reportNotFound: 'Звіт не знайдено',
    reportNotFoundDescription: 'Звіт «{{name}}» не знайдено. Можливо, його вилучено або перейменовано.',
    noAppsConfigured: 'Застосунки не налаштовано',
    noAppsConfiguredDescription: 'Жоден застосунок не зареєстровано. Створіть свій перший застосунок або відкрийте Системні налаштування, щоб налаштувати середовище.',
    appNotAvailable: 'Застосунок недоступний',
    appNotAvailableDescription: 'Цей застосунок недоступний — спробуйте за мить.',
    appNotFound: 'Цей застосунок неможливо відкрити',
    appNotFoundDescription: 'Сервер не повернув цей застосунок для вашого облікового запису.',
    appUnreachable: 'Не вдалося дістатися сервера',
    appUnreachableDescription: 'Цей застосунок не вдалося перевірити. Спробуйте за мить.',
    appAccessDenied: 'У вас немає доступу до цього застосунку',
    appAccessDeniedDescription: 'Цей застосунок існує, але ваш обліковий запис не уповноважений його відкрити. Попросіть адміністратора надати вам доступ.',
    appAccessDeniedHome: 'На головну',
    // objectui#12079 — the app root when the app serves this caller no navigation (`AppNoAccessEmptyState`).
    appNothingAvailable: 'Поки що в {{app}} вам недоступно нічого',
    appNothingAvailableDescription: 'У цього застосунку немає сторінок, які ваш обліковий запис може відкрити. Попросіть адміністратора надати вам доступ.',
    appNothingAvailableGrantDescription: 'У цього застосунку немає сторінок, які ваш обліковий запис може відкрити. Доступ можна надати в Налаштуваннях.',
    appNoReadableObjectDescription: 'Ваш обліковий запис поки не може читати жоден запис у цьому застосунку. Попросіть адміністратора призначити вам набір дозволів.',
    appNoReadableObjectGrantDescription: 'Ваш обліковий запис поки не може читати жоден запис у цьому застосунку. Доступ можна надати в Налаштуваннях.',
    // objectstack-ai/objectstack#29771 — the app root when every entry it shows is a `url` or `action` link (`AppNoAccessEmptyState`, reason `menu-only`).
    appOpensFromMenu: '{{app}} відкривається з меню',
    appOpensFromMenuDescription: 'У цього застосунку немає власної сторінки. Виберіть пункт у його меню, щоб відкрити посилання або виконати дію.',
    openSetup: 'Відкрити Налаштування',
    createFirstApp: 'Створіть свій перший застосунок',
    systemSettings: 'Системні налаштування',
    back: 'Назад',
  },
  preview: {
    // objectstack#32984 — the list of an object the draft preview shows before its first publish.
    unpublishedList: {
      title: "Записи з'являться тут після публікації",
      message: "Ви переглядаєте об'єкт, який ще не опубліковано, тому записів у нього немає. Опублікуйте, щоб почати додавати записи або завантажити демодані.",
    },
    empty: {
      loadFailedTitle: 'Помилка завантаження перегляду чернетки',
      loadFailedDescription: 'Накладку чернетки не вдалося прочитати. Спробуйте знову або перевірте підключення.',
      notReadyTitle: '«{{app}}» досі немає в чернетці',
      notReadyDescription: 'Збирання може ще тривати, або воно завершилося помилкою перед постановкою цього застосунку. Перевірте статус збирання в розмові — ця панель оновлюється, щойно чернетки потрапляють у систему.',
      nothingTitle: 'Поки нема чого показувати',
      retry: 'Спробувати знову',
    },
    draftBar: {
      message: 'Перегляд чернетки — ви бачите неопубліковані зміни. Нічого з цього не в системі, доки ви не опублікуєте.',
      messageClean: 'Перегляд чернетки — неопублікованих змін немає; все тут уже в системі.',
      publish: 'Опублікувати',
      publishing: 'Публікація…',
      exit: 'Вийти з перегляду',
      changes: 'Зміни',
      // objectui#12968 — what is pending on the surface the preview shows.
      pendingHere: 'Перегляд чернетки · неопублікованих змін на цій сторінці: {{count}}',
      pendingHere_one: 'Перегляд чернетки · {{count}} неопублікована зміна на цій сторінці',
      pendingHere_few: 'Перегляд чернетки · {{count}} неопубліковані зміни на цій сторінці',
      pendingHere_many: 'Перегляд чернетки · неопублікованих змін на цій сторінці: {{count}}',
      pendingHere_other: 'Перегляд чернетки · неопублікованих змін на цій сторінці: {{count}}',
      // Magic-moment hint: a freshly-built draft renders empty (dashboards at 0,
      // lists "Nothing here yet") because seed/sample rows only load on publish.
      // Say so plainly so an empty preview never reads as a broken build.
      sampleDataTitle: "Демодані з'являться після публікації",
      sampleDataBody:
        'Ви переглядаєте структуру свого застосунку. Опублікуйте, щоб завантажити приклади записів і пустити їх у систему.',
      publishCta: 'Опублікувати, щоб уживити',
    },
    changes: {
      title: 'Очікувані зміни',
      description: 'Що зміниться при публікації. Нові позиції додаються; оновлення перекривають чинну версію.',
      // ADR-0146 D3 — where a customization of a read-only base is saved: its `.custom` pair.
      savedToCustomization: 'Збережено до користувацьких змін {{package}}',
      // objectstack#30119 (ADR-0146 D2) — the pair lives in this environment's database and moves only by export;
      // `command` is always the literal `os package export`, never translated.
      customizationEnvironment: 'Ці зміни зберігаються в базі даних цього середовища як позиції {{pair}}, а не в коді вашого проєкту. До іншого середовища вони потрапляють лише через {{command}}.',
      loading: 'Завантаження очікуваних змін…',
      loadFailed: 'Не вдалося завантажити очікувані зміни:',
      empty: 'Очікувати нічого — усі чернетки опубліковано.',
      kindNew: 'Нове',
      kindUpdate: 'Оновлення',
      detailLoading: 'Завантаження подробиць…',
      detailLoadFailed: 'Не вдалося завантажити подробиці зміни:',
      detailNone: 'Розбіжностей не виявлено — чернетка збігається з опублікованою версією.',
      fieldOrderChanged: 'Порядок полів змінено',
      // objectstack#27176 — who drafted part of this item: the copilot, or an agent through MCP.
      draftedByCopilot: 'Містить зміни, накидані ШІ-копілотом',
      draftedByMcpClient: 'Містить зміни, накидані клієнтом MCP «{{client}}»',
      draftedByMcp: 'Містить зміни, накидані клієнтом MCP',
      detailChangedKeys: 'Також змінено:',
      detailNewKeys: 'Містить:',
      // objectstack#29704 — a NEW item's drill-in when it brings no field or node to list.
      detailNewItem: 'Публікація додає цю позицію.',
      generatedGroup: 'Згенеровано платформою ({{n}})',
      confirmNote: 'Публікація випускає всі {{count}} очікуваних чернеток цього пакета разом: або всі потрапляють у систему, або ні.',
      confirmNote_one: 'Публікація випускає {{count}} очікувану чернетку цього пакета: вона потрапляє в систему, або нічого не змінюється.',
      confirmNote_few: 'Публікація випускає всі {{count}} очікувані чернетки цього пакета разом: або всі потрапляють у систему, або ні.',
      confirmNote_many: 'Публікація випускає всі {{count}} очікуваних чернеток цього пакета разом: або всі потрапляють у систему, або ні.',
      confirmNote_other: 'Публікація випускає всі {{count}} очікуваних чернеток цього пакета разом: або всі потрапляють у систему, або ні.',
      // objectui#11591 — the package-less sheet: no package to batch, so each
      // draft publishes by itself and one that fails stays pending.
      confirmNoteSeparate: 'Публікація випускає {{count}} очікуваних чернеток по одній: чернетка з помилкою залишається в очікуванні, поки інші потрапляють у систему.',
      confirmNoteSeparate_one: 'Публікація випускає {{count}} очікувану чернетку самостійно: якщо вона завершиться помилкою, вона залишиться в очікуванні.',
      confirmNoteSeparate_few: 'Публікація випускає {{count}} очікувані чернетки по одній: чернетка з помилкою залишається в очікуванні, поки інші потрапляють у систему.',
      confirmNoteSeparate_many: 'Публікація випускає {{count}} очікуваних чернеток по одній: чернетка з помилкою залишається в очікуванні, поки інші потрапляють у систему.',
      confirmNoteSeparate_other: 'Публікація випускає {{count}} очікуваних чернеток по одній: чернетка з помилкою залишається в очікуванні, поки інші потрапляють у систему.',
      publishConfirm: 'Опублікувати все',
      noteLabel: 'Примітка до зміни (необов\'язково)',
      notePlaceholder: 'Що змінилося і чому. Показується в історії кожної позиції.',
      // objectui#12517 — the confirm posture's summary line above the list:
      // the item count, then one `{{n}} {{type}}` per type group.
      summaryItems: '{{count}} позицій',
      summaryItems_one: '{{count}} позиція',
      summaryItems_few: '{{count}} позиції',
      summaryItems_many: '{{count}} позицій',
      summaryItems_other: '{{count}} позицій',
      summaryType: '{{n}} {{type}}',
      // objectui#13147 — one count family per known metadata type, so the summary
      // reads "2 flows", not "2 flow". A type with no row here keeps `summaryType`.
      typeCount: {
        object: "{{count}} об'єктів",
        object_one: "{{count}} об'єкт",
        object_few: "{{count}} об'єкти",
        object_many: "{{count}} об'єктів",
        object_other: "{{count}} об'єктів",
        view: '{{count}} подань',
        view_one: '{{count}} подання',
        view_few: '{{count}} подання',
        view_many: '{{count}} подань',
        view_other: '{{count}} подань',
        page: '{{count}} сторінок',
        page_one: '{{count}} сторінка',
        page_few: '{{count}} сторінки',
        page_many: '{{count}} сторінок',
        page_other: '{{count}} сторінок',
        dashboard: '{{count}} дашбордів',
        dashboard_one: '{{count}} дашборд',
        dashboard_few: '{{count}} дашборди',
        dashboard_many: '{{count}} дашбордів',
        dashboard_other: '{{count}} дашбордів',
        app: '{{count}} застосунків',
        app_one: '{{count}} застосунок',
        app_few: '{{count}} застосунки',
        app_many: '{{count}} застосунків',
        app_other: '{{count}} застосунків',
        action: '{{count}} дій',
        action_one: '{{count}} дія',
        action_few: '{{count}} дії',
        action_many: '{{count}} дій',
        action_other: '{{count}} дій',
        report: '{{count}} звітів',
        report_one: '{{count}} звіт',
        report_few: '{{count}} звіти',
        report_many: '{{count}} звітів',
        report_other: '{{count}} звітів',
        flow: '{{count}} потоків',
        flow_one: '{{count}} потік',
        flow_few: '{{count}} потоки',
        flow_many: '{{count}} потоків',
        flow_other: '{{count}} потоків',
        permission: '{{count}} наборів дозволів',
        permission_one: '{{count}} набір дозволів',
        permission_few: '{{count}} набори дозволів',
        permission_many: '{{count}} наборів дозволів',
        permission_other: '{{count}} наборів дозволів',
        agent: '{{count}} агентів',
        agent_one: '{{count}} агент',
        agent_few: '{{count}} агенти',
        agent_many: '{{count}} агентів',
        agent_other: '{{count}} агентів',
        email_template: '{{count}} шаблонів листів',
        email_template_one: '{{count}} шаблон листа',
        email_template_few: '{{count}} шаблони листів',
        email_template_many: '{{count}} шаблонів листів',
        email_template_other: '{{count}} шаблонів листів',
        object_extension: "{{count}} розширень об'єктів",
        object_extension_one: "{{count}} розширення об'єкта",
        object_extension_few: "{{count}} розширення об'єктів",
        object_extension_many: "{{count}} розширень об'єктів",
        object_extension_other: "{{count}} розширень об'єктів",
        dataset: '{{count}} наборів даних',
        dataset_one: '{{count}} набір даних',
        dataset_few: '{{count}} набори даних',
        dataset_many: '{{count}} наборів даних',
        dataset_other: '{{count}} наборів даних',
        hook: '{{count}} хуків',
        hook_one: '{{count}} хук',
        hook_few: '{{count}} хуки',
        hook_many: '{{count}} хуків',
        hook_other: '{{count}} хуків',
        translation: '{{count}} перекладів',
        translation_one: '{{count}} переклад',
        translation_few: '{{count}} переклади',
        translation_many: '{{count}} перекладів',
        translation_other: '{{count}} перекладів',
        mapping: '{{count}} зіставлень полів',
        mapping_one: '{{count}} зіставлення полів',
        mapping_few: '{{count}} зіставлення полів',
        mapping_many: '{{count}} зіставлень полів',
        mapping_other: '{{count}} зіставлень полів',
        seed: '{{count}} наборів демоданих',
        seed_one: '{{count}} набір демоданих',
        seed_few: '{{count}} набори демоданих',
        seed_many: '{{count}} наборів демоданих',
        seed_other: '{{count}} наборів демоданих',
        external_catalog: '{{count}} зовнішніх каталогів',
        external_catalog_one: '{{count}} зовнішній каталог',
        external_catalog_few: '{{count}} зовнішні каталоги',
        external_catalog_many: '{{count}} зовнішніх каталогів',
        external_catalog_other: '{{count}} зовнішніх каталогів',
        doc: '{{count}} сторінок документації',
        doc_one: '{{count}} сторінка документації',
        doc_few: '{{count}} сторінки документації',
        doc_many: '{{count}} сторінок документації',
        doc_other: '{{count}} сторінок документації',
        book: '{{count}} книжок документації',
        book_one: '{{count}} книжка документації',
        book_few: '{{count}} книжки документації',
        book_many: '{{count}} книжок документації',
        book_other: '{{count}} книжок документації',
        position: '{{count}} посад',
        position_one: '{{count}} посада',
        position_few: '{{count}} посади',
        position_many: '{{count}} посад',
        position_other: '{{count}} посад',
        tool: '{{count}} ШІ-інструментів',
        tool_one: '{{count}} ШІ-інструмент',
        tool_few: '{{count}} ШІ-інструменти',
        tool_many: '{{count}} ШІ-інструментів',
        tool_other: '{{count}} ШІ-інструментів',
        skill: '{{count}} ШІ-навичок',
        skill_one: '{{count}} ШІ-навичка',
        skill_few: '{{count}} ШІ-навички',
        skill_many: '{{count}} ШІ-навичок',
        skill_other: '{{count}} ШІ-навичок',
        datasource: '{{count}} джерел даних',
        datasource_one: '{{count}} джерело даних',
        datasource_few: '{{count}} джерела даних',
        datasource_many: '{{count}} джерел даних',
        datasource_other: '{{count}} джерел даних',
      },
      // objectui#12929 — the unchecked choice under an added object field whose
      // literal default the batch publish can write into the existing records.
      backfillOption: 'Заповнити типовим ({{count}} наявних записів)',
      backfillOption_one: 'Заповнити типовим ({{count}} наявний запис)',
      backfillOption_few: 'Заповнити типовим ({{count}} наявні записи)',
      backfillOption_many: 'Заповнити типовим ({{count}} наявних записів)',
      backfillOption_other: 'Заповнити типовим ({{count}} наявних записів)',
      backfillOptionNoCount: 'Заповнити типовим',
      // [`7a90afdf9`] Pre-publish security-posture findings, shown next to
      // the confirm button so a refusal the door would issue is read BEFORE
      // the click rather than as a toast after the batch rolled back.
      securityBlockTitle: 'Публікацію буде відхилено — спершу потрібне рішення щодо позицій: {{count}}',
      securityBlockTitle_one: 'Публікацію буде відхилено — спершу потрібне рішення щодо {{count}} позиції',
      securityBlockTitle_few: 'Публікацію буде відхилено — спершу потрібне рішення щодо {{count}} позицій',
      securityBlockTitle_many: 'Публікацію буде відхилено — спершу потрібне рішення щодо позицій: {{count}}',
      securityBlockTitle_other: 'Публікацію буде відхилено — спершу потрібне рішення щодо позицій: {{count}}',
      securityBlockWhere: "Виправте це в об'єкті в Налаштуваннях → Спільний доступ до записів, а потім опублікуйте знову.",
      // The pre-publish security rows, by the rule id of the finding (DraftChangesPanel `SECURITY_RULE_TEXT`).
      securityRule: {
        owdUnset: 'Не оголошено базової лінії спільного доступу до записів (sharingModel). Середовище виконання повернеться до приватного, але базову лінію має написати автор.',
        owdAlias: "Базова лінія спільного доступу до записів (sharingModel) не є канонічним значенням, тому середовище виконання вважає об'єкт приватним.",
        cbpNoRelation: "Доступом керує батько, але жодне обов'язкове поле master_detail не називає батька, тому жодне читання не можливе і жоден запис не приймається.",
        cbpAmbiguousRelation: "Доступом керує батько, але кілька обов'язкових полів master_detail називають батька, тому жодне не виводиться: жодне читання не можливе і жоден запис не приймається.",
      },
    },
    // ADR-0045 — the materialized-but-unlisted app banner
    // (UnpublishedAppBar.tsx), sibling of draftBar above.
    unpublishedBar: {
      message: 'Неопублікований застосунок — повністю робочий, але його бачать лише збирачі. Опублікуйте, щоб він став видимий вашим користувачам.',
      publish: 'Опублікувати',
      publishing: 'Публікація…',
      published: 'Опубліковано! Застосунок тепер видимий вашим користувачам.',
      publishFailed: 'Помилка публікації',
    },
    // ADR-0067 — the append-only build/revert timeline (CommitTimeline.tsx);
    // `button` is the banner's entry point into it.
    history: {
      button: 'Історія',
      title: 'Історія збирання',
      description: 'Уся історія змін цього застосунку, від нових до старих. Відкотіть будь-який крок, щоб його скасувати — підтвердження публікації не потрібне.',
      loadFailed: 'Не вдалося завантажити історію:',
      // objectui#3529 — the retryable class gets its own sentence: a 503 means
      // the read never reached the commit store, which is a different operator
      // disposition from a 404/500 and must not read as a bare status code.
      loadFailedUnavailable:
        'Сховище комітів тимчасово недосяжне — це читання не відбулося, тому історію не показано. Спробуйте за мить.',
      loading: 'Завантаження історії…',
      empty: 'Історії цього застосунку ще немає.',
      revertLabel: 'Зміну відкочено',
      applyLabel: 'Зміна збирання',
      revert: 'відкочування',
      // objectui#9266 — the count is INSIDE the value, one interpolated string
      // per pack. It used to be a bare unit word that `CommitTimeline` glued to
      // a number it rendered itself, which no pack could make agree: `de` read
      // `1 Elemente`, `ru` `1 элементов`, `ar` `1 عناصر`. Each pack now states
      // the count in its own count-INVARIANT idiom — `en` keeps the `(s)` marker
      // it already dodged with, `zh`/`ja`/`ko` keep the inline counter their
      // grammar needs no plural for, and `de`/`fr`/`es`/`pt`/`ru`/`ar` use the
      // label-colon form (`Elemente: 3`, `Элементов: 3`), which is the shape
      // `fields.textarea.charactersRemaining` already uses for this exact
      // reason. It needs no family: every pack's form reads at any number,
      // which is why `count-families-11445.test.ts` names it on its
      // count-neutral list rather than holding it to the family rule.
      items: 'Позицій: {{count}}',
      revertAction: 'Відкотити',
      reverted: 'Відкочено — зміну скасовано.',
      revertFailed: 'Помилка відкочування',
      // The WRITE half of the same fact. Not "try again": the revert may have
      // landed before the 503, and re-issuing appends a second revert commit.
      revertUnavailable:
        'Сховище комітів тимчасово недосяжне — відкочування могло не застосуватися. Відкрийте цю історію знову і перевірте, перш ніж повторювати.',
    },
  },
  actionDialog: {
    title: 'Параметри дії',
    description: 'Укажіть потрібну інформацію, щоб продовжити.',
    selectPlaceholder: 'Виберіть {{label}}',
    requiredError: "{{label}} — обов'язкове поле",
    lookupPlaceholder: 'Ідентифікатор запису для {{label}}',
    lookupHelpText: "Для цього параметра не налаштовано об'єкт-посилання, тому вибір запису недоступний. Уведіть ідентифікатор запису або попросіть адміністратора виправити параметр дії.",
    unresolvedParam: "Цей параметр неможливо показати: поле, на якому він базується, відсутнє в метаданих об'єкта, тому потрібний елемент керування неможливо збудувати. Попросіть адміністратора виправити визначення дії.",
    carryOverHint: 'Перенесено без змін (лише читання)',
    // The declared preflight read (objectstack#31808): its panel above the
    // params, and the hint on a param it fills.
    preflight: {
      heading: 'Перед підтвердженням',
      waiting: 'Заповніть {{fields}}, щоб побачити, що зробить ця дія.',
      loading: 'Запитуємо сервер…',
      unbound: 'Цій перевірці потрібне значення, якого цей запис не має, тому її не надіслано. Значення, які вона заповнює, лишаються порожніми.',
      refused: 'Цю перевірку оголошено неправильно, тому її не надіслано. Значення, які вона заповнює, лишаються порожніми. Попросіть адміністратора виправити визначення дії.',
      failed: 'Цю перевірку не вдалося завершити. Значення, які вона заповнює, лишаються порожніми. Закрийте цей діалог і спробуйте знову.',
      seededHint: 'Заповнено перевіркою (лише читання)',
    },
    cancel: 'Скасувати',
    confirm: 'Підтвердити',
    uploading: 'Завантаження…',
  },
  actionConfirm: {
    title: 'Підтвердження дії',
    confirm: 'Продовжити',
    cancel: 'Скасувати',
  },
  navigationSync: {
    addedPage: 'Навігацію оновлено: додано сторінку «{{name}}»',
    addedDashboard: 'Навігацію оновлено: додано дашборд «{{name}}»',
    removedPage: 'Навігацію оновлено: вилучено сторінку «{{name}}»',
    removedDashboard: 'Навігацію оновлено: вилучено дашборд «{{name}}»',
    renamedPage: 'Навігацію оновлено: сторінку «{{oldName}}» перейменовано на «{{newName}}»',
    renamedDashboard: 'Навігацію оновлено: дашборд «{{oldName}}» перейменовано на «{{newName}}»',
    undoLabel: 'Скасувати',
    undone: 'Зміну навігації скасовано',
    undoFailed: 'Не вдалося скасувати зміну навігації',
    updateFailed: 'Не вдалося оновити навігацію',
  },
  // ADR-0148 — why a recycle-bin restore was refused, one sentence per code the
  // restore door answers (`recycleBinRestoreRefusalText` in @object-ui/core).
  recycleBin: {
    refusal: {
      uniqueValueTaken: "Не вдається відновити: інший запис тепер має те саме значення {{field}}. Спершу змініть той запис, потім відновлюйте.",
      parentPurged: "Не вдається відновити: запис {{parent}}, якому він належав, вилучено назавжди.",
      packageUninstalled: "Не вдається відновити: пакет, що надавав {{object}}, видалено.",
      parentInRecycleBin: "Поки не вдається відновити: запис {{parent}}, якому він належить, теж у корзині. Спершу відновіть той запис.",
      notFound: 'Цього запису вже немає в корзині. Можливо, його вилучено назавжди.',
      permissionDenied: "У вас немає дозволу відновити цей запис.",
      notAvailable: 'Корзина недоступна в цьому розгортанні.',
    },
    page: {
      title: "Корзина",
      subtitle: "Виберіть об'єкт, щоб побачити його видалені записи, відновити їх або очистити його корзину. Видалений запис зберігається до показаної дати, потім вилучається назавжди.",
      objectsList: "Об'єкти",
      objectsFilter: "Фільтр об'єктів",
      noObjectsTitle: 'Немає корзини для керування',
      noObjectsBody: "Ви не керуєте корзиною жодного об'єкта. Адміністратор надає це для кожного об'єкта окремо.",
      pick: "Виберіть об'єкт, щоб побачити його видалені записи.",
      objectsLoadFailed: "Не вдалося прочитати об'єкти.",
      entriesEmpty: "Видалених записів {{object}} у корзині немає.",
      loadFailed: "Не вдалося прочитати корзину {{object}}.",
      colRecord: 'Запис',
      colDeletedBy: 'Видалив',
      colDeletedAt: 'Видалено',
      colKeptUntil: 'Зберігається до',
      related: "і {{count}} пов'язаних записів",
      related_one: "і {{count}} пов'язаний запис",
      related_few: "і {{count}} пов'язані записи",
      related_many: "і {{count}} пов'язаних записів",
      related_other: "і {{count}} пов'язаних записів",
      restore: 'Відновити',
      loadMore: 'Завантажити ще',
      emptyAction: 'Очистити корзину',
      emptyTitle: "Очистити корзину {{object}}?",
      emptyBody: "Кожен видалений запис {{object}} у ній вилучається назавжди. Цю дію не можна скасувати.",
      emptied: 'Вилучено назавжди видалених записів: {{count}}',
      emptied_one: 'Вилучено назавжди {{count}} видалений запис',
      emptied_few: 'Вилучено назавжди {{count}} видалені записи',
      emptied_many: 'Вилучено назавжди видалених записів: {{count}}',
      emptied_other: 'Вилучено назавжди видалених записів: {{count}}',
      emptyFailed: "Не вдалося очистити корзину {{object}}.",
    },
  },
  objectActions: {
    deleteSuccess: '{{label}} успішно видалено',
    // The delete toast when the deleted record has a display name (ADR-0079),
    // the counterpart of `form.createdNamed`; a nameless record keeps
    // `deleteSuccess` above.
    deletedNamed: '{{label}} «{{name}}» видалено',
    deleteFailed: 'Не вдалося видалити {{label}}',
    noRecordId: 'Не передано ідентифікатора запису',
    deleteConfirm: 'Справді видалити цей запис? Цю дію не можна скасувати.',
    // ADR-0148 — a business object's delete goes to the recycle bin: the
    // question alone, promising neither permanence nor recovery.
    deleteConfirmQuestion: 'Справді видалити цей запис?',
    restoredNamed: '{{label}} «{{name}}» відновлено',
    restoreSuccess: '{{label}} відновлено',
    restoreFailed: 'Не вдалося відновити {{label}}',
    deleteConfirmTitle: 'Видалити {{label}} «{{name}}»?',
    bulkDeleteConfirmTitle: 'Видалити записів {{label}}: {{count}}?',
    bulkDeleteConfirmTitle_one: 'Видалити {{count}} запис {{label}}?',
    bulkDeleteConfirmTitle_few: 'Видалити {{count}} записи {{label}}?',
    bulkDeleteConfirmTitle_many: 'Видалити записів {{label}}: {{count}}?',
    bulkDeleteConfirmTitle_other: 'Видалити записів {{label}}: {{count}}?',
    deleteConfirmButton: 'Видалити',
    deleteCascade: "Це також видалить їхні пов'язані записи в: {{objects}}.",
    bulkDeleteSuccess: 'Видалено записів {{label}}: {{count}}',
    bulkDeleteSuccess_one: 'Видалено {{count}} запис {{label}}',
    bulkDeleteSuccess_few: 'Видалено {{count}} записи {{label}}',
    bulkDeleteSuccess_many: 'Видалено записів {{label}}: {{count}}',
    bulkDeleteSuccess_other: 'Видалено записів {{label}}: {{count}}',
    bulkDeletePartial: '{{succeeded}} видалено, {{failed}} з помилкою',
  },
  objectViewActions: {
    renameFailed: 'Не вдалося перейменувати подання',
    deleteFailed: 'Не вдалося видалити подання',
  },
  dashboardActions: {
    printDialogOpening: 'Відкривається діалог друку вашого браузера (не експорт у PDF)',
    exportFailed: 'Помилка експорту: {{message}}',
    forecastSoon: "Перегляд прогнозу скоро з'явиться",
  },
  user: {
    // objectui#13461 — the top bar's avatar button, which holds only the avatar.
    accountMenu: 'Меню облікового запису',
    profile: 'Профіль',
    connectAiAssistant: 'Підключити ШІ-асистента',
    logout: 'Вийти',
    preferences: 'Параметри',
    theme: 'Тема',
    language: 'Мова',
  },
  organizations: {
    mine: 'Мої організації',
    create: 'Створити організацію',
    title: 'Організації',
    heading: 'Ваші організації',
    subtitle: 'Виберіть організацію, щоб продовжити, або створіть нову.',
    searchPlaceholder: 'Шукати організацію',
    new: 'Нова організація',
    current: 'Поточна організація',
    manage: 'Керувати',
    emptyTitle: 'Організацій ще немає',
    emptyDescription: 'Створіть свою першу організацію, щоб почати.',
    noMatches: 'Організацій за вашим пошуком немає.',
  },
  // Organization MANAGEMENT (packages/app-shell/src/console/organizations/**
  // plus the workspace switcher). Distinct from `organizations` above, which
  // is the org PICKER — same domain, different surface, and the singular /
  // plural spelling is the only thing telling them apart at a call site.
  organization: {
    roles: {
      owner: 'Власник',
      admin: 'Адміністратор',
      delegatedAdmin: 'Делегований адміністратор',
      member: 'Учасник',
      external: 'Зовнішній',
    },
    errors: {
      notAllowedToInvite: 'Вам не дозволено запрошувати користувачів до цієї організації',
      notAllowedToInviteWithRole: 'Вам не дозволено запрошувати користувача з цією роллю',
      alreadyInvited: 'Цього користувача вже запрошено до цієї організації',
      alreadyMember: 'Цей користувач уже є учасником цієї організації',
      organizationExists: 'Організація вже існує',
      slugTaken: 'Цей слаг URL уже зайнято',
      notAllowedToCreate: 'Вам не дозволено створювати нову організацію',
      organizationLimitReached: 'Ви досягли ліміту організацій, які можете створити. Організації, до яких вас запросили, не враховуються в нього.',
      notTheRecipient: 'Ви не є одержувачем цього запрошення',
      invitationNotFound: 'Це запрошення вже використане, строк його дії минув або його відкликали. Якщо ви його прийняли, організація буде у вашому списку організацій.',
      unknown: 'Щось пішло не так. Спробуйте ще раз.',
    },
    backToList: 'Назад до організацій',
    notFound: 'Організацію не знайдено',
    notFoundDescription: 'Цієї організації не існує або ви не маєте до неї доступу.',
    tabs: {
      members: 'Учасники',
      invitations: 'Запрошення',
      settings: 'Налаштування',
    },
    members: {
      title: 'Учасники',
      inviteMember: 'Запросити учасника',
      inviteRestrictedNote: 'Запрошувати учасників можуть лише адміністратори організації.',
      inviteManagedNote: 'Люди приєднуються через вашу організацію в хмарі. Запрошуйте їх там.',
      removeMember: 'Видалити учасника',
      removeConfirmTitle: 'Видалити учасника?',
      removeConfirmDescription: 'Це вилучить {{name}} з організації. Доступ буде втрачено одразу.',
      removeConfirmAction: 'Видалити',
      memberRemoved: 'Учасника видалено',
      removeFailed: 'Не вдалося видалити учасника',
      roleUpdated: 'Роль оновлено',
      roleUpdateFailed: 'Не вдалося оновити роль',
      memberActions: 'Дії над учасником',
      loadFailed: 'Не вдалося завантажити учасників',
    },
    invitations: {
      title: 'Запрошення',
      empty: 'Запрошень не знайдено.',
      expiresAt: 'Мине',
      linkCopied: 'Посилання на запрошення скопійовано',
      copyFailed: 'Не вдалося скопіювати посилання',
      canceled: 'Запрошення скасовано',
      cancelFailed: 'Не вдалося скасувати запрошення',
      cancelTitle: 'Скасувати запрошення?',
      cancelDescription: 'Запрошення для {{email}} буде відкликано.',
      cancelAction: 'Скасувати запрошення',
      keepAction: 'Залишити запрошення',
      inviteTitle: 'Запросити учасника',
      inviteDescription: 'Користувач отримає запрошення приєднатися до цієї організації.',
      emailLabel: 'Електронна пошта',
      roleLabel: 'Роль',
      // Placement = business unit + positions applied to the invitee on
      // accept. The lists are already filtered to what the inviter may
      // delegate.
      placementLabel: 'Призначення (необов\'язково)',
      placementDescription: 'Застосовується, коли запрошення буде прийнято. Перелічено лише підрозділи та посади, які ви можете делегувати.',
      businessUnitLabel: 'Підрозділ',
      businessUnitPlaceholder: 'Без призначення',
      positionsLabel: 'Посади',
      sendInvite: 'Надіслати запрошення',
      sentTitle: 'Запрошення створено',
      sentDescription: 'Поділіться посиланням нижче із запрошеним. Користувачеві доведеться увійти, щоб прийняти.',
      linkLabel: 'Посилання для прийняття',
      invitedAs: '{{email}} запрошено як {{role}}',
      copyLinkLabel: 'Копіювати посилання на запрошення',
      loadFailed: 'Не вдалося завантажити запрошення',
      inviteFailed: 'Не вдалося запросити учасника',
      status: {
        all: 'Усі',
        pending: 'Очікує',
        accepted: 'Прийнято',
        rejected: 'Відхилено',
        canceled: 'Скасовано',
      },
    },
    settings: {
      generalTitle: 'Загальне',
      generalDescription: 'Оновіть відомості вашої організації.',
      readOnlyNote: 'Змінювати налаштування можуть лише власники.',
      nameLabel: 'Назва організації',
      // The org's URL segment. `deleteConfirmSlugLabel` asks the user to
      // retype it, so the two must keep naming the same thing.
      slugLabel: 'Слаг',
      slugLockedNote: 'У цієї організації є активні середовища, тому її слаг тут змінити не можна: перейменування також переміщує їхні піддомени.',
      logoLabel: 'Логотип',
      logoUpload: 'Завантажити',
      logoReplace: 'Замінити',
      logoClear: 'Видалити',
      logoUploaded: 'Логотип завантажено — збережіть, щоб застосувати',
      logoUploadFailed: 'Не вдалося завантажити логотип',
      save: 'Зберегти зміни',
      saved: 'Налаштування збережено',
      saveFailed: 'Не вдалося зберегти налаштування',
      leaveTitle: 'Залишити організацію',
      leaveDescription: 'Ви втратите доступ до цієї організації.',
      leaveAction: 'Залишити',
      leaveConfirmTitle: 'Залишити організацію?',
      leaveConfirmDescription: 'Справді хочете залишити {{name}}? Доступ буде втрачено одразу.',
      leaveConfirmAction: 'Залишити',
      leftOrg: 'Ви покинули організацію',
      leaveFailed: 'Не вдалося покинути організацію',
      dangerZone: 'Небезпечна зона',
      deleteTitle: 'Видалення організації',
      deleteDescription: 'Назавжди видаліть цю організацію разом з учасниками та запрошеннями. Організацію, що досі тримає записи, видалити не можна: спершу видаліть або перемістіть їх.',
      deleteAction: 'Видалити',
      deleteConfirmTitle: 'Видалити організацію?',
      deleteConfirmDescription: 'Ця дія незворотна. Організація видаляється разом з учасниками та запрошеннями. Якщо вона досі тримає записи, видалення відхилено і нічого не вилучається. Уведіть слаг організації для підтвердження.',
      deleteConfirmSlugLabel: 'Уведіть «{{slug}}» для підтвердження',
      deleteConfirmAction: 'Видалити організацію',
      deleted: 'Організацію видалено',
      deleteFailed: 'Не вдалося видалити організацію',
      deleteRestricted: 'Ця організація досі тримає записи, тому поки її не можна видалити. Спершу видаліть або перемістіть ці записи, потім спробуйте знову.',
      deleteRestrictedOther: 'Інші записи',
    },
    accept: {
      title: 'Вас запросили',
      description: 'Вас запросили до {{orgName}} як {{role}}.',
      errorTitle: 'Запрошення недоступне',
      goToOrgs: 'До організацій',
      loading: 'Завантаження запрошення…',
      organization: 'Організація',
      role: 'Роль',
      expiresAt: 'Мине',
      invitedBy: 'Запросив',
      accept: 'Прийняти запрошення',
      accepted: 'Запрошення прийнято',
      joinedDescription: 'Вітаємо в {{orgName}}. Ви приєдналися як {{role}}.',
      continue: 'Продовжити',
      acceptFailed: 'Не вдалося прийняти запрошення',
      decline: 'Відхилити',
      declined: 'Запрошення відхилено',
      declineFailed: 'Не вдалося відхилити запрошення',
    },
    current: {
      label: 'Поточна організація',
    },
    switcher: {
      label: 'Змінити організацію',
      groupLabel: 'Робоча організація',
      groupHint: 'Тут створюються нові записи. Подання показують дані з усіх ваших організацій.',
      manageMembers: 'Керувати учасниками',
    },
  },
  notifications: {
    regionLabel: 'Сповіщення',
    empty: 'Немає сповіщень',
    emptyUnread: 'У вас усе прочитано',
    filterUnread: 'Непрочитані',
    filterAll: 'Усі',
    markAllRead: 'Позначити все прочитаним',
    viewAll: 'Переглянути всі сповіщення',
    groupCount: 'Сповіщень: {{count}}',
    groupUnread: 'Непрочитаних: {{count}}',
    groupUnread_one: 'Непрочитаних: {{count}}',
    groupUnread_few: 'Непрочитаних: {{count}}',
    groupUnread_many: 'Непрочитаних: {{count}}',
    groupUnread_other: 'Непрочитаних: {{count}}',
    groupMarkRead: 'Позначити прочитаним',
    groupMarkReadTitle: 'Позначити все цього типу прочитаним',
    approvalsPending: 'Очікуваних затверджень: {{count}}',
    approvalsPending_one: '{{count}} очікуване затвердження',
    approvalsPending_few: '{{count}} очікувані затвердження',
    approvalsPending_many: 'Очікуваних затверджень: {{count}}',
    approvalsPending_other: 'Очікуваних затверджень: {{count}}',
    viewApprovals: 'Переглянути затвердження',
    noPendingApprovals: 'Немає очікуваних затверджень',
    openApprovalsInbox: 'Відкрити вхідні запитів на затвердження',
    // Bell-badge breakdown (objectstack-ai/objectstack#7233): the badge sums unread notification topics
    // and pending approvals, then clamps at "9+". These three spell the sum
    // out inside the popover so the number is explainable.
    badgeTotal: 'Усього: {{total}}',
    badgeNotifications: 'Непрочитаних тем: {{count}}',
    badgeNotifications_one: 'Непрочитані теми: {{count}}',
    badgeNotifications_few: 'Непрочитані теми: {{count}}',
    badgeNotifications_many: 'Непрочитаних тем: {{count}}',
    badgeNotifications_other: 'Непрочитаних тем: {{count}}',
    badgeApprovals: 'Очікуваних затверджень: {{count}}',
    badgeApprovals_one: '{{count}} очікуване затвердження',
    badgeApprovals_few: '{{count}} очікувані затвердження',
    badgeApprovals_many: 'Очікуваних затверджень: {{count}}',
    badgeApprovals_other: 'Очікуваних затверджень: {{count}}',
    // objectui#7011 — the arrival announcement (toast / desktop notification)
    // and the two switches that govern it.
    arrivalMany: '{{count}} нових повідомлень',
    arrivalMany_one: '{{count}} нове повідомлення',
    arrivalMany_few: '{{count}} нові повідомлення',
    arrivalMany_many: '{{count}} нових повідомлень',
    arrivalMany_other: '{{count}} нових повідомлень',
    arrivalRepeats: 'Нових повідомлень у цій темі: {{count}}',
    arrivalRepeats_one: '{{count}} нове повідомлення у цій темі',
    arrivalRepeats_few: '{{count}} нові повідомлення у цій темі',
    arrivalRepeats_many: 'Нових повідомлень у цій темі: {{count}}',
    arrivalRepeats_other: 'Нових повідомлень у цій темі: {{count}}',
    arrivalOpen: 'Переглянути',
    toastEnabled: 'Сповіщення у застосунку',
    desktopEnabled: 'Сповіщення на стільниці',
    desktopBlocked: 'Заблоковано. Дозвольте сповіщення для цього сайту в налаштуваннях браузера.',
    desktopUnsupported: 'Цей браузер не підтримує сповіщення на стільниці.',
  },
  // objectui#13460 — the share-link dialog (`@object-ui/components` `ShareDialog`).
  shareDialog: {
    title: 'Спільний доступ: {{label}}',
    thisRecord: 'цей запис',
    description: 'Створіть посилання, яким будь-хто (або вибрані люди) зможе відкрити цей запис. Посилання можна відкликати будь-коли.',
    whoCanAccess: 'Хто має доступ',
    audienceLinkOnly: 'Будь-хто з посиланням',
    audienceLinkOnlyHelp: 'Вхід не потрібен',
    audienceSignedIn: 'Користувачі, що ввійшли',
    audienceSignedInHelp: 'Потрібен вхід, щоб переглядати',
    expiresIn: 'Мине за',
    expiry1d: '1 день',
    expiry7d: '7 днів',
    expiry30d: '30 днів',
    expiry90d: '90 днів',
    expiryNever: 'Ніколи',
    password: 'Пароль (необов\'язково)',
    passwordPlaceholder: 'Потрібен пароль, щоб відкрити',
    label: 'Позначка (бачите лише ви)',
    labelPlaceholder: 'напр. Надіслано на дизайн-ревю',
    createLink: 'Створити посилання',
    existingLinks: 'Наявні посилання',
    existingLinksCount: 'Наявні посилання ({{n}})',
    noLinks: 'Посилань спільного доступу ще немає. Створіть одне вище.',
    revokedHeading: 'Відкликано',
    revokedBadge: 'відкликано',
    copy: 'Копіювати',
    copied: 'Скопійовано!',
    revoke: 'Відкликати',
    loadFailed: 'Не вдалося завантажити посилання спільного доступу',
    createFailed: 'Не вдалося створити посилання спільного доступу',
    revokeFailed: 'Не вдалося відкликати посилання',
  },
  // objectui#13460 — the public landing of a `/s/:token` share link (`SharedRecordPage`).
  sharedRecord: {
    signInTitle: 'Потрібний вхід',
    signInBody: 'Власник поділився цим посиланням лише з користувачами, що ввійшли.',
    signIn: 'Увійти',
    passwordTitle: 'Потрібен пароль',
    passwordBody: 'Власник захистив це посилання паролем.',
    passwordLabel: 'Пароль',
    passwordPlaceholder: 'Уведіть пароль',
    continue: 'Продовжити',
    cannotOpen: 'Це посилання неможливо відкрити',
    passwordUnsendable: 'У цьому паролі є символи, які неможливо надіслати, як-от китайські знаки або емодзі. Попросіть власника посилання задати пароль без них.',
    wrongPassword: 'Неправильний пароль.',
    loadFailedStatus: 'Не вдалося завантажити (HTTP {{status}}).',
    invalidLink: 'Це посилання не чинне або вже недоступне.',
    expiredLink: 'Строк дії цього посилання минув або його відкликали.',
    loadFailed: 'Не вдалося завантажити спільний вміст.',
    sharedConversation: 'Спільна розмова',
    loadingMessages: 'Завантаження повідомлень…',
    noMessages: 'У цій розмові ще немає повідомлень.',
    sharedObject: 'Спільний {{object}}',
    redactedFields: 'Деякі поля сховано власником: {{fields}}',
    linkedRecord: "Пов'язаний запис",
    linkedUser: "Пов'язаний користувач",
  },
  publicForm: {
    submit: 'Надіслати',
    submitting: 'Надсилання…',
    poweredBy: 'Працює на ObjectStack',
    thankYouTitle: 'Дякуємо!',
    thankYouMessage: 'Ваше надіслання успішно отримано.',
    redirecting: 'Переадресація за {{seconds}} с…',
    // The console form page's line for a submit whose declared redirect is
    // pending (objectui#11071). `redirecting` above is the embeddable form's
    // countdown and carries a `{{seconds}}` hole this page has no value for.
    redirectPending: 'Переадресація…',
    loading: 'Завантаження форми…',
    // The console form page's client-side refusal when required rows are empty
    // (objectui#11071). `{{fields}}` is the empty rows' labels joined with a
    // comma; the colon, its spacing and the order are the pack's.
    requiredFields: "Обов'язкові: {{fields}}",
  },
  effectiveAccess: {
    title: 'Чинні набори дозволів',
    body: 'Усі чинні для цієї людини в вашій поточній організації набори дозволів і звідки кожен походить. Прямі надання також перелічені нижче, там, де їх можна вилучити.',
    refused: 'Вам не дозволено переглядати чинний доступ цієї людини.',
    unserved: 'Цей сервер не звітує про чинний доступ.',
    loadFailed: 'Не вдалося завантажити чинний доступ: {{message}}',
    empty: 'Для цієї людини в цій організації не чинить жоден набір дозволів.',
    originsLabel: 'Походить з',
    origin: {
      direct: 'Пряме надання',
      position: 'Посада: {{position}}',
      default: "Типове прив'язування",
      derivedPlatformAdmin: 'Налаштований адміністратор платформи',
      derivedAiAccess: 'Увімкнений доступ ШІ',
    },
  },
  excelImport: {
    noImportableFields: "У цього об'єкта немає полів, доступних для імпорту.",
    schemaReadFailed: "Не вдалося прочитати схему об'єкта.",
    imported: 'Імпортовано рядків у {{object}}: {{count}}.',
    imported_one: 'Імпортовано {{count}} рядок у {{object}}.',
    imported_few: 'Імпортовано {{count}} рядки в {{object}}.',
    imported_many: 'Імпортовано рядків у {{object}}: {{count}}.',
    imported_other: 'Імпортовано рядків у {{object}}: {{count}}.',
    importFrom: 'Імпортуйте справжні рядки з',
    into: 'у',
    opening: 'Відкриття…',
    importAction: 'Імпорт',
    dismiss: 'Сховати',
  },
  // `cloud:workspace-timezone-notice` — the Cloud welcome page's line naming the
  // timezone a workspace was seeded with at creation (objectui#11930). `{{zone}}`
  // is the seed, an IANA id printed verbatim.
  cloudWorkspaceTimezoneNotice: {
    seeded: 'Часовий пояс середовища задано як {{zone}} з вашого браузера, коли середовище створювалося. Можете змінити його в Налаштуваннях → Локалізація.',
  },
  // objectstack#30120 — the deployment notice: what a production deployment
  // keeps on its own disk because nobody set OS_DATABASE_URL, OS_AUTH_SECRET or
  // OS_SECRET_KEY, shown to administrators on the home page and at the top of
  // Setup's System Overview (`app-shell` `DeploymentNotice`). `{{file}}` is a
  // path on the server, printed verbatim. `copy.*` are comment lines of the
  // variables the copy button puts on the clipboard.
  deploymentNotice: {
    title: 'Цей сервер тримає ваші дані і секрети на власному диску',
    titleLow: 'Завершіть налаштування цього розгортання',
    intro: 'Ніхто не задав, де це промислове розгортання тримає їх. Вручіть налаштування нижче тому, хто обслуговує сервер, щоб заміна нічого не втратила.',
    finding: {
      databaseLocalFile: 'Ваші бізнес-дані — файл на цьому сервері ({{file}}). Заміна сервера або його диска втратить їх.',
      authSecretGenerated: 'Секрет входу згенеровано на цьому сервері. Якщо його втрачено, усі будуть виведені з системи.',
      dataKeyFile: 'Ключ, який шифрує збережені паролі й ключі API, — файл на цьому сервері ({{file}}). Якщо його втрачено, їх не можна буде читати.',
      fileStorageLocal: 'Завантажені файли тримаються на диску цього сервера.',
      emailNotConfigured: 'Службу електронної пошти не налаштовано, тому запрошення та скидання пароля не надсилаються електронною поштою.',
    },
    copy: {
      button: 'Копіювати налаштування',
      database: 'Ваша база даних, напр. postgres://user:pass@db-host:5432/app, або file:/шлях/на/збереженому/томі/app.db. Сьогодні дані лежать у {{file}}: перенесіть їх до перемикання.',
      carryOver: 'Перенесіть поточне значення: вміст {{file}}',
      newValue: 'Довге випадкове значення, однакове при кожному перезапуску, напр. вивід: openssl rand -hex 32',
    },
    copied: 'Скопійовано',
    hide: 'Сховати',
    hideNoAuditLog: 'Це розгортання не тримає журналу аудиту, тому це повідомлення не сховати.',
    hideFailed: 'Повідомлення не вдалося сховати. Спробуйте ще раз.',
    hiddenLine: 'Повідомлення розгортання сховано. Те, що воно стверджує, досі чинне.',
    showAgain: 'Показати знову',
  },
  // The AI HITL approval inbox (`@object-ui/plugin-chatbot`'s
  // `AiPendingActionsInbox`) — objectui#7173. Its four relative-time phrases
  // are NOT here: it borrows `detail.justNow` / `minutesAgo` / `hoursAgo` /
  // `daysAgo`, already translated in all ten packs, the way `ObjectGrid` and
  // `ObjectKanban` borrow `detail.recordDetail`. Distinct from
  // `approvalsInbox` above, which is the human approval-PROCESS inbox:
  // different surface, different feature, so no rows are shared with it.
  aiApprovals: {
    title: 'Затвердження ШІ',
    description: 'Дії, які запропонував ШІ-агент і які потребують огляду людиною перед виконанням.',
    tabPending: 'Очікування',
    tabDecided: "Розв'язані",
    tabAll: 'Усі',
    statusPending: 'Очікує',
    statusApproved: 'Затверджено',
    statusHeld: 'Чекає затвердження',
    statusExecuted: 'Виконано',
    statusFailed: 'Помилка',
    statusRejected: 'Відхилено',
    colTool: 'Інструмент',
    colAction: 'Дія',
    colObject: "Об'єкт",
    colStatus: 'Статус',
    colProposed: 'Запропоновано',
    colDecision: 'Рішення',
    emptyTitle: 'Немає дій у черзі',
    emptyDescription: "Щойно ШІ запропонує чутливу дію, вона з'явиться тут на огляд.",
    view: 'Переглянути',
    approve: 'Затвердити',
    reject: 'Відхилити',
    working: 'Працюємо…',
    approveAndExecute: 'Затвердити і виконати',
    outcomeApprove: 'Затвердження для {{id}}: {{message}}',
    outcomeReject: 'Відхилення для {{id}}: {{message}}',
    outcomeExecuteFailed: 'Помилка дії під час виконання',
    drawerFallbackTitle: 'Очікувана дія',
    drawerSubtitle: "Інструмент {{tool}} над {{object}}",
    fieldProposedBy: 'Запропонував',
    fieldDecidedBy: 'Рішення прийняв',
    fieldConversation: 'Розмова',
    fieldToolInput: 'Вхідні дані інструменту',
    fieldResult: 'Результат',
    fieldError: 'Помилка',
    fieldRejectionReason: 'Причина відхилення',
    rejectTitle: 'Відхилити цю дію?',
    rejectBody: 'Причину буде показано ШІ, щоб він скоригував свою наступну відповідь.',
    rejectPlaceholder: "Необов'язкова причина (напр. «Неправильний ідентифікатор запису — спершу підтвердьте з користувачем.»)",
  },
  aiModelStatus: {
    summary: 'Build / Ask використовує {{conversational}} ({{conversationalSource}}); структурні — {{structured}} ({{structuredSource}}).',
    summaryRouting: 'Політика маршрутизації: безкоштовні плани → {{free}}, платні → {{paid}}.',
    modelUnknown: 'невідомо',
    sourceUnknown: 'не звітував адаптер',
    rowConversational: 'Модель Build / Ask',
    rowStructured: 'Структурна (blueprint / seed)',
    rowReasoning: 'Зусилля роздумів',
    readFailed: 'Не вдалося прочитати діючу модель ШІ. Ця система може не вести службу ШІ, або у вас немає дозволу ai:read.',
    readFailedWithStatus: 'Не вдалося прочитати діючу модель ШІ (HTTP {{status}}). Ця система може не вести службу ШІ, або у вас немає дозволу ai:read.',
    overridesInEffect: 'Чинні перекриття: ',
    noOverrides: 'немає — працюють типові значення розгорнутого коду.',
    adapter: 'Адаптер: ',
    sourceCodeDefault: 'типове в коді (без перекриття середовищем)',
    sourceInherits: 'як у build/ask',
    sourcePinned: 'зафіксовано {{source}}',
  },
  // objectui#7254 — the AI copilot's tool cards. Three families, all of them
  // English-only until this landed while every other string on the same screen
  // was translated:
  //
  //   `tool.*`      — one entry per PLATFORM-PROVIDED tool name
  //                   (@objectstack/spec `PLATFORM_TOOLS_BY_PACKAGE`, the
  //                   closed registry those runtimes are conformance-tested
  //                   against). `humanizeToolName` looks each up as
  //                   `chatbot.tool.<tool_name>` and falls back to its English
  //                   title-caser for a custom / third-party tool, so a name
  //                   missing here is degraded, never broken. Every value, `en`
  //                   included, is a short sentence in the pack's language
  //                   saying what the step does (cloud#2927 Target 3, ruled
  //                   「同意」; objectui#12724): never the tool id, and never
  //                   the title-caser's output for it, which is how the step
  //                   reads for a tool the pack has no entry for.
  //                   `toolLabels-locale-parity-7481` holds both.
  //   `toolState.*` — the card-header badge + activity-chip vocabulary. ONE
  //                   set for both surfaces (they used to carry separate
  //                   tables and disagreed on casing).
  //   `build.*`    — the apply_blueprint BUILD PANEL's own copy (objectui#7388).
  //                   Everything else on that panel is fed by the host as an
  //                   already-translated prop; these strings were literals in
  //                   the component, so they stayed English in every language.
  //                   `building`/`built` interpolate `appFallback` when the
  //                   build has no app label, so each pack must keep BOTH
  //                   frames in the one case/gender that noun phrase is in.
  //                   `verifying`/`verifyStep`/`verified` are the post-apply
  //                   verification line and `unknownPhase` the warning for a
  //                   phase outside the spec's vocabulary (objectui#11988).
  //   `plan.*`      — the "N objects · N views · N dashboards" strip. Plural
  //                   FAMILIES: one slot per CLDR category the pack's language
  //                   selects (objectui#11432), plus the base key for a call
  //                   made without a count. `all-locales-key-parity.test.ts`
  //                   derives the required slots from `Intl.PluralRules`.
  //
  // objectui#7481 — five `tool.*` entries are NEWER than the registry above:
  // `get_authoring_rules` (cloud#1837), `load_tools`, `open_record`, `test_flow`
  // and `toggle_flow` are registered by cloud `service-ai-studio` but the pinned
  // `@objectstack/spec` snapshot does not list them yet. They are kept here on
  // purpose: a step label the user reads must not wait on a pin bump. When the
  // pin advances, `chatbotToolLabels-locale-parity-7481` starts checking them
  // against the registry instead of against its own hand-held list.
  chatbot: {
    // objectui#13461 — the composer's send button and the scroll-to-latest button.
    sendMessage: 'Надіслати повідомлення',
    scrollToBottom: 'Гортнути до найновішого повідомлення',
    // objectstack#32984 — a message typed while a reply is running waits above the composer.
    composer: {
      queued: 'Надішлеться, щойно поточна відповідь завершиться',
      queuedCancel: 'Скасувати',
    },
    answer: {
      showFull: 'Показати повну відповідь',
      collapse: 'Згорнути',
      expandTable: 'Розгорнути',
      exitExpandedTable: 'Закрити',
    },
    answerSource: {
      title: 'Як це обчислено',
      object: "Об'єкт",
      filter: 'Фільтр',
      allRecords: 'Усі записи',
      groupedBy: 'Згруповано за',
      aggregations: 'Агрегації',
      records: 'Записи',
      visibleToYou: 'Лише записи, які ви бачите',
    },
    tool: {
      aggregate_data: 'Агрегувати дані',
      get_record: 'Прочитати запис',
      query_data: 'Запитати дані',
      query_records: 'Знайти записи',
      read_package_doc: 'Прочитати посібник застосунку',
      search_knowledge: 'Пошук у базі знань',
      search_package_docs: 'Пошук у посібниках застосунку',
      visualize_data: 'Побудувати графік даних',
      add_field: 'Додати поле',
      apply_blueprint: 'Зібрати застосунок за планом',
      apply_edit: 'Застосувати зміну',
      create_metadata: 'Створити метадані',
      create_object: "Створити об'єкт",
      create_package: 'Створити пакет',
      create_record: 'Створити запис',
      create_seed: 'Згенерувати демодані',
      delete_field: 'Видалити поле',
      delete_package: 'Видалити пакет',
      describe_metadata: 'Переглянути метадані',
      describe_object: "Переглянути структуру об'єкта",
      get_active_package: 'Перевірити активний пакет',
      get_authoring_rules: 'Прочитати правила авторингу',
      get_metadata_schema: 'Прочитати формат метаданих',
      get_package: 'Переглянути пакет',
      get_record_history: 'Прочитати історію запису',
      list_metadata: 'Перелічити наявні метадані',
      list_objects: "Перелічити наявні об'єкти",
      list_packages: 'Перелічити наявні пакети',
      load_tools: 'Завантажити ще інструменти',
      modify_field: 'Змінити поле',
      open_record: 'Відкрити запис',
      propose_blueprint: 'Скласти план застосунку',
      remove_sample_data: 'Видалити демодані',
      set_active_package: 'Перемкнутися на цільовий пакет',
      suggest_builder: 'Запропонувати збирання з ШІ',
      test_flow: 'Протестувати потік',
      todo_write: 'Записати подальші перевірки',
      toggle_flow: 'Увімкнути або вимкнути потік',
      update_metadata: 'Оновити метадані',
      update_record: 'Змінити запис',
      validate_expression: 'Перевірити вираз',
      verify_build: 'Перевірити збирання',
    },
    toolState: {
      agentActivity: 'Активність агента',
      pending: 'Очікує',
      running: 'Виконується',
      awaitingApproval: 'Очікує затвердження',
      responded: 'Отримано відповідь',
      completed: 'Завершено',
      error: 'Помилка',
      denied: 'Відмовлено',
      failed: 'Завершилося помилкою',
    },
    phase: {
      build: 'Збирання',
      design: 'Проектування плану',
      stepCount: 'Кроків: {{count}}',
      stepCount_one: '{{count}} крок',
      stepCount_few: '{{count}} кроки',
      stepCount_many: 'Кроків: {{count}}',
      stepCount_other: 'Кроків: {{count}}',
      expand: 'Показати кроки',
      collapse: 'Сховати кроки',
    },
    plan: {
      countObjects: "{{count}} об'єктів",
      countObjects_one: "{{count}} об'єкт",
      countObjects_few: "{{count}} об'єкти",
      countObjects_many: "{{count}} об'єктів",
      countObjects_other: "{{count}} об'єктів",
      countViews: '{{count}} подань',
      countViews_one: '{{count}} подання',
      countViews_few: '{{count}} подання',
      countViews_many: '{{count}} подань',
      countViews_other: '{{count}} подань',
      countDashboards: '{{count}} дашбордів',
      countDashboards_one: '{{count}} дашборд',
      countDashboards_few: '{{count}} дашборди',
      countDashboards_many: '{{count}} дашбордів',
      countDashboards_other: '{{count}} дашбордів',
      countSeedData: 'демодані',
      extendTarget: 'Додаємо до наявного застосунку: {{app}}',
      awaitingConfirm: 'Чекає підтвердження',
      // objectstack#32984 — the plan card's build states.
      confirmed: 'Підтверджено',
      buildFailed: 'Не зібрано — нічого не створено',
      iterateOrNew: {
        question: 'Це перетинається з «{{app}}», застосунком, який у вас уже є. Продовжити його вдосконалювати або зібрати окремий застосунок?',
        questionUnnamed: 'Це перетинається із застосунком, який у вас уже є. Продовжити його вдосконалювати або зібрати окремий?',
        extend: 'Продовжуйте вдосконалювати «{{app}}»',
        buildNew: 'Зібрати окремий застосунок',
        replyHint: 'Дайте відповідь, який варіант.',
      },
      objectsAndFields: "Об'єкти та поля",
      views: 'Подання',
      suggestedField: 'запропоновано',
      suggestedFieldLegend: 'Поля з позначкою «{{mark}}» додав ШІ; ви їх не просили.',
      nameField: 'Назва: {{field}}',
    },
    build: {
      building: 'Збираємо {{app}}…',
      built: 'Зібрано {{app}}',
      builtAndLive: 'Зібрано і запущено · {{app}}',
      appFallback: 'ваш застосунок',
      addingSampleData: 'додаємо демодані',
      group: {
        object: "Об'єкти",
        view: 'Подання',
        dashboard: 'Дашборди',
        app: 'Застосунок',
        seed: 'Демодані',
        dataset: 'Набори даних',
        permission: 'Дозволи',
        other: 'Інше',
      },
      moreArtifacts: '+{{n}} ще',
      verifying: 'Перевіряємо зміну…',
      verifyStep: 'крок {{n}}',
      verified: 'Зміну перевірено',
      // objectstack#32984 — the build card's issues line, in the customer's words.
      issuesCount: '{{count}} до виправлення',
      issuesSummary: 'Деякі частини цього збирання потрібно виправити, доки воно не стане готове. Дайте відповідь «виправити проблеми», і асистент їх полагодить.',
      warningsSummary: 'Збирання готове, з кількома речами, варти уваги. Спитайте асистента, що це за речі, якщо хочете їх поліпшити.',
      issuesDetails: 'Технічні подробиці',
      // objectstack#32984 — the published draft badge's failed-item count, which was English in every locale.
      needsAttention: '{{count}} потребують уваги',
      needsAttention_one: '{{count}} потребує уваги',
      needsAttention_few: '{{count}} потребують уваги',
      needsAttention_many: '{{count}} потребують уваги',
      needsAttention_other: '{{count}} потребують уваги',
      unknownPhase: 'Невідома фаза збирання',
      nextStepsLead: 'Далі можете сказати: {{steps}}',
      nextStepQuote: '«{{step}}»',
      draftPosture: 'Подальші зміни зберігаються як чернетки; натисніть «Опублікувати» тут, у чаті, щоб пустити їх у систему.',
      checksPassed: 'Перевірки пройдено {{passed}}/{{total}}',
    },
    changes: {
      planTitle: 'План змін ({{count}})',
      planTitle_one: 'План змін ({{count}} зміна)',
      planTitle_few: 'План змін ({{count}} зміни)',
      planTitle_many: 'План змін ({{count}} змін)',
      planTitle_other: 'План змін ({{count}} змін)',
      saveDraft: 'Зберегти як чернетку',
      reviewAndPublish: 'Перегляньте зміни і опублікуйте',
      undo: 'Скасувати',
      undoWithOthers: 'Скасувати (і {{count}} інших чернеток)',
      undoWithOthers_one: 'Скасувати (і {{count}} інша чернетка)',
      undoWithOthers_few: 'Скасувати (і {{count}} інші чернетки)',
      undoWithOthers_many: 'Скасувати (і {{count}} інших чернеток)',
      undoWithOthers_other: 'Скасувати (і {{count}} інших чернеток)',
      undoConfirm: 'Скасування відкидає всі {{total}} неопубліковані чернетки цього пакета, зокрема {{count}}, що не належать до цієї зміни.',
      undoConfirm_one: 'Скасування відкидає всі {{total}} неопубліковані чернетки цього пакета, зокрема {{count}}, що не належить до цієї зміни.',
      undoConfirm_few: 'Скасування відкидає всі {{total}} неопубліковані чернетки цього пакета, зокрема {{count}}, що не належать до цієї зміни.',
      undoConfirm_many: 'Скасування відкидає всі {{total}} неопублікованих чернеток цього пакета, зокрема {{count}}, що не належать до цієї зміни.',
      undoConfirm_other: 'Скасування відкидає всі {{total}} неопублікованих чернеток цього пакета, зокрема {{count}}, що не належать до цієї зміни.',
      undoConfirmUnknown: 'Скасування відкидає всі неопубліковані чернетки цього пакета, а не лише цю зміну.',
      undoConfirmAction: 'Скасувати все',
      undoCancel: 'Скасувати',
      undoing: 'Скасування…',
      undone: 'Скасовано',
      undoFailed: 'Помилка скасування',
      kind: {
        field: 'Поле',
        object: "Об'єкт",
        view: 'Подання',
        dashboard: 'Дашборд',
        app: 'Застосунок',
        seed: 'Демодані',
        package: 'Пакет застосунку',
      },
    },
  },
  chatbotError: {
    title: 'Помилка відповіді',
    fallbackDetail: 'Щось пішло не так. Спробуйте ще раз.',
    details: 'Подробиці',
    hide: 'Сховати',
    retry: 'Спробувати знову',
  },
  chatbotQuota: {
    title: 'Потрібне оновлення плану',
    fallbackMessage: 'Вашу квоту ШІ вичерпано.',
    buyCredits: 'Придбайте пакет кредитів',
    upgradePlan: 'Оновіть план',
  },
  environment: {
    setUpProduction: 'Налаштуйте своє промислове середовище',
    // Capacity dialog (EnvironmentEntitlementDialog). It must read in the
    // user's language — cloud#959.
    entitlement: {
      productionLimitTitle: 'Промислове середовище у вас уже є',
      productionLimitBody:
        'Кожна організація має рівно одне промислове середовище. Створіть окрему організацію для іншого або напишіть нам про підприємницьку домовленість.',
      contactSalesCta: 'Пишіть нам',
    },
  },
  cloudConnection: {
    checking: 'Перевіряємо підключення…',
    retry: 'Спробуйте знову',
    errors: {
      expired: 'Строк запиту минув до схвалення. Почніть знову.',
      accessDenied: 'Запит на підключення відхилено. Почніть знову.',
      bindFailed: 'Не вдалося поєднати.',
      deviceCodeFailed: 'Не вдалося запитати код пристрою.',
    },
    waiting: {
      popupOpened: 'Схваліть підключення у вікні, що щойно відкрилося — ця сторінка оновлюється сама.',
      polling: 'Чекаємо на схвалення в консолі хмари…',
      openApproval: 'Відкрити сторінку схвалення',
      copy: 'Копіювати',
      copied: 'Скопійовано',
      codePrefilled: 'Код на сторінці схвалення вже заповнено.',
      openItHere: 'Вікно не з\'явилось? Відкрийте його тут',
      cancel: 'Скасувати',
    },
    bound: {
      title: 'Підключено до ObjectOS Cloud',
      runtime: 'Runtime',
      organization: 'Організація',
      approvedBy: 'Схвалив',
      runtimeId: 'Ідентифікатор runtime',
      environment: 'Середовище',
      since: 'Від',
      privatePackages: 'Приватні пакети вашої організації тепер з\'являються в Маркетплейсі під «Ваша організація».',
      disconnect: 'Відключити',
    },
    unbound: {
      title: 'Не підключено',
      body: 'Цей рантайм не підключений до control plane. «Підключити» відкриє ваш обліковий запис хмари в новому вікні, де один клік схвалює поєднання — у цій сторінці не вводиться жодних ідентифікаторів чи секретів.',
      connect: 'Підключити',
    },
  },
  // The rest of `marketplace.*` is the lazy `marketplace` namespace
  // (`../namespaces/marketplace/en.ts`), fetched when a marketplace page
  // mounts. What stays here is read by a page outside the marketplace route:
  // Studio's packages page draws a marketplace install's row through
  // `MarketplaceRowActions` and `MarketplaceNotLoaded` (the Not loaded badge
  // and reason, Uninstall with its confirmation and result), and an import's
  // refusal and protocol note through `useDependencyMissingText` and
  // `useProtocolCheckSkippedText`.
  marketplace: {
      installedAdditiveNote: "Видалення миттєво прибирає застосунок із працюючого ядра, разом з його наборами дозволів та їх наданнями, і вилучає кешований маніфест, щоб пакет не завантажувався при наступному старті. Записи, що зберігаються в його об'єктах, залишаються в базі даних.",
      // objectui#11645 — an install-local entry this runtime refused to load at
      // startup (the listing's `notLoaded` marker), read on Installed Apps.
      notLoaded: {
        badge: 'Не завантажено',
        protocolIncompatible: 'Цей рантайм не завантажив цей пакет: він орієнтований на протокол {{requiredRange}}, якого цей рантайм не підтримує.',
        otherReason: 'Цей рантайм не завантажив цей пакет ({{code}}).',
      },
    action: {
        uninstall: 'Видалити',
        uninstalling: 'Видалення…',
        details: 'Подробиці',
    },
    uninstall: {
        confirm: "Видалити {{manifestId}} v{{version}} з цього рантайма?\n\nЗастосунок одразу покине працююче ядро, разом з його наборами дозволів та їх наданнями, а його кешований маніфест буде вилучено. Записи, що зберігаються в його об'єктах, залишаються в базі даних.",
        confirmNotLoaded: 'Видалити {{manifestId}} v{{version}} з цього рантайма?\n\nКешований маніфест буде вилучено. Цей рантайм не завантажував пакет, тому нічого з нього не працює.',
        successInList: "Вилучено {{manifestId}}: застосунок покинув працююче ядро, разом з його наборами дозволів та їх наданнями. Записи, що зберігаються в його об'єктах, залишаються в базі даних.",
        successNotLoaded: 'Вилучено {{manifestId}}. Він не завантажувався, тому перезапуск не потрібен.',
    },
    install: {
        // ADR-0141 D2 — the install refusal DEPENDENCY_MISSING, one line per unmet entry.
        dependencyMissing: {
          heading: 'Установку відхилено: залежність, яку оголошує цей пакет, не задоволена в цьому середовищі, тому нічого не встановлено.',
          absent: 'Спершу встановіть {{dependency}} {{range}}.',
          outOfRange: 'Спершу встановіть {{dependency}} {{range}}. Встановлена версія {{installedVersion}}.',
          unreadableRange: '{{packageId}} оголошує {{dependency}} з діапазоном версій {{range}}, який не вдається прочитати. Виправте діапазон і опублікуйте пакет знову.',
          unreadableVersion: 'Встановіть випускну версію {{dependency}} у межах {{range}}. Встановлена версія {{installedVersion}} не у форматі MAJOR.MINOR.PATCH.',
          unreadableDeclaration: '{{packageId}} оголошує свої залежності у формі, яку встановлення не може прочитати. Запишіть їх у вигляді мапи від ідентифікатора пакета до діапазону версій і опублікуйте пакет знову.',
        },
        // objectstack#30326 — the install answer's data.protocolCheckSkipped: installed, the protocol range unchecked.
        protocolCheckSkipped: {
          noRange: '{{packageId}} не вказує, який протокол платформи підтримує, тому його встановлено під протокол {{protocolVersion}} без перевірки сумісності і він може не працювати на цій версії платформи. Збірка пакета, що оголошує підтримуваний протокол (engines.protocol), перевіряється при встановленні.',
          unparsedRange: '{{packageId}} вказує свій протокол платформи як {{requiredRange}}, який цей рантайм не може прочитати, тому його встановлено під протокол {{protocolVersion}} без перевірки сумісності і він може не працювати на цій версії платформи. Збірка пакета, що оголошує діапазон, який читає цей рантайм (engines.protocol), перевіряється при встановленні.',
        },
    },
  },
  approvalsInbox: {
    recordUnresolvable: 'Цей запис неможливо відкрити',
    loadMore: 'Завантажити ще',
    loadingMore: 'Завантаження…',
    loadedOf: 'Завантажено {{loaded}} із {{total}}',
    actEscalate: 'СЛА вивищено',
    systemSlaActor: 'Система (SLA)',
    reassignBtn: 'Перепризначити',
    reassignTitle: 'Передати це затвердження комусь іншому?',
    reassignBody: 'Ваш слот схвалювача перейде до когось, кого ви вибрали — цю людину сповіщать, і вона зможе діяти одразу.',
    reassignTo: 'Новий схвалювач',
    reassignToPlaceholder: 'Виберіть користувача або введіть електронну пошту / роль:<назва>',
    reassignSuccess: 'Передано {{to}}',
    requestInfoBtn: 'Запросити відомості',
    requestInfoTitle: 'Запитати в подателя додаткові відомості?',
    requestInfoBody: 'Запит залишається в очікуванні; подателя сповіщено, і він може відповісти в цій гілці.',
    requestInfoPlaceholder: 'Що вам потрібно від подателя?',
    requestInfoSent: 'Повернуто подателя за додатковими відомостями',
    remindBtn: 'Надіслати нагадування',
    remindSuccess: 'Нагадування надіслано схвалювачів: {{count}}',
    remindSuccess_one: 'Нагадування надіслано {{count}} схвалювачеві',
    remindSuccess_few: 'Нагадування надіслано {{count}} схвалювачам',
    remindSuccess_many: 'Нагадування надіслано схвалювачів: {{count}}',
    remindSuccess_other: 'Нагадування надіслано схвалювачів: {{count}}',
    remindThrottled: 'Нагадування нещодавно надсилали — спробуйте пізніше.',
    replyPlaceholder: 'Дайте відповідь у цьому запиті…',
    slaRemaining: 'До строку СЛА лишилось {{dur}}',
    slaOverdue: 'СЛА прострочено на {{dur}}',
    actReassign: 'Перепризначено',
    reassignFromTo: 'з {{from}} на {{to}}',
    actRemind: 'Нагадування надіслано',
    actRequestInfo: 'Запрошено додаткові відомості',
    actComment: 'Прокоментовано',
    stepProgress: 'Кроки затвердження',
    prevRequest: 'Попередній',
    nextRequest: 'Наступний',
    positionOf: 'Запит {{index}} із {{total}}',
    progressApprovals: 'Затвердження — {{got}} з {{need}}',
    progressGroups: 'Прогрес підписання — {{got}} з {{need}} груп',
    progressEligible: 'Придатних схвалювачів: {{count}}',
    progressEligible_one: '{{count}} придатний схвалювач',
    progressEligible_few: '{{count}} придатні схвалювачі',
    progressEligible_many: 'Придатних схвалювачів: {{count}}',
    progressEligible_other: 'Придатних схвалювачів: {{count}}',
    // The chip beside an approver who holds several of the step's slots; the
    // eligible-approver count beside the tally counts that person once.
    approverSlots: 'тримає слотів схвалювача: {{count}}',
    approverSlots_one: 'тримає {{count}} слот схвалювача',
    approverSlots_few: 'тримає {{count}} слоти схвалювача',
    approverSlots_many: 'тримає слотів схвалювача: {{count}}',
    approverSlots_other: 'тримає слотів схвалювача: {{count}}',
    progressBar: 'Прогрес рішення',
    declaredActions: 'Дії',
    decisionPanelOffRequestPage: 'Панель рішення затвердження працює лише на сторінках запитів на затвердження.',
    snapshotAsSubmitted: 'Як подано',
    attachmentChip: 'Вкладення',
    attachmentOpenFailed: 'Вкладення не вдалося відкрити — спробуйте ще раз',
    approveOneTitle: 'Затвердити «{{title}}»?',
    approveOneBody: 'Це затверджує запит під вашою ідентичністю. Щоб додати коментар чи вкладення, відкрийте натомість сам запит.',
    flowOrigin: 'Ініційовано потоком',
    submittedByYou: 'Це подали ви',
    sortBy: 'Сортування',
    sortRecent: 'Від нових до старих',
    sortOldest: 'Від старих до нових',
    sortAmount: 'Сума (від більшої до меншої)',
    quickPhrase1: 'Затверджено — вимоги виконано.',
    quickPhrase2: 'Затверджено з умовами — будь ласка, наглядайте за виконанням.',
    quickPhrase3: 'Додайте, будь ласка, підтримувальні матеріали і подайте знову.',
    title: 'Вхідні запити на затвердження',
    subtitle: 'Переглядайте запити на затвердження і вирішуйте їх.',
    refresh: 'Оновити',
    tabMyPending: 'Мої очікувані',
    tabSubmitted: 'Подані мною',
    tabAll: 'Усі',
    searchPlaceholder: 'Шукати запис, процес, подателя…',
    clearSearch: 'Очистити пошук',
    statusFilter: 'Статус',
    allStatuses: 'Усі статуси',
    processFilter: 'Процес',
    allProcesses: 'Усі процеси',
    objectFilter: "Об'єкт",
    allObjects: 'Усі об\'єкти',
    filterCount: '{{shown}} із {{total}}',
    selected: 'вибрано',
    actionableCount: '({{count}} готових до дії)',
    actionableCount_one: '({{count}} готовий до дії)',
    actionableCount_few: '({{count}} готові до дії)',
    actionableCount_many: '({{count}} готових до дії)',
    actionableCount_other: '({{count}} готових до дії)',
    selectAll: 'Вибрати все',
    selectRow: 'Вибрати запит',
    colRequest: 'Запит',
    colRecord: 'Запис',
    colRequester: 'Податель',
    colStatus: 'Статус',
    colWaiting: 'Подано',
    colActions: 'Дії',
    statusPending: 'Очікує',
    statusApproved: 'Затверджено',
    statusRejected: 'Відхилено',
    statusRecalled: 'Відкликано',
    statusReturned: 'Повернено на доопрацювання',
    sendBackBtn: 'Повернути назад',
    sendBackTitle: 'Повернути цей запит на доопрацювання?',
    sendBackBody: 'Цей раунд завершується і запис розблоковується, щоб податель виправив дані. Коли він подасть знову, для всіх схвалювачів відкриється новий раунд затвердження.',
    sendBackPlaceholder: 'Що потрібно виправити, щоб це можна було затвердити?',
    sendBackSuccess: 'Повернено на доопрацювання — податель тепер може змінити і подати знову',
    sendBackAutoRejected: 'Досягнуто ліміту раундів — запит відхилено автоматично',
    actRevise: 'Повернено на доопрацювання',
    actResubmit: 'Подано знову',
    roundChip: 'Раунд {{n}}',
    returnedHint: 'Схвалювач повернув це вам. Запис розблоковано — виправте дані, потім подайте знову, щоб розпочати новий раунд затвердження.',
    resubmitBtn: 'Подати знову',
    resubmitting: 'Подання…',
    resubmitSuccess: 'Подано знову — відкрився новий раунд затвердження',
    resubmitPlaceholder: 'Що ви змінили?',
    editRecordBtn: 'Змінити запис',
    abandonTitle: 'Покинути цю ревізію?',
    abandonBody: 'Це відкликає запит замість повторного подання. Затвердження на цьому завершується.',
    emptyTitle: 'Немає запитів',
    emptyPending: 'У вас усе розібрано — на вас нічого не чекає.',
    emptyOther: 'Тут поки порожньо.',
    emptyViewAll: 'Перегляньте всі запити',
    waitingOnOthers: 'Інших схвалювачів чекають запити: {{count}}',
    waitingOnOthers_one: 'Інших схвалювачів чекає {{count}} запит',
    waitingOnOthers_few: 'Інших схвалювачів чекають {{count}} запити',
    waitingOnOthers_many: 'Інших схвалювачів чекають запити: {{count}}',
    waitingOnOthers_other: 'Інших схвалювачів чекають запити: {{count}}',
    noMatches: 'Збігів для поточних фільтрів немає.',
    keyboardHint: 'Клавіатура: j/k — переміщення · Enter — відкрити · x — вибрати · a — затвердити · r — відхилити',
    drawerTitle: 'Запит на затвердження',
    submittedAgo: 'Подано {{when}}',
    completedAt: 'Завершено {{when}}',
    waitingOn: 'Чекає на',
    approverNameSeparator: ', ',
    approverUnstaffed: '{{seat}} (без чинного держателя)',
    history: 'Події',
    noActions: 'Дій ще немає.',
    actSubmit: 'Подано',
    actApprove: 'Затверджено',
    actReject: 'Відхилено',
    actRecall: 'Відкликано',
    overrideActionLabel: 'Перекрити {{action}}',
    overrideNotice: 'Ви не тримаєте слота схвалювача на цьому кроці. Продовження використовує ваше адміністраторське перекриття: воно завершує крок негайно, обходячи будь-якого схвалювача, який ще не діяв. Рішення записується як адміністраторське перекриття.',
    overrideNoticeWho: 'Ви не тримаєте слота схвалювача на цьому кроці. Продовження використовує ваше адміністраторське перекриття: воно завершує крок негайно і обходить схвалювачів, які ще не діяли, — {{who}}. Рішення записується як адміністраторське перекриття.',
    overrideReassignNotice: 'Ви не тримаєте слота схвалювача на цьому кроці. Продовження використовує ваше адміністраторське перекриття: крок переходить до нового схвалювача, якого ви вибрали, замінюючи будь-якого схвалювача, який ще не діяв. Запит залишається в очікуванні і чекає на нового схвалювача. Перепризначення записується як адміністраторське перекриття.',
    overrideReassignNoticeWho: 'Ви не тримаєте слота схвалювача на цьому кроці. Продовження використовує ваше адміністраторське перекриття: крок переходить до нового схвалювача, якого ви вибрали, замінюючи схвалювачів, які ще не діяли, — {{who}}. Запит залишається в очікуванні і чекає на нового схвалювача. Перепризначення записується як адміністраторське перекриття.',
    overrideRecallNotice: 'Цей запит ви не подали. Продовження використовує ваше адміністраторське перекриття: запит відкликається, будь-який схвалювач, який ще не діяв, більше не може діяти над ним, і запис розблоковується.',
    overrideRecallNoticeWho: 'Цей запит ви не подали. Продовження використовує ваше адміністраторське перекриття: запит відкликається, запис розблоковується, а схвалювачі, які ще не діяли, більше не можуть діяти у ньому — {{who}}.',
    viaOverrideChip: 'Адміністраторське перекриття',
    viaOverrideHint: 'Діяч не тримав слота схвалювача на цьому кроці — допущено через шлях адміністраторського перекриття.',
    overrideActor: 'Діяти від іншої ідентичності (адмін)',
    actor: 'Діяч',
    auto: 'Авто',
    overrideHint: 'напр. роль:sales_manager. Залишіть порожнім, щоб використати автоматично визначену ідентичність.',
    comment: 'Коментар (необов\'язково)',
    approve: 'Затвердити',
    approving: 'Затвердження…',
    reject: 'Відхилити',
    rejecting: 'Відхилення…',
    recall: 'Відкликати',
    recalling: 'Відкликання…',
    cancel: 'Скасувати',
    clear: 'Очистити',
    approveN: 'Затвердити {{count}}',
    rejectN: 'Відхилити {{count}}',
    bulkApproveTitle: 'Затвердити запитів: {{count}}?',
    bulkApproveTitle_one: 'Затвердити {{count}} запит?',
    bulkApproveTitle_few: 'Затвердити {{count}} запити?',
    bulkApproveTitle_many: 'Затвердити запитів: {{count}}?',
    bulkApproveTitle_other: 'Затвердити запитів: {{count}}?',
    bulkApproveBody: 'Кожен запит затверджується під вашою ідентичністю, і його потік продовжується гілкою затвердження.',
    bulkRejectTitle: 'Відхилити запитів: {{count}}?',
    bulkRejectTitle_one: 'Відхилити {{count}} запит?',
    bulkRejectTitle_few: 'Відхилити {{count}} запити?',
    bulkRejectTitle_many: 'Відхилити запитів: {{count}}?',
    bulkRejectTitle_other: 'Відхилити запитів: {{count}}?',
    bulkRejectBody: 'Це відхиляє вибрані запити і сповіщає їхніх подателів.',
    bulkApproved: 'Затверджено запитів: {{count}}',
    bulkApproved_one: 'Затверджено {{count}} запит',
    bulkApproved_few: 'Затверджено {{count}} запити',
    bulkApproved_many: 'Затверджено запитів: {{count}}',
    bulkApproved_other: 'Затверджено запитів: {{count}}',
    bulkRejected: 'Відхилено запитів: {{count}}',
    bulkRejected_one: 'Відхилено {{count}} запит',
    bulkRejected_few: 'Відхилено {{count}} запити',
    bulkRejected_many: 'Відхилено запитів: {{count}}',
    bulkRejected_other: 'Відхилено запитів: {{count}}',
    bulkPartial: '{{ok}} успішно, {{fail}} з помилкою: {{which}}',
    rejectOneTitle: 'Відхилити «{{title}}»?',
    rejectOneBody: 'Це відхиляє запит і сповіщає подателя.',
    rejectTitle: 'Відхилити цей запит?',
    rejectBody: 'Це позначає запит як відхилений і сповіщає подателя.',
    recallTitle: 'Відкликати цей запит?',
    recallBody: 'Це відкликає ваш запит. Схвалювачі вже не можуть діяти над ним, і запис розблоковується.',
    inlineApproved: 'Затверджено «{{title}}»',
    inlineRejected: 'Відхилено «{{title}}»',
    approvedFinal: 'Затверджено',
    approvedWaiting: 'Затверджено — чекає на решту схвалювачів',
    rejectedToast: 'Відхилено',
    recalledToast: 'Запит відкликано',
    whyDisabled: 'Діяти над цим запитом можуть лише призначені схвалювачі. Він чекає на: {{who}}.',
    whyDisabledSubmitter: 'Цей запит подали ви, тому можете його відкликати — але затверджувати або відхиляти можуть лише призначені схвалювачі.',
    noActor: 'Неможливо визначити діючу ідентичність',
    actionFailed: 'Помилка дії',
    loadFailed: 'Не вдалося завантажити запит',
    recallUnavailable: 'Відкликання недоступне в цьому розгортанні.',
    requestGone: 'Цього запиту вже не існує. Оновіть список.',
    notAllowed: 'Вам не дозволено виконувати цю дію.',
    alreadyDecided: 'Цей запит уже вирішено. Оновіть список.',
    justNow: 'щойно',
    minutesAgo: '{{count}} хв тому',
    minutesAgo_one: '{{count}} хв тому',
    minutesAgo_few: '{{count}} хв тому',
    minutesAgo_many: '{{count}} хв тому',
    minutesAgo_other: '{{count}} хв тому',
    hoursAgo: '{{count}} год тому',
    hoursAgo_one: '{{count}} год тому',
    hoursAgo_few: '{{count}} год тому',
    hoursAgo_many: '{{count}} год тому',
    hoursAgo_other: '{{count}} год тому',
    daysAgo: '{{count}} д тому',
    daysAgo_one: '{{count}} д тому',
    daysAgo_few: '{{count}} д тому',
    daysAgo_many: '{{count}} д тому',
    daysAgo_other: '{{count}} д тому',
  },
  filterBuilder: {
    currency: 'Валюта',
    currencyNeedsAnd: 'Суму порівнюють у вибраній валюті лише тоді, коли мають виконатися всі умови (AND).',
    where: 'Де',
    and: 'ТА',
    or: 'АБО',
    clearAll: 'Очистити все',
    selectField: 'Виберіть поле',
    operator: 'Оператор',
    selectValue: 'Виберіть значення',
    value: 'Значення',
    addFilter: 'Додати фільтр',
    removeCondition: 'Видалити умову',
    trueLabel: 'Істина',
    falseLabel: 'Хибність',
    noResults: 'Немає результатів',
    searchField: 'Шукати {{label}}…',
    enterId: 'Уведіть ідентифікатор {{label}}',
    addValue: 'Уведіть значення, натисніть Enter',
    removeValue: 'Видалити {{value}}',
    rangeStart: 'Від',
    rangeEnd: 'До',
    operators: {
      equals: 'Дорівнює',
      not_equals: 'Не дорівнює',
      contains: 'Містить',
      icontains: 'Містить (без урахування регістру)',
      not_contains: 'Не містить',
      is_empty: 'Порожній',
      is_not_empty: 'Не порожній',
      greater_than: 'Більше ніж',
      less_than: 'Менше ніж',
      greater_than_or_equal: 'Більше або дорівнює',
      less_than_or_equal: 'Менше або дорівнює',
      before: 'До',
      after: 'Після',
      between: 'Поміж',
      in: 'У',
      not_in: 'Не в',
      starts_with: 'Починається на',
      ends_with: 'Закінчується на',
      is_null: 'Є null',
      is_not_null: 'Не null',
      exists: 'Задано',
      notExists: 'Не задано',
    },
    emptyCheckHint: {
      text: '"{{isEmpty}}" також відповідає порожньому тексту; "{{isNull}}" відповідає лише відсутньому значенню.',
      list: '"{{isEmpty}}" також відповідає порожньому списку; "{{isNull}}" відповідає лише відсутньому значенню.',
    },
  },
  sortBuilder: {
    sortBy: 'Сортувати за',
    thenBy: 'Потім за',
    selectField: 'Виберіть поле',
    ascending: 'А → Я',
    descending: 'Я → А',
    oldestFirst: 'Старіші → новіші',
    newestFirst: 'Новіші → старіші',
    addSort: 'Додати сортування',
    removeSort: 'Видалити сортування',
  },
  // `@object-ui/collaboration` — the comment thread's copy (objectstack#5506,
  // objectui#3424). The package used to carry every one of these as an English
  // literal, so a zh session read a Chinese console with an English comment
  // thread inside it. `COLLAB_DEFAULT_TRANSLATIONS` in that package mirrors
  // this namespace verbatim as its no-provider fallback; keep the two in step.
  //
  // The generic action words (Save / Cancel / Edit / Delete) are NOT repeated
  // here — the thread reads them from `common`.
  collaboration: {
    // Thread header. An i18next count family (objectui#11445): the component
    // passes `count` and i18next picks the slot each pack's CLDR rules select.
    commentCount: 'Коментарів: {{count}}',
    commentCount_one: '{{count}} коментар',
    commentCount_few: '{{count}} коментарі',
    commentCount_many: 'Коментарів: {{count}}',
    commentCount_other: 'Коментарів: {{count}}',
    // Appended to the count, separator included, so a translator owns the
    // whole phrase rather than inheriting an English-shaped ` · ` glue.
    resolvedSuffix: ' · Вирішено',
    sortComments: 'Сортувати коментарі',
    sortOldest: 'Старіші',
    sortNewest: 'Новіші',
    resolve: 'Вирішити',
    reopen: 'Поновити обговорення',
    // Relative comment age. Word-level entries only — the component keeps its
    // existing minute/hour/day buckets and no date library was introduced.
    justNow: 'щойно',
    minutesAgo: '{{count}} хв тому',
    minutesAgo_one: '{{count}} хв тому',
    minutesAgo_few: '{{count}} хв тому',
    minutesAgo_many: '{{count}} хв тому',
    minutesAgo_other: '{{count}} хв тому',
    hoursAgo: '{{count}} год тому',
    hoursAgo_one: '{{count}} год тому',
    hoursAgo_few: '{{count}} год тому',
    hoursAgo_many: '{{count}} год тому',
    hoursAgo_other: '{{count}} год тому',
    daysAgo: '{{count}} д тому',
    daysAgo_one: '{{count}} д тому',
    daysAgo_few: '{{count}} д тому',
    daysAgo_many: '{{count}} д тому',
    daysAgo_other: '{{count}} д тому',
    edited: '(змінено)',
    // Reaction-chip tooltip. A DEDICATED pair rather than `detail.reactionCount`:
    // that one interpolates `{{emoji}}`, and here the emoji is the chip's
    // visible label with nothing to hand the placeholder.
    reactionCount: 'Реакцій: {{count}}',
    reactionCount_one: 'Реакцій: {{count}}',
    reactionCount_few: 'Реакцій: {{count}}',
    reactionCount_many: 'Реакцій: {{count}}',
    reactionCount_other: 'Реакцій: {{count}}',
    addThumbsUp: 'Додати палець угору',
    reply: 'Відповісти',
    // Accessible names for the three emoji-only controls (objectui#3441).
    // A `button`'s accessible name is computed from its CONTENT before `title`
    // is ever consulted, so '👍' / '❤️' / '✕' named themselves — these keys are
    // wired as `aria-label`, which overrides content.
    //
    // `reactThumbsUp` stays distinct from `addThumbsUp` above even though both
    // dispatch the same reaction today: that one names the reaction-bar `+`
    // picker, and the two render side by side on a comment that already has
    // reactions.
    reactThumbsUp: 'Реакція: палець угору',
    reactHeart: 'Реакція: серце',
    // Not `common.cancel`: an accessible name has to say what is cancelled.
    // Only the reply TARGET is dropped — the composer keeps whatever was typed.
    cancelReply: 'Скасувати відповідь',
    replyingTo: 'Відповідь {{name}}…',
    // The no-author-found half of the reply banner, as a whole sentence:
    // languages that inflect around the addressee cannot build it by
    // substituting a noun into the `{{name}}` form.
    replyingToComment: 'Відповідь на коментар…',
    commentPlaceholder: 'Додайте коментар… (згадайте через @)',
    send: 'Надіслати',
    // Presence avatar stack (objectui#3440). `presentUserCount*` is the avatar
    // group's `aria-label` — with only images and initials inside, that label
    // IS the control for a screen reader. Count families, like `commentCount`
    // above.
    presentUserCount: 'Присутніх користувачів: {{count}}',
    presentUserCount_one: '{{count}} присутній користувач',
    presentUserCount_few: '{{count}} присутні користувачі',
    presentUserCount_many: 'Присутніх користувачів: {{count}}',
    presentUserCount_other: 'Присутніх користувачів: {{count}}',
    moreUserCount: 'Ще користувачів: {{count}}',
    moreUserCount_one: 'Ще {{count}} користувач',
    moreUserCount_few: 'Ще {{count}} користувачі',
    moreUserCount_many: 'Ще користувачів: {{count}}',
    moreUserCount_other: 'Ще користувачів: {{count}}',
    // Avatar tooltip. The parentheses are part of the translation, spacing
    // included, so the CJK packs can drop the space English puts before `(`.
    userStatusTitle: '{{name}} ({{status}})',
    // Display copy for the `PresenceUser['status']` enum. The enum value
    // itself stays raw data — it is translated at the render exit only, and a
    // status outside the union falls back to the raw string.
    statusActive: 'активний',
    statusIdle: 'бездіє',
    statusAway: 'відійшов',
  },
  // Multi-step form (plugin-form's WizardForm). `{{fields}}` is a
  // comma-joined, already-truncated label list built at the call site.
  wizard: {
    missingRequired: "Заповніть обов'язкові поля: {{fields}}",
    // The wizard's footer and step chrome (objectui#10999). The generic verbs
    // it shows come from `common.cancel`, `common.next`, `form.create`,
    // `form.update` and `form.stepOf`; these five are the wizard's own.
    // The Previous-step button. Not `common.back`: some packs say a wizard's
    // step back with a different word from a page's back (zh reads "previous
    // step" here and "return" for `common.back`), and the wizard spelling is
    // the one `grid.import.back` and `grid.bulk.back` already use.
    back: 'Назад',
    // The final button while the record is being written.
    submitting: 'Надсилання…',
    // The step indicator's label for a step that declares no `label`.
    // `{{n}}` is the 1-based step number.
    stepFallback: 'Крок {{n}}',
    // The step indicator's `aria-label` — what a screen reader calls the list
    // of steps.
    progressLabel: 'Прогрес',
    // Shown in place of the fields on a step that has none (a final review
    // step is the usual case).
    emptyStep: 'Для цього кроку не налаштовано жодного поля',
  },
  // The screen-flow runner dialog (`app-shell/views/FlowRunner`) — the modal a
  // `type: 'flow'` action opens when its run pauses at a `screen` node.
  //
  // What is deliberately NOT here: the sentence a refused resume shows. That is
  // the ADR-0112 envelope's own `error.message`, prose the automation engine
  // composed for a human ("Node 'create_quote' failed: … at most 2 decimal
  // places"), so it has no fixed catalogue to key against and is passed through
  // untranslated — the same division `appManagement` states above. The runner
  // borrows `common.{loading,cancel,close,submit}` for its chrome and
  // `validation.required` for the pre-submit check, drawn under each missing
  // field — the same message the record form draws there.
  flowRunner: {
    // Fallback dialog title, used only when the `screen` node declares none.
    title: 'Вхідні дані',
    submitting: 'Надсилання…',
    // The submit label of an `object-form` step: it saves a record AND advances
    // the run, so it is not the plain `common.submit`.
    saveAndContinue: 'Зберегти і продовжити',
    // A multi-screen wizard advanced to the next step (not the end of the run).
    nextStep: 'Збережено — наступний крок',
    // Terminal success, used only when the flow declares no `successMessage`
    // of its own.
    completed: 'Потік «{{flow}}» завершено',
  },
  // Console › System › Applications (objectui#4307). The page's OWN chrome —
  // headings, controls, badges and the frames of its toasts.
  //
  // What is deliberately NOT here: the server's refusal text. Each failure
  // toast is a template with a `{{reason}}` hole, and what fills that hole is
  // whatever `PUT/DELETE /api/v1/meta/app/:name` answered (`forbidden:
  // manage_metadata required`, a 5xx body, an offline message), passed through
  // untranslated. The server does not promise a fixed catalogue of sentences,
  // so there is nothing here for those to key against — see PR #4300 and the
  // page's own header.
  appManagement: {
    title: 'Застосунки',
    subtitle: 'Керуйте всіма налаштованими застосунками',
    newApp: 'Новий застосунок',
    // `searchLabel` is the input's sr-only `<label>`; `searchPlaceholder` is
    // what a sighted user reads. Both, because a placeholder is not a label.
    searchLabel: 'Пошук застосунків',
    searchPlaceholder: 'Шукати застосунки…',
    selectedCount: 'Вибрано: {{n}}',
    // The two bulk buttons. Bare verbs — the selection badge beside them is
    // what says how many rows they act on.
    bulkEnable: 'Увімкнути',
    bulkDisable: 'Вимкнути',
    selectAll: 'Вибрати все ({{n}})',
    empty: 'Застосунків не знайдено.',
    defaultBadge: 'Типовий',
    active: 'Активний',
    inactive: 'Неактивний',
    // Row controls. Each is a pair: the `title` tooltip names the ACTION, the
    // `aria-label` names the action AND its target, because a screen reader
    // reaching an icon button has no row context to borrow from.
    selectApp: 'Вибрати {{name}}',
    openApp: 'Відкрити застосунок',
    openAppNamed: 'Відкрити {{name}}',
    editApp: 'Змінити застосунок',
    editAppNamed: 'Змінити {{name}}',
    editWithAi: 'Змінити з ШІ',
    editWithAiNamed: 'Змінити {{name}} з ШІ',
    enableApp: 'Увімкнути застосунок',
    disableApp: 'Вимкнути застосунок',
    enableAppNamed: 'Увімкнути {{name}}',
    disableAppNamed: 'Вимкнути {{name}}',
    setDefault: 'Зробити типовим',
    setDefaultNamed: 'Зробити {{name}} типовим',
    // The disabled star's reason (its tooltip and accessible description)
    // when the app already is the default.
    alreadyDefault: 'Вже є типовим застосунком',
    deleteApp: 'Видалити застосунок',
    deleteAppNamed: 'Видалити {{name}}',
    // Delete is a two-click control: the first click arms it and the label
    // becomes the confirmation prompt.
    confirmDelete: 'Натисніть ще раз, щоб підтвердити видалення',
    confirmDeleteNamed: 'Підтвердьте видалення {{name}}',
    toast: {
      noClient: 'Не вдається дістатися служби метаданих',
      // What `reason()` says when the failure carried no message at all. The
      // ONE localized part of an otherwise verbatim server string.
      unknownError: 'невідома помилка',
      appEnabled: '{{name}} увімкнено',
      appDisabled: '{{name}} вимкнено',
      toggleFailed: 'Не вдалося переключити стан застосунку: {{reason}}',
      setDefaultDone: '{{name}} зроблено типовим',
      setDefaultFailed: 'Не вдалося зробити застосунок типовим: {{reason}}',
      appDeleted: '{{name}} видалено',
      deleteFailed: 'Не вдалося видалити застосунок: {{reason}}',
      // A `reset: false` answer: no customization row existed, so nothing was
      // removed. `{{reason}}` is the server's own sentence, passed through raw.
      nothingToDelete: 'Для {{name}} нема чого видаляти: {{reason}}',
      // `{{reason}}` above when that answer carried no sentence of its own.
      alreadyAtDefault: 'він уже в типовому стані свого пакета',
      // `{{n}}` is the count that actually LANDED, not the selection size — a
      // bulk toggle is N independent writes with no transaction behind them.
      bulkEnabled: 'Увімкнено застосунків: {{n}}',
      bulkDisabled: 'Вимкнено застосунків: {{n}}',
      bulkFailed: 'Помилка для {{n}}: {{details}}',
      // One entry of `{{details}}`. The bracket pair and the space before it
      // are part of the translation, so the CJK packs can set their own — the
      // same reason `detail.userStatusTitle` is keyed rather than composed.
      bulkFailureEntry: '{{name}} ({{reason}})',
      // Separator between those entries. Per-locale because list punctuation
      // is a locale property, not a code constant — `validation.
      // formInvalidJoiner` is the same key for the same past defect.
      bulkFailureJoiner: '; ',
      bulkOperationFailed: 'Масова операція завершилася помилкою: {{reason}}',
    },
  },
  // objectui#6301 — Setup › Packaged actions (ADR-0126 §7.4, §8 item 2): the
  // operational surface for the actions an installed package ships. Authoring
  // stays in Studio, so this group has no editing vocabulary at all; it is
  // on/off and the states that produces. The flows half of the page (its list
  // and its clone dialog) retired into Studio's Automations pillar (ADR-0146
  // D11), and its keys left every pack with it.
  //
  // ⛔ No drift or ancestry wording anywhere in this group (ADR-0126 §9). There
  // is deliberately no "customized", no "based on v3", no "out of date" — the
  // platform does not track that lineage, and a translatable string for it is
  // the cheapest way for the surface to grow one.
  //
  // ⛔ Server refusals are NOT in this group either. They arrive as
  // server-authored prose and are rendered verbatim; the `*Failed*` keys below
  // are the last-resort fallbacks for a response that carried no message at all.
  packagedAutomation: {
    refresh: 'Оновити',
    actionsHeading: 'Дії з пакетів',
    colActivation: 'Активація',
    on: 'Увімкнено',
    off: 'Вимкнено',
    cancel: 'Скасувати',
    // Two keys per action, not one: the response arm has an HTTP status to
    // name and the transport-exception arm does not, and a single key cannot
    // carry a hole only half its call sites can fill.
    toggleFailedHttp: 'Не вдалося змінити активацію (HTTP {{status}}).',
    toggleFailed: 'Не вдалося змінити активацію.',

    // ── Packaged ACTIONS section (ADR-0126 §8 item 2, ruling 3) ────────────
    // ⛔ No clone key here on purpose: the action-clone half is unchartered,
    // and a string is the cheapest way for an unchartered surface to appear.
    actionsSubtitle:
      'Дії, які постачають встановлені пакети. Вимкніть одну для цього розгортання — і вона перестане працювати всюди, де пропонується. Авторинг власної дії поруч лишається відкритим у Studio.',
    colAction: 'Дія',
    colObject: "Об'єкт",
    // The object is part of the accessible name because it is part of the
    // identity — two objects may declare the same action name.
    actionToggleLabel: "Активація для {{label}} над {{object}}",
    actionsEmptyTitle: 'Немає дій з пакетів',
    actionsEmptyBody:
      'Жоден встановлений пакет не оголошує дію на цьому розгортанні. Дії, які ви авторуєте самі, живуть у Studio.',
    actionsLoadFailed: 'Не вдалося завантажити дії з пакетів.',
    // The toast after a switch the server accepted, and
    // the confirm a packaged action's switch-off asks first (objectstack#27521).
    switchedOn: "«{{label}}» увімкнено.",
    switchedOff: "«{{label}}» вимкнено для цього розгортання.",
    actionOffTitle: 'Вимкнути «{{label}}»?',
    actionOffBody: 'Вона перестане працювати всюди, де пропонується на цьому розгортанні, для кожного користувача, доки її не ввімкнуть знову.',
    actionOffConfirm: 'Вимкнути',
  },
  // Setup → Integrations → Connector credentials, and the credential step
  // after a marketplace install (ruling A on objectstack#27230).
  connectorCredentials: {
    title: "Дані доступу з'єднувачів",
    subtitle: "Дані доступу, потрібні з'єднувачам ваших встановлених застосунків. Значення зберігається зашифрованим і більше ніколи не показується; залишіть поле порожнім, щоб зберегти поточне.",
    refresh: 'Оновити',
    dismiss: 'Сховати',
    colCredential: 'Дані доступу',
    colStatus: 'Статус',
    colLastChanged: 'Востаннє змінено',
    colValue: 'Значення',
    statusSet: 'Задано',
    statusMissing: 'Відсутні',
    statusRejected: 'Відхилені',
    rejectedReason: 'Отримувач відхилив їх: {{reason}}',
    undeclared: 'Більше жоден встановлений застосунок їх не оголошує.',
    sourceEnv: 'З середовища сервера',
    sourceVault: "Із розв'язувача даних доступу хоста",
    envReadOnly: 'Постачається змінною середовища сервера з тією самою назвою, яка має пріоритет. Змініть її на сервері.',
    changedBy: '{{at}} — {{user}}',
    verifiedAt: 'Останнього разу працювало {{at}}',
    placeholderSet: 'Уведіть значення',
    placeholderReplace: 'Уведіть нове значення, щоб замінити його',
    valueLabel: 'Нове значення для {{ref}}',
    save: 'Зберегти',
    saving: 'Збереження',
    saved: "Збережено {{ref}}. З'єднувачі, які ним користуються, підключаться з ним зараз.",
    clear: 'Очистити',
    cleared: 'Очищено {{ref}}.',
    clearTitle: 'Очистити {{ref}}?',
    clearBody: "Збережене значення вилучається, і кожен з'єднувач, який ним користується, перестане працювати, доки значення не зададуть знову.",
    clearConfirm: 'Очистити дані доступу',
    cancel: 'Скасувати',
    notServedTitle: "Цей сервер не керує даними доступу з'єднувачів",
    notServedBody: "У нього немає маршрутів даних доступу з'єднувачів. Задайте кожні дані доступу як змінну середовища сервера з тією самою назвою або оновіть сервер.",
    unavailableTitle: "Дані доступу з'єднувачів тут не керуються",
    loadFailed: "Не вдалося завантажити дані доступу з'єднувачів.",
    retry: 'Спробуйте знову',
    emptyTitle: "Немає даних доступу з'єднувачів",
    emptyBody: "Ні один встановлений застосунок не має з'єднувача, якому потрібні дані доступу.",
    stepTitle: 'Дані доступу',
    stepIntro: "З'єднувачі цього застосунку потребують цих даних доступу. Уведіть кожні зараз або пропустіть і задайте пізніше.",
    skip: 'Пропустити поки що',
    skippedTitle: 'Поки пропущено',
    skippedBody: "З'єднувачі, які ними користуються, залишаються відключеними, доки кожні не зададуть.",
    openPage: "Задайте їх у даних доступу з'єднувачів",
    connectionsHint: "З'єднувач, який входить до свого постачальника через OAuth, підключається в",
    connectionsLink: "Підключення з'єднувачів",
  },
  // Setup → Integrations: Connector connections (ADR-0143 D5).
  connectorConnections: {
    title: "Підключення з'єднувачів",
    subtitle: "Увійдіть один раз до кожного постачальника, до якого звертаються ваші з'єднувачі від імені цієї організації. Платформа сама поновлює доступ; підключіться знову, коли постачальник перестане приймати надання.",
    refresh: 'Оновити',
    dismiss: 'Сховати',
    colConnector: "З'єднувач",
    colConnection: 'Підключення',
    colDetails: 'Подробиці',
    colActions: 'Дії',
    statusConnected: 'Підключено',
    statusReconnect: 'Потрібне повторне підключення',
    statusNotConnected: 'Не підключено',
    instanceDegraded: 'Деградоване',
    connectedBy: 'Підключено {{at}} — {{user}}',
    connectedAt: 'Підключено {{at}}',
    scopes: 'Області: {{scopes}}',
    tokenExpires: 'Токен доступу поновлюється до {{at}}',
    waiting: 'Завершіть вхід у вікні, що відкрилося.',
    connect: 'Підключити',
    reconnect: 'Підключити знову',
    disconnect: 'Відключити',
    connected: 'Підключено {{name}}.',
    disconnected: 'Відключено {{name}}.',
    expired: 'Вхід для {{name}} не встигли завершити. Підключіться знову.',
    popupBlocked: 'Браузер заблокував вікно входу. Дозвольте спливні вікна для цього сайту і спробуйте ще раз.',
    disconnectTitle: 'Відключити {{name}}?',
    disconnectBody: "Підключення вилучається тут, і з'єднувач перестає звертатися до постачальника від імені цієї організації, доки його не підключать знову. Надання лишається чинним у постачальника, доки не мине або його не відкличуть там.",
    disconnectConfirm: 'Відключити',
    cancel: 'Скасувати',
    loadFailed: "Не вдалося завантажити підключення з'єднувачів.",
    retry: 'Спробуйте знову',
    emptyTitle: "Немає з'єднувача, якому потрібне підключення",
    emptyBody: "Ні один встановлений застосунок не має з'єднувача, в який адміністратор входить через OAuth.",
    clientKeptWithSecret: 'OAuth-клієнт {{clientId}}, секрет збережено',
    clientKept: 'OAuth-клієнт {{clientId}}, без секрету',
    clientTitle: 'OAuth-клієнт для {{name}}',
    clientIntro: "Цей з'єднувач входить через OAuth-клієнта, якого ваша організація реєструє у постачальника для цього розгортання, з URI переадресації нижче. Уведіть ID клієнта і його секрет, якщо постачальник його видав, потім переходьте до входу постачальника.",
    clientStored: 'Збережений клієнт: {{clientId}}',
    clientStoredSecret: 'Разом із ним збережено секрет клієнта. Він ніколи не показується.',
    clientStoredNoSecret: 'Разом із ним не збережено секрету клієнта.',
    clientResend: 'Заміна надішле нового клієнта: уведіть його ID клієнта і його секрет, якщо постачальник його видав.',
    clientId: 'ID клієнта',
    clientSecret: 'Секрет клієнта',
    clientSecretHint: 'Залиште порожнім для публічного клієнта. Секрет зберігається зашифрованим разом із підключенням і більше ніколи не показується.',
    clientContinue: 'Переходьте до входу',
    redirectUriLabel: 'URI переадресації',
    redirectUriCopy: 'Копіювати',
    redirectUriCopied: 'Скопійовано',
    redirectUriHint: "Зареєструйте цей точний URI у OAuth-клієнта постачальника перед тим, як продовжувати.",
    redirectUriMissing: 'Це розгортання не має постійної публічної адреси, тому немає URI переадресації і підключення відмовляється. Задайте OS_BASE_URL (або OS_AUTH_URL) на сервері.',
    clientKeepHint: 'Повторне підключення зберігає цього клієнта і його збережений секрет; сюди нічого не вводиться.',
    clientKeep: 'Зберегти збереженого клієнта',
    clientReplace: 'Замінити збереженого клієнта',
  },
  // Setup → People & organization: Position holders and Permission set
  // assignment (ADR-0146 D7).
  setupAssignments: {
    positionsTitle: 'Держателі посад',
    positionsSubtitle: 'Виберіть посаду, щоб побачити, хто її держить, а також додайте або вилучіть держателів. Що посада надає, визначено на самій посаді.',
    positionsList: 'Посади',
    positionsFilter: 'Фільтр посад',
    positionsEmptyTitle: 'Немає посад',
    positionsEmptyBody: 'У цьому середовищі поки не визначено жодної посади.',
    positionsPick: 'Виберіть посаду, щоб побачити її держателів.',
    positionsLoadFailed: 'Не вдалося прочитати посади.',
    setsTitle: 'Призначення наборів дозволів',
    setsSubtitle: 'Виберіть набір дозволів, щоб побачити, хто його тримає — напряму чи через посаду — і призначайте або скасовуйте призначення користувачів. Що набір надає, визначено на самому наборі.',
    setsList: 'Набори дозволів',
    setsFilter: 'Фільтр наборів дозволів',
    setsEmptyTitle: 'Немає наборів дозволів',
    setsEmptyBody: 'У цьому середовищі поки не визначено жодного набору дозволів.',
    setsPick: 'Виберіть набір дозволів, щоб побачити його користувачів.',
    setsLoadFailed: 'Не вдалося прочитати набори дозволів.',
    // objectstack#32537 — a permission set more than one package holds is listed once per holder.
    setsHolderPackage: 'Пакет {{package}}',
    setsHolderEnvironment: 'Власний набір цього середовища',
    noMatch: 'Фільтру не відповідає нічого.',
    notFound: '«{{name}}» немає в цьому списку.',
    retry: 'Спробуйте знову',
    refresh: 'Оновити',
  },
  element: {
    // objectui#10951 — `element:number` authored with an aggregate and no
    // `dataSource.object` (objectui#11880: the flat `object` is not read). Kept
    // terse: this pack is eager, and the console closure budget weighs it.
    number: {
      noObject: "Об'єкт не названо: задайте dataSource.object.",
      // objectui#12910 — the title of the panel this block draws when its
      // `dataSource.view` names nothing.
      sourceUnresolved: "Джерело даних цього показника не вдалося розв'язати",
    },
    // objectui#12910 — `element:image` with no `src`.
    image: {
      noSource: 'Немає джерела зображення',
    },
    // objectui#12910 — `element:record_picker`'s panel title, same case.
    recordPicker: {
      sourceUnresolved: "Джерело даних цього вибору записів не вдалося розв'язати",
    },
    // objectui#12920 — the same panel title for every other data-bound block,
    // one key per block kind. `element:number` above also titles the
    // dashboard's `object-metric`; `component` is the @object-ui/react
    // panel's own default, for a block that passes no title.
    calendar: {
      sourceUnresolved: "Джерело даних цього календаря не вдалося розв'язати",
    },
    chart: {
      sourceUnresolved: "Джерело даних цієї діаграми не вдалося розв'язати",
    },
    pivotTable: {
      sourceUnresolved: "Джерело даних цієї зведеної таблиці не вдалося розв'язати",
    },
    detailView: {
      sourceUnresolved: "Джерело даних цього подання подробиць не вдалося розв'язати",
    },
    relatedList: {
      sourceUnresolved: "Джерело даних цього пов'язаного списку не вдалося розв'язати",
      // The panel drawn when the list's `parentDataSource` read fails.
      parentUnreadable: "Батьківський запис цього пов'язаного списку не вдалося прочитати",
    },
    form: {
      sourceUnresolved: "Джерело даних цієї форми не вдалося розв'язати",
    },
    lineItems: {
      sourceUnresolved: "Джерело даних цієї панелі рядків позицій не вдалося розв'язати",
    },
    gantt: {
      sourceUnresolved: "Джерело даних цієї діаграми Ганта не вдалося розв'язати",
    },
    grid: {
      sourceUnresolved: "Джерело даних цієї таблиці не вдалося розв'язати",
    },
    board: {
      sourceUnresolved: "Джерело даних цієї дошки не вдалося розв'язати",
    },
    listView: {
      sourceUnresolved: "Джерело даних цього подання-списку не вдалося розв'язати",
    },
    map: {
      sourceUnresolved: "Джерело даних цієї карти не вдалося розв'язати",
      // objectstack#25889 — the map view's own notices. The three style
      // failures (the view's own style, the deployment's default style —
      // objectstack#26163 — and the public default) fill `{{reason}}` with
      // MapLibre's message, or `styleFailedUnknownReason` when it gave none; the excluded count reads "Label: N" so no key needs
      // a plural family.
      invalidCoordinatesExcluded: 'Записи, вилучені з карти за відсутністю або неправильною координатою: {{excluded}}',
      styleFailedConfigured: 'Не вдалося завантажити карту ({{reason}}). Записи перелічені нижче; перевірте URL стилю карти, заданий на цьому поданні.',
      styleFailedDefault: 'Не вдалося завантажити карту ({{reason}}). Записи перелічені нижче; публічні типові фрагменти карти тут завантажити не вдалося, тому попросіть адміністратора задати стиль карти для цього подання.',
      styleFailedDeployment: 'Не вдалося завантажити карту ({{reason}}). Записи перелічені нижче; типовий стиль карти, заданий для цього розгортання, тут завантажити не вдалося, тому попросіть адміністратора перевірити його.',
      styleFailedUnknownReason: 'не вдалося завантажити стиль або фрагменти карти',
      webgl2Unavailable: 'Не вдалося завантажити карту (цей браузер не надає WebGL2, який потрібен карті). Записи перелічені нижче; увімкніть апаратне прискорення або скористайтеся браузером з WebGL2, щоб побачити карту.',
      retry: 'Спробуйте карту знову',
      listLabel: 'Місця',
      listEmpty: 'Місць для переліку немає.',
    },
    timeline: {
      sourceUnresolved: "Джерело даних цієї часової шкали не вдалося розв'язати",
    },
    component: {
      sourceUnresolved: "Джерело даних цього компонента не вдалося розв'язати",
      // The panel drawn when a block resolved no adapter at all.
      noDataSource: "Джерело даних не розв'язано",
      // objectui#12197 — the two titles of a page element's API binding
      // (`dataSource: { provider: 'api', … }`): refused by the spec's schema,
      // or read and failed.
      apiRefused: "Джерело даних API цього компонента відхилене",
      apiUnreadable: "Джерело даних API цього компонента не вдалося прочитати",
    },
    // objectui#12910 — `element:metadata_viewer` (the ```metadata doc fence).
    // A `{{name}}`-style slot that the renderer draws as a `<code>` chip is
    // filled with a private-use mark and split on, so each language places
    // the chip. Counts read as "Label: N" so no key needs a plural family.
    metadataViewer: {
      missingKey: 'Для цього подання відсутній {{key}}.',
      loading: 'Завантаження {{name}}…',
      loadFailed: 'Не вдалося завантажити {{name}}: {{message}}',
      notFound: '{{name}} не знайдено.',
      stateMachine: 'Автомат станів',
      flow: 'Потік',
      permission: 'Дозвіл',
      noStateMachine: "На {{object}} немає автомата станів.",
      noStateMachineNamed: "На {{object}} немає автомата станів з назвою «{{name}}».",
      lifecycle: 'Життєвий цикл {{object}}',
      field: 'поле {{field}}',
      initial: 'початкове',
      final: 'кінцеве',
      steps: 'Кроків: {{count}}',
      noSteps: 'Кроків для показу немає.',
      untitledStep: '(крок)',
      hiddenSteps: 'Сховано технічних кроків: {{count}} · задайте {{setting}}, щоб показати всі',
      objectAccess: "Доступ до об'єктів: {{count}}",
      noPermissions: "Дозволи на об'єкти не оголошені.",
      object: "Об'єкт",
      unknownType: 'Невідомий тип подання метаданих. Очікувалося {{a}}, {{b}} або {{c}}.',
      unknownTypeNamed: 'Невідомий тип подання метаданих «{{type}}». Очікувалося {{a}}, {{b}} або {{c}}.',
    },
  },
  // `kind:'react'` page renderer's notices (`react-page.tsx`, #25916). A
  // `{{slot}}` is a `<code>` chip the renderer draws where the language put it.
  reactPage: {
    disabledTitle: 'Сторінки React вимкнено в цьому розгортанні',
    disabledBody: "Сторінки {{kind}} виконують JavaScript автора прямо в застосунку, тому вони вимкнені, доки розгортання їх не увімкне. Оператор, який довіряє авторам своїх сторінок, задає {{flag}} на сервері (хост, що вбудовує рендерер, викликає {{call}}).",
    loadFailed: 'Не вдалося завантажити середовище виконання React',
    sourceRequired: 'Сторінка {{kind}} потребує непорожнього {{source}}.',
    loading: 'Завантаження середовища виконання React…',
    error: 'Помилка сторінки React',
  },
};

export default uk;
