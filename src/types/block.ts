export type BlockType = 'line' | 'bar' | 'text';

export interface Block {
  id: string;
  type: BlockType;
}