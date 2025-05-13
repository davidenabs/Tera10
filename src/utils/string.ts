// Format date range for display
export const formatDateRange = (startDate: Date, endDate: Date) => {
  const formatDate = (date: Date) => {
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  return `${formatDate(startDate)} – ${formatDate(endDate)}`;
};

export function maskEmail(email: string): string {
  const [name, domain] = email.split("@");
  if (!name || !domain) return email;

  const visible = name.slice(0, 6);
  const masked = "*".repeat(Math.max(name.length - 6, 4)); // Minimum of 4 asterisks

  return `${visible}${masked}@${domain}`;
}
