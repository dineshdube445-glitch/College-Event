# Apex University | College Event Management & Document Automation System

A production-grade, cloud-architected **College Event Management & Document Governance Platform** built with **Next.js (App Router), TypeScript, Tailwind CSS, Prisma ORM, and SQLite / PostgreSQL**.

The platform replaces fragmented communication (WhatsApp groups, paper notices, unverified announcements) with a centralized, role-based governance pipeline for event proposals, faculty approvals, student admissions, and official document automation.

---

## 🎨 Visual Identity & Color Palette

Designed according to the fresh, modern university productivity palette:

| Element | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary** | `#16A085` | Fresh emerald green brand identity |
| **Secondary** | `#DDF7E8` | Soft mint backgrounds and active states |
| **Accent** | `#55B8E8` | Sky blue interactive indicators |
| **Highlight** | `#C7F36B` | Soft lime badge highlights |
| **Main Background** | `#F8FAFC` | Off-white canvas for high readability |
| **Card Background** | `#FFFFFF` | Pure white rounded cards with subtle borders |
| **Main Text** | `#172B4D` | Deep navy headings and high-contrast text |
| **Muted Text** | `#64748B` | Slate secondary labels and metadata |
| **Borders** | `#E2E8F0` | Light cool grey dividers and card outlines |

---

## 👥 User Roles & Seed Test Credentials

The system features strict server-enforced **Role-Based Access Control (RBAC)**. A **Fast Role Switcher** is embedded in the top banner of the application, enabling instant testing across all roles with 1 click:

| Role | Name | Email | Password | Responsibilities |
| :--- | :--- | :--- | :--- | :--- |
| **Administrator** | Dr. Sarah Sterling | `admin@apex.edu` | `Admin@123` | Platform oversight, direct official event publishing, user accounts, club & mentor assignments, template repository, audit logs |
| **Faculty Mentor** | Dr. Alistair Vance | `mentor.tech@apex.edu` | `Mentor@123` | Review proposals from assigned tech clubs (GDSC, Robotics), inspect attached documents, approve / request revisions / reject with remarks |
| **Faculty Mentor** | Prof. Elena Rostova | `mentor.arts@apex.edu` | `Mentor@123` | Review proposals from assigned cultural societies (Cultural Arts Society, Literary Society) |
| **Club President** | Alex Rivera | `president.gdsc@apex.edu` | `President@123` | Leads Google Developer Student Club (GDSC), drafts proposals, auto-generates official letters from templates, attaches documents, submits for review |
| **Club President** | Jordan Smith | `president.robotics@apex.edu` | `President@123` | Leads Robotics & AI Society |
| **Student** | Samantha Chen | `student1@apex.edu` | `Student@123` | Event discovery feed, category filters, verified event registrations, ticket pass manager |

---

## 🔄 Core Workflows

### 1. Official College Events Workflow
```
Administrator creates event in /admin/events/new
               │
               ▼
Direct publication by Directorate Authority
               │
               ▼
Instantly live on Student Discovery Portal (/)
```

### 2. Club Events Approval & Publication Workflow
```
Club President drafts event proposal (/president/proposals/new)
               │
               ▼
Auto-generates official documents from templates (/documents)
(Venue Booking, Budget Sanctions, Permission Letter)
               │
               ▼
Submits proposal docket to Faculty Mentor
               │
               ▼
Faculty Mentor reviews proposal + documents side-by-side (/mentor/proposals/[id])
        ┌──────┴──────┐
        │             │
   (Changes)      (Approved)
        │             │
President revises     Mentor / Admin publishes event live
& resubmits           to Student Discovery Portal
```

---

## 📄 Document Automation & Management Module

### 1. Automatic Document Generation
Pre-configured templates with placeholder replacement (`{{event_title}}`, `{{venue}}`, `{{budget_estimate}}`, etc.):
1. **College Event Application**: Formal docket submitted to Directorate of Student Affairs.
2. **Event Permission Letter**: Administrative clearance request to Dean.
3. **Venue or Auditorium Booking Request**: Infrastructure booking with seating & HVAC specifications.
4. **Equipment and Resource Request**: AV, projector, sound systems, and Wi-Fi requests.
5. **Event Budget Approval Request**: Line-item budget breakdown and funding sanction request.
6. **Guest Invitation Letter**: Formal institutional invitation for industry dignitaries.
7. **General Event Approval Form**: Tri-party clearance certificate with official endorsement blocks.

### 2. Document Editor with Split-Screen Layout
- **Left pane**: Rich-text editing controls, HTML/Markdown insertion buttons (`H2`, `H3`, `Bold`, `Italic`, `List`, `Table`, `Line`).
- **Right pane**: High-resolution paper layout styled with official Apex University letterhead, crest, and verified endorsement footers.
- Unsaved changes indicator and revision history manager.

### 3. Genuine Word (`.docx`) & PDF Export
- Generates real binary Microsoft Word (`.docx`) documents using the OpenXML `docx` standard with genuine headers, footers, margins, tables, and headings.
- Clean printable PDF rendering optimized for A4 paper layout (`Ctrl+P` or PDF button).

### 4. Upload Existing Documents
- Upload pre-prepared `.docx` and `.pdf` files up to 15MB with client and server validation.
- Secure private storage with proposal docket linkage.

---

## 🚀 Running the Application Locally

### Prerequisites
- Node.js v18 or higher (v24 tested)
- npm v9+

### Setup Steps
```bash
# 1. Clone or open the project folder
cd "C:\Users\Shrinkhla Singh\.gemini\antigravity\scratch\college-event-system"

# 2. Install dependencies
npm install

# 3. Synchronize database and generate Prisma Client
npx prisma db push

# 4. Seed initial database with users, clubs, templates, events & proposals
npm run prisma:seed

# 5. Start the development server
npm run dev
# Or build and run production server:
npm run build
npm run start
```

Open `http://localhost:3000` in your web browser.

---

## 🛡️ Security & Architecture Principles

- **Server-Side Authorization**: Every API route (`/api/proposals`, `/api/documents`, `/api/admin/*`, `/api/events`) verifies user session and club ownership.
- **Strict Student Confidentiality Boundary**: Students cannot access internal permission letters, unpublished proposals, or mentor remarks.
- **Simulated Email & OTP Log**: Real-time simulated outbox accessible from the header bar to inspect OTP verification codes and mentor notifications during testing.
