// const authenticationBaseUrl = `http://localhost:8080`;
// const customerBaseUrl = `http://localhost:8083`;
// const businessBaseUrl = `http://127.0.0.1:8000`;
const authenticationBaseUrl = `https://authentication-service.mestechgh.com`;
const customerBaseUrl = `https://customer-management-service.mestechgh.com`;
const onboardServiceBaseUrl = `https://onboarding-service.mestechgh.com`;
const bulkUploadBaseUrl = `https://upload-service.mestechgh.com`;

const authenticationApiEndpoints = `${authenticationBaseUrl}/v1`;
const customerApiEndpoints = `${customerBaseUrl}/v1`;

// USERS ENDPOINT
const users = `${customerApiEndpoints}/users`;
// CUSTOMERS ENDPOINT
const customers = `${customerApiEndpoints}/customers`;
// CUSTOMERS CATEGORIES
const customerCategories = `${customerApiEndpoints}/customer-categories`;
// CUSTOMER ACCOUNTS
const customerAccounts = `${customerApiEndpoints}/accounts`;
// NEWSLETTER
const newsletterCustomers = `${customerApiEndpoints}/newsletter`;
// AUTHENTICATION API
const authenticateLocal = `${authenticationApiEndpoints}/auth`;
// AUTHENTICATION OAUTH
const authenticateOAuth = `${authenticationApiEndpoints}/oauth`;
// ONBORD
const onboardBaseUrl = `${onboardServiceBaseUrl}/api`

export const ROUTES = {
   ///////// THIRD PARTY ENDPOINTS /////
   // CUSTOMER PORTAL
//    customerPortal: customerPortalUrl,
    // GET CUSTOMER SUBSCRIPTION
    // getCustomerSubscription: (leadId) => `${customersApiEndPointBase}/subscription/${leadId}`, // Append lead ID
    // GET CUSTOMER SUBSCRIPTION WITH ACCOUNT NUMBER
    // getCustomerSubscriptionWithAccountNumber: (accountNumber) => `${customersApiEndPointBase}/subscription/accountnumber?accountnumber=${accountNumber}`, // Account number should be appended

    // SIGN UP
    signUp: `${users}/sign-up`,
    // SIGN IN
    login: `${authenticateLocal}/login`,
    
    // ONBOARD BUSINESS DETAILS
    onboard: `${onboardBaseUrl}/onboard/business-details/`,
    // GET BUSINESS DETAILS
    getBusinessDetails: `${onboardBaseUrl}/onboard/get-business-details/`,
    // AUTHORIZE OR REJECT
    authorizeBusinessDetails: `${onboardBaseUrl}/onboard/authorize-business/`,
    // DOWNLOAD FILE
    downloadFileUrl: `${onboardBaseUrl}/onboard/download-file/`,
    // VIEW DIRECTOR IDS
    viewDirectorIdsUrl: `${onboardBaseUrl}/onboard/view-director-images/`,
}





