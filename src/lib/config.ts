import { env } from '$env/dynamic/public';

const getProcessEnvValue = (key: string) =>
	typeof process === 'object' ? process.env[key] : undefined;

const config = {
	IS_DEV: import.meta.env.DEV,
	ORIGIN: env.PUBLIC_ORIGIN || getProcessEnvValue('PUBLIC_ORIGIN') || 'http://localhost:5173',
	POCKETBASE_URL:
		env.PUBLIC_POCKETBASE_URL || getProcessEnvValue('PUBLIC_POCKETBASE_URL') || (import.meta.env.DEV
			? 'http://localhost:8090'
			: 'http://pocketbase'),
	HTTPS_ONLY:
		(env.PUBLIC_HTTPS_ONLY || getProcessEnvValue('PUBLIC_HTTPS_ONLY')) === 'true' || false,
	SIGNUP_DISABLED:
		(env.PUBLIC_SIGNUP_DISABLED || getProcessEnvValue('PUBLIC_SIGNUP_DISABLED')) === 'true' || false
};

console.info('Configuration used', config);

export default config;
