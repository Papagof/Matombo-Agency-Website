import { listLeads } from "@/backend/services/leads";
import { formatDate } from "@/frontend/utils";
import { LeadStatusSelect } from "@/frontend/components/admin/lead-status-select";

export const dynamic = "force-dynamic";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  business: string;
  industry: string;
  budget: string;
  message: string;
  status: string;
  created_at: string;
};

export default async function AdminLeadsPage() {
  const { data: leads, error } = await listLeads();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl font-semibold">Leads</h1>
        <span className="text-sm text-muted-foreground">
          {leads?.length ?? 0} total
        </span>
      </div>

      {error && (
        <p className="mt-6 text-sm text-destructive">
          Failed to load leads: {error.message}
        </p>
      )}

      {!error && (leads as Lead[] | null)?.length === 0 && (
        <p className="mt-6 text-sm text-muted-foreground">
          No submissions yet. New contact form entries will show up here.
        </p>
      )}

      {!error && leads && leads.length > 0 && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Received</th>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Business</th>
                  <th className="px-4 py-3 font-medium">Industry</th>
                  <th className="px-4 py-3 font-medium">Budget</th>
                  <th className="px-4 py-3 font-medium">Message</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {(leads as Lead[]).map((lead) => (
                  <tr key={lead.id} className="border-b border-border last:border-0">
                    <td className="whitespace-nowrap px-4 py-4 align-top text-muted-foreground">
                      {formatDate(lead.created_at)}
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="font-medium">{lead.name}</div>
                      <a
                        href={`mailto:${lead.email}`}
                        className="block text-muted-foreground hover:text-foreground"
                      >
                        {lead.email}
                      </a>
                      {lead.phone && (
                        <a
                          href={`tel:${lead.phone.replace(/[^+\d]/g, "")}`}
                          className="block text-muted-foreground hover:text-foreground"
                        >
                          {lead.phone}
                        </a>
                      )}
                    </td>
                    <td className="px-4 py-4 align-top">{lead.business}</td>
                    <td className="px-4 py-4 align-top">{lead.industry}</td>
                    <td className="px-4 py-4 align-top">{lead.budget}</td>
                    <td className="max-w-xs px-4 py-4 align-top text-muted-foreground">
                      {lead.message}
                    </td>
                    <td className="px-4 py-4 align-top">
                      <LeadStatusSelect id={lead.id} status={lead.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
