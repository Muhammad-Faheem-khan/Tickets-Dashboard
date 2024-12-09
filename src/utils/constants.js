export const sidebarLinksData = [
  {
    title: "Dashboard",
    redirectTo: "/dashboard",
    svgL: "assets/svgs/dashboard.svg",
    svgD: "assets/svgs/dashboard(2).svg",
  },
  {
    title: "Menu",
    redirectTo: "/menu",
    svgL: "assets/svgs/customer.svg",
    svgD: "assets/svgs/customer(2).svg",
  },
];

export const dummyTicketsData = [
  {
    id: 1,
    ticketName: "Server Outage",
    ticketDuration: "3 hours",
    description: "Resolve the server downtime issue affecting user logins.",
    assignedBy: "John Doe",
    assignedTo: "Alice Smith",
  },
  {
    id: 2,
    ticketName: "UI Bug Fix",
    ticketDuration: "1 day",
    description: "Fix alignment issues on the homepage navigation bar.",
    assignedBy: "Jane Doe",
    assignedTo: "Bob Johnson",
  },
  {
    id: 3,
    ticketName: "Database Backup",
    ticketDuration: "4 hours",
    description: "Perform a full database backup for disaster recovery.",
    assignedBy: "Michael Brown",
    assignedTo: "Chris Lee",
  },
  {
    id: 4,
    ticketName: "Email Configuration",
    ticketDuration: "2 hours",
    description: "Set up SMTP for outgoing email notifications.",
    assignedBy: "Sarah Wilson",
    assignedTo: "David Miller",
  },
  {
    id: 5,
    ticketName: "Password Reset",
    ticketDuration: "30 minutes",
    description:
      "Assist user with password reset and troubleshoot login issues.",
    assignedBy: "Emma Davis",
    assignedTo: "Sophia Garcia",
  },
  {
    id: 6,
    ticketName: "Performance Optimization",
    ticketDuration: "3 days",
    description: "Improve loading times for dashboard analytics page.",
    assignedBy: "Liam Martinez",
    assignedTo: "Ethan Hernandez",
  },
  {
    id: 7,
    ticketName: "API Integration",
    ticketDuration: "5 days",
    description: "Integrate third-party payment gateway API.",
    assignedBy: "Olivia Martinez",
    assignedTo: "Mason White",
  },
  {
    id: 8,
    ticketName: "Security Patch",
    ticketDuration: "6 hours",
    description: "Apply security updates to all production servers.",
    assignedBy: "Isabella Lopez",
    assignedTo: "Logan Clark",
  },
  {
    id: 9,
    ticketName: "Feature Request Review",
    ticketDuration: "1 day",
    description: "Analyze and prioritize the new feature requests from users.",
    assignedBy: "Ava Hill",
    assignedTo: "Elijah Lewis",
  },
  {
    id: 10,
    ticketName: "Bug Report Analysis",
    ticketDuration: "2 days",
    description: "Investigate recurring bugs reported by QA team.",
    assignedBy: "Lucas Green",
    assignedTo: "Charlotte Adams",
  },
  {
    id: 11,
    ticketName: "Onboarding New User",
    ticketDuration: "1 hour",
    description: "Set up accounts and permissions for new employee onboarding.",
    assignedBy: "Amelia Scott",
    assignedTo: "Harper Moore",
  },
  {
    id: 12,
    ticketName: "Website Redesign",
    ticketDuration: "2 weeks",
    description: "Redesign the company website with a modern look and feel.",
    assignedBy: "Evelyn Jones",
    assignedTo: "Jack Brown",
  },
  {
    id: 13,
    ticketName: "Mobile App Crash",
    ticketDuration: "8 hours",
    description: "Fix the issue causing crashes on the latest app version.",
    assignedBy: "Henry Perez",
    assignedTo: "Oliver Taylor",
  },
  {
    id: 14,
    ticketName: "Data Migration",
    ticketDuration: "1 week",
    description: "Migrate legacy data to the new system.",
    assignedBy: "Abigail Harris",
    assignedTo: "Benjamin Campbell",
  },
  {
    id: 15,
    ticketName: "Customer Feedback Analysis",
    ticketDuration: "3 days",
    description: "Compile and analyze feedback from the last survey.",
    assignedBy: "Emily Turner",
    assignedTo: "Sebastian Cooper",
  },
];

export const TableColumns = [
  { field: "ticketName", headerName: "Ticket Name" },
  { field: "ticketDuration", headerName: "Duration" },
  { field: "description", headerName: "Description", minWidth: 350 },
  {
    field: "assignedBy",
    headerName: "Assigned By",
    cellRenderer: (params) => (
      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {params.value || "Unassigned"}
      </span>
    ),
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    cellRenderer: (params) => (
      <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
        {params.value || "Unassigned"}
      </span>
    ),
  },
];

export const serviceOptions = [
  { label: "John", value: "John", id: 1 },
  { label: "Joseph", value: "Joseph", id: 2 },
  { label: "Michael", value: "Michael", id: 3 },
  { label: "Peter", value: "Peter", id: 4 },
  { label: "Jassi", value: "Jassi", id: 5 },
];
