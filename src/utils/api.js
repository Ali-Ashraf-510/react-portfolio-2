// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Send contact form data to backend
 * @param {Object} data - Form data containing name, email, subject, message
 * @returns {Promise<Object>} Response from the server
 */
export const sendContactForm = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send message');
    }

    return result;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};

/**
 * Fetch data from JSON files (for development)
 * @param {string} filename - Name of the JSON file to fetch
 * @returns {Promise<Object>} JSON data
 */
export const fetchData = async (filename) => {
  try {
    const module = await import(`../data/${filename}.json`);
    return module.default;
  } catch (error) {
    console.error(`Error fetching ${filename}:`, error);
    throw error;
  }
};
