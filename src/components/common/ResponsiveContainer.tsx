import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = '7xl',
  padding = 'md'
}) => {
  const { isMobile, isTablet } = useResponsive();

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
    xl: 'px-8 sm:px-12 lg:px-16'
  };

  // 根据设备类型调整容器样式
  const getResponsiveClasses = () => {
    let classes = `${maxWidthClasses[maxWidth]} mx-auto ${paddingClasses[padding]}`;
    
    if (isMobile) {
      // 移动端优化
      classes += ' min-h-0'; // 避免最小高度问题
    } else if (isTablet) {
      // 平板端优化
      classes += ' ';
    } else {
      // 桌面端优化
      classes += ' ';
    }

    return classes;
  };

  return (
    <div className={`${getResponsiveClasses()} ${className}`}>
      {children}
    </div>
  );
};