export const projects = [
  {
    id: "customer-database",
    title: "Customer Database Consolidation",
    category: "professional",
    featured: true,
    confidential: true,
    shortDescription:
      "Built a unified customer database from 17 years of fragmented historical records.",

    context:
      "A professional data consolidation project focused on bringing fragmented historical customer records into a more reliable analytics-ready environment.",

    problem:
      "Customer data was spread across multiple sources, making reporting inconsistent and limiting the organisation's ability to analyse long-term customer behaviour.",

    contribution: [
      "Reviewed existing customer data sources and reporting needs.",
      "Cleaned, matched and standardised customer records.",
      "Designed a more structured customer data model for reporting use.",
      "Supported dashboard and reporting development using the consolidated data.",
    ],

    result: [
      "Improved consistency of customer reporting.",
      "Reduced reliance on fragmented manual files.",
      "Created a stronger foundation for customer analytics and business reporting.",
    ],

    technologies: ["SQL", "Power BI", "Excel", "Data Modelling"],
    screenshot: "",
    links: [],
  },

  {
    id: "marketing-reporting-platform",
    title: "Marketing Reporting Platform",
    category: "professional",
    featured: true,
    confidential: true,
    shortDescription:
      "Developed a consolidated reporting platform for cross-channel marketing performance.",

    context:
      "A professional reporting project designed to improve visibility across digital marketing channels and campaign performance.",

    problem:
      "Marketing performance data existed across multiple platforms, making it difficult to compare results, monitor efficiency and understand channel-level performance.",

    contribution: [
      "Consolidated available marketing data from multiple reporting sources.",
      "Defined practical performance metrics for campaign monitoring.",
      "Built reporting views to support marketing and management decision-making.",
      "Improved reporting consistency across campaign and channel analysis.",
    ],

    result: [
      "Improved visibility across marketing channels.",
      "Reduced manual reporting effort.",
      "Supported more informed marketing performance discussions.",
    ],

    technologies: ["SQL", "Power BI", "Google Ads", "Meta Ads"],
    screenshot: "images/marketing-reporting-platform.png",
    links: [
      {
        label: "View Full Screenshot",
        url: "images/marketing-reporting-platform.png",
      },
    ],
  },

  {
    id: "travel-analytics-reporting",
    title: "Travel Analytics & Reporting",
    category: "professional",
    featured: false,
    confidential: true,
    shortDescription:
      "Built commercial and operational reporting solutions across sales, marketing, operations and management.",

    context:
      "A collection of reporting and analytics work delivered across business functions in the travel industry.",

    problem:
      "Different teams needed reliable reporting for sales, operations, marketing and management, but data requirements were often changing and business logic was not always clearly documented.",

    contribution: [
      "Worked with stakeholders to clarify reporting requirements.",
      "Built dashboards and recurring reports for different business functions.",
      "Validated data outputs to improve trust in reporting.",
      "Adapted reporting logic as business needs changed.",
    ],

    result: [
      "Improved access to business performance information.",
      "Supported cross-functional reporting needs.",
      "Helped teams make faster and more informed decisions.",
    ],

    technologies: ["SQL", "Power BI", "Excel", "Python"],
    screenshot: "images/travel-analytics-reporting.png",
    links: [
      {
        label: "View Full Screenshot",
        url: "images/travel-analytics-reporting.png",
      },
    ],
  },

  {
    id: "workforce-hr-reporting",
    title: "Workforce & HR Reporting",
    category: "professional",
    featured: false,
    confidential: true,
    shortDescription:
      "Created internal reporting solutions supporting workforce planning and management visibility.",

    context:
      "Internal reporting work supporting workforce visibility and operational management.",

    problem:
      "Workforce-related data needed to be organised and reported in a way that was useful for management oversight and planning.",

    contribution: [
      "Prepared and validated workforce-related data.",
      "Built recurring reporting outputs for internal users.",
      "Supported visibility across staff-related metrics and operational planning.",
    ],

    result: [
      "Improved management visibility.",
      "Supported recurring internal reporting.",
      "Reduced manual effort in preparing workforce information.",
    ],

    technologies: ["Excel", "Power BI", "Data Validation"],
    screenshot: "",
    links: [],
  },

  {
    id: "calllens",
    title: "CallLens",
    category: "personal",
    featured: true,
    confidential: false,
    shortDescription:
      "AI-powered call analytics project using NLP to extract sentiment, keywords and business insights.",

    context:
      "A personal analytics project exploring how customer conversations can be analysed at scale using NLP techniques.",

    problem:
      "Customer calls contain valuable business information, but manually reviewing conversations is time-consuming and difficult to scale.",

    contribution: [
      "Designed a basic NLP pipeline for transcript analysis.",
      "Extracted sentiment, keywords and recurring conversation themes.",
      "Prepared outputs for visualisation and business interpretation.",
    ],

    result: [
      "Demonstrated how unstructured text can be converted into analytical insight.",
      "Created a foundation for future call analytics and customer experience reporting.",
    ],

    technologies: ["Python", "NLP", "Power BI"],
    screenshot: "",
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/mtam-owner",
      },
    ],
  },

  {
    id: "ice-data-warehouse",
    title: "ICE Entertainment Data Warehouse",
    category: "academic",
    featured: true,
    confidential: false,
    shortDescription:
      "Designed a data warehouse with ETL processes, dimensional modelling and governance recommendations.",

    context:
      "An academic data warehousing project focused on designing an enterprise analytics environment for ICE Entertainment.",

    problem:
      "The organisation needed a more structured data environment to support reporting, governance and decision-making across multiple operational data sources.",

    contribution: [
      "Designed dimensional models using facts and conformed dimensions.",
      "Built ETL processes to move and transform source data.",
      "Considered governance, privacy, quality and access requirements.",
    ],

    result: [
      "Created a structured data warehouse design.",
      "Demonstrated ETL and dimensional modelling capability.",
      "Developed governance recommendations aligned with business needs.",
    ],

    technologies: ["MySQL", "Pentaho", "Data Warehousing"],
    screenshot: "images/ice-data-warehouse.png",
    links: [
      {
        label: "View Report",
        url: "documents/ice-data-warehouse-report.pdf",
      },
    ],
  },

  {
    id: "monte-carlo-simulation",
    title: "Monte Carlo Simulation",
    category: "academic",
    featured: false,
    confidential: false,
    shortDescription:
      "Built a simulation model to evaluate operational risk and profitability under uncertainty.",

    context:
      "An academic simulation project modelling uncertainty in operational and financial outcomes.",

    problem:
      "The business needed to understand how uncertain inputs could affect profitability and risk.",

    contribution: [
      "Defined fixed and stochastic variables.",
      "Built simulation logic to model possible outcomes.",
      "Analysed risk metrics and scenario results.",
    ],

    result: [
      "Estimated probability of loss and profitability ranges.",
      "Supported decision-making under uncertainty.",
      "Demonstrated applied simulation and risk analysis skills.",
    ],

    technologies: ["Excel", "Simulation", "Risk Analysis"],
    screenshot: "images/monte-carlo-simulation.png",
    links: [
      {
        label: "Download Simulation Model",
        url: "documents/monte-carlo-simulation-model.xlsx",
      },
    ],
  },

  {
    id: "predictive-analytics",
    title: "Predictive Analytics Models",
    category: "academic",
    featured: false,
    confidential: false,
    shortDescription:
      "Applied regression, classification, clustering and forecasting models to business datasets.",

    context:
      "An academic predictive analytics project applying multiple modelling techniques to business problems.",

    problem:
      "Different business questions required different analytical techniques, including prediction, classification, segmentation and forecasting.",

    contribution: [
      "Prepared and explored datasets.",
      "Built regression, classification, clustering and forecasting models.",
      "Evaluated model performance and interpreted outputs for business use.",
    ],

    result: [
      "Demonstrated understanding of multiple analytics methods.",
      "Connected model outputs to business interpretation.",
      "Practised technical evaluation and business reporting.",
    ],

    technologies: ["RapidMiner", "Regression", "Classification"],
    screenshot: "images/predictive-analytics.png",
    links: [
      {
        label: "View Report",
        url: "documents/predictive-analytics-report.pdf",
      },
    ],
  },

  {
    id: "tableau-dashboard",
    title: "Tableau Dashboard Project",
    category: "academic",
    featured: false,
    confidential: false,
    shortDescription:
      "Built an interactive dashboard and storytelling solution for hotel review analysis.",

    context:
      "An academic data visualisation project focused on dashboard design, interactivity and storytelling.",

    problem:
      "The project required translating hotel review data into an interactive dashboard that could support exploration and insight communication.",

    contribution: [
      "Designed dashboard layout and user flow.",
      "Created interactive charts and filters.",
      "Used visual storytelling principles to guide interpretation.",
    ],

    result: [
      "Created an interactive Tableau dashboard.",
      "Improved ability to communicate findings visually.",
      "Practised audience-focused dashboard design.",
    ],

    technologies: ["Tableau", "Data Visualisation", "Storytelling"],
    screenshot: "images/tableau-dashboard.png",
    links: [
      {
        label: "View Report",
        url: "documents/tableau-dashboard-report.pdf",
      },
    ],
  },
]