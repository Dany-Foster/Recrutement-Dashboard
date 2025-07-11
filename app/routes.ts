import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/admin/adminLayout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("candidat", "routes/admin/CandidaturePages.tsx"),
    route("post", "routes/admin/PostPages.tsx"),
    route("Analyse", "routes/admin/AnalyseLayout.tsx"),
    route("Mail", "routes/admin/MailLayout.tsx"),
    route("Offre", "routes/admin/OffreLayout.tsx"),
  ]),
] satisfies RouteConfig;
