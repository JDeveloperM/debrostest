import React from 'react';
import { useHashRouter } from '../../utils/hashRouter';

// Import all page components
import HomePage from '../../pages/home';
import PricingPage from '../../pages/pricing';
import TeamPage from '../../pages/team';
import RoadmapPage from '../../pages/roadmap';
import BlogPage from '../../pages/blog';
import BlogDetailsPage from '../../pages/blog-details';
import HelpPage from '../../pages/help';
import UtilizePage from '../../pages/utilize';
import StyleGuidePage from '../../pages/styleguide';
import PrivacyPolicyPage from '../../pages/privacy-policy';
import TermsPolicyPage from '../../pages/terms-policy';
import ProfileDetailsPage from '../../pages/profile-details';
import AppearancePage from '../../pages/appearance';
import SessionsPage from '../../pages/sessions';
import PlansBillingPage from '../../pages/plans-billing';
import ApplicationPage from '../../pages/application';
import NotificationPage from '../../pages/notification';
import NotFoundPage from '../../pages/404';

const RouteRenderer = () => {
  const router = useHashRouter();
  const currentPath = router.pathname || '/';

  // Route mapping
  const routes = {
    '/': HomePage,
    '/home': HomePage,
    '/pricing': PricingPage,
    '/team': TeamPage,
    '/roadmap': RoadmapPage,
    '/blog': BlogPage,
    '/blog-details': BlogDetailsPage,
    '/help': HelpPage,
    '/utilize': UtilizePage,
    '/styleguide': StyleGuidePage,
    '/privacy-policy': PrivacyPolicyPage,
    '/terms-policy': TermsPolicyPage,
    '/profile-details': ProfileDetailsPage,
    '/appearance': AppearancePage,
    '/sessions': SessionsPage,
    '/plans-billing': PlansBillingPage,
    '/application': ApplicationPage,
    '/notification': NotificationPage,
  };

  // Handle dynamic routes (basic implementation)
  const matchDynamicRoute = (path) => {
    // Handle blog details with dynamic slug
    if (path.startsWith('/blog-details/')) {
      return BlogDetailsPage;
    }
    return null;
  };

  // Get the component to render
  let ComponentToRender = routes[currentPath];
  
  // If no exact match, try dynamic routes
  if (!ComponentToRender) {
    ComponentToRender = matchDynamicRoute(currentPath);
  }
  
  // If still no match, show 404
  if (!ComponentToRender) {
    ComponentToRender = NotFoundPage;
  }

  return <ComponentToRender />;
};

export default RouteRenderer;
