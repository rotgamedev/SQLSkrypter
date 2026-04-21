const translations = {
    en: {
        // Navigation
        nav_core: "Overview", nav_features: "Features", nav_license: "Licensing", nav_changelog: "Changelog", nav_download: "Download", nav_faq: "FAQ", nav_manual: "Manual", nav_screens: "Screenshots",
        
        // Index - Hero & Overview
        h1_title: "Professional SQL Runner for MSSQL", h1_sub: "Parallel script execution. Uncompromising security. Zero telemetery.",
        h1_desc: "SQLSkrypter is a tool designed to execute SQL scripts across multiple servers and databases simultaneously — faster, safer, and with complete control.",
        hero_platforms: "Platform: Windows 10/11 x64. .NET 8.0.",
        btn_trial: "Download Free Trial", btn_pro: "Buy Pro License", hero_note: "Offline. No server installation. DPAPI Secured.",
        
        ov_title: "Designed for scale",
        ov_1: "Execute scripts against hundreds of databases concurrently.",
        ov_2: "Analyze structure changes without risk using Transactional Dry Run.",
        ov_3: "Work efficiently with batch script files or an integrated syntax editor.",
        ov_4: "Receive detailed OK/ERR statistics for each database and file instantly.",
        
        // Index - Killer Features
        idx_h2: "Enterprise-Grade Engineering", idx_h2_sub: "Built heavily around optimization. No more crashing management studios.",
        btn_explore: "Explore all features &rarr;",
        s3_title: "Enterprise-Grade Engineering",
        f1_h: "Parallel Execution & Analytics", f1_p: "Execute across hundreds of databases concurrently. Monitor progress via real-time timelines and a detailed summary panel tracking success rates, fastest/slowest runs, and grouped errors.",
        f2_h: "ScriptDom Validation & Dry Run", f2_p: "Integrated Microsoft ScriptDom AST parser blocks destructive queries during database discovery. Safely simulate transaction rollbacks on production with Dry-Run mode.",
        f3_h: "Advanced Workspace", f3_p: "Hierarchical server trees, drag-and-drop file sorting, color-coded environment tagging, and seamless session state persistence.",
        f4_h: "Hardware-Linked Security", f4_p: "Credentials stored via Windows DPAPI. Export shareable configurations using AES encryption + PBKDF2 key derivation.",

        gallery_title: "Interface Previews",

        // Features Page
        feat_pg_title: "Engine Capabilities", feat_pg_desc: "A complete toolkit built for database administrators and DevOps engineers.",
        feat_cat1: "Execution & Analysis",
        fc1_1_h: "Multi-Server Parallel Engine", fc1_1_p: "Deploy scripts to countless servers. Configurable connection limits. Abort operations instantly.",
        fc1_2_h: "Interactive Execution Timeline", fc1_2_p: "Filter operations by OK/Error. Export execution logs to CSV/TXT.",
        fc1_3_h: "Performance Summary", fc1_3_p: "Automatically tracks execution times, highlighting the fastest and slowest performing databases.",
        
        feat_cat2: "Security & Validation",
        fc2_1_h: "Microsoft ScriptDom Integration", fc2_1_p: "Analyzes T-SQL syntax before execution. Ensures read-only parsing for safe environment discovery.",
        fc2_2_h: "DPAPI & AES Encryption", fc2_2_p: "Connection strings are bound to your hardware via DPAPI. Configurations are securely exported using AES.",
        fc2_3_h: "Zero Telemetry", fc2_3_p: "100% offline. No cloud dependency. No data collection.",

        feat_cat3: "Professional UX",
        fc3_1_h: "State Management", fc3_1_p: "Save and load your complex server tree states without reloading everything.",
        fc3_2_h: "International Operations", fc3_2_p: "Professionally localized in 6 languages: English, Polish, German, Spanish, French, and Italian.",
        fc3_3_h: "Environment Tagging", fc3_3_p: "Assign specific colors to dev, staging, or production environments for visual safety.",

        feat_cat4: "Architecture & Integration",
        fc4_1_h: "Decoupled MVVM Core", fc4_1_p: "Built on a strict MVVM pattern using .NET 6+. Stateless services ensure zero cross-contamination of logic.",
        fc4_2_h: "Asynchronous Workloads", fc4_2_p: "Parallel task processing relies on ThreadPool integration and SemaphoreSlim for flawless memory management without UI freezes.",
        fc4_3_h: "Automated Release Pipeline", fc4_3_p: "Programmatically queries GitHub API endpoints to securely stream and verify in-place software binary updates.",

        // Licensing Page
        lic_pg_title: "Licensing Models", lic_pg_desc: "Simple, transparent, and completely offline licensing.",
        lic_h1: "Standard vs PRO",
        th_feature: "Core Features", th_std: "STANDARD (FREE)", th_pro: "PRO EDITION",
        r1_f: "Server Limits", r1_std: "Up to 10 Servers", r1_pro: "Unlimited",
        r2_f: "Environment Groups", r2_std: "Up to 3 Groups", r2_pro: "Unlimited",
        r3_f: "Parallel Execution", r4_f: "Dry-Run Simulation", r5_f: "Session Save/Load", r6_f: "AES Config Export",
        r7_f: "Commercial Use", r7_std: "Personal/Test Only", r7_pro: "Full Commercial Rights",
        
        lic_trial_hl: "Free Trial", 
        lic_trial_d1: "14 days evaluation", lic_trial_d2: "Hardware bounded", lic_trial_d3: "Full PRO functionality",
        lic_pro_hl: "Pro License", 
        lic_pro_d1: "One-time purchase", lic_pro_d2: "Hardware bounded (3-5 PCs)", lic_pro_d3: "Perpetual updates to purchase date",
        lic_ren_hl: "Renewal Key", 
        lic_ren_d1: "Extends update period", lic_ren_d2: "Attached to base PRO key", lic_ren_d3: "One-time fee",

        lic_h2: "Offline Licensing Architecture",
        lic_sec1_s: "RSA Signed Keys:", lic_sec1_d: "Licenses are cryptographically signed using RSA to ensure validity.",
        lic_sec2_s: "Hardware Hash:", lic_sec2_d: "Licenses are tied to your specific machine using a stable, offline hardware hash.",
        btn_contact_sales: "Contact Sales / Purchase PRO",

        lic_faq_t: "Licensing FAQ",
        lfaq_q1: "What happens if I change my computer?", lfaq_a1: "Pro keys are bound to your hardware. If you upgrade your PC, you can easily deactivate the old instance in your dashboard or contact support.",
        lfaq_q2: "What if I reinstall Windows?", lfaq_a2: "As long as the hardware stays exactly the same, the OS reinstall will not invalidate your hardware ID.",
        lfaq_q3: "How does the Renewal Key work?", lfaq_a3: "Since Pro is a perpetual license, you keep the version you bought forever. The renewal key just gives you another 12 months of major software updates.",
        lfaq_q4: "What's the difference between Trial and Pro?", lfaq_a4: "The Free Trial provides exactly the same technical capabilities as the Pro version, restricted to 14 days and a single user for evaluation.",
        
        // Changelog Page
        ch_pg_title: "Evolution of Skrypter", ch_pg_desc: "See how we transformed from a simple tool into an enterprise engine.",
        ch_v2_title: "Version 2.0.0 - The Enterprise Update", ch_v2_date: "Q2 2026",
        ch_v2_1: "Added Microsoft ScriptDom AST syntax parser.",
        ch_v2_2: "Introduced Parallel execution framework and abort controls.",
        ch_v2_3: "Added detailed Execution Timeline and Summary Dashboards.",
        ch_v2_4: "Migrated from DES to DPAPI and AES/PBKDF2 encryption.",
        ch_v2_5: "Introduced advanced tree manipulation (drag & drop, filtering, session loading).",
        ch_v2_6: "Added Multi-Language Support (EN, PL, DE, ES, FR, IT).",

        // Documentation (FAQ, Terms, Privacy)
        doc_privacy_title: "Privacy Policy",
        doc_privacy_desc: "SQLSkrypter operates with a 100% offline, privacy-first architecture.",
        doc_privacy_p1: "At SQLSkrypter, we fundamentally believe that your database architecture, server names, and execution scripts are proprietary business secrets. Therefore, SQLSkrypter was designed from the ground up to never transmit any data outside of your local machine.",
        doc_privacy_p2: "Key Privacy Tenets:",
        doc_privacy_l1: "Zero Telemetry: We do not track application usage, error logs, or execution statistics.",
        doc_privacy_l2: "Local Storage: All configurations, connection strings, and server credentials are encrypted exclusively on your hardware using Windows DPAPI.",
        doc_privacy_l3: "No Cloud Synchronization: Your session states and application configurations remain entirely local.",

        doc_terms_title: "End User License Agreement (EULA)",
        doc_terms_desc: "Legal terms for using SQLSkrypter Standard and PRO editions.",
        doc_terms_p1: "This End-User License Agreement ('EULA') is a legal agreement between you and Pawel Merta ('Author'). By using SQLSkrypter, you agree to these terms.",
        doc_terms_s1: "1. Software Editions",
        doc_terms_l1: "Standard Edition: Free for personal and test use. Limited to 10 servers and lacks multi-threading.",
        doc_terms_l2: "PRO Edition: Requires a purchased license. Designed for commercial / enterprise use, unlocking all features securely.",
        doc_terms_s2: "2. Restrictions",
        doc_terms_l3: "You may not reverse engineer, decompile, or bypass the offline RSA activation mechanism.",
        doc_terms_l4: "You may not resell or lease the software without authorization.",

        doc_faq_title: "Frequently Asked Questions",
        doc_faq_desc: "Common use cases, troubleshooting, and answers.",
        faq_q1: "Is it safe to store my SQL Server passwords in Skrypter?", faq_a1: "Yes. SQLSkrypter uses Windows Native DPAPI (Data Protection API) to encrypt credentials using keys tied specifically to your OS installation and hardware. It is extremely secure.",
        faq_q2: "How does the Parallel Execution Engine work?", faq_a2: "It spawns isolated, managed threads (configurable limits around 8 parallel queues) to deploy scripts independently to different SQL Server instances. This drastically reduces massive rollout times.",
        faq_q3: "What happens if a script fails during bulk execution?", faq_a3: "The engine isolates errors per-database. You can configure the engine to either halt the remaining queue immediately or continue execution on other healthy servers. Results are logged in the Summary Panel.",
        faq_q4: "Does SQLSkrypter operate fully offline?", faq_a4: "Yes, 100% offline. No internet connection is ever required to run your daily database operations.",
        faq_q5: "Does the application send telemetry or data out?", faq_a5: "No. Zero telemetry. No crash reports, no usage analytics, and definitely no database schema data is ever transmitted.",
        faq_usecases: "Use Cases",
        faq_u1_h: "Schema Integration (Dry Run)", faq_u1: "Adding a column to a central table across 60 client databases? Load the ALTER script and execute a Dry Run. SQLSkrypter wraps the run in a SQL Transaction (rollback). If one snowflake database fails, you identify it without touching real data.",
        faq_u2_h: "Infrastructure Consistency Audit", faq_u2: "Ensure a specific security index exists on every Production server. Run a script that raises an error if an index is missing. Check the Execution Timeline: databases that turn Red are non-compliant.",
        faq_u3_h: "Fleet Maintenance", faq_u3: "Need to clear transaction logs across 40 'Dev' servers? Use Environment Chips to filter the tree, select 'Dev', and confidently execute your maintenance without risk of touching Production.",
        faq_u4_h: "Emergency Patching", faq_u4: "A critical SP vulnerability is found. Toggle Parallel Execution, deploy the patch to 200 databases simultaneously, and use Intelligent Error Grouping to spot failures immediately.",
        
        ch_v2_1: "Added Microsoft ScriptDom AST syntax parser.",
        ch_v2_2: "Introduced Parallel execution framework and abort controls.",
        ch_v2_3: "Added detailed Execution Timeline and Summary Dashboards.",
        ch_v2_4: "Migrated from DES to DPAPI and AES/PBKDF2 encryption.",
        ch_v2_5: "Introduced advanced tree manipulation (drag & drop, filtering, session loading).",
        ch_v2_6: "Added Multi-Language Support (EN, PL, DE, ES, FR, IT).",
        ch_v1_d: "Legacy Engine", ch_v1_t: "Version 1.0.0", ch_v1_p: "The initial release featuring sequential processing, DES encryption, and basic environment management.",
        man_pg_t: "Official User Manual", man_pg_d: "Operations, limitations, and architectural overview (v2.0.0).",
        m_s1: "Standard vs. PRO Edition Comparison", m_s1_d: "To ensure high performance and sustainability, SQLSkrypter uses a tiered feature model.",
        m_s1_b1: "- See <a href='licensing.html' style='color: var(--accent-blue); text-decoration: underline;'>Licensing</a> section for exact feature limitations.",
        m_s2: "Setting Up Your Environments", m_s2_d: "SQLSkrypter allows you to organize your servers into logical groups.",
        m_s3: "Script Execution & Modes", m_s3_d: "The Execute button runs the current script on all checked databases.",
        m_s4: "Professional Productivity Features (PRO)", m_s4_d: "Advanced lifecycle tools for DBAs.",
        m_s5: "Security & Privacy", m_s5_d: "100% Offline application design.",

        m_s2_b1: "Standard Edition: Create up to 3 hierarchical environments.",
        m_s2_b2: "Visual Distinction: Custom hex colors are allowed globally.",
        m_s3_b1: "Sequential Execution: Operates one after another.",
        m_s3_b2: "Dry Run (PRO): Wraps query in a simulated Transaction rollback.",
        m_s4_b1: "Environment Dashboard (Chips): Isolate Dev/Prod branches instantly.",
        m_s4_b2: "Configuration Mobility: Save complex XML structures with AES encryption.",
        m_s4_b3: "Tree Sessions: Remember exact checkboxes.",
        m_s5_b1: "No internet telemetry is ever reported.",
        m_s5_b2: "Zero dependencies on cloud validation nodes.",
        m_s5_b3: "DPAPI storage encryption for offline credential safety.",


        // Download
        dl_title: "Download SQLSkrypter", dl_ver: "Version: 2.0.0", dl_date: "Release Date: Q2 2026", dl_btn: "Download Installer (.exe)", dl_sys: "System Requirements: Windows 10/11 x64. .NET 8.0 Desktop Runtime. Minimum 4GB RAM.",

        // Footer
        ft_manual: "User Manual", ft_faq: "FAQ", ft_licd: "Licensing", ft_change: "Changelog",
        ft_priv: "Privacy", ft_terms: "Terms", ft_contact: "Contact"
    },
    pl: {
        // Navigation
        nav_core: "Przegląd", nav_features: "Funkcje", nav_license: "Licencjonowanie", nav_changelog: "Changelog", nav_download: "Pobierz", nav_faq: "FAQ", nav_manual: "Manual", nav_screens: "Screeny",
        
        // Index - Hero & Overview
        h1_title: "Profesjonalny SQL Runner dla MSSQL", h1_sub: "Równoległe procedury. Bezkompromisowe bezpieczeństwo. Zero telemetrii.",
        h1_desc: "SQLSkrypter to narzędzie do wykonywania skryptów SQL na wielu serwerach i bazach jednocześnie — szybciej, bezpieczniej i z pełną kontrolą.",
        hero_platforms: "Platforma: Windows 10/11 x64. .NET 8.0.",
        btn_trial: "Pobierz Darmowy Trial", btn_pro: "Kup Licencję PRO", hero_note: "Offline. Brak serwerów. Chronione przez DPAPI.",
        
        ov_title: "Szybsza Praca z Bazami",
        ov_1: "Wykonywanie skryptów na wielu serwerach i setkach baz równocześnie.",
        ov_2: "Analizowanie zmian i struktury bez ryzyka dzięki tranzakcyjnemu Dry Run.",
        ov_3: "Wydajna praca ze zintegrowanym edytorem składni lub gotowymi plikami.",
        ov_4: "Natychmiastowe statystyki OK/ERR dla każdego pliku i bazy na żywo.",
        
        // Index - Killer Features
        idx_h2: "Architektura Klasy Enterprise", idx_h2_sub: "Zbudowane wokół surowej optymalizacji. Koniec z crashowaniem programów do zarządzania bazami.",
        btn_explore: "Zbadaj wszystkie funkcje &rarr;",
        s3_title: "Architektura Klasy Enterprise",
        f1_h: "Równoległe Operacje i Analityka", f1_p: "Wykonywanie skryptów na setkach baz jednocześnie. Śledź postęp na żywo dzięki Paskowi Postępu oraz analizuj sukcesy, najszybsze/najwolniejsze bazy i pogrupowane błędy w Panelu Podsumowania.",
        f2_h: "ScriptDom i Dry Run", f2_p: "Zintegrowany analizator składniowy Microsoft ScriptDom blokuje niebezpieczne operacje podczas odpytywania serwera o bazy. Bezpiecznie testuj zapytania (rollback) używając trybu Dry-Run na produkcji.",
        f3_h: "Zaawansowany Interfejs", f3_p: "Drzewo serwerów, oznaczanie środowisk kolorami, swobodne sortowanie plików (drag & drop) oraz natychmiastowe odzyskiwanie sesji.",
        f4_h: "Sprzętowe Szyfrowanie", f4_p: "Poświadczenia chronione natywnym mechanizmem Windows DPAPI. Bezpieczny eksport konfiguracji wspierany przez potężne szyfrowanie AES + PBKDF2.",

        gallery_title: "Urzekający Interfejs",

        // Features Page
        feat_pg_title: "Możliwości Silnika", feat_pg_desc: "Kompletny ekwipunek dla administratorów baz danych i inżynierów DevOps.",
        feat_cat1: "Wykonywanie i Analiza",
        fc1_1_h: "Wydajny Silnik Równoległy", fc1_1_p: "Uruchamiaj zapytania na wielu środowiskach naraz. Silnik autonomicznie dobiera wydajność wątków, a Ty możesz przerwać wykonywanie w każdym momencie.",
        fc1_2_h: "Interaktywna Oś Czasu", fc1_2_p: "Sortuj i filtruj historię operacji (OK/Błędy). Błyskawiczny eksport wszystkich logów do CSV/TXT.",
        fc1_3_h: "Podsumowanie Wydajności", fc1_3_p: "Silnik automatycznie kalkuluje całkowity czas odpowiedzi, wskazując dokładnych winowajców spowolnień i najszybsze bazy.",
        
        feat_cat2: "Bezpieczeństwo",
        fc2_1_h: "Integracja z Microsoft ScriptDom", fc2_1_p: "Najpewniejsza metoda analizy zapytań T-SQL przed ich wdrożeniem i gwarancja bezpiecznego mapowania drzewa.",
        fc2_2_h: "DPAPI i AES Encryption", fc2_2_p: "Koniec z przestarzałym DES. Parametry połączeń są nierozerwalnie wspawane w Twój sprzęt przez DPAPI.",
        fc2_3_h: "Zero Telemetrii", fc2_3_p: "Działasz w 100% offline. Twój kod biznesowy oraz nazwy baz danych nie opuszczają Twojego komputera.",

        feat_cat3: "Profesjonalny UX",
        fc3_1_h: "Menedżer Sesji", fc3_1_p: "Skonfigurowałeś setki zaznaczeń testowych? Zapisz całą sesję do pliku i wczytaj bez odpytywania serwerów.",
        fc3_2_h: "Operacje Globalne", fc3_2_p: "Program dostępny z profesjonalnymi tłumaczeniami: PL, EN, DE, ES, FR, IT.",
        fc3_3_h: "Oznaczanie Środowisk", fc3_3_p: "Zdefiniuj agresywny czerwony kolor dla środowisk PROD i uspokajający zielony dla DEV. Wypadek przy pracy to już przeszłość.",

        feat_cat4: "Architektura Oprogramowania",
        fc4_1_h: "Wzorzec MVVM", fc4_1_p: "Zbudowany na ścisłym wzorcu projektowym MVVM w .NET 6+. Usługi bezstanowe izolują absolutnie całą logikę od interfejsu.",
        fc4_2_h: "Zarządzanie Wątkami", fc4_2_p: "Zamiast prostych kolejek, stosujemy mechanizmy SemaphoreSlim oraz skalowalny ThreadPool by chronić pamięć podczas operacji na setkach baz.",
        fc4_3_h: "Zautomatyzowany Pipeline Wdrażania", fc4_3_p: "Udostępnia bezpieczne, uwierzytelnione pobieranie aktualizacji wprost z warstwy API silnika Releases na GitHub.",

        // Licensing Page
        lic_pg_title: "Modele Licencjonowania", lic_pg_desc: "Proste, przejrzyste i ukierunkowane w 100% na ochronę w systemie offline.",
        lic_h1: "Standard vs PRO",
        th_feature: "Funkcja", th_std: "STANDARD (DARMOWA)", th_pro: "EDYCJA PRO",
        r1_f: "Limity Serwerów", r1_std: "Do 10 Serwerów", r1_pro: "Nielimitowane",
        r2_f: "Oznaczanie Środowisk", r2_std: "Do 3 Grup", r2_pro: "Nielimitowane",
        r3_f: "Egzekucja Równoległa", r4_f: "Symulacja Dry-Run", r5_f: "Zapisywanie Sesji", r6_f: "Eksport Konfiguracji",
        r7_f: "Użycie Komercyjne", r7_std: "Tylko Prywatne/Testowe", r7_pro: "Pełne Prawa Komercyjne",
        
        lic_trial_hl: "Free Trial", 
        lic_trial_d1: "14 dni okresu próbnego", lic_trial_d2: "Powiązany ze sprzętem", lic_trial_d3: "Pełna funkcjonalność PRO",
        lic_pro_hl: "Pro License", 
        lic_pro_d1: "Płatność jednorazowa", lic_pro_d2: "Przypisany do sprzętu (3 do 5 ID)", lic_pro_d3: "Aktualizacje do konkretnej daty",
        lic_ren_hl: "Renewal Key", 
        lic_ren_d1: "Przedłuża okres aktualizacji", lic_ren_d2: "Przypisany do Twojej licencji Pro", lic_ren_d3: "Jednorazowy",

        lic_h2: "Architektura Licencjonowania Offline",
        lic_sec1_s: "Kryptografia RSA:", lic_sec1_d: "Pliki licencji są tworzone unikalnymi certyfikatami RSA uniemożliwiającymi ich dekompilację.",
        lic_sec2_s: "Odcisk Sprzętowy:", lic_sec2_d: "Ciąg znaków bazujący w 100% na architekturze klienta. SQLSkrypter akceptuje tylko jeden zestaw sprzętu.",
        btn_contact_sales: "Skontaktuj się z działem sprzedaży / Kup PRO",
        
        lic_faq_t: "FAQ Licencyjne",
        lfaq_q1: "Co jeśli zmienię lub kupię nowy komputer?", lfaq_a1: "Klucze Pro są fizycznie przypisane do maszyny. Wymiana urządzenia (np. nowa płyta główna) wiąże się z koniecznością wydania nowej certyfikacji sprzętowej. Skontaktuj się z działem wsparcia.",
        lfaq_q2: "Co jeśli muszę postawić system od nowa (reinstalacja)?", lfaq_a2: "O ile procesor, płyta i ram zostają te same, reinstall systemu Windows wygeneruje dokładnie taki sam identyfikator sprzętowy. Będziesz mógł użyć swojego pliku licencyjnego od razu.",
        lfaq_q3: "Jak bardzo 'Dożywotnia' jest wersja Pro?", lfaq_a3: "Bardzo. Kupujesz wersję Pro jednorazowo z dostępem do poprawek przez rok. Po roku aplikacja nigdy nie zgaśnie i będzie służyć Ci w pracy do końca życia. Wtedy ewentualnie możesz kupić mały klucz Renewal Key jeśli zechcesz zaktualizować program do np. wersji z roku 2030.",
        lfaq_q4: "Czym różni się Trial od Pro?", lfaq_a4: "Aplikacja pod względem kodu, funkcjonalności czy blokad paralelizacji pozwala na DOKŁADNIE to samo. Trial to absolutnie wersja PRO z pełnym arsenałem. Różnica to 14 dni limitu czasu oraz zabronione użytkowanie w pełni komercyjne (poza fazą oceny).",

        // Changelog Page
        ch_pg_title: "Ewolucja Oprogramowania", ch_pg_desc: "Sprawdź, jak ewoluowaliśmy od małego narzędzia do potężnego silnika bazodanowego.",
        ch_v2_title: "Wersja 2.0.0 - Krok Transformacji", ch_v2_date: "Q2 2026",
        ch_v2_1: "Wdrożono silnik analizujący składnię zapytań (Microsoft ScriptDom AST).",
        ch_v2_2: "Rozbudowano kod o framework współbieżności i kontrolę anulowania procesów.",
        ch_v2_3: "Dodano interaktywną Oś Czasu (Timeline) oraz Zaawansowany Podgląd Wydajności.",
        ch_v2_4: "Zastąpiono zabezpieczenia DES twardym szyfrowaniem sprzętowym używając DPAPI i algorytmów AES/PBKDF2.",
        ch_v2_5: "Zaawansowane zarządzanie strukturą - drag&drop, kolorowanie, pliki sesji binarnej.",
        ch_v2_6: "Internacjonalizacja projektu w obrębie 6 najważniejszych języków Europy/Świata.",
        ch_v1_d: "Silnik Zastępczy (Legacy)", ch_v1_t: "Wersja 1.0.0", ch_v1_p: "Pierwsze publiczne wydanie (w pełni darmowe) zawierające tylko sekwencyjne przetwarzanie i bardzo starą już kryptografię typu DES.",

        // Documentation (FAQ, Terms, Privacy)
        doc_privacy_title: "Polityka Prywatności",
        doc_privacy_desc: "SQLSkrypter działa w 100% offline. Zabezpieczamy Twoją infrastrukturę.",
        doc_privacy_p1: "W SQLSkrypter fundamentalnie wierzymy, że Twoja architektura sieciowa, nazwy serwerów i skrypty SQL są ścisłą tajemnicą biznesową. Oprogramowanie nigdy, do żadnego celu, nie transmituje ich na zewnątrz.",
        doc_privacy_p2: "Główne zasady prywatności:",
        doc_privacy_l1: "Zero Telemetrii: Nie śledzimy użycia, błędów ani czasu logowania ani działania procesów.",
        doc_privacy_l2: "Szyfrowanie Lokalne: Połączenia i konfiguracja są chronione sprzętowo przez Microsoft DPAPI wyłącznie na Twoim komputerze.",
        doc_privacy_l3: "Brak chmury: Żadne sesje, konfiguracje ani licencje nie są archiwizowane na naszych serwerach.",

        doc_terms_title: "Regulamin i Umowa Licencyjna (EULA)",
        doc_terms_desc: "Prawne zasady korzystania z edycji Standard i PRO SQLSkryptera.",
        doc_terms_p1: "To jest End-User License Agreement ('EULA') pomiędzy Tobą a autorem (Paweł Merta). Używając oprogramowania akceptujesz ten regulamin.",
        doc_terms_s1: "1. Edycje programu",
        doc_terms_l1: "Edycja Standard: Darmowa do użytku osobistego / nauki. Posiada limity (np. 10 serwerów, brak analizy równoległej). Nie wolno jej stosować w przedsiębiorstwach do celów zarobkowych bez wyraźnego pozwolenia.",
        doc_terms_l2: "Edycja PRO: Wymaga licencji. Odblokowuje potężne zasoby i analitykę. Licencja dla organizacji.",
        doc_terms_s2: "2. Ograniczenia i Rekomendacje",
        doc_terms_l3: "Zabrania się inżynierii wstecznej (reverse engineering) programu oraz kluczy RSA powiązanych ze sprzętem.",
        doc_terms_l4: "Oprogramowanie jest dostarczane 'TAK JAK JEST'. Otwierając połączenia na środowiskach produkcyjnych robisz to na własną odpowiedzialność, choć zachęcamy do asystowania sobie funkcją Dry Run.",

        doc_faq_title: "Często Zadawane Pytania (FAQ) i Rozwiązywanie Problemów",
        doc_faq_desc: "Przykłady z życia firmy wprowadzającej zmiany na dziesiątkach DB.",
        faq_q1: "Czy zapisywanie haseł do środowisk wysokiego ryzyka w Skrypterze jest bezpieczne?", faq_a1: "Tak. Hasła są 'spłaszczane' i zabezpieczane natywnym szyfrowaniem Microsoft DPAPI. Ten algorytm szyfruje dane bezpośrednio za pomocą poświadczeń sprzętowych (CPU, TPM) oraz profilu Windows – nie ma możliwości ich odczytania na innym komputerze lub w innej instalacji.",
        faq_q2: "Jak silnik radzi sobie z zawieszonymi skryptami z uwagi na np. deadlocki?", faq_a2: "Zaimplementowany system równoległy to nie tylko wątki. To framework zarządzający przerwaniami (CancellationToken). W dowolnej chwili możesz przerwać wiszący proces skryptu na serwerze bez konieczności zabijania całego Menadżera Zadań.",
        faq_q3: "Co jeśli puszczam Update na 40 bazach i w 17 wystąpi krytyczny błąd struktury?", faq_a3: "Błąd zostanie przechwycony bez przerywania procedur dla pozostałych 23 baz. Panel podsumowania zgrupje ten incydent do 'Najczęstszych Błędów' dla szybszej analizy a Timeline wyeksportuje uszkodzone pozycje do zbadania w zespole.",
        faq_q4: "Czy SQLSkrypter na pewno działa offline?", faq_a4: "Tak. 100% offline. Projektowany był dla sieci zamkniętych (air-gapped) w środowiskach bankowych.",
        faq_q5: "Czy aplikacja wysyła dane na zewnątrz?", faq_a5: "Nigdy. Narzędzie nie posiada sub-rutyn telemetrii. Żadne logi, crash-reporty, statystyki sesji ani żadne skrawki zapytań SQL nie są w żaden sposób agregowane.",
        faq_usecases: "Przykłady Użycia (Use Cases)",
        faq_u1_h: "Integracja Schematów (Dry Run)", faq_u1: "Dodajesz kolumnę na 60 bazach klienckich? Funkcja Dry Run wrapuje egzekucję w bezpieczną transakcję (rollback). Wykryjesz bazę odmienną schematycznie zanim zniszczysz dane w 59 pozostałych.",
        faq_u2_h: "Audyt Zgodności (Audit-by-Error)", faq_u2: "Weryfikuj istnienie indeksu bezpieczeństwa. Zbuduj skrypt, który wyrzuca RAISERROR przy braku indeksu. Serwery świecące na czerwono w Timeline od razu wskażą naruszenia bezpieczeństwa.",
        faq_u3_h: "Konserwacja Floty (Tagowanie)", faq_u3: "Chcesz zredukować logi na 40 środowiskach DEV? Filtruj drzewo etykietą 'Dev' w Eksploratorze. Zaznaczasz grupę i bezpiecznie czyścisz bazy bez stresu o pomyłkowe podpięcie Produkcji.",
        faq_u4_h: "Awarie Krytyczne (Paralelizacja)", faq_u4: "Znaleziono groźną lukę w procedurze przechowywanej. Puszczasz równoległą poprawkę na 200 baz SQL. Pełne raporty błędów i weryfikację dostępności badasz na żywo poprzez Panel Grupujący.",

        man_pg_t: "Instrukcja Użytkownika", man_pg_d: "Operacje na panelach, specyfikacja ograniczeń licencyjnych oraz architektura v2.0.0.",
        m_s1: "Porównanie Wersji Standard i PRO", m_s1_d: "Baza funkcji używanych w produkcji.",
        m_s2: "Ustawianie Środowisk", m_s2_d: "Grupowanie serwerów w warstwach logicznych używając znaczników kolorystycznych.",
        m_s3: "Wykonywanie Skryptów i Tryby", m_s3_d: "Zarządzanie bezpieczeństwem procedur T-SQL na produkcji.",
        m_s4: "Narzędzia Zwiększające Produktywność (Tylko w PRO)", m_s4_d: "Przegrzebuj bazy w locie, nawiguj tysiącami elementów i twórz paczki plików XML.",
        m_s5: "Bezpieczeństwo Poświadczeń", m_s5_d: "DPAPI i odcięcie od internetu sprawiają sen administratora spokojniejszym.",

        m_s1_b1: "- Zobacz dokument <a href='licensing.html' style='color: var(--accent-blue); text-decoration: underline;'>Licencjonowanie</a>, aby poznać ścisłe limity.",
        m_s2_b1: "Wersja Standard: Możesz stworzyć do 3 warstw logicznych środowisk.",
        m_s2_b2: "Identyfikacja wizualna: Dowolne dobieranie kolorów w celu ochrony Produkcji.",
        m_s3_b1: "Tryb Sekwencyjny: Egzekucja pętli jedna po drugiej. Małe zużycie CPU.",
        m_s3_b2: "Tryb Dry Run (PRO): Hermetyczne pule transakcji symulujące zapytania bez ryzyka modyfikacji.",
        m_s4_b1: "Panele Grupujące (Chips): Filtruj całe gałęzie natychmiast klikając ikony.",
        m_s4_b2: "Mobilność Konfiguracji: Certyfikuj swoje ustawienia twardym szyfrowaniem AES 256.",
        m_s4_b3: "Sesje Stanu: Odtwórz setki zaznaczonych serwerów jednym kliknięciem z pliku .skrsession.",
        m_s5_b1: "Absolutnie brak jakiejkolwiek telemetrii przesyłanej na zewnątrz.",
        m_s5_b2: "Klucze wpisywane offline. Nie weryfikujemy ich w żadnej chmurze powiązanej z narzędziem.",
        m_s5_b3: "Twarde izolowanie haseł używając maszynowej ochrony Microsoft DPAPI.",


        // Download
        dl_title: "Pobierz SQLSkrypter", dl_ver: "Wersja: 2.0.0", dl_date: "Data Wydania: Q2 2026", dl_btn: "Instalator (.exe)", dl_sys: "Wymaganania techniczne: Windows 10/11 x64, .NET 8.0 Desktop Runtime, Min. 4GB RAM CPU wielordzeniowy (dla operacji równolełych).",

        // Footer
        ft_manual: "Dokumentacja", ft_faq: "FAQ", ft_licd: "Licencje", ft_change: "Changelog",
        ft_priv: "Prywatność", ft_terms: "Regulamin", ft_contact: "Kontakt"
    }
};

// --- Decrypt Text Effect ---
function decodeText(element) {
    const originalText = element.getAttribute('data-original') || element.innerText;
    if (!element.getAttribute('data-original')) {
        element.setAttribute('data-original', originalText);
    }
    
    const chars = "!<>-_\\\\/[]{}—=+*^?#_";
    let iterations = 0;
    
    clearInterval(element.decodeInterval);
    
    element.decodeInterval = setInterval(() => {
        element.innerText = originalText.split("").map((letter, index) => {
            if(index < iterations) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        
        if(iterations >= originalText.length){
            clearInterval(element.decodeInterval);
            element.innerText = originalText;
        }
        iterations += Math.max(originalText.length / 15, 1);
    }, 30);
}

// --- Terminal Copy Logic ---
window.copySnippet = function(el) {
    const code = el.querySelector('.code').innerText;
    navigator.clipboard.writeText(code);
    const icon = el.querySelector('.copy-icon');
    icon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#98ddff" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    setTimeout(() => {
        icon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    }, 2000);
}

function changeLang(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
            if (key === 'h1_title') {
                el.setAttribute('data-original', translations[lang][key]);
                decodeText(el);
            }
        }
    });

    const switcher = document.querySelector('.lang-switcher');
    if(switcher) switcher.value = lang;

    document.documentElement.lang = lang;
    localStorage.setItem('sqlskrypter_lang', lang);
}

// GSAP Scroll Animations
function initScrollAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Standard singleton reveals
        gsap.utils.toArray('.reveal').forEach((elem) => {
            gsap.fromTo(elem, 
                { autoAlpha: 0, y: 40 }, 
                { 
                    autoAlpha: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Group reveals (staggered lists and grids)
        gsap.utils.toArray('.reveal-group').forEach((group) => {
            const children = group.children;
            gsap.fromTo(children, 
                { autoAlpha: 0, y: 40 }, 
                { 
                    autoAlpha: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: group,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Horizontal Gallery logic has been removed in favor of native CSS scroll snapping.
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let initialLang = localStorage.getItem('sqlskrypter_lang');
    if (!initialLang) {
        initialLang = 'en';
    }
    
    // Make nav link active based on current path
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // 1. DOM Injections (Progress Bar & Custom Cursor)
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);

    const cursorDot = document.createElement('div');
    cursorDot.id = 'custom-cursor-dot';
    const cursorRing = document.createElement('div');
    cursorRing.id = 'custom-cursor-ring';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    gsap.set([cursorDot, cursorRing], { opacity: 0 });
    let cursorInit = false;

    // 2. Mouse Glow Spotlight & Magnetic Buttons
    const glow = document.querySelector('.sf-central-glow');
    const magneticBtns = document.querySelectorAll('.btn');

    document.addEventListener('mousemove', (e) => {
        if (!cursorInit) {
            gsap.set([cursorDot, cursorRing], { opacity: 1, x: e.clientX, y: e.clientY });
            cursorInit = true;
        }

        // Cursor tracking
        gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0, ease: 'none' });
        gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' });

        // Glow
        if (glow) {
            const x = e.clientX;
            const y = e.clientY;
            glow.style.background = `radial-gradient(circle 600px at ${x}px ${y}px, rgba(0, 162, 255, 0.12), transparent 70%)`;
        }
    });

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
            gsap.to(btn, { x: x, y: y, duration: 0.3, ease: 'power2.out' });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
        });
    });

    // Cursor Hover States
    document.querySelectorAll('a, button, select, .terminal-snippet, .feat-card, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorRing, { width: 40, height: 40, backgroundColor: 'rgba(152, 221, 255, 0.1)', borderColor: 'rgba(152, 221, 255, 0.8)', duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursorRing, { width: 24, height: 24, backgroundColor: 'transparent', borderColor: 'rgba(152, 221, 255, 0.5)', duration: 0.3 });
        });
    });

    // 3. 3D Tilt Effect for premium cards
    const tiltCards = document.querySelectorAll('.feat-card, .license-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -6; // Up to 6deg tilt
            const rotateY = ((x - centerX) / centerX) * 6;
            
            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                ease: 'power1.out',
                duration: 0.4
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.7, ease: 'power2.out' });
        });
    });

    // Initialize scrolling logic
    changeLang(initialLang);
    initScrollAnimations();

    // 4. Scroll Progress Bar logic
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.to('#scroll-progress', {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3
            }
        });
    }

    // 5. Lightbox System
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <div class="lightbox-nav prev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </div>
        <div class="lightbox-nav next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
        <img class="lightbox-content" src="" alt="Preview">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item img, .gallery-item .screenshot-placeholder'));
    let currentIdx = 0;
    let isThrottled = false;

    const getSrc = (item) => {
        if (item.tagName === 'IMG') return item.src;
        const style = window.getComputedStyle(item);
        const bg = style.backgroundImage;
        return (bg && bg !== 'none') ? bg.slice(5, -2) : null;
    };

    const updateLightbox = (index) => {
        currentIdx = (index + galleryItems.length) % galleryItems.length;
        const src = getSrc(galleryItems[currentIdx]);
        if (src) {
            gsap.to(lightboxImg, { opacity: 0, scale: 0.95, duration: 0.2, onComplete: () => {
                lightboxImg.src = src;
                gsap.to(lightboxImg, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
            }});
        }
    };

    const openLightbox = (index) => {
        currentIdx = index;
        const src = getSrc(galleryItems[currentIdx]);
        if (src) {
            lightboxImg.src = src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            gsap.fromTo(lightboxImg, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' });
        }
    };

    const closeLightbox = () => {
        lightbox.classList.add('closing');
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.classList.remove('closing');
            document.body.style.overflow = '';
        }, 400);
    };

    // 6. Gallery Drag-to-Scroll Engine
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const allGalleryImgs = galleryWrapper.querySelectorAll('img');
    let isGalleryDragging = false;
    let startX, scrollLeft, dragDist = 0;
    let lastX = 0;

    // Prevent native browser dragging for images
    allGalleryImgs.forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
        img.style.userSelect = 'none';
        img.style.webkitUserDrag = 'none';
    });

    const onDragStart = (e) => {
        isGalleryDragging = true;
        galleryWrapper.classList.add('is-dragging');
        // Stop CSS snapping while we are manually controlling the position
        galleryWrapper.style.scrollSnapType = 'none';
        
        // Use clientX for more consistent cross-browser dragging
        startX = e.clientX;
        lastX = e.clientX;
        scrollLeft = galleryWrapper.scrollLeft;
        dragDist = 0;
        
        // Custom cursor visual feedback
        gsap.to(cursorRing, { scale: 1.5, duration: 0.3 });
    };

    const onDragMove = (e) => {
        if (!isGalleryDragging) return;
        
        // Failsafe: if mouse button is not pressed, stop dragging immediately
        if (e.buttons !== 1) {
            onDragEnd(e);
            return;
        }

        e.preventDefault();
        
        lastX = e.clientX;
        const x = e.clientX;
        const currentWalk = x - startX;
        galleryWrapper.scrollLeft = scrollLeft - currentWalk;
        dragDist = Math.abs(currentWalk);
    };

    const onDragEnd = (e) => {
        if (!isGalleryDragging) return;
        
        isGalleryDragging = false;
        galleryWrapper.classList.remove('is-dragging');
        
        // Re-enable snapping immediately so scrollIntoView works with it
        galleryWrapper.style.scrollSnapType = 'x mandatory';

        // Swipe Detection
        const endX = e && e.clientX ? e.clientX : lastX;
        const swipeDiff = startX - endX;
        const threshold = 50; 

        if (Math.abs(swipeDiff) > threshold) {
            const direction = swipeDiff > 0 ? 1 : -1;
            
            // 1. Find the item that was closest to center when we started
            const itemWidth = galleryItems[0].offsetWidth + parseInt(window.getComputedStyle(galleryItems[0]).marginRight);
            const baseIndex = Math.round(scrollLeft / itemWidth);
            
            // 2. Target index
            let targetIndex = baseIndex + direction;
            targetIndex = Math.max(0, Math.min(targetIndex, galleryItems.length - 1));

            // 3. Use native scrollIntoView which is 100% compatible with scroll-snap
            // This is exactly how 'arrow keys' work internally
            galleryItems[targetIndex].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
        
        gsap.to(cursorRing, { scale: 1, duration: 0.3 });
    };

    // Attach listeners
    galleryWrapper.addEventListener('mousedown', onDragStart);
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('blur', onDragEnd);

    // Gallery item click (distinguish between drag and true click)
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            // Only open lightbox if the user actually clicked (moved less than 10px)
            if (dragDist < 10) {
                openLightbox(index);
            }
        });
    });


    // Navigation buttons
    lightbox.querySelector('.lightbox-nav.prev').addEventListener('click', (e) => {
        e.stopPropagation();
        updateLightbox(currentIdx - 1);
    });
    lightbox.querySelector('.lightbox-nav.next').addEventListener('click', (e) => {
        e.stopPropagation();
        updateLightbox(currentIdx + 1);
    });

    // Close logic
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.closest('.lightbox-close')) {
            closeLightbox();
        }
    });

    // Keyboard & Wheel
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') updateLightbox(currentIdx + 1);
        if (e.key === 'ArrowLeft') updateLightbox(currentIdx - 1);
    });

    lightbox.addEventListener('wheel', (e) => {
        if (!lightbox.classList.contains('active') || isThrottled) return;
        
        // Only trigger if movement is significant (avoids hyper-sensitivity)
        const threshold = 20;
        if (Math.abs(e.deltaX) > threshold || Math.abs(e.deltaY) > threshold) {
            e.preventDefault();
            isThrottled = true;
            
            if (e.deltaY > 0 || e.deltaX > 0) updateLightbox(currentIdx + 1);
            else updateLightbox(currentIdx - 1);

            setTimeout(() => { isThrottled = false; }, 500); // 500ms block between transitions
        }
    }, { passive: false });

    // Anchor Hash Fix for cross-page navigation
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    }
});
