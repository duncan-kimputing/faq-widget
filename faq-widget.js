// ============================================================
// FAQ WIDGET - Custom Web Component for Wix
// ============================================================
//
// HOW TO EDIT FAQ DATA:
// Scroll down to the FAQ_DATA section below and edit the
// categories and questions. The format is simple:
//
// {
//   category: "Category Name",
//   questions: [
//     { q: "Question text?", a: "Full answer text here." },
//     { q: "Another question?", a: "Another answer." },
//   ]
// }
// ============================================================

const FAQ_DATA = [
  {
    category: "Product & Capabilities",
    questions: [
      // 1.1 Overview (Q1-Q6)
      { q: "What is CenterTest?", a: "CenterTest is an enterprise-grade, Java-based test automation framework developed by Kimputing. While purpose-built with deep native understanding of Guidewire InsuranceSuite (including PolicyCenter, BillingCenter, ClaimCenter, ContactManager, and digital portals), CenterTest is a sophisticated automation platform capable of testing across your entire IT ecosystem. The framework can automate any system accessible through Java: third-party applications, APIs, legacy systems, custom portals, and external integrations. If you can touch it with Java, you can test it with CenterTest." },
      { q: "Which Guidewire versions does CenterTest support?", a: "CenterTest supports all Guidewire versions from v7 through the latest Cloud release, including the complete alphabet of ski resort updates. A single CenterTest implementation can test multiple Guidewire versions simultaneously, enabling organizations to validate upgrades, run parallel environments, or support post-acquisition platform consolidation." },
      { q: "What Guidewire Centers does CenterTest support?", a: "CenterTest supports the complete Guidewire InsuranceSuite: PolicyCenter, BillingCenter, ClaimCenter, and ContactManager. The framework also supports digital portals including Producer Engage and Customer Engage. Beyond Guidewire, CenterTest can integrate with any external system in your testing workflows, including rating engines, document management systems, payment processors, or legacy policy administration systems." },
      { q: "How many pre-built components does CenterTest include?", a: "CenterTest includes 103 out-of-the-box reusables, which are high-level workflow components built on layers of abstract base classes, helper utilities, and widget interactions. These reusables serve as building blocks for rapid scenario creation. The framework also includes 202 end-to-end test scenarios covering common and designated function workflows, plus 306 pre-configured flows spanning all Guidewire InsuranceSuite out-of-the-box lines of business. Each reusable encapsulates dozens of underlying operations, so a single call like PC.createPersonalAutoSubmission() orchestrates page navigation, field population, validation handling, and wizard progression automatically." },
      { q: "Is CenterTest a SaaS product?", a: "No. CenterTest is deployed locally within customer environments. There is no cloud dependency, subscription service, or external data transmission. The core framework does not use AI, machine learning, or agentic processes. This architecture enables rapid deployment in secure, air-gapped, or highly regulated enterprise environments without external dependencies." },
      { q: "What programming language does CenterTest use?", a: "CenterTest is built on Java, but you don't need to be a Java developer to use it effectively. Test scenarios read like plain English. All scenarios are data-driven, so Java skills are only needed when extending the framework or creating new scenarios or reusables. No programming expertise is required for day-to-day test data management, test execution, or reviewing results. Test data is managed in common-language, object-oriented data structures, allowing business teams to easily define and expand test coverage. Tests can be kicked off via pipeline (Jenkins, Azure DevOps, GitHub Actions, etc.), allowing anyone to trigger test suites without touching code. CenterTest integrates with all major test management platforms (TestRail, SpiraTest, ReportPortal), giving all stakeholders access to test results and CenterTest Output." },
      // 1.2 Testing Types (Q7-Q16)
      { q: "Does CenterTest support UI testing?", a: "Yes. CenterTest provides sophisticated end-to-end UI testing with native understanding of Guidewire widgets, PCF page structures, and asynchronous rendering patterns. Unlike generic Selenium wrappers that interact with raw HTML elements, CenterTest understands Guidewire's widget type system: dropdown searches, shuttle lists, date pickers, modal dialogs, wizard navigation, LVs (list views), DVs (detail views), and dynamic content loading all work out of the box without custom wait logic or brittle XPath expressions." },
      { q: "Does CenterTest support API testing?", a: "Yes. CenterTest supports API testing for custom integrations, Guidewire Cloud APIs (including Edge APIs), and third-party services. API tests can execute as standalone scenarios or integrate within end-to-end UI workflows for comprehensive validation. This enables hybrid testing patterns where a scenario might seed data via API, validate UI behavior, then verify downstream system updates through additional API calls." },
      { q: "Does CenterTest support performance testing?", a: "Yes. Any functional end-to-end scenario, including UI and API tests, can be repurposed for performance, load, and stress testing by configuring parameters such as ramp-up time, thread count, and iteration limits. This eliminates the need for separate performance testing software, specialized scripts, or duplicate test maintenance. Your functional regression suite becomes your performance baseline." },
      { q: "Does CenterTest support document testing?", a: "Yes. CenterTest supports direct opening and parsing of PDF documents for verification, including analysis by line, by section, or by pattern matching. The framework tracks document generation timing and enables validation of data both passed in through DDT (such as insured names and addresses) and generated during test execution (such as policy numbers and effective dates). This is critical for validating dec pages, policy documents, billing statements, and claims correspondence." },
      { q: "Does CenterTest support accessibility testing?", a: "Yes. Starting from version 5.5, CenterTest provides built-in accessibility testing using the Axe core engine. The framework can analyze any page during test execution and generates detailed Excel reports covering violations, passed rules, and impact-level statistics (Critical, Serious, Moderate, Minor). This capability supports portal testing against WCAG standards and helps organizations identify accessibility issues before they reach production." },
      { q: "Does CenterTest support multi-user testing?", a: "Yes. CenterTest enables sophisticated, realistic end-to-end testing by supporting multiple concurrent user connections within a single scenario. Each user (defined by role and permissions) operates in their own browser session while sharing data between sessions. For example, a scenario might have a producer create a submission, then an underwriter review and approve it, then a billing clerk verify the invoice, all within one coordinated test execution. This mirrors real-world workflows where multiple personas interact with the same business transaction." },
      { q: "Does CenterTest support multi-Center testing?", a: "Yes. CenterTest scenarios can span PolicyCenter, BillingCenter, ClaimCenter, and portals within a single test execution. Each application operates as an independent session, and sessions share data to enable true end-to-end workflow validation across the entire InsuranceSuite. A single scenario can create a policy in PC, verify the account in BC, file a claim in CC, and validate billing adjustments, all while tracking the policy number, claim number, and other generated data across systems." },
      { q: "Can CenterTest test non-Guidewire systems?", a: "Yes. While optimized for Guidewire, CenterTest is a sophisticated automation platform capable of testing across entire IT ecosystems. The framework can test third-party applications, external APIs, legacy systems, custom portals, rating engines, document repositories, and any system accessible through Java. If you can touch it with Java, you can test it with CenterTest." },
      { q: "Does CenterTest support role-based access and permissions testing?", a: "Yes. CenterTest separates role definitions from credential management to enable flexible permissions testing. Test scenarios define users by logical role names, and actual credentials are managed in backend property files, completely separate from test code. This architecture enables two powerful testing patterns: first, you can validate end-to-end workflows using users with global permissions, then swap credentials in the property files to test with restricted roles, all without modifying a single line of test code. This makes it easy to verify that producers cannot access underwriter-only functions, confirm that read-only users cannot modify records, or validate that sensitive fields are hidden from unauthorized roles." },
      { q: "Does CenterTest support SSO and MFA authentication?", a: "Yes. CenterTest handles Single Sign-On (SSO) and Multi-Factor Authentication (MFA) workflows that are common in enterprise Guidewire deployments. The framework can navigate SSO redirects, handle authentication prompts, and manage session tokens across test execution. For MFA scenarios, CenterTest supports integration with authentication providers and can work with TOTP (time-based one-time passwords) or other verification methods depending on your security configuration." },
      // 1.3 Source-Code Generators (Q17-Q22)
      { q: "What are CenterTest source-code generators?", a: "CenterTest source-code generators read the entire structure of your Guidewire Centers and automatically create test framework assets directly from Guidewire source code. The generators produce page object models (POMs), type list enums, product model helpers, and utility classes. This eliminates weeks of manual development work while ensuring test assets remain perfectly synchronized with your specific Guidewire implementation, including all customizations." },
      { q: "What specific assets do the generators create?", a: "CenterTest generators create four categories of test assets: Page Object Models (POMs) with strongly-typed widget references for all PCF pages across PolicyCenter, BillingCenter, ClaimCenter, ContactManager, and portals, enabling IDE autocomplete and compile-time validation; Type List Enums replacing hardcoded strings with compile-time validated type list values; Product Model Objects with typed accessor methods for coverages, conditions, exclusions, and modifiers; and Helper Utilities that facilitate communication across test execution contexts, enabling scenarios to pass policy numbers, account names, and other generated data between reusables and across Centers." },
      { q: "How do CenterTest generators differ from standard page object generators?", a: "Standard generators scrape rendered HTML and create generic element references based on IDs, CSS classes, or XPath expressions. When Guidewire changes its HTML output (which happens frequently between versions), those locators break. CenterTest generators read PCF files directly from Guidewire source code, understanding the widget type system rather than HTML output. Generated POMs use widget classes that understand Guidewire-specific behaviors: asynchronous loading, wizard step validation, shuttle list interactions, and modal dialog handling all work automatically." },
      { q: "How long does initial generation take?", a: "Initial generation completes in minutes. The generator reads your Guidewire source directory and outputs all page objects, type lists, and product models in a single coordinated process. After generation, teams can begin scenario development immediately. Regeneration after Guidewire upgrades or configuration changes is equally fast, keeping your test assets synchronized with minimal effort." },
      { q: "Can generators be run independently for specific artifact types?", a: "Yes. CenterTest provides separate generation modes: GENERATEPAGES, GENERATETYPELISTS, GENERATEPRODUCTMODEL, and GENERATEALL. While running GENERATEALL is most common, individual artifact types can be regenerated independently when needed. There is no required sequence for generation." },
      { q: "How do generators handle unknown widget types?", a: "When the generator encounters an unknown widget type, it falls back to a generic input widget to ensure scenarios can still execute. Kimputing then implements the specific widget type in the core framework, so future generations handle that widget correctly. This means custom Guidewire widgets or new widget types introduced in ski resort releases are addressed through framework updates rather than requiring workarounds in your test code." },
      // 1.4 CenterTest Version Compatibility (Q23-Q24)
      { q: "What is CenterTest Version Compatibility?", a: "CenterTest Version Compatibility enables test scenarios created for any Guidewire version to execute against any other supported version. Scenarios written for v7, v8, or v9 can run unchanged against v10 and Cloud releases without modification. The framework identifies the target Guidewire version at runtime and applies appropriate widget handling automatically, abstracting away the differences between versions so your test code remains stable." },
      { q: "How does CenterTest Version Compatibility protect automation investments?", a: "Every scenario written today will run on future Guidewire versions without requiring specialized programming knowledge or framework modifications. When carriers migrate to Guidewire Cloud, adopt new versions, or consolidate platforms after acquisitions, existing scenarios continue executing without modification. This converts test automation from a depreciating asset into a durable, long-term strategic investment." },
      // 1.5 CenterTest Time Travel (Q25-Q28)
      { q: "What is CenterTest Time Travel?", a: "CenterTest Time Travel enables automated testing of date-sensitive workflows by managing system clock changes across the entire InsuranceSuite. Scenarios execute to specific points, pause for clock changes, then resume testing through policy renewals, billing cycles, delinquency processing, claims aging, and other date-dependent business processes. This allows you to test a full policy lifecycle (from submission through renewal or cancellation) in a single coordinated scenario." },
      { q: "Can CenterTest automatically change system clocks?", a: "Yes. CenterTest can automatically change and synchronize clocks across all Guidewire Centers to ensure proper environmental coordination and enable expansive automation. Alternatively, CenterTest can suspend scenarios with time travel requirements in restart mode and recommend the optimal date for manual clock changes." },
      { q: "What is the CenterTest Time Travel Best Day calculation?", a: "When multiple scenarios execute with different date requirements, CenterTest identifies the fewest clock changes necessary for maximum test coverage. This Best Day calculation minimizes date changes required, dramatically reducing overall execution time while expanding the number of time travel scenarios that can execute simultaneously." },
      { q: "How flexible is time travel date specification?", a: "For each time travel restart point, scenarios can specify a specific date, a date range, before/after conditions, or a number of days relative to an event like renewal or claims filing. Positive calculations move forward from policy effective date while negative calculations move backward from expiration date. This flexibility enables comprehensive lifecycle testing." },
      // 1.6 CenterTest Narratives (Q29-Q31)
      { q: "What are CenterTest Narratives?", a: "CenterTest Narratives transform technical test executions into business-readable documentation. Originally developed as Reverse-BDD, CenterTest Narratives produce human-readable output directly from test execution, providing business stakeholders with clear understanding of test coverage without implementing complex Cucumber or Gherkin frameworks." },
      { q: "What output formats do CenterTest Narratives support?", a: "CenterTest Narratives can generate output in natural language format or Given/When/Then Gherkin style based on organizational preference. The default is natural language showing the flow, with Gherkin available as an additional format. Language configuration files support localization for international teams." },
      { q: "How do CenterTest Narratives differ from traditional BDD?", a: "Traditional BDD requires complex, time-consuming Cucumber scenario creation that is only feasible after Guidewire development completes. This process is brittle, difficult to scale, and requires specialized support. CenterTest Narratives reverse this approach, generating human-readable output from executed scenarios. Business teams provide requirements through DDT spreadsheets and receive narrative output for easy consumption, without the Cucumber complexity." },
      // 1.7 CenterTest Analytics (Q32-Q35)
      { q: "What analytics capabilities does CenterTest provide?", a: "CenterTest Analytics includes three primary categories: Runtime Analytics with automatic capture of every click, field setting, and timing for each action, assertion, and process; Coverage Analytics for identification of PCF changes between Guidewire versions to ensure customizations receive test coverage; and Trend Analytics for monitoring execution patterns over time to identify slowdowns, environmental issues, and stability patterns." },
      { q: "Does CenterTest include pre-built dashboards?", a: "CenterTest does not include pre-built executive dashboards because every organization has different reporting needs and stakeholder requirements. Instead, CenterTest integrates with all major test management and reporting platforms (TestRail, ReportPortal, SpiraTest), allowing you to build custom dashboards tailored to your specific needs. The CenterTest Analytics database is directly accessible with a documented schema, and AI-assisted tools make sophisticated custom analyses straightforward. Organizations can query execution trends, identify flaky tests, track performance over time, and surface patterns that would be invisible in standard pass/fail reporting." },
      { q: "What is PCF Coverage Analytics?", a: "PCF Coverage Analytics identifies every change between PCF fields and properties across two Guidewire versions, tracking added, modified, and deleted elements. During test execution, CenterTest monitors widget interactions and maps them to known PCF modifications. Reports show exactly which customized elements have been tested versus which remain uncovered. This matters because CenterTest knows what you changed during development and knows whether or not you have tested it, giving you confidence that your customizations are validated before release." },
      { q: "What is CenterTest Output?", a: "CenterTest Output refers to the comprehensive set of artifacts and data produced during test execution. CenterTest provides test execution results via your test manager of choice, allowing you to customize reports and stakeholder dashboards. CenterTest Analytics records comprehensive test execution data for every click, every set, every assert, and much more. This enables your teams to perform custom analytics to uncover meaningful trends in failures and performance. CenterTest also provides a tremendous amount of optional test output based on the type and purpose of your test: video recordings, assertion logs, scheduled or failure-triggered screenshots, Playwright trace files, plain-English narrative reports, execution analytics, and test-generated data like policy and account numbers." },
      // 1.8 Video Recording (Q36-Q38)
      { q: "What video recording capabilities does CenterTest provide?", a: "CenterTest provides full single-stream recording of test execution from start to finish across all browser interactions. Recordings include overlays identifying actions at the test level, such as field settings with the interacted field highlighted. This creates visual documentation that non-technical stakeholders can review to validate test coverage." },
      { q: "How does CenterTest Output support business communication?", a: "CenterTest Output bridges the gap between technical execution and business understanding. Video recordings allow stakeholders to watch test execution and validate that scenarios match expected workflows. Narrative reports translate technical steps into plain-English documentation that business analysts can review without reading code. Assertion logs provide detailed evidence of what was verified and when. Screenshots capture the application state at critical moments or upon failure. Playwright trace files enable developers to step through execution for debugging. Combined, these artifacts provide comprehensive documentation for compliance, audit requirements, and stakeholder sign-off, all without requiring technical expertise to interpret." },
      { q: "Are screenshots captured automatically?", a: "Yes. Screenshots can be automatically captured when a test fails, or when scenarios throw assertion exceptions. Additionally, the takeScreenshot capability allows explicit screenshot capture at any point during execution, regardless of pass/fail status. Screenshots upload automatically to connected test managers and are stored with the test execution results." },
      // 1.9 Data-Driven Testing (Q39-Q41)
      { q: "What is CenterTest's data-driven testing architecture?", a: "CenterTest implements an Object-Oriented Data-Driven Testing (OODDT) architecture that minimizes data bloat while maximizing coverage scalability. Test data references logical entity names rather than raw values, with shared data sheets enabling single definitions that propagate across multiple scenarios. This means you define a \"StandardDriver\" or \"CaliforniaAddress\" once and reference it everywhere, rather than duplicating data across hundreds of test rows." },
      { q: "How does OODDT reduce maintenance burden?", a: "Traditional approaches require each test row to contain all data values. CenterTest defines entities once and references them by name. Changing a standard address updates one entity rather than hundreds of cells. Override columns allow scenario-specific variations while inheriting defaults, making intent clear while minimizing data surface area. Additionally, test data does not need to change during Guidewire migrations and upgrades. Tests are smart enough to ignore blank values for non-required fields, enabling a single scenario to drive hundreds of test variations through DDT without updating test code. When combined with the shared OODDT approach, this maximizes testing and test coverage while limiting the amount of test code and data you have to maintain." },
      { q: "Can business teams manage test data?", a: "Yes. Business teams provide test requirements through familiar Excel spreadsheet formats. Object references use logical names that business users understand, and override columns clearly show which values differ from defaults. No programming expertise is required to define test data." }
    ]
  },
  {
    category: "Architecture & Maintenance",
    questions: [
      { q: "What are CenterTest reusables?", a: "Reusables are modular, self-contained components that encapsulate common workflow steps. Each reusable can execute independently or chain with other reusables to form complete scenarios. CenterTest includes 103 out-of-the-box reusables covering common Guidewire operations. These are not simple functions; each reusable is built on layers of abstract base classes, helper utilities, and widget interactions." },
      { q: "How do reusables simplify maintenance?", a: "When Guidewire changes affect a workflow, fixing the impacted reusable automatically updates all scenarios using that component. A single update propagates across the entire test suite without modifying individual scenarios. If you have 500 scenarios that use CreatePersonAccount, and Guidewire changes the account creation wizard, you fix it once in the reusable and all 500 scenarios work again." },
      { q: "How do reusables differ from traditional shared functions?", a: "Traditional shared functions are static utilities without context. CenterTest reusables provide strong typing where each reusable is a distinct class with IDE-tracked usage, context injection providing browser, assertions, and data without global variables, composability allowing reusables to chain operations fluently, and impact analysis through IDE Find Usages showing all affected scenarios." },
      { q: "Can teams create custom reusables?", a: "Yes. Teams can extend existing reusables or create new ones to match unique Guidewire implementations. Custom reusables follow the same patterns as built-in components, ensuring consistency and enabling the same maintenance benefits." },
      { q: "What is compile-time detection?", a: "CenterTest uses strongly-typed Java classes for all Guidewire artifacts. When Guidewire changes break these references, Java compilation fails immediately with clear error messages identifying the exact location. This converts runtime failures into compile-time errors that can be addressed systematically before any test execution." },
      { q: "How quickly can teams identify all affected scenarios after a Guidewire update?", a: "After regeneration against an updated Guidewire environment, the IDE immediately shows all compile errors across the test project. Find Usages on any changed element shows every affected scenario. The time to identify all affected scenarios equals the time to compile, typically seconds to minutes depending on project size." },
      { q: "How does CenterTest Self-Healing work?", a: "CenterTest Self-Healing operates through the regeneration architecture rather than runtime detection. When Guidewire changes occur, generators regenerate framework assets from updated source code. The flattening architecture hides locator changes and widget type modifications throughout abstraction layers, allowing existing scenarios to continue functioning without modification." },
      { q: "What are CenterTest Restart Points?", a: "CenterTest Restart Points are checkpoints within scenarios that enable resumption from specific stages rather than starting over from the beginning. When a scenario fails or requires a pause, execution can restart from the most recent checkpoint, dramatically reducing debugging and re-execution time." },
      { q: "Why are Restart Points important?", a: "Complex end-to-end scenarios may take 15 minutes or longer to execute. Without restart points, debugging a failure at minute 12 requires running the full 15 minutes for each iteration. With restart points, debugging can begin from a checkpoint taking only 3 minutes, providing 5x faster debug cycles." },
      { q: "What is CenterTest Self-Managed Execution?", a: "CenterTest Self-Managed Execution monitors CI/CD suite execution results and automatically manages scenario retries and restarts. The system can rerun failed scenarios and restart specific scenarios from their unique point of failure, removing the need for DevOps involvement in routine test management." }
    ]
  },
  {
    category: "Guidewire Cloud & CI/CD",
    questions: [
      { q: "What are Guidewire Cloud Quality Gates?", a: "Guidewire Cloud Quality Gates are configurable verification checkpoints within the Guidewire Cloud Platform CI/CD pipeline. Quality Gates integrate testing results to enhance transparency and can block artifacts from progressing through deployment stages when verification criteria are not met." },
      { q: "What is Guidewire's Bring-Your-Own Testing framework?", a: "Bring-Your-Own Testing is Guidewire's framework enabling organizations to integrate existing testing investments into Guidewire Cloud Platform. The framework addresses challenges faced by carriers migrating to Cloud who have accumulated substantial testing resources during on-premise deployments." },
      { q: "How does CenterTest integrate with Guidewire Cloud Quality Gates?", a: "CenterTest integrates with Quality Gates through webhook consumption to trigger scenario execution automatically, verification API integration to propagate results, pre-merge and pre-promotion gates where CenterTest scenarios serve as verification criteria, and designated functions testing configurable as Quality Gate requirements." },
      { q: "What are designated functions?", a: "Designated functions are business-critical workflows that Guidewire mandates for automated testing in Cloud deployments. CenterTest supports Guidewire's designated functions requirement by tracking and evaluating specific flows during execution. The framework includes comprehensive designated function coverage across PolicyCenter, BillingCenter, and ClaimCenter." },
      { q: "What CI/CD platforms does CenterTest support?", a: "CenterTest integrates with all major CI/CD platforms including Jenkins, Azure DevOps, GitHub Actions, GitLab CI/CD, and TeamCity. Because CenterTest is a standard Java repository using Gradle, any pipeline can check out and run the process." },
      { q: "How does CenterTest accelerate Guidewire Cloud migrations?", a: "CenterTest Version Compatibility enables organizations to build comprehensive test coverage on their pre-Cloud implementation, then use those same scenarios to validate Cloud deployments on day one. This treats migration as Test-Driven Development where pre-Cloud scenarios define expected behavior and issues surface as failures to resolve." },
      { q: "What is Day One testing capability?", a: "Day One testing means organizations can begin automated testing immediately when their Cloud technical upgrade deploys, using scenarios already developed and validated on the pre-Cloud system. There is no waiting to rebuild test automation; the existing investment transfers directly." },
      { q: "How does CenterTest handle ski resort updates?", a: "When Guidewire releases ski resort updates, CenterTest absorbs changes through regeneration. The widget abstraction layers understand differences between Cloud releases, and CenterTest Self-Healing handles most modifications automatically. Scenarios continue functioning without requiring manual updates for routine version changes." }
    ]
  },
  {
    category: "Implementation & Services",
    questions: [
      { q: "How quickly can CenterTest be implemented?", a: "Initial automation for a single line of business typically delivers within four weeks, including policy creation, binding, and claims processes. Subsequent lines of business often build in parallel using shared components. Full enterprise automation may require a few months depending on scale and complexity." },
      { q: "Does Kimputing offer a proof of concept?", a: "Yes. Kimputing provides a no-risk proof of concept at no cost, typically completing within two weeks. A CenterTest architect and test writer create comprehensive, end-to-end, data-driven scenarios for the customer's Guidewire implementation designed to customer specifications." },
      { q: "What software is required to run CenterTest?", a: "CenterTest requires standard development tooling: JDK for Java-based test execution, IntelliJ IDEA as the development environment, Git for version control and test asset management, and the AnkrPt CenterTest plugin for IntelliJ." },
      { q: "Does CenterTest require access to Guidewire source code?", a: "Yes. The generators require access to Guidewire source code to create page objects, type lists, and product models. Generation runs within the customer's environment, ensuring complete control over source access and protecting intellectual property." },
      { q: "What test management systems does CenterTest support?", a: "CenterTest provides pre-built integrations for ReportPortal, TestRail, and Inflectra's SpiraTest. Results synchronize in real-time during execution, with screenshots, recordings, and trace files uploading automatically. Other management systems can be supported with additional development time." },
      { q: "What managed service options does Kimputing offer?", a: "Kimputing provides flexible engagement models: single project engagements for rate testing, performance testing, or Cloud migration support; automation practice building including team training and framework customization; migration and upgrade support; and ongoing support including help desk access, HealthCheck reviews, and framework maintenance." },
      { q: "Can customers operate CenterTest independently after implementation?", a: "Yes. Customers can operate independently after onboarding. Scenarios are maintainable and readable using standard Java skills. The strongly-typed architecture ensures IDE support for navigation and refactoring. Documentation access through AI-assisted search provides self-service support." },
      { q: "What seeding capabilities does CenterTest provide?", a: "CenterTest supports enhanced data seeding to automatically generate accounts, policies, claims, and other business entities using parameterized inputs. Teams can control the number of rows produced for each seeded entity, enabling bulk data creation for batch processing, edge case validation, or performance simulation." },
      { q: "What is CenterTest Pause Processing?", a: "CenterTest Pause Processing enables hybrid automation and manual testing within a single execution. Automation executes to a defined point and pauses, allowing testers to manually interact with the application for exploratory testing or validation. When exploration completes, testers signal CenterTest to resume automation." },
      { q: "What training does Kimputing provide?", a: "Upon licensure, Kimputing provides complete hands-on training covering CenterTest framework architecture, scenario development, reusables extension, DDT spreadsheet configuration, generator usage, Guidewire test automation best practices, CI/CD integration, and test manager integration. Deployment and training can be accomplished in less than one day for teams with basic Java proficiency." }
    ]
  },
  {
    category: "AI & Support",
    questions: [
      { q: "Does CenterTest use AI?", a: "The CenterTest framework itself does not use AI, machine learning, or agentic processes. CenterTest is a deterministic, locally-deployed Java-based test automation framework. Kimputing introduced stand-alone AI MCP solutions in 2025 to supplement CenterTest development, providing AI assistance independent from the core framework." },
      { q: "What is the MCP architecture?", a: "MCP (Model Context Protocol) provides a client/server architecture enabling AI assistants to access context from multiple sources while maintaining security boundaries. The architecture consists of IDE integration, test code access through JetBrains MCP, documentation access through CenterTest MCP, and AI assistants like Claude Code as the orchestrating client." },
      { q: "Why are AI tools separate from the framework?", a: "Separation provides several benefits: enterprise security where AI tools never access production environments, credentials, or protected source code; deterministic results where test execution produces consistent, reproducible results without AI variability; rapid deployment in secure environments without AI infrastructure requirements; and AI benefits through supplemental tooling on non-sensitive artifacts." },
      { q: "What AI-assisted capabilities does the MCP architecture provide?", a: "The MCP architecture provides documentation intelligence for instant guidance on framework functionalities, widget discovery to search through generated widget code, stacktrace analysis with CenterTest-specific insights for error diagnosis, and test code assistance for scenario generation following established patterns and best practices." },
      { q: "What data can AI tools access?", a: "AI tools access only CenterTest documentation, test code in the active branch workspace, test data files (Excel, JSON) for data-driven context, test configuration files, and test execution analytics data." },
      { q: "What data is protected from AI access?", a: "AI tools should never access Guidewire source code or production application code, production credentials or database connection strings, production data or personally identifiable information, application runtime environments or API endpoints, or the main test code repository (only the checked-out branch)." },
      { q: "What is CenterTest HealthCheck?", a: "CenterTest HealthCheck is an internal code and data analysis tooling suite that reviews common testing patterns and identifies optimization opportunities. Kimputing uses HealthCheck during engagements and ongoing support to ensure test suites remain efficient and maintainable as they scale." },
      { q: "What ongoing support does Kimputing provide?", a: "Licensed customers receive help desk access for questions beyond documentation, framework maintenance during Guidewire upgrades, HealthCheck reviews for optimization opportunities, and extended services for complex implementations." },
      { q: "What happens when CenterTest encounters issues during execution?", a: "CenterTest provides detailed exception codes with documented causes and solutions. The exception list maps errors to known issues and recommended fixes. AI-assisted stacktrace analysis provides CenterTest-specific insights, converting cryptic errors into actionable guidance. Combined with CenterTest Self-Managed Execution, many transient issues resolve automatically through retries." }
    ]
  }
];

// ============================================================
// WIDGET CODE - Edit below only if you know what you're doing
// ============================================================

class FaqWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isExpanded = false;
    this.activeCategory = null;
    this.expandedQuestions = new Set();
    this.searchQuery = '';
    this.boundClickOutside = this.handleClickOutside.bind(this);
  }

  connectedCallback() {
    this.loadFont();
    this.render();
    this.attachEventListeners();
  }

  loadFont() {
    // Load Poppins font in the main document if not already loaded
    if (!document.querySelector('link[href*="Poppins"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap';
      document.head.appendChild(link);
    }
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.boundClickOutside);
  }

  getStyles() {
    return `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

      :host {
        display: block;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        --accent-color: #4EC3E0;
        --text-color: #000000;
        --bg-color: #FFFFFF;
        --border-radius: 25px;
        --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        --transition: all 0.3s ease;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .faq-container {
        width: 100%;
        max-width: 650px;
        margin: 0 auto;
        position: relative;
      }

      /* Collapsed Search Bar */
      .search-bar {
        background: var(--bg-color);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: 16px 24px;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        transition: var(--transition);
        border: 1px solid #e0e0e0;
      }

      .search-bar:hover {
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
      }

      .search-bar.hidden {
        display: none;
      }

      .search-icon {
        width: 20px;
        height: 20px;
        stroke: #666;
        flex-shrink: 0;
      }

      .search-placeholder {
        color: #666;
        font-size: 15px;
        font-weight: 400;
      }

      /* Expanded Panel */
      .expanded-panel {
        display: none;
        background: var(--bg-color);
        border-radius: 20px;
        box-shadow: var(--shadow);
        overflow: hidden;
        border: 1px solid #e0e0e0;
        max-height: 70vh;
        flex-direction: column;
      }

      .expanded-panel.visible {
        display: flex;
      }

      /* Search Header */
      .search-header {
        padding: 16px 20px;
        border-bottom: 2px solid var(--accent-color);
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
      }

      .search-input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--text-color);
        background: transparent;
      }

      .search-input::placeholder {
        color: #999;
      }

      .close-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .close-btn svg {
        width: 20px;
        height: 20px;
        stroke: #666;
        transition: stroke 0.2s ease;
      }

      .close-btn:hover svg {
        stroke: #000;
      }

      /* Content Area */
      .content-area {
        flex: 1;
        overflow-y: auto;
        padding: 8px 0;
        text-align: left;
      }

      /* Categories */
      .category-item {
        border-bottom: 1px solid #f0f0f0;
      }

      .category-item:last-child {
        border-bottom: none;
      }

      .category-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 20px;
        cursor: pointer;
        transition: background 0.2s ease;
      }

      .category-header:hover {
        background: #f9f9f9;
      }

      .category-name {
        font-size: 14px;
        font-weight: 500;
        color: var(--text-color);
      }

      .arrow {
        width: 12px;
        height: 12px;
        stroke: #666;
        stroke-width: 2;
        fill: none;
        transition: transform 0.3s ease;
      }

      .arrow.rotated {
        transform: rotate(180deg);
      }

      /* Questions List */
      .questions-list {
        display: none;
        padding: 0 20px 12px 20px;
      }

      .questions-list.visible {
        display: block;
      }

      .question-item {
        padding: 10px 0;
        border-bottom: 1px solid #f5f5f5;
      }

      .question-item:last-child {
        border-bottom: none;
      }

      .question-header {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        padding: 4px 0;
      }

      .question-header:hover .question-text {
        color: #333;
      }

      .question-arrow {
        width: 10px;
        height: 10px;
        stroke: #888;
        stroke-width: 2;
        fill: none;
        flex-shrink: 0;
        margin-top: 5px;
        transition: transform 0.3s ease;
      }

      .question-arrow.rotated {
        transform: rotate(90deg);
      }

      .question-content {
        flex: 1;
      }

      .question-text {
        font-size: 14px;
        font-weight: 400;
        color: var(--text-color);
        line-height: 1.4;
        transition: color 0.2s ease;
      }

      .answer-preview {
        font-size: 12px;
        color: #666;
        margin-top: 4px;
        line-height: 1.4;
        font-weight: 300;
      }

      .answer-full {
        display: none;
        font-size: 12px;
        color: #444;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--accent-color);
        line-height: 1.6;
        font-weight: 300;
      }

      .answer-full.visible {
        display: block;
      }

      /* Search Results */
      .search-results {
        padding: 8px 20px;
      }

      .no-results {
        padding: 20px;
        text-align: center;
        color: #666;
        font-size: 14px;
      }

      .search-result-item {
        padding: 12px 0;
        border-bottom: 1px solid #f0f0f0;
      }

      .search-result-item:last-child {
        border-bottom: none;
      }

      .result-category {
        font-size: 11px;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
        font-weight: 500;
      }

      /* Scrollbar */
      .content-area::-webkit-scrollbar {
        width: 6px;
      }

      .content-area::-webkit-scrollbar-track {
        background: #f5f5f5;
      }

      .content-area::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 3px;
      }

      .content-area::-webkit-scrollbar-thumb:hover {
        background: #aaa;
      }

      /* Mobile Responsive */
      @media (max-width: 700px) {
        .faq-container {
          max-width: 100%;
          padding: 0 12px;
        }

        .expanded-panel {
          max-height: 85vh;
          border-radius: 16px;
        }

        .search-bar {
          border-radius: 20px;
          padding: 14px 20px;
        }

        .search-placeholder {
          font-size: 14px;
        }

        .search-header {
          padding: 14px 16px;
        }

        .search-input {
          font-size: 16px; /* Prevents zoom on iOS */
        }

        .category-header {
          padding: 12px 16px;
        }

        .category-name {
          font-size: 14px;
        }

        .questions-list {
          padding: 0 16px 10px 16px;
        }

        .question-text {
          font-size: 13px;
        }

        .answer-preview,
        .answer-full {
          font-size: 12px;
        }
      }

      /* Focus states for accessibility */
      .search-input:focus {
        outline: none;
      }

      .category-header:focus-visible,
      .question-header:focus-visible,
      .close-btn:focus-visible {
        outline: 2px solid var(--accent-color);
        outline-offset: 2px;
      }

      /* Book a Demo Button */
      .demo-button-container {
        padding: 16px 20px;
        border-top: 1px solid #f0f0f0;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
      }

      .demo-button {
        display: inline-block;
        width: 115px;
        height: 45px;
        background: #000000;
        color: #ff8122;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        text-decoration: none;
        border: 2px solid #ff8122;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease;
        line-height: 41px;
        text-align: center;
      }

      .demo-button:hover {
        background: #FFFFFF;
        color: #000000;
        border-color: #000000;
      }

      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        * {
          transition: none !important;
        }
      }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.getStyles()}</style>
      <div class="faq-container">
        <!-- Collapsed Search Bar -->
        <div class="search-bar" id="searchBar">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <span class="search-placeholder">Search FAQ or browse categories...</span>
        </div>

        <!-- Expanded Panel -->
        <div class="expanded-panel" id="expandedPanel">
          <div class="search-header">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              class="search-input"
              id="searchInput"
              placeholder="Type to search..."
              autocomplete="off"
            >
            <button class="close-btn" id="closeBtn" aria-label="Close FAQ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="content-area" id="contentArea">
            ${this.renderCategories()}
          </div>
          <div class="demo-button-container">
            <a href="https://kimputing.com/book-a-demo/" class="demo-button" target="_blank" rel="noopener">Get Started</a>
          </div>
        </div>
      </div>
    `;
  }

  renderCategories() {
    return `
      <div class="categories-view" id="categoriesView">
        ${FAQ_DATA.map((cat, index) => `
          <div class="category-item">
            <div class="category-header" data-category="${index}" tabindex="0" role="button" aria-expanded="false">
              <span class="category-name">${cat.category}</span>
              <svg class="arrow" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <div class="questions-list" id="questions-${index}">
              ${cat.questions.map((item, qIndex) => `
                <div class="question-item">
                  <div class="question-header" data-category="${index}" data-question="${qIndex}" tabindex="0" role="button" aria-expanded="false">
                    <svg class="question-arrow" viewBox="0 0 24 24">
                      <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <div class="question-content">
                      <div class="question-text">${item.q}</div>
                      <div class="answer-preview">${this.truncateText(item.a, 60)}</div>
                    </div>
                  </div>
                  <div class="answer-full" id="answer-${index}-${qIndex}">${item.a}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="search-results" id="searchResults" style="display: none;"></div>
    `;
  }

  truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  }

  attachEventListeners() {
    const searchBar = this.shadowRoot.getElementById('searchBar');
    const closeBtn = this.shadowRoot.getElementById('closeBtn');
    const searchInput = this.shadowRoot.getElementById('searchInput');

    // Open panel
    searchBar.addEventListener('click', () => this.expand());

    // Close panel
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.collapse();
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.handleSearch();
    });

    // Category headers
    this.shadowRoot.querySelectorAll('.category-header').forEach(header => {
      header.addEventListener('click', () => this.toggleCategory(header));
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleCategory(header);
        }
      });
    });

    // Question headers
    this.shadowRoot.querySelectorAll('.question-header').forEach(header => {
      header.addEventListener('click', () => this.toggleQuestion(header));
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleQuestion(header);
        }
      });
    });

    // Click outside listener (added when expanded)
    document.addEventListener('click', this.boundClickOutside);
  }

  handleClickOutside(e) {
    if (!this.isExpanded) return;

    const panel = this.shadowRoot.getElementById('expandedPanel');
    const path = e.composedPath();

    if (!path.includes(panel) && !path.includes(this)) {
      this.collapse();
    }
  }

  expand() {
    this.isExpanded = true;
    const searchBar = this.shadowRoot.getElementById('searchBar');
    const panel = this.shadowRoot.getElementById('expandedPanel');
    const searchInput = this.shadowRoot.getElementById('searchInput');

    searchBar.classList.add('hidden');
    panel.classList.add('visible');

    // Focus search input after animation
    setTimeout(() => searchInput.focus(), 100);
  }

  collapse() {
    this.isExpanded = false;
    const searchBar = this.shadowRoot.getElementById('searchBar');
    const panel = this.shadowRoot.getElementById('expandedPanel');
    const searchInput = this.shadowRoot.getElementById('searchInput');

    panel.classList.remove('visible');
    searchBar.classList.remove('hidden');

    // Reset state
    searchInput.value = '';
    this.searchQuery = '';
    this.resetView();
  }

  resetView() {
    // Hide search results
    const searchResults = this.shadowRoot.getElementById('searchResults');
    const categoriesView = this.shadowRoot.getElementById('categoriesView');

    searchResults.style.display = 'none';
    categoriesView.style.display = 'block';

    // Collapse all categories
    this.shadowRoot.querySelectorAll('.questions-list').forEach(list => {
      list.classList.remove('visible');
    });
    this.shadowRoot.querySelectorAll('.category-header .arrow').forEach(arrow => {
      arrow.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.category-header').forEach(header => {
      header.setAttribute('aria-expanded', 'false');
    });

    // Collapse all answers
    this.shadowRoot.querySelectorAll('.answer-full').forEach(answer => {
      answer.classList.remove('visible');
    });
    this.shadowRoot.querySelectorAll('.question-arrow').forEach(arrow => {
      arrow.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.question-header').forEach(header => {
      header.setAttribute('aria-expanded', 'false');
    });

    this.expandedQuestions.clear();
    this.activeCategory = null;
  }

  toggleCategory(header) {
    const categoryIndex = header.dataset.category;
    const questionsList = this.shadowRoot.getElementById(`questions-${categoryIndex}`);
    const arrow = header.querySelector('.arrow');
    const isExpanded = questionsList.classList.contains('visible');

    // Close other categories
    this.shadowRoot.querySelectorAll('.questions-list').forEach(list => {
      list.classList.remove('visible');
    });
    this.shadowRoot.querySelectorAll('.category-header .arrow').forEach(a => {
      a.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.category-header').forEach(h => {
      h.setAttribute('aria-expanded', 'false');
    });

    // Toggle current category
    if (!isExpanded) {
      questionsList.classList.add('visible');
      arrow.classList.add('rotated');
      header.setAttribute('aria-expanded', 'true');
      this.activeCategory = categoryIndex;
    } else {
      this.activeCategory = null;
    }
  }

  toggleQuestion(header) {
    const catIndex = header.dataset.category;
    const qIndex = header.dataset.question;
    const answerId = `answer-${catIndex}-${qIndex}`;
    const answer = this.shadowRoot.getElementById(answerId);
    const arrow = header.querySelector('.question-arrow');
    const preview = header.querySelector('.answer-preview');
    const isExpanded = answer.classList.contains('visible');

    if (isExpanded) {
      answer.classList.remove('visible');
      arrow.classList.remove('rotated');
      header.setAttribute('aria-expanded', 'false');
      preview.style.display = 'block';
      this.expandedQuestions.delete(answerId);
    } else {
      answer.classList.add('visible');
      arrow.classList.add('rotated');
      header.setAttribute('aria-expanded', 'true');
      preview.style.display = 'none';
      this.expandedQuestions.add(answerId);
    }
  }

  handleSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    const searchResults = this.shadowRoot.getElementById('searchResults');
    const categoriesView = this.shadowRoot.getElementById('categoriesView');

    if (!query) {
      searchResults.style.display = 'none';
      categoriesView.style.display = 'block';
      return;
    }

    categoriesView.style.display = 'none';
    searchResults.style.display = 'block';

    // Search through all FAQs
    const results = [];
    FAQ_DATA.forEach((category, catIndex) => {
      category.questions.forEach((item, qIndex) => {
        const questionMatch = item.q.toLowerCase().includes(query);
        const answerMatch = item.a.toLowerCase().includes(query);

        if (questionMatch || answerMatch) {
          results.push({
            category: category.category,
            catIndex,
            qIndex,
            question: item.q,
            answer: item.a
          });
        }
      });
    });

    // Render results
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="no-results">No results found for "${this.searchQuery}"</div>
      `;
    } else {
      searchResults.innerHTML = results.map(result => `
        <div class="search-result-item">
          <div class="result-category">${result.category}</div>
          <div class="question-item">
            <div class="question-header" data-result-cat="${result.catIndex}" data-result-q="${result.qIndex}" tabindex="0" role="button" aria-expanded="false">
              <svg class="question-arrow" viewBox="0 0 24 24">
                <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="question-content">
                <div class="question-text">${result.question}</div>
                <div class="answer-preview">${this.truncateText(result.answer, 60)}</div>
              </div>
            </div>
            <div class="answer-full">${result.answer}</div>
          </div>
        </div>
      `).join('');

      // Add click handlers to search results
      searchResults.querySelectorAll('.question-header').forEach(header => {
        header.addEventListener('click', () => this.toggleSearchResult(header));
        header.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleSearchResult(header);
          }
        });
      });
    }
  }

  toggleSearchResult(header) {
    const answer = header.closest('.question-item').querySelector('.answer-full');
    const arrow = header.querySelector('.question-arrow');
    const preview = header.querySelector('.answer-preview');
    const isExpanded = answer.classList.contains('visible');

    if (isExpanded) {
      answer.classList.remove('visible');
      arrow.classList.remove('rotated');
      header.setAttribute('aria-expanded', 'false');
      preview.style.display = 'block';
    } else {
      answer.classList.add('visible');
      arrow.classList.add('rotated');
      header.setAttribute('aria-expanded', 'true');
      preview.style.display = 'none';
    }
  }
}

// Register the custom element
customElements.define('faq-widget', FaqWidget);
