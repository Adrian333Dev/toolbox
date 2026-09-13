Composable Open-Source Payments Infrastructure

📁 Table of Contents

- [What Can I Do with Hyperswitch?](#-what-can-i-do-with-hyperswitch)
- [Quickstart (Local Setup)](#-quickstart-local-setup)
- [Cloud Deployment](#cloud-deployment)
- [Hosted Sandbox (No Setup Required)](#hosted-sandbox-no-setup-required)
- [Why Hyperswitch?](#-why-hyperswitch)
- [Architectural Overview](#architectural-overview)
- [Our Vision](#our-vision)
- [Community & Contributions](#community--contributions)
- [Feature Requests & Bugs](#feature-requests--bugs)
- [Versioning](#versioning)
- [License](#copyright-and-license)
- [Team Behind Hyperswitch](#team-behind-hyperswitch)

What Can I Do with Hyperswitch?

Hyperswitch offers a modular, open-source payments infrastructure designed for flexibility and control. Apart from our Payment Suite offering, this solution allows businesses to pick and integrate only the modules they need on top of their existing payment stack — without unnecessary complexity or vendor lock-in.

Each module is independent and purpose-built to optimize different aspects of payment processing.

 Learn More About The Payment Modules

- **Cost Observability**
  Advanced observability tools to audit, monitor, and optimize your payment costs. Detect hidden fees, downgrades, and penalties with self-serve dashboards and actionable insights.
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/ai-powered-cost-observability)_

- **Revenue Recovery**
  Combat passive churn with intelligent retry strategies tuned by card bin, region, method, and more. Offers fine-grained control over retry algorithms, penalty budgets, and recovery transparency.
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/revenue-recovery)_

- **Vault**
  A PCI-compliant vault service to store cards, tokens, wallets, and bank credentials. Provides a unified, secure, and reusable store of customer-linked payment methods. Also supports bring-your-own-vault to connect existing providers including VGS and TokenEx without re-tokenizing or migrating stored cards.
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/vault)_

- **Intelligent Routing**
  Route each transaction across Stripe, Adyen, Braintree, Worldpay, Checkout.com, and 120+ others to the PSP with the highest predicted auth rate. Reduce retries, avoid downtime, and minimize latency while maximizing first attempt success.
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/intelligent-routing)_

- **Reconciliation**
  Automate 2-way and 3-way reconciliation with backdated support, staggered scheduling, and customizable outputs. Reduces manual ops effort and increases audit confidence.
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/reconciliation)_

- **Alternate Payment Methods**
  Drop-in widgets for PayPal, Apple Pay, Google Pay, Samsung Pay, Pay by Bank, and BNPL providers like Klarna. Maximizes conversions with seamless one-click checkout.
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/enable-alternate-payment-method-widgets)_

## Quickstart

 Local Setup via Docker

```bash
# One-click local setup

git clone --depth 1 --branch latest https://github.com/juspay/hyperswitch

cd hyperswitch

scripts/setup.sh
```

  This script:

  - Detects Docker/Podman
  - Offers multiple deployment profiles:
    - **Standard**: App server + Control Center
    - **Full**: Includes monitoring + schedulers
    - **Minimal**: Standalone App server
  - Provides access links when done

  If you need further help, check out our [video tutorial](https://docs.hyperswitch.io/hyperswitch-open-source/overview/unified-local-setup-using-docker).

  👉 After setup, [configure a connector](https://docs.hyperswitch.io/hyperswitch-open-source/account-setup/using-hyperswitch-control-center#add-a-payment-processor) and [test a payment](https://docs.hyperswitch.io/hyperswitch-open-source/account-setup/test-a-payment).

Hosted Sandbox (No Setup Required)

Hyperswitch offers a fully hosted sandbox environment that requires no setup. You can explore the Control Center, configure payment connectors, and test payments directly from the UI.

   What you can do in the Hosted Sandbox

  - Access the full Control Center
  - Configure payment connectors
  - View logs, routing rules, and retry strategies
  - Try payments directly from the UI

Cloud Deployment

You can deploy to AWS, GCP, or Azure using Helm Charts.

Cloud Deployment Instructions.

  Architectural Overview

## Why Hyperswitch?

Hyperswitch is a commercial open-source payments stack purpose-built for scale, flexibility, and developer experience. Designed with a modular architecture, Hyperswitch lets you pick only the components you need—whether it’s routing, retries, vaulting, or observability—without vendor lock-in or bloated integrations.

Built in Rust for performance and reliability, Hyperswitch connects to Stripe, Adyen, Braintree, Worldpay, Checkout.com, Cybersource, and 120+ processors — exposing smart routing and retry logic, and provides a visual workflow builder in the Control Center. Whether you're integrating a full payment suite or augmenting an existing stack with a single module, Hyperswitch meets you where you are.

Common starting points: teams moving from a single Stripe/ Stripe connect or Braintree integration to multi-PSP routing, merchants replacing a payment gateway with direct acquirer connections to TSYS, JP Morgan Payments, or other acquirers, and merchants rearchitecting their payments platform through Hyperswitch while keeping their existing VGS, TokenEx or other existing vault intact.

“Linux for Payments” — Hyperswitch is a well-architected reference for teams who want to own their payments stack.

We believe in:

-  Embracing Payment Diversity: Innovation comes from enabling choice—across payment methods, processors, and flows.

-  Open Source by Default: Transparency drives trust and builds better, reusable software.

-  Community-Driven Development: Our roadmap is shaped by real-world use cases and contributors.

-  Systems-Level Engineering: We hold ourselves to a high bar for reliability, security, and performance.

-  Maximizing Value Creation: For developers, customers, and partners alike.

-  Community-Driven, Enterprise-Tested: Hyperswitch is built in the open with real-world feedback from developers and contributors, and maintained by Juspay, the team powering payment infrastructure for 400+ leading enterprises worldwide.

## Supported Connectors

Hyperswitch integrates with 100+ payment processors out of the box. Each connector has a dedicated guide covering credentials setup, webhook configuration, supported payment methods, and common failure modes.

| Processor | Type | Guide |
|-----------|------|-------|
| Global Payments | Payment Gateway | [View →](https://docs.hyperswitch.io/integrations/connectors-integrations/payment-processor-capabilities/available-connectors/globalpayments) |
| Stripe | Payment Gateway | [View →](https://docs.hyperswitch.io/integrations/connectors-integrations/payment-processor-capabilities/available-connectors/stripe) |
| Paypal | Payment Gateway | [View →](https://docs.hyperswitch.io/integrations/connectors-integrations/payment-processor-capabilities/available-connectors/paypal) |
| Adyen | Payment Gateway | [View →](https://docs.hyperswitch.io/integrations/connectors-integrations/payment-processor-capabilities/available-connectors/adyen) |
| Bank of America | Payment Gateway | [View →](https://docs.hyperswitch.io/integrations/connectors-integrations/payment-processor-capabilities/available-connectors/boa) |

👉 [Browse all available connectors →](https://docs.hyperswitch.io/integrations/connectors-integrations/payment-processor-capabilities/available-connectors)

## Hyperswitch Ecosystem Mapping
Hyperswitch is built as a set of modular services and SDKs that work together. The Rust app server in this repo is the core, and the repositories below extend it with dashboards, client SDKs, and deployment tooling.

### 1. Core backend services

The Rust services that process payments. The app server is the center of gravity; the vault and encryption service handle sensitive-data operations alongside it. [`hyperswitch-prism`](https://github.com/juspay/hyperswitch-prism) is a separate, lighter entry point: a unified connector library that can be used directly against payment processors without running the full switch. [`decision-engine`](https://github.com/juspay/decision-engine) is another standalone service: a routing control plane that selects the best gateway per transaction and can run independently of any orchestrator.
|  | [hyperswitch](https://github.com/juspay/hyperswitch) | [card-vault](https://github.com/juspay/hyperswitch-card-vault) | [encryption-service](https://github.com/juspay/hyperswitch-encryption-service) | [prism](https://github.com/juspay/hyperswitch-prism) | [decision-engine](https://github.com/juspay/decision-engine) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Language** | Rust | Rust | Rust | Rust | Rust |
| **Role** | App server. Routing, retries, vaulting, observability. | PCI-compliant card storage. | Encryption, decryption, KMS. | Unified connector library, 100+ processors. | Routing control plane. Rule-based and success-rate gateway selection. Standalone, works with any orchestrator. |
| **Depends on** | card-vault, encryption-service | encryption-service | None | None | None |

### 2. Dashboard

Merchant-facing UIs for configuring connectors, routing, and viewing transactions. Both require the `hyperswitch` backend to be running.

|  | [control-center](https://github.com/juspay/hyperswitch-control-center) | [control-center-embedded](https://github.com/juspay/hyperswitch-control-center-embedded) |
| :--- | :---: | :---: |
| **Language** | ReScript | TypeScript |
| **Role** | Full merchant dashboard. Connectors, routing rules, analytics, API keys. | Embeddable Hyperswitch components for partners and merchants surfacing Hyperswitch UI inside their own apps. |
| **Depends on** | hyperswitch backend | hyperswitch backend |

### 3. Web checkout SDKs

How a browser talks to Hyperswitch. [`hyperswitch-client-core`](https://github.com/juspay/hyperswitch-client-core) is the shared core, pulled in as a git submodule by every client SDK (web and mobile). [`hyperswitch-sdk-utils`](https://github.com/juspay/hyperswitch-sdk-utils) holds shared assets that merchants doing Headless Implementations consume directly.

|  | [hyperswitch-web](https://github.com/juspay/hyperswitch-web) | [client-core](https://github.com/juspay/hyperswitch-client-core) | [react-hyper-js](https://github.com/juspay/react-hyper-js) | [sdk-utils](https://github.com/juspay/hyperswitch-sdk-utils) |
| :--- | :---: | :---: | :---: | :---: |
| **Language** | ReScript | ReScript | ReScript | ReScript |
| **Distribution** | npm | git submodule | [npm](https://www.npmjs.com/package/@juspay-tech/react-hyper-js) | git submodule |
| **Role** | Primary web SDK. ReScript-built React library for unified checkout. | Shared SDK core consumed transitively by every client SDK. | Idiomatic React wrapper around the Hyper JS loader. | Shared utilities and assets used across client-core and hyperswitch-web. |
| **Depends on** | hyperswitch backend | None | hyperswitch-web | None |

### 4. Mobile SDKs

Native SDKs for embedding Hyperswitch checkout into mobile apps. All are built on top of [`hyperswitch-client-core`](https://github.com/juspay/hyperswitch-client-core), pulled in as a git submodule.

|  | [Android](https://github.com/juspay/hyperswitch-sdk-android) | [iOS](https://github.com/juspay/hyperswitch-sdk-ios) | [React Native](https://github.com/juspay/react-native-hyperswitch) | [Flutter](https://github.com/juspay/flutter_hyperswitch) |
| :--- | :---: | :---: | :---: | :---: |
| **Repository** | hyperswitch-sdk-android | hyperswitch-sdk-ios | react-native-hyperswitch | flutter_hyperswitch |
| **Language** | Kotlin | Swift | TypeScript | Dart |
| **Distribution** | Maven | CocoaPods (SPM in progress) | npm | pub.dev |
| **Status** | Officially supported | Officially supported | Officially supported | Officially supported |

> [!IMPORTANT]
> An older repo, `hyperswitch-sdk-react-native`, is being deprecated and has already been removed from npm. Use [`react-native-hyperswitch`](https://github.com/juspay/react-native-hyperswitch) instead.

### 5. Deployment & infrastructure

Tooling for running Hyperswitch, from local development through production.

|  | [hyperswitch-suite](https://github.com/juspay/hyperswitch-suite) | [hyperswitch-helm](https://github.com/juspay/hyperswitch-helm) |
| :--- | :---: | :---: |
| **Tooling** | Terraform (HCL) | Helm charts |
| **Role** | Umbrella full-suite deployment that wires the core, vault, control-center, and web together. Recommended starting point for the full stack. | Kubernetes deployments for GCP, Azure, or any K8s-compatible platform. |

## Contributing

We welcome contributors from around the world to help build Hyperswitch. Whether you're fixing bugs, improving documentation, or adding new features, your help is appreciated.

Please read our [contributing guidelines](https://github.com/juspay/hyperswitch/blob/main/docs/CONTRIBUTING.md) to get started.

Join the conversation on [Slack](https://inviter.co/hyperswitch-slack) or explore open issues on [GitHub](https://github.com/juspay/hyperswitch/issues).

  Feature requests & Bugs

For new product features, enhancements, roadmap discussions, or to share queries and ideas, visit our [GitHub Discussions](https://github.com/juspay/hyperswitch/discussions)

For reporting a bug, please read the issue guidelines and search for [existing and closed issues](https://github.com/juspay/hyperswitch/issues). If your problem or idea is not addressed yet, please [open a new issue](https://github.com/juspay/hyperswitch/issues/new/choose).

  Versioning

Check the [CHANGELOG.md](./CHANGELOG.md) file for details.

  Copyright and License

This product is licensed under the [Apache 2.0 License](LICENSE).
