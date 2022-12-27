import posthog from 'posthog-js';

const ANALYTICS_LOCALHOST_ENABLE = true;

/**
 *
 */
export const isAnalyticsEnabled = () => {
  const isLocalhost =
    window.location.href.includes('127.0.0.1') ||
    window.location.href.includes('localhost');
  return !isLocalhost || ANALYTICS_LOCALHOST_ENABLE;
};

/**
 * Init analytics.
 */
export const initAnalytics = () => {
  if (isAnalyticsEnabled()) {
    if (!!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: 'https://app.posthog.com',
      });
    } else console.error('Env:NEXT_PUBLIC_POSTHOG_KEY is missing');
  }
};

/**
 * Generic Analytic Event
 */
export const analyticsEvent = (event: string, properties?: any) => {
  if (isAnalyticsEnabled()) posthog.capture(event, properties);
};

/**
 * Handle page view event.
 */
export const analyticsPageViewEvent = () => analyticsEvent('pageView');

/**
 * Handle connect account event.
 *
 * @param {string} account Account address.
 */
export const analyticsConnectAccountEvent = (account: string) => {
  if (isAnalyticsEnabled()) {
    posthog.capture('connectedAccount', {
      account: account.toLowerCase(),
    });
    posthog.alias(account.toLowerCase());
  }
};

/**
 * Track Errors
 */
export const analyticsCatchErrorEvent = (error: Error, additional: any = {}) =>
  analyticsEvent('catchedError', {
    errorMessage: error?.message,
    errorStack: error?.stack,
    ...additional,
  });

/**
 * Handle create own profile event.
 */
export const analyticsCreateOwnProfileEvent = () =>
  analyticsEvent('createdOwnProfile');

/**
 * Handle edit own profile event.
 */
export const analyticsEditOwnProfileEvent = () =>
  analyticsEvent('editedOwnProfile');

/**
 * Handle create case event.
 */
export const analyticsCreateCaseEvent = () => analyticsEvent('createdCase');

/**
 * Handle nominate to case event.
 * /
export const analyticsNominateToCaseEvent = (caseId: string, nominated, role) => analyticsEvent('nominatedToCase', { case nominated: nominated,
      role: role,
    });

/**
 * Handle add case evidence event.
 */
export const analyticsAddCaseEvidenceEvent = (caseId: string) =>
  analyticsEvent('addedCaseEvidence', { case: caseId });

/**
 * Handle comment case event.
 */
export const analyticsCommentCaseEvent = (caseId: string) =>
  analyticsEvent('commentedCase', { case: caseId });

/**
 * Handle confirm case event.
 */
export const analyticsConfirmCaseEvent = (caseId: string) =>
  analyticsEvent('confirmedCase', { case: caseId });

/**
 * Handle make case verdict event.
 */
export const analyticsMakeCaseVerdictEvent = (caseId: string) =>
  analyticsEvent('madeCaseVerdict', { case: caseId });

/**
 * Handle cancel case event.
 */
export const analyticsCancelCaseEvent = (caseId: string) =>
  analyticsEvent('canceledCase', { case: caseId });

/**
 * Handle join game event.
 */
export const analyticsJoinGameEvent = (game: string) =>
  analyticsEvent('joinedGame', { game });

/**
 * Handle leave game event.
 */
export const analyticsLeaveGameEvent = (game: string) =>
  analyticsEvent('leftGame', { game });

/**
 * Handle make game event
 */
export const analyticsMakeGame = () => analyticsEvent('madeGame');

/**
 * Handle set game uri event.
 */
export const analyticsSetGameUri = (game: string) =>
  analyticsEvent('setGameUri', { game });
