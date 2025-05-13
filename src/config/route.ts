const developerPrefix = "/developer";
const managerPrefix = "/manager";
export const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    SET_PROFILE: "/auth/set-profile",
    FORGET_PASSWORD: "/auth/forget-password",
    CHANGE_PASSWORD: "/auth/change-password",
  },
  ONBOARDING: {
    DEVELOPER: {
      EMAIL: `${developerPrefix}/onboarding/email`,
      VERIFY_EMAIL: `${developerPrefix}/onboarding/v-email`,
      CONSOLE_OVERVIEW: `${developerPrefix}/onboarding/console-overview`,
      KYC: `${developerPrefix}/onboarding/kyc`,
      THANK_YOU: `${developerPrefix}/onboarding/thank-u`,
    },
  },
  UNAUTHORIZED: "/unauthorized",
  DASHBOARD: {
    DEVELOPER: {
      HOME: `${developerPrefix}/dashboard`,
      MILESTONE: `${developerPrefix}/milestone`,
      ADD_ASSETS: `${developerPrefix}/add-assets`,
      LISTING: `${developerPrefix}/listings`,
      PORTFOLIO: `${developerPrefix}/portfolio`,
      WALLET: `${developerPrefix}/wallet`,
      PROFILE: `${developerPrefix}/profile`,
    },
    MANAGER: {
      HOME: `${managerPrefix}/dashboard`,
      APPROVALS: `${managerPrefix}/approvals`,
      MARKETS: `${managerPrefix}/market`,
      COMMUNICATION: `${managerPrefix}/communications`,
      INSIGHT: `${managerPrefix}/insight`,
      PROFILE: `${managerPrefix}/profile`,
    },
  },
  PROFILE: `/profile`,
  SETTINGS: "/settings",
};
