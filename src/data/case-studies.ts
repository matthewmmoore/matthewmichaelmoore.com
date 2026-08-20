export type CaseStudy = { slug: string; title: string; summary: string; challenge: string; work: string; scope: string[] };

export const caseStudies: CaseStudy[] = [{
  slug: 'operations-management-platform',
  title: 'Operations Management Platform',
  summary: 'A centralized system designed to bring essential operational information into one practical workspace.',
  challenge: 'Operational details were spread across separate processes and records, making it harder to maintain a clear view of daily activity.',
  work: 'I designed and developed a centralized system for managing orders, invoices, payment status, shipping information, pricing, reporting, and business analytics. The work focused on making information easier to organize and use in the context of everyday operations.',
  scope: ['Order management', 'Invoices and payment status', 'Shipping information', 'Pricing management', 'Reporting and business analytics'],
}];
