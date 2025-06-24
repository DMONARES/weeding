const config = useRuntimeConfig();
const BASE_URL = config.public.apiBaseUrl;

export default {
  login: `${BASE_URL}/login`,
  addGuest: `${BASE_URL}/guest`,
  getGuests: `${BASE_URL}/guests`,
  editGuest: (id: number | string) => `${BASE_URL}/guest/${id}`,
  deleteGuest: (id: number | string) => `${BASE_URL}/guest/${id}`,
};
