/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  type ReactNode,
} from 'react';
import type { Block, BlockType } from '../types/block';

interface GridContextValue {
  grid: (Block | null)[];
  addBlock: (type: BlockType) => void;
}

interface GridContextValue {
  grid: (Block | null)[];
  addBlock: (type: BlockType) => void;
  deleteBlock: (id: string) => void;
}

const GridContext = createContext<GridContextValue | undefined>(undefined);

interface GridProviderProps {
  children: ReactNode;
}

const COLUMNS_COUNT = 3;

function createEmptyRow(columns = COLUMNS_COUNT): (Block | null)[] {
  return Array.from({ length: columns }, () => null);
}

function createBlock(type: BlockType): Block {
  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${type}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  return { id, type };
}

function addBlockToGrid(prev: (Block | null)[], block: Block): (Block | null)[] {
  let next = [...prev];

  if (next.length === 0) {
    next = createEmptyRow();
  }

  let emptyIndex = next.findIndex((cell) => cell === null);

  if (emptyIndex === -1) {
    const startIndex = next.length;
    const newRow = createEmptyRow();
    next = [...next, ...newRow];
    emptyIndex = startIndex;
  }

  next[emptyIndex] = block;
  return next;
}

function deleteBlockFromGrid(prev: (Block | null)[], id: string): (Block | null)[] {
  return prev.map((cell) => {
    if (!cell) return cell;
    return cell.id === id ? null : cell;
  });
}

export function GridProvider({ children }: GridProviderProps) {
  const [grid, setGrid] = useState<(Block | null)[]>([]);

  const addBlock = useCallback((type: BlockType) => {
    const block = createBlock(type);
    setGrid((prev) => addBlockToGrid(prev, block));
  }, []);

  const deleteBlock = useCallback((id: string) => {
    setGrid((prev) => deleteBlockFromGrid(prev, id));
  }, []);

  const value = useMemo(
    () => ({
      grid,
      addBlock,
      deleteBlock,
    }),
    [grid, addBlock, deleteBlock],
  );

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}

export function useGrid() {
  const context = useContext(GridContext);

  if (!context) {
    throw new Error('useGrid must be used within a GridProvider');
  }

  return context;
}