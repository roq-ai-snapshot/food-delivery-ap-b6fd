interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: 'Food Delivery App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View restaurant information',
    'View restaurant menus',
    'Place orders',
    'Write reviews for restaurants',
  ],
  ownerAbilities: ['Manage user information', 'Manage restaurant information', 'Manage menu items', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7285979e-031e-4ff5-b47a-2c98ddd90efc',
};
