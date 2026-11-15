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
      awaitingRate: 'Немає курсу {{currency}} на цю дату або раніше: збереження відхилено, доки курс не додадуть',
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
      noUserFields: 'На цьому об’єкті немає полів користувача',
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
/*__UK_CONT__*/
};
