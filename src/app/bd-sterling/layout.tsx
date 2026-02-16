import { DisclaimerBanner } from "@/components/sterling/DisclaimerBanner";

export default function BDSterlingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DisclaimerBanner />
      {children}
    </>
  );
}
