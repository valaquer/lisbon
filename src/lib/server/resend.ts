import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

export async function sendVerificationEmail(email: string, token: string) {
	const apiKey = env.RESEND_API_KEY;
	if (!apiKey) {
		throw new Error('RESEND_API_KEY is not set');
	}

	const resend = new Resend(apiKey);
	const verifyUrl = `https://provoque.ai/verify?token=${token}`;

	const { error } = await resend.emails.send({
		from: 'Provoque AI <hello@provoque.ai>',
		to: email,
		subject: 'Confirm your email — Provoque AI',
		html: `
			<div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
				<h1 style="font-size: 24px; color: #111;">Welcome to Provoque AI</h1>
				<p style="font-size: 16px; color: #333; line-height: 1.5;">
					Please confirm your email by clicking the link below.
				</p>
				<p style="margin: 32px 0;">
					<a href="${verifyUrl}" style="background: #111; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 16px;">
						Confirm Email
					</a>
				</p>
				<p style="font-size: 14px; color: #666; line-height: 1.5;">
					This link expires in 48 hours.
				</p>
				<p style="font-size: 14px; color: #666; line-height: 1.5;">
					If you didn't sign up for Provoque AI, you can ignore this email.
				</p>
			</div>
		`
	});

	if (error) {
		throw error;
	}
}
