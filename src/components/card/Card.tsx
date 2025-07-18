import React from 'react';
import { Card as PaperCard } from 'react-native-paper';

const Card: React.FC<{ style?: object; children: React.ReactNode }> = ({
  style,
  children,
}) => (
  <PaperCard style={[{ marginVertical: 8, borderRadius: 8 }, style]}>
    <PaperCard.Content>{children}</PaperCard.Content>
  </PaperCard>
);

export default Card;
