import React, { useEffect, useRef, useState } from 'react';
import { Text, Animated } from 'react-native';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  delay?: number;
  style?: any;
  testID?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1500,
  delay = 0,
  style,
  testID = 'animated-counter',
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const animatedValue = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Extract numeric value from string (remove $ and commas)
  const getNumericValue = (valueStr: string): number => {
    const cleanValue = valueStr.replace(/[$,]/g, '');
    return parseFloat(cleanValue) || 0;
  };

  // Format number back to currency string
  const formatCurrency = (num: number): string => {
    if (value.includes('$')) {
      return `$${num.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}`;
    }
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  useEffect(() => {
    const targetValue = getNumericValue(value);
    
    // Reset animation
    animatedValue.setValue(0);
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Apply delay before starting animation
    const delayTimer = setTimeout(() => {
      // Start counting animation
      const startTime = Date.now();
      const startValue = 0;
      
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smoother easing function - easeOutExpo
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = startValue + (targetValue - startValue) * easeOutExpo;
        
        setDisplayValue(formatCurrency(currentValue));
        
        if (progress >= 1) {
          setDisplayValue(value);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, 8); // ~120fps for smoother animation
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [value, duration, delay]);

  return (
    <Text style={style} testID={testID}>
      {displayValue}
    </Text>
  );
};

export default AnimatedCounter; 