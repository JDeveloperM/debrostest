import { createContext, useContext, useEffect, useState } from 'react';

// Create context for hash routing
const HashRouterContext = createContext();

// Hash Router Provider Component
export const HashRouterProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize current path from hash
  useEffect(() => {
    const getHashPath = () => {
      const hash = window.location.hash;
      return hash ? hash.substring(1) : '/';
    };

    setCurrentPath(getHashPath());

    // Listen for hash changes
    const handleHashChange = () => {
      const newPath = getHashPath();
      setCurrentPath(newPath);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation function
  const push = (path) => {
    setLoading(true);
    const hashPath = path.startsWith('/') ? `#${path}` : `#/${path}`;
    window.location.hash = hashPath;
    setTimeout(() => setLoading(false), 100); // Brief loading state
  };

  // Replace function (doesn't add to history)
  const replace = (path) => {
    setLoading(true);
    const hashPath = path.startsWith('/') ? `#${path}` : `#/${path}`;
    window.location.replace(window.location.pathname + hashPath);
    setTimeout(() => setLoading(false), 100);
  };

  // Back function
  const back = () => {
    window.history.back();
  };

  // Forward function
  const forward = () => {
    window.history.forward();
  };

  const router = {
    pathname: currentPath,
    asPath: currentPath,
    push,
    replace,
    back,
    forward,
    events: {
      on: () => {},
      off: () => {},
    }
  };

  return (
    <HashRouterContext.Provider value={{ router, loading }}>
      {children}
    </HashRouterContext.Provider>
  );
};

// Custom hook to use hash router
export const useHashRouter = () => {
  const context = useContext(HashRouterContext);
  if (!context) {
    throw new Error('useHashRouter must be used within a HashRouterProvider');
  }
  return context.router;
};

// Custom hook to get loading state
export const useHashRouterLoading = () => {
  const context = useContext(HashRouterContext);
  if (!context) {
    throw new Error('useHashRouterLoading must be used within a HashRouterProvider');
  }
  return context.loading;
};

// Route matching utility
export const matchRoute = (currentPath, routePath) => {
  // Handle exact matches
  if (currentPath === routePath) return true;
  
  // Handle root path
  if (routePath === '/' && (currentPath === '' || currentPath === '/')) return true;
  
  // Handle dynamic routes (basic implementation)
  const currentSegments = currentPath.split('/').filter(Boolean);
  const routeSegments = routePath.split('/').filter(Boolean);
  
  if (currentSegments.length !== routeSegments.length) return false;
  
  return routeSegments.every((segment, index) => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      return true; // Dynamic segment matches anything
    }
    return segment === currentSegments[index];
  });
};

// Component to render based on current route
export const HashRoute = ({ path, component: Component, exact = false }) => {
  const router = useHashRouter();
  
  const isMatch = exact 
    ? router.pathname === path 
    : matchRoute(router.pathname, path);
  
  return isMatch ? <Component /> : null;
};
