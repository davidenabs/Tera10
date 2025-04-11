// For test: a proper middleware or authorization logic to handle this
export const getUserRoleFromPath = (pathname: string, navItems: object) => {
  const roleKeys = Object.keys(navItems); // Get all available roles
  return (
    roleKeys.find((role) => pathname.includes(role.toLowerCase())) || "DEFAULT"
  ); // Fallback role
};
