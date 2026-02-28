const BASE_URL = "https://web.timingapp.com/api/v1";

export function getToken(): string {
  const token = process.env.TIMING_API_TOKEN;
  if (!token) {
    console.error("Error: TIMING_API_TOKEN environment variable is not set.");
    console.error("Set it in your shell or .env file. Generate one at Timing → API Keys.");
    process.exit(1);
  }
  return token;
}

export function getBaseUrl(): string {
  return BASE_URL;
}
