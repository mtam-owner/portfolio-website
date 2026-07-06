export const projects = [
  {
    id: "customer-database",
    title: "Customer Database Consolidation",
    category: "professional",
    featured: true,
    confidential: true,

    shortDescription:
    "Designed and built the organisation's first unified customer data foundation by consolidating customer, sales and call activity records from multiple operational sources.",

    context:
    "The organisation had accumulated customer-related information across multiple operational systems over approximately 17 years of business activity. Customer details, sales transactions and call activity records existed in separate datasets, making it difficult to establish a consistent view of customer behaviour or perform reliable customer analysis across the business.",

    problem:
    "A key challenge was that travellers and customers were not always the same entity. In a travel agency environment, a booking can contain multiple travellers while the actual customer relationship may belong to a single individual or organisation. The business required a unified customer data model that could accurately identify customers, link related sales and activity records, and support consistent customer profiling and reporting going forward.",

    contribution: [
    "Designed the customer data model and relational structure from the ground up, as no unified customer dataset previously existed.",
    "Consolidated customer, sales and call activity data from multiple operational sources into integrated reporting tables.",
    "Developed customer identification and matching logic to distinguish customers from travellers and support customer lifecycle analysis.",
    "Established relationships between customer, sales and activity datasets through consistent ID logic and business rules.",
    "Worked closely with IT stakeholders to define future customer profiling processes, including customer ID creation and returning customer classification.",
    "Produced supporting data modelling documentation and implementation artefacts to support long-term maintenance and adoption."
    ],

    result: [
    "Delivered the organisation's first unified customer data foundation.",
    "Enabled customer, sales and activity records to be analysed through a consistent customer view.",
    "Improved reliability and consistency of customer reporting across the business.",
    "Established standardised customer profiling and customer lifecycle definitions for future reporting and analytics.",
    "Created a scalable foundation for customer analytics, segmentation and reporting initiatives."
    ],

    technologies: [
    "SQL",
    "Data Modelling",
    "ETL",
    "Data Integration",
    "Data Validation",
    "Customer Analytics",
    "Data Governance",
    "Stakeholder Management"
    ],

    screenshot: "images/2.png",

    links: [],
  },

  {
    id: "marketing-reporting-platform",
    title: "Marketing Data Platform & Performance Reporting",

    category: "professional",
    featured: true,
    confidential: true,

    shortDescription:
    "Designed and implemented a unified marketing data platform that consolidated performance, attribution and ROI reporting across multiple digital acquisition channels.",

    context:
    "The organisation operated across a growing number of digital marketing channels including Google Ads, Meta Ads, Microsoft Ads, HubSpot EDM campaigns, SMS marketing, influencer partnerships and external media placements. As new channels were frequently introduced for testing, stakeholders lacked a consistent way to compare performance and understand overall marketing effectiveness.",

    problem:
    "Marketing performance data was fragmented across multiple platforms, each using different reporting methodologies and attribution models. Sales and ROI metrics were not directly comparable, making it difficult to evaluate channel effectiveness, identify high-performing campaigns or understand how marketing activity contributed to customer acquisition.",

    contribution: [
    "Designed a unified marketing data model capable of consolidating performance data from multiple marketing platforms.",
    "Developed automated ETL processes and API integrations to regularly ingest marketing data into central reporting tables.",
    "Implemented UTM-based attribution logic to establish consistent measurement of users, sales and ROI across channels.",
    "Integrated marketing data with the customer database to support first-touch and last-touch attribution analysis.",
    "Built a web-based reporting environment that supported overall, channel-level and campaign-level performance analysis.",
    "Designed comparison views across channels and reporting periods, including monthly and rolling 10-day performance monitoring.",
    "Implemented AI-assisted summary generation to provide stakeholders with automated performance insights based on the current reporting view."
    ],

    result: [
    "Established a centralised marketing reporting platform across multiple acquisition channels.",
    "Created consistent attribution and ROI measurement across previously disconnected platforms.",
    "Reduced manual reporting effort through automated data collection and processing.",
    "Enabled marketing stakeholders to evaluate performance across channels, campaigns and reporting periods from a single environment.",
    "Improved visibility into customer acquisition journeys through first-touch and last-touch attribution analysis."
    ],

    technologies: [
    "SQL",
    "ETL",
    "API Integration",
    "Data Modelling",
    "Marketing Analytics",
    "Attribution Modelling",
    "Customer Analytics",
    "PHP",
    "AI Integration"
    ],

    screenshot: "images/marketing-reporting-platform.png",

    links: [
    {
    label: "View Full Screenshot",
    url: "images/marketing-reporting-platform.png",
    },
    ],
  },

  {
    id: "sales-performance-platform",

    title: "Sales Performance & Materialisation Reporting Platform",

    category: "professional",
    featured: false,
    confidential: true,

    shortDescription:
    "Designed and implemented a web-based sales reporting platform that transformed operational sales data into actionable commercial insights for management and sales teams.",

    context:
    "The organisation relied on an existing internal reporting environment that had gradually become difficult to maintain and no longer supported evolving reporting requirements. As sales, operational and management stakeholders required deeper visibility into commercial performance, a more flexible reporting solution was needed.",

    problem:
    "Existing reports were limited in scope and unable to answer many of the operational and commercial questions regularly raised by management and sales teams. In particular, the business needed stronger visibility into materialisation performance, sector trends and airline-level outcomes to identify areas requiring attention and support data-driven decision-making.",

    contribution: [
    "Gathered reporting requirements directly from management and sales stakeholders by identifying the key business questions the platform needed to answer.",
    "Designed reporting components and user workflows around stakeholder decision-making requirements rather than existing reporting structures.",
    "Developed a web-based reporting environment directly connected to the operational database to provide near real-time reporting capability.",
    "Built reporting views covering overall business performance, sales outcomes and operational metrics.",
    "Designed a materialisation analysis framework including matrix views and visual indicators to identify low-performing sectors and airline routes.",
    "Implemented automated report distribution and email delivery functionality.",
    "Integrated AI-generated summaries to provide stakeholders with automated explanations of current performance and key trends."
    ],

    result: [
    "Delivered a modern reporting environment capable of supporting a broader range of commercial and operational reporting requirements.",
    "Improved visibility into sales performance, materialisation outcomes and sector-level trends.",
    "Enabled faster identification of low-performing sectors and airlines requiring management attention.",
    "Reduced reliance on manual reporting processes through automated reporting and distribution capabilities.",
    "Provided management and sales teams with more accessible and actionable business insights."
    ],

    technologies: [
    "SQL",
    "Data Modelling",
    "Reporting Platform Design",
    "Requirements Gathering",
    "Stakeholder Management",
    "Commercial Analytics",
    "Operational Analytics",
    "PHP",
    "AI Integration"
    ],

    screenshot: "images/travel-analytics-reporting.png",

    links: [
    {
    label: "View Full Screenshot",
    url: "images/travel-analytics-reporting.png",
    },
    ],
  },

  {
    id: "looker-studio-marketing",

    title: "Looker Studio Digital Performance Dashboard",

    category: "professional",
    featured: false,
    confidential: true,

    shortDescription:
      "Designed operational marketing dashboards in Looker Studio to monitor campaign performance across multiple digital acquisition channels.",

    context:
      "As digital marketing activities expanded across Google Ads, Meta Ads, Google Analytics 4 and other acquisition channels, marketing teams required a faster and more accessible way to monitor campaign performance. Before the organisation invested in a fully integrated reporting platform, Looker Studio dashboards were developed to centralise key marketing metrics and support day-to-day decision making.",

    problem:
      "Campaign data existed across multiple platforms, requiring marketers to manually review individual advertising accounts and analytics tools to understand overall performance. This limited reporting efficiency and made cross-channel comparison difficult.",

    contribution: [
      "Designed interactive marketing dashboards using Looker Studio for campaign performance monitoring.",
      "Integrated data from Google Ads, Meta Ads and Google Analytics 4 into a unified reporting environment.",
      "Developed KPI dashboards supporting campaign, channel and time-based performance analysis.",
      "Worked closely with marketing stakeholders to refine reporting requirements and dashboard usability.",
      "Established reporting structures and KPI definitions that later informed the development of the enterprise Marketing Data Platform."
    ],

    result: [
      "Reduced manual effort required to monitor marketing performance.",
      "Provided a centralised view of campaign activity across major acquisition channels.",
      "Improved visibility into campaign effectiveness through interactive dashboards.",
      "Created the reporting foundation that later evolved into the organisation's integrated Marketing Data Platform."
    ],

    technologies: [
      "Looker Studio",
      "Google Analytics 4",
      "Google Ads",
      "Meta Ads",
      "Dashboard Design",
      "Marketing Analytics",
      "Data Visualisation",
      "KPI Reporting"
    ],

    screenshot: "images/looker-studio-marketing.png",

    links: [],
  },

  {
    id: "incentive-automation",

    title: "Workforce Incentive Calculation Automation",

    category: "professional",
    featured: false,
    confidential: true,

    shortDescription:
    "Designed an automated incentive calculation framework that reduced manual effort and simplified the management of evolving commission and performance reward programs.",

    context:
    "The organisation operated multiple incentive and performance reward programs across different teams. As program structures and thresholds changed frequently, calculating incentive payments became increasingly time-consuming and difficult to maintain through manual processes.",

    problem:
    "Management required a reliable and scalable method for calculating incentive outcomes while retaining flexibility to adapt to changing business rules. Manual calculations increased administrative effort and created a risk of inconsistency when incentive structures were updated.",

    contribution: [
    "Analysed existing incentive programs and identified common calculation patterns.",
    "Designed reporting and calculation frameworks capable of supporting multiple incentive structures.",
    "Built automated dashboards that calculated incentive outcomes using configurable business rules.",
    "Developed flexible threshold management logic allowing incentive targets to be updated without redesigning reporting logic.",
    "Created reporting views that provided visibility into both performance metrics and incentive outcomes."
    ],

    result: [
    "Reduced manual effort required for recurring incentive calculations.",
    "Improved consistency and transparency of incentive reporting.",
    "Enabled faster adaptation to changing business rules and reward structures.",
    "Provided management with a scalable framework for monitoring performance and incentive outcomes."
    ],

    technologies: [
    "SQL",
    "Business Rule Design",
    "Reporting Automation",
    "Performance Analytics",
    "DashboardFox",
    "Data Validation",
    "Operational Reporting"
    ],

    screenshot: "images/1.png",

    links: [],
    },

    {
      id: "convolens",

      title: "ConvoLens - Conversation Intelligence Platform",

      category: "personal",
      featured: true,
      confidential: false,

      shortDescription:
        "Designed and developed an end-to-end conversation intelligence platform that transforms unstructured customer support conversations into actionable business insights through NLP, interactive analytics and an AI-ready architecture.",

      context:
        "Customer support teams generate thousands of conversations every day, yet valuable operational insights often remain buried within unstructured text. ConvoLens was developed to demonstrate how conversational data can be transformed into business intelligence through a complete analytics pipeline, combining data engineering, natural language processing, dashboard development and AI-assisted analysis within a single application.",

      problem:
        "Organisations frequently rely on manual transcript reviews to identify customer issues, monitor service quality and understand operational trends. This process is time-consuming, difficult to scale and provides limited visibility into emerging issues, escalation risks and recurring customer concerns. The project addresses this challenge by converting raw conversations into structured analytical datasets and interactive decision-support dashboards.",

      contribution: [
        "Designed a modular end-to-end data pipeline that reconstructs conversations, engineers analytical features and produces optimised datasets for interactive reporting.",
        "Built a conversation processing workflow that transforms raw customer support messages into structured conversation-level datasets using Python and Pandas.",
        "Developed rule-based NLP feature engineering to detect customer intent, operational risk signals, complaint keywords, urgency indicators and escalation factors.",
        "Created a multi-page Streamlit application consisting of four dedicated analytical workspaces for executive reporting, conversation investigation, business intelligence and AI-assisted analysis.",
        "Designed interactive Plotly dashboards using executive KPIs, trend analysis, heatmaps, treemaps, conversation timelines and comparative visualisations to support operational decision making.",
        "Implemented a modular AI analysis engine capable of generating conversation summaries, sentiment estimation, root-cause analysis, recommended actions and confidence scoring through a provider-independent architecture.",
        "Designed the AI layer as a pluggable interface so rule-based analysis can be replaced with enterprise LLM providers such as Azure OpenAI, OpenAI, Gemini or Claude without changing the application interface.",
        "Built a deployment-ready project structure with reproducible preprocessing scripts, demo datasets, GitHub version control and modular software architecture."
      ],

      result: [
        "Delivered a complete analytics platform demonstrating the transformation of unstructured customer conversations into structured operational intelligence.",
        "Enabled interactive exploration of customer support performance through executive dashboards, conversation-level investigation and organisation-wide trend analysis.",
        "Demonstrated practical application of data engineering, NLP, dashboard development and AI architecture within a single production-style project.",
        "Established a scalable foundation for future enhancements including enterprise LLM integration, semantic search, vector embeddings and real-time conversation analytics."
      ],

      technologies: [
        "Python",
        "Pandas",
        "Streamlit",
        "Plotly",
        "NLP",
        "Parquet",
        "AI Integration",
        "GitHub"
      ],

      media: [
        {
          type: "video",
          title: "Product Demo",
          src: "media/convolens-demo.mp4",
        },
        {
          type: "image",
          title: "Mainpage",
          src: "images/convolens-1.png",
        },
        {
          type: "image",
          title: "Executive Dashboard",
          src: "images/convolens-2.png",
        },
        {
          type: "image",
          title: "Conversation Explorer",
          src: "images/convolens-3.png",
        },
        {
          type: "image",
          title: "Conversation Intelligence",
          src: "images/convolens-4.png",
        },
        {
          type: "image",
          title: "AI Workspace",
          src: "images/convolens-5.png",
        },
      ],

      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/mtam-owner/convolens"
        },
      ],
    }
  ,

  {
    id: "customer-journey-analytics",

    title: "Customer Journey Analytics",

    category: "personal",
    featured: true,
    confidential: false,

    shortDescription:
      "A Power BI analytics project exploring customer acquisition, retention and repeat purchase behaviour using the Olist e-commerce dataset.",

    context:
      "This project was created to demonstrate advanced Power BI, DAX and customer analytics capabilities using a real-world e-commerce dataset. The focus was understanding how customers progress from their first purchase to becoming repeat buyers and identifying the behavioural patterns associated with customer retention.",

    problem:
      "Many organisations invest heavily in acquiring customers but have limited visibility into what drives repeat purchases and long-term customer value. The project explores how customer behaviour changes over time and which segments contribute most to sustainable growth.",

    contribution: [
      "Designed a star schema data model optimised for analytical reporting in Power BI.",
      "Developed DAX measures covering customer acquisition, retention and repeat purchase behaviour.",
      "Built cohort analysis and customer lifecycle reporting views.",
      "Created customer segmentation frameworks to compare purchasing patterns across customer groups.",
      "Used DAX Studio to analyse and optimise model performance.",
      "Designed an interactive reporting experience focused on customer journey exploration and business storytelling."
    ],

    result: [
      "Produced a comprehensive customer analytics solution covering acquisition, retention and customer lifetime behaviour.",
      "Demonstrated advanced Power BI modelling and DAX development techniques.",
      "Provided clear visibility into customer journey patterns and repeat purchase behaviour.",
      "Showcased analytical storytelling through interactive dashboards and customer-focused insights."
    ],

    technologies: [
      "Power BI",
      "DAX",
      "DAX Studio",
      "Data Modelling",
      "Customer Analytics",
      "Cohort Analysis",
      "Customer Segmentation",
      "Business Intelligence"
    ],

    screenshot: "images/power-bi-personal-pj.png",

    links: [
      {
        label: "Download PBIX",
        url: "",
      },
    ],
  },

  {
    id: "ice-data-warehouse",

    title: "Enterprise Data Warehouse & Governance Framework",

    category: "academic",
    featured: true,
    confidential: false,

    shortDescription:
    "Designed an enterprise data warehouse architecture with ETL processes, dimensional modelling and governance recommendations.",

    context:
    "ICE Entertainment required a centralised analytics environment capable of supporting reporting, customer insights and operational decision-making across multiple business systems.",

    problem:
    "Operational data was distributed across multiple platforms, limiting consistency, governance and enterprise-wide reporting capability.",

    contribution: [
    "Designed dimensional models using fact and conformed dimension tables.",
    "Developed ETL processes to consolidate and transform source data.",
    "Created enterprise data warehouse architecture and governance recommendations.",
    "Addressed data quality, privacy, metadata and access management considerations."
    ],

    result: [
    "Delivered a complete enterprise data warehouse design.",
    "Demonstrated dimensional modelling and ETL design capability.",
    "Established governance recommendations supporting long-term analytics maturity."
    ],

    technologies: [
    "Data Warehousing",
    "Dimensional Modelling",
    "ETL Design",
    "Data Governance",
    "MySQL",
    "Pentaho"
    ],

    screenshot: "images/ice-data-warehouse.png",

    links: [
    {
    label: "View Report",
    url: "documents/ice-data-warehouse-report.pdf",
    },
    ],
    },

    {
    id: "predictive-analytics",

    title: "Predictive Analytics & Machine Learning Models",

    category: "academic",
    featured: true,
    confidential: false,

    shortDescription:
    "Applied regression, classification, clustering and forecasting techniques to solve business analytics problems.",

    context:
    "A series of predictive analytics projects focused on extracting business insights and supporting decision-making through statistical and machine learning techniques.",

    problem:
    "Different business scenarios required prediction, classification, segmentation and forecasting approaches to improve analytical decision-making.",

    contribution: [
    "Prepared and explored business datasets.",
    "Developed regression, classification, clustering and forecasting models.",
    "Evaluated model performance using appropriate analytical metrics.",
    "Translated technical outputs into business-focused recommendations."
    ],

    result: [
    "Demonstrated practical application of predictive analytics methodologies.",
    "Delivered data-driven insights and business recommendations.",
    "Developed experience across multiple machine learning techniques."
    ],

    technologies: [
    "Predictive Modelling",
    "Regression",
    "Classification",
    "Clustering",
    "Forecasting",
    "RapidMiner",
    "Model Evaluation"
    ],

    screenshot: "images/predictive-analytics.png",

    links: [
    {
    label: "View Report",
    url: "documents/predictive-analytics-report.pdf",
    },
    ],
    },

    {
    id: "monte-carlo-simulation",

    title: "Monte Carlo Simulation & Risk Analysis",

    category: "academic",
    featured: false,
    confidential: false,

    shortDescription:
    "Built a simulation model to evaluate operational risk, profitability and uncertainty across multiple business scenarios.",

    context:
    "The project examined how uncertainty in demand, cancellations and operating costs could impact business performance.",

    problem:
    "Traditional deterministic forecasting methods did not adequately capture operational risk or the range of potential business outcomes.",

    contribution: [
    "Defined fixed and stochastic input variables.",
    "Built Monte Carlo simulation models using probability distributions.",
    "Evaluated risk metrics including profitability and probability of loss.",
    "Analysed business outcomes under multiple operating scenarios."
    ],

    result: [
    "Provided probabilistic forecasts rather than single-point estimates.",
    "Improved understanding of operational risk exposure.",
    "Demonstrated simulation modelling and decision-support capability."
    ],

    technologies: [
    "Monte Carlo Simulation",
    "Risk Analysis",
    "Scenario Modelling",
    "Excel Modelling",
    "Decision Support"
    ],

    screenshot: "images/monte-carlo-simulation.png",

    links: [
    {
    label: "Download Simulation Model",
    url: "documents/monte-carlo-simulation-report.xlsx",
    },
    ],
    },

    {
    id: "tableau-dashboard",

    title: "Interactive Analytics Dashboard & Data Storytelling",

    category: "academic",
    featured: false,
    confidential: false,

    shortDescription:
    "Designed an interactive analytics dashboard and storytelling experience to transform complex review data into actionable business insights.",

    context:
    "The project focused on analysing hotel review data and presenting findings through an interactive dashboard experience that balanced exploration, usability and insight communication.",

    problem:
    "Large volumes of customer review data contained valuable information, but the underlying patterns were difficult to identify without effective visualisation and storytelling techniques.",

    contribution: [
    "Designed an interactive dashboard structure focused on user exploration and insight discovery.",
    "Created KPI views, comparative analysis visualisations and geographic reporting components.",
    "Applied dashboard design and visual storytelling principles to improve usability and interpretation.",
    "Developed interactive filters and navigation elements to support multiple analytical perspectives."
    ],

    result: [
    "Transformed complex review data into an accessible and engaging analytical experience.",
    "Improved communication of customer sentiment and hotel performance patterns.",
    "Demonstrated dashboard design, data storytelling and user-focused analytics capability."
    ],

    technologies: [
    "Tableau",
    "Dashboard Design",
    "Data Visualisation",
    "Data Storytelling",
    "User Experience Design",
    "Interactive Analytics"
    ],

    screenshot: "images/tableau-dashboard.png",

    links: [
    {
    label: "View Report",
    url: "documents/tableau-dashboard-report.pdf",
    },
    ],
  },
]