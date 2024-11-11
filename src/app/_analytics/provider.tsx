// app/providers.tsx
"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { use, useEffect } from "react";

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
      person_profiles: "identified_only",
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
    });
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
}

const PostHogAuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const userInfo = useUser();
  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses[0]?.emailAddress,
      });
    } else if (!auth.isSignedIn) {
      posthog.reset();
    }
  }, [auth, userInfo]);

  return children;
};
