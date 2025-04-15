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
