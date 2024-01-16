import axios from "axios";

interface VerificationResult {
	success: boolean;
	data?: any;
	error?: string;
}

async function verifyNIN(nin: string): Promise<VerificationResult> {
	try {
		const response = await axios.post(
			`https://ors.brela.go.tz/um/load/load_nida/${nin}`
		);

		console.log(response.data);
		return {
			success: true,
			data: response.data,
		};
	} catch (error) {
		if (error instanceof Error) {
			return {
				success: false,
				error: error.message,
			};
		} else if (typeof error === "string") {
			return {
				success: false,
				error: error,
			};
		} else {
			return {
				success: false,
				error: "An unknown error occurred",
			};
		}
	}
}

export { verifyNIN };
