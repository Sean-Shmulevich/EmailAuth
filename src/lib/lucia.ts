import lucia from 'lucia-auth';
import prisma from '@lucia-auth/adapter-prisma';
import { sveltekit } from 'lucia-auth/middleware';
import { idToken } from '@lucia-auth/tokens';
import { prismaClient } from '$lib/db';

export const auth = lucia({
	env: import.meta.env.DEV ? 'DEV' : 'PROD',
	adapter: prisma(prismaClient),
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			email: userData.email,
			name: userData.name,
			emailVerified: userData.email_verified,
			adminVerified: userData.admin_verified,
			isAdmin: userData.is_admin,
			isBrand: userData.is_brand
		};
	}
});

export type Auth = typeof auth;

export const emailVerificationToken = idToken(auth, 'email_verification', {
	length: 6,
	expiresIn: 60 * 60
});

export const passwordResetToken = idToken(auth, 'email_reset', {
	expiresIn: 60 * 60
});
