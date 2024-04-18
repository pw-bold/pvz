/**
 * @hook useLinkedin
 * @description This hook is used to get the linkedin profile of the user by using scrapin API.
 * @param {string} linkedinUrl - The linkedin profile URL of the user.
 */
interface LinkedInProfile {
  publicIdentifier: string;
  linkedInIdentifier: string;
  linkedInUrl: string;
  firstName: string;
  lastName: string;
  headline: string;
  location: string;
  photoUrl: string;
  creationDate: {
    year: number;
    month?: number;
  };
  followerCount?: number;
  connectionCount?: number;
  positions: any;
  schools: any;
  skills: string[];
  languages: string[];
}

export interface GeneralData {
  success: boolean;
  person: LinkedInProfile;
}

interface UseLinkedinHookProps {
  profile: GeneralData | null;
  loading: boolean;
  error: string | null;
}


/**
 * Fetches LinkedIn profile data from an API.
 * @param {string} linkedinUrl - The LinkedIn profile URL to query.
 * @returns {Promise<UseLinkedinHookProps>} An object containing the profile data or an error.
 */
const getLinkedinProfile = async (linkedinUrl: string): Promise<UseLinkedinHookProps> => {
  if (!linkedinUrl) {
    return { profile: null, loading: false, error: 'No LinkedIn URL provided' };
  }

  // todo: maybe add two more keys just in case and method to switch between them if one returns error
  const API_KEY = import.meta.env.VITE_SCRAPIN_KEY_1 as string;

  try {
    const response = await fetch(`/api?apikey=${API_KEY}&linkedinUrl=${encodeURIComponent(linkedinUrl)}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json() as GeneralData;
    return { profile: data, loading: false, error: null };
  } catch (err) {
    return {
      profile: null,
      loading: false,
      error: err instanceof Error ? err.message : 'An unknown error occurred'
    };
  }
};

export default getLinkedinProfile;
