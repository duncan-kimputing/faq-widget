15// ============================================================
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
    category: "Understanding CenterTest",
    questions: [
      { q: "What is CenterTest?", a: "CenterTest is an enterprise-grade, Java-based test automation framework developed by Kimputing.<br><br>At its core, CenterTest is a powerful, fully extensible automation platform capable of all testing modalities against any system accessible through Java: web apps, third-party applications, APIs, legacy systems, custom portals, and external integrations.<br><br>Built on top of this foundation are supercharged layers specifically designed for Guidewire InsuranceSuite: intelligent generators that build your test assets directly from your Guidewire source code, abstraction layers, version compatibility tools, and pre-built scenarios that cover hundreds of InsuranceSuite workflows across every line of business.<br><br>One tool handles all your testing needs. If you can touch it with Java, you can test it with CenterTest.", related: ["What are CenterTest reusables?", "What are CenterTest generators?"] },
      { q: "How does CenterTest accelerate Guidewire Cloud migrations?", a: "CenterTest Version Compatibility enables organizations to build comprehensive test coverage on their pre-Cloud implementation, then use those same scenarios to validate Cloud deployments on day one. This is Day One testing: pre-Cloud scenarios define expected behavior, and any differences in Cloud surface as test failures to investigate and resolve.<br><br>Most pre-Cloud carriers are performing only manual testing, or have basic automation that would not survive the migration regardless. CenterTest provides a path to meaningful automation that transfers directly to Cloud.<br><br>Beyond migration validation, CenterTest enables in-sprint testing during the migration project itself. You do not have to wait until UAT, when there is no way to prevent or identify regression. Development teams can validate changes within the same sprint they are built, catching issues before they compound. The result is compressed migration timelines, earlier issue detection, and higher confidence at go-live.", related: ["What is CenterTest Version Compatibility?", "What is Day One testing?"] },
      { q: "Does CenterTest use AI?", a: "The CenterTest framework itself does not use AI, machine learning, or agentic processes. CenterTest is a deterministic, locally-deployed Java-based test automation framework. Test execution produces consistent, reproducible results every time.<br><br>Kimputing introduced AI-assisted development support in 2025 using Model Context Protocol (MCP) servers combined with AI coding assistants. The MCP servers provide context; the AI coding assistants (such as Claude Code, Cursor, or GitHub Copilot) use that context to provide guidance. One does not work without the other.<br><br>These AI tools assist with scenario creation, debugging, analytics, and documentation lookup, but they operate independently of the core framework. Organizations can adopt AI assistance when ready, or operate CenterTest entirely without AI involvement.", related: ["Why is it important that the core CenterTest framework stay AI-free?", "Does CenterTest require access to Guidewire source code?"] },
      { q: "Is CenterTest a cloud-based or SaaS product?", a: "No. CenterTest is deployed locally within customer environments. There is no cloud dependency, subscription service, or external data transmission. This architecture enables rapid deployment in secure, air-gapped, or highly regulated enterprise environments without external dependencies. The core framework does not use AI, machine learning, or agentic processes.", related: ["Does CenterTest use AI?", "What software is required to run CenterTest?"] },
      { q: "What is Day One testing?", a: "Day One testing means organizations can begin automated testing immediately when a new environment deploys, whether for initial Cloud migration or routine Cloud version updates (ski resort updates). Using scenarios already developed and validated on the previous version, teams validate the new environment from day one without waiting to build test automation from scratch.<br><br>This capability applies to both migration and ongoing operations:<br><br><div class='list-item'>During Cloud migrations, pre-Cloud scenarios validate the new Cloud deployment immediately. CenterTest's Version Compatibility is the only way to bring meaningful pre-Cloud automation into Cloud.</div><div class='list-item'>During Cloud version updates, existing Cloud scenarios validate the new ski resort update on day one.</div><div class='list-item'>During active development, in-sprint testing validates changes within the same sprint they are built, catching regression before it compounds.</div><br>The result is dramatically compressed timelines and higher confidence for migrations, version updates, and ongoing development. Testing becomes a continuous activity rather than a phase that happens after development completes.", related: ["What is CenterTest Version Compatibility?"] },
      { q: "How does CenterTest handle ski resort updates?", a: "When Guidewire releases ski resort updates, CenterTest absorbs changes through regeneration. The widget abstraction layers understand differences between Cloud releases, and CenterTest Self-Healing handles most modifications automatically. Scenarios continue functioning without requiring manual updates for routine version changes.<br><br>For structural changes that do require attention, compile-time detection identifies affected scenarios immediately after regeneration. Your team knows exactly what needs review before executing a single test, rather than discovering issues through runtime failures.<br><br>CenterTest's reusable architecture makes maintenance efficient even when changes are required. A fix to a single reusable propagates to all scenarios that use it. Data structures adapt as well, so updates to shared test data flow through to all dependent scenarios. Maintenance effort scales with the number of unique workflows, not the number of scenarios.", related: ["What is 'regeneration'?", "How does CenterTest Self-Healing work?", "What is CenterTest Compile-Time Detection?"] },
      { q: "What Guidewire versions does CenterTest support?", a: "CenterTest supports all Guidewire versions from v7 through the latest Cloud release, including the complete alphabet of ski resort updates.<br><br>A single CenterTest implementation can test multiple Guidewire versions simultaneously, enabling organizations to validate upgrades, run parallel environments, or support post-acquisition platform consolidation.", related: ["What is CenterTest Version Compatibility?", "How does CenterTest handle ski resort updates?"] },
      { q: "What Guidewire Centers does CenterTest support?", a: "CenterTest supports the complete Guidewire InsuranceSuite: PolicyCenter, BillingCenter, ClaimCenter, and ContactManager. The framework also supports digital portals including Producer Engage and Customer Engage.<br><br>Beyond Guidewire, CenterTest can integrate with any external system in your testing workflows, including rating engines, document management systems, payment processors, or legacy policy administration systems.", related: ["Can CenterTest test across multiple Guidewire Centers?", "Can CenterTest test non-Guidewire systems?"] },
      { q: "What pre-built components does CenterTest include?", a: "CenterTest includes a multi-layered architecture of reusable components, abstract base classes, helper utilities, and widget interactions that serve as building blocks for rapid scenario creation.<br><br>The framework also includes hundreds of end-to-end test scenarios covering common and designated function workflows, plus pre-configured flows spanning all Guidewire InsuranceSuite out-of-the-box lines of business.<br><br>Each reusable encapsulates dozens of underlying operations, so a single call like <code>PC.createPersonalAutoSubmission()</code> orchestrates page navigation, field population, validation handling, and wizard progression automatically.", related: ["What are CenterTest reusables?", "Does CenterTest include designated functions coverage?"] },
      { q: "Do I need programming skills to use CenterTest?", a: "CenterTest is built on Java, but you do not need to be a Java developer to use it effectively. Test scenarios read like plain English.<br><br>All scenarios are data-driven, so Java skills are only needed when extending the framework or creating new scenarios or reusables. No programming expertise is required for day-to-day test data management, test execution, or reviewing results. Test data is managed in common-language, object-oriented data structures, allowing business teams to easily define and expand test coverage.<br><br>Tests can be kicked off via pipeline (Jenkins, Azure DevOps, TeamCity, GitHub Actions, etc.), allowing anyone to trigger test suites without touching code. CenterTest integrates with all major test management platforms (TestRail, SpiraTest, ReportPortal, etc.), giving all stakeholders access to test results and CenterTest Output.", related: ["Can business teams manage test data?", "What training does Kimputing provide?", "What test management platforms does CenterTest integrate with?"] },
      { q: "Does CenterTest support UI testing?", a: "Yes. CenterTest provides sophisticated end-to-end UI testing with native understanding of Guidewire widgets, Page Configuration File (PCF) page structures, and asynchronous rendering patterns.<br><br>Unlike generic Selenium or Playwright wrappers that interact with raw HTML elements, CenterTest understands Guidewire's widget type system: dropdown searches, shuttle lists, date pickers, modal dialogs, wizard navigation, LVs (list views), DVs (detail views), and dynamic content loading all work out of the box without custom wait logic or brittle XPath expressions.", related: ["What are CenterTest generators?", "Why are CenterTest generators more resilient than standard approaches?"] },
      { q: "Does CenterTest support API testing?", a: "Yes. CenterTest supports API testing for custom integrations, Guidewire Cloud APIs (including Edge APIs), and third-party services. API tests can execute as standalone scenarios or integrate within end-to-end UI workflows for comprehensive validation.<br><br>This enables hybrid testing patterns where a scenario might seed data via API, validate UI behavior, then verify downstream system updates through additional API calls.", related: ["Can CenterTest test non-Guidewire systems?"] },
      { q: "Does CenterTest support performance testing?", a: "Yes. Any functional end-to-end scenario, including UI and API tests, can be repurposed for performance, load, and stress testing by configuring parameters such as ramp-up time, thread count, and iteration limits.<br><br>This eliminates the need for separate performance testing software, specialized scripts, or duplicate test maintenance. Your functional regression suite becomes your performance baseline.", related: ["Can CenterTest perform data seeding for manual test teams or product teams?"] },
      { q: "Does CenterTest support document validation?", a: "Yes. CenterTest supports both document generation validation and content validation. CenterTest can directly open and parse PDFs for content verification, including analysis by line, by section, or by pattern matching.<br><br>The framework tracks document generation timing and enables validation of data both passed in through DDT (such as insured names and addresses) and generated during test execution (such as policy numbers and effective dates). This is critical for validating dec pages, policy documents, billing statements, and claims correspondence.", related: ["How do Restart Points support document validation?", "What is CenterTest Output?", "What is Object-Oriented Data-Driven Testing (OODDT)?"] },
      { q: "Does CenterTest support accessibility testing?", a: "Yes. Starting from version 5.5, CenterTest provides built-in accessibility testing using the Axe core engine.<br><br>The framework can analyze any page during test execution and generates detailed Excel reports covering violations, passed rules, and impact-level statistics (Critical, Serious, Moderate, Minor). This capability supports portal testing against WCAG standards and helps organizations identify accessibility issues before they reach production.", related: ["What is CenterTest Output?"] },
      { q: "What is CenterTest multi-user, multi-session processing?", a: "CenterTest enables sophisticated, realistic end-to-end testing by supporting multiple concurrent user connections within a single scenario.<br><br>Each user (defined by role and permissions) operates in their own browser session while sharing data between sessions. For example, a scenario might have a producer create a submission, then an underwriter review and approve it, then a billing clerk verify the invoice, all within one coordinated test execution. This mirrors real-world workflows where multiple personas interact with the same business transaction.<br><br>Multi-user, multi-session processing increases test execution efficiency by:<br><br><div class='list-item'><b>Maintaining active sessions:</b> Each session stays logged in throughout the scenario rather than repeatedly logging in and out, eliminating authentication overhead.</div><div class='list-item'><b>Parallel execution:</b> Independent operations across different users or Centers can execute concurrently, reducing total execution time.</div><div class='list-item'><b>Shared test data:</b> Generated data like account numbers, policy numbers, and claim numbers pass seamlessly between sessions, enabling true end-to-end validation.</div><br>This architecture allows a single scenario to orchestrate realistic workflows spanning multiple users, roles, and Guidewire Centers while maximizing execution speed.", related: ["Can CenterTest handle credential management through Password Vault API processing?"] },
      { q: "Can CenterTest handle credential management through Password Vault API processing?", a: "Yes. CenterTest supports integration with enterprise password vault solutions through custom API integrations.<br><br>Organizations can connect CenterTest to their existing credential management infrastructure, including solutions like Keeper, CyberArk, AWS Secrets Manager, or Azure Key Vault. This integration enables secure credential retrieval at runtime, eliminating the need to store sensitive credentials in test code or configuration files.<br><br>The credential management architecture supports:<br><br><div class='list-item'><b>Dynamic credential retrieval:</b> Test scenarios request credentials from the vault at execution time rather than relying on stored values.</div><div class='list-item'><b>Role-based access:</b> Different test users can authenticate against different vault policies based on their defined roles.</div><div class='list-item'><b>Credential rotation:</b> When vault credentials rotate, tests automatically use updated values without code changes.</div><div class='list-item'><b>Audit compliance:</b> All credential access flows through your organization's existing vault audit logging.</div><br>This approach aligns with enterprise security requirements while maintaining the flexibility CenterTest provides for multi-user, multi-session test execution.", related: ["What is CenterTest multi-user, multi-session processing?"] },
      { q: "Can CenterTest test across multiple Guidewire Centers?", a: "Yes. CenterTest scenarios can span PolicyCenter, BillingCenter, ClaimCenter, and portals within a single test execution. Each application operates as an independent session, and sessions share data to enable true end-to-end workflow validation across the entire InsuranceSuite.<br><br>To support efficient test execution, CenterTest uses multi-user, multi-session capabilities and parallel processing to allow each session to stay active (without logging in and logging out), and share test execution data across sessions.<br><br>A single scenario can create a policy in PC, verify the account in BC, file a claim in CC, and validate billing adjustments, all while tracking the policy number, claim number, and other generated data across systems.", related: ["What is CenterTest multi-user, multi-session processing?", "What is CenterTest multi-user, multi-session processing?"] },
      { q: "Can CenterTest test non-Guidewire systems?", a: "Yes. While optimized for Guidewire, CenterTest is a sophisticated automation platform capable of testing across entire IT ecosystems.<br><br>The framework can test third-party applications, external APIs, legacy systems, custom portals, rating engines, document repositories, and any system accessible through Java.", related: ["Does CenterTest support API testing?", "Does CenterTest require access to Guidewire source code?"] },
      { q: "Can CenterTest validate role-based permissions?", a: "Yes. CenterTest separates role definitions from credential management to enable flexible permissions testing. Test scenarios define users by logical role names.<br><br>Roles are managed in backend property files, and credentials are managed (typically) via a vault API, both completely separate from test code. This architecture enables two powerful testing patterns:<br><br><div class='list-item'>Validate end-to-end workflows using users with global permissions, then swap credentials in the property files to test with restricted roles, all without modifying a single line of test code.</div><div class='list-item'>Run the same scenarios with different permission sets to verify access controls systematically.</div><br>This makes it easy to verify that producers cannot access underwriter-only functions, confirm that read-only users cannot modify records, or validate that sensitive fields are hidden from unauthorized roles.", related: ["Can CenterTest handle SSO and MFA authentication?", "What is CenterTest multi-user, multi-session processing?"] },
      { q: "Can CenterTest handle SSO and MFA authentication?", a: "Yes. CenterTest handles Single Sign-On (SSO) and Multi-Factor Authentication (MFA) workflows that are common in enterprise Guidewire deployments.<br><br>The framework can navigate SSO redirects, handle authentication prompts, and manage session tokens across test execution. For MFA scenarios, CenterTest supports integration with authentication providers and can work with TOTP (time-based one-time passwords) or other verification methods depending on your security configuration.", related: ["Can CenterTest validate role-based permissions?", "Can CenterTest handle credential management through Password Vault API processing?"] },
      { q: "What are CenterTest generators?", a: "CenterTest source-code generators read the entire structure of your Guidewire Centers and automatically create test framework assets directly from Guidewire source code.<br><br>The generators produce page object models (POMs), type list enums, product model helpers, and utility classes. Without powerful, purpose-built automation asset generators for Guidewire test automation, it is impossible to ensure test assets remain perfectly synchronized with your specific Guidewire configuration.<br><br>CenterTest generators power Version Compatibility, and they convert complex Guidewire elements into easily understood, common language formats to enable rapid test development and increase transparency into test execution for business teams.", related: ["What is 'regeneration'?", "What is CenterTest Version Compatibility?"] },
      { q: "What is \"regeneration\"?", a: "Regeneration is the process of re-running CenterTest generators against your Guidewire source code to update your test framework assets.<br><br>When your Guidewire implementation changes through updates, migrations, feature enhancements, or new product launches, regeneration synchronizes your page object models (POMs), type list enums, product model helpers, and utility classes with the current state of your Guidewire environment. This process completes in minutes and produces test assets that reflect your exact configurations.<br><br>Regeneration enables several critical capabilities:<br><br><div class='list-item'><b>Branch synchronization:</b> Keep test code branches aligned with both your existing implementation and active development environments.</div><div class='list-item'><b>Developer-owned regression testing:</b> Developers can regenerate and run tests against their own changes before deployment, catching issues in the same sprint they are introduced.</div><div class='list-item'><b>Shift-left testing:</b> By integrating regeneration into CI/CD pipelines, teams validate changes continuously rather than discovering issues during UAT.</div><div class='list-item'><b>Test-driven development:</b> Authoritative, synchronized test assets enable teams to treat tests as the source of truth for expected behavior.</div><br>Combined with CenterTest Self-Healing, reusable architecture, and data-driven framework, regeneration transforms test maintenance from a reactive burden into a proactive quality practice.", related: ["What are CenterTest generators?", "How does CenterTest Self-Healing work?", "Can CenterTest generation be automated in pipelines?"] },
      { q: "Do CenterTest Generators require access to Guidewire source code?", a: "For Guidewire-specific automation, yes. However, <b>Kimputing</b> does not need to access your Guidewire source code, and CenterTest Generators produce your automation framework through read-only access.<br><br>CenterTest Generators are easy to run, operate entirely within your secure environment, and Guidewire source code never leaves your infrastructure. CenterTest does not maintain a constant connection to your Guidewire source repositories. For Cloud customers, source access is available through Guidewire's standard repository access.<br><br>For testing non-Guidewire systems, no Guidewire source access is needed. CenterTest can automate external applications, APIs, and integrations using standard web automation and API testing patterns without any Guidewire dependencies.", related: ["What are CenterTest generators?", "Can CenterTest generation be automated in pipelines?"] },
      { q: "What do the generators produce?", a: "CenterTest generators create four categories of test assets:<br><br><div class='list-item'><b>Page Object Models (POMs):</b> Strongly-typed widget references for all PCF pages across PolicyCenter, BillingCenter, ClaimCenter, ContactManager, and portals. Each widget is represented by its correct type (WidgetInput, WidgetSelect, WidgetDatePicker, etc.), enabling IDE autocomplete and compile-time validation.</div><div class='list-item'><b>Type List Enums:</b> Java enum classes replacing hardcoded strings with compile-time validated type list values. Instead of typing <code>\"Draft\"</code> and hoping it matches, you use <code>PolicyPeriodStatus.Draft</code> and the compiler catches typos.</div><div class='list-item'><b>Product Model Objects:</b> Typed accessor methods for coverages, conditions, exclusions, and modifiers across all configured lines of business.</div><div class='list-item'><b>Helper Utilities:</b> Data sharing utilities that facilitate communication across test execution contexts, enabling scenarios to pass policy numbers, account names, and other generated data between reusables and across Centers.</div><br>", related: ["What is CenterTest Compile-Time Detection?", "How does CenterTest Self-Healing work?"] },
      { q: "Why are CenterTest generators more resilient than standard approaches?", a: "Standard generators scrape rendered HTML and create generic element references based on IDs, CSS classes, or XPath expressions. During development, or when Guidewire makes changes during cloud updates, those locators break.<br><br>CenterTest generators read PCF files directly from Guidewire source code, understanding the widget type system rather than HTML output.<br><br>Consider the difference when setting a first name field:<br><br><b>Standard XPath approach:</b><br><code>driver.findElement(By.xpath(\"//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetails:FirstName']\")).sendKeys(\"John\");</code><br><br><b>CenterTest approach:</b><br><code>page.getFirstName().set(\"John\");</code><br><br>The XPath locator breaks whenever Guidewire restructures the DOM, renames element IDs, or changes the page hierarchy. The CenterTest accessor remains stable because it references the logical widget definition from the PCF, not the rendered HTML output.<br><br>Generated POMs use specialized CenterTest widgets that understand Guidewire-specific behaviors: asynchronous loading, wizard step validation, shuttle list interactions, and modal dialog handling all work automatically.", related: ["How does CenterTest Self-Healing work?", "What is CenterTest Compile-Time Detection?"] },
      { q: "How long do CenterTest Generators take to run?", a: "Initial generation completes in minutes. The generator reads your Guidewire source directory and outputs all page objects, type lists, and product models in a single coordinated process.<br><br>After generation, teams can begin scenario development immediately. Regeneration after Guidewire upgrades or configuration changes is equally fast, keeping your test assets synchronized with minimal effort.", related: ["What is 'regeneration'?", "Can CenterTest generation be automated in pipelines?"] },
      { q: "Can generators run independently for different artifact types?", a: "Yes. CenterTest provides separate generation modes: GENERATEPAGES, GENERATETYPELISTS, GENERATEPRODUCTMODEL, and GENERATEALL.<br><br>While running GENERATEALL is most common, individual artifact types can be regenerated independently when needed. There is no required sequence for generation.", related: ["Can CenterTest generation be automated in pipelines?"] },
      { q: "What is CenterTest Version Compatibility?", a: "CenterTest Version Compatibility enables test scenarios to execute across any supported Guidewire version, from v7 through the latest Cloud release, with minimal modification. Pre-Cloud automation transfers directly to Cloud environments. Carriers can take ski resort updates faster, and with increased confidence, while avoiding resource-intensive refactoring of automated tests.<br><br>Version Compatibility is not a discrete feature. Instead, it emerges from several CenterTest features and architectural components working together.<br><br><div class='list-item'><b>CenterTest Generators:</b> Keep test code branches in sync with the unique Guidewire source code configurations for any given environment.</div><div class='list-item'><b>Widget abstraction layers:</b> Handle version-specific Guidewire rendering differences internally, so the user doesn't have to modify test code.</div><div class='list-item'><b>Intelligent data handling:</b> Allows the same test data to easily power scenarios executing against different versions of Guidewire.</div><br>The business impact is significant. Existing test coverage easily survives ski resort updates, and your pre-Cloud automation can start validating your Cloud migration code from day one, not late into the project when you finally get to UAT. Version Compatibility transforms testing from a manual, time consuming, end-of-project cost, into a durable, long-term strategic asset to future-proof your Guidewire investment.", related: ["What is 'regeneration'?", "How does CenterTest accelerate Guidewire Cloud migrations?"] },
      { q: "What is CenterTest Time Travel?", a: "CenterTest Time Travel enables automated testing of date-sensitive workflows by combining date conditions with Restart Points to suspend and resume scenarios when appropriate dates are reached.<br><br>Many insurance workflows depend on specific dates: policy renewals, billing cycles, delinquency processing, claims aging, regulatory compliance deadlines, and document generation. Time Travel allows scenarios to define date conditions, suspend execution until those conditions are met, then resume automatically.<br><br>CenterTest supports three primary date condition types:<br><br><div class='list-item'><b>Exact match:</b> <code>isOn(date)</code> suspends until the system clock matches a specific date.</div><div class='list-item'><b>Threshold conditions:</b> <code>isOnOrAfter(date)</code>, <code>isAfter(date)</code>, and <code>isBefore(date)</code> suspend until the clock reaches or passes a threshold.</div><div class='list-item'><b>Calculated dates:</b> Relative calculations like <code>getRenewalDate().minusDays(45)</code> suspend until a computed date based on policy events.</div><br>Positive calculations move forward from policy effective date while negative calculations move backward from expiration date. This flexibility enables comprehensive lifecycle testing. The OOTB test suite includes over 50 time travel conditions across 8 lines of business, demonstrating patterns for renewals, delinquencies, disbursements, suspense payments, and cancellation workflows.<br><br>Time Travel is enhanced by supporting features:<br><br><div class='list-item'><b>Best Day calculation:</b> When multiple scenarios require different dates, CenterTest identifies the optimal next date to minimize clock changes while maximizing the number of suspended scenarios that can resume.</div><div class='list-item'><b>Automated clock changes:</b> CenterTest can automatically change and synchronize system clocks across PC, BC, and CC to continue execution of suspended time travel scenarios.</div><div class='list-item'><b>Self-Managed Execution:</b> CenterTest monitors suspended scenarios and automatically resumes them when date conditions are satisfied.</div><br>This architecture enables comprehensive lifecycle testing spanning policy creation, renewals, billing cycles, delinquencies, and claims in coordinated scenarios rather than isolated tests.", related: ["What are CenterTest Restart Points?", "How does Self-Managed Execution support Time Travel?"] },
      { q: "Can CenterTest automatically change system clocks?", a: "Yes. CenterTest can automatically change and synchronize clocks across all Guidewire Centers to ensure proper environmental coordination and enable expansive automation.<br><br>Alternatively, CenterTest can suspend scenarios with time travel requirements in restart mode and recommend the optimal date for manual clock changes.", related: ["What is Best Day calculation?", "How do Restart Points support Time Travel?"] },
      { q: "What is Best Day calculation?", a: "When multiple suspended scenarios have different date requirements, CenterTest identifies the next best day to change the system clock so the maximum number of suspended scenarios can resume.<br><br>This Best Day calculation minimizes the number of clock changes required, dramatically reducing overall execution time while expanding the number of time travel scenarios that can execute simultaneously.", related: ["How does Self-Managed Execution support Time Travel?", "How do Restart Points support Time Travel?"] },
      { q: "What are CenterTest Narratives?", a: "CenterTest Narratives transform technical test executions into business-readable documentation.<br><br>Originally developed as Reverse-BDD, CenterTest Narratives produce human-readable output directly from test execution, providing business stakeholders with clear understanding of test coverage without implementing complex Cucumber or Gherkin frameworks.", related: ["How does test output support non-technical stakeholders?", "What formats can Narratives generate?"] },
      { q: "What formats can Narratives generate?", a: "CenterTest Narratives can generate output in natural language format or Given/When/Then Gherkin style based on organizational preference.<br><br>The default is natural language showing the flow, with Gherkin available as an additional format. Language configuration files support localization for international teams.", related: ["How does test output support non-technical stakeholders?"] },
      { q: "Why use CenterTest Narratives instead of Cucumber or Gherkin?", a: "Traditional BDD requires complex, time-consuming Cucumber scenario creation that is only feasible after Guidewire development completes. This process is brittle, difficult to scale, and requires specialized support.<br><br>CenterTest Narratives reverse this approach, generating human-readable output from executed scenarios. Business teams provide requirements through DDT spreadsheets and receive narrative output for easy consumption, without the Cucumber complexity.", related: ["Can business teams manage test data?", "What is Object-Oriented Data-Driven Testing (OODDT)?"] },
      { q: "What data does CenterTest Analytics capture?", a: "CenterTest Analytics collects three types of primary data:<br><br><div class='list-item'><b>Execution Data:</b> Basic test execution data, pass/fail, timings, and test-generated data like account, policy, and claim numbers.</div><div class='list-item'><b>Runtime Data:</b> Comprehensive capture of every click, field setting, and timing for each action, assertion, and process.</div><div class='list-item'><b>PCF Change Data:</b> Identification of PCF changes between Guidewire versions and/or configurations.</div>", related: ["Can AI help with analytics and reporting?"] },
      { q: "What analytics come with CenterTest Analytics out-of-the-box?", a: "CenterTest automatically provides the following test code analytics:<br><br><div class='list-item'><b>Coverage Analytics:</b> Uses PCF Change Data to determine if configuration changes are covered by a particular test or test suite, or during a period of time for all test executions within a specific environment.</div><div class='list-item'><b>Trend Analytics:</b> Monitoring of execution patterns over time to identify slowdowns, environmental issues, and stability patterns.</div>", related: ["What is PCF Coverage Analytics?", "Can AI help with analytics and reporting?"] },
      { q: "How do organizations create analytics dashboards?", a: "CenterTest does not include pre-built executive dashboards because every organization has different reporting needs and stakeholder requirements.<br><br>Instead, CenterTest integrates with all major test management and reporting platforms (TestRail, ReportPortal, SpiraTest), allowing you to build custom dashboards tailored to your specific needs. CenterTest's reporting API can easily be extended to new or custom reporting tools.<br><br>Plus, the CenterTest Analytics database is directly accessible with a documented schema for easy, direct data analysis and custom queries. Organizations can query execution trends, identify flaky tests, track performance over time, and surface patterns that would be invisible in standard pass/fail reporting.<br><br>Supported by CenterTest AI-assisted development tools, non-technical teams can easily create custom reports, and technical teams can quickly turn those reports into permanent, repeatable queries.", related: ["What test management platforms does CenterTest integrate with?", "Can AI help with analytics and reporting?"] },
      { q: "What is PCF Coverage Analytics?", a: "PCF Coverage Analytics identifies every change between PCF fields and properties across two Guidewire versions, tracking added, modified, and deleted elements.<br><br>During test execution, CenterTest monitors widget interactions and maps them to known PCF modifications. Reports show exactly which customized elements have been tested versus which remain uncovered.<br><br>This matters because CenterTest knows what you changed during development and knows whether or not you have tested it, giving you confidence that your customizations are validated before release.", related: ["How does CenterTest handle ski resort updates?"] },
      { q: "What is CenterTest Output?", a: "CenterTest Output refers to the comprehensive set of artifacts and data produced during test execution.<br><br>CenterTest provides test execution results via your test manager of choice, allowing you to customize reports and stakeholder dashboards. CenterTest Analytics records comprehensive test execution data for every click, every set, every assert, and much more. This enables your teams to perform custom analytics to uncover meaningful trends in failures and performance.<br><br>CenterTest also provides a tremendous amount of optional test output based on the type and purpose of your test: video recordings, assertion logs, scheduled or failure-triggered screenshots, Playwright trace files, plain-English narrative reports, execution analytics, and test-generated data like policy and account numbers.", related: ["What are CenterTest Narratives?", "What data does CenterTest Analytics capture?"] },
      { q: "Does CenterTest record test execution?", a: "Yes. CenterTest provides full single-stream recording of test execution from start to finish across all browser interactions.<br><br>Recordings include overlays identifying actions at the test level, such as field settings with the interacted field highlighted. This creates visual documentation that non-technical stakeholders can review to validate test coverage.", related: ["What are CenterTest Narratives?", "How does test output support non-technical stakeholders?"] },
      { q: "How does test output support non-technical stakeholders?", a: "CenterTest Output bridges the gap between technical execution and business understanding.<br><br>Video recordings allow stakeholders to watch test execution and validate that scenarios match expected workflows. Narrative reports translate technical steps into plain-English documentation that business analysts can review without reading code. Assertion logs provide detailed evidence of what was verified and when. Screenshots capture the application state at critical moments or upon failure. Playwright trace files enable developers to step through execution for debugging.<br><br>Combined, these artifacts provide comprehensive documentation for compliance, audit requirements, and stakeholder sign-off, all without requiring technical expertise to interpret.", related: ["What are CenterTest Narratives?"] },
      { q: "When does CenterTest capture screenshots?", a: "Screenshots are automatically captured when a test fails, or when scenarios throw assertion exceptions. This feature can be disabled.<br><br>Additionally, the takeScreenshot capability allows explicit screenshot capture at any point during execution, regardless of pass/fail status. Screenshots upload automatically to connected test managers and are stored with the test execution results.", related: ["What is CenterTest Output?"] },
      { q: "What is Object-Oriented Data-Driven Testing (OODDT)?", a: "CenterTest implements an Object-Oriented Data-Driven Testing (OODDT) architecture that minimizes data bloat while maximizing coverage scalability.<br><br>Test data references logical entity names rather than raw values, with shared data sheets enabling single definitions that propagate across multiple scenarios. This means you define a \"StandardDriver\" or \"CaliforniaAddress\" once and reference it everywhere, rather than duplicating data across hundreds of test rows.", related: ["How do reusables simplify maintenance?", "Can business teams manage test data?"] },
      { q: "How does OODDT reduce maintenance burden?", a: "Traditional approaches require each test row to contain all data values. CenterTest defines entities once and references them by name. Changing a standard address updates one entity rather than hundreds of cells. Override columns allow scenario-specific variations while inheriting defaults, making intent clear while minimizing data surface area.<br><br>Additionally, test data does not need to change during Guidewire migrations and upgrades. Tests are smart enough to ignore blank values for non-required fields, enabling a single scenario to drive hundreds of test variations through DDT without updating test code.<br><br>When combined with the shared OODDT approach, this maximizes test coverage while limiting the amount of test code and data you have to maintain.", related: ["How do reusables simplify maintenance?", "What are CenterTest reusables?"] },
      { q: "Can business teams manage test data?", a: "Yes. Business teams provide test requirements through familiar Excel spreadsheet formats.<br><br>Object references use logical names that business users understand, and override columns clearly show which values differ from defaults. No programming expertise is required to manage test data.", related: ["Do I need programming skills to use CenterTest?", "What is Object-Oriented Data-Driven Testing (OODDT)?"] },
      { q: "Can CenterTest perform data seeding for manual test teams or product teams?", a: "CenterTest supports automated data seeding to generate accounts, policies, claims, and other business entities at scale. Teams specify parameters and quantities, and CenterTest creates fully-formed data through the UI or API, complete with all required relationships and valid business data.<br><br>Use cases include:<br><br><div class='list-item'><b>Environment preparation:</b> Populate test environments with realistic data volumes across Guidewire Centers.</div><div class='list-item'><b>Performance testing:</b> Generate thousands of policies for load simulation.</div><div class='list-item'><b>Edge case validation:</b> Create specific data combinations for boundary testing.</div><div class='list-item'><b>Demo and training environments:</b> Seed consistent, repeatable data for demonstrations or user training.</div><div class='list-item'><b>Integration testing:</b> Create Guidewire data that triggers downstream processing in external systems.</div><div class='list-item'><b>Exploratory testing support:</b> Seed policies for BillingCenter manual testing, or seed applications and complex workflows to a specific point so your manual testing or product teams can take over from there.</div><br>Seeding scenarios are data-driven, so modifying quantities or data variations requires only spreadsheet changes. No code updates are needed.", related: ["What is CenterTest Pause Processing?"] },
      { q: "How does seeding support manual testing?", a: "Seeding is the fastest way to achieve rapid time-to-value with CenterTest. Before you extend automation to cover complex workflows, you can use CenterTest to seed the accounts, policies, and claims needed to accelerate your manual testing teams.<br><br>Seeding eliminates the \"create test data\" burden that consumes manual testing time. Instead of spending 20 minutes creating an account and policy before testing a claim, testers request seeded data and begin exploration immediately from any workflow stage: account created, policy bound, claim filed, or any other checkpoint.<br><br>This provides:<br><br><div class='list-item'><b>Faster testing:</b> Testers focus on validation, not setup.</div><div class='list-item'><b>Repeatability:</b> The same data configurations can be regenerated across environments or after refreshes.</div><div class='list-item'><b>Consistency:</b> All testers work with properly-formed data, eliminating \"bad test data\" as a failure cause.</div><div class='list-item'><b>Cross-system readiness:</b> Seeded data can trigger integrations, ensuring external systems have corresponding records for end-to-end manual testing.</div><br>", related: ["What are CenterTest Restart Points?"] },
      { q: "What is CenterTest Pause Processing?", a: "CenterTest Pause Processing enables hybrid automation and manual testing within a single execution.<br><br>Automation executes to a defined point and pauses, allowing testers to manually interact with the application for exploratory testing or validation. When exploration completes, testers signal CenterTest to resume automation. This integrates exploratory testing into automated flows without separate environments.", related: ["What are CenterTest Restart Points?", "How does seeding support manual testing?"] },
      { q: "What is the difference between Pause Processing and Restart Points?", a: "Restart Points and Pause Processing serve different purposes:<br><br><div class='list-item'><b>Restart Points</b> enable suspension and resumption after failures, environmental waits (like time travel clock changes), or debugging. They are checkpoints for recovery and efficiency.</div><div class='list-item'><b>Pause Processing</b> enables intentional stops during successful execution for manual interaction, including exploratory testing, visual validation, or stakeholder demonstrations.</div><br>Both support hybrid testing approaches. Restart Points suspend scenarios for automated resumption, while Pause Processing integrates human judgment into automated workflows.", related: ["What are CenterTest Restart Points?"] }
    ]
  },
  {
    category: "Architecture and Framework",
    questions: [
      { q: "What are CenterTest reusables?", a: "Reusables are modular, self-contained components that encapsulate common workflow steps. Each reusable (such as LoginToPC, CreatePersonAccount, or CreateClaim) can execute independently or chain with other reusables to form complete scenarios.<br><br>CenterTest includes a comprehensive library of out-of-the-box reusables covering common Guidewire operations. These are not simple functions; each reusable is built on layers of abstract base classes, helper utilities, and widget interactions, so a single call like <code>PC.createPersonalAutoSubmission()</code> orchestrates dozens of underlying operations automatically.", related: ["What pre-built components does CenterTest include?", "How does OODDT reduce maintenance burden?"] },
      { q: "How do reusables simplify maintenance?", a: "When changes occur in your Guidewire configuration (during updates, migrations, feature enhancements, etc.), fixing the impacted reusable automatically updates all scenarios using that component. A single update propagates across the entire test suite without modifying individual scenarios.<br><br>If you have 500 scenarios that use CreatePersonAccount, and Guidewire changes the account creation wizard, you fix it once in the reusable and all 500 scenarios work again. This architecture ensures maintenance effort scales with the number of unique workflows, not the number of scenarios.", related: ["How does OODDT reduce maintenance burden?", "What is CenterTest Compile-Time Detection?"] },
      { q: "What makes reusables more powerful than shared functions?", a: "Traditional shared functions are static utilities without context. CenterTest reusables provide:<br><br><div class='list-item'><b>Strong typing</b> where each reusable is a distinct class with IDE-tracked usage.</div><div class='list-item'><b>Context injection</b> providing browser, assertions, and data without global variables.</div><div class='list-item'><b>Composability</b> allowing reusables to chain operations fluently.</div><div class='list-item'><b>Impact analysis</b> through IDE Find Usages showing all affected scenarios.</div><br>", related: ["What is CenterTest Compile-Time Detection?", "What do the generators produce?"] },
      { q: "Can teams create custom reusables?", a: "Yes. Teams can extend existing reusables or create new ones to meet the requirements of their unique Guidewire configuration. Custom reusables are built from the same generated assets as CenterTest's OOTB reusables, ensuring consistency and enabling the same maintenance benefits.", related: ["What are CenterTest reusables?", "What training does Kimputing provide?"] },
      { q: "What is CenterTest Compile-Time Detection?", a: "Compile-time Detection catches structural changes to your Guidewire configuration that would cause tests to fail. It identifies removed widgets, renamed elements, changed type list values, and product model modifications.<br><br>During regeneration, CenterTest Self-Healing fixes many of these errors automatically. Compile-Time Detection identifies whatever remains, so you can quickly refactor your reusables before executing your tests.<br><br>This process minimizes the need to \"debug\" your tests during development changes, preventing runtime failures by allowing you to systematically identify and perform any necessary refactoring before test execution.", related: ["What is 'regeneration'?", "How does CenterTest Self-Healing work?", "What do the generators produce?"] },
      { q: "What issues does compile-time detection prevent?", a: "Compile-time detection prevents:<br><br><div class='list-item'><b>Scenarios running for minutes</b> before failing on missing elements.</div><div class='list-item'><b>String typos in locators</b> causing cryptic element not found errors.</div><div class='list-item'><b>Type list value changes</b> causing silent data mismatches.</div><div class='list-item'><b>Product model changes</b> causing null pointer exceptions deep in execution.</div><br>", related: ["How does CenterTest Self-Healing work?"] },
      { q: "How quickly can teams identify affected scenarios after Guidewire changes?", a: "After running CenterTest Generators against an updated Guidewire codebase, CenterTest Compile-Time Detection immediately identifies errors for every affected scenario in your test project.", related: ["How does CenterTest Self-Healing work?"] },
      { q: "How does CenterTest Self-Healing work?", a: "CenterTest Self-Healing operates through the regeneration architecture rather than runtime AI or machine learning.<br><br>When Guidewire changes occur, generators regenerate framework assets from updated source code. The abstraction architecture hides locator changes and widget type modifications within framework layers, allowing existing scenarios to continue functioning without modification.", related: ["What is 'regeneration'?", "How does CenterTest handle ski resort updates?", "What is CenterTest Compile-Time Detection?"] },
      { q: "What changes can Self-Healing handle automatically?", a: "CenterTest Self-Healing through regeneration handles:<br><br><div class='list-item'><b>Locator changes</b> when Guidewire modifies CSS IDs or element positioning.</div><div class='list-item'><b>Widget type changes</b> when Guidewire updates implementations between versions.</div><div class='list-item'><b>DOM structure modifications</b> during ski resort updates.</div><div class='list-item'><b>Version-specific rendering differences</b> across Guidewire versions.</div><br>", related: ["How does CenterTest handle ski resort updates?"] },
      { q: "What happens when Guidewire removes an element entirely?", a: "When elements are removed rather than repositioned, compile-time detection surfaces these changes immediately after regeneration.<br><br>The Java compiler identifies every scenario referencing the missing element, enabling systematic resolution before test execution.", related: ["What is CenterTest Compile-Time Detection?"] },
      { q: "What are CenterTest Restart Points?", a: "CenterTest Restart Points are checkpoints within scenarios that enable resumption from specific stages rather than starting over from the beginning.<br><br>When a scenario fails, encounters an environmental issue, or requires a pause for external conditions (such as clock changes or document generation), the scenario suspends at the most recent checkpoint. Execution can then resume from that checkpoint when conditions are met, dramatically reducing debugging and re-execution time.<br><br>Restart Points support multiple suspension patterns:<br><br><div class='list-item'><b>Failure recovery:</b> Resume from the last checkpoint after fixing an issue rather than re-executing the entire scenario.</div><div class='list-item'><b>Time travel workflows:</b> Suspend scenarios until the system clock reaches a required date, then resume automatically or manually.</div><div class='list-item'><b>Document validation:</b> Suspend until asynchronous document generation completes, then resume to validate content.</div><div class='list-item'><b>Environmental waits:</b> Suspend when environments are temporarily unavailable and resume when access is restored.</div><br>This suspension and resumption architecture transforms how teams handle long-running scenarios, environmental instability, and date-dependent workflows.", related: ["What is CenterTest Time Travel?", "What is CenterTest Self-Managed Execution?"] },
      { q: "How do Restart Points accelerate debugging?", a: "Restart Points eliminate wasted time and resources by allowing scenarios to suspend and resume rather than restart from the beginning after every interruption.<br><br>Benefits include:<br><br><div class='list-item'><b>Prevent false failures:</b> Environmental issues like network timeouts, screen delays, or temporary unavailability no longer cause permanent test failures. Scenarios suspend at the last checkpoint and resume when conditions improve.</div><div class='list-item'><b>Preserve test data:</b> Without Restart Points, failed tests leave behind orphaned accounts, policies, and claims that clutter your test environment. Restart Points allow scenarios to resume and complete using data already created, keeping environments clean.</div><div class='list-item'><b>Faster debug cycles:</b> Complex scenarios, especially those that require time travel, may be difficult or time consuming to start from the beginning. Debugging a failure no longer requires re-running the full test or resetting environments or clocks. Simply resume from the last checkpoint and begin debugging in minutes.</div><div class='list-item'><b>Handle asynchronous processes:</b> Document generation, batch job completion, and external system responses may take variable time. Restart Points allow scenarios to suspend until these processes complete, then resume validation.</div><div class='list-item'><b>Reduce manual intervention:</b> Scenarios that previously required manual investigation, restart commands, or environment fixes can now self-recover from transient issues automatically.</div><br>This suspension and resumption architecture transforms test maintenance from reactive firefighting into efficient, automated operations.", related: ["What is CenterTest Self-Managed Execution?", "How do Restart Points support Time Travel?"] },
      { q: "How do Restart Points support Time Travel?", a: "Time travel scenarios require clock changes between execution phases. Restart points before time-dependent steps allow scenarios to suspend until clock changes occur (automated or manual), then resume from the checkpoint.<br><br>This enables comprehensive lifecycle testing spanning policy creation, renewals, billing cycles, and claims without re-executing from the beginning after each clock change.", related: ["What is Best Day calculation?", "What is CenterTest Self-Managed Execution?"] },
      { q: "How do Restart Points support document validation?", a: "Document generation may require variable time depending on system load. Restart points before document validation allow scenarios to suspend until generation completes, then resume for validation.<br><br>This prevents false failures from timing issues while ensuring thorough document testing.", related: ["Does CenterTest support document validation?"] },
      { q: "Can scenarios have multiple Restart Points?", a: "Yes. A single scenario can have multiple restart points at different stages, such as after account creation, after policy binding, and before claims processing.<br><br>This flexibility enables precise suspension points based on where issues occur or where external dependencies exist.", related: ["How do Restart Points accelerate debugging?", "What is CenterTest Self-Managed Execution?"] },
      { q: "What is CenterTest Self-Managed Execution?", a: "CenterTest Self-Managed Execution allows CenterTest to monitor test execution results and automatically rerun failed tests, or restart suspended tests from their most recent Restart Point.<br><br>The system can rerun failed scenarios and restart specific scenarios from their unique point of failure, removing the need for DevOps involvement in routine test management.", related: ["What is Best Day calculation?", "What are CenterTest Restart Points?"] },
      { q: "How does Self-Managed Execution reduce false failures?", a: "Environmental issues, timing problems, and transient failures often cause scenarios to fail without indicating actual defects.<br><br>Self-Managed Execution distinguishes between environmental issues and true failures by automatically retrying failed scenarios. Resuming suspended scenarios and tracking retry patterns reveals how often scenarios fail, enabling identification of flaky tests through CenterTest Analytics.", related: ["What data does CenterTest Analytics capture?"] },
      { q: "How does Self-Managed Execution support Time Travel?", a: "Self-Managed Execution monitors suspended time travel scenarios and automatically resumes them when date conditions are satisfied.<br><br>When time travel scenarios suspend at Restart Points waiting for specific dates, Self-Managed Execution:<br><br><div class='list-item'><b>Tracks suspended scenarios:</b> Monitors which scenarios are waiting for which date conditions.</div><div class='list-item'><b>Coordinates with Best Day calculation:</b> Identifies the optimal next clock change that allows the maximum number of suspended scenarios to resume.</div><div class='list-item'><b>Triggers automatic resumption:</b> When the system clock reaches required dates (through automated clock changes or manual adjustments), Self-Managed Execution resumes eligible scenarios automatically.</div><div class='list-item'><b>Handles failures intelligently:</b> If a resumed scenario fails, Self-Managed Execution can retry from the appropriate Restart Point based on configured parameters.</div><br>This automation enables large time travel test suites to execute with minimal human intervention. Teams define date conditions in their scenarios, and CenterTest handles the orchestration of suspension, clock coordination, and resumption across the entire suite.", related: ["What is Best Day calculation?", "How do Restart Points support Time Travel?"] },
      { q: "Does Self-Managed Execution require special infrastructure?", a: "No. Self-Managed Execution operates within CenterTest, or can be triggered via CI/CD pipeline parameterization.<br><br>The feature requires no additional infrastructure beyond the normal test execution environment.", related: ["What CI/CD platforms can run CenterTest?"] },
      { q: "What test management platforms does CenterTest integrate with?", a: "CenterTest provides pre-built integrations for ReportPortal, TestRail, and Inflectra SpiraTest. Results synchronize in real-time during execution, with screenshots, video recordings, and Playwright trace files uploading automatically. This gives stakeholders immediate visibility into test progress and results without waiting for post-execution reports.<br><br>ReportPortal also provides a well-designed MCP (Model Context Protocol) server, allowing enterprise customers with AI agent deployments to easily perform custom analytics on test execution data.", related: ["Can AI help with analytics and reporting?"] },
      { q: "Can CenterTest integrate with other test management tools?", a: "Yes. While pre-built integrations exist for ReportPortal, TestRail, and SpiraTest, the integration architecture is extensible.<br><br>CenterTest is built to integrate easily with external systems. Other test management platforms, including homegrown solutions or enterprise tools like Jira with Xray or qTest, can be supported quickly and cost-effectively.", related: ["What test management platforms does CenterTest integrate with?"] }
    ]
  },
  {
    category: "CI/CD; Guidewire BYOT & Quality Gates",
    questions: [
      { q: "What CI/CD platforms can run CenterTest?", a: "CenterTest integrates with all major CI/CD platforms including Jenkins, Azure DevOps, GitHub Actions, GitLab CI/CD, and TeamCity.<br><br>Because CenterTest is a standard Java repository using Gradle, any pipeline that can execute Gradle commands can run CenterTest. There is no proprietary runner, no special agents, and no vendor lock-in to a specific CI/CD platform.", related: ["Can CenterTest generation be automated in pipelines?"] },
      { q: "Can CenterTest generation be automated in pipelines?", a: "Yes. Organizations can automate framework regeneration through CI/CD pipelines that run before or after Guidewire deployments. This ensures test assets always reflect the actual Guidewire environment without manual intervention or human error. DDT class regeneration from spreadsheets can also be automated, keeping test data structures synchronized with spreadsheet changes.<br><br>Automated regeneration is valuable during all Guidewire development activities: CI/CD updates, feature enhancements, product launches, new integrations, and Cloud migrations. The pipeline can regenerate, compile, and flag any breaking changes before tests even execute.", related: ["What is 'regeneration'?", "What are CenterTest generators?"] },
      { q: "Can pipelines run different CenterTest versions for different environments?", a: "Yes. CenterTest supports version-specific execution through repository branching and CI/CD parameterization. Since test codebases and generated assets differ between Guidewire versions, organizations typically maintain separate branches for each version and configure their pipelines to select the appropriate branch at runtime.<br><br>This capability is valuable in several scenarios: organizations running parallel environments (development, QA, staging, production) on different Guidewire versions during upgrade cycles; carriers who acquire other business units through M&A and must support multiple Guidewire configurations; and carriers who manage multiple Guidewire configurations based on integrations with other systems.", related: ["What is CenterTest Version Compatibility?"] },
      { q: "What is Guidewire's Bring-Your-Own Testing (BYOT) framework?", a: "Bring-Your-Own Testing (BYOT) is Guidewire's framework enabling organizations to integrate external testing tools into Guidewire Cloud Platform. Guidewire recognized that their GT Testing framework was not meeting the complex needs of their customers, so they opened the door to BYOT to provide carriers with more flexibility and options.<br><br>For carriers migrating to Cloud, CenterTest is uniquely positioned to leverage BYOT. CenterTest's Version Compatibility is the only way to bring meaningful pre-Cloud test automation into the Cloud environment. Without a tool that bridges Guidewire versions, there is no practical path to preserve testing investments during migration.", related: ["What are Guidewire Cloud Quality Gates?", "How does CenterTest work with Quality Gates?"] },
      { q: "What are the three pillars of BYOT?", a: "The Bring-Your-Own Testing framework consists of three pillars:<br><br><div class='list-item'><b>Notifications:</b> Webhook callbacks triggered by CI/CD events that can automatically initiate external test pipelines.</div><div class='list-item'><b>Integrated Pipelines:</b> Mechanisms to propagate external test results back into Guidewire Cloud Platform.</div><div class='list-item'><b>Quality Gates:</b> Pre-configured criteria using test results to enforce merge and promotion decisions.</div><br>", related: ["What are Guidewire Cloud Quality Gates?", "What is Guidewire's Bring-Your-Own Testing (BYOT) framework?"] },
      { q: "What are Guidewire Cloud Quality Gates?", a: "Guidewire Cloud Quality Gates are configurable verification checkpoints within the Guidewire Cloud Platform CI/CD pipeline.<br><br>Quality Gates integrate testing results to provide visibility into code quality and can block artifacts from progressing through deployment stages when verification criteria are not met. For carriers investing in test automation, Quality Gates represent the mechanism to enforce testing standards and prevent untested or failing code from reaching higher environments.", related: ["How does CenterTest work with Quality Gates?", "What is Guidewire's Bring-Your-Own Testing (BYOT) framework?"] },
      { q: "What CI/CD events can trigger CenterTest for Guidewire Quality Gates?", a: "Organizations can configure webhook notifications for pre-merge events (when pull requests are created or updated) and pre-promotion events (when builds are ready for promotion). These notifications trigger external test pipelines automatically based on CI/CD activity.<br><br>This enables shift-left testing: CenterTest can begin validating changes as soon as a developer opens a pull request, catching issues before code merges rather than discovering them after deployment.", related: ["How does CenterTest work with Quality Gates?", "What is Guidewire's Bring-Your-Own Testing (BYOT) framework?"] },
      { q: "How does CenterTest work with Quality Gates?", a: "CenterTest provides the testing capabilities needed to satisfy Quality Gate requirements:<br><br><div class='list-item'><b>Webhook consumption:</b> CenterTest can receive CI/CD event notifications to trigger scenario execution automatically.</div><div class='list-item'><b>Verification API integration:</b> Execution results propagate to Quality Gates through the CI/CD Manager API, appearing in Guidewire's native tooling.</div><div class='list-item'><b>Pre-merge and pre-promotion support:</b> CenterTest scenarios can serve as verification criteria at either pipeline stage.</div><div class='list-item'><b>Designated functions coverage:</b> CenterTest includes comprehensive designated function scenarios that help carriers meet Guidewire's testing requirements.</div><br>CenterTest provides the testing tool with CI/CD integration capabilities. Your team or CI/CD architects configure the pipeline to leverage CenterTest execution and results.", related: ["What is Guidewire's Bring-Your-Own Testing (BYOT) framework?", "Does CenterTest include designated functions coverage?"] },
      { q: "What are designated functions?", a: "Designated functions are business-critical workflows that Guidewire requires customers to test as part of Cloud deployments.<br><br>These functions represent core insurance operations (policy issuance, claims creation, billing transactions, and similar workflows) that must be validated to ensure system integrity after customizations or upgrades. Guidewire publishes the list of designated functions, and carriers are responsible for demonstrating test coverage against them.", related: ["Does CenterTest include designated functions coverage?", "What is Guidewire's Bring-Your-Own Testing (BYOT) framework?"] },
      { q: "Does CenterTest include designated functions coverage?", a: "Yes. CenterTest includes hundreds of out-of-the-box scenarios covering most common workflows for major lines of business, including comprehensive designated function coverage across PolicyCenter, BillingCenter, and ClaimCenter.<br><br>Examples of CenterTest reusables that align with designated functions requirements include:<br><br><div class='list-item'><b><code>PC.createPersonalAutoSubmission()</code></b> for policy issuance workflows</div><div class='list-item'><b><code>BC.makeDirectBillPayment()</code></b> for billing transaction validation</div><div class='list-item'><b><code>CC.createPersonalAutoClaim()</code></b> for claims creation and management</div><div class='list-item'><b><code>PC.createCancellation()</code></b> for policy lifecycle operations</div><div class='list-item'><b><code>BC.createDelinquency()</code></b> for billing exception handling</div><br>For carriers starting their Cloud journey, designated functions coverage is often one of the first deliverables from a CenterTest implementation, since it addresses an immediate Guidewire requirement while building the foundation for broader test coverage.", related: ["What pre-built components does CenterTest include?", "What are CenterTest reusables?"] },
      { q: "What artifacts can Quality Gates control?", a: "Quality Gates control two types of artifacts:<br><br><div class='list-item'>Commits awaiting merge into the main branch.</div><div class='list-item'>Builds awaiting promotion to higher star systems (environments).</div>", related: ["What are Guidewire Cloud Quality Gates?"] },
      { q: "What Quality Gate types does Guidewire Cloud provide?", a: "Guidewire Cloud supports two Quality Gate types:<br><br><div class='list-item'><b>Default Gates:</b> Predefined gates managed by Guidewire with built-in validation mechanisms requiring no additional customer testing investment. Currently includes deployment checks verifying application status before build promotion.</div><div class='list-item'><b>Custom Gates:</b> Customer-defined verification criteria integrating results from external testing investments. Custom Gates enable organizations to bring their own testing tools into the InsuranceSuite CI/CD pipeline.</div>", related: ["How does CenterTest work with Quality Gates?"] },
      { q: "At what pipeline stages can Quality Gates run?", a: "Guidewire Cloud supports Quality Gates at two pipeline stages:<br><br><div class='list-item'><b>Pre-Merge:</b> Block commits from being merged in Bitbucket until verification criteria pass. Status appears as merge conditions in the Bitbucket interface.</div><div class='list-item'><b>Pre-Promotion:</b> Block builds from being promoted to higher star systems until verification criteria pass. Status appears in the Build Promoter app.</div>", related: ["What CI/CD events can trigger CenterTest for Guidewire Quality Gates?"] },
      { q: "What statuses can Quality Gates display?", a: "Quality Gates display the following statuses:<br><br><div class='list-item'><b>Passing:</b> All required verification criteria met, artifact can proceed.</div><div class='list-item'><b>Failing:</b> Required verification criteria failed, artifact blocked.</div><div class='list-item'><b>Passing with warnings:</b> Required criteria passed but optional criteria failed, artifact can proceed with noted concerns.</div><div class='list-item'><b>Pending:</b> Verification in progress, awaiting results.</div><div class='list-item'><b>Not configured:</b> Quality Gates not established for this stage.</div>", related: ["What are Guidewire Cloud Quality Gates?"] }
    ]
  },
  {
    category: "Risk-Free Trial, Implementations, and Kimputing Managed Services",
    questions: [
      { q: "Does Kimputing offer a risk-free evaluation?", a: "Yes. Kimputing provides a risk-free Minimum Viable Product (MVP) process at no cost, typically completing within two weeks.<br><br>A CenterTest architect and automation engineer work directly with your Guidewire environment to create comprehensive, end-to-end, data-driven scenarios designed to your specifications. The MVP demonstrates CenterTest capabilities against your actual implementation (not a demo environment) so you see exactly how the framework handles your customizations, workflows, and data structures. Unlike a throwaway proof of concept, scenarios created during the MVP become production assets if you proceed.", related: ["What does the MVP include?", "How quickly can CenterTest be implemented?"] },
      { q: "What does the MVP include?", a: "The risk-free MVP is designed as a \"try before you buy\" implementation, to validate that CenterTest meets your organization's most critical business needs related to test automation.<br><br>It can provide:<br><br><div class='list-item'><b>Working scenarios:</b> CenterTest data-driven scenarios (typically designated functions), validated against your actual Guidewire environment, configurations, integrations, and workflows.</div><div class='list-item'><b>Hands-on experience:</b> The opportunity for your team to observe the CenterTest development and implementation process.</div><div class='list-item'><b>Production-ready assets:</b> Scenarios implemented during the MVP are production ready. There is no throwaway work, giving you a jumpstart to CenterTest implementation.</div><div class='list-item'><b>Integration validation:</b> Confirmation CenterTest works with your unique architecture, including: SSO/MFA authentication flows, credential management, document handling, and connections to critical, external systems that you need to test.</div>", related: ["Does CenterTest include designated functions coverage?", "Can CenterTest handle SSO and MFA authentication?"] },
      { q: "What commitment is required for the MVP?", a: "No financial commitment is required.<br><br>The time commitment from your team is approximately 4-8 hours over the course of the MVP, depending on the complexity of your environment, architecture, and Guidewire configurations. Kimputing encourages your team to shadow during the MVP for hands-on exposure before formal training, which accelerates adoption if you proceed.<br><br>Scenarios created during the MVP become production assets immediately. This is why we call it a Minimum Viable Product rather than a proof of concept: you are not evaluating throwaway work, you are building the foundation of your automation practice.", related: [] },
      { q: "How quickly can CenterTest be implemented?", a: "Every implementation is different, and automation is never truly \"complete\" since coverage continues to expand as your testing needs evolve. That said, CenterTest's architecture enables rapid time-to-value.<br><br>For mono-state, mono-line carriers operating close to Guidewire out-of-the-box (such as a Work Comp mutual carrier), comprehensive automation across PolicyCenter, BillingCenter, and ClaimCenter can deploy in approximately 30 days. For multi-state carriers, core Designated Functions coverage across eight or more lines of business typically requires a similar timeframe.<br><br>More states, more lines of business, and more configurations increase the calendar time required, but not necessarily the complexity. CenterTest's data-driven architecture means a single submission scenario per line of business can drive test coverage across all operating states simply by adjusting the test data. You write the scenario once, then scale coverage through data variations rather than duplicating code.<br><br>The critical factor is CenterTest's reusable architecture, which creates exponential growth in implementation speed over time. Every reusable component, every shared data structure, and every validated integration accelerates future development. The more scenarios you implement, the faster new requirements incorporate into your test suite. Early implementation builds the foundation; subsequent expansion leverages that foundation for rapid delivery.<br><br>For organizations also testing non-Guidewire systems (rating engines, document repositories, external APIs), those integrations develop alongside Guidewire automation using the same framework and patterns.", related: ["Does Kimputing offer a risk-free evaluation?", "What does the MVP include?"] },
      { q: "What are the standard phases of CenterTest implementation?", a: "CenterTest implementation follows four phases, though Pre-Deployment and Deployment often run concurrently:<br><br><div class='list-item'><b>Pre-Deployment:</b> The risk-free MVP process validates core architecture and framework functionality against your Guidewire implementation. This phase includes evaluation of your environment (including any integrated external systems), analysis of testing priorities, and automation strategy development aligned with your release cycles.</div><div class='list-item'><b>Deployment:</b> CenterTest setup, framework generation against your Guidewire source, and core scenario implementation. Kimputing begins implementing scenarios that do not require specific workflow clarification or business team input, delivering designated functions and happy-path testing immediately while setting the foundation for more complex workflows.</div><div class='list-item'><b>Solution Scaling:</b> Coverage expansion across additional lines of business, Centers, non-Guidewire integrations, and CI/CD pipeline integration.</div><div class='list-item'><b>Optimization:</b> Establishment of maintenance processes, HealthCheck reviews, and continuous improvement aligned with Guidewire upgrade cycles.</div><br>", related: ["Does Kimputing offer a risk-free evaluation?", "What is CenterTest HealthCheck?"] },
      { q: "How long does initial generation and setup take?", a: "CenterTest generators read your Guidewire source code (PCF files, type lists, and product model definitions) and automatically create strongly-typed test framework assets: page objects, type list enums, product model helpers, and utility classes. This generation process completes in minutes and produces test assets perfectly synchronized with your specific Guidewire implementation, including all customizations.<br><br>Full setup, including prerequisites installation, repository configuration, and verification testing, typically completes within one to two days. Teams can begin scenario development immediately after setup verification.", related: ["What is 'regeneration'?", "What are CenterTest generators?"] },
      { q: "What software is required to run CenterTest?", a: "CenterTest requires standard development tooling that most Guidewire teams already have:<br><br><div class='list-item'><b>JDK 11+</b> for Java-based test execution.</div><div class='list-item'><b>IntelliJ IDEA</b> (Community or Ultimate) as the development environment.</div><div class='list-item'><b>Git</b> for version control and test asset management.</div><div class='list-item'><b>CenterTest plugin for IntelliJ</b> providing framework integration, scenario templates, and productivity features.</div><br>No specialized infrastructure, cloud services, or additional licensing is required beyond these standard tools. Because CenterTest is a Java framework, it can leverage any Java library for testing non-Guidewire systems. REST clients, database connectors, document parsers, and other utilities are integrated natively into the CenterTest Framework.<br><br>For organizations looking to fully outsource their test automation, or those with small IT teams, Kimputing can set up and manage these requirements on your behalf.", related: ["Is CenterTest a cloud-based or SaaS product?"] },
      { q: "Does CenterTest require access to Guidewire source code?", a: "For Guidewire-specific automation, yes. The generators require access to Guidewire source code (specifically PCF files, type lists, and product model definitions) to create strongly-typed test assets. Generation runs entirely within your environment, and Guidewire source code never leaves your infrastructure. CenterTest does not maintain a constant connection to your Guidewire source repositories. For Cloud customers, source access is available through Guidewire's standard repository access.<br><br>Running the generators is straightforward. A member of your team can easily run generation without providing Kimputing access to your source code, then share only the generated automation framework output for MVP development or ongoing collaboration.<br><br>For testing non-Guidewire systems, no Guidewire source access is needed. CenterTest can automate external applications, APIs, and integrations using standard web automation and API testing patterns without any Guidewire dependencies.", related: ["What are CenterTest generators?"] },
      { q: "What browser testing engines can CenterTest use?", a: "CenterTest supports execution through Playwright (the current default) and Selenium.<br><br>The engine abstraction layer ensures scenarios remain unchanged regardless of which engine executes them, enabling adoption of new automation technologies as they emerge.", related: ["Does CenterTest support UI testing?"] },
      { q: "What engagement options does Kimputing offer?", a: "Kimputing provides flexible engagement models to match your needs and internal capacity:<br><br><div class='list-item'><b>Project-based engagements:</b> Targeted initiatives like rate testing validation, performance testing, Cloud migration support, designated functions coverage, or integration testing for external systems.</div><div class='list-item'><b>Automation practice building:</b> Team training, framework customization, and knowledge transfer to build internal capability.</div><div class='list-item'><b>Migration and upgrade support:</b> Pre-Cloud to Cloud transitions, ski resort version upgrades, and multi-version validation.</div><div class='list-item'><b>Ongoing partnership:</b> Help desk access, periodic HealthCheck reviews, framework maintenance during Guidewire upgrades, and scenario development support.</div><br>Unlike other QA organizations and system integrators, Kimputing's business model is not built on becoming a permanent managed-services provider in your organization. While we can provide fully-outsourced automation services, we prefer partnership models that help you deliver automation value quickly, then transition to independent operation. You call on Kimputing when necessary (for example, during major projects or Guidewire upgrades) rather than maintaining ongoing dependency.", related: ["What is CenterTest HealthCheck?", "What training does Kimputing provide?"] },
      { q: "What team structure does Kimputing recommend for CenterTest implementation?", a: "Typically, Kimputing provides a small team of insurance-domain specialists with expertise in both test automation and Guidewire InsuranceSuite. This team works with the appropriate SMEs and testing teams within your organization to enable rapid implementation and immediate ROI to your organization.<br><br>Kimputing brings the Guidewire testing experts, while your SMEs provide business context and validation. For scenarios involving non-Guidewire systems, Kimputing works with your integration teams to understand external system behaviors and incorporate them into end-to-end test coverage.<br><br>Team structure evolves as automation matures. Many organizations transition from Kimputing-led development to internal teams handling day-to-day operations, with Kimputing providing periodic support, HealthChecks, and upgrade assistance.", related: [] },
      { q: "Can organizations operate CenterTest independently?", a: "Yes. CenterTest is designed for customer independence.<br><br>After onboarding, your team can create new scenarios, extend reusables, manage test data, and execute test suites without ongoing Kimputing involvement. The framework's strongly-typed architecture means standard Java skills and IDE tooling (autocomplete, Find Usages, refactoring) handle most development tasks. CenterTest's readable code patterns mean scenarios are maintainable by anyone familiar with basic Java. No specialized framework expertise is required for day-to-day operations.<br><br>Support options include traditional documentation and help desk access, as well as AI-assisted support through the CenterTest MCP. Once your implementation reaches appropriate maturity, AI tools can assist with stacktrace analysis, refactoring suggestions, test writing guidance, and debugging.<br><br>This independence extends to non-Guidewire automation as well. Teams comfortable with Java can add API tests, external system validations, and custom integrations using standard patterns.", related: ["What training does Kimputing provide?", "Can teams get help without contacting Kimputing?"] },
      { q: "What training does Kimputing provide?", a: "Upon licensure, Kimputing provides comprehensive hands-on training tailored to your desired business outcomes and team structure.<br><br>Training topics can include:<br><br><div class='list-item'><b>Framework fundamentals:</b> CenterTest architecture, project structure, and execution modes.</div><div class='list-item'><b>Scenario development:</b> Creating tests, using reusables, extending base classes, and writing assertions.</div><div class='list-item'><b>Data-driven testing:</b> DDT spreadsheet configuration, entity references, and coverage scaling.</div><div class='list-item'><b>Framework maintenance:</b> Generator usage, regeneration workflows, and handling Guidewire changes.</div><div class='list-item'><b>Test manager integration:</b> Configuring ReportPortal, TestRail, SpiraTest, or other platforms.</div><div class='list-item'><b>Non-Guidewire automation:</b> Patterns for testing external APIs, web applications, and integrated systems using the same framework.</div><br>Training uses your actual Guidewire environment (not generic examples) so your team leaves ready to create production scenarios immediately.", related: ["Do I need programming skills to use CenterTest?", "Can teams create custom reusables?"] },
      { q: "What expertise does Kimputing bring?", a: "Kimputing combines deep Guidewire platform expertise with decades of enterprise test automation experience.<br><br>Our team includes ACE-certified Guidewire developers and test automation experts who have worked with Guidewire since its inception. We understand insurance operations: underwriting workflows, billing cycles, claims processing, regulatory requirements, and the carrier-specific variations that make every implementation unique.<br><br>This dual expertise matters because effective Guidewire test automation requires more than testing skills. You need people who understand why a submission follows a particular wizard flow, how billing cycles interact with policy changes, and what compliance requirements drive claims processing rules. Kimputing brings that context to every engagement.<br><br>We also bring proven patterns for extending automation beyond Guidewire to rating engines, document management systems, payment processors, and other integrated systems. We help your test coverage span your entire ecosystem, not just your Guidewire implementation.", related: [] },
      { q: "What expertise is required for organizations to internally support CenterTest?", a: "Most CenterTest implementations require only one SDET (Software Development Engineer in Test) or QE (Quality Engineer) to support automation for your entire organization.<br><br>CenterTest is designed to minimize the expertise required for ongoing maintenance:<br><br><div class='list-item'><b>Readable code patterns:</b> Scenarios read like plain English, so basic Java familiarity is sufficient for day-to-day operations.</div><div class='list-item'><b>Reusable architecture:</b> Fixes to shared components propagate automatically across all scenarios, reducing maintenance scope.</div><div class='list-item'><b>IDE tooling:</b> Standard IntelliJ features like autocomplete, Find Usages, and refactoring handle most development tasks without specialized framework knowledge.</div><div class='list-item'><b>Data-driven scaling:</b> Business teams can expand test coverage through Excel spreadsheets without touching code.</div><br>For organizations without dedicated test automation staff, or those wishing to fully outsource their automation practice, Kimputing provides managed services directly or through implementation partners. You do not need an army of testing experts or engineers to manage your CenterTest implementation. One qualified engineer working with your subject matter experts can effectively manage the deployment.", related: [] },
      { q: "What is CenterTest HealthCheck?", a: "CenterTest HealthCheck is a manual analysis process Kimputing performs using custom internal tools. During HealthCheck reviews, Kimputing examines your test code and data to identify optimization opportunities and ensure your test suite remains efficient and maintainable as it scales.<br><br>Think of HealthCheck as a periodic tune-up for your automation practice. As test suites grow organically, patterns emerge that create unnecessary maintenance burden or execution inefficiency. HealthCheck identifies these patterns before they become problems.", related: ["What engagement options does Kimputing offer?"] },
      { q: "What does HealthCheck analyze?", a: "During HealthCheck reviews, Kimputing identifies common inefficiencies:<br><br><div class='list-item'><b>Reusable candidates:</b> Manual code duplicated across multiple scenarios that should become shared reusables.</div><div class='list-item'><b>DDT utilization:</b> Separate scenarios that could merge into a single data-driven scenario with multiple test data rows.</div><div class='list-item'><b>Data review:</b> Redundant test data entries that could consolidate through entity reuse and shared references.</div><div class='list-item'><b>Pattern deviations:</b> Code that deviates from CenterTest best practices in ways that will create maintenance challenges as the suite scales.</div><br>", related: ["How do reusables simplify maintenance?", "What is Object-Oriented Data-Driven Testing (OODDT)?"] },
      { q: "When should HealthCheck reviews occur?", a: "HealthCheck reviews are most valuable:<br><br><div class='list-item'>After significant test suite expansion (adding new lines of business, new Centers, or major feature coverage).</div><div class='list-item'>As part of periodic optimization, typically quarterly for active implementations.</div><div class='list-item'>Before major Guidewire upgrades, to identify scenarios that may need attention.</div><br>Kimputing can include HealthCheck reviews as part of ongoing support agreements, or perform them on-demand as part of project engagements.", related: ["How does CenterTest handle ski resort updates?"] },
      { q: "What ongoing support does Kimputing provide?", a: "Licensed customers receive:<br><br><div class='list-item'><b>Help desk access:</b> Direct support for questions beyond documentation, including architecture guidance and troubleshooting assistance.</div><div class='list-item'><b>Framework maintenance:</b> Updates and compatibility patches when Guidewire releases new versions or ski resort updates.</div><div class='list-item'><b>HealthCheck reviews:</b> Analysis of your CenterTest implementation to identify opportunities for optimization, provided as needed or as requested.</div><div class='list-item'><b>Optional Managed Services:</b> Additional scenario development, custom integration work, or dedicated support for complex implementations as needed.</div>", related: [] },
      { q: "Can teams get help without contacting Kimputing?", a: "AI-assisted tools have significantly reduced the need for person-based support by providing instant answers to common questions. Teams can get documentation guidance, troubleshooting help, and code suggestions through AI without waiting for human response.<br><br>This does not eliminate human support. Kimputing's help desk remains available for complex questions, architectural decisions, and situations where AI guidance is insufficient. The goal is self-service for routine questions while preserving access to expertise when needed.", related: ["Does CenterTest use AI?", "How does CenterTest integrate with AI coding assistants?"] }
    ]
  },
  {
    category: "AI-Assisted CenterTest Development",
    questions: [
      { q: "How does CenterTest integrate with AI coding assistants?", a: "CenterTest does not directly integrate with AI in any way. Instead, Kimputing provides stand-alone architecture that supports AI-assisted test automation development, implementation, and maintenance through MCP architecture.<br><br>MCP (Model Context Protocol) is an open standard that provides a client/server architecture enabling AI assistants to access context from multiple sources while maintaining security boundaries.<br><br>In the CenterTest context, the architecture includes multiple context sources:<br><br><div class='list-item'><b>JetBrains MCP:</b> Provides AI access to test code in your IDE workspace, enabling the assistant to understand your specific implementation patterns and test codebase.</div><div class='list-item'><b>CenterTest MCP:</b> Provides AI access to CenterTest documentation, troubleshooting guides, exception codes, Guidewire stack trace analysis, and framework patterns.</div><div class='list-item'><b>ReportPortal MCP:</b> For organizations using ReportPortal, this MCP provides AI access to test execution results, enabling automated test analysis, failure summarization, and trend identification directly through AI conversation.</div><div class='list-item'><b>PostgreSQL MCP:</b> PostgreSQL is a Model Context Protocol server providing read-only access to PostgreSQL databases, allowing for schema inspection and execution of read-only queries of data collected through CenterTest Analytics.</div><br>This architecture means AI assistants can combine context from CenterTest documentation, your specific test code, and execution results to provide powerful, relevant development support and powerful analytics without compromising security.", related: ["What can AI assistants help with?", "What data can AI tools access?"] },
      { q: "How does the core CenterTest framework support easy deployment of AI-assisted test automation development?", a: "CenterTest's architecture provides AI-powered development assistants with the structure, context, and guardrails needed to deliver immediate value without complex infrastructure or risky integrations.<br><br>Why AI assistants are a perfect match for CenterTest:<br><br><div class='list-item'><b>Common-language code patterns:</b> CenterTest generators produce readable, strongly-typed code. Reusables like <code>PC.createPersonalAutoSubmission()</code> and scenarios that chain plain-English method calls are easy for both humans and AI to understand, reducing the \"perception gap\" where AI suggestions miss critical context.</div><div class='list-item'><b>Code Context:</b> Hundreds of out-of-the-box tests and reusables, combined with secure access to your own growing library of tests, provide AI assistants with proven patterns to understand your implementation and best practices. This enables AI support that follows established conventions and proven testing patterns.</div><div class='list-item'><b>Documented analytics schemas:</b> CenterTest Analytics stores execution data in a documented database schema. Combined with PostgreSQL MCP access, this enables AI to perform sophisticated custom analytics and reporting through natural language queries.</div><div class='list-item'><b>MCP architecture for context:</b> Purpose-built MCP servers (JetBrains, CenterTest, ReportPortal, PostgreSQL) provide AI assistants with safe, scoped access to test code, documentation, and execution results. As your implementation grows, the AI's context improves automatically.</div><div class='list-item'><b>Sandboxed execution:</b> AI tools operate within defined boundaries, limiting risk of data exfiltration, prompt injection, or unintended modifications.</div><div class='list-item'><b>No AI dependency in core framework:</b> Because the core testing framework is deterministic and AI-free, no AI process is built on top of another. This independence means your AI-assisted tooling can evolve with the rapidly changing AI landscape without affecting your foundational test automation.</div><br>This architecture addresses a common enterprise challenge: organizations that simply layer AI onto existing processes often see no efficiency gains and shift resources from development to code review. CenterTest's structured, well-documented framework gives AI the authoritative context needed to provide genuinely useful assistance.", related: ["Why is it important that the core CenterTest framework stay AI-free?", "What are CenterTest generators?"] },
      { q: "What can AI assistants help with?", a: "AI assistants can help with support, maintenance, development, and analytics:<br><br><div class='list-item'><b>Documentation Intelligence:</b> Instant answers to framework questions, property configuration, and usage patterns without searching through documentation.</div><div class='list-item'><b>Widget Discovery:</b> Search through generated page objects to find the correct widget references for UI interactions.</div><div class='list-item'><b>Stacktrace Analysis:</b> CenterTest-specific error diagnosis that explains what went wrong and suggests solutions based on known error patterns.</div><div class='list-item'><b>Scenario Assistance:</b> Guidance for creating new scenarios following established patterns from your existing test library.</div><div class='list-item'><b>Debugging Support:</b> AI can analyze failing tests, compare against working scenarios, and identify likely causes.</div><div class='list-item'><b>Analytics Queries:</b> Natural language questions against CenterTest Analytics and ReportPortal data to identify trends, flaky tests, and performance patterns.</div><div class='list-item'><b>Refactoring Guidance:</b> Suggestions for improving test code structure, identifying candidates for reusable components, and optimizing data-driven coverage.</div><div class='list-item'><b>Mass Maintenance Support:</b> When Guidewire changes require updates across multiple scenarios, AI can help identify patterns and suggest systematic fixes.</div>", related: ["Can AI help with analytics and reporting?", "Can AI help prevent test bloat?"] },
      { q: "Why is it important that the core CenterTest framework stay AI-free?", a: "Large language models excel at many tasks. Deterministic testing is not one of them.<br><br>LLMs are inherently probabilistic, they do not reason (yet). They simply predict and generate likely outputs based on their training data.<br><br>This introduces variability that is fundamentally incompatible with test automation, where the same inputs must produce the same results every time. AI-native or AI-first testing tools embed this unpredictability into the core testing process, undermining the reliability that test automation exists to provide.<br><br>Beyond reliability, AI-integrated testing tools present practical challenges for enterprises:<br><br><div class='list-item'><b>Increased cloud costs:</b> AI-native solutions require ongoing cloud computing resources that scale with test volume.</div><div class='list-item'><b>Uncertain sustainability:</b> The AI landscape changes rapidly. Tools built entirely on AI foundations may require significant rework as models, APIs, and providers evolve.</div><div class='list-item'><b>Security exposure:</b> Integrated AI solutions can expose your environment, source code, and test data directly to LLMs, increasing risk of data exfiltration, prompt injection attacks, and PII exposure.</div><div class='list-item'><b>Shifted workload without efficiency gains:</b> Many enterprises deploying AI-first solutions report no net productivity improvement. They simply shift resources from writing code to reviewing AI-generated code.</div><br>CenterTest takes a different approach:<br><br><div class='list-item'><b>Deterministic execution:</b> The core framework produces consistent, reproducible, hallucination-free test results every time.</div><div class='list-item'><b>Security architecture:</b> Sandboxing, MCP boundaries, and isolated AI contexts prevent the risks associated with tightly integrated AI solutions.</div><div class='list-item'><b>Optional adoption:</b> Teams adopt AI assistance at their own pace. The core testing framework operates independently of any AI tooling.</div><div class='list-item'><b>Future flexibility:</b> Because the core framework has no AI dependencies, your AI-assisted tooling can evolve with the rapidly changing AI landscape. Updates to AI capabilities enhance your automation without destabilizing the foundation.</div><br>AI cannot achieve deterministic testing on its own. An AI generating test code might produce slightly different implementations each time, and an AI evaluating test results might interpret the same output differently across runs.<br><br>This is why CenterTest maintains a deterministic core framework while leveraging AI for tasks where it excels: documentation lookup, support, code suggestions and review, analytics, debugging assistance, and pattern recognition. The framework produces consistent, reproducible test results; AI assists with the development and analysis surrounding those results. This separation ensures you get the benefits of AI assistance without sacrificing the reliability your test automation requires.", related: ["What is deterministic testing?", "Does CenterTest use AI?"] },
      { q: "What is deterministic testing?", a: "Deterministic testing means that given the same inputs, test execution produces the same results every time. There is no randomness, no variability, and no unpredictable test behavior. The same test scenario run against the same application state will always pass or fail consistently.<br><br>This contrasts with non-deterministic approaches where outcomes can vary between executions due to timing, randomization, or external dependencies. Non-deterministic tests create \"flaky\" results that undermine confidence in test suites and complicate debugging.<br><br>Deterministic testing matters because:<br><br><div class='list-item'><b>Reproducibility:</b> When a test fails, you can reliably reproduce the failure to diagnose the root cause.</div><div class='list-item'><b>Trust:</b> Teams can trust test results as accurate indicators of application behavior rather than artifacts of test instability.</div><div class='list-item'><b>Compliance:</b> Audit and regulatory requirements often demand demonstrable, repeatable verification processes.</div><div class='list-item'><b>Debugging efficiency:</b> Consistent behavior means failures point to actual defects rather than environmental noise.</div>", related: ["Does CenterTest use AI?", "Why is it important that the core CenterTest framework stay AI-free?"] },
      { q: "Can AI help prevent test bloat?", a: "Yes. One of the most common inefficiencies in test automation is creating new scenarios when existing scenarios could cover the requirement through data variations. AI can analyze incoming test requirements against your existing scenario library and identify opportunities to expand coverage through DDT rather than new code.<br><br>For example, if a requirement asks for \"test policy cancellation for California,\" AI might identify that your existing cancellation scenario already supports state variations through test data, and you simply need to add a California data row rather than writing a new scenario.", related: ["What is Object-Oriented Data-Driven Testing (OODDT)?"] },
      { q: "Can AI help with analytics and reporting?", a: "AI enables custom analytics by regular team members with no data analyst experience. Through natural language interaction, teams can query execution data, generate reports, analyze trends, and identify patterns without SQL expertise or data science skills.<br><br>CenterTest Analytics stores comprehensive execution data in a documented database schema that your AI assistant can access via the PostgreSQL MCP. In addition, the ReportPortal MCP provides AI access to test results, launches, and defect information.<br><br>Examples of questions AI can answer from your execution data:<br><br><div class='list-item'>\"Which scenarios have the highest failure rates this month?\"</div><div class='list-item'>\"What is the average execution time for Personal Auto submissions, and has it increased recently?\"</div><div class='list-item'>\"Show me all failures related to the payment processing step across all scenarios.\"</div><div class='list-item'>\"Which tests are flaky and should be investigated for stability issues?\"</div><div class='list-item'>\"Compare this week's failure patterns to last week.\"</div><br>AI can also help Kimputing and your team develop permanent, persistent reports and dashboards for consistent stakeholder communication, without the need for constant AI involvement.", related: ["What data does CenterTest Analytics capture?"] },
      { q: "What data can AI tools access?", a: "AI tools should access only:<br><br><div class='list-item'>CenterTest documentation through CenterTest MCP.</div><div class='list-item'>Test code, test data, and CenterTest configuration files in the active branch workspace via the JetBrains MCP.</div><div class='list-item'>Test execution data via PostgreSQL MCP.</div><div class='list-item'>Test execution data through ReportPortal MCP.</div>", related: ["How does CenterTest integrate with AI coding assistants?"] },
      { q: "What data is protected from AI access?", a: "When used and deployed appropriately, AI tools should never be able to access:<br><br><div class='list-item'>Guidewire source code or production application code.</div><div class='list-item'>Production credentials, API keys, or database connection strings.</div><div class='list-item'>Production data or personally identifiable information.</div><div class='list-item'>Application runtime environments or live API endpoints.</div><div class='list-item'>Code repositories beyond the active workspace branch.</div>", related: ["How is AI security enforced?", "What data can AI tools access?"] },
      { q: "How is AI security enforced?", a: "Security for AI-assisted development relies on multiple layers that organizations can configure based on their requirements:<br><br><div class='list-item'><b>Branch isolation:</b> Test branches by design should not contain production code or Guidewire source.</div><div class='list-item'><b>Directory scoping:</b> JetBrains MCP and similar tools provide configuration to restrict AI access to specific directories, excluding credential files and sensitive configurations.</div><div class='list-item'><b>Tool restrictions:</b> JetBrains MCP includes a suite of tools that help restrict what AI agents can do, such as limiting file access, blocking certain commands, or requiring approval for specific operations.</div><div class='list-item'><b>Code review:</b> Standard review processes catch misplaced files before they reach AI-accessible branches.</div><div class='list-item'><b>Data practices:</b> CenterTest best practices require synthetic test data rather than production PII, ensuring sensitive information never enters test repositories.</div><br>Kimputing is committed to helping carriers stay on the cutting edge of AI security architecture as these practices mature.", related: ["Why is it important that the core CenterTest framework stay AI-free?"] }
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
    this.searchIndex = [];
    this.boundClickOutside = this.handleClickOutside.bind(this);
  }

  connectedCallback() {
    this.loadFont();
    this.buildSearchIndex();
    this.shadowRoot.innerHTML = '<div style="padding:16px;color:#666;">Loading...</div>';
    setTimeout(() => {
      this.render();
      this.attachEventListeners();
    }, 1000);
  }

  loadFont() {
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
      :host {
        display: block;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        --accent-color: #4EC3E0;
        --text-color: #000000;
        --bg-color: #FFFFFF;
        --border-radius: 25px;
        --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .faq-container {
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        position: relative;
        min-height: 56px;
      }

      /* Collapsed Bar */
      .collapsed-bar {
        background: var(--bg-color);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: 16px 24px;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        border: 1px solid #e0e0e0;
        position: absolute;
        width: 100%;
        z-index: 2;
        transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    box-shadow 0.3s ease;
      }

      .collapsed-bar:hover {
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
      }

      .collapsed-bar.hidden {
        opacity: 0;
        transform: scale(0.96);
        pointer-events: none;
      }

      .bar-placeholder {
        color: #666;
        font-size: 15px;
        font-weight: 400;
      }

      /* Expanded Panel */
      .expanded-panel {
        background: var(--bg-color);
        border-radius: 20px;
        box-shadow: var(--shadow);
        overflow: hidden;
        border: 1px solid #e0e0e0;
        flex-direction: column;
        display: flex;
        max-height: 56px;
        opacity: 0;
        transform: scale(0.98);
        pointer-events: none;
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .expanded-panel.visible {
        max-height: 45vh;
        opacity: 1;
        transform: scale(1);
        pointer-events: auto;
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s,
                    transform 0.4s cubic-bezier(0.34, 1.3, 0.64, 1);
      }

      /* Panel Header */
      .panel-header {
        padding: 16px 20px;
        border-bottom: 2px solid var(--accent-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-shrink: 0;
      }

      .panel-title {
        font-size: 16px;
        font-weight: 500;
        color: var(--text-color);
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
        padding: 12px 20px;
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
        transition: transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1);
      }

      .arrow.rotated {
        transform: rotate(180deg);
      }

      /* Questions List */
      .questions-list {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        padding: 0 20px;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                    padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .questions-list.visible {
        max-height: 5000px;
        opacity: 1;
        padding: 0 20px 8px 20px;
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.05s,
                    padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .question-item {
        padding: 6px 0;
        border-bottom: 1px solid #f5f5f5;
        margin: 0 -20px;
        padding-left: 20px;
        padding-right: 20px;
        transition: background 0.3s ease;
      }

      .question-item.expanded {
        background: rgba(78, 195, 224, 0.1);
      }

      .question-item:last-child {
        border-bottom: none;
      }

      .question-header {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        padding: 2px 0;
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
        transition: transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1);
      }

      .question-arrow.rotated {
        transform: rotate(90deg);
      }

      .question-content {
        flex: 1;
        min-width: 0;
        overflow: hidden;
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
        margin-top: 3px;
        line-height: 1.4;
        font-weight: 300;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        max-height: 20px;
        opacity: 1;
        transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                    margin 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .answer-preview.hidden {
        max-height: 0;
        opacity: 0;
        margin-top: 0;
      }

      .answer-full {
        font-size: 12px;
        color: #444;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--accent-color);
        line-height: 1.6;
        font-weight: 300;
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        padding-bottom: 0;
        border-bottom: 1px solid transparent;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                    padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    border-color 0.3s ease;
      }

      .answer-full.visible {
        max-height: 2000px;
        opacity: 1;
        padding-bottom: 8px;
        border-bottom-color: var(--accent-color);
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s,
                    padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    border-color 0.3s ease 0.2s;
      }

      /* List Items */
      .list-item {
        padding-left: 16px;
      }

      /* Code Snippets */
      code {
        font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        font-size: 11px;
        background: #f4f4f4;
        padding: 2px 6px;
        border-radius: 4px;
        color: #333;
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
          border-radius: 16px;
        }

        .expanded-panel.visible {
          max-height: 85vh;
        }

        .collapsed-bar {
          border-radius: 20px;
          padding: 14px 20px;
        }

        .bar-placeholder {
          font-size: 14px;
        }

        .panel-header {
          padding: 14px 16px;
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
      .category-header:focus-visible,
      .question-header:focus-visible,
      .close-btn:focus-visible {
        outline: 2px solid var(--accent-color);
        outline-offset: 2px;
      }

      /* Related FAQs Section */
      .related-faqs {
        margin-top: 12px;
        padding-top: 10px;
        border-top: 1px dashed #e0e0e0;
      }

      .related-faqs-label {
        font-size: 11px;
        font-weight: 500;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 6px;
      }

      .related-faq-link {
        display: block;
        font-size: 12px;
        color: #000000;
        text-decoration: none;
        cursor: pointer;
        padding: 4px 0;
        line-height: 1.4;
        transition: color 0.2s ease;
      }

      .related-faq-link:hover {
        color: #3aa8c4;
        text-decoration: underline;
      }

      .related-faq-link::after {
        content: " →";
        color: #ccc;
      }

      /* Search Input */
      .search-input {
        flex: 1;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color);
        background: transparent;
      }

      .search-input::placeholder {
        color: #666;
      }

      /* Search Results */
      .search-results {
        display: none;
        flex-direction: column;
        padding: 0 20px;
      }

      .search-results.visible {
        display: flex;
      }

      .search-result-item {
        padding: 6px 0;
        border-bottom: 1px solid #f5f5f5;
      }

      .search-result-item:last-child {
        border-bottom: none;
      }

      .search-result-header {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        padding: 2px 0;
      }

      .search-result-header:hover .search-result-question {
        color: #333;
      }

      .search-result-arrow {
        width: 10px;
        height: 10px;
        stroke: #888;
        stroke-width: 2;
        fill: none;
        flex-shrink: 0;
        margin-top: 5px;
        transition: transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1);
      }

      .search-result-arrow.rotated {
        transform: rotate(90deg);
      }

      .search-result-content {
        flex: 1;
        min-width: 0;
        overflow: hidden;
      }

      .search-result-question {
        font-size: 14px;
        font-weight: 400;
        color: var(--text-color);
        line-height: 1.4;
        transition: color 0.2s ease;
      }

      .search-result-category {
        font-size: 11px;
        color: #888;
        margin-top: 2px;
      }

      .search-result-answer {
        font-size: 12px;
        color: #444;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--accent-color);
        line-height: 1.6;
        font-weight: 300;
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .search-result-answer.visible {
        max-height: 2000px;
        opacity: 1;
      }

      .no-results {
        padding: 20px;
        text-align: center;
        color: #666;
        font-size: 14px;
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
        <!-- Collapsed Bar -->
        <div class="collapsed-bar" id="collapsedBar">
          <input type="text" class="search-input" id="searchInputCollapsed" placeholder="Search FAQs..." aria-label="Search FAQs">
        </div>

        <!-- Expanded Panel -->
        <div class="expanded-panel" id="expandedPanel">
          <div class="panel-header">
            <input type="text" class="search-input" id="searchInputExpanded" placeholder="Search FAQs..." aria-label="Search FAQs">
            <button class="close-btn" id="closeBtn" aria-label="Close FAQ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="content-area" id="contentArea">
            <div class="search-results" id="searchResults"></div>
            <div class="categories-container" id="categoriesContainer">
              ${this.renderCategories()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCategories() {
    return FAQ_DATA.map((cat, index) => `
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
                  <div class="answer-preview">${this.stripHtml(item.a)}</div>
                </div>
              </div>
              <div class="answer-full" id="answer-${index}-${qIndex}">${item.a}${this.renderRelatedFaqs(item.related)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  stripHtml(html) {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  renderRelatedFaqs(related) {
    if (!related || related.length === 0) return '';

    const links = related.map(questionText =>
      `<a class="related-faq-link" data-question="${questionText}">${questionText}</a>`
    ).join('');

    return `
      <div class="related-faqs">
        <div class="related-faqs-label">Related FAQs</div>
        ${links}
      </div>
    `;
  }

  attachEventListeners() {
    const collapsedBar = this.shadowRoot.getElementById('collapsedBar');
    const closeBtn = this.shadowRoot.getElementById('closeBtn');
    const searchInputCollapsed = this.shadowRoot.getElementById('searchInputCollapsed');
    const searchInputExpanded = this.shadowRoot.getElementById('searchInputExpanded');

    // Open panel when clicking collapsed bar (but not the input)
    collapsedBar.addEventListener('click', (e) => {
      if (e.target !== searchInputCollapsed) {
        this.expand();
        searchInputExpanded.focus();
      }
    });

    // Expand when typing in collapsed search
    searchInputCollapsed.addEventListener('focus', () => {
      this.expand();
      searchInputExpanded.focus();
      searchInputExpanded.value = searchInputCollapsed.value;
    });

    // Handle search input
    searchInputExpanded.addEventListener('input', (e) => {
      this.handleSearch(e.target.value);
    });

    // Close panel
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.collapse();
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

    // Related FAQ links (using event delegation on content area)
    const contentArea = this.shadowRoot.getElementById('contentArea');
    contentArea.addEventListener('click', (e) => {
      if (e.target.classList.contains('related-faq-link')) {
        e.preventDefault();
        const questionText = e.target.dataset.question;
        this.navigateToQuestion(questionText);
      }
    });

    // Click outside listener
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
    const collapsedBar = this.shadowRoot.getElementById('collapsedBar');
    const panel = this.shadowRoot.getElementById('expandedPanel');

    collapsedBar.classList.add('hidden');
    panel.classList.add('visible');
  }

  collapse() {
    this.isExpanded = false;
    const collapsedBar = this.shadowRoot.getElementById('collapsedBar');
    const panel = this.shadowRoot.getElementById('expandedPanel');

    panel.classList.remove('visible');
    collapsedBar.classList.remove('hidden');

    this.resetView();
  }

  resetView() {
    // Clear search
    this.searchQuery = '';
    const searchInputCollapsed = this.shadowRoot.getElementById('searchInputCollapsed');
    const searchInputExpanded = this.shadowRoot.getElementById('searchInputExpanded');
    const searchResults = this.shadowRoot.getElementById('searchResults');
    const categoriesContainer = this.shadowRoot.getElementById('categoriesContainer');

    if (searchInputCollapsed) searchInputCollapsed.value = '';
    if (searchInputExpanded) searchInputExpanded.value = '';
    if (searchResults) {
      searchResults.classList.remove('visible');
      searchResults.innerHTML = '';
    }
    if (categoriesContainer) categoriesContainer.style.display = '';

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
    this.shadowRoot.querySelectorAll('.question-item').forEach(item => {
      item.classList.remove('expanded');
    });
    this.shadowRoot.querySelectorAll('.question-arrow').forEach(arrow => {
      arrow.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.question-header').forEach(header => {
      header.setAttribute('aria-expanded', 'false');
      const preview = header.querySelector('.answer-preview');
      if (preview) preview.classList.remove('hidden');
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

    // Collapse all expanded answers
    this.shadowRoot.querySelectorAll('.answer-full.visible').forEach(answer => {
      answer.classList.remove('visible');
    });
    this.shadowRoot.querySelectorAll('.question-item').forEach(item => {
      item.classList.remove('expanded');
    });
    this.shadowRoot.querySelectorAll('.question-arrow.rotated').forEach(a => {
      a.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.question-header').forEach(h => {
      h.setAttribute('aria-expanded', 'false');
      const preview = h.querySelector('.answer-preview');
      if (preview) preview.classList.remove('hidden');
    });
    this.expandedQuestions.clear();

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
    const questionItem = header.closest('.question-item');
    const isExpanded = answer.classList.contains('visible');

    // Check if another question is currently expanded
    const hasOtherExpanded = this.shadowRoot.querySelector('.answer-full.visible:not(#' + answerId + ')');

    // Collapse all other questions first
    this.shadowRoot.querySelectorAll('.answer-full.visible').forEach(otherAnswer => {
      if (otherAnswer.id !== answerId) {
        otherAnswer.classList.remove('visible');
        const otherItem = otherAnswer.closest('.question-item');
        if (otherItem) otherItem.classList.remove('expanded');
        const otherHeader = otherAnswer.previousElementSibling;
        if (otherHeader) {
          const otherArrow = otherHeader.querySelector('.question-arrow');
          const otherPreview = otherHeader.querySelector('.answer-preview');
          if (otherArrow) otherArrow.classList.remove('rotated');
          if (otherPreview) otherPreview.classList.remove('hidden');
          otherHeader.setAttribute('aria-expanded', 'false');
        }
        this.expandedQuestions.delete(otherAnswer.id);
      }
    });

    if (isExpanded) {
      answer.classList.remove('visible');
      arrow.classList.remove('rotated');
      header.setAttribute('aria-expanded', 'false');
      preview.classList.remove('hidden');
      questionItem.classList.remove('expanded');
      this.expandedQuestions.delete(answerId);
    } else {
      const expandAndScroll = () => {
        // Scroll to question
        const contentArea = this.shadowRoot.getElementById('contentArea');
        if (questionItem && contentArea) {
          const itemTop = questionItem.offsetTop - questionItem.closest('.questions-list').offsetTop +
                          questionItem.closest('.category-item').offsetTop - 16;
          contentArea.scrollTo({ top: itemTop, behavior: 'smooth' });
        }

        // Expand after scroll starts
        setTimeout(() => {
          answer.classList.add('visible');
          arrow.classList.add('rotated');
          header.setAttribute('aria-expanded', 'true');
          preview.classList.add('hidden');
          questionItem.classList.add('expanded');
          this.expandedQuestions.add(answerId);
        }, 150);
      };

      // If collapsing another, wait for it first
      if (hasOtherExpanded) {
        setTimeout(expandAndScroll, 350);
      } else {
        expandAndScroll();
      }
    }
  }

  navigateToQuestion(questionText) {
    // Find the question in FAQ_DATA
    let targetCatIndex = -1;
    let targetQIndex = -1;

    FAQ_DATA.forEach((cat, catIndex) => {
      cat.questions.forEach((item, qIndex) => {
        if (item.q === questionText) {
          targetCatIndex = catIndex;
          targetQIndex = qIndex;
        }
      });
    });

    if (targetCatIndex === -1) return;

    // Collapse all categories first
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
    this.shadowRoot.querySelectorAll('.question-item').forEach(item => {
      item.classList.remove('expanded');
    });
    this.shadowRoot.querySelectorAll('.question-arrow').forEach(arrow => {
      arrow.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.question-header').forEach(header => {
      header.setAttribute('aria-expanded', 'false');
      const preview = header.querySelector('.answer-preview');
      if (preview) preview.classList.remove('hidden');
    });
    this.expandedQuestions.clear();

    // Expand target category
    const categoryHeader = this.shadowRoot.querySelector(`.category-header[data-category="${targetCatIndex}"]`);
    const questionsList = this.shadowRoot.getElementById(`questions-${targetCatIndex}`);
    const categoryArrow = categoryHeader.querySelector('.arrow');

    questionsList.classList.add('visible');
    categoryArrow.classList.add('rotated');
    categoryHeader.setAttribute('aria-expanded', 'true');
    this.activeCategory = targetCatIndex;

    // Expand target question
    const questionHeader = this.shadowRoot.querySelector(`.question-header[data-category="${targetCatIndex}"][data-question="${targetQIndex}"]`);
    const questionItem = questionHeader.closest('.question-item');
    const answerId = `answer-${targetCatIndex}-${targetQIndex}`;
    const answer = this.shadowRoot.getElementById(answerId);
    const questionArrow = questionHeader.querySelector('.question-arrow');
    const preview = questionHeader.querySelector('.answer-preview');

    answer.classList.add('visible');
    questionArrow.classList.add('rotated');
    questionHeader.setAttribute('aria-expanded', 'true');
    if (preview) preview.classList.add('hidden');
    questionItem.classList.add('expanded');
    this.expandedQuestions.add(answerId);

    // Scroll to question after animation completes
    setTimeout(() => {
      const contentArea = this.shadowRoot.getElementById('contentArea');
      if (questionItem && contentArea) {
        const itemTop = questionItem.offsetTop - questionItem.closest('.questions-list').offsetTop +
                        questionItem.closest('.category-item').offsetTop - 16;
        contentArea.scrollTo({ top: itemTop, behavior: 'smooth' });
      }
    }, 450);
  }

  buildSearchIndex() {
    this.searchIndex = [];
    FAQ_DATA.forEach((cat, catIndex) => {
      cat.questions.forEach((item, qIndex) => {
        const plainAnswer = this.stripHtml(item.a);
        this.searchIndex.push({
          category: cat.category,
          catIndex,
          qIndex,
          question: item.q,
          answer: item.a,
          plainAnswer,
          searchText: (item.q + ' ' + plainAnswer).toLowerCase()
        });
      });
    });
  }

  handleSearch(query) {
    this.searchQuery = query.trim().toLowerCase();
    const searchResults = this.shadowRoot.getElementById('searchResults');
    const categoriesContainer = this.shadowRoot.getElementById('categoriesContainer');

    if (!this.searchQuery) {
      searchResults.classList.remove('visible');
      searchResults.innerHTML = '';
      categoriesContainer.style.display = '';
      return;
    }

    const results = this.searchIndex.filter(item =>
      item.searchText.includes(this.searchQuery)
    );

    categoriesContainer.style.display = 'none';
    searchResults.classList.add('visible');
    searchResults.innerHTML = this.renderSearchResults(results);

    // Add event listeners for search results
    searchResults.querySelectorAll('.search-result-header').forEach(header => {
      header.addEventListener('click', () => this.toggleSearchResult(header));
    });
  }

  renderSearchResults(results) {
    if (results.length === 0) {
      return '<div class="no-results">No results found</div>';
    }

    return results.map((item, index) => `
      <div class="search-result-item">
        <div class="search-result-header" data-result="${index}" tabindex="0" role="button" aria-expanded="false">
          <svg class="search-result-arrow" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <div class="search-result-content">
            <div class="search-result-question">${item.question}</div>
            <div class="search-result-category">${item.category}</div>
          </div>
        </div>
        <div class="search-result-answer" id="search-answer-${index}">${item.answer}</div>
      </div>
    `).join('');
  }

  toggleSearchResult(header) {
    const resultIndex = header.dataset.result;
    const answerId = `search-answer-${resultIndex}`;
    const answer = this.shadowRoot.getElementById(answerId);
    const arrow = header.querySelector('.search-result-arrow');
    const isExpanded = answer.classList.contains('visible');

    // Collapse all other search results first
    this.shadowRoot.querySelectorAll('.search-result-answer.visible').forEach(otherAnswer => {
      if (otherAnswer.id !== answerId) {
        otherAnswer.classList.remove('visible');
        const otherHeader = otherAnswer.previousElementSibling;
        if (otherHeader) {
          const otherArrow = otherHeader.querySelector('.search-result-arrow');
          if (otherArrow) otherArrow.classList.remove('rotated');
          otherHeader.setAttribute('aria-expanded', 'false');
        }
      }
    });

    if (isExpanded) {
      answer.classList.remove('visible');
      arrow.classList.remove('rotated');
      header.setAttribute('aria-expanded', 'false');
    } else {
      answer.classList.add('visible');
      arrow.classList.add('rotated');
      header.setAttribute('aria-expanded', 'true');
    }
  }
}

// Register the custom element
customElements.define('faq-widget', FaqWidget);
