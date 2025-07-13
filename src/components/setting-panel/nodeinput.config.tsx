// components/NodeInput/config.ts
import React from 'react';
import MessageInput from './input-types/MessageInput';

export type InputComponentProps = {
  value: string;
  onChange: (value: string) => void;
};

type NodeInputTypeMap = Record<
  string,
  React.FC<InputComponentProps>
>;

export const nodeInputComponentMap: NodeInputTypeMap = {
  message: MessageInput,
};
