// Copyright (c) 2026 ObjectStack. Licensed under the Apache-2.0 license.

import type { TranslationData } from '@objectstack/spec/system';
import { ukObjects } from './uk.objects.generated.js';

/**
 * Ukrainian (uk) — Setup App Translations
 *
 * Per-locale file mirroring the CRM example convention (one file per
 * language, aggregated into a single `TranslationBundle` by
 * `setup.translation.ts`).
 *
 * Scope: the static Setup App metadata artifact owned by
 * `@objectstack/platform-objects/apps`:
 *   - `apps.setup.label` / `description`
 *   - `apps.setup.navigation.<id>.label` for every group AND leaf
 *   - `dashboards.system_overview.*`
 *   - `datasets.<name>.{measures,dimensions}.<member>.label` for the System
 *     Overview's datasets
 *
 * Object-level labels (Users, Roles, Audit Logs, …) are owned by the
 * sys_* object schemas themselves and translated separately.
 */
export const uk: TranslationData = {
  objects: ukObjects,
  apps: {
    account: {
      label: 'Обліковий запис',
      description: 'Особисті налаштування безпеки та ідентичності',
      navigation: {
        grp_account_inbox: { label: 'Вхідні' },
        grp_account_security: { label: 'Безпека' },
        grp_account_developer: { label: 'Розробник' },
        grp_account_ai_assistant: { label: 'ШІ-асистент' },
        nav_account_profile: { label: 'Профіль' },
        nav_account_notifications: { label: 'Сповіщення' },
        nav_account_approvals: { label: 'Затвердження' },
        nav_account_memberships: { label: 'Мої організації' },
        nav_account_linked: { label: 'Підключені облікові записи' },
        nav_account_sessions: { label: 'Активні сеанси' },
        nav_account_api_keys: { label: 'Ключі API' },
        nav_account_oauth_apps: { label: 'OAuth-застосунки' },
        // Contributed at RUNTIME by `@objectstack/mcp` into
        // `grp_account_ai_assistant` (`connect-ui.ts`), so `ACCOUNT_APP` declares
        // no nav item for it and no static walk in this package can see it —
        // the same shape as the contributed Setup entries below. Its Setup twin
        // carries the identical source string, and BOTH keys are needed: the
        // bundles are keyed `apps.<app>.navigation.<id>`, one namespace per
        // app, so `apps.setup.navigation.nav_connect_agent` never answers for
        // the Account door. Its absence rendered the English literal under
        // Account while Setup rendered the translation, for one destination.
        nav_connect_agent: { label: 'Підключити ШІ-асистента' },
      },
    },
    setup: {
      label: 'Налаштування',
      description: 'Налаштування та адміністрування платформи',
      navigation: {
        // Groups
        group_overview: { label: 'Огляд' },
        group_apps: { label: 'Застосунки' },
        group_people_org: { label: 'Люди та організації' },
        group_access_control: { label: 'Керування доступом' },
        group_approvals: { label: 'Затвердження' },
        group_configuration: { label: 'Конфігурація' },
        group_integrations: { label: 'Інтеграції' },
        group_diagnostics: { label: 'Діагностика' },
        group_advanced: { label: 'Додатково' },

        // Overview
        nav_system_overview: { label: 'Огляд системи' },
        nav_connect_agent: { label: 'Підключити ШІ-асистента' },

        // Apps / Marketplace
        nav_packaged_actions: { label: 'Пакетні дії' },
        nav_marketplace_browse: { label: 'Переглянути маркетплейс' },
        nav_marketplace_installed: { label: 'Встановлені застосунки' },
        nav_cloud_connection: { label: 'Хмарне підключення' },

        // People & Organization
        nav_users: { label: 'Користувачі' },
        nav_organization: { label: 'Організація' },
        nav_business_units: { label: 'Підрозділи' },
        nav_teams: { label: 'Команди' },
        nav_organizations: { label: 'Організації' },
        nav_invitations: { label: 'Запрошення' },
        // Contributed by @objectstack/plugin-security (ADR-0146 D7): the two
        // assignment pages, `security:position-holders` and
        // `security:permission-set-assignment`.
        nav_position_holders: { label: 'Посади' },
        nav_permission_set_assignment: { label: 'Призначення наборів дозволів' },

        // Access Control
        nav_sharing_rules: { label: 'Правила спільного доступу' },
        nav_record_shares: { label: 'Спільний доступ до записів' },
        nav_queues: { label: 'Черги' },
        nav_queue_members: { label: 'Учасники черг' },
        nav_assignment_rules: { label: 'Правила розподілу' },
        // `nav_sso_providers` is contributed by `@objectstack/plugin-auth` only
        // when the external-IdP RP is wired (`OS_SSO_ENABLED`, or the cloud
        // per-env `planAllowsSso`), so it is the one Setup entry
        // `pnpm check:app-nav-i18n` structurally cannot judge: that gate boots
        // ONE composition, and a contribution gated off in it is never merged
        // and therefore never checked (see the gate header's bound #1). Its
        // absence here was invisible for exactly that reason (#6659) — a
        // deployment with SSO wired showed `SSO Providers` in English inside an
        // otherwise translated menu. The pin that keeps this row honest lives
        // in `setup-nav-dead-key-tombstone.test.ts`. Wording follows the
        // object's own `pluralLabel` per locale (`sys_sso_provider`), since the
        // entry opens that object's list view.
        nav_sso_providers: { label: 'Постачальники SSO' },
        // `nav_scim_credentials` is the same case (#31123): plugin-auth
        // contributes it only while SCIM is wired (`isScimWired()`, the answer
        // the SCIM credential mint door reads), so no boot of
        // `check:app-nav-i18n` merges it and the tombstone file's conditional
        // list keeps it honest. It opens `sys_scim_connection_credential`'s
        // list; the label is the short form of that object's `pluralLabel`.
        nav_scim_credentials: { label: 'Облікові дані SCIM' },
        nav_api_keys: { label: 'Ключі API' },

        // Approvals. `nav_approvals_inbox` is the working surface (#7234); the
        // three below it are the engine's raw tables, kept as the admin view.
        nav_approvals_inbox: { label: 'Вхідні затвердження' },
        nav_approval_requests: { label: 'Запити' },
        nav_approval_actions: { label: 'Історія дій' },
        nav_approval_delegations: { label: 'Делегування (відсутній)' },

        // Configuration
        nav_settings_hub: { label: 'Усі налаштування' },
        nav_settings_localization: { label: 'Локалізація' },
        nav_exchange_rates: { label: 'Курси валют' },
        nav_settings_company: { label: 'Компанія' },
        nav_settings_mail: { label: 'Доставка пошти' },
        nav_settings_sms: { label: 'Доставка SMS' },
        nav_settings_branding: { label: 'Брендування' },
        nav_settings_auth: { label: 'Автентифікація' },
        nav_settings_access_policy: { label: 'Політика доступу' },
        nav_settings_storage: { label: 'Сховище файлів' },
        nav_settings_ai: { label: 'ШІ та Embedder' },
        nav_settings_knowledge: { label: 'База знань' },
        nav_settings_lifecycle: { label: 'Життєвий цикл даних' },
        nav_recycle_bin: { label: 'Корзина' },
        // Notifications (contributed by @objectstack/service-messaging)
        nav_notification_preferences: { label: 'Параметри сповіщень' },
        nav_notification_templates: { label: 'Шаблони сповіщень' },

        // Diagnostics
        nav_sessions: { label: 'Сеанси' },
        // The one audit entry: the console's audit browser (`audit:log`),
        // contributed by @objectstack/plugin-audit. The `sys_audit_log` list is
        // reached from that page's "Open as list" link, not from this menu, and
        // the page's former id `nav_audit_log_browser` is tombstoned (#23890).
        nav_audit_logs: { label: 'Журнал аудиту' },
        nav_notifications: { label: 'Сповіщення' },

        // Integrations — every entry here is contributed at RUNTIME by the
        // capability plugin that owns the object (ADR-0029 K2), so it exists on
        // no static walk of SETUP_APP. `pnpm check:app-nav-i18n` is what keeps
        // this block honest; see that gate's header for why (#5750).
        nav_webhooks: { label: 'Вебхуки' },
        nav_http_deliveries: { label: 'Доставки HTTP' },
        nav_datasources: { label: 'Джерела даних' },
        nav_connector_credentials: { label: "Облікові дані з'єднувачів" },
        nav_connector_connections: { label: "Підключення з'єднувачів" },

        // Advanced
        //
        // No `nav_verifications` / `nav_device_codes` here on purpose:
        // `sys_verification` and `sys_device_code` omit `list` from their
        // `apiMethods`, so `setup-nav.contributions.ts` deliberately declares
        // no browse entry for them (#2266). Nor `nav_jwks` — `sys_jwks` is
        // `apiEnabled: false`, so its list 404s for EVERY persona and the entry
        // was removed (#7544). Nor `nav_metadata` — that entry moved to Studio
        // as `nav_metadata_directory`. Nor `nav_accounts` /
        // `nav_user_preferences` — both left the menu for the User record
        // page's tabs (#23803). Re-adding a label here means re-adding the nav
        // item first; the tombstone in
        // `setup-nav-dead-key-tombstone.test.ts` states the whole rule (#6660).
        nav_oauth_apps: { label: 'OAuth-застосунки' },
      },
    },
    studio: {
      label: 'Studio',
      description: 'Верстак метаданих для розробників, аналітиків і впроваджувачів',
      navigation: {
        group_overview: { label: 'Огляд' },
        nav_app_builder: { label: 'Конструктор застосунків' },
        nav_metadata_directory: { label: 'Усі типи метаданих' },
        nav_packages: { label: 'Пакети' },
        group_data_model: { label: 'Модель даних' },
        nav_objects: { label: "Об'єкти" },
        group_ux: { label: 'Досвід користувача' },
        nav_apps: { label: 'Застосунки' },
        nav_views: { label: 'Подання' },
        nav_pages: { label: 'Сторінки' },
        nav_dashboards: { label: 'Дашборди' },
        nav_reports: { label: 'Звіти' },
        nav_datasets: { label: 'Набори даних' },
        group_logic: { label: 'Логіка' },
        nav_actions: { label: 'Дії' },
        nav_hooks: { label: 'Хуки' },
        group_automation: { label: 'Автоматизація' },
        nav_flows: { label: 'Потоки' },
        group_ai: { label: 'ШІ' },
        nav_agents: { label: 'Агенти' },
        nav_tools: { label: 'Інструменти' },
        nav_skills: { label: 'Навички' },
        group_developer: { label: 'Розробник' },
        nav_api_console: { label: 'API-консоль' },
        nav_flow_runs: { label: 'Запуски потоків' },
        nav_public_forms: { label: 'Публічні форми' },
        nav_integrations: { label: 'Інтеграції та API' },
        group_integration: { label: 'Інтеграція' },
        nav_email_templates: { label: 'Шаблони листів' },
      },
    },
  },

  dashboards: {
    system_overview: {
      label: 'Огляд системи',
      description: 'Стан платформи, активність безпеки та нещодавні події аудиту',
      widgets: {
        widget_total_users: {
          title: 'Усього користувачів',
          description: 'Кількість зареєстрованих користувачів у системі',
        },
        widget_organizations: {
          title: 'Організації',
          description: 'Загальна кількість організацій на платформі',
        },
        widget_active_sessions: {
          title: 'Активні сеанси',
          description: 'Кількість активних наразі сеансів користувачів',
        },
        widget_packages_installed: {
          title: 'Встановлені пакети',
          description: 'Активні встановлення пакетів у проєктах',
        },
        widget_login_events: {
          title: 'Події входу',
          description: 'Події автентифікації, записані журналом аудиту',
        },
        widget_config_changes: {
          title: 'Зміни конфігурації',
          description: 'Зміни конфігурації системи',
        },
        widget_events_by_type: {
          title: 'Події аудиту за дією',
          description: 'Розподіл подій аудиту за типом дії',
        },
        widget_events_by_user: {
          title: 'Події за користувачем',
          description: 'Розподіл активності між користувачами',
        },
        widget_recent_events: {
          title: 'Обсяг подій за дією',
          description: 'Обсяг подій, згрупованих за дією (вхід, вихід, конфігурація, …)',
        },
      },
      // The date-range bar above the widgets — addressable since
      // `dashboards.<name>.globalFilters` (#16772), keyed by the filter's
      // `field` because it authors no `name`.
      globalFilters: {
        created_at: { label: 'Період' },
      },
    },
  },

  // The copy the System Overview draws from its DATASETS rather than from the
  // board: the caption under each metric tile is the selected measure's label,
  // and a table or chart over a dimension is headed by the dimension's label.
  // Mirrors `dashboards/system.datasets.ts` verbatim; keyed
  // `datasets.<name>.{measures,dimensions}.<member>.label`, and served on the
  // analytics query, which localizes the saved definition before it runs.
  datasets: {
    sys_user_metrics: { measures: { user_count: { label: 'Користувачі' } } },
    sys_organization_metrics: { measures: { org_count: { label: 'Організації' } } },
    sys_session_metrics: { measures: { session_count: { label: 'Сеанси' } } },
    sys_package_installation_metrics: { measures: { package_count: { label: 'Встановлення' } } },
    sys_audit_log_metrics: {
      dimensions: { action: { label: 'Дія' }, user_id: { label: 'Користувач' } },
      measures: { event_count: { label: 'Події' } },
    },
  },

  // Setup pages contributed as metadata by capability plugins. The English
  // entries mirror the literals authored in the plugins' page metadata
  // (@objectstack/cloud-connection, @objectstack/mcp) and exist so the other
  // locales have a complete key set to translate against.
  pages: {
    cloud_connection_settings: {
      label: 'Хмарне підключення',
      subtitle:
        'Підключіть це середовище виконання до керуючої площини ObjectStack, '
        + 'щоб переглядати приватні пакети вашої організації та встановлювати їх тут.',
    },
    connect_agent: {
      label: 'Підключити ШІ-асистента',
      subtitle:
        'Працюйте в цій системі через Claude, Doubao та інших ШІ-асистентів. '
        + 'Кожен з них діє від вашого імені: він бачить і змінює лише те, що дозволяють ваші власні дозволи.',
    },

    // The platform's own record pages (`@objectstack/platform-objects/pages`,
    // contributed by plugin-auth and plugin-security). Their page-level `label`
    // is the only key the extractor reaches -- everything else on them is
    // authored as an inline locale map under `slots.*` (commit 5529a374e). English
    // mirrors the literal in the page metadata, as above.
    sys_user_detail: { label: 'Користувач' },
    sys_organization_detail: { label: 'Організація' },
  },
};
