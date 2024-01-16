interface VerificationResult {
    success: boolean;
    data?: any;
    error?: string;
}
declare function verifyNIN(nin: string): Promise<VerificationResult>;
export { verifyNIN };
//# sourceMappingURL=index.d.ts.map