import React from 'react';

interface TrackingProps {
  trackingId: string;
}

export function withTracking<P>(Component: React.ComponentType<any>) {
  const WrappedComponent = React.forwardRef<any, P & TrackingProps>((props, ref) => {
    const { trackingId, ...rest } = props;

    const trackingAttributes = {
      'data-tracking-id': trackingId
    };

    return <Component ref={ref} {...rest} {...trackingAttributes} />;
  });

  WrappedComponent.displayName = `withTracking(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
}
